import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="form-control w-full mt-2">
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
      <input type="submit" value="Submit" className="btn btn-info mt-3" />
      <div className="mt-3">
        New User?{" "}
        <Link href="/auth?type=register">
          <span className="text-secondary cursor-pointer">Register here.</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
