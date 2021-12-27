/* This example requires Tailwind CSS v2.0+ */
import { Fragment} from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import { logoutuser } from '../redux/userRedux';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function UserDropdown() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleClick = ()=>{
    dispatch(
    logoutuser()
    )
};
  return (
    <Menu as="a" className="text-center text-color12 hover:text-color1 transition relative">
      <>
        <Menu.Button
          as="a"
          className="inline cursor-pointer text-color14 hover:text-color1 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 mb-2 ml-2 h-6 w-6 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>{" "}
          Hello {user.user.username}
          <svg xmlns="http://www.w3.org/2000/svg" className=" mb-1 -mr-1 ml-2 h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
         </svg>
         
        </Menu.Button>
      </>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute text-color14 right-0 mt-2 w-56 rounded-md shadow-lg bg-color11 ring-1 ring-color14 ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
               
                <Link
                to = {user.user.isAdmin?  "/dashboard" : "/account" }
                  className={classNames(
                    active ? "bg-color8" : " text-color14",
                    "block w-full text-left px-4 py-2 text-sm"
                  )}
                >
                {user.user.isAdmin?  "Dashboard" : "Account" }
                </Link>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                  onClick={()=> handleClick()}
                    type="submit"
                    className={classNames(
                      active ? "bg-color8" : " text-color14",
                      "block w-full text-left px-4 py-2 text-sm"
                    )}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
