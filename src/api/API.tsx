export const searchGithub = async (query: string) => {
  try {
    const token = import.meta.env.VITE_GITHUB_TOKEN;

    if (!token) {
      throw new Error('GitHub token is undefined. Please check your .env file.');
    }

    const response = await fetch(
      `https://api.github.com/search/users?q=${query}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error('Invalid API response, check the network tab');
    }

    return data;
  } catch (err) {
    console.error('An error occurred:', err);
    return { items: [] };
  }
};

export const searchGithubUser = async (username: string) => {
  try {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    console.log('GitHub Token:', token);

    if (!token) {
      throw new Error('GitHub token is undefined. Please check your .env file.');
    }

    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error('Invalid API response, check the network tab');
    }

    return data;
  } catch (err) {
    console.error('An error occurred:', err);
    return null;
  }
};