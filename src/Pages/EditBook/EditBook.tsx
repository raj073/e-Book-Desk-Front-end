/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FormEvent } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../../Redux/Features/Books/bookApi";
import logo from "../../assets/logo.png";
import { useAppSelector } from "../../Redux/Hooks";

export default function EditBook() {
  const { id } = useParams();

  const { data: bookData, error } = useGetSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  });

  const { user } = useAppSelector((state) => state.user);

  const [updateBook, { isLoading, isError, isSuccess }] =
    useUpdateBookMutation();

  const navigate = useNavigate();

  console.log(isError);
  console.log(isSuccess);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching books.</div>;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const updatedBookData = {
      title: formData.get("title"),
      description: formData.get("description"),
      genre: formData.get("genre"),
      author: formData.get("author"),
      photoUrl: formData.get("photoUrl"),
      publicationDate: formData.get("publicationDate"),
      reviews: formData.get("reviews"),
    };

    const options = {
      id: id,
      data: updatedBookData,
    };

    try {
      if (bookData?.createdBy === user.email) {
        updateBook(options);
        toast.success(`Book is Updated Successfully!`, {
          position: "top-right",
        });
        navigate("/");
      } else {
        toast.error(`You are not Authorized to Update this Book`, {
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
    <div className="flex items-center mt-5">
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="lg:w-1/2 w-full mx-auto bg-white rounded shadow-xl relative py-4"
      >
        <div className="text-gray-900 font-medium text-xs text-center flex flex-col items-center justify-center">
          <img
            className="h-20 w-20 rounded-full shadow-xl border-4 border-gray-400"
            src={logo}
            alt="logo"
          />
          <p className="mx-2 my-3 text-lg">Edit a New Book Catalouge</p>
        </div>
        <div className="py-2 px-4 md:px-8">
          <div className="bg-gray-200 rounded p-2">
            <div className="rounded-t-lg text-xs text-gray-800 w-full flex items-center justify-between border-b border-gray-300">
              <span className="block ml-2 font-semibold text-base">
                Add Book
              </span>
              <div className="flex">
                <img
                  className="h-16 w-16 object-contain mr-2"
                  src={logo}
                  alt="image"
                />
              </div>
            </div>

            <div className="p-2">
              <div className="mb-3 space-y-2 w-full text-xs">
                <label className="font-semibold text-gray-600 py-2 text-base">
                  Book Title
                </label>
                <input
                  placeholder="Book Title"
                  className="appearance-none block text-base w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                  required
                  type="text"
                  name="title"
                  id="title"
                  defaultValue={bookData?.title}
                />
              </div>
            </div>

            <div className="w-full">
              <div className="flex p-2">
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-base text-gray-600 py-2">
                    Description
                  </label>
                  <textarea
                    placeholder="Book Description"
                    className="appearance-none block text-base w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg px-4 min-h-[70px] max-h-[200px]"
                    name="description"
                    id="description"
                    defaultValue={bookData?.description}
                  />
                </div>
                <div className="mb-3 space-y-2 w-full text-xs ml-3">
                  <label className="font-semibold text-base text-gray-600 py-2">
                    Reviews
                  </label>
                  <input
                    placeholder="Reviews"
                    className="appearance-none block text-base w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    required
                    type="text"
                    name="reviews"
                    id="reviews"
                    defaultValue={bookData?.reviews}
                  />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex p-2">
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-base text-gray-600 py-2">
                    Author Name
                  </label>
                  <input
                    placeholder="Author Name"
                    className="appearance-none block w-full text-base bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    required
                    type="text"
                    name="author"
                    id="author"
                    defaultValue={bookData?.author}
                  />
                </div>
                <div className="mb-3 space-y-2 w-full text-xs ml-3">
                  <label className="font-semibold text-base text-gray-600 py-2">
                    Genre
                  </label>
                  <input
                    placeholder="Genre"
                    className="appearance-none block text-base w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    required
                    type="text"
                    name="genre"
                    id="genre"
                    defaultValue={bookData?.genre}
                  />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex p-2">
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-base text-gray-600 py-2">
                    Photo URL
                  </label>
                  <input
                    placeholder="Photo URL"
                    className="appearance-none block w-full text-base bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    required
                    type="text"
                    name="photoUrl"
                    id="photoUrl"
                    defaultValue={bookData?.photoUrl}
                  />
                </div>
                <div className="mb-3 space-y-2 w-full text-xs ml-3">
                  <label className="font-semibold text-base text-gray-600 py-2">
                    Publication Date
                  </label>
                  <input
                    placeholder="Publication Date"
                    className="appearance-none block text-base w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    required
                    type="date"
                    name="publicationDate"
                    id="publicationDate"
                    defaultValue={bookData?.publicationDate}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full">
              <button
                className="h-auto lg:h-12 py-1 lg:py-2 px-2 lg-px-4 text-white text-base font-semibold tracking-wider bg-gray-900 
                rounded-lg uppercase w-full focus:outline-none focus:shadow-outline hover:bg-green-700"
                type="submit"
              >
                Update a Book
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
