import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import StarRatings from "react-star-ratings";

import {
  RiPlayCircleLine,
  RiArrowRightLine,
  RiArrowLeftLine,
  RiBookOpenLine,
  RiUser3Line,
  RiMessage2Line,
  RiCheckLine,
  RiArrowDownSLine,
  RiTvFill,
  RiDownload2Fill,
  RiInfinityLine,
  RiMedal2Fill,
  RiVideoFill,
  RiBook3Fill,
  RiCustomerService2Fill,
  RiHeartLine,
} from "../icons";

import { course1, course2, course3, tutorAvatar } from "../assets";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { FreeMode, Pagination, Navigation } from "swiper/modules";

const viewed = [
  {
    img: course1,
    level: "pro",
    title: "How to Make a Pizza in 30 minutes, recipe in description",
    price: "$129.00",
    tutorName: "James Maximus",
  },

  {
    img: course2,
    level: "Begginer",
    title: "How to Make a Pizza in 30 minutes, recipe in description",
    price: "$9.00",
    tutorName: "James Maximus",
  },

  {
    img: course3,
    level: "Amateur",
    title: "How to Make a Pizza in 30 minutes, recipe in description",
    price: "$29.10",
    tutorName: "James Maximus",
  },

  {
    img: course1,
    level: "Expert",
    title: "How to Make a Pizza in 30 minutes, recipe in description",
    price: "$39.00",
    tutorName: "James Maximus",
  },

  {
    img: course3,
    level: "pro",
    title: "How to Make a Pizza in 30 minutes, recipe in description",
    price: "$19.00",
    tutorName: "James Maximus",
  },

  {
    img: course2,
    level: "pro",
    title: "How to Make a Pizza in 30 minutes, recipe in description",
    price: "$19.00",
    tutorName: "James Maximus",
  },

  {
    img: course3,
    level: "pro",
    title: "How to Make a Pizza in 30 minutes, recipe in description",
    price: "$19.00",
    tutorName: "James Maximus",
  },

  {
    img: course1,
    level: "pro",
    title: "How to Make a Pizza in 30 minutes, recipe in description",
    price: "$19.00",
    tutorName: "James Maximus",
  },
];

