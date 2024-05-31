import { Link } from "react-router-dom"

function AdminLogin() {
  return (
    <main className="h-screen w-full pt-20 md:py-5 bg-gray-100">
      <form
        className="w-[22rem] mx-auto p-4 bg-white rounded-md shadow flex flex-col justify-center"
      >
        <div className="flex flex-col-reverse gap-3 justify-center items-center mt-6">
          <h1 className="text-2xl font-semibold">Welcome</h1>
          <img
            src="../../PutYourOrder.png"
            alt="The Logo"
            className="w-56"
          />
        </div>

        <div className="flex flex-col my-6 gap-3">
          <input
            type="email"
            placeholder="Email"
            className="border-b-2 border-gray-300 py-2 px-1 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="border-b-2 border-gray-300 py-2 px-1 outline-none"
          />

          <button
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out mt-5"
            type="submit"
          >
            Login
          </button>
        </div>

        <div>
          <div className="flex gap-2 justify-center">
            <p
              className="text-sm text-gray-600 font-light mt-2 text-center"
            >
              Don't have an account?
            </p>

            <Link
              to={"/admin/register"}
              className="text-blue-500 text-sm font-light mt-2 text-center hover:underline transition duration-300 ease-in-out"
            >
              Register
            </Link>
          </div>

          <div
            className="flex gap-2 justify-center"
          >
            <p
              className="text-sm text-gray-600 font-light text-center"
            >
              Not an admin?
            </p>
            <Link
              to={"/register"}
              className="text-blue-500 text-sm font-light text-center hover:underline transition duration-300 ease-in-out"
            >
              Vendor
            </Link>
          </div>
        </div>
      </form>
    </main>
  )
}

export default AdminLogin