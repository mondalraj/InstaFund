import React, { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

const ScheduleMeet = ({ name }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [meetLink, setMeetLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date, time, meetLink);
    const user = supabase.auth.user();
    const proposalData = {
      type: "meet",
      role: user.user_metadata.type,
      title: `${
        user.user_metadata.type === "company" ? name.com : name.invest
      } schedule a meeting`,
      description: "",
    };
  };
  return (
    <form>
      <input type="checkbox" id="schedule-meet" className="modal-toggle" />
      <div className="modal bg-black/60">
        <div className="modal-box w-1/2 max-w-5xl relative text-center">
          <label
            htmlFor="schedule-meet"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-bold">Schedule a Meeting</h3>
          <div className=" flex justify-between gap-4 my-4">
            <input
              type="date"
              className="input input-bordered w-full"
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="time"
              className="input input-bordered w-full"
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <input
            type="text"
            placeholder="Enter Meeting Link"
            className="input input-bordered w-full"
            value={meetLink}
            onChange={(e) => setMeetLink(e.target.value)}
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

export default ScheduleMeet;
