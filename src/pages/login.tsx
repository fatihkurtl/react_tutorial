import { useState } from "react";
import { useDispatch } from 'react-redux';
import { login } from "../features/auth";

const LoginPage = () => {

    interface ILogin {
        email: string
        password: string
        remember: boolean
    }

    const [loginData, setLoginData] = useState<ILogin>({
        email: "",
        password: "",
        remember: false
    })

    const dispatch = useDispatch()

    const handleChange = (e: any): void => {
        const { name, value, type, checked } = e.target
        setLoginData({
            ...loginData,
            [name]: type === "checkbox" ? checked : value,
        })
    }

    const handleSubmit = (e: any): void => {
        e.preventDefault()
        console.log(loginData);
        dispatch(login(loginData.email))
        setTimeout(() => {
            localStorage.getItem('token') ? location.href = '/blog' : console.log('Login failed');
        }, 500);
    }

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-gray-600 dark:bg-gray-800 rounded-lg px-4 py-4">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-100"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={loginData.email}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-100"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            onChange={handleChange}
            value={loginData.password}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              onChange={handleChange}
              value={loginData.remember.toString()}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-100"
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginPage;
