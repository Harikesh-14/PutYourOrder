import { Link } from "react-router-dom"

function AdminRegister() {
  return (
    <main className="h-screen w-full py-10 bg-gray-100">
      <form className="w-[22rem] mx-auto p-4 bg-white rounded-md shadow flex flex-col justify-center">
        <div className="flex flex-col-reverse gap-3 justify-center items-center mt-6">
          <h1 className="text-2xl font-semibold">Welcome</h1>
          <img
            src="../../PutYourOrder.png"
            alt="The Logo"
            className="w-56"
          />
        </div>

        <div className="flex flex-col my-6 gap-3">
          <input type="text"
            placeholder="First name"
            className="border-b-2 border-gray-300 py-2 px-1 outline-none"
          />

          <input
            type="text"
            placeholder="Last name"
            className="border-b-2 border-gray-300 py-2 px-1 outline-none"
          />

          <select
            className="h-10 border-b-2 border-gray-300"
          >
            <option value="gender">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input
            type="email"
            placeholder="Email"
            className="border-b-2 border-gray-300 py-2 px-1 outline-none"
          />

          <input
            type="number"
            placeholder="Phone number"
            className="border-b-2 border-gray-300 py-2 px-1 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="border-b-2 border-gray-300 py-2 px-1 outline-none"
          />

          <button
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out mt-5"
          >
            Register
          </button>
        </div>

        <div className="flex gap-2">
          <p
            className="text-sm text-gray-600 font-light mt-2 mb-4 text-center"
          >Already have an account? </p>
          <Link to={"#"}>Sign In</Link>
        </div>
      </form>
    </main>
  )
}

export default AdminRegister