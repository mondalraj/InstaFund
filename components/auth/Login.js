import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="form-control w-full mt-2">
      <input
        type="email"
        placeholder="Email Address*"
        className="input input-bordered w-full my-2"
      />
      <input
        type="password"
        placeholder="Enter Password*"
        className="input input-bordered w-full my-2"
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
