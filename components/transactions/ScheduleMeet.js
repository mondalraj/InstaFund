import React, { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

const ScheduleMeet = ({ name }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [meetLink, setMeetLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = supabase.auth.user();
    const username =
      user.user_metadata.type === "company" ? name.com : name.invest;
    const meetingData = {
      type: "meet",
      role: user.user_metadata.type,
      title: `${username} schedule a meeting`,
      description: JSON.stringify({
        desc: `Meeting Scheduled with ${username} on ${new Date(
          date
        ).toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })} at ${time}`,
        link: meetLink,
      }),
    };
    const { data, error } = await supabase
      .from("Message")
      .insert([meetingData]);
    //   if(user.user_metadata.transaction_id){
    //     const { data, error } = await supabase
    // .from('Transaction')
    // .update({  })
    // .match({ id: user.user_metadata.transaction_id })
    // }
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
