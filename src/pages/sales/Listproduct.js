import React from "react";
import Table from "../../component/VTable";
import Header from "../../component/Header";
import Sidebar from "../../component/sidebar";
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
          <img src="/assets/image/shirt.webp" alt="productimg" width="50px" height="50px" className="rounded"/>
          </div>
          </>
            )

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
        description:"Lorem ipsum dolor sit amet",
        Price:"Rs.200/-",
       
      },
      {
        srno: 1,
        name: "T-Shirts",
        productimg:"abc@gmail.com",
        description:"Lorem ipsum dolor sit amet",
        Price:"Rs.200/-",
      },
      {
       srno: 1,
        name: "Neha",
        productimg:"abc@gmail.com",
        description:"Lorem ipsum dolor sit amet",
        Price:"Rs.200/-",
      },
     
    ]

    return (
        <>
            <section>
                <Header />
                <Sidebar />
                <div className="p-4 sm:ml-64">
                    <div className="p-4 rounded-lg dark:border-gray-700 mt-14">
                    <div className="flex justify-end mb-3 p-2">
                        <Link to="/Add-product" className="rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300">Add Product</Link>
                    </div>
                        <Table cols={columns} data={data} />
                    </div>
                </div>
            </section>
        </>
    )
}