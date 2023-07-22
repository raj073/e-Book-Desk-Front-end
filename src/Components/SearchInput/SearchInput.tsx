import { useState } from "react";

export default function SearchInput({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchText);
  };
  return (
    <div className="container flex justify-center mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-xl items-center md:flex-row gap-3"
      >
        <div className="flex">
          <input
            type="text"
            name="genre"
            id="genre"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Title, Author, Genre or Publication Date"
            className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
          />
          <button
            type="submit"
            className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
