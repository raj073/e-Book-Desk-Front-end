export default function AddNewBook() {
  return (
    <div className="flex items-center mt-5">
      <form
        method="POST"
        id="checkout"
        className="lg:w-1/2 w-full mx-auto bg-white rounded shadow-xl relative py-4"
      >
        <div className="text-gray-900 font-medium text-xs text-center flex flex-col items-center justify-center">
          <img
            className="h-20 w-20 rounded-full shadow-xl border-4 border-gray-400"
            src="https://images.unsplash.com/photo-1523199455310-87b16c0eed11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
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
                  className="h-10 w-10 object-contain mr-2"
                  src="https://upload.wikimedia.org/wikipedia/commons/1/16/Former_Visa_%28company%29_logo.svg"
                  alt="Visa"
                />
                <img
                  className="h-10 w-10 object-contain mr-2"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                  alt="Master card"
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

            <div className="p-2">
              <div className="mb-3 space-y-2 w-full text-xs">
                <label className="font-semibold text-gray-600 py-2 text-base">
                  Book Description
                </label>
                <textarea
                  placeholder="Book Description"
                  className="appearance-none block text-base w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg px-4 min-h-[70px] max-h-[200px]"
                  name="description"
                  id="description"
                />
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
                    name="date"
                    id="date"
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