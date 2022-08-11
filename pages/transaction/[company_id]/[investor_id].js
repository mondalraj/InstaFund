import { Icon } from "@iconify/react";
import Image from "next/image";
import Head from "next/head";
import Navbar from "../../../components/commons/Navbar";
import ReadMore from "../../../components/transactions/readMore";
import ScheduleMeet from "../../../components/transactions/ScheduleMeet";
import UploadSafe from "../../../components/transactions/UploadSafe";
import SignedSafe from "../../../components/transactions/SignedSafe";
import SendProposal from "../../../components/transactions/SendProposal";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabaseClient";
import { getActiveAccount, Tezos } from "../../../utils/tezos";
import { Notify } from "notiflix";

export default function Transaction() {
  const router = useRouter();
  const { company_id, investor_id } = router.query;
  const [userType, setUserType] = useState("");
  const [companyData, setCompanyData] = useState([]);
  const [investorData, setInvestorData] = useState([]);
  const [transactionData, setTransactionData] = useState({});
  const [userProfileId, setUserProfileId] = useState("");
  //   const [investorWalletConnected, setInvestorWalletConnected] = useState(false);
  const [transactionLoading, setTransactionLoading] = useState(false);

  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(2) + "T";
  };

  const handleTransaction = async () => {
    // if (!investorWalletConnected) {
    let activeAccount = await getActiveAccount();
    //   setInvestorWalletConnected(true);
    // }
    const op = await Tezos.wallet
      .transfer({ to: "tz1cJqNSDH9Fp7GNBmCMDhiVNkbGYWbgoM5q", amount: 10 })
      .send();
    setTransactionLoading(true);
    await op.confirmation();
    setTransactionLoading(false);
    Notify.success("Transaction Successful");
  };

  useEffect(() => {
    if (!router.isReady) return;

    const userData = supabase.auth.user();
    if (userData && userData.user_metadata.profile_id) {
      setUserProfileId(userData.user_metadata.profile_id);
      if (userData.user_metadata.type === "investor") {
        setUserType("investor");
      } else if (userData.user_metadata.profile_id === company_id) {
        setUserType("company");
      }
    }

    (async () => {
      let comData = await supabase
        .from("Company")
        .select("*")
        .eq("id", company_id);
      if (comData.error) {
        router.push(`/company/${company_id}`);
        return;
      }
      setCompanyData(comData.data[0]);

      let investData = await supabase
        .from("Investors")
        .select("*")
        .eq("id", investor_id);
      if (investData.error) {
        router.push(`/investor/${investor_id}`);
        return;
      }
      setInvestorData(investData.data[0]);
      setTransactionData({
        to: comData.data[0].wallet,
        amount: comData.data[0].ask,
      });
    })();
  }, [router.isReady]);

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
                src={investorData.picUrl || "/Company_Logo.png"}
                alt="Company Logo"
                width="100"
                height="100"
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">{investorData.name}</h1>
              <h2 className="font-medium tracking-wider">
                {investorData.designation}
              </h2>
              <div className="flex gap-x-2">
                <Icon
                  icon="ci:location"
                  className="text-black text-2xl -ml-1.5"
                />
                <h3 className="text-md capitalize">{investorData.location}</h3>
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
                src={companyData.logoUrl || "/Company_Logo.png"}
                alt="Company Logo"
                width="100"
                height="100"
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">{companyData.name}</h1>
              <h2 className="font-medium">
                {formatCash(companyData.ask)} Tez Fund for {companyData.equity}%
              </h2>
              <div className="flex gap-x-2">
                <Icon
                  icon="ci:location"
                  className="text-black text-2xl -ml-1.5"
                />
                <h3 className="text-md capitalize">{companyData.location}</h3>
              </div>
            </div>
          </div>
          <button className="btn btn-outline btn-error absolute right-5 top-5">
            Close Proposal
          </button>
        </div>
        <div className="flex gap-x-4 px-20 py-5">
          <label htmlFor="schedule-meet" className="btn btn-info modal-button">
            Schedule a Meeting
          </label>

          <label htmlFor="send-proposal" className="btn btn-info modal-button">
            Send Proposal
          </label>
          {userType === "company" && (
            <label htmlFor="upload-safe" className="btn btn-info modal-button">
              Upload SAFE/SAFT
            </label>
          )}
          {userType === "investor" && (
            <>
              <label
                htmlFor="my-modal"
                className={`btn ${
                  transactionLoading ? "btn-warning" : "btn-info"
                } modal-button`}
                onClick={handleTransaction}
              >
                {transactionLoading ? "Sending Amount..." : "Send Transaction"}
              </label>
              <label
                htmlFor="signed-safe"
                className="btn btn-info modal-button"
              >
                Upload Signed SAFE/SAFT
              </label>
            </>
          )}
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
      <ScheduleMeet
        name={{ invest: investorData.name, com: companyData.name }}
      />
      <SendProposal
        name={{ invest: investorData.name, com: companyData.name }}
      />
      <UploadSafe wantToRaise={companyData.ask} name={companyData.name} />
      <SignedSafe />
    </div>
  );
}
