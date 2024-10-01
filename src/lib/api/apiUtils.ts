//Mintbase Templates Info
export const GITHUB_REPO_OWNER = 'Mintbase';
export const GITHUB_REPO_NAME = 'templates';
//Ordering for templates, define the ones you want to be first by order
export const REPO_ORDERING = [
  'minsta',
  'blogchain',
  'marketplace',
  'ai-minter',
  'starter-next',
];
//External repos to be added
export const TOP_LEVEL_REPOS = ['minsta'];
export const ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;
export const EXCLUDED_FOLDERS = ['.github', 'bounties'];
const headers: Record<string, string> = {};
if (ACCESS_TOKEN) {
  headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
}

/**
 * Generates URLs for Vercel deployment and GitHub repository based on provided folder and repository names.
 *
 * @param {string | undefined} folder - The folder name within the repository.
 * @param {string | undefined} repo - The repository name. Defaults to the main repository if not provided.
 * @returns {{ repoUrl: string }} An object containing the Vercel deployment URL and the GitHub repository URL.
 */
export function generateVercelDeploymentAndRepoUrls(
  folder: string | undefined,
  repo: string | undefined
) {
  let repoUrl;

  if (folder) {
    repoUrl = `https://github.com/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/tree/main/${folder}`;
  } else {
    repoUrl = `https://github.com/${GITHUB_REPO_OWNER}/${repo}`;
  }

  return { repoUrl: repoUrl };
}

/**
 * Fetches the README text from a GitHub repository with a file named README.md.
 *
 * @param {string} repo - The repository name. Defaults to the main repository if not provided.
 * @param {string | undefined} folderName - The folder name within the repository.
 * @param {string} owner - The owner of the repository. Defaults to the main owner if not provided.
 * @returns {Promise<string>} The text content of the README file.
 */
export async function fetchReadmeText(
  repo: string = GITHUB_REPO_NAME,
  folderName?: string,
  owner: string = GITHUB_REPO_OWNER,
  readmeFileName: string = 'README.md'
) {
  const url = `https://raw.githubusercontent.com/${owner}/${repo}/main/${
    folderName ? `${folderName}/` : ''
  }${readmeFileName}`;

  const readmeResponse = await fetch(url, {
    headers,
    next: { revalidate: 10 },
  });

  if (!readmeResponse.ok) {
    throw new Error(
      `GitHub README request failed: ${readmeResponse.statusText}`
    );
  }

  return await readmeResponse.text();
}

/**
 * Fetches the contents of a GitHub repository.
 *
 * @returns {Promise<Response>} The response object from the GitHub API.
 */
export async function fetchGitHubContents(directory?: string) {
  const response = await fetch(
    `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/contents/${
      directory || ''
    }`,
    {
      headers,
      next: { revalidate: 10 },
    }
  );

  if (!response.ok) {
    throw new Error(`GitHub API request failed: ${response.statusText}`);
  }

  return await response.json();
}

/**
 * Updates a set with an array of values.
 *
 * @param {Set<string>} set - The set to be updated.
 * @param {string[] | null | undefined} values - The array of strings to add to the set. If null or undefined, no action is taken.
 */
export function updateSetWithArray(set: Set<string>, values?: string[] | null) {
  if (values) {
    values.forEach((value) => set.add(value));
  }
}
