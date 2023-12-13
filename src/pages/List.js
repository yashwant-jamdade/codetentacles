import React from "react";
import Table from "../component/VTable";
import Header from "../component/Header";
import Sidebar from "../component/sidebar";
import { Link } from "react-router-dom";
import { Trash2 } from 'lucide-react';
export default function List() {
    const columns = [
        {
            title: "#",
            dataIndex: "srno",
            key: "srno",
      },
        {
            title: " Name",
            dataIndex: "name",
            key: "name",

        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",

        },
        {
            title: "Phone No",
            dataIndex: "phoneno",
            key: "phoneno",

        },
        {
            title: "Gender",
            dataIndex: "gender",
            key: "gender",

        },
        {
            title: "State",
            dataIndex: "state",
            key: "state",

        },
        {
            title: "State",
            dataIndex: "state",
            key: "state",

        },
        {
            title: "Action",
            render: (item) => (
              <>
              <div className="flex gap-1 text-center justify-center">
                <Link  to="#">
                <Trash2 color="#ff0000" size={16}/>
                </Link>
                </div>
              </>
            ),
            key: "action",
            width: 90,
          },
        
    ];
    const data = [
        {
        srno: 1,
        name: "Neha",
        email:"abc@gmail.com",
        phoneno:"9898767656",
        gender:"Female",
        state: "Maharashtra",
        country: "India",
      },
      {
        srno: 2,
        name: "Ira",
        email:"abc@gmail.com",
        phoneno:"9898767656",
        gender:"Female",
        state: "Maharashtra",
        country: "India",
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
                        <Link to="/Stepperform" className="rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300">Add</Link>
                    </div>
                     <Table cols={columns} data={data} />
                    </div>
                </div>
            </section>
        </>
    )
}