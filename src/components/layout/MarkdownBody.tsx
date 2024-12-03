/* eslint-disable react/no-children-prop */

'use client';

import { removeImgTags } from '@/lib/utils/image';
import dynamic from 'next/dynamic';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min';
import 'prismjs/plugins/toolbar/prism-toolbar.min';
import 'prismjs/plugins/toolbar/prism-toolbar.min.css';
import { useLayoutEffect } from 'react';

const ReactMarkdown = dynamic(() => import('./Markdown'), {
  ssr: false,
});

export const MarkdownBody = ({ data }: { data: string }) => {
  const isVideoUrl = (url: string) => {
    return (
      url.includes('https://github.com/Mintbase') && url.includes('/assets')
    );
  };

  // Function to replace video URL with video HTML tag
  const embedVideoUrl = (text: string) => {
    // Updated regex to ensure it matches the entire URL
    const videoUrlRegex = /(https:\/\/github\.com\/Mintbase\/[^"'\s]+)/g;
    return text.replace(
      videoUrlRegex,
      '<video src="$1" width="100%" height="400" controls></video>'
    );
  };
  const processedData = isVideoUrl(data) ? embedVideoUrl(data) : data;

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  return <ReactMarkdown children={removeImgTags(processedData)} />;
};
