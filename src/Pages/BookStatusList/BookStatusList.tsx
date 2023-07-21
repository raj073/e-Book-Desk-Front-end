/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import toast from "react-hot-toast";
import Loader from "../../Components/Loader/Loader";
import {
  useGetBookStatusQuery,
  useUpdateIsFinishedReadingMutation,
} from "../../Redux/Features/Books/bookApi";
import { IBook } from "../Types/globalTypes";

export default function BookStatusList() {
  const {
    data: books,
    isLoading,
    isError,
  } = useGetBookStatusQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  });

  const [UpdateIsFinishedReading] = useUpdateIsFinishedReadingMutation();

  const isFinishedReading = books?.isFinishedReading === true;
  console.log("isFinishedReading", isFinishedReading);
  const isButtonDisabledFinishedReading = isFinishedReading ? true : false;
  console.log(
    "isButtonDisabledFinishedReading",
    isButtonDisabledFinishedReading
  );

  const handleUpdateIsFinishedReading = (bookId: string) => {
    const isFinishedReadingData = {
      isFinishedReading: true,
    };

    const options = {
      id: bookId,
      data: isFinishedReadingData,
    };

    try {
      if (books?.isFinishedReading !== true) {
        UpdateIsFinishedReading(options);
        toast.success(`Book Marked as Finished Reading Successfully!`, {
          position: "top-right",
        });
      } else {
        toast.success(`The Book is already Marked as Finished Reading`, {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error(
        "An Error Occurred While Marking the Book as Finished Reading",
        {
          position: "top-right",
        }
      );
    }
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (isError) {
    return <div>Error fetching books.</div>;
  }
  return (
    <div>
      <section className="flex flex-col justify-center antialiased text-gray-600 p-4">
        <div className="h-full">
          <div className="border-b mb-5 flex justify-between px-44">
            <div className="text-purple-600 flex items-center pb-2 pr-2 border-b-2 border-purple-600 uppercase">
              <span className="font-semibold text-2xl inline-block">
                Book List Status
              </span>
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800 text-2xl text-center">
                Book List Status
              </h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-base font-semibold uppercase text-black bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Book Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Genre</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Author</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Book Status
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Action</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-md divide-y divide-gray-100">
                    {books?.data?.map((book: IBook) => (
                      <tr key={book._id}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                className="w-10 h-10 rounded-full"
                                src={book?.photoUrl}
                                alt="Image"
                              />
                            </div>
                            <div className="font-medium text-gray-800">
                              {book?.title}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{book?.genre}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">
                            {book?.author}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-left">
                            {book?.isFinishedReading === true
                              ? "Finished Reading"
                              : book?.bookStatus}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-center">
                            <button
                              onClick={() =>
                                handleUpdateIsFinishedReading(book._id)
                              }
                              disabled={book.isFinishedReading === true}
                              type="button"
                              className="border border-teal-600 bg-teal-700 text-white font-semibold rounded-tr-md rounded-bl-md px-3 py-1 m-2 text-sm transition duration-500 ease select-none hover:bg-teal-900 hover:text-white focus:outline-none focus:shadow-outline"
                            >
                              Finished Reading
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
