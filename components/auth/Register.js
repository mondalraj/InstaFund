import Link from "next/link";
import Router from "next/router";
import { Notify } from "notiflix";
import React, { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (email === "" || password === "" || passwordConfirm === "") {
      Notify.failure("Please fill in all fields");
      return;
    } else if (password !== passwordConfirm) {
      Notify.failure("Passwords do not match");
      return;
    }
    if (type === "") {
      Notify.failure("Please select a user type (Company or Investor).");
      return;
    }
    setLoading(true);
    const { user, session, error } = await supabase.auth.signUp(
      {
        email: email,
        password: password,
      },
      {
        data: {
          type: type,
        },
      }
    );
    if (error) {
      setLoading(false);
      Notify.failure(error.message);
    }
    if (user) {
      setLoading(false);
      console.log(user);
      Router.reload(window.location.pathname);
    }
  };
  return (
    <div className="form-control w-full">
      <input
        type="email"
        placeholder="Email Address*"
        className="input input-bordered w-full my-2"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter new Password*"
        className="input input-bordered w-full my-2"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password*"
        className="input input-bordered w-full my-2"
        required
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <div className="flex items-center gap-5">
        <div>Register as: </div>
        <label className="label cursor-pointer">
          <input
            type="radio"
            name="radio-6"
            className="radio radio-secondary"
            value="company"
            checked={type === "company"}
            onChange={() => setType("company")}
          />
          <span className="label-text pl-3">Company</span>
        </label>
        <label className="label cursor-pointer">
          <input
            type="radio"
            name="radio-6"
            className="radio radio-secondary"
            value="investor"
            checked={type === "investor"}
            onChange={() => setType("investor")}
          />
          <span className="label-text pl-3">Investor</span>
        </label>
      </div>
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
