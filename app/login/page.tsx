import Link from "next/link";
import { FaUserTie } from "react-icons/fa";
import { FcLock } from "react-icons/fc";

const Login = () => {
  return (
    <>
      <section>
        <div className="flex flex-col w-full h-full justify-between md:grid md:grid-cols-2 ">
          <div className=" flex object-cover">
            <embed src="login.svg" className="" />
          </div>
          <div className="md:mt-20">
            <div className="">
              <label className="flex p-4 text-4xl font-mono  ">
                Welcome Back
              </label>
            </div>
            <div className="flex flex-col p-4">
              <div className="flex w-full justify-center items-center shadow-md rounded-lg">
                <a className="p-4 bg-transparent text-2xl">
                  <FaUserTie />
                </a>
                <input
                  className=" p-4 w-full h-full bg-transparent outline-none border-none text-md"
                  type="text"
                  placeholder="User Id"
                />
              </div>
              <div className="flex w-full justify-center items-center shadow-md rounded-lg mt-6">
                <a className="p-4 bg-transparent text-2xl">
                  <FcLock />
                </a>
                <input
                  className=" p-4 w-full h-full bg-transparent outline-none border-none text-md"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-14">
              <button
                className="flex w-2/4 h-10 bg-y justify-center items-center rounded-lg 
                        shadow-xl
                        text-black text-xl text-center "
              >
                Login
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-6 ">
            <label className="text-gray-700 text-sm">Login as HR ?<span className="pl-4 text-blue-600 text-lg"><Link href={'/dashboard'}>Click Here</Link> </span></label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
