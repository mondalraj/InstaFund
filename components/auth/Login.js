import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div class="form-control w-full mt-2">
      <label class="label">
        <span class="label-text">Email Address*</span>
      </label>
      <input
        type="email"
        placeholder="Type here"
        class="input input-bordered w-full"
      />
      <label class="label">
        <span class="label-text">Password*</span>
      </label>
      <input
        type="password"
        placeholder="Type here"
        class="input input-bordered w-full"
      />
      <input type="submit" value="Submit" class="btn btn-info mt-3" />
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
