'use client';

import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useWindowSize } from '@/lib/utils/useWindowSize';
import { developerLinks, communityLinks } from '@/lib/data/navData';
import { Modal } from '../ui/Modal';
import { MB_URL } from '@/lib/url';

const Header = () => {
  const { width } = useWindowSize();
  const isMobile = !!width && width < 1024;

  const [isModalOpen, setModalOpen] = useState(false);

  return !isMobile ? (
    <header className='flex w-full h-20 border-b border-mb-gray-800 top-0 sticky z-50 bg-black backdrop-blur supports-[backdrop-filter]:bg-mb-black/60'>
      <div className='flex justify-between items-center px-8 content-around h-full w-full'>
        <Link href='/' className='flex h-full'>
          <img
            src='/bitte.svg'
            alt='bitte-desktop-logo'
            width='120px'
            height='auto'
          />
        </Link>
        <div className='flex justify-end'>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem value='products'>
                <NavigationMenuTrigger className='bg-transparent'>
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid gap-3 p-4 w-full md:w-[350px]'>
                    <ListItem href={MB_URL.BITTE_WALLET} title='AI Wallet'>
                      Sponsored AI transaction builder with drops.
                    </ListItem>
                    <ListItem
                      href={MB_URL.TEMPLATES_URL}
                      title='Developer Templates'
                    >
                      Launch cutting-edge Web3 experience with ready made
                      templates in minutes.
                    </ListItem>
                    <ListItem href={MB_URL.MINTBASE_OMNI} title='Marketplace'>
                      Discover, create, and sell NFTs on NEAR.
                    </ListItem>
                    <ListItem href={MB_URL.PAYMASTER} title='Paymaster'>
                      Fund gasless transactions for your community.
                    </ListItem>
                    <ListItem href={MB_URL.DROPS} title='Token Drops'>
                      Create NFT drops with AI or our UI with gasless claiming
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='bg-transparent'>
                  Developers
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid gap-3 p-4 w-full md:w-[205px]'>
                    {developerLinks.map((devs) => (
                      <ListItem
                        key={devs.title}
                        title={devs.title}
                        href={devs.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem value='community'>
                <NavigationMenuTrigger className='bg-transparent'>
                  Community
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid gap-3 p-4 w-full md:w-[205px]'>
                    {communityLinks.map((community) => (
                      <ListItem
                        key={community.title}
                        title={community.title}
                        href={community.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className='bg-transparent'>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} gap-1.5 bg-transparent`}
                  rel='noopener noreferrer'
                  target='_blank'
                  href={MB_URL.AI_DOCS}
                >
                  Docs <ArrowUpRight size={12} color='#FAFAFA' />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className='bg-white rounded-sm'>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} gap-1.5 bg-transparent text-black`}
                  rel='noopener noreferrer'
                  target='_blank'
                  href={MB_URL.BITTE_WALLET}
                >
                  Create Wallet <ArrowUpRight size={12} color='#000000' />
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  ) : (
    <>
      <header className='w-full h-[73px] px-6 md:px-16 border-b border-mb-gray-800 flex top-0 justify-between items-center sticky z-50 bg-black backdrop-blur supports-[backdrop-filter]:bg-mb-black/60'>
        <Link href='/' className='flex items-center h-full'>
          <img
            src='/bitte.svg'
            alt='bitte-mobile-logo'
            width='100px'
            height='auto'
          />
        </Link>
        {isModalOpen ? (
          <X size={24} color='#FFFFFF' onClick={() => setModalOpen(false)} />
        ) : (
          <Menu size={24} color='#FFFFFF' onClick={() => setModalOpen(true)} />
        )}
      </header>

      <Modal isOpen={isModalOpen} closeModal={() => setModalOpen(false)}>
        <div className='flex flex-col gap-7 justify-center border-b border-mb-gray-800 bg-black'>
          <p className='text-[12px] font-semibold text-mb-gray-350 uppercase'>
            Products
          </p>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://wallet.mintbase.xyz/'
            aria-label={`Check out Mintbase Wallet`}
          >
            <p className='text-lg text-mb-white-100 font-medium'>AI Wallet</p>
            <p className='text-sm text-mb-gray-350'>
              The easiest crypto wallet get started in 30 seconds, non custodial
              and 100% secure.
            </p>
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://templates.mintbase.xyz/'
            aria-label={`Check out Dev tools`}
          >
            <p className='text-lg text-mb-white-100 font-medium'>
              Developer Tools
            </p>
            <p className='text-sm text-mb-gray-350'>
              The easiest crypto wallet get started in 30 seconds, non custodial
              and 100% secure.
            </p>
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            className='mb-7'
            href='https://mintbase.xyz'
            aria-label={`Check out Mintbase Marketplace`}
          >
            <p className='text-lg text-mb-white-100 font-medium'>Marketplace</p>
            <p className='text-sm text-mb-gray-350'>
              The easiest crypto wallet get started in 30 seconds, non custodial
              and 100% secure.
            </p>
          </a>
        </div>
        <div className='flex flex-col gap-7 justify-center border-b border-mb-gray-800 bg-black mt-7'>
          <p className='text-[12px] font-semibold text-mb-gray-350 uppercase'>
            Developers
          </p>
          <div className='grid grid-cols-2 gap-2 mb-7'>
            {developerLinks?.map((devItem, i) => (
              <a
                className='mb-white-100 text-sm font-medium mb-4'
                key={`dev-links-${i}`}
                rel='noopener noreferrer'
                target='_blank'
                href={devItem?.href}
              >
                {devItem?.title}
              </a>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-7 justify-center bg-black mt-7'>
          <p className='text-[12px] font-semibold text-mb-gray-350 uppercase'>
            Community
          </p>
          <div className='grid grid-cols-2 gap-2 mb-7'>
            {communityLinks?.map((communityItem, i) => (
              <a
                className='mb-white-100 text-sm font-medium mb-4'
                key={`community-links-${i}`}
                rel='noopener noreferrer'
                target='_blank'
                href={communityItem?.href}
              >
                {communityItem?.title}
              </a>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          aria-label={`Get more Infos about ${title}`}
          rel='noopener noreferrer'
          target='_blank'
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#414D7D40] hover:text-accent-foreground focus:bg-[#414D7D40] focus:text-accent-foreground py-4',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          {children ? (
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
              {children}
            </p>
          ) : null}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default Header;
