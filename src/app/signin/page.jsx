"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const SignIn = () => {
  
const router = useRouter();

  const handleLogIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      toast.error("Invalid email or password!");
    } else {
      toast.success("Logged in successfully!");
      router.push('/');
    }
  };

 const handleGoogle = async () => {
  const { data, error } = await authClient.signIn.social({
    provider: "google",
    callbackURL: "/",
  });

  if (error) {
    toast.error("Google sign in failed!");
  }
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