import Link from "next/link";
import Router from "next/router";
import { Notify } from "notiflix";
import React, { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (email === "" || password === "") {
      Notify.failure("Please fill in all fields");
      return;
    }
    setLoading(true);
    const { user, session, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });
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
    <div className="form-control w-full mt-2">
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
        placeholder="Enter Password*"
        className="input input-bordered w-full my-2"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="submit"
        value={loading ? "Loading..." : "Login"}
        className="btn btn-info mt-3"
        onClick={handleLogin}
      />
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
