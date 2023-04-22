import React, { Fragment } from "react";
import { logout } from "../firebase";
import Search from "./Search";
import { Menu, Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  return (
    <div className="">
      <div className="flex justify-between items-center container mx-auto">
        <img
          src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png"
          alt=""
          className="h-20 w-20 mx-5 my-5 rounded-full"
        />
        <h1 className="text-4xl font-bold tracking-wide text-black mx-5 my-5">
          Book Search App
        </h1>

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-28 justify-center gap-x-1.5">
              <UserCircleIcon
                className="-mr-1 h-10 w-10 text-black"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  <button
                    onClick={logout}
                    className="block px-4 py-2 text-sm w-full hover:bg-gray-300"
                  >
                    Logout
                  </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <Search />
      <div className="h-10"></div>
    </div>
  );
}

export default Header;
