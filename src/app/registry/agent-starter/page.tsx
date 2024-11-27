import { DetailsSideBar } from '@/components/layout/DetailsSidebar';
import { MarkdownBody } from '@/components/layout/MarkdownBody';
import { RegistryData } from '@/lib/types/agent.types';

export default function AgentStarterDetail() {
  const agent: RegistryData = {
    name: 'Agent Starter',
    coverImage: '/logo.svg',
    description:
      'Create your own AI agent in minutes. Our starter template provides everything you need to build, test and deploy custom AI agents',
    author: 'Bitte',
    repoUrl:
      'https://github.com/BitteProtocol/agent-next-boilerplate/tree/main',
    id: 'agent-starter',
    verified: true,
  };

  return (
    <div className='container m-auto'>
      <div className='w-full md:flex gap-20'>
        <div className='w-full md:w-1/3 h-auto'>
          <DetailsSideBar agent={agent} />
        </div>
        <div className='w-full md:w-2/3 py-6 md:py-16'>
          <div className='markdownBody'>
            <MarkdownBody data={description} />
          </div>
        </div>
      </div>
    </div>
  );
}

const description = `# Bitte AI Agent NextJS Template

This template provides a starting point for creating AI agents using the Bitte Protocol with Next.js. It includes pre-configured endpoints and tools that demonstrate common agent functionalities.

## Features

- 🤖 Pre-configured AI agent setup
- 🛠️ Built-in tools and endpoints:
  - Blockchain information retrieval
  - NEAR transaction generation
  - Reddit frontpage fetching
  - Twitter share intent generation
  - Coin flip functionality
- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 📝 TypeScript support
- 🔄 Hot reload development environment

## Quick Start

1. Clone this repository
2. Install dependencies:

\`\`\`bash
pnpm install
\`\`\`

3. Start the development server:

\`\`\`bash
pnpm run dev
\`\`\`

This will:
- Start your Next.js application
- Launch make-agent 
- Prompt you to sign a message in Bitte wallet to create an API key
- Launch your agent in the Bitte playground
- Allow you to freely edit and develop your code in the playground environment


## Available Tools

The template includes several pre-built tools:

### 1. Blockchain Information
- Endpoint: \`/api/tools/get-blockchains\`
- Returns a randomized list of blockchain networks

### 2. NEAR Transaction Generator
- Endpoint: \`/api/tools/create-transaction\`
- Creates NEAR transaction payloads for token transfers

### 3. Reddit Frontpage
- Endpoint: \`/api/tools/reddit\`
- Fetches current posts from Reddit's frontpage

### 4. Twitter Share
- Endpoint: \`/api/tools/twitter\`
- Generates Twitter share intent URLs

### 5. Coin Flip
- Endpoint: \`/api/tools/coinflip\`
- Simple random coin flip generator

## AI Plugin Configuration

The template includes a pre-configured AI plugin manifest at \`/.well-known/ai-plugin.json\`. You can customize the assistant's behavior by modifying the configuration in:


## Deployment

1. Push your code to GitHub
2. Deploy to Vercel or your preferred hosting platform
3. Add your \`BITTE_KEY\` to the environment variables
4. The \`make-agent deploy\` command will automatically run during build

## Learn More

- [Bitte Protocol Documentation](https://docs.bitte.ai)
- [Next.js Documentation](https://nextjs.org/docs)
- [OpenAPI Specification](https://swagger.io/specification/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License`;
