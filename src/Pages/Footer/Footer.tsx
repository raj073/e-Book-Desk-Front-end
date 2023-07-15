import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black pt-8 pb-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-white">
              Let's Keep in Touch with e-Book Desk
            </h4>
            <h5 className="text-lg mt-2 mb-2 text-white">
              Find us on any kind of Social Networks.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex">
              <a
                href="https://twitter.com"
                target="_blank"
                className="group flex relative"
              >
                <span className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sdark:bg-gray-700 dark:text-teal-300 dark:hover:bg-gray-600 cursor-pointer">
                  <BsTwitter />
                </span>
                <span
                  className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 
            absolute opacity-0 mt-12 text-center"
                >
                  Twitter
                </span>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                className="group flex relative ml-4"
              >
                <span className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sdark:bg-gray-700 dark:text-teal-300 dark:hover:bg-gray-600 cursor-pointer">
                  <FaFacebookF />
                </span>
                <span
                  className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 
            absolute opacity-0 mt-12 text-center"
                >
                  Facebook
                </span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="group flex relative ml-4"
              >
                <span className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sdark:bg-gray-700 dark:text-teal-300 dark:hover:bg-gray-600 cursor-pointer">
                  <FaGithub />
                </span>
                <span
                  className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 
            absolute opacity-0 mt-12 text-center"
                >
                  GitHub
                </span>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 text-white">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 text-white">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation?ref=njs-profile"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://blog.creative-tim.com?ref=njs-profile"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.github.com/creativetimofficial?ref=njs-profile"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms?ref=njs-profile"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy?ref=njs-profile"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us?ref=njs-profile"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white" />
        <div className="flex flex-wrap items-center md:justify-between justify-center text-white">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright ©{" "}
              <span id="get-current-year">{new Date().getFullYear()}</span>
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
              >
                {" "}
                e-Book Desk by &nbsp;
                <a
                  href="https://www.creative-tim.com?ref=njs-profile"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Rajani Kanta Das
                </a>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
