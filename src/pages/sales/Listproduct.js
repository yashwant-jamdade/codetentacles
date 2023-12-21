import React from "react";
import Table from "../../component/VTable";
import Layout from "../../component/Layout";
import { Link } from "react-router-dom";
export default function Product() {
  const columns = [
    {
      title: "#",
      dataIndex: "srno",
      key: "srno",
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Product Image",
      dataIndex: "productimg",
      key: "productimg",
      render: (item) => (
        <>
          <div className="m-auto flex justify-center">
            <img
              src="/assets/image/shirt.webp"
              alt="productimg"
              width="50px"
              height="50px"
              className="rounded"
            />
          </div>
        </>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
    },
  ];
  const data = [
    {
      srno: 1,
      name: "Shirts",
      description: "Lorem ipsum dolor sit amet",
      Price: "Rs.200/-",
    },
    {
      srno: 1,
      name: "T-Shirts",
      productimg: "abc@gmail.com",
      description: "Lorem ipsum dolor sit amet",
      Price: "Rs.200/-",
    },
    {
      srno: 1,
      name: "Neha",
      productimg: "abc@gmail.com",
      description: "Lorem ipsum dolor sit amet",
      Price: "Rs.200/-",
    },
  ];

  return (
    <>
      <Layout>
        <div className="bg-white p-4 mb-2 rounded-lg  dark:border-gray-700 mt-14">
          <div>
            <h3 class="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white text-left dark:hover:text-white text-[1.125rem] font-semibold">
              Product
            </h3>
          </div>
        </div>
        <div className="bg-white">
          <div className="p-4 rounded-lg dark:border-gray-700 ">
            <div className="flex justify-end mb-3 p-2">
              <Link
                to="/add-product"
                className="rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300"
              >
                Add Product
              </Link>
            </div>
            <Table cols={columns} data={data} />
          </div>
        </div>
      </Layout>
    </>
  );
}
