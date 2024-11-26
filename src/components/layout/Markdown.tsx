/* eslint-disable react/no-children-prop */

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const Markdown = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown
      children={children}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    />
  );
};

export default Markdown;
