import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar, Footer } from "../components";
import CourseCard from "../components/CourseCard";
import CourseDetailsModal from "../components/CourseDetailsModal";

const API_BASE = "http://localhost:3000/api/v1";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${API_BASE}/courses`);
        setCourses(
          res.data.data.map(course => ({
            id: course.id,
            img: course.thumbnail_url,
            level: course.difficulty_level,
            title: course.title,
            price: `$${course.price}`,
            courseInfo: "Popular",
            rating: 4,
            description: course.description,
          }))
        );
      } catch (err) {
        console.error(err);
        setError("Failed to load courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter(c => c.courseInfo === selectedCategory);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 p-10">
        <h1 className="text-4xl text-center mb-10">All Courses</h1>

        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {filteredCourses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => {
                setSelectedCourse(course);
                setIsModalVisible(true);
              }}
            />
          ))}
        </div>
      </main>

      <CourseDetailsModal
        course={selectedCourse}
        open={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />

      <Footer />
    </>
  );
};

export default Courses;
