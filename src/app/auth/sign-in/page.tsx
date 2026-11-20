"use client";

import { useActionState } from "react";
import { signInWithEmail } from "./actions";

export default function SignInForm() {
  const [state, formAction, isPending] = useActionState(signInWithEmail, null);

  return (
    <form
      action={formAction}
      className="flex flex-col justify-center items-center gap-5 bg-gray-900 min-h-screen"
    >
      <div className="w-sm">
        <h1 className="mt-10 font-bold text-white text-2xl/9 text-center">
          Sign in to your account
        </h1>
      </div>

      <div className="flex flex-col gap-1.5 w-sm">
        <label
          htmlFor="email"
          className="block font-medium text-gray-100 text-sm"
        >
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john@my-company.com"
          className="block bg-white/5 px-2 py-1.5 rounded-md outline-1 outline-white/10 focus:outline-indigo-500 w-full text-white placeholder:text-gray-500"
        />
      </div>

      <div className="flex flex-col gap-1.5 w-sm">
        <label
          htmlFor="password"
          className="block font-medium text-gray-100 text-sm"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="*****"
          className="block bg-white/5 px-2 py-1.5 rounded-md outline-1 outline-white/10 focus:outline-indigo-500 w-full text-white placeholder:text-gray-500"
        />
      </div>

      {state?.error && (
        <div className="px-3 py-2 rounded-md text-red-500 text-sm">
          {state.error}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="flex justify-center bg-indigo-500 hover:bg-indigo-400 px-3 py-1.5 rounded-md w-sm font-semibold text-white text-sm/6"
      >
        Sign in
      </button>
    </form>
  );
}
