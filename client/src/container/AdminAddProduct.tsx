import { useState } from "react"

function AdminAddProduct() {
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: 0,
    productCategory: "",
    productDescription: "",
    productImage: null as File | null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0]

    if (file) {
      setFormData({
        ...formData,
        productImage: file,
      })
    }
  }

  const addProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const addFormData = new FormData()
    addFormData.append("productName", formData.productName)
    addFormData.append("productPrice", formData.productPrice.toString())
    addFormData.append("productCategory", formData.productCategory)
    addFormData.append("productDescription", formData.productDescription)
    if (formData.productImage) {
      addFormData.append("productImage", formData.productImage)
    }
    
    try {
      const response = await fetch("http://localhost:3000/admin/add-product", {
        method: "POST",
        credentials: "include",
        body: addFormData,
      })

      if (response.ok) {
        alert("Product added successfully")
        setFormData({
          productName: "",
          productPrice: 0,
          productCategory: "",
          productDescription: "",
          productImage: null,
        })
      } else {
        alert("Failed to add product")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="md:ml-[20rem] p-10 bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">Add Product</h1>

      <form
        className="my-7 bg-white border-b border-gray-300"
        method="POST"
        onSubmit={addProduct}
        encType="multipart/form-data"
      >
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-3 md:p-5 md:px-10">
          <label className="w-[74%] md:w-[25%] text-gray-800 font-semibold text-md md:text-lg">Product's name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-3 md:p-5 md:px-10">
          <label className="w-[74%] md:w-[25%] text-gray-800 font-semibold text-md md:text-lg">Product's price</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded p-2"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-3 md:p-5 md:px-10">
          <label className="w-[74%] md:w-[25%] text-gray-800 font-semibold text-md md:text-lg">Product's category</label>
          <select
            className="w-full border border-gray-300 rounded p-2"
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
          >
            <option value="productCategory">Select a category</option>
            <option value="pizza">Pizza</option>
            <option value="burger">Burger</option>
            <option value="pasta">Pasta</option>
            <option value="sandwich">Sandwich</option>
            <option value="drink">Drink</option>
            <option value="dessert">Dessert</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-3 md:p-5 md:px-10">
          <label className="w-[74%] md:w-[25%] text-gray-800 font-semibold text-md md:text-lg">Product's description</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2"
            rows={5}
            name="productDescription"
            value={formData.productDescription}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-3 md:p-5 md:px-10">
          <label className="w-[74%] md:w-[25%] text-gray-800 font-semibold text-md md:text-lg cursor-pointer">Product's image</label>
          <input
            type="file"
            className="w-full border border-gray-300 rounded p-2"
            name="productImage"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-3 md:p-5 md:px-10">
          <button
            className="w-full md:w-[25%] mx-auto py-2 bg-blue-500 text-white rounded-md font-semibold text-lg"
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  )
}

export default AdminAddProduct