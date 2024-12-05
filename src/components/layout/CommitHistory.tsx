'use client';

import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { GitCommit, User } from 'lucide-react';

interface Commit {
  id: string;
  message: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
}

const fetchCommitHistory = async (repoUrl: string): Promise<Commit[]> => {
  try {
    // Extract owner and repo from URL
    const urlParts = repoUrl.replace('https://github.com/', '').split('/');
    const owner = urlParts[0];
    const repo = urlParts[1];

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?per_page=5`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch commits');
    }

    const data = await response.json();

    return data.map((commit: GitHubCommit) => ({
      id: commit.sha,
      message: commit.commit.message,
      author: {
        name: commit.commit.author.name,
        avatar: commit.author?.avatar_url || '',
      },
      date: commit.commit.author.date,
    }));
  } catch (error) {
    console.error('Error fetching commits:', error);
    throw error;
  }
};

interface GitCommitHistoryProps {
  repoUrl?: string;
}

export default function GitCommitHistory({ repoUrl }: GitCommitHistoryProps) {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!repoUrl) {
      setLoading(false);
      return;
    }

    fetchCommitHistory(repoUrl)
      .then((data) => {
        setCommits(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch commit history');
        setLoading(false);
      });
  }, [repoUrl]);

  if (!repoUrl) return null;

  if (error) {
    return (
      <Card className='w-full'>
        <CardHeader>
          <CardTitle className='text-red-500'>Error</CardTitle>
        </CardHeader>
        <CardContent>{error}</CardContent>
      </Card>
    );
  }

  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <GitCommit className='h-6 w-6' />
          Agent Development History
        </CardTitle>
        <CardDescription>Recent Commits to Agent Repository</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className='space-y-4'>
          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
                <li key={index} className='flex items-start space-x-4'>
                  <Skeleton className='h-10 w-10 rounded-full' />
                  <div className='space-y-2'>
                    <Skeleton className='h-4 w-[250px]' />
                    <Skeleton className='h-4 w-[200px]' />
                  </div>
                </li>
              ))
            : commits.map((commit) => (
                <li key={commit.id} className='flex items-start space-x-4'>
                  <Avatar>
                    <AvatarImage
                      src={commit.author.avatar}
                      alt={commit.author.name}
                    />
                    <AvatarFallback>
                      <User className='h-4 w-4' />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className='text-sm font-medium'>{commit.message}</p>
                    <p className='text-xs text-muted-foreground'>
                      {commit.author.name} committed on{' '}
                      {new Date(commit.date).toLocaleDateString()}
                    </p>
                  </div>
                </li>
              ))}
        </ul>
      </CardContent>
    </Card>
  );
}

interface GitHubCommit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  author?: {
    avatar_url: string;
  };
}
