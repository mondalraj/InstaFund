import React from "react";

const SignedSafe = () => {
  return (
    <form>
      <input type="checkbox" id="signed-safe" class="modal-toggle" />
      <div class="modal bg-black/60">
        <div class="modal-box w-1/2 max-w-5xl relative text-center">
          <label
            for="signed-safe"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-2xl font-bold">Upload Signed SAFE/SAFT document</h3>

          <input type="file" class="input input-bordered w-full my-4" />

          <button class="btn btn-outline btn-info my-4 w-1/3 text-center">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignedSafe;
