import { Icon } from "@iconify/react";
import Image from "next/image";

export default function TeamCard({ data }) {
  return (
    <div className="flex flex-col justify-center p-2 rounded-lg bg-gray-700">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-xl font-medium">{data.fullName}</h2>
          <h4 className="-mt-1 mb-1 text-sm">{data.designation}</h4>
          <div className="flex items-center gap-x-3">
            <a
              href={`https://in.linkedin.com/in/${data.linkedin}`}
              target="_blank"
            >
              <Icon
                icon="akar-icons:linkedin-v1-fill"
                color="#0e76a8"
                className="text-xl cursor-pointer"
              />
            </a>
            <a href={`https://twitter.com/${data.twitter}`} target="_blank">
              <Icon
                icon="bxl:twitter"
                color="#1da1f2"
                className="text-xl cursor-pointer text-black"
              />
            </a>
          </div>
        </div>
        <div className="px-2 py-1">
          <Image
            src={"/Company_Logo.png"} // data.memberPhotoUrl ||
            alt="Image"
            width="60"
            height="60"
            className="rounded-full"
          />
        </div>
      </div>
      <p className="text-sm break-words">{data.description}</p>
    </div>
  );
}
