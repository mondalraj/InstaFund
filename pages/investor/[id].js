import { Icon } from "@iconify/react";
import Image from "next/image";
import Head from "next/head";
import Navbar from "../../components/commons/Navbar";
import InvestCard from "../../components/Investors/InvestCard";
import TeamCard from "../../components/Investors/teamCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../utils/supabaseClient";

export default function Investor() {
  const [details, setDetails] = useState([]);
  const [investments, setInvestments] = useState([]);
  const [members, setMembers] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    // id,name,location,picUrl,description,designation,discord,linkedin,twitter,isCompany
    (async () => {
      let { data, error } = await supabase
        .from("Investors")
        .select("*,Investments(*),Team_members(*)")
        .eq("id", router.query.id);
      if (error) {
        router.push("/");
      }
      console.log(data[0]);
      setDetails(data[0]);
      setInvestments(data[0].Investments);
      setMembers(data[0].Team_members);
    })();
  }, [router.isReady]);
  return (
    <div className="w-full h-screen flex flex-col">
      <Head>
        <title>{details.name}</title>
      </Head>
      <Navbar />
      <div className="h-1/3 w-2/3 mx-auto py-8">
        <div className="flex justify-center items-center">
          <div className="w-1/4 flex flex-col justify-center items-center ">
            <div className="w-full max-h-fit px-12">
              <Image
                src={details.picUrl || "/Company_Logo.png"}
                alt="Investor Logo"
                width="150"
                height="150"
                className="rounded-full"
              />
            </div>
            <h1 className="text-xl font-medium">{details.designation}</h1>
          </div>
          <div className="flex flex-col w-3/4">
            <div className="flex gap-x-12">
              <h1 className="text-4xl text-white font-bold">{details.name}</h1>
              <div className="flex justify-between items-center gap-x-3">
                <a href={details.linkedin} target="_blank">
                  <Icon
                    icon="eva:linkedin-fill"
                    className="text-3xl cursor-pointer text-slate-500 hover:text-[#0e76a8]"
                  />
                </a>
                <a href={details.twitter} target="_blank">
                  <Icon
                    icon="bxl:twitter"
                    className="text-3xl cursor-pointer text-slate-500 hover:text-[#1da1f2]"
                  />
                </a>
                <a href={details.discord} target="_blank">
                  <Icon
                    icon="bxl:discord"
                    className="text-3xl cursor-pointer text-slate-500 hover:text-[#5865F2]"
                  />
                </a>
              </div>
            </div>
            <p className="text-lg my-2 break-words">{details.description}</p>
            <div className="flex gap-x-4">
              <div className="flex justify-center gap-x-2">
                <Icon icon="ci:tag" className="text-black text-2xl" />
                <h3 className="text-md capitalize text-white">
                  {details.isCompany ? "company" : "entrepreneur"}
                </h3>
              </div>
              <div className="flex justify-center gap-x-2">
                <Icon icon="ci:location" className="text-black text-2xl" />
                <h3 className="text-md capitalize text-white">
                  {details.location}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full h-2/3 bg-base-200">
        <div className="w-1/5">
          <h1 className="text-2xl font-medium p-5">Team Members</h1>
          <div className="flex flex-col gap-y-8 px-5 h-5/6 overflow-y-scroll">
            {members.length != 0 &&
              members?.map((member, index) => (
                <TeamCard key={index} data={member} />
              ))}
          </div>
        </div>
        <div className="divider lg:divider-horizontal lg:ml-0"></div>
        <div className="w-4/5 overflow-y-scroll">
          <h1 className="text-2xl font-medium px-10 py-5">Investments</h1>
          <div className="grid grid-cols-3 gap-16 px-10">
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
          </div>
        </div>
      </div>
    </div>
  );
}
