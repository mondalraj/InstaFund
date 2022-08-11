export default function Ask({ data }) {
  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(2) + "T";
  };

  return (
    <>
      <div className="flex gap-x-10 justify-between">
        <div>
          <h1 className="text-xl font-semibold">Expected money to raise</h1>
          <h3 className="text-2xl font-medium text-green-500">
            {formatCash(data.raise)} tez
          </h3>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Equity dilution</h1>
          <h3 className="text-2xl font-medium text-blue-300">{data.equity}%</h3>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Type of funding</h1>
          <h3 className="text-2xl font-medium text-purple-500">
            {data.series}
          </h3>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-xl underline my-2">Why we want to raise 💰 ?</h1>
        <p className="text-lg">
          {data.reason || "No reason provided by a company"}
        </p>
      </div>
    </>
  );
}
