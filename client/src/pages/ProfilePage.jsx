import { useContext } from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const tabs = [
  { name: "My Profile", href: "me" },
  { name: "My Bookings", href: "my-bookings" },
  { name: "My Accomodations", href: "my-accomodations" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  let { pathname } = useLocation();

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  if (pathname == "/profile") return <Navigate to={"/profile/me"} />;
  return (
    <div>
      <div className='max-w-4xl mx-auto my-12'>
        <div className='sm:hidden'>
          <label htmlFor='tabs' className='sr-only'>
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id='tabs'
            name='tabs'
            className='block w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary'
            defaultValue={"My Profile"}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className='hidden sm:block'>
          <nav
            className='isolate flex divide-x divide-gray-200 rounded-lg shadow'
            aria-label='Tabs'
          >
            {tabs.map((tab, tabIdx) => (
              <Link
                key={tab.name}
                to={`/profile/${tab.href}`}
                className={classNames(
                  pathname === `/profile/${tab.href}`
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-700",
                  tabIdx === 0 ? "rounded-l-lg" : "",
                  tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                  "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                <span>{tab.name}</span>
                <span
                  aria-hidden='true'
                  className={classNames(
                    pathname === `/profile/${tab.href}`
                      ? "bg-primary"
                      : "bg-transparent",
                    "absolute inset-x-0 bottom-0 h-0.5"
                  )}
                />
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ProfilePage;
