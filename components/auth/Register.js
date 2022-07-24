import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div class="form-control w-full">
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
      <label class="label">
        <span class="label-text">Confirm Password*</span>
      </label>
      <input
        type="password"
        placeholder="Type here"
        class="input input-bordered w-full"
      />
      <input type="submit" value="Submit" class="btn btn-info mt-3" />
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
