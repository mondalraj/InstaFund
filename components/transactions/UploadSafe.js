import React, { useState } from "react";

const UploadSafe = () => {
  const [document, setDocument] = useState();
  const [amount, setAmount] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(document, amount);
  };
  return (
    <form>
      <input type="checkbox" id="upload-safe" className="modal-toggle" />
      <div className="modal bg-black/60">
        <div className="modal-box w-1/2 max-w-5xl relative text-center">
          <label
            htmlFor="upload-safe"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-bold">Upload SAFE/SAFT document</h3>

          <input
            type="file"
            className="input input-bordered w-full my-4"
            onChange={(e) => setDocument(e.target.files[0])}
          />
          <label className="label">
            <span className="label-text">Enter amount (tez)</span>
          </label>
          <label className="input-group w-full">
            <input
              type="number"
              placeholder="100.01"
              className="input input-bordered"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <span>tez</span>
          </label>
          <button
            className="btn btn-outline btn-info my-4 w-1/3 text-center"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default UploadSafe;
