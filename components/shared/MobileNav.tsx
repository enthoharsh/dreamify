"use client"
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constant'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
const Logo =()=>(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 35"
      width="250"
      height="100"
      fill="#695eff" // Purple color
    >
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="16">
        ✨Dreamify
      </text>
    </svg>
)
const MobileNav = () => {
    const pathname = usePathname();
    return (
        <header className='header' >
            <Link href={'/'} className='flex item-center gap-2 md:py-2'>
                {/* <Image
                    src={'/assets/images/logo-text.svg'}
                    alt='logo'
                    width={180}
                    height={28}
                /> */}
                <Logo/>
            </Link>
            <nav className='flex gap-2'>
                <SignedIn>
                    <UserButton afterSignOutUrl='/' />
                    <Sheet>
                        <SheetTrigger><Image src={'/assets/icons/menu.svg'} width={32} height={32} className='cursor-pointer' alt='icon'/></SheetTrigger>
                        <SheetContent className='sheet-content sm:w-64'>
                            <>
                            {/* <Image 
                            src={'/assets/images/logo-text.svg'}
                            alt='logo'
                            width={152}
                            height={23}
                            /> */}
                            <Logo/>
                            <ul className='header-nav_elements'>
                    {
                        navLinks.map((link)=>{
                            const isActive = link.route === pathname;
                            return (
                                <li key={link.route} className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}>
                                    <Link className='sidebar-link' href={link.route}>
                                        <Image
                                        src={link.icon}
                                        alt='logo'
                                        width={24}
                                        height={24}
                                        />
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })
                    }
                    </ul>
                            </>
                        </SheetContent>
                    </Sheet>

                </SignedIn>
                <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
            </SignedOut>
            </nav>
        </header>
    )
}

export default MobileNav
