/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { usePostReviewMutation } from "../../Redux/Features/Books/bookApi";

import { useAppSelector } from "../../Redux/Hooks";

export default function AddReview() {
  const { id } = useParams();
  const [postReview] = usePostReviewMutation();

  const { user } = useAppSelector((state) => state.user);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const reviewData = {
      review: formData.get("review"),
      reviewedBy: user.email,
    };
    console.log("reviewData:", reviewData);

    const options = {
      id: id,
      data: reviewData,
    };
    console.log(options);

    postReview(options);
  };

  return (
    <div className="flex justify-center rounded-lg shadow-lg shadow-blue-600/50 mt-10">
      <form onSubmit={handleSubmit} className="w-full p-4">
        <div className="mb-2">
          <label htmlFor="review" className="text-lg font-semibold">
            Add a Review
          </label>
          <textarea
            className="w-full mt-4 h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1 min-h-[70px] max-h-[200px]"
            name="review"
            placeholder="Add a Review"
            id="review"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="px-3 py-2 text-base font-semibold text-blue-100 bg-blue-600 rounded hover:bg-green-600 hover:text-white"
          >
            Add Review
          </button>
          <button className="px-3 py-2 text-base text-blue-600 border border-blue-500 rounded ml-4 hover:bg-orange-800 hover:text-white hover:border-none">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
