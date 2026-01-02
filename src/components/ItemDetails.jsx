import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import StarRatings from "react-star-ratings";
import { Collapse } from 'antd';

import {
  RiPlayCircleLine,
  RiArrowRightLine,
  RiBookOpenLine,
  RiUser3Line,
  RiMessage2Line,
  RiCheckLine,
  RiVideoFill,
  RiDownload2Fill,
  RiTvFill,
  RiInfinityLine,
  RiMedal2Fill,
  RiBook3Fill,
  RiCustomerService2Fill,
  RiHeartLine,
  RiHomeLine,
  RiArrowRightSLine,
} from "../icons";

import { tutorAvatar } from "../assets";

const ItemDetails = () => {
  const location = useLocation();
  const course = location.state?.course;
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showMoreRequirements, setShowMoreRequirements] = useState(false);

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
    rating: course.rating,
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

  const courseContent = [
    {
      key: '1',
      label: 'Introduction to React',
      children: (
        <div>
          <p>5 lectures • 30 min</p>
          <ul>
            <li>Welcome to the course</li>
            <li>What is React?</li>
            <li>Setting up the environment</li>
            <li>Hello World app</li>
            <li>Summary</li>
          </ul>
        </div>
      ),
    },
    {
      key: '2',
      label: 'Components and Props',
      children: (
        <div>
          <p>8 lectures • 1 hour</p>
          <ul>
            <li>Creating components</li>
            <li>Props in React</li>
            <li>State vs Props</li>
            <li>Default props</li>
            <li>Prop types</li>
            <li>Children props</li>
            <li>Conditional rendering</li>
            <li>Lists and keys</li>
          </ul>
        </div>
      ),
    },
  ];

  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      comment: "Great course! Learned a lot.",
      date: "2023-10-01"
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment: "Very informative.",
      date: "2023-09-15"
    },
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
      <div className="bg-gray-900 text-white py-10 relative z-10">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 flex lg:flex-row flex-col gap-10">
          <div className="lg:w-2/3">
            <nav className="text-sm text-gray-400 mb-4">
              <RiHomeLine className="inline mr-1" />
              <span>Home</span>
              <RiArrowRightSLine className="inline mx-1" />
              <span>Development</span>
              <RiArrowRightSLine className="inline mx-1" />
              <span>Web Development</span>
              <RiArrowRightSLine className="inline mx-1" />
              <span>{course.title}</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg mb-3">{course.description || "no description is available"}</p>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                <StarRatings
                  rating={tutor.rating}
                  starRatedColor="gold"
                  numberOfStars={5}
                  starDimension="20px"
                  starSpacing="2px"
                />
                <span className="ml-2 text-yellow-500 font-semibold">({tutor.rating})</span>
                <span className="ml-2 text-gray-400">({tutor.reviews.toLocaleString()} ratings)</span>
              </div>
              <span className="text-gray-400">{tutor.students.toLocaleString()} students</span>
            </div>
            <p className="text-gray-400">Created by <span className="text-white font-semibold">{tutor.name}</span></p>
            <div className="flex gap-4 mt-2 text-gray-400">
              <span>English</span>
              <span>Last updated 1/2024</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-10">
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="lg:w-2/3">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {learnings.slice(0, 8).map((learning, index) => (
                  <div key={index} className="flex items-start">
                    <RiCheckLine className="text-green-500 mr-2 mt-1" size={16} />
                    <span>{learning}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Course content</h2>
              <Collapse items={courseContent} />
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="list-disc list-inside space-y-2">
                {(showMoreRequirements ? requirements : requirements.slice(0, 5)).map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
              <button
                onClick={() => setShowMoreRequirements(!showMoreRequirements)}
                className="text-purple-500 mt-3 hover:underline"
              >
                {showMoreRequirements ? "Show less" : "Show more"}
              </button>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p>{course.description || "no description is available"}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Instructor</h2>
              <div className="flex items-start gap-4">
                <img src={tutor.avatar} alt={tutor.name} className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold">{tutor.name}</h3>
                  <p className="text-gray-600">{tutor.level} instructor</p>
                  <div className="flex gap-4 mt-2 text-sm text-gray-600">
                    <span>{tutor.courses} courses</span>
                    <span>{tutor.students.toLocaleString()} students</span>
                    <span>{tutor.reviews.toLocaleString()} reviews</span>
                  </div>
                  <StarRatings
                    rating={tutor.rating}
                    starRatedColor="gold"
                    numberOfStars={5}
                    starDimension="15px"
                    starSpacing="2px"
                  />
                  <p className="mt-2">{tutor.name} has over 10 years of experience...</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Student reviews</h2>
              {reviews.map((review, index) => (
                <div key={index} className="border-b pb-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <StarRatings
                      rating={review.rating}
                      starRatedColor="gold"
                      numberOfStars={5}
                      starDimension="15px"
                      starSpacing="2px"
                    />
                    <span>{review.name}</span>
                    <span className="text-gray-500">{review.date}</span>
                  </div>
                  <p>{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3 relative z-30 lg:-mt-94">
            <div className="sticky top-20 bg-white border border-gray-200 p-3 rounded-lg shadow-lg">
              <div className="mb-4">
                {isVideoPlaying ? (
                  <iframe
                    className="w-full h-60 rounded"
                    src="https://www.youtube.com/embed/KOIvdbjGx70?autoplay=1&mute=1"
                    title="Course preview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="relative w-full h-51 bg-gray-200 rounded flex items-center justify-center cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                    <img src={course.img} alt="Course preview" className="absolute inset-0 w-full h-full object-cover rounded" />
                    {/* <div className="absolute inset-0 bg-black bg-opacity-50 rounded"></div> */}
                    <RiPlayCircleLine size={50} className="text-purple-600 z-30" />
                  </div>
                )}
              </div>

              <div className="mb-4">
                <div className="text-3xl font-bold text-purple-600">{course.price}</div>
                {course.canceledPrice && <div className="text-lg text-gray-500 line-through">{course.canceledPrice}</div>}
              </div>

              <div className="space-y-2 mb-4">
                <button className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700">Add to cart</button>
                <button className="w-full border border-purple-600 text-purple-600 py-3 rounded hover:bg-purple-700 hover:text-white">Buy now</button>
              </div>

              <p className="text-sm text-gray-600 mb-4">30-Day Money-Back Guarantee</p>

              <h3 className="font-semibold mb-2">This course includes:</h3>
              <ul className="space-y-2">
                {courseFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <span className="mr-2">{feature.icon}</span>
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ItemDetails;
