/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useDispatch } from "react-redux";
import Loader from "../../Components/Loader/Loader";
import SearchInput from "../../Components/SearchInput/SearchInput";
import { useGetBookQuery } from "../../Redux/Features/Books/bookApi";
import { setSearchQuery } from "../../Redux/Features/Books/bookSlice";
import { useAppSelector } from "../../Redux/Hooks";
import Book from "../Book/Book";
import { IBook } from "../Types/globalTypes";

export default function Home() {
  const { data: books, isLoading, isError } = useGetBookQuery(undefined);

  const dispatch = useDispatch();
  const searchQuery = useAppSelector((state) => state.book.searchQuery);

  const isDateMatch = (date: Date | string, query: string) => {
    const dateString =
      typeof date === "string" ? date : date.toISOString().split("T")[0];

    // Convert the date string to lowercase for case-insensitive comparison
    const lowerCaseDate = dateString.toLowerCase();

    // Convert the query to lowercase for case-insensitive comparison
    const lowerCaseQuery = query.toLowerCase();

    // Check if the formatted date string includes the search query
    return lowerCaseDate.includes(lowerCaseQuery);
  };
  //console.log(isDateMatch(books.publicationDate, searchQuery.toLowerCase()));

  const filteredBooks = books?.data?.filter(
    (book: IBook) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      isDateMatch(book.publicationDate, searchQuery.toLowerCase())
  );

  const handleSearch = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (isError) {
    return <div>Error fetching books.</div>;
  }

  return (
    <div>
      <SearchInput onSearch={handleSearch}></SearchInput>

      {/* <BookList books={searchText ? filteredBooks : data.data} /> */}
      <div className="container mx-auto px-16 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-sm md:max-w-none">
          {/* {books?.data?.map((book: IBook) => (
            <Book key={book._id} book={book} />
          ))} */}

          {searchQuery
            ? filteredBooks?.map((book: IBook) => (
                <Book key={book._id} book={book} />
              ))
            : books?.data?.map((book: IBook) => (
                <Book key={book._id} book={book} />
              ))}
        </div>
      </div>
    </div>
  );
}
