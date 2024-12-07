"use client";
import AdminPage from "@/components/admin/admin";
import Image from "next/image";

import React, { useState } from "react";
import Swal from "sweetalert2";

const Admin = () => {
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passcode === "Secrate_0987") {
      setIsAuthenticated(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Passcode",
      });
      setPasscode("");
    }
  };

  return isAuthenticated ? (
    <div>
      {" "}
      <AdminPage />
    </div>
  ) : (
    <div className="h-[60vh] flex justify-center items-center flex-col">
      <div className="flex justify-center items-center mx-[75px]">
        <h2 className="font-admin text-[29px] ">ADMIN ACCESS</h2>
        <div className="relative w-[70px] h-[70px] overflow-hidden mx-[20px] transform rotate-90 ">
          <Image
            src="/assets/key.png"
            alt="Description of the image"
            layout="fill" // Fill the container
            objectFit="contain" // Cover the container while maintaining aspect ratio
          />
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4 mt-[25px]"
      >
        <input
          type="password"
          value={passcode}
          onChange={(e) => setPasscode(e.target.value)}
          placeholder="Enter Security key"
          className="px-[20px] mb-[20px] py-[10px] border border-dashed border-hack bg-black text-hack w-[500px] focus:border-dashed border-[2px] focus:border-hack focus:outline-none placeholder-hack font-admin tracking-[10px]"
        />

        <button
          type="submit"
          className="px-[40px] py-2 border text-[18px] border-hack bg-hack text-white rounded hover:bg-hack font-bold font-admin hover:text-green-100 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admin;
