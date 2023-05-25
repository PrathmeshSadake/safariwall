import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", { name, email, password });
      toast.success("Registration successfull. Now you can login.");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-24 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='#F5385D'
          className='mx-auto w-8 h-8 -rotate-90'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
          />
        </svg>
        <h2 className='mt-4 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900'>
          Create your account
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-4' onSubmit={registerUser}>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Name
            </label>
            <div>
              <input
                id='name'
                name='name'
                type='name'
                autoComplete='name'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-2'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Email address
            </label>
            <div>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-2'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Password
            </label>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-2'
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Confirm Password
            </label>
            <input
              id='confirmPassword'
              name='confirmPassword'
              type='confirmPassword'
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-2'
            />
          </div>

          <div>
            <button
              type='submit'
              disabled={password !== confirmPassword}
              className='flex w-full justify-center rounded-md bg-primary disabled:bg-gray-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
            >
              Create my account
            </button>
          </div>
        </form>

        <p className='mt-6 text-center text-sm text-gray-500'>
          Already have an account?{" "}
          <Link
            to='/login'
            className='font-semibold leading-6 text-primary hover:text-primary'
          >
            Login
          </Link>
        </p>
        <p className='mt-3 flex items-center justify-center space-x-2 text-sm text-primary hover:text-primary'>
          <ArrowLeftIcon className='w-4 h-4' />
          <Link to='/' className='font-semibold leading-6'>
            Back to home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
