import React, { useState } from "react";

const SignedSafe = () => {
  const [document, setDocument] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(document);
  };

  return (
    <form>
      <input type="checkbox" id="signed-safe" className="modal-toggle" />
      <div className="modal bg-black/60">
        <div className="modal-box w-1/2 max-w-5xl relative text-center">
          <label
            htmlFor="signed-safe"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-bold">
            Upload Signed SAFE/SAFT document
          </h3>
          <input
            type="file"
            className="input input-bordered w-full my-4"
            onChange={(e) => setDocument(e.target.files[0])}
          />
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

export default SignedSafe;
