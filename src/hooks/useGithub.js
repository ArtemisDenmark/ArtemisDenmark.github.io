import { useState, useEffect } from "react";

const USERNAME = "ArtemisDenmark";

export function useGithub() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(
            `https://api.github.com/users/${USERNAME}/repos?sort=stargazers_count&per_page=6`,
          ),
        ]);

        if (profileRes.status === 403 || reposRes.status === 403) {
          throw new Error("Rate limit exceeded");
        }

        const profileData = await profileRes.json();
        const reposData = await reposRes.json();

        setProfile(profileData);
        setRepos(reposData);
        setError(false);
      } catch (err) {
        console.error("GitHub API Error:", err);
        setError(true);
        // Fallback UI Data
        setProfile({
          login: USERNAME,
          name: "Artemis Denmark",
          bio: "Senior Frontend Developer | Systems Architect",
          avatar_url: "https://github.com/identicons/artemis.png",
        });
        setRepos([
          {
            id: 1,
            name: "Fallback-Repo-1",
            description: "Rate limit hit. Showing fallback.",
            language: "TypeScript",
            html_url: "#",
            stargazers_count: 42,
          },
          {
            id: 2,
            name: "Fallback-Repo-2",
            description: null,
            language: "React",
            html_url: "#",
            stargazers_count: 10,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { profile, repos, loading, error, USERNAME };
}
