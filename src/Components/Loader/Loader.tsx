export default function Loader() {
  return (
    <div className="h-screen bg-white">
      <div className="flex justify-center items-center h-full">
        <img
          className="h-16 w-16"
          src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
          alt=""
        />
        <span className="text-base font-medium text-gray-500 ps-5">
          Loading...
        </span>
      </div>
    </div>
  );
}
