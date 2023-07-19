/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { FormEvent, useRef } from "react";
import { usePostBookMutation } from "../../Redux/Features/Books/bookApi";
import toast from "react-hot-toast";
import logo from "../../assets/logo.png";
import { useAppSelector } from "../../Redux/Hooks";

export default function AddNewBook() {
  const [postBook, { isLoading, isError, isSuccess }] = usePostBookMutation();
  const { user } = useAppSelector((state) => state.user);

  const formRef = useRef<HTMLFormElement>(null);

  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const bookData = {
      title: formData.get("title"),
      description: formData.get("description"),
      genre: formData.get("genre"),
      author: formData.get("author"),
      photoUrl: formData.get("photoUrl"),
      publicationDate: formData.get("publicationDate"),
      createdBy: user.email,
    };

    console.log(bookData);

    try {
      postBook({ data: bookData });
      toast.success(`New Book is Added Successfully!`, {
        position: "top-right",
      });

      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      toast.error("An error occurred while Inserting Data.", {
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
        ref={formRef}
      >
        <div className="text-gray-900 font-medium text-xs text-center flex flex-col items-center justify-center">
          <img
            className="h-20 w-20 rounded-full shadow-xl border-4 border-gray-400"
            src={logo}
            alt="logo"
          />
          <p className="mx-2 my-3 text-lg">Add a New Book Catalouge</p>
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
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full">
              <button
                className="h-auto lg:h-12 py-1 lg:py-2 px-2 lg-px-4 text-white text-base font-semibold tracking-wider bg-gray-900 
                rounded-lg uppercase w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add a Book
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
