import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { supabase } from "../../utils/supabaseClient";
import Overview from "../../components/companyDetails/overview";
import Funding from "../../components/companyDetails/funding";
import Navbar from "../../components/commons/Navbar";
import Jobs from "../../components/companyDetails/jobs";
import Link from "next/link";

export default function Company() {
  const [menu, setMenu] = useState("overview");
  const [user, setUser] = useState("");
  const [profile, setProfile] = useState([]);
  const [funding, setFunding] = useState([]);
  const [domain, setDomain] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const userData = supabase.auth.user();
    if (userData && userData.user_metadata.profile_id) {
      if (userData.app_metadata.type === "investor") {
        setUser("investor");
      } else if (userData.user_metadata.profile_id === router.query.id) {
        setUser("company");
      }
    }
    (async () => {
      let { data, error } = await supabase
        .from("Company")
        .select("*,Fundings(*)")
        .eq("id", router.query.id);
      if (error) {
        router.push("/companyform");
        return;
      }
      setProfile(data[0]);
      setFunding(data[0].Fundings);
      setDomain(new URL(data[0].website).hostname);
    })();
  }, [router.isReady]);

  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + " K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + " M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + " B";
    if (n >= 1e12) return +(n / 1e12).toFixed(2) + " T";
  };

  const totalRaised = formatCash(
    funding.reduce((total, data) => total + data.raised, 0)
  );

  return (
    <div className="w-full h-screen flex flex-col overflow-auto">
      <Navbar />
      <div className="w-full flex">
        <Head>
          <title>{profile.name}</title>
        </Head>
        <div className="w-1/6 h-full flex flex-col items-center">
          <div className="p-4 m-4 max-w-md max-h-fit">
            <Image
              src={profile.logoUrl || "/Company_Logo.png"}
              alt="Company Logo"
              width="150"
              height="150"
            />
          </div>
          <div className="bg-base-300 p-2 w-4/5 mx-auto rounded-md drop-shadow-xl">
            <h1 className="text-xl p-1 font-medium">{profile.name}</h1>
            <div className="my-2">
              <div className="mb-2">
                <h1 className="font-bold text-lg">Website</h1>
                <h2>
                  <a href={profile.website} target="_blank">
                    {domain}
                  </a>
                </h2>
              </div>
              <div className="mb-2">
                <h1 className="font-bold text-lg">Location</h1>
                <h2>{profile.location}</h2>
              </div>
              <div className="mb-2">
                <h1 className="font-bold text-lg">Company Size</h1>
                <h2>10-{profile.size} people</h2>
              </div>
              <div className="mb-2">
                <h1 className="font-bold text-lg">Total raised</h1>
                <h2>{totalRaised} Tez</h2>
              </div>
              <div className="mb-2">
                <h1 className="font-bold text-lg">Company Type</h1>
                <h2 className="badge badge-secondary text-base py-4 mt-2">
                  {profile.category}
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
              <h1 className="text-3xl text-white">{profile.name}</h1>
              {user && (
                <Link href={`/transaction`}>
                  <button className="btn btn-outline btn-success rounded-full text-white px-10 capitalize">
                    {user == "company" ? "Transactions" : "Invest Now"}
                  </button>
                </Link>
              )}
            </div>
            <p className="m-4 font-medium">{profile.bio}</p>
            <div className="flex justify-between items-center">
              <h2 className="text-lg">Founded in {profile.founded}</h2>
              <div className="flex justify-between items-center gap-x-3">
                <a href={profile.linkedIn}>
                  <Icon
                    icon="akar-icons:linkedin-v1-fill"
                    color="#0e76a8"
                    className="text-2xl cursor-pointer"
                  />
                </a>
                <a href={profile.twitter}>
                  <Icon
                    icon="bxl:twitter"
                    color="#1da1f2"
                    className="text-2xl cursor-pointer"
                  />
                </a>
                <a href={profile.facebook}>
                  <Icon
                    icon="fe:facebook"
                    color="#4267b2"
                    className="text-2xl cursor-pointer"
                  />
                </a>
                <a href={profile.website}>
                  <Icon
                    icon="entypo:link"
                    color="black"
                    className="text-2xl cursor-pointer"
                  />
                </a>
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
            {menu == "overview" && <Overview desc={profile.problem} />}
            {menu == "funding" && <Funding data={funding} ask={profile.ask} />}
            {menu == "jobs" && <Jobs />}
          </div>
        </div>
      </div>
    </div>
  );
}
