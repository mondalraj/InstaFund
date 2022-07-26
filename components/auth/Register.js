import Link from "next/link";
import React from "react";
import { supabase } from "../../utils/supabaseClient";

const Register = () => {
  const handleSignUp = async () => {
    const { user, session, error } = await supabase.auth.signUp(
      {
        email: "mondalrajib2002@gmail.com",
        password: "test1234",
      },
      {
        data: {
          type: "investor",
        },
      }
    );
    if (error) {
      console.log(error);
    }
    if (user) {
      console.log(user);
    }
  };
  return (
    <div className="form-control w-full">
      <div className="flex items-center gap-5">
        <div>Register as: </div>
        <label className="label cursor-pointer">
          <input
            type="radio"
            name="radio-6"
            className="radio radio-secondary"
          />
          <span className="label-text pl-3">Company</span>
        </label>
        <label className="label cursor-pointer">
          <input
            type="radio"
            name="radio-6"
            className="radio radio-secondary"
          />
          <span className="label-text pl-3">Investor</span>
        </label>
      </div>
      <input
        type="email"
        placeholder="Email Address*"
        className="input input-bordered w-full my-2"
      />
      <input
        type="password"
        placeholder="Enter new Password*"
        className="input input-bordered w-full my-2"
      />
      <input
        type="password"
        placeholder="Confirm Password*"
        className="input input-bordered w-full my-2"
      />
      <input
        type="submit"
        value="Submit"
        onClick={handleSignUp}
        className="btn btn-info mt-3"
      />
      <div className="mt-3">
        Existing User?{" "}
        <Link href="/auth?type=login">
          <span className="text-secondary cursor-pointer">Login here.</span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
