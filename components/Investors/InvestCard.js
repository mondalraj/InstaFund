import Image from "next/image";

export default function InvestCard({ data }) {
  return (
    <div className="flex items-center p-2 bg-base-300 shadow-xl rounded-md">
      <div className="max-h-fit px-2">
        <Image
          src="/Company_Logo.png" // {data.investorPhotoUrl}
          alt="Company Logo"
          width="90"
          height="90"
          className="rounded-full"
        />
      </div>
      <div className="pl-3">
        <h2 className="text-xl text-white">{data.companyName}</h2>
        <h3 className="text-xs -mt-0.5 ml-1">
          Invested in {new Date(data.dateOfInvestment).getFullYear()}
        </h3>
        <div>
          <h3 className="text-[0.9rem]">Total fund invested</h3>
          <h5 className="text-sm font-bold ml-1 text-white">
            {data.amountInvested} Tez
          </h5>
        </div>
        <div>
          <h3 className="text-[0.9rem]">Equity Owned</h3>
          <h5 className="text-sm font-bold ml-1 text-white">
            {data.equityOwned}%
          </h5>
        </div>
      </div>
    </div>
  );
}
