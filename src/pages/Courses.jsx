import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar, Footer } from "../components";
import CourseCard from "../components/CourseCard";
import CourseDetailsModal from "../components/CourseDetailsModal";

const API_BASE = import.meta.env.VITE_API_BASE;

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
        const coursesData = res.data.data;
        const mappedCourses = await Promise.all(
          coursesData.map(async (course) => {
            let rating = 0;
            let tutorName = 'Instructor';
            try {
              const reviewsRes = await axios.get(`${API_BASE}/reviews/course/${course.id}`);
              const reviews = reviewsRes.data.data;
              if (reviews.length > 0) {
                const total = reviews.reduce((sum, r) => sum + r.rating, 0);
                rating = total / reviews.length;
                console.log(`Course ${course.id} has average rating:`, rating);
              }
            } catch (err) {
              console.warn(`Failed to fetch reviews for course ${course.id}:`, err);
            }
            try {
              const userRes = await axios.get(`${API_BASE}/users/${course.creator_id}`);
              tutorName = userRes.data.name || 'Instructor';
            } catch (err) {
              console.warn(`Failed to fetch user for course ${course.id}:`, err);
            }
            return {
              id: course.id,
              img: course.thumbnail_url,
              level: course.difficulty_level,
              title: course.title,
              price: `৳ ${course.price}`,
              courseInfo: "Popular",
              rating,
              description: course.description,
              tutorName,
            };
          })
        );
        setCourses(mappedCourses);
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
