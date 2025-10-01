import React from 'react';
import { FaStar, FaEye, FaCodeBranch } from 'react-icons/fa';

const username = 'LEEJIHUN6844';

async function getRepo(name: string) {
  const response = await fetch(
    `https://api.github.com/repos/${username}/${name}`,
    { next: { revalidate: 60 } }
  );
  const repo = await response.json();
  return repo;
}

export default async function Repo({ name }: { name: string }) {
  const repo = await getRepo(name);

  return (
    <div>
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
    </div>
  );
}