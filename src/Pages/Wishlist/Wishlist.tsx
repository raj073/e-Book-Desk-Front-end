/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { useGetWishlistQuery } from "../../Redux/Features/Books/bookApi";
import { useAppSelector } from "../../Redux/Hooks";
import { IBook } from "../Types/globalTypes";
import WishlistCard from "./WishlistCard";

export default function Wishlist() {
  const {
    data: wishlistBook,
    isLoading,
    error,
  } = useGetWishlistQuery(undefined);

  console.log(wishlistBook?.data.length);

  const { user } = useAppSelector((state) => state.user);
  console.log(user);

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (error) {
    return <div>Error Fetching Books.</div>;
  }
  return (
    <div>
      <div className="max-w-screen-xl mx-auto relative">
        <div className="sm:flex items-start">
          <div className="md:w-full sm:w-6/12 p-8">
            <div className="border-b mb-5 flex justify-between text-sm">
              <div className="text-purple-600 flex items-center pb-2 pr-2 border-b-2 border-purple-600 uppercase">
                <span className="font-semibold text-2xl inline-block">
                  Wishlist Book Details
                </span>
              </div>
            </div>

            {wishlistBook.data.length === 0 ? (
              <div className="flex items-center justify-center mt-10">
                <h1 className="text-3xl font-semibold text-teal-700">
                  There is no Book in Wishlist. Back to
                  <Link to={"/"} className="ml-4">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Home Page
                    </button>
                  </Link>
                  and Add Books
                </h1>
              </div>
            ) : (
              <div>
                {wishlistBook?.data?.map((book: IBook) => (
                  <WishlistCard key={book._id} book={book} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
