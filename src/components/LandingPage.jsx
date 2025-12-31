import { React, useState, useEffect } from "react";
import { Navbar, Footer, CourseCard, CourseDetailsModal } from "../components";
import StarRatings from "react-star-ratings";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { FreeMode, Pagination, Navigation } from "swiper/modules";

import { Link } from "react-router-dom";
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";
import axios from "axios";

import {
  RiSearch2Line,
  RiCheckLine,
  RiArrowLeftLine,
  RiArrowRightLine,
} from "../icons";

import {
  heroBg,
  skillImg1,
  skillImg2,
  skillImg3,
  skillImg4,
  category3,
  category4,
  category7,
  category8,
  category9,
  reviewImg1,
  reviewImg2,
  reviewImg4,
  instuctorImg,
  classroomImg,
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
} from "../assets";


const API_BASE = import.meta.env.VITE_API_BASE;

const requirements = [
  {
    img: skillImg1,
    title: "Learn The Essential Skills",
  },

  {
    img: skillImg2,
    title: "Earn Certiftes And Degress",
  },

  {
    img: skillImg3,
    title: "Get Ready for the Next Career",
  },

  {
    img: skillImg4,
    title: "Master at Different Areas",
  },
];

const categories = [
   {
     img: category3,
     title: "Marketing",
   },

   {
     img: category4,
     title: "Developement",
   },

   {
     img: category7,
     title: "Data Analysis",
   },

   {
     img: category8,
     title: "Finance",
   },

   {
     img: category9,
     title: "Buisness",
   },
 ];


const reviews = [
  {
    review:
      "DeshGory’s expert-led courses and tracking tools have streamlined our employee training, enhancing skills and productivity effortlessly.",
    img: reviewImg1,
    work: "Data Analiyst",
    name: "Sakib Shahariar",
    ratings: 4.5,
  },

  {
    review:
      "DeshGory helps our team stay ahead with industry-relevant courses and seamless progress tracking. Highly recommended!",
    img: reviewImg2,
    work: "HR",
    name: "Mis. Tasnin Khan",
    ratings: 4.3,
  },

  {
    review:
      "A game-changer for upskilling! DeshGory offers flexible, high-quality courses perfect for professionals seeking career growth.",
    img: reviewImg4,
    work: "Project Manager",
    name: "Mostasir Rahman",
    ratings: 4,
  },
];

const partners = [
  {
    img: Partner1,
    url: "https://dsebd.org/",
  },

  {
    img: Partner2,
    url: "https://www.primebank.com.bd/",
  },

  {
    img: Partner3,
    url: "https://softbdltd.com/",
  },

  {
    img: Partner4,
    url: "https://www.pmibdchapter.org/",
  },

  {
    img: Partner5,
    url: "https://maxfoundation.org/country/bangladesh/",
  },
];

const LandingPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_BASE}/courses`);
      const mappedCourses = response.data.data.map(course => ({
        id: course.id,
        img: course.thumbnail_url,
        level: course.difficulty_level,
        title: course.title,
        price: `$${course.price}`,
        tutorName: 'Instructor',
        tutorImg: '',
        canceledPrice: '',
        courseInfo: 'Popular',
        courseDiscount: '',
        rating: 4,
        description: course.description,
      }));
      setCourses(mappedCourses);
    } catch (err) {
      setError(err.message || 'Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.courseInfo === selectedCategory);

  return (
    <div>
      <Navbar />
      <main>
        <div className="flex flex-col items-center justify-center relative min-h-[600px] sm:h-[100vh]">
          <img
            className="absolute w-full h-full z-10 object-cover"
            src={heroBg}
            alt=""
          />

          <div className="absolute z-10 w-full h-full bg-[#00000093]"></div>

          <div className="flex lg:flex-row flex-col items-center justify-center lg:justify-start gap-10 relative w-full h-full max-w-[1400px] p-3 sm:p-5 md:p-10">
            <div className="flex flex-col items-start text-start space-y-4 z-10">
              <p
                className="lg:text-3xl text-xl font-semibold text-white"
                style={{ fontFamily: "poppins, sans-serif" }}
              >
                Join Us today to get
              </p>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white font-bold max-w-full lg:max-w-[800px] text-balance leading-[50px] md:leading-[80px]"
                style={{ fontFamily: "poppins, sans-serif" }}
              >
                <span className="text-[#b958f5]">100+</span> Courses Taught By
                {""}
                <span className="text-[#b958f5]"> 10+</span> Top Instructors
              </h1>
              <p className="md:text-2xl text-xl text-gray-50">
                Elevate your educational institution to new heights.
              </p>
              <form action="" className="flex lg:w-fit w-full relative mt-5">
                <input
                  type="text"
                  className="bg-white border border-gray-300 text-gray-700 outline-none w-full lg:min-w-[600px] pr-19 pl-4 py-5 rounded-[8px] placeholder:text-sm lg:placeholder:text-lg  "
                  placeholder="Search courses..."
                />
                <button className="absolute right-0 h-full bg-purple-600 px-5 rounded-tr-[8px] rounded-br-[8px] text-[1em] transition-ease-in-out duration-0.3s cursor-pointer">
                  <RiSearch2Line color="white" size={25} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-start w-full h-full bg-purple-600 p-10">
          <span className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  justify-start gap-10 md:gap-20 max-w-[1400px] mx-auto w-full ">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex items-center gap-4">
                <img
                  src={requirement.img}
                  className="w-[60px] brightness-0 invert "
                  alt=""
                />
                <p className="text-white">{requirement.title}</p>
              </div>
            ))}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-10 mt-5">
          <div className="max-w-[1400px] w-full p-5 md:p-10">
            <h1 className="text-3xl text-gray-700 font-semibold text-center">
              Top Categories
            </h1>
            <span className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-7 w-full my-8">
              {categories.map((category, index) => (
                <Link
                  to="/"
                  key={index}
                  className="group flex md:flex-col items-center w-full gap-4 cursor-pointer hover:bg-purple-500 hover:text-white transition-ease duration-[0.3s] md:px-10 px-4 p-3 md:py-4 rounded-lg border border-gray-200 "
                >
                  <img
                    src={category.img}
                    className="w-[50px] group-hover:brightness-0 group-hover:invert"
                    alt=""
                  />
                  <p>{category.title} </p>
                </Link>
              ))}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-10 mt--2">
          <div className="flex flex-col items-center justify-center w-full max-w-[1400px] p-5 md:p-10">
            <h1 className="text-3xl text-gray-700 font-semibold text-center">
              Most Popular Courses
            </h1>

            <div className="flex w-full items-start md:item-center md:justify-center gap-2 mt-5 whitespace-nowrap overflow-x-auto">
              {["All", "Trending", "Popular", "Featured"].map(
                (category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-lg cursor-pointer hover:bg-purple-500 hover:text-white ${
                      selectedCategory === category
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}{" "}
                  </button>
                )
              )}
            </div>
            

            {loading ? (
              <p className="text-center text-lg">Loading courses...</p>
            ) : error ? (
              <p className="text-center text-lg text-red-500">Error loading courses: {error}</p>
            ) : (
              <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 w-full mt-10">
                {filteredCourses.slice(0,8).map((course, index) => (
                  <CourseCard key={course.id || index} course={course} onClick={() => { setSelectedCourse(course); setIsModalOpen(true); }} />
                ))}
              </div>
            )}

            <Link to="/courses">
              <button className="mt-20 bg-purple-600 hover:bg-purple-700 w-[250px] p-4 rounded-xl text-lg font-semibold text-white border-2 border-purple-300 cursor-pointer transition ease-in-out duration-300">
                View More Courses
              </button>
            </Link>
          </div>
        </div>

        <div className="flex md:flex-row flex-col-reverse h-[100vh] mt-20 overflow-hidden">
          <div className="flex md:w-[50%] relative items-center md:justify-end p-5 md:mx-auto z-0">
            <div className="md:p-10">
              <h1 className="font-semibold text-3xl lg:text-4xl">
                Becom An Instructor
              </h1>
              <p className="text-[15px] md:text-md text-gray-600 mt-2 max-w-[600px]">
                Top instructors from across the globe educate millions of
                students on DeshGory. Renowned experts from various fields
                share their knowledge, empowering learners worldwide.
              </p>

              <ul className="space-y-4 mt-5 text-[15px] md:text-md">
                <li className="flex items-center gap-2">
                  <RiCheckLine
                    color="white"
                    size={19}
                    className="bg-purple-500 rounded-full"
                  />
                  70% Pay from every course
                </li>

                <li className="flex items-center gap-2">
                  <RiCheckLine
                    color="white"
                    size={19}
                    className="bg-purple-500 rounded-full"
                  />
                  70% Pay from every course
                </li>

                <li className="flex items-center gap-2">
                  <RiCheckLine
                    color="white"
                    size={19}
                    className="bg-purple-500 rounded-full"
                  />
                  70% Pay from every course
                </li>

                <li className="flex items-center gap-2">
                  <RiCheckLine
                    color="white"
                    size={19}
                    className="bg-purple-500 rounded-full"
                  />
                  70% Pay from every course
                </li>

                <li className="flex items-center gap-2">
                  <RiCheckLine
                    color="white"
                    size={19}
                    className="bg-purple-500 rounded-full"
                  />
                  70% Pay from every course
                </li>

                <li className="flex items-center gap-2">
                  <RiCheckLine
                    color="white"
                    size={19}
                    className="bg-purple-500 rounded-full"
                  />
                  70% Pay from every course
                </li>
              </ul>

              <button className="flex items-center bg-purple-500 text-white text-lg font-semibold px-6 md:py-4 p-3 rounded-lg cursor-pointer mt-10">
                Start teaching today
              </button>
            </div>
          </div>

          <img
            src={instuctorImg}
            className="md:w-[50%] md:h-full h-[200px] object-cover"
            alt=""
          />
        </div>

        <div className="flex md:flex-row flex-col items-center justify-center px-0 h-[100vh] md:mt-0 mt-20">
          <img
            src={classroomImg}
            className="md:w-[50%] w-[100%] md:h-full h-[200px] object-cover"
            alt=""
          />

          <div className="md:p-10 p-5 w-full">
            <h1 className="font-semibold text-2xl lg:text-4xl text-balance">
              Transform Access to Education
            </h1>

            <p className="text-[15px] md:text-md text-gray-600 mt-2 max-w-[600px]">
              Create an account to receive our newsletter, course
              recommendations and promotions. Create an account to receive our
              newsletter,
            </p>

            <ul className="space-y-4 mt-5 text-[15px] md:text-md">
              <li className="flex items-center gap-2">
                <RiCheckLine
                  color="white"
                  size={19}
                  className="bg-purple-500 rounded-full"
                />
                70% Pay from every course
              </li>

              <li className="flex items-center gap-2">
                <RiCheckLine
                  color="white"
                  size={19}
                  className="bg-purple-500 rounded-full"
                />
                70% Pay from every course
              </li>

              <li className="flex items-center gap-2">
                <RiCheckLine
                  color="white"
                  size={19}
                  className="bg-purple-500 rounded-full"
                />
                70% Pay from every course
              </li>

              <li className="flex items-center gap-2">
                <RiCheckLine
                  color="white"
                  size={19}
                  className="bg-purple-500 rounded-full"
                />
                70% Pay from every course
              </li>

              <li className="flex items-center gap-2">
                <RiCheckLine
                  color="white"
                  size={19}
                  className="bg-purple-500 rounded-full"
                />
                70% Pay from every course
              </li>

              <li className="flex items-center gap-2">
                <RiCheckLine
                  color="white"
                  size={19}
                  className="bg-purple-500 rounded-full"
                />
                70% Pay from every course
              </li>
            </ul>

            <button className="flex items-center bg-purple-500 text-white text-lg font-semibold px-6 md:py-4 p-3 rounded-lg cursor-pointer mt-10">
              Register for free
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-20">
          <div className="relative flex flex-col items-center justify-center gap-0 w-full h-full max-w-[1400px] mx-auto p-5 md:p-10">
            <header className="text-center mb-8">
              <h1 className="text-3xl text-gray-700 font-semibold text-center">
                Testimonials
              </h1>

              <p className="text-gray-800 max-w-[600px] mt-2">
                The ultimate platform for eLearning centers and online courses.
                Users choose DeshGory for its simplicity in building their
                websites effortlessly.
              </p>
            </header>

            <Swiper
              spaceBetween={20}
              freeMode={false}
              autoplay={{
                enabled: true,
                delay: 200,
                disabledOnInteraction: false,
              }}
              loop={true}
              navigation={{
                enabled: true,
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
              }}
              modules={[FreeMode, Pagination, Navigation]}
              className="w-full p-5"
              breakpoints={{
                540: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index} className="flex mb-6">
                  <div className="flex flex-col items-center justify-center text-center gap-3 w-full border border-gray-200 transition-ease duration-[0.3s] p-5 md:p-10 rounded-lg py-6">
                    <div className="border-4 border-purple-100 rounded-full p-1">
                      <img
                        className="w-[160px] h-[160px] rounded-full object-cover"
                        src={review.img}
                        alt="review-image"
                      />
                    </div>
                    <div className="mt-2">
                      <p className="text-xl font-semibold">{review.name}</p>
                      <p className="text-md text-gray=700">{review.work}</p>
                      <StarRatings
                        rating={review?.ratings}
                        starRatedColor="orange"
                        starEmptyColor="gray"
                        starHoverColor="orange"
                        changeRating={(newRating) => console.log(newRating)}
                        numberOfStars={5}
                        name="rating"
                        starDimension="17px"
                      />
                    </div>

                    <span className="flex flex-col item-center justify-center">
                      <p className="text-gray-700 mt-2">{review.review}</p>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex gap-10">
              <button className="prev-btn cursor-pointer bg-purple-500 rounded-full p-2">
                <RiArrowLeftLine color="white" size={29} />
              </button>
              <button className="next-btn cursor-pointer bg-purple-500 rounded-full p-2">
                <RiArrowRightLine color="white" size={29} />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 mt-5 py-20">
          <div className="relative w-full h-full">
            <h1 className="text-3xl text-gray-700 font-semibold text-center">
              Clients Who Love Our Platform
            </h1>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-[1400px] mx-auto p-5 md:p-10 mt-5">
              {partners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <img
                    src={partner.img}
                    alt="partner-img"
                    className="w-[90px] md:w-[120px] h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <CourseDetailsModal course={selectedCourse} open={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
