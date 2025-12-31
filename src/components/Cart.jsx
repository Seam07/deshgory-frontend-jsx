import { useState, React } from "react";
import { Footer, ItemDetails, Navbar } from "../components";
import StarRatings from "react-star-ratings";

import { Link } from "react-router-dom";

import {
  AiOutlinePlus,
  AiOutlineMinus,
  RiArrowRightLine,
  RiArrowLeftLine,
  FaTrashAlt,
} from "../icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { course1, course2, course3, tutorAvatar } from "../assets";

const Cart = () => {
  const [CartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Master React & Tailwind CSS",
      instructor: "John Doe",
      price: 49.99,
      image: course1,
      quantity: 1,
    },

    {
      id: 2,
      title: "Advanced JavaScript & ES6",
      instructor: "Jane Smith",
      price: 39.99,
      image: course2,
      quantity: 1,
    },

    {
      id: 3,
      title: "Full-Stack Development with MERN",
      instructor: "David Johnson",
      price: 59.99,
      image: course3,
      quantity: 1,
    },

    {
      id: 4,
      title: "AI & Machine Learning Bootcamp",
      instructor: "Sarah Williams",
      price: 69.99,
      image: course1,
      quantity: 1,
    },
  ]);

  const viewed = [
    {
      img: course1,
      level: "pro",
      title: "How to Make a Pizza in 30 minutes, recipe in description",
      price: "৳129.00",
      tutorName: "James Maximus",
      rating: 2,
    },

    {
      img: course2,
      level: "Begginer",
      title: "How to Make a Pizza in 30 minutes, recipe in description",
      price: "৳9.00",
      tutorName: "James Maximus",
      rating: 4.5,

    },

    {
      img: course3,
      level: "Amateur",
      title: "How to Make a Pizza in 30 minutes, recipe in description",
      price: "৳29.10",
      tutorName: "James Maximus",
      rating: 5,

    },

    {
      img: course1,
      level: "Expert",
      title: "How to Make a Pizza in 30 minutes, recipe in description",
      price: "৳39.00",
      tutorName: "James Maximus",
      rating: 4,

    },

    {
      img: course3,
      level: "pro",
      title: "How to Make a Pizza in 30 minutes, recipe in description",
      price: "৳19.00",
      tutorName: "James Maximus",
      rating: 4.5,

    },

    {
      img: course2,
      level: "pro",
      title: "How to Make a Pizza in 30 minutes, recipe in description",
      price: "৳19.00",
      tutorName: "James Maximus",
      rating: 4,

    },

    {
      img: course3,
      level: "pro",
      title: "How to Make a Pizza in 30 minutes, recipe in description",
      price: "৳19.00",
      tutorName: "James Maximus",
      rating: 5,

    },

    {
      img: course1,
      level: "pro",
      title: "How to Make a Pizza in 30 minutes, recipe in description",
      price: "৳19.00",
      tutorName: "James Maximus",
      rating: 3.5,

    },
  ];

  const similarCourses = [
    {
      img: course3,
      level: "pro",
      title: "How to Make a Pizza in 30 minutes, recipe in description",
      price: "৳129.00",
      tutorName: "James Maximus",
      rating: 2.5,
    },

    {
      img: course1,
      level: "Begginer",
      title: "How to Make a Pizza in 30 minutes, recipe in description",
      price: "৳9.00",
      tutorName: "James Maximus",
      rating: 4.5,
    },

    {
      img: course2,
      level: "Amateur",
      title: "How to Make a Pizza in 30 minutes, recipe in description",
      price: "৳29.10",
      tutorName: "James Maximus",
      rating: 5,
    },

    {
      img: course1,
      level: "Expert",
      title: "How to Make a Pizza in 30 minutes, recipe in description",
      price: "৳39.00",
      tutorName: "James Maximus",
      rating: 3.5,
    },

    {
      img: course2,
      level: "pro",
      title: "How to Make a Pizza in 30 minutes, recipe in description",
      price: "৳19.00",
      tutorName: "James Maximus",
      rating: 2,
    },

    {
      img: course2,
      level: "pro",
      title: "How to Make a Pizza in 30 minutes, recipe in description",
      price: "৳19.00",
      tutorName: "James Maximus",
      rating: 4,
    },

    {
      img: course3,
      level: "pro",
      title: "How to Make a Pizza in 30 minutes, recipe in description",
      price: "৳19.00",
      tutorName: "James Maximus",
      rating: 4,

    },

    {
      img: course1,
      level: "pro",
      title: "How to Make a Pizza in 30 minutes, recipe in description",
      price: "৳19.00",
      tutorName: "James Maximus",
      rating: 4,

    },
  ];

  const removeItem = (id) => {
    setCartItems(CartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCartItems(
      CartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const subtotal = CartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const discount = subtotal > 100 ? 15 : 0;

  const VAT = subtotal * 0.05;

  const total = subtotal - discount + VAT;

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-10">
        <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-6 text-gray-800">
          Shopping Cart
        </h1>

        <div className="grid grid-cols1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {CartItems.length > 0 ? (
              CartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-start md:justify-between p-3 bg-white rounded-md"
                >
                  <div className="flex items-center gap-6">
                    <img
                      src={item.image}
                      alt={item.image}
                      className="w-34 h-30 object-cover rounded-md"
                    />
                    <div>
                      <h1 className="text-lg font-semibold">{item.title}</h1>
                      <p className="text-gray-600 text-sm">
                        By {item.instructor}
                      </p>
                      <p className="text-md font-semibold mt-1">
                        ৳${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="bg-gray-200 p-2 rounded-md cursor-pointer"
                    >
                      <AiOutlineMinus color="#000" size={15} />
                    </button>
                    <span className="text-md font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="bg-gray-200 p-2 rounded-md cursor-pointer"
                    >
                      <AiOutlinePlus color="#000" size={15} />
                    </button>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 cursor-pointer "
                    >
                      <FaTrashAlt size={18} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">Your cart is empty.</p>
            )}
          </div>

          <div className="bg-white rounded-md h-fit p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Subtotal</span>
              <span>৳${subtotal.toFixed(2)} </span>
            </div>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Discount</span>
              <span className="text-green-600">৳${discount.toFixed(2)} </span>
            </div>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>VAT(5%)</span>
              <span>৳${VAT.toFixed(2)} </span>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between text-lg semibold">
              <span>Total</span>
              <span>৳${total.toFixed(2)} </span>
            </div>
            <button
              className="mt-6 w-full bg-purple-600 text-white py-3 rounded-md text-lg font-medium hover:bg-purple-700 transition cursor-pointer"
              disabled={CartItems.lenth === 0}
            >
              Proceed to Checkout
            </button>
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
              1280: { slidesPerView: 4 },
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

                  <h3 className="text-md font-medium mt-3">{view.title}</h3>

                  <p className="text-gray-600 text-sm mt-3">{view.tutorName}</p>
                  <div className="flex items-center mt-2">
                    <StarRatings
                      rating={view.rating}
                      starRatedColor="gold"
                      numberOfStars={5}
                      starDimension="17px"
                      starSpacing="2px"
                    />
                    <span className="ml-2 text-xs text-gray-700 font-semibold">
                      ({view.rating})
                    </span>
                  </div>
                  <p className="text-md font-medium mt-1">৳29.9</p>
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

        <div className="relative flex flex-col items-center justify-center gap-0 w-full mt-5 py-5">
          <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 text-start w-full">
          You might also like

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
              nextEl: ".next-btn2",
              prevEl: ".prev-btn2",
            }}
            modules={[FreeMode, Pagination, Navigation]}
            className="w-full p-5"
            breakpoints={{
              340: { slidesPerView: 1 },
              540: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 4 },
            }}
          >
            {similarCourses.map((courses, index) => (
              <SwiperSlide key={index} className="flex mb-6">
                <div className="bg-white border border-gray-100 rounded-md p-4">
                  <img
                    src={courses.img}
                    alt="course"
                    className="w-full h-32 object-cover rounded-md"
                  />

                  <h3 className="text-md font-medium mt-3">{courses.title}</h3>

                  <p className="text-gray-600 text-sm mt-3">{courses.tutorName}</p>
                  <div className="flex items-center mt-2">
                    <StarRatings
                      rating={courses.rating}
                      starRatedColor="gold"
                      numberOfStars={5}
                      starDimension="17px"
                      starSpacing="2px"
                    />
                    <span className="ml-2 text-xs text-gray-700 font-semibold">
                      ({courses.rating})
                    </span>
                  </div>
                  <p className="text-md font-medium mt-1">৳29.9</p>
                  <button className="mt-3 w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-700 transition cursor-pointer">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex gap-10">
            <button className="prev-btn2 cursor-pointer bg-purple-500 rounded-full p-2">
              <RiArrowLeftLine color="white" size={29} />
            </button>

            <button className="next-btn2 cursor-pointer bg-purple-500 rounded-full p-2">
              <RiArrowRightLine color="white" size={29} />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Cart;
