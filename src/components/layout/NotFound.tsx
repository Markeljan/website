import Link from 'next/link';
import { Button } from '../ui/button';

export const NotFound = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold mb-5'>404</h1>
        <p className='mb-10'>There does not seem to be anything here...</p>
        <Link href={'/'}>
          <Button className='w-[200px]'>View Templates</Button>
        </Link>
      </div>
    </div>
  );
};
