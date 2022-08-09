import React from "react";

const ScheduleMeet = () => {
  return (
    <form>
      <input type="checkbox" id="schedule-meet" class="modal-toggle" />
      <div class="modal bg-black/60">
        <div class="modal-box w-1/2 max-w-5xl relative text-center">
          <label
            for="schedule-meet"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-2xl font-bold">Schedule a Meeting</h3>
          <div className=" flex justify-between gap-4 my-4">
            <input type="date" class="input input-bordered w-full" />
            <input type="time" class="input input-bordered w-full" />
          </div>

          <input
            type="text"
            placeholder="Enter Meeting Link"
            class="input input-bordered w-full"
          />
          <button class="btn btn-outline btn-info my-4 w-1/3 text-center">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ScheduleMeet;
