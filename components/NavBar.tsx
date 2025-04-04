import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { CalendarIcon, Contact, GithubIcon, LinkedinIcon, Mail, Package2, Phone } from 'lucide-react';
import Link from 'next/link';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { LinkPreview } from "@/components/ui/link-preview";

const NavBar = () => {
  return (
    <header className="w-full h-20 bg-[var(--color-secondary)]">
      <nav className="p-6 text-[var(--color-text)] flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo & Name */}
        <div className="flex gap-4 items-center">
          <Image src="/npm.png" alt="npm" width={82} height={82} />
          <h1 className="text-2xl font-semibold -ml-3">@navin0507</h1>
        </div>

        {/* Links */}
        <div className="hidden sm:flex gap-4 items-center">
          <LinkPreview
            url="https://github.com/NAVIN0507"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 border-none"
          >
            <Link href="https://github.com/NAVIN0507" passHref>
              <Button
                className="bg-green-700 cursor-pointer text-white hover:-translate-y-1 hover:bg-[var(--color-hover)] transition-transform duration-300 flex gap-2"
              >
                GitHub <GithubIcon size={18} />
              </Button>
            </Link>
          </LinkPreview>
           <Button
                className="bg-black cursor-pointer text-white hover:-translate-y-1 hover:bg-[var(--color-hover)] transition-transform duration-300 flex gap-2"
              >
                Packages <Package2 size={18} />
              </Button>

          <HoverCard>
  <HoverCardTrigger asChild>
    <Button
      className="bg-white text-black hover:-translate-y-1 cursor-pointer hover:bg-gray-100 transition-transform duration-300 flex gap-2 px-4 py-2 rounded-md"
    >
      Contact <Contact size={18} />
    </Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-[360px] bg-white text-black shadow-xl rounded-2xl p-5 border border-gray-200">
    <div className="flex gap-4 items-start">
      <Avatar className="h-16 w-16 border-2 border-gray-300 shadow-sm">
        <AvatarImage src="avatar.jpeg" alt="Navin" />
        <AvatarFallback>NN</AvatarFallback>
      </Avatar>
      <div className="space-y-2 text-sm">
        <h4 className="font-semibold text-lg">Navin N</h4>
        <div className="flex items-center gap-2 text-gray-700">
          <Mail size={16} className="text-gray-500" />
          <span>navinofficial2005@gmail.com</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Phone size={16} className="text-gray-500" />
          <span>+91 82486 90516</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <LinkedinIcon size={16} className="text-gray-500" />
          <span>
            <a
              href="https://www.linkedin.com/in/navin-n0507/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-600"
            >
              LinkedIn Profile
            </a>
          </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>

        </div>
      </nav>
    </header>
  );
};

export default NavBar;
