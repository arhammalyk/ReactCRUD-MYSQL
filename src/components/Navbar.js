import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { is_signin } from "../state";

const navigation = [
  { name: "home", to: "/" },
  { name: "Sign in", to: "/signin" },
  { name: "Join", to: "/signup" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Disclosure
      as="nav"
      className={`bg-white transition-all duration-1000 w-full fixed top-0 z-40`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-24">
            <div className="relative flex h-[70px] items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="bg-white flex flex-shrink-0 items-center text-xl">
                  Tasks
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {!localStorage.getItem("token") && (
                      <div>
                        <button
                          onClick={() => {
                            navigate("/signup");
                          }}
                          className="text-black hover:text-gray-700 md:mr-5"
                        >
                          Join
                        </button>
                        <button className="text-gray-300 md:mr-5"> | </button>
                        <button
                          onClick={() => {
                            navigate("/signin");
                          }}
                          className="text-black hover:text-gray-700"
                        >
                          Signin
                        </button>
                      </div>
                    )}
                    {localStorage.getItem("token") && (
                      <div>
                        <button
                          onClick={() => {
                            localStorage.removeItem("token");
                            dispatch(is_signin(false));
                            navigate("/");
                          }}
                          className="text-black hover:text-gray-700"
                        >
                          logout
                        </button>
                      </div>
                    )}
                    {/* {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          `text-black hover:text-gray-400 transition-all duration-200 rounded-md px-3 py-2 text-sm font-medium`
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))} */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.to}
                  className={classNames(
                    item.current
                      ? " text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
