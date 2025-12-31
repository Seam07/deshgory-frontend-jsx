import { Modal } from "antd";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const CourseDetailsModal = ({ course, open, onClose }) => {
  if (!course) return null;

  return (
    <Modal
      title={course.title}
      open={open}
      onCancel={onClose}
      footer={null}
    >
      <div className="space-y-4">
        <img
          src={course.img}
          alt={course.title}
          className="w-full h-48 object-cover rounded-lg"
        />

        <p>
          <strong>Description:</strong> {course.description}
        </p>

        <p>
          <strong>Level:</strong> {course.level}
        </p>

        <p>
          <strong>Price:</strong> {course.price}
        </p>

        <div className="flex items-center gap-2">
          <StarRatings
            rating={course.rating}
            starRatedColor="orange"
            numberOfStars={5}
            starDimension="15px"
            starSpacing="1px"
          />
          <span>({course.rating})</span>
        </div>

        <Link
          to={`/ItemDetails/${course.id}`}
          state={{ course }}
          onClick={onClose}
          className="block text-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg"
        >
          View More Details
        </Link>
      </div>
    </Modal>
  );
};

export default CourseDetailsModal;
