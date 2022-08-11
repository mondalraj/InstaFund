import React, { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

const UploadSafe = ({ wantToRaise, name }) => {
  const [document, setDocument] = useState();
  const [amount, setAmount] = useState(wantToRaise);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const type = document.type.split("/")[1];

    const { file, fileError } = await supabase.storage
      .from("documents")
      .upload(`${name + "_SAFE_Form"}.${type}`, document, {
        cacheControl: "1800",
        upsert: true,
        contentType: `application/${type}`,
      });

    if (fileError) throw new Error("Something wrong with upload file");
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
            accept="application/msword,application/pdf"
            className="input input-bordered w-full my-4"
            onChange={(e) => setDocument(e.target.files[0])}
          />
          <p className="text-xs text-gray-500">
            <a
              href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/investor-avatars/SAFE_SAFT_Form.pdf`}
              target="_blank"
              className="underline"
            >
              Format
            </a>{" "}
            of SAFE/SAFT
          </p>
          <label className="label">
            <span className="label-text">Enter amount (tez)</span>
          </label>
          <label className="input-group w-full">
            <input
              type="number"
              placeholder="100.01"
              className="input input-bordered"
              value={amount}
              disabled
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
