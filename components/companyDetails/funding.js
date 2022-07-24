import FundCard from "./fundCard";
import InvestorCard from "./investorCard";

export default function Funding(){
    return (
        <div className="w-2/3 flex flex-col mx-auto">
            <div className="stats shadow bg-slate-700">
                <div className="stat">
                    <div className="stat-figure">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title text-white uppercase text-2xl">Valuation</div>
                    <div className="stat-value text-white text-[1.7rem]">$ 8.5 B</div>
                </div>
                <div className="stat">
                    <div className="stat-figure">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title text-white uppercase text-2xl">Funded Over</div>
                    <div className="stat-value text-white text-[1.7rem]">4 rounds</div>
                </div>
                <div className="stat">
                    <div className="stat-figure">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title text-white uppercase text-2xl">Expected</div>
                    <div className="stat-value text-white text-[1.7rem]">$420 M</div>
                </div>
            </div>
            <div className="my-4">
                <h2 className="text-2xl font-medium my-4">Rounds</h2>
                <div className="flex flex-col">
                    <FundCard recent={true} />
                    <FundCard recent={false} />
                    <FundCard recent={false} />
                    <FundCard recent={false} />
                </div>
            </div>
            <div className="my-4">
                <h2 className="text-2xl font-medium my-4">Investors</h2>
                <div className="grid grid-cols-3 gap-6">
                    <InvestorCard />
                    <InvestorCard />
                    <InvestorCard />
                    <InvestorCard />
                    <InvestorCard />
                </div>
            </div>
        </div>
    )
}