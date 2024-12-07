'use client'
import Image from "next/image";
import { logos } from "../../../public/logo/logo";
import DashBoard from "./Dashboard";
import BlogsTable from "./BlogsTable";
import { useEffect, useState } from "react";

const AdminPage = () => {

  const [data , setData] = useState([]);
  const [sum , setSum] = useState(0);

  
  const fetchData = async () => {
    const responce = await fetch('/api/blogs');
    const data = await responce.json();
    setData(data);  
    setSum(data.reduce((acc, obj) => acc + obj.views, 0));

}

useEffect(() => {
    fetchData();
}, [])


  return (
    <div className=" mx-[150px] my-[30px]">
      <div className="flex gap-10">
        <DashBoard
          value={data.length}
          name={"Total Blogs"}
          logo={"Blog"}
          color="bg-[#db2777]"
        />
        <DashBoard
          value={sum}
          name={"Total Views"}
          logo={"View"}
          color="bg-[#ca8a04]"
        />
        <DashBoard
          value={4}
          name={"Total Messages"}
          logo={"Mail"}
          color="bg-[#2563eb]"
        />
      </div>

      <BlogsTable /> 
    </div>
  );
};

export default AdminPage;
