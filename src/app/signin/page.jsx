"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
  
  const handleLogIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: '/',
    });
    console.log({ data, error });
  };

  const handleGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className='min-h-[60vh] flex flex-col justify-center items-center space-y-4'>
      <h2 className='text-4xl font-bold'>Login Page</h2>
      <form onSubmit={handleLogIn}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>Do not have an account? <Link href={'/signup'}>Register</Link></p>
      </form>
      <button onClick={handleGoogle} className="btn btn-outline">
        <FaGoogle /> Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;