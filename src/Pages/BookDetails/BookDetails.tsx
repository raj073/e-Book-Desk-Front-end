/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReviewDisplay from "../../Components/ReviewDisplay/ReviewDisplay";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../../Redux/Features/Books/bookApi";
import { useAppSelector } from "../../Redux/Hooks";
import AddReview from "../AddReview/AddReview";
import "./BookDetails.css";

export default function BookDetails() {
  const { id } = useParams();

  const { data: bookDetails, isLoading, error } = useGetSingleBookQuery(id);

  const [deleteBook] = useDeleteBookMutation();

  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.user);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching books.</div>;
  }

  const handleDelete = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );

    const options = {
      id: id,
      data: bookDetails,
    };

    try {
      if (confirmDelete && bookDetails?.createdBy === user.email) {
        deleteBook(options);
        toast.success(`Book is Deleted Successfully!`, {
          position: "top-right",
        });
        navigate("/");
      } else {
        toast.error(`You are not Authorized to Delete this Book`, {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error("An Error Occurred While Deleting Book.", {
        position: "top-right",
      });
    }
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto relative">
        <div className="sm:flex items-start">
          <div className="md:w-full sm:w-6/12 p-8">
            <div className="border-b mb-5 flex justify-between text-sm">
              <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
                <span className="font-semibold inline-block">Book Details</span>
              </div>
            </div>
            <div className="mb-5 pb-5 w-full lg:flex justify-center items-center border-b">
              <div className="h-56 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <img
                  src={bookDetails?.photoUrl}
                  alt="bookpic"
                  className="h-56 lg:w-48"
                />
              </div>

              <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="">
                  <div className="text-4xl text-indigo-600 uppercase font-medium mb-3 flex items-center hover:text-gray-900 transition duration-500 ease-in-out">
                    {bookDetails?.title}
                  </div>
                  <div className="text-gray-900 font-bold text-md sm:text-xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                    Genre: {bookDetails?.genre}
                  </div>
                  <div className="text-gray-700 text-xs sm:text-base mt-2">
                    <div className="flex justify-between my-4 text-base font-semibold text-left">
                      <div>Author: {bookDetails?.author}</div>
                      <div className="ml-20">
                        Publication Date:{" "}
                        {bookDetails?.publicationDate.toString()}
                      </div>
                    </div>
                    <p className="flex text-base font-semibold my-2">
                      Reviews: {bookDetails?.reviews}
                    </p>
                  </div>
                  <div className="text-base px-10 flex justify-end">
                    <Link to={`/edit-book/${bookDetails?._id}`}>
                      <button
                        type="button"
                        className="border border-green-400 text-black font-semibold rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-900 hover:text-white focus:outline-none focus:shadow-outline"
                      >
                        EDIT
                      </button>
                    </Link>

                    <button
                      onClick={handleDelete}
                      type="button"
                      className="border border-red-400 text-black font-semibold rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-900 hover:text-white focus:outline-none focus:shadow-outline"
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <AddReview></AddReview>
            <ReviewDisplay></ReviewDisplay>
          </div>
        </div>
      </div>
    </div>
  );
}
