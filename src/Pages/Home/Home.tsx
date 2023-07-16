/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetBookQuery } from "../../Redux/Features/Books/bookApi";
import Book from "../Book/Book";
import { IBook } from "../Types/globalTypes";

export default function Home() {
  const { data, isLoading, isError } = useGetBookQuery(undefined);

  console.log(data?.data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching books.</div>;
  }

  return (
    <div className="container mx-auto px-16 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-sm md:max-w-none">
        {data?.data?.map((book: IBook) => (
          <Book key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}