const ItemDetails = () => {
  const location = useLocation();
  const course = location.state?.course;
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showMoreRequirements, setShowMoreRequirements] = useState(false);
  const [showMoreLearning, setShowMoreLearning] = useState(false);

  if (!course) {
    return <h1 className="text-center text-2xl mt-10">item not found</h1>;
  }

  const tutor = {
    name: course.tutorName,
    level: course.level,
    avatar: tutorAvatar,
    courses: 12,
    students: 20000,
    reviews: 2500,
    rating: 4.5,
  };

  const requirements = [
    "Basic understanding of HTML, CSS, and JavaScript",
    "Prior experience with React.js fundamentals",
    "Familiarity with Tailwind CSS for styling",
    "Understanding of state management using React hooks (useState, useEffect)",
    "Experience with ES6+ JavaScript features like arrow functions and destructuring",
    "Basic knowledge of Git and GitHub for version control",
    "An IDE (like VS Code) installed for coding",
    "Ability to use the command line (CLI) for running React applications",
    "Understanding of API integration using Fetch or Axios",
    "Willingness to learn and practice advanced React concepts",
    "Some knowledge of Next.js (optional but beneficial)",
    "Patience and curiosity to solve problems and debug code",
  ];

  const learnings = [
    "Build modern and responsive web applications using React.js",
    "Master React hooks like useState, useEffect, and useContext",
    "Use Tailwind CSS to create clean and beautiful UI designs",
    "Manage application state efficiently with React’s built-in features",
    "Work with APIs using Fetch and Axios for data fetching",
    "Implement routing and navigation using React Router",
    "Optimize React applications for performance and reusability",
    "Understand component lifecycle and best practices",
    "Deploy React applications using platforms like Vercel or Netlify",
    "Gain hands-on experience with real-world projects",
    "Learn Next.js fundamentals for server-side rendering (optional)",
    "Enhance problem-solving skills by debugging and troubleshooting issues",
  ];

  const courseFeatures = [
    {
      icon: <RiVideoFill size={20} className="text-gray-700" />,
      text: "22 hours on-demand video",
    },

    {
      icon: <RiDownload2Fill size={20} className="text-gray-700" />,
      text: "20 downloadable resources",
    },

    {
      icon: <RiTvFill size={20} className="text-gray-700" />,
      text: "Access on mobile and TV",
    },

    {
      icon: <RiInfinityLine size={20} className="text-gray-700" />,
      text: "Full lifetime access",
    },

    {
      icon: <RiMedal2Fill size={20} className="text-gray-700" />,
      text: "Certificate of completion",
    },

    {
      icon: <RiBook3Fill size={20} className="text-gray-700" />,
      text: "Bonus eBooks & study materials",
    },

    {
      icon: <RiCustomerService2Fill size={20} className="text-gray-700" />,
      text: "24/7 instructor support",
    },
  ];

  return (
    <div>
      <Navbar />
      <div>
        <div className="relative w-full h-full bg-gray-800 py-5">
          <div className="flex lg:flex-row flex-col gap-10 items-center justify-beween max-w-[1400px] mx-auto px-5 lg:px-10">
            <div className="w-full">
              <span className="pb-2 mt-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl max-w-[700px] text-gray-100 font-semibold">
                  {course.title}
                </h1>
              </span>

              <div className="mt-4">
                <h1 className="font-semibold text-lg md:text-2xl text-gray-100 md-1">
                  About this course
                </h1>
                <p className="text-gray-200 leading-relaxed max-w-[600px]">
                  {course.description || "no description is available"}
                </p>
              </div>
              <div className="flex gap-1 mt-5">
                <h1 className="font-medium text-xl text-gray-200">Level:</h1>
                <span className="text-gray-200 text-lg font-medium">
                  {course.level}
                </span>
              </div>

              <div className="flex gap-1">
                <h1 className="font-medium text-xl text-gray-200">Price:</h1>
                <span className="text-purple-400 text-md font-semibold mt-1">
                  {course.price}
                </span>
              </div>

              <div className="flex items-center mt-2 gap-1">
                <StarRatings
                  rating={tutor.rating}
                  starRatedColor="gold"
                  numberOfStars={5}
                  starDimension="15px"
                  starSpacing="2px"
                />
                <span className="text-xs text-yellow-500 font-semibold">
                  ({tutor.rating})
                </span>
              </div>

              <button className="md:mt-5 mt-3 w-[120px] bg-purple-500 text-white py-2 rounded-md hover:bg-purple-700 transition cursor-pointer">
                Add to Cart
              </button>
            </div>

            {isVideoPlaying ? (
              <iframe
                className="w-full h-[500px] rounded-sm"
                src="https://www.youtube.com/embed/KOIvdbjGx70?autoplay=1&mute=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            ) : (
              <div className="flex items-center justify-center relative w-full h-[500px]">
                <img
                  src={course.img}
                  alt={course.img}
                  className="absolute z-20 w-full h-full object-cover rounded-sm"
                />
                <div className="absolute z-30 bg-[#000000a2] w-full h-full rounded-sm"></div>
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="absolute z-30 flex justify-center items-center bg-black bg-opacity-40 rounded-full p-1 hover:bg-opacity-50 transition cursor-pointer"
                >
                  <RiPlayCircleLine color="#fff" size={50} />
                </button>
                <p className="absolute z-30 text-white bottom-43 font-semibold">
                  Review this Course
                </p>
              </div>
            )}
          </div>
        </div>

        <main className="flex flex-col relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="flex lg:flex-row flex-col-reverse relative py-10 gap-3">
            <div className="lg:w-[70%]">
              <div className="space-y-4 relative gap-5 h-fit">
                <div className="border border-gray-200 p-5 rounded-md">
                  <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-4">
                    Course Requirements
                  </h3>

                  <ul className="list-none space-y-3">
                    {(showMoreRequirements
                      ? requirements
                      : requirements.slice(0, 5)
                    ).map((req, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <RiCheckLine
                          className="mr-2 text-green-500"
                          size={20}
                        />
                        {req}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() =>
                      setShowMoreRequirements(!showMoreRequirements)
                    }
                    className="flex items-center text-purple-500 font-medium mt-3 hover:underline"
                  >
                    {showMoreRequirements ? "Show Less" : "Show More"}
                    <RiArrowDownSLine
                      className={`ml-1 transition-transform duration-300 ${
                        showMoreRequirements ? "rotate-180" : "rotate-0"
                      }`}
                      size={18}
                    />
                  </button>
                </div>

                <div className="border border-gray-200 p-5 rounded-md">
                  <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-4">
                    What You'll Learn
                  </h3>

                  <ul className="list-none space-y-3">
                    {(showMoreLearning ? learnings : learnings.slice(0, 5)).map(
                      (learning, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-700"
                        >
                          <RiCheckLine
                            className="mr-2 text-green-500"
                            size={20}
                          />
                          {learning}
                        </li>
                      )
                    )}
                  </ul>
                  <button
                    onClick={() => setShowMoreLearning(!showMoreLearning)}
                    className="flex items-center text-purple-500 font-medium mt-3 hover:underline"
                  >
                    {showMoreLearning ? "Show Less" : "Show More"}
                    <RiArrowDownSLine
                      className={`ml-1 transition-transform duration-300 ${
                        showMoreLearning ? "rotate-180" : "rotate-0"
                      }`}
                      size={18}
                    />
                  </button>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-3 border border-gray-200 w-full h-fit rounded-lg">
                  <img
                    src={course.tutorAvatar}
                    alt={tutor.name}
                    className="w-full md:w-50 md:h-[100%] sm:h-[400px] h-[350px] rounded-md object-cover"
                  />
                  <div>
                    <h3 className="text-xl text-gray-800 font-semibold">
                      {tutor.name}
                    </h3>
                    <p className="text-gray-600">{tutor.level} instructor</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 text-gray-700">
                        <RiBookOpenLine size={20} className="text-purple-500" />
                        <span className="font-semibold">{tutor.courses}</span>
                        Courses
                      </div>

                      <div className="flex items-center gap-2 text-gray-700">
                        <RiUser3Line size={20} className="text-green-500" />
                        <span className="font-semibold">
                          {tutor.students.toLocaleString()}
                        </span>
                        Students
                      </div>

                      <div className="flex items-center gap-2 text-gray-700">
                        <RiBookOpenLine size={20} className="text-blue-500" />
                        <span className="font-semibold">
                          {tutor.reviews.toLocaleString()}
                        </span>
                        Reviews
                      </div>
                    </div>

                    <p className="text-[15px] text-gray-700 mt-3 max-w-[500px]">
                      {tutor.name} has over 10 years of experience in the
                      industry, teaching thousands of students worldwide.
                    </p>

                    <div className="flex items-center mt-2">
                      <StarRatings
                        rating={tutor.rating}
                        starRatedColor="gold"
                        numberOfStars={5}
                        starDimension="17px"
                        starSpacing="2px"
                      />
                      <span className="ml-2 text-xs text-gray-700 font-semibold">
                        ({tutor.rating})
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-col items-center justify-center gap-0 w-full mt-10 py-10">
                  <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 text-start w-full">
                    You also viewed
                  </h2>

                  <Swiper
                    spaceBetween={20}
                    freeMode={false}
                    autoplay={{
                      enabled: true,
                      delay: 200,
                      disableOnInteraction: false,
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
                      340: { slidesPerView: 1 },
                      540: { slidesPerView: 2 },
                      1024: { slidesPerView: 2 },
                      1280: { slidesPerView: 3 },
                    }}
                  >
                    {viewed.map((view, index) => (
                      <SwiperSlide key={index} className="flex mb-6">
                        <div className="bg-white border border-gray-100 rounded-md p-4">
                          <img
                            src={view.img}
                            alt="course"
                            className="w-full h-32 object-cover rounded-md"
                          />

                          <h3 className="text-md font-medium mt-3">
                            {view.title}
                          </h3>

                          <p className="text-gray-600 text-sm mt-3">
                            {view.tutorName}
                          </p>
                          <p className="text-md font-medium mt-1">$29.9</p>
                          <button className="mt-3 w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-700 transition cursor-pointer">
                            Add to Cart
                          </button>
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
            </div>
            <div className="block lg:sticky z-40 top-28 lg:w-[30%] h-fit bg-white lg:shadow-lg border border-gray-200 p-5 md:px-8 py-6 rounded-md">
              <div className="flex items-center gap-2">
                <p className="font-bold text-2xl text-purple-500">
                  {course.price}
                </p>

                <p className="text-md text-gray-400 line-through">
                  {course.canceledPrice}
                </p>
              </div>

              <div className="flex flex-col items-start gap-2 mt-3">
                <span className="flex gap-2 items-center w-full">
                  <button className="w-full bg-purple-500 hover:bg-purple-600 transition duration-0.3s text-white font-semibold p-2 rounded-md cursor-pointer">
                    Buy now
                  </button>
                  <button className="w-fit bg-purple-500 hover:bg-purple-600 transition duration-0.3s text-white font-semibold px-3 py-2.5 rounded-md cursor-pointer">
                    <RiHeartLine size={20} color="#fff" />
                  </button>
                </span>
                <button className="w-full border-2 border-purple-500 text-purple-500 hover:bg-purple-600 hover:text-white font-semibold p-2 rounded-md cursor-pointer transition duration-0.3s">
                  Add to cart
                </button>
              </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 mt-5">
                    This course includes:
                  </h3>
                  <ul className="space-y-3">
                    {courseFeatures.map((feature, index) =>(
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="mr-3">{feature.icon}</span>
                        {feature.text}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center space-x-5 text-purple-700 font-medium">
                    <button className="hover:underline whitespace-nowrap cursor-pointer">Share</button>
                    <button className="hover:underline whitespace-nowrap cursor-pointer">Gift this course</button>
                    <button className="hover:underline whitespace-nowrap cursor-pointer">Apply Coupon</button>
                  </div>
            </div>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default ItemDetails;
