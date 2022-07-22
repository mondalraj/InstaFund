import React from "react";
import { Icon } from "@iconify/react";

export default function Company() {
  return (
    <>
      <div className="card w-[400px] h-max bg-base-300 shadow-2xl overflow-y-auto">
        <div className="p-5 flex gap-3">
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            className="w-32 h-32 rounded-lg"
          />
          <div className="flex flex-col text-sm justify-between">
            <div className="">
              <p className="font-bold text-base">Company Name</p>
              <p className="text-xs text-gray-400">Industry Category</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex">
                <Icon
                  className="text-xl"
                  icon="entypo:location-pin"
                  color="red"
                />
                Location
              </p>
              <p className="flex gap-1">
                <Icon
                  icon="ant-design:calendar-filled"
                  className="text-lg"
                  color="white"
                />
                Founded in 2001
              </p>
            </div>
          </div>
        </div>
        <div className="p-5 flex flex-col space-y-5">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            voluptates enim omnis debitis maxime consectetur sapiente rerum{" "}
          </p>
          <div className="flex flex-col space-y-4">
            <div className="flex text-sm justify-between">
              <p>Latest funding:</p>
              <p className="font-bold">130k tez</p>
            </div>
            <div className="flex text-sm justify-between">
              <p>Company Valuation:</p>
              <p className="font-bold">$1.5M</p>
            </div>
            <div className="flex text-sm justify-between">
              <p>Company Ask:</p>
              <p className="font-bold">$2M with 30% equity</p>
            </div>
          </div>
          <div className="card-actions justify-center py-5">
            <button className="btn btn-primary w-2/3">Invest Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
