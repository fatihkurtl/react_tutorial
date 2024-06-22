import { useState } from "react";
import StatusAlert from "../components/StatusAlert";
import { StatusContext } from "../useContext/statusContext";


const RegisterPage = () => {
  interface IRegister {
    email: string;
    password: string;
    confirmPassword: string;
    aggrement: boolean;
  }

  const [registerData, setRegisterData] = useState<IRegister>({
    email: "",
    password: "",
    confirmPassword: "",
    aggrement: false,
  });

  interface IAlert {
    className: string;
    title: string;
    message: string;
  }

  const [alert, setAlert] = useState<IAlert>({
    className: "",
    title: "",
    message: "",
  });

  const handleChange = (e: any): void => {
    const { name, value, type, checked } = e.target;
    setRegisterData({
      ...registerData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(registerData);

    if (registerData.email === "" || registerData.password === "" || registerData.confirmPassword === "" || registerData.aggrement === false) {
      setAlert({
        className:
          "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-200 dark:text-red-400",
        title: "Error!",
        message: "Please fill all fields.",
      });
      return;
    }

    if (
      registerData.password === registerData.confirmPassword &&
      registerData.aggrement === true
    ) {
      setAlert({
        className:
          "p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-200 dark:text-green-400",
        title: "Success!",
        message: "You have successfully registered.",
      });
      setTimeout(() => {
        location.href = "/login";
      }, 500);
    } else {
      setAlert({
        className:
          "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-200 dark:text-red-400",
        title: "Error!",
        message: "Please check your information.",
      });
    }
  };

  return (
    <>
      {alert && (
        <StatusContext.Provider value={alert}>
          <StatusAlert
            className={alert.className}
            title={alert.title}
            message={alert.message}
          />
        </StatusContext.Provider>
      )}
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto bg-gray-600 dark:bg-gray-800 rounded-lg px-4 py-4"
      >
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
            value={registerData.email}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
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
            onChange={handleChange}
            value={registerData.password}
            placeholder="********"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium text-gray-100"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
            value={registerData.confirmPassword}
            placeholder="********"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <div className="flex items-center h-5">
            <input
              id="aggrement"
              name="aggrement"
              type="checkbox"
              onChange={handleChange}
              value={registerData.aggrement.toString()}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
            <label
              htmlFor="aggrement"
              className="ms-2 text-sm font-medium text-gray-100"
            >
              I have read and agree to the terms & conditions
            </label>
          </div>
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

export default RegisterPage;
