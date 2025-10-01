import React from "react";
import { Repository } from "../../types/repo";
import Link from "next/link";
import { FaStar, FaEye, FaCodeBranch } from "react-icons/fa";

const username = "LEEJIHUN6844";

export default async function RepoPage() {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    { next: { revalidate: 60 } }
  );
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const repos = await response.json();
  console.log(repos);

  return (
    <div>
      <h2 className="text-3xl font-bold underline ml-10 mt-10">
        Github Repos Page of {username}!!!!
      </h2>

      <ul>
        {Array.isArray(repos) &&
          repos.map((repo: Repository) => (
            <li key={repo.id} className="bg-gray-100 m-4 p-4 rounded-md">
              <Link href={`/repos/${repo.name}`}>
                <h3 className="text-2xl text-black font-bold">{repo.name}</h3>
                <p>{repo.description}</p>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    <FaStar /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCodeBranch /> {repo.forks_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaEye /> {repo.watchers_count}
                  </span>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
