import React from 'react';

const SignUp = () => {
    return (
        <div className='min-h-[60vh] flex flex-col justify-center items-center space-y-4'>
      <h2 className='text-4xl font-bold'>SignUp Page</h2>
      <form>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
    );
};

export default SignUp;