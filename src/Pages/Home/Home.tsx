/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import SearchInput from "../../Components/SearchInput/SearchInput";
import { useGetBookQuery } from "../../Redux/Features/Books/bookApi";
import BookList from "../BookList/BookList";
import { IBook } from "../Types/globalTypes";

export default function Home() {
  const { data, isLoading, isError } = useGetBookQuery(undefined);

  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleSearch = (text: string) => {
    setSearchText(text);
    const filtered = data?.data.filter(
      (book: IBook) =>
        book.title.toLowerCase().includes(text.toLowerCase()) ||
        book.author.toLowerCase().includes(text.toLowerCase()) ||
        book.genre.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching books.</div>;
  }

  // Fetch unique genre values and publication years from books data to populate the filtering options
  const uniqueGenres = [
    ...new Set(data?.data.map((book: IBook) => book.genre)),
  ];
  const uniqueYears = [
    ...new Set(data?.data.map((book: IBook) => book.publicationDate)),
  ];

  return (
    <div>
      <SearchInput onSearch={handleSearch}></SearchInput>
      <div>
        <label>Genre:</label>
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">All Genres</option>
          {uniqueGenres.map((genre) => (
            <option key={genre as string} value={genre as string}>
              {genre as string}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Publication Year:</label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">All Years</option>
          {uniqueYears.map((year) => (
            <option key={year as string} value={year as string}>
              {year as string}
            </option>
          ))}
        </select>
      </div>
      <BookList books={searchText ? filteredBooks : data.data} />
      {/* <div className="container mx-auto px-16 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-sm md:max-w-none">
          {books?.data?.map((book: IBook) => (
            <Book key={book._id} book={book} />
          ))}
        </div>
      </div> */}
    </div>
  );
}
