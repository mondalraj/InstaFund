export default function InvestorCard({ cardData }) {
  const investor = cardData.investor.split(/[()]/);
  return (
    <div className="flex justify-between items-center bg-base-300 px-3 py-4 rounded-md shadow-md">
      <div className="pr-8">
        <h3 className="text-lg text-white font-medium">{investor[0].trim()}</h3>
        <h3 className="">{investor[1].trim()}</h3>
      </div>
      <div className="w-10 h-10 rounded-full border-2 border-white">
        <img
          src={cardData.photo_url || "https://placeimg.com/142/142/people"}
          className="rounded-full w-full h-full object-fit"
        />
      </div>
    </div>
  );
}
