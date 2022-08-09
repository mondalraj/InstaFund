import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Company({ data }) {
  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(2) + "T";
  };

  if (data.Fundings.length > 1) {
    data.Fundings.sort(
      (a, b) => new Date(b.dateOfFunding) - new Date(a.dateOfFunding)
    );
  }

  return (
    <>
      <Link href={`/company/${data.id}`}>
        <div className="card w-[400px] h-max bg-base-300 shadow-2xl overflow-y-auto cursor-pointer hover:scale-105 duration-200">
          <div className="p-5 flex gap-3">
            <img
              src={data.logoUrl || "https://placeimg.com/400/225/company"}
              alt={`${data.name} logo`}
              className="w-32 h-32 rounded-lg"
            />
            <div className="flex flex-col text-sm justify-between">
              <div>
                <p className="font-bold text-base capitalize">{data.name}</p>
                <p className="text-xs text-gray-400">{data.category}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex">
                  <Icon
                    className="text-xl"
                    icon="entypo:location-pin"
                    color="red"
                  />
                  {data.location}
                </p>
                <p className="flex gap-1">
                  <Icon
                    icon="ant-design:calendar-filled"
                    className="text-lg"
                    color="white"
                  />
                  Founded in {data.founded}
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 flex flex-col space-y-5">
            <p className="text-sm break-words">{data.bio}</p>
            <div className="flex flex-col space-y-4">
              <div className="flex text-sm justify-between">
                <p>Latest funding:</p>
                <p className="font-bold">
                  {data.Fundings[0]
                    ? `${formatCash(data.Fundings[0].raised)} tez`
                    : "Nil"}
                </p>
              </div>
              <div className="flex text-sm justify-between">
                <p>Company Valuation:</p>
                <p className="font-bold">
                  {data.Fundings[0]
                    ? `${formatCash(data.Fundings[0].valuation)} tez`
                    : "1000 tez"}
                </p>
              </div>
              <div className="flex text-sm justify-between">
                <p>Company Ask:</p>
                <p className="font-bold">
                  {formatCash(data.ask)} tez with {data.equity}% equity
                </p>
              </div>
            </div>
            {/* <div className="card-actions justify-center py-5">
            <button className="btn btn-primary w-2/3">Invest Now</button>
          </div> */}
          </div>
        </div>
      </Link>
    </>
  );
}
