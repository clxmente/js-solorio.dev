import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function NavBar(props) {
  return (
    <Disclosure as="nav" className="rounded-xl bg-gray-800 shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="focus:ring-none inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-900 hover:text-gray-500 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link href={"/"} passHref>
                    <a
                      className={
                        props.active === "home" ? "active-nav" : "inactive-nav"
                      }
                    >
                      home
                    </a>
                  </Link>
                  <Link href={"/contact"} passHref>
                    <a
                      className={
                        props.active === "contact"
                          ? "active-nav"
                          : "inactive-nav"
                      }
                    >
                      contact
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Link href={"/"} passHref>
                <Disclosure.Button
                  as="a"
                  className={
                    props.active === "home" ? "active-nav-m" : "inactive-nav-m"
                  }
                >
                  home
                </Disclosure.Button>
              </Link>
              <Link href={"/contact"} passHref>
                <Disclosure.Button
                  as="a"
                  className={
                    props.active === "contact"
                      ? "active-nav-m"
                      : "inactive-nav-m"
                  }
                >
                  contact
                </Disclosure.Button>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
