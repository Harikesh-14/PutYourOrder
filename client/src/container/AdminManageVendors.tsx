import { useEffect, useState } from "react";

function AdminManageVendors() {
  const [vendors, setVendors] = useState([])

  useEffect(() => {
    try {
      fetch("http://localhost:3000/admin/view-vendors", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(response => {
        response.json().then(data => {
          if (response.ok) {
            setVendors(data)
          } else {
            console.error("Error fetching vendors")
          }
        })
      })
    } catch (error) {
      console.error(error)
    }
  }, [])

  const deleteVendor = async () => {}

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
            {vendors.map((vendor: any) => (
              <tr key={vendor._id} className="border-b border-gray-200 hover:bg-gray-100 transition duration-200">
                <td className="p-3 text-sm text-gray-700">{vendor.firstName} {vendor.lastName}</td>
                <td className="p-3 text-sm text-gray-700">{vendor.gender}</td>
                <td className="p-3 text-sm text-gray-700">{vendor.email}</td>
                <td className="p-3 text-sm text-gray-700">{vendor.phoneNumber}</td>
                <td className="flex p-3 text-sm text-gray-700 space-x-2">
                  <button
                    className="bg-red-500 text-white font-semibold text-sm p-2 rounded hover:bg-red-600 transition duration-200 ease-in-out"
                    onClick={deleteVendor}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminManageVendors;
