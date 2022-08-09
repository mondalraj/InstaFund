import React, { useState } from "react";

const ScheduleMeet = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [meetLink, setMeetLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date, time, meetLink);
  };
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
            <input
              type="date"
              class="input input-bordered w-full"
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="time"
              class="input input-bordered w-full"
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <input
            type="text"
            placeholder="Enter Meeting Link"
            class="input input-bordered w-full"
            value={meetLink}
            onChange={(e) => setMeetLink(e.target.value)}
          />
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

export default ScheduleMeet;
