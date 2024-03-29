import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../components/commons/Navbar";
import CompanyCard from "../components/companyList/company";
import Filters from "../components/companyList/filters";
import Search from "../components/companyList/search";
import { supabase } from "../utils/supabaseClient";

export default function Listings() {
  const router = useRouter();
  const [company, setCompany] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;
    (async () => {
      let { data, error } = await supabase
        .from("Company")
        .select("*,Fundings(*)");
      setCompany(data);
    })();
  }, [router.isReady]);

  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className="p-5 flex flex-col">
          <div className="w-full my-10 relative bg-black">
            <img src="https://i.imgur.com/OT5RjT8.png" className="opacity-60" />
            <div className="absolute top-2/3 left-0 right-0 z-50 text-center text-4xl font-bold text-white">
              Invest in world-changing companies of your choice.
            </div>
          </div>
          <div className="space-y-10">
            <div className="flex gap-10 justify-center">
              <Search width="w-1/2" />
              <Filters />
            </div>
            <div className="grid lg:grid-cols-3 place-items-center gap-y-20">
              {company.map((data, index) => (
                <CompanyCard key={index} data={data} />
              ))}
              {/* <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
