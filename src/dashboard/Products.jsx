

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spin } from 'antd';


const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleDelete = (id) => {
    setLoading(true);
    axios.delete(`https://68b917c2b71540504329f30a.mockapi.io/api/products/${id}`)
      .then((response) => {
        getAllProducts();
      }).finally(() => setLoading(false));
  }


  const getAllProducts = () => {
    setLoading(true);
    axios.get('https://68b917c2b71540504329f30a.mockapi.io/api/products')
      .then((response) => {
        setProducts(response.data);
      }).finally(() => setLoading(false));
  }

  useEffect(() => {

    getAllProducts();

  }, []);


  return (
    <div className="overflow-x-auto mt-6">

      {
        loading && <div className="text-center py-3"><Spin /></div>
      }

      {
        (products.length > 0) ? <table className="min-w-full bg-white rounded-xl shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">
                  <img src={product.image} alt={product.name} className="h-12 w-12 object-contain rounded" />
                </td>
                <td className="px-4 py-2 font-medium text-gray-800 max-w-xs truncate">{product.name}</td>
                <td className="px-4 py-2 text-green-600 font-semibold">${product.price}</td>
                <td className="px-4 py-2">
                  <Link className="bg-blue-600 hover:bg-blue-700 text-white px-3 me-2 py-1 rounded">View</Link>
                  <Link className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 me-2 py-1 rounded">Edit</Link>
                  <Link onClick={() => handleDelete(product.id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">Del</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table> : null
      }

    </div>
  );
}

export default Products