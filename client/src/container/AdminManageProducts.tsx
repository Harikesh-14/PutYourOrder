import { useEffect, useState } from "react";

type ProductT = {
  productName: string;
  productPrice: number;
  productCategory: string;
  productDescription: string;
  productImage: string;
};

function AdminManageProducts() {
  const [products, setProducts] = useState<ProductT[]>([]);

  useEffect(() => {
    try {
      fetch('http://localhost:3000/admin/view-products', {
        method: 'GET',
        credentials: 'include',
      }).then(response => {
        response.json().then(data => {
          if (response.ok) {
            setProducts(data);
          } else {
            console.log(data);
          }
        });
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  console.log(products);

  return (
    <div className="md:ml-[20rem] p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800">Manage Products</h1>

      {products.map((product) => (
        <div key={product.productName} className="flex gap-5 my-7">
          <div className="flex flex-col gap-3 p-3 md:p-5 bg-white border-b border-gray-300 rounded shadow">
            <div className="flex flex-row">
              <img
                src={`http://localhost:3000/${product.productImage}`}
                alt="Product Image"
              />
              <div>
                <h1>{product.productName}</h1>
                <p>{product.productPrice}</p>
                <p>{product.productCategory}</p>
              </div>
            </div>
            <div>
              <p>{product.productDescription}</p>
            </div>
            <div>
              <button>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminManageProducts;
