import { useEffect, useState } from "react";

type ProductT = {
  _id: string;
  productName: string;
  productPrice: number;
  productCategory: string;
  productDescription: string;
  productImage: string;
};

function AdminManageProducts() {
  const [products, setProducts] = useState<ProductT[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    fetchProducts();
  }, []);
  

  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(search.toLowerCase())
  );

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/admin/view-products', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        setProducts(data);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };  

  const deleteProduct = async (id: string) => {
    try {
      await fetch(`http://localhost:3000/admin/delete-product/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        },
      }).then(response => {
        response.json().then(data => {
          if (response.ok) {
            fetchProducts(); // Fetch updated list of products
            alert('Product deleted successfully!');
          } else {
            console.log(data);
          }
        });
      });
    } catch (error) {
      console.error(error);
    }
  }  

  return (
    <div className="md:ml-[20rem] p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800">Manage Products</h1>

      <div className="flex flex-row justify-between items-center mt-5">
        <input
          type="text"
          placeholder="Search Products"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-row gap-6 flex-wrap">
        {filteredProducts.map((product) => (
          <div key={product.productName}
            className="md:w-[48.85%] flex flex-row gap-3 mt-10 md:mt-5 cursor-pointer transition-transform duration-300 ease-in-out hover:shadow-md hover:scale-105"
          >
            <div className="flex flex-col gap-3 p-3 md:p-5 bg-white border-b border-gray-300 rounded shadow">
              <div className="flex flex-row gap-5">
                <img
                  src={`http://localhost:3000/${product.productImage}`}
                  alt="Product Image"
                  className="hidden md:block w-56 h-36 object-cover rounded border border-gray-300"
                />
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-semibold text-gray-800">{product.productName}</h1>
                  <p className="text-lg font-semibold text-gray-800">₹ {product.productPrice}</p>
                  <p className="bg-gray-800 text-white px-2 py-1 rounded w-max uppercase tracking-wider text-center text-xs font-semibold select-none cursor-default hover:bg-gray-700 transition-colors duration-300 ease-in-out hover:shadow-md">{product.productCategory}</p>
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-sm">{product.productDescription}</p>
              </div>
              <div className="flex flex-row justify-center gap-3 mt-5">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out hover:shadow-md"
                  onClick={() => deleteProduct(product._id)}
                >Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminManageProducts;
