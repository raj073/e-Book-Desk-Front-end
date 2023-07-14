import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center mx-5 md:mx-0 font-primary">
      <div className="md:w-1/3 max-w-sm hidden md:block">
        <h1 className="title-font font-bold text-5xl text-blue-600 text-left ">
          e-Book Desk
        </h1>
        <p className="mt-4 text-2xl font-medium text-black text-left">
          This is a Simple Book Catalogue Application, to store a list of books.
          Books can be added and display.
        </p>
      </div>
      <div className="shadow-2xl p-8">
        <div className="text-center md:text-left">
          <div className="bg-white rounded-t-lg p-2 mt-10">
            <p className="mt-6 text-center text-base text-gray-800 font-medium">
              Login with
            </p>
            <div>
              <div className="flex items-center justify-center space-x-4 mt-3">
                <button className="flex justify-center items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 w-48">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="w-6 h-6 mr-3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    ></path>
                  </svg>
                  Github
                </button>
                <button className="flex justify-center items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 w-48">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-3"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fbc02d"
                      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                    />
                    <path
                      fill="#e53935"
                      d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                    />
                    <path
                      fill="#4caf50"
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                    />
                    <path
                      fill="#1565c0"
                      d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                    />
                  </svg>
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            OR
          </p>
        </div>
        <form>
          <label htmlFor="email" className="text-base font-medium px-1">
            Email
          </label>
          <input
            className="text-sm w-full my-2 px-4 py-2 border border-solid border-gray-300 rounded"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <label htmlFor="password" className="text-base font-medium px-1">
            Password
          </label>
          <input
            className="text-sm w-full mt-2 px-4 py-2 border border-solid border-gray-300 rounded"
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          <div className="text-center md:text-left">
            <button
              className="w-full font-semibold mt-4 bg-blue-600 hover:bg-purple-600 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="mt-5 border-b border-gray-200"></div>
          <div className="mt-3 text-sm flex justify-around items-center text-[#002D74]">
            <p>Don't have an account?</p>
            <Link to={"/signup"}>
              <button className="py-2 px-5 bg-white border rounded-bl-lg rounded-tr-lg font-semibold hover:scale-110 duration-300">
                Create an Account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
