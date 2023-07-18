/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../../Redux/Features/Books/bookApi";
import { useAppSelector } from "../../Redux/Hooks";
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
      <div className="container mx-auto px-16 mt-10">
        <div className="grid place-items-center">
          <div className="rounded-md shadow-lg bg-gray-200">
            <div className="md:flex px-4 leading-none w-full">
              <div className="flex-none ">
                <img
                  src={bookDetails?.photoUrl}
                  alt="pic"
                  className="h-72 w-56 rounded-md transform -translate-y-4 border-4 border-gray-300 shadow-lg"
                />
              </div>

              <div className="flex-col">
                <p className="pt-4 px-20 text-4xl font-bold">
                  {bookDetails?.title}
                </p>
                <hr className="hr-text" data-content="" />
                <div className="text-md flex justify-between px-10 my-2">
                  <span className="font-bold text-2xl">
                    Genre: {bookDetails?.genre}
                  </span>
                  <span className="font-bold"></span>
                </div>
                <div className="flex justify-between px-10 my-4 text-base font-semibold text-left">
                  <div>Author: {bookDetails?.author}</div>
                  <div className="ml-10">
                    Publication Date: {bookDetails?.publicationDate.toString()}
                  </div>
                </div>

                <p className="flex text-base font-semibold px-10 my-2">
                  Reviews: {bookDetails?.reviews}/05
                </p>

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
        </div>
      </div>
    </div>
  );
}
