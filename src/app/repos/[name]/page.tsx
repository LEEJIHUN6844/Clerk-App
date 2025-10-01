import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";
import React, { Suspense } from "react";
export default function RepoPage({ params }: { params: { name: string } }) {
  return (
    <div className="flex flex-col items-center max-w-lg mx-auto">
      <Link
        href="/repos"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
      >
        Back to Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={params.name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={params.name} />
      </Suspense>
    </div>
  );
}
