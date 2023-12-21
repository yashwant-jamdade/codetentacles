import React, { useEffect, useState } from "react";
import Table from "../component/VTable";
import Layout from "../component/Layout";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import UserServices from "../services/UserService";
import { toast } from "react-toastify";

const List = () => {
  const [userData, setUserData] = useState([]);
  let token = sessionStorage.getItem("token");

  const loadUsers = async () => {
    if (token) {
      try {
        const res = await UserServices.getUserList();
        const response = res?.data?.data || [];
        setUserData(response);
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    }
  };

  useEffect(() => {
    loadUsers();
  }, [token]);

  const handleDelete = async (userId) => {
    userId &&
      UserServices?.deleteUser(`userId=${userId}`)
        .then((res) => {
          toast.success("User Deleted", 2000);
          loadUsers(); // Refresh the user list after deletion
        })
        .catch((err) => {
          console.log("err", err);
          toast.error("User Not Deleted", 2000);
        });
  };

  const columns = [
    {
      title: "Sr. No",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Name",
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
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Action",
      render: (item) => (
        <div className="flex gap-1 text-center justify-center">
          <Link to="#">
            <Trash2
              onClick={() => handleDelete(item?.userId)}
              id={item?.userId}
              color="#ff0000"
              size={16}
            />
          </Link>
        </div>
      ),
      key: "action",
      width: 90,
    },
  ];

  return (
    <Layout>
      <div className="bg-white p-4 mb-2 rounded-lg dark:border-gray-700 mt-14">
        <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white text-left dark:hover:text-white text-[1.125rem] font-semibold">
          List
        </h3>
      </div>
      <div className="bg-white">
        <div className="p-4 rounded-lg dark:border-gray-700 ">
          <div className="flex justify-end mb-3 p-2">
            <Link
              to="/stepperform"
              className="rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300"
            >
              Add
            </Link>
          </div>
          {token && <Table cols={columns} data={userData} />}
        </div>
      </div>
    </Layout>
  );
};

export default List;
