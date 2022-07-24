import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div class="form-control w-full">
      <div class="flex items-center gap-5">
        <div>Register as: </div>
        <label class="label cursor-pointer">
          <input type="radio" name="radio-6" class="radio radio-secondary" />
          <span class="label-text pl-3">Company</span>
        </label>
        <label class="label cursor-pointer">
          <input type="radio" name="radio-6" class="radio radio-secondary" />
          <span class="label-text pl-3">Investor</span>
        </label>
      </div>
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
