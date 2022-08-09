import React from "react";

const SendProposal = () => {
  return (
    <form>
      <input type="checkbox" id="send-proposal" class="modal-toggle" />
      <div class="modal bg-black/60">
        <div class="modal-box w-1/2 max-w-5xl relative text-center">
          <label
            for="send-proposal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-2xl font-bold">Send Proposal</h3>

          <label class="label">
            <span class="label-text">Enter amount (tez)</span>
          </label>
          <label class="input-group w-full mb-4">
            <input
              type="number"
              placeholder="100.01"
              class="input input-bordered"
            />
            <span>tez</span>
          </label>
          <textarea
            class="textarea textarea-bordered w-full h-36"
            placeholder="Write your proposal here"
          ></textarea>
          <br />
          <button class="btn btn-outline btn-info my-4 w-1/3 text-center">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default SendProposal;
