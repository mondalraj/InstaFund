import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Overview({ desc }) {
  return (
    <>
      <div className="flex flex-col text-white font-medium">
        <p>{desc}</p>
      </div>
      <div>
        <h1 className="text-3xl font-semibold my-5">Founders</h1>
        <div className="flex items-center justify-items-start gap-x-20">
          <div className="w-1/3 bg-base-200 h-full flex items-center gap-x-3 p-5 rounded-md">
            <div className="max-w-md max-h-fit">
              <Image
                src="/Company_Logo.png"
                alt="Company Logo"
                width="120"
                height="120"
                className="rounded-full"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">
                Founder's Name
              </h2>
              <h3 className="text-md">Designation at company</h3>
              <div className="flex items-center gap-x-3 py-3">
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
              </div>
            </div>
          </div>
          <div className="w-1/3 bg-base-200 h-full flex items-center gap-x-3 p-5 rounded-md">
            <div className="max-w-md max-h-fit">
              <Image
                src="/Company_Logo.png"
                alt="Company Logo"
                width="120"
                height="120"
                className="rounded-full"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">
                Founder's Name
              </h2>
              <h3 className="text-md">Designation at company</h3>
              <div className="flex items-center gap-x-3 py-3">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
