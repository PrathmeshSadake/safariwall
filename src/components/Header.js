import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Calendar", href: "#", current: false },
  { name: "Teams", href: "#", current: false },
  { name: "Directory", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const user = null;

  return (
    <div className='sticky z-50 top-0 shadow-2xl'>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as='header'
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "bg-white shadow-sm lg:static lg:overflow-y-visible"
          )
        }
      >
        {({ open }) => (
          <>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <div className='relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12'>
                <div className='flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2'>
                  <div className='flex flex-shrink-0 items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='#F5385D'
                      className='mx-auto w-10 h-10 -rotate-90'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
                      />
                    </svg>
                  </div>
                </div>
                <div className='min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6'>
                  <div className='flex items-center px-6 py-3 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0'>
                    <div className='w-full'>
                      <label htmlFor='search' className='sr-only'>
                        Search
                      </label>
                      <div className='relative'>
                        <input
                          id='search'
                          name='search'
                          className='block w-full rounded-full border border-gray-300 bg-white py-2 pr-6 pl-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'
                          placeholder='Search'
                          type='search'
                        />
                        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1'>
                          <MagnifyingGlassIcon
                            className='h-8 w-8 text-gray-50 bg-primary rounded-full p-1.5'
                            aria-hidden='true'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden'>
                  {/* Mobile menu button */}
                  <Popover.Button className='-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Open menu</span>
                    {open ? (
                      <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Popover.Button>
                </div>
                <div className='hidden lg:flex lg:items-center lg:justify-end xl:col-span-4'>
                  {/* <a
                    href='#'
                    className='ml-5 flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  >
                    <span className='sr-only'>View notifications</span>
                    <BellIcon className='h-6 w-6' aria-hidden='true' />
                  </a> */}

                  {/* Profile dropdown */}
                  {!user ? (
                    <div className='flex items-center justify-center space-x-2 bg-primary rounded-full text-white p-3 text-sm font-medium'>
                      <Link href='/login'>
                        <ArrowRightOnRectangleIcon className='w-5 h-5' />
                      </Link>
                    </div>
                  ) : (
                    <Menu as='div' className='relative ml-3'>
                      <div>
                        <Menu.Button className='flex rounded-full bg-gray-800 text-sm border-2 border-gray-800'>
                          <span className='sr-only'>Open user menu</span>
                          <img
                            className='h-9 w-9 rounded-full'
                            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                            alt=''
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to='/profile'
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href='#'
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                //   onClick={logout}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "w-full text-left block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  )}
                  {/* <a
                    href='#'
                    className='ml-6 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  >
                    New Project
                  </a> */}
                </div>
              </div>
            </div>

            <Popover.Panel as='nav' className='lg:hidden' aria-label='Global'>
              <div className='mx-auto max-w-3xl space-y-1 px-2 pt-2 pb-3 sm:px-4'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-100 text-gray-900"
                        : "hover:bg-gray-50",
                      "block rounded-md py-2 px-3 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {/* <div className='border-t border-gray-200 pt-4 pb-3'>
                <div className='mx-auto flex max-w-3xl items-center px-4 sm:px-6'>
                  <div className='flex-shrink-0'>
                    <img
                      className='h-10 w-10 rounded-full'
                      src={user.imageUrl}
                      alt=''
                    />
                  </div>
                  <div className='ml-3'>
                    <div className='text-base font-medium text-gray-800'>
                      {user.name}
                    </div>
                    <div className='text-sm font-medium text-gray-500'>
                      {user.email}
                    </div>
                  </div>
                  <button
                    type='button'
                    className='ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  >
                    <span className='sr-only'>View notifications</span>
                    <BellIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>
                <div className='mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4'>
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div> */}
            </Popover.Panel>
          </>
        )}
      </Popover>
    </div>
  );
}
