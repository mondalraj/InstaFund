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
      <input type="checkbox" id="upload-safe" class="modal-toggle" />
      <div class="modal bg-black/60">
        <div class="modal-box w-1/2 max-w-5xl relative text-center">
          <label
            for="upload-safe"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-2xl font-bold">Upload SAFE/SAFT document</h3>

          <input
            type="file"
            class="input input-bordered w-full my-4"
            onChange={(e) => setDocument(e.target.files[0])}
          />
          <label class="label">
            <span class="label-text">Enter amount (tez)</span>
          </label>
          <label class="input-group w-full">
            <input
              type="number"
              placeholder="100.01"
              class="input input-bordered"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <span>tez</span>
          </label>
          <button
            class="btn btn-outline btn-info my-4 w-1/3 text-center"
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
