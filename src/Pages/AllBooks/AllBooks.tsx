export default function AllBooks() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src="product-image.jpg" alt="Product Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Product Title</div>
        <p className="text-gray-700 text-base">Product Description</p>
        <p className="text-gray-600 text-sm mt-2">Genre: Product Genre</p>
        <p className="text-gray-600 text-sm">Author: Author Name</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
          Edit
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-2">
          Delete
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
          Details
        </button>
      </div>
    </div>
  );
}
