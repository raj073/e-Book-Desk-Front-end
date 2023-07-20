/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from "react-router-dom";
import { useGetReviewQuery } from "../../Redux/Features/Books/bookApi";

export default function ReviewDisplay() {
  const { id } = useParams();
  const { data } = useGetReviewQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  });
  return (
    <div>
      <div className="w-full bg-white shadow-lg rounded-lg dark:bg-gray-700 shadow-blue-600/50 mt-10">
        <p className="ml-2 p-4 font-bold text-black text-lg dark:text-white">
          All Review
          <span className="ml-2 text-sm text-gray-500 dark:text-white">
            ({data?.reviews?.length})
          </span>
        </p>
        <hr className="mx-4" />
        <ul>
          {Array.isArray(data?.reviews) ? (
            data.reviews.map((review: string, index: number) => (
              <li
                key={index}
                className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800"
              >
                <div className="flex items-center justify-start text-sm">
                  <span className="mx-4">{index + 1}</span>
                  <span>{review}</span>
                </div>
              </li>
            ))
          ) : (
            <p className="ml-2 p-4 font-semibold text-lg">
              No Reviews Available!!
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}
