import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../components/commons/Navbar";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const auth = () => {
  const router = useRouter();
  // const [activeTab, setActiveTab] = useState("login");
  const { type } = router.query;
  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex justify-center items-stretch mt-24 min-h-[60vh] ">
        <div className="left-col w-1/3 rounded-l-xl shadow-xl bg-gray-900 p-5">
          <div className="tabs">
            <a
              className={`tab tab-bordered ${type === "login" ? "" : "tab-active"}`}
              onClick={() => router.push("/auth?type=register")}
            >
              Register
            </a>
            <a
              className={`tab tab-bordered ${
                type === "register" ? "" : "tab-active"
              }`}
              onClick={() => router.push("/auth?type=login")}
            >
              Login
            </a>
          </div>
          <Icon
            icon="ic:round-account-circle"
            style={{ fontSize: "48px" }}
            className="mx-auto mt-5"
          />
          {type === "login" ? <Login /> : <Register />}
        </div>
        <div className="right-col w-1/3 shadow-xl">
          <img
            src="https://www.business2community.com/wp-content/uploads/2022/03/Tezos-buy.png"
            className="w-full h-full rounded-r-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default auth;
