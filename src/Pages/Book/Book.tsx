import { IBook } from "../Types/globalTypes";
import "./Book.css";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";

interface IProps {
  book: IBook;
}

export default function Book({ book }: IProps) {
  const { _id, title, genre, publicationDate, author, photoUrl } = book;
  return (
    <div className="flex justify-center items-center bg-blue-lightest shadow-2xl hover:-translate-y-4 transition duration-700">
      <div
        id="app"
        className="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest"
      >
        <img className="w-1/3 h-full rounded-l-sm" src={photoUrl} alt="Image" />
        <div className="w-full flex flex-col">
          <div className="p-4 pb-0 flex-1">
            <h3 className="mb-1 text-xl text-grey-darkest">{title}</h3>
            <div className="text-lg flex items-center mb-2">
              <span>Genre: </span>
              &nbsp;{genre}
            </div>
            <div className="text-lg">
              <div>
                <span>Author: </span>
                &nbsp;{author}
              </div>
              <div className="mt-2">
                <span>Date: </span>
                &nbsp;<span>{publicationDate.toString()}</span>
              </div>
            </div>
            <div className="flex justify-end items-center mb-2">
              <div className="text-xs">
                <Link to={`/addnewbook`}>
                  <button
                    type="button"
                    className="border border-teal-600 bg-teal-700 text-white font-semibold rounded-tr-md rounded-bl-md px-3 py-1 m-2 text-sm transition duration-500 ease select-none hover:bg-teal-900 hover:text-white focus:outline-none focus:shadow-outline"
                  >
                    Add New Book
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <Link to={`/book-details/${_id}`}>
            <div className="bg-blue-100 p-3 text-base font-semibold cursor-pointer flex items-center justify-between transition hover:bg-blue-400 hover:text-white">
              Book Details
              <AiOutlineDoubleRight></AiOutlineDoubleRight>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
