"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const SignUp = () => {
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      image,
      password,
    });

    if (error) {
      toast.error("Something went wrong!");
    } else {
      toast.success("Account created successfully!");
      router.push('/');
    }
  };

  const handleGoogle = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      toast.error("Google sign up failed!");
    }
  };

  return (
    <div className='min-h-[60vh] flex flex-col justify-center items-center space-y-4'>
      <h2 className='text-4xl font-bold'>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

          <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Enter Name" />

          <label className="label">Photo URL</label>
          <input name='image' type="text" className="input" placeholder="Enter Photo URL" />

          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />

          <button type="submit" className="btn btn-neutral mt-4">Sign Up</button>
          <p>Already have an account? <Link href={'/signin'}>Login</Link></p>
        </fieldset>
      </form>
      <button onClick={handleGoogle} className="btn btn-outline rounded-xl">
        <FaGoogle /> Sign up with GOOGLE
      </button>
    </div>
  );
};

export default SignUp;