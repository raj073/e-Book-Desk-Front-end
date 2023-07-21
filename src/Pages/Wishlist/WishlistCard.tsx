/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Link } from "react-router-dom";
import { IBook } from "../Types/globalTypes";

interface IProps {
  book: IBook;
}

export default function WishlistCard({ book }: IProps) {
  return (
    <div className="mb-5 pb-5 w-full lg:flex items-center border-b">
      <div className="h-56 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
        <img
          src={book?.photoUrl}
          alt="bookpic"
          className="lg:h-56 lg:w-48 bg-cover"
        />
      </div>

      <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div>
          <div className="flex justify-between">
            <div className="text-4xl text-indigo-600 uppercase font-medium mb-3 flex items-center hover:text-gray-900 transition duration-500 ease-in-out">
              {book?.title}
            </div>
            <div className="text-2xl text-green-600 uppercase font-medium mb-3 flex items-center hover:text-gray-900 transition duration-500 ease-in-out ps-10">
              Current Book Status: {book?.bookStatus}
            </div>
          </div>
          <div className="text-gray-900 font-bold text-md sm:text-xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">
            Genre: {book?.genre}
          </div>
          <div className="text-gray-700 text-xs sm:text-base mt-2">
            <div className="flex justify-between my-4 text-base font-semibold text-left">
              <div>Author: {book?.author}</div>
              <div className="ml-20">
                Publication Date: {book?.publicationDate.toString()}
              </div>
            </div>
          </div>
          <div className="text-base px-10 flex justify-end">
            <Link to={`/edit-book/${book?._id}`}>
              <button
                type="button"
                className="border border-green-400 bg-green-600 text-white font-semibold 
                        rounded-tl-md rounded-br-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-900 hover:text-white focus:outline-none focus:shadow-outline"
              >
                Currently Reading
              </button>
            </Link>

            <button
              type="button"
              className="border border-purple-600 bg-purple-700 text-white font-semibold rounded-tr-md 
              rounded-bl-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-purple-900 hover:text-white focus:outline-none focus:shadow-outline"
            >
              Plan to Read Soon
            </button>
            <button
              type="button"
              className="border border-teal-600 bg-teal-700 text-white font-semibold rounded-tr-md 
              rounded-bl-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-900 hover:text-white focus:outline-none focus:shadow-outline"
            >
              Finished Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
