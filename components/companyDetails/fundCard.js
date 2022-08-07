export default function FundCard({ recent }) {
  return (
    <div className="relative border-l-2 border-b-2 px-7 border-gray-600">
      <span className="badge absolute top-5 -left-4 rounded-md">A</span>
      <h1
        className={`pt-3 ${
          recent ? "text-4xl font-bold text-white" : "text-2xl font-medium"
        }`}
      >
        1,000,000 Tez
      </h1>
      <div className="flex justify-between">
        <div className="flex gap-x-6 py-4">
          <h3>Unknown</h3>
          <h3>Dec 2021</h3>
          <h3>5M Tez</h3>
        </div>
        <div className="avatar-group -space-x-6 h-12">
          <div className="avatar">
            <div className="w-10">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img src="https://placeimg.com/192/192/people" />
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
