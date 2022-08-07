import { useState } from "react";
import { Icon } from "@iconify/react";
import Head from "next/head";
import Image from "next/image";

import Overview from "../../components/companyDetails/overview";
import Funding from "../../components/companyDetails/funding";
import Navbar from "../../components/commons/Navbar";
import Jobs from "../../components/companyDetails/jobs";

export default function Company() {
  const [menu, setMenu] = useState("overview");

  return (
    <div className="w-full h-screen flex flex-col overflow-auto">
      <Navbar />
      <div className="w-full flex">
        <Head>
          <title>Company Name</title>
        </Head>
        <div className="w-1/6 h-full flex flex-col items-center">
          <div className="p-4 m-4 max-w-md max-h-fit">
            <Image
              src="/Company_Logo.png"
              alt="Company Logo"
              width="150"
              height="150"
            />
          </div>
          <div className="bg-base-300 p-2 w-4/5 mx-auto rounded-md drop-shadow-xl">
            <h1 className="text-xl p-1 font-medium">Company Name</h1>
            <div className="my-2">
              <div className="mb-2">
                <h1 className="font-bold text-lg">Website</h1>
                <h2>discordapp.com</h2>
              </div>
              <div className="mb-2">
                <h1 className="font-bold text-lg">Location</h1>
                <h2>California</h2>
              </div>
              <div className="mb-2">
                <h1 className="font-bold text-lg">Company Size</h1>
                <h2>100-200 people</h2>
              </div>
              <div className="mb-2">
                <h1 className="font-bold text-lg">Total raised</h1>
                <h2>$478.3 M</h2>
              </div>
              <div className="mb-2">
                <h1 className="font-bold text-lg">Company Type</h1>
                <h2 className="badge badge-secondary text-base py-4 mt-2">
                  Technology
                </h2>
              </div>
              <div className="mb-2">
                <h1 className="font-bold text-lg">Markets</h1>
                <div className="flex flex-wrap gap-2">
                  <h2 className="badge badge-secondary">Video Games</h2>
                  <h2 className="badge badge-primary">Gaming</h2>
                  <h2 className="badge badge-accent">AR/VR</h2>
                  <h2 className="badge badge-error text-white">BlockChain</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6 h-full my-4">
          <div className="px-10 w-full my-2">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl text-white">Company Name</h1>
              <button className="btn btn-outline btn-success rounded-full text-white px-10">
                Invest Now
              </button>
            </div>
            <p className="m-4 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              enim iste. A maxime tenetur ipsam nihil, obcaecati nobis! Hic,
              corporis!
            </p>
            <div className="flex justify-between items-center">
              <h2 className="text-lg">Founded in 2001</h2>
              <div className="flex justify-between items-center gap-x-3">
                <Icon
                  icon="akar-icons:linkedin-v1-fill"
                  color="#0e76a8"
                  className="text-2xl cursor-pointer"
                />
                <Icon
                  icon="bxl:twitter"
                  color="#1da1f2"
                  className="text-2xl cursor-pointer"
                />
                <Icon
                  icon="fe:facebook"
                  color="#4267b2"
                  className="text-2xl cursor-pointer"
                />
                <Icon
                  icon="entypo:link"
                  color="black"
                  className="text-2xl cursor-pointer"
                />
              </div>
            </div>
            <div className="divider mb-0"></div>
          </div>
          <div className="w-full h-full px-20">
            <ul className="flex gap-x-5">
              <li
                className={`font-bold text-xl px-4 py-2 border-b-2 ${
                  menu == "overview" ? "border-slate-300" : "border-transparent"
                } rounded-sm cursor-pointer`}
                onClick={() => setMenu("overview")}
              >
                Overview
              </li>
              <li
                className={`font-bold text-xl px-4 py-2 border-b-2 ${
                  menu == "funding" ? "border-slate-300" : "border-transparent"
                } rounded-sm cursor-pointer`}
                onClick={() => setMenu("funding")}
              >
                Funding
              </li>
              <li
                className={`font-bold text-xl px-4 py-2 border-b-2 ${
                  menu == "jobs" ? "border-slate-300" : "border-transparent"
                } rounded-sm cursor-pointer`}
                onClick={() => setMenu("jobs")}
              >
                Jobs
                <div className="badge badge-base text-white text-sm mx-2">
                  12
                </div>
              </li>
            </ul>
            <div className="divider mt-0 items-start"></div>
            {menu == "overview" && <Overview />}
            {menu == "funding" && <Funding />}
            {menu == "jobs" && <Jobs />}
          </div>
        </div>
      </div>
    </div>
  );
}
