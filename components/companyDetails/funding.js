import FundCard from "./fundCard";
import InvestorCard from "./investorCard";

export default function Funding({ data, ask }) {
  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + " K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + " M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + " B";
    if (n >= 1e12) return +(n / 1e12).toFixed(2) + " T";
  };

  data.sort((a, b) => new Date(b.dateOfFunding) - new Date(a.dateOfFunding));

  return (
    <div className="w-2/3 flex flex-col mx-auto">
      <div className="stats shadow bg-slate-700">
        <div className="stat">
          <div className="stat-figure">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-white uppercase text-2xl">
            Valuation
          </div>
          <div className="stat-value text-white text-[1.7rem]">
            {formatCash(data[0].valuation)} Tez
          </div>
        </div>
        <div className="stat">
          <div className="stat-figure">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-white uppercase text-2xl">
            Funded Over
          </div>
          <div className="stat-value text-white text-[1.7rem]">
            {data.length} rounds
          </div>
        </div>
        <div className="stat">
          <div className="stat-figure">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-white uppercase text-2xl">
            Expected
          </div>
          <div className="stat-value text-white text-[1.7rem]">
            {formatCash(ask)} Tez
          </div>
        </div>
      </div>
      {data.length > 0 ? (
        <>
          <div className="my-4">
            <h2 className="text-2xl font-medium my-4">Rounds</h2>
            <div className="flex flex-col">
              {data?.map((item, index) => (
                <FundCard key={index} recent={index == 0} cardData={item} />
              ))}
            </div>
          </div>
          <div className="my-4">
            <h2 className="text-2xl font-medium my-4">Investors</h2>
            <div className="grid grid-cols-3 gap-6">
              {data?.map((item, index) => (
                <InvestorCard key={index} cardData={item} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="mt-20">
          <h1 className="text-3xl text-center">No rounds to be raised</h1>
        </div>
      )}
    </div>
  );
}
