import { useState, useEffect } from 'react';
import { Octokit } from 'octokit';
import { config } from '../config';

const octokit = new Octokit();

export function useGithubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await octokit.request('GET /users/{username}/repos', {
          username: config.github.username,
          sort: 'updated',
          per_page: 100
        });
        setRepos(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return { repos, loading, error };
}