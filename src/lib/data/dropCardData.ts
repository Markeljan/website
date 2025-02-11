import { MB_URL } from '../url';

export const dropCardData = {
  title: 'Getting Started',
  btnTitle: 'Try for Yourself',
  btnUrl: MB_URL.SMART_ACTIONS,
  cards: [
    {
      id: 1,
      badge: 'Drop',
      action: 'Claim NFT',
      sub: '214 claims',
      bg: '/examples/drop_claim.jpg',
      link: `${MB_URL.BITTE_WALLET}/claim/day15`,
      isSA: false,
      gradientLayer: true,
    },
    {
      id: 2,
      badge: 'AI Minting',
      action: 'Mint an image of an aurora boreal in a tropical beach',
      sub: '',
      bg: '/examples/aurora-bitte.jpg',
      link: MB_URL.SMART_ACTIONS_PROMPT,
      isSA: true,
      gradientLayer: true,
    },
    {
      id: 3,
      badge: 'Agent Market',
      action: 'Fork AI Agent Template and register it in minutes',
      sub: '',
      bg: '/examples/ref-header-bitte.jpg',
      link: MB_URL.REF_AGENT,
      isSA: false,
      gradientLayer: true,
    },
    {
      id: 4,
      badge: 'AI DEFI SWAP',
      action: 'Swap 10 NEAR for DAI',
      sub: '',
      bg: '/examples/defi_swap.svg',
      link: MB_URL.SMART_ACTIONS_PROMPT,
      isSA: true,
      gradientLayer: false,
    },
    {
      id: 5,
      badge: 'Ai Blockchain txs',
      action: 'Deploy a Smart Contract for me',
      sub: '',
      bg: '/examples/chain_txn.svg',
      link: MB_URL.SMART_ACTIONS_PROMPT,
      isSA: true,
      gradientLayer: false,
    },
    {
      id: 6,
      badge: 'Drop',
      action: 'Claim NFT',
      sub: '',
      bg: '/examples/tree-bitte.jpg',
      link: `${MB_URL.BITTE_WALLET}/claim/cycles`,
      isSA: false,
      gradientLayer: true,
    },
  ],
};

export const newsCardData = {
  title: 'News',
  btnTitle: 'See Blog',
  btnUrl: 'https://bitteprotocol.substack.com/',
  cards: [
    {
      id: 1,
      badge: 'Vision',
      action: 'White Paper Announced',
      sub: '214 claims',
      bg: '/examples/white-paper.jpg',
      link: `https://x.com/BitteProtocol/status/1851958139978957072`,
      isSA: false,
      gradientLayer: true,
    },
    {
      id: 2,
      badge: 'Agent Onbording',
      action: 'Agent Selector Playground Launched',
      sub: '',
      bg: '/examples/early-days.jpg',
      link: 'https://open.substack.com/pub/bitteprotocol/p/ai-powered-universal-accounts?r=2m5r3b&utm_campaign=post&utm_medium=web',
      isSA: true,
      gradientLayer: true,
    },
    {
      id: 2,
      badge: 'Vision',
      action: 'Early Days for AI Agents',
      sub: '',
      bg: '/examples/up-graph.jpg',
      link: 'https://open.substack.com/pub/bitteprotocol/p/early-days-for-ai-agents?r=2m5r3b&utm_campaign=post&utm_medium=web',
      isSA: true,
      gradientLayer: true,
    },
    {
      id: 3,
      badge: 'Partnerships',
      action: 'FKA Twigs',
      sub: '',
      bg: '/examples/twigs.jpg',
      link: 'https://open.substack.com/pub/bitteprotocol/p/the-eleven-collection-by-fka-twigs?r=2m5r3b&utm_campaign=post&utm_medium=web',
      isSA: false,
      gradientLayer: true,
    },
    {
      id: 3,
      badge: 'Partnerships',
      action: 'ICC branded login powered by Bitte Wallet',
      sub: '',
      bg: '/examples/letter-cricket.jpg',
      link: 'https://open.substack.com/pub/bitteprotocol/p/cricket-crypto-icc-branded-login?r=2m5r3b&utm_campaign=post&utm_medium=web',
      isSA: false,
      gradientLayer: true,
    },
  ],
};
