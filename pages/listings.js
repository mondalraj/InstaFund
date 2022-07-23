import React from "react";
import CompanyCard from "../components/companyList/company";
import Filters from "../components/companyList/filters";
import Search from "../components/companyList/search";

export default function Listings() {
  return (
    <>
      <div className="w-full">
      <div className="p-5 flex flex-col">
        <div className="w-[95%] bg-gray-400 p-28 m-10">hi</div>
        <div className="space-y-10">
        <div className="flex gap-10 justify-center">
        <Search width = "w-1/2" />
        <Filters />
        </div>
        <div className="grid lg:grid-cols-3 place-items-center gap-y-20">
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        </div>
        </div>
        </div>
      </div>
    </>
  );
}
