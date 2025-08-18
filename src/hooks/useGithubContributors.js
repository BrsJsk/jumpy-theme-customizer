import { useEffect, useState } from 'react';

export default function useGithubContributors(repo) {
  const [contributors, setContributors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}/contributors`)
      .then((res) => res.json())
      .then((data) => setContributors(Array.isArray(data) ? data : []))
      .catch((e) => setError(e));
  }, [repo]);

  return { contributors, error };
}
