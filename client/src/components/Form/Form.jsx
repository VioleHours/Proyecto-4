import React from "react";
import { validation } from "./Validations";

const Form = ({ login }) => {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      validation({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <div className="bg-rick-and-morty-3 bg-no-repeat bg-cover bg-center w-full h-full">
      <div className="flex w-full h-full justify-start items-center sm:justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-col w-[25rem] gap-4 pl-4 text-white font-mono text-xl"
        >
          <h3>
            Por cuestion de pruebas... El user es rickmorty@gmail.com y la
            contraseña serie123
          </h3>
          <div className="w-full max-w-20em flex flex-col relative">
            <label htmlFor="username" className="">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              className="text-white bg-transparent border-b-2 border-white focus:border-green-500"
            />
          </div>
          {errors.username !== "" && <p className="danger">{errors.username}</p>}
          <div className="w-full max-w-20em flex flex-col relative">
            <label htmlFor="password" className="">
              {" "}
              Password:{" "}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              className="text-white bg-transparent border-b-2 border-white focus:border-green-500"
            />
          </div>
          {errors.password !== "" && <p className="danger">{errors.password}</p>}
          <button
            type="submit"
            className="button relative overflow-hidden"
            style={{ zIndex: 1 }}
          >
            <span>Login</span>
            <span className="button__after absolute"></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
