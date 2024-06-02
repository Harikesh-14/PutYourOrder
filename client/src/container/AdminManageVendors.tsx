import React from 'react';

function AdminManageVendors() {
  return (
    <div className="md:ml-[20rem] p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">Manage Vendors</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-50 border-b-2 border-gray-200">
              <th className="w-1/6 p-3 text-sm font-semibold tracking-wide text-left">Vendor Name</th>
              <th className="w-1/6 p-3 text-sm font-semibold tracking-wide text-left">Vendor Gender</th>
              <th className="w-1/3 p-3 text-sm font-semibold tracking-wide text-left">Vendor Email</th>
              <th className="w-1/6 p-3 text-sm font-semibold tracking-wide text-left">Vendor Phone</th>
              <th className="w-1/6 p-3 text-sm font-semibold tracking-wide text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 hover:bg-gray-100 transition duration-200">
              <td className="p-3 text-sm text-gray-700">Harikesh Ranjan Sinha</td>
              <td className="p-3 text-sm text-gray-700">Male</td>
              <td className="p-3 text-sm text-gray-700">ranjansinhaharikesh@gmail.com</td>
              <td className="p-3 text-sm text-gray-700">1234567890</td>
              <td className="flex p-3 text-sm text-gray-700 space-x-2">
                <button className="bg-blue-500 text-white font-semibold text-sm p-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out">Edit</button>
                <button className="bg-red-500 text-white font-semibold text-sm p-2 rounded hover:bg-red-600 transition duration-200 ease-in-out">Delete</button>
              </td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100 transition duration-200">
              <td className="p-3 text-sm text-gray-700">Manikesh Ranjan Sinha</td>
              <td className="p-3 text-sm text-gray-700">Male</td>
              <td className="p-3 text-sm text-gray-700">JCBIDSJCKSDK</td>
              <td className="p-3 text-sm text-gray-700">1234567890</td>
              <td className="p-3 text-sm text-gray-700 space-x-2">
                <button className="bg-blue-500 text-white font-semibold text-sm p-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out">Edit</button>
                <button className="bg-red-500 text-white font-semibold text-sm p-2 rounded hover:bg-red-600 transition duration-200 ease-in-out">Delete</button>
              </td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100 transition duration-200">
              <td className="p-3 text-sm text-gray-700">Nishikesh Ranjan Sinha</td>
              <td className="p-3 text-sm text-gray-700">Male</td>
              <td className="p-3 text-sm text-gray-700">JCBIDSJCKSDK</td>
              <td className="p-3 text-sm text-gray-700">1234567890</td>
              <td className="p-3 text-sm text-gray-700 space-x-2">
                <button className="bg-blue-500 text-white font-semibold text-sm p-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out">Edit</button>
                <button className="bg-red-500 text-white font-semibold text-sm p-2 rounded hover:bg-red-600 transition duration-200 ease-in-out">Delete</button>
              </td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100 transition duration-200">
              <td className="p-3 text-sm text-gray-700">Sneha Sinha</td>
              <td className="p-3 text-sm text-gray-700">Male</td>
              <td className="p-3 text-sm text-gray-700">JCBIDSJCKSDK</td>
              <td className="p-3 text-sm text-gray-700">1234567890</td>
              <td className="p-3 text-sm text-gray-700 space-x-2">
                <button className="bg-blue-500 text-white font-semibold text-sm p-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out">Edit</button>
                <button className="bg-red-500 text-white font-semibold text-sm p-2 rounded hover:bg-red-600 transition duration-200 ease-in-out">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminManageVendors;
