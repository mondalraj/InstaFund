import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="form-control w-full">
      <div className="flex items-center gap-5">
        <div>Register as: </div>
        <label className="label cursor-pointer">
          <input type="radio" name="radio-6" className="radio radio-secondary" />
          <span className="label-text pl-3">Company</span>
        </label>
        <label className="label cursor-pointer">
          <input type="radio" name="radio-6" className="radio radio-secondary" />
          <span className="label-text pl-3">Investor</span>
        </label>
      </div>
      <label className="label">
        <span className="label-text">Email Address*</span>
      </label>
      <input
        type="email"
        placeholder="Type here"
        className="input input-bordered w-full"
      />
      <label className="label">
        <span className="label-text">Password*</span>
      </label>
      <input
        type="password"
        placeholder="Type here"
        className="input input-bordered w-full"
      />
      <label className="label">
        <span className="label-text">Confirm Password*</span>
      </label>
      <input
        type="password"
        placeholder="Type here"
        className="input input-bordered w-full"
      />
      <input type="submit" value="Submit" className="btn btn-info mt-3" />
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
