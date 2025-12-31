import StarRatings from "react-star-ratings";

const CourseCard = ({ course, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group flex flex-col items-start gap-2 relative border border-gray-200 p-2 rounded-lg overflow-hidden hover:shadow-lg cursor-pointer transition"
    >
      <div className="overflow-hidden w-full">
        <img
          src={course.img}
          alt={course.title}
          className="w-full h-[180px] object-cover rounded-lg group-hover:scale-110 transition"
        />
      </div>

      <span className="flex items-center gap-3 absolute top-5 left-5">
        <p className="bg-purple-600 text-white text-sm px-3 rounded-full">
          {course.courseInfo}
        </p>
        {course.courseDiscount && (
          <p className="bg-green-500 text-white text-sm px-3 rounded-full">
            {course.courseDiscount}
          </p>
        )}
      </span>

      <p className="bg-purple-500 text-purple-50 text-sm px-3 rounded-full">
        {course.level}
      </p>

      <p className="font-medium text-[15px]">{course.title}</p>

      <div className="flex items-center gap-2">
        <StarRatings
          rating={course.rating}
          starRatedColor="orange"
          numberOfStars={5}
          starDimension="15px"
          starSpacing="1px"
        />
        <span className="text-sm text-gray-600">({course.rating})</span>
      </div>

      <span className="flex gap-2">
        <p className="font-semibold text-lg text-purple-900">
          {course.price}
        </p>
        {course.canceledPrice && <p className="text-gray-400 text-md line-through">{course.canceledPrice}</p>}
      </span>
    </div>
  );
};

export default CourseCard;
