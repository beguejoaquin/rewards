import { auth } from "@/lib/auth/server";
import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";

async function SessionContent() {
  await connection();
  const { data: session } = await auth.getSession();

  if (session?.user) {
    return (
      <div className="flex flex-col justify-center items-center gap-2 bg-gray-900 min-h-screen">
        <h1 className="mb-4 text-4xl">
          Logged in as{" "}
          <span className="font-bold underline">{session.user.name}</span>
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-gray-900 min-h-screen">
      <Link
        href="/auth/sign-up"
        className="text-indigo-400 text-lg hover:underline"
      >
        Sign-up
      </Link>
      <Link
        href="/auth/sign-in"
        className="text-indigo-400 text-lg hover:underline"
      >
        Sign-in
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center bg-gray-900 min-h-screen">
          Loading...
        </div>
      }
    >
      <SessionContent />
    </Suspense>
  );
}
