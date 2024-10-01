import { aiCardsData } from '@/lib/data/aiCardsData';
import { MB_URL } from '@/lib/url';
import { ArrowUp } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';

const AiSection = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (text: string) => {
    setInput(text);
  };

  const goToSmartActions = (message?: string) => {
    const encodedPrompt = encodeURIComponent(message || input);
    window.open(`${MB_URL.SMART_ACTIONS_PROMPT}/${encodedPrompt}`, '_blank');
  };

  return (
    <div className='mt-9 md:mt-16'>
      <div className='flex itmes-center md:justify-center gap-4 max-w-[100vw] overflow-x-auto disable-scrollbars right-edge-extension'>
        {aiCardsData?.map((data) => (
          <Card
            className='bg-[#414D7D40] border border-[#313E52] hover:border-[#E087FFB2] hover:shadow-custom backdrop-blur supports-[backdrop-filter]:bg-[#414D7D40]/55 min-w-[300px] cursor-pointer transition-all duration-300'
            key={data?.title}
            onClick={() => goToSmartActions(`${data.title} ${data.sub}`)}
          >
            <CardContent className='text-left p-5 transition-transform duration-300'>
              <p className='text-mb-white-100 font-semibold'>{data?.title}</p>
              <p className='text-mb-gray-300'>{data?.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className='flex flex-col gap-3 md:flex-row w-full items-center justify-center mt-5'>
        <Input
          placeholder='AI-Driven Wallet Action'
          className={`w-full md:w-[860px] h-[60px] border hover:border-[#E087FFB2] ${input ? 'border-[#E087FFB2]' : 'border-[#E087FF80]'} bg-[#444b3340] backdrop-blur supports-[backdrop-filter]:bg-[#414D7D40]/55 shadow-custom transition-all duration-300 `}
          value={input}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={(event) => {
            // allow enter key
            if (event.key === 'Enter' && input) {
              goToSmartActions();
            }
          }}
        />
        <Button
          disabled={!input}
          variant='secondary'
          className={`z-10 w-full md:w-[60px] h-[42px] md:h-[60px] rounded-md p-0 cursor-pointer text-white hover:text-black disabled:opacity-1 disabled:border disabled:border-[#313E52] ${input ? 'text-black bg-white' : 'text-white bg-[#414d7d8d]'}`}
          onClick={() => goToSmartActions()}
        >
          <ArrowUp className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]' />
        </Button>
      </div>
    </div>
  );
};

export default AiSection;
