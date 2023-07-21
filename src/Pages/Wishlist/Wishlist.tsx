/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
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

  console.log(wishlistBook?.wishlistBook);

  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.user);

  if (isLoading) {
    return <div>Loading...</div>;
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

            {wishlistBook?.wishlistBook?.map((book: IBook) => (
              <WishlistCard key={book._id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
