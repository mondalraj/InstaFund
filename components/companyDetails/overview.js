import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Overview({ desc, founders }) {
  return (
    <>
      <div className="flex flex-col text-white font-medium">
        <p>{desc}</p>
      </div>
      <div>
        <h1 className="text-3xl font-semibold my-5">Founders</h1>
        <div className="flex items-center justify-items-start gap-x-20">
          {founders.length > 0 &&
            founders.map((data, index) => {
              return (
                <div
                  className="w-1/3 bg-base-200 h-full flex items-center gap-x-3 p-5 rounded-md"
                  key={index}
                >
                  <div className="h-full w-[40%]">
                    <img
                      src={data.memberPhotoUrl || "/Company_Logo.png"}
                      alt={data.fullName}
                      width="250"
                      height="250"
                      className="rounded-full"
                    />
                  </div>
                  <div className="w-[60%]">
                    <h2 className="text-xl font-semibold text-white capitalize">
                      {data.fullName}
                    </h2>
                    <h3 className="text-md">{data.designation}</h3>
                    <div className="flex items-center gap-x-3 py-3">
                      <a href={data.linkedin}>
                        <Icon
                          icon="akar-icons:linkedin-v1-fill"
                          color="#0e76a8"
                          className="text-2xl cursor-pointer"
                        />
                      </a>
                      <a href={data.twitter}>
                        <Icon
                          icon="bxl:twitter"
                          color="#1da1f2"
                          className="text-2xl cursor-pointer"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
