import { Icon } from "@iconify/react";
import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/commons/Navbar";
import ReadMore from "../components/transactions/readMore";
import ScheduleMeet from "../components/transactions/ScheduleMeet";
import UploadSafe from "../components/transactions/UploadSafe";
import SignedSafe from "../components/transactions/SignedSafe";
import SendProposal from "../components/transactions/SendProposal";

export default function Transaction() {
  let text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, impedit at sint hic cupiditate, dolorum assumenda possimus deleniti excepturi dignissimos totam provident magnam quaerat aliquam adipisci dolore nostrum enim asperiores sit similique nam voluptates! Deserunt id nam minus laudantium tempore consectetur nemo autem. Harum ipsum neque libero, inventore ad nihil";
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden">
      <Head>
        <title>Transactions</title>
      </Head>
      <Navbar />
      <div className="flex flex-col w-5/6 bg-base-300 h-5/6 m-auto rounded-lg">
        <div className="flex relative items-center gap-x-20 px-12 pt-5">
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
                <Icon
                  icon="ci:location"
                  className="text-black text-2xl -ml-1.5"
                />
                <h3 className="text-md capitalize">los angeles</h3>
              </div>
            </div>
          </div>
          <div>
            <Icon
              icon="material-symbols:keyboard-double-arrow-right-rounded"
              className="text-[7rem]"
            />
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
                <Icon
                  icon="ci:location"
                  className="text-black text-2xl -ml-1.5"
                />
                <h3 className="text-md capitalize">california</h3>
              </div>
            </div>
          </div>
          <button className="btn btn-outline btn-error absolute right-5 top-5">
            Close Proposal
          </button>
        </div>
        <div className="flex gap-x-4 px-20 py-5">
          <label for="schedule-meet" class="btn btn-info modal-button">
            Schedule a Meeting
          </label>

          <label for="send-proposal" class="btn btn-info modal-button">
            Send Proposal
          </label>
          <label for="upload-safe" class="btn btn-info modal-button">
            Upload SAFE/SAFT
          </label>
          <label for="my-modal" class="btn btn-info modal-button">
            Send Transaction
          </label>
          <label for="signed-safe" class="btn btn-info modal-button">
            Upload Signed SAFE/SAFT
          </label>
        </div>
        <ul className="bg-slate-600 flex flex-col gap-y-10 px-20 py-4 overflow-y-scroll">
          <li className="flex justify-start">
            <div className="bg-base-300 rounded-lg px-10 py-2 w-2/3 relative">
              <div className="absolute -top-3 -left-3">
                <Image
                  src="/Company_Logo.png"
                  alt="Investor Logo"
                  width="30"
                  height="30"
                  className="rounded-full"
                />
              </div>
              <h1 className="text-lg font-medium text-primary-focus">
                Investor send a Proposal
              </h1>
              <ReadMore>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, impedit at sint hic cupiditate, dolorum assumenda
                possimus deleniti excepturi dignissimos totam provident magnam
                quaerat aliquam adipisci dolore nostrum enim asperiores sit
                similique nam voluptates! Deserunt id nam minus laudantium
                tempore consectetur nemo autem. Harum ipsum neque libero,
                inventore ad nihil
              </ReadMore>
            </div>
          </li>
          <li className="flex justify-end">
            <div className="bg-base-300 rounded-lg px-10 py-2 w-2/3 relative">
              <div className="absolute -top-3 -right-3">
                <Image
                  src="/Company_Logo.png"
                  alt="Investor Logo"
                  width="30"
                  height="30"
                  className="rounded-full"
                />
              </div>
              <h1 className="text-lg font-medium text-green-500">
                Company name schedule a meeting
              </h1>
              <p className="text-base py-2">
                Meeting Scheduled with Company Name at Monday, 11 July 2022, 5
                pm - 6 pm
              </p>
              <button className="btn btn-primary">Join Meeting</button>
            </div>
          </li>
          <li className="flex justify-start">
            <div className="bg-base-300 rounded-lg px-10 py-2 w-2/3 relative">
              <div className="absolute -top-3 -left-3">
                <Image
                  src="/Company_Logo.png"
                  alt="Investor Logo"
                  width="30"
                  height="30"
                  className="rounded-full"
                />
              </div>
              <h1 className="text-lg font-medium text-primary-focus">
                Investor send a Proposal
              </h1>
              <p className="text-base py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, impedit at sint hic cupiditate, dolorum assumenda
                possimus deleniti excepturi dignissimos totam provident magnam
                quaerat aliquam adipisci dolore nostrum enim asperiores sit
                similique nam voluptates! Deserunt id nam minus laudantium
                tempore consectetur nemo autem. Harum ipsum neque libero,
                inventore ad nihil.
              </p>
            </div>
          </li>
          <li className="flex justify-end">
            <div className="bg-base-300 rounded-lg px-10 py-2 w-2/3 relative">
              <div className="absolute -top-3 -right-3">
                <Image
                  src="/Company_Logo.png"
                  alt="Investor Logo"
                  width="30"
                  height="30"
                  className="rounded-full"
                />
              </div>
              <h1 className="text-lg font-medium text-green-500">
                Company name schedule a meeting
              </h1>
              <p className="text-base py-2">
                Meeting Scheduled with Company Name at Monday, 11 July 2022, 5
                pm - 6 pm
              </p>
              <button className="btn btn-primary">Join Meeting</button>
            </div>
          </li>
        </ul>
      </div>
      <ScheduleMeet />
      <SendProposal />
      <UploadSafe />
      <SignedSafe />
    </div>
  );
}
