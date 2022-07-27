import { Icon } from "@iconify/react";
import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/commons/Navbar";

export default function Transaction() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Head>
        <title>Transactions</title>
      </Head>
      <Navbar />
      <div className="w-5/6 bg-base-300 h-5/6 m-auto">
        <div className="flex relative items-center gap-x-20 px-10">
            <div className="flex items-center">
                <div className="p-4 max-w-md max-h-fit">
                    <Image
                    src="/Company_Logo.png"
                    alt="Company Logo"
                    width="100"
                    height="100"
                    className="rounded-full"
                    />
                </div>
                <div>
                    <h1 className="text-2xl font-semibold">Investor Name</h1>
                    <h2 className="font-medium tracking-wider">Designation</h2>
                    <div className="flex gap-x-2">
                        <Icon icon="ci:location" className="text-black text-2xl -ml-1.5" />
                        <h3 className="text-md capitalize">los angeles</h3>
                    </div>
                </div>
            </div>
            <div>
                <Icon icon="material-symbols:keyboard-double-arrow-right-rounded" className="text-[7rem]" />
            </div>
            <div className="flex items-center">
                <div className="p-4 max-w-md max-h-fit bg">
                    <Image
                    src="/Company_Logo.png"
                    alt="Company Logo"
                    width="100"
                    height="100"
                    className="rounded-full"
                    />
                </div>
                <div>
                    <h1 className="text-2xl font-semibold">Company Name</h1>
                    <h2 className="font-medium">23M Tez Fund raised</h2>
                    <div className="flex gap-x-2">
                        <Icon icon="ci:location" className="text-black text-2xl -ml-1.5" />
                        <h3 className="text-md capitalize">california</h3>
                    </div>
                </div>
            </div>
            <button className="btn btn-outline btn-error absolute right-5 top-5">Close Proposal</button>
        </div>
        <div className="flex gap-x-4 px-20 py-5">
            <button className="btn text-black hover:text-white bg-white px-6 capitalize">Schedule a meeting</button>
            <button className="btn btn-info bg-white px-6 capitalize">Send Proposal</button>
            <button className="btn btn-warning bg-white px-6 capitalize">Upload SAFE/SAFT</button>
            <button className="btn text-black hover:text-white btn-accent bg-white px-6 capitalize">Send Transaction</button>
            <button className="btn btn-success bg-white px-6 capitalize">Signed SAFE/SAFT</button>
        </div>
        <div className="bg-red-500 px-20">
            Hello Chat
        </div>
      </div>
    </div>
  );
}