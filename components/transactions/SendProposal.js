import React, { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

const SendProposal = ({ name }) => {
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = supabase.auth.user();
    const proposalData = {
      type: "proposal",
      role: user.user_metadata.type,
      title: `${
        user.user_metadata.type === "company" ? name.com : name.invest
      } sends a proposal`,
      description: description,
    };
    const { data, error } = await supabase
      .from("Message")
      .insert([proposalData]);
    //   if(user.user_metadata.transaction_id){
    //     const { data, error } = await supabase
    // .from('Transaction')
    // .update({  })
    // .match({ id: user.user_metadata.transaction_id })
    // }
  };

  return (
    <form>
      <input type="checkbox" id="send-proposal" className="modal-toggle" />
      <div className="modal bg-black/60">
        <div className="modal-box w-1/2 max-w-5xl relative text-center">
          <label
            htmlFor="send-proposal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-bold">Send Proposal</h3>

          <label className="label">
            <span className="label-text">Enter amount (tez)</span>
          </label>
          <label className="input-group w-full mb-4">
            <input
              type="number"
              placeholder="100.01"
              min={10}
              step=".01"
              className="input input-bordered"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <span>tez</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full h-36"
            placeholder="Write your proposal here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <br />
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

export default SendProposal;
