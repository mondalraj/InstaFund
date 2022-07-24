export default function InvestorCard() {
    return (
        <div className="flex justify-between items-center bg-base-300 px-3 py-4 rounded-md shadow-md">
            <div className="pr-8">
                <h3 className="text-lg text-white font-medium">Investor name</h3>
                <h3 className="">Designation</h3>
            </div>
            <div class="w-10 rounded-full border-2 border-white">
                <img src="https://placeimg.com/142/142/people" className="rounded-full" />
            </div>
        </div>
    )
}