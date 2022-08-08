export default function FundCard({ recent, cardData }) {
  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(2) + "T";
  };

  const date = new Date(cardData.dateOfFunding);
  const investor = cardData.investor.split(/[()]/);

  return (
    <div className="relative border-l-2 border-b-2 px-7 border-gray-600">
      <span className="badge absolute top-5 -left-4 rounded-md">
        {cardData.type.charAt(cardData.type.length - 1)}
      </span>
      <h1
        className={`pt-3 ${
          recent ? "text-4xl font-bold text-white" : "text-2xl font-medium"
        }`}
      >
        {cardData.raised.toLocaleString("en-EN")} Tez
      </h1>
      <div className="flex justify-between">
        <div className="flex gap-x-6 py-4">
          <h3>{investor[0].trim()}</h3>
          <h3>
            {date.toLocaleString("en-us", { month: "short" }) +
              " " +
              date.getFullYear()}
          </h3>
          <h3>{formatCash(cardData.valuation)} Tez</h3>
        </div>
        <div className="avatar-group -space-x-6 h-12">
          <div className="avatar">
            <div className="w-10">
              <img src="https://placeimg.com/192/192/people1" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img src="https://placeimg.com/192/192/people2" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img src="https://placeimg.com/192/192/people3" />
            </div>
          </div>
          <div className="avatar placeholder">
            <div className="w-10 bg-neutral-focus text-neutral-content">
              <span>+2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
