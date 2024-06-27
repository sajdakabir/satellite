"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useEffect, useState } from "react";
import Link from "next/link";
import Twitter from "./icons/Twitter";

const CommandHandler = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Search..."
        className="text-sm rounded-full px-3 py-1 border-[1px] border-[#2a2c31] bg-[#4d4d4d0a] text-text-hover"
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="HQ" className="text-dull-text mt-4">
          <CommandItem aria-disabled="false">
            <Link href="https://cal.com/march" className="flex-grow">
              Schedule a demo/ onboarding call
            </Link>
          </CommandItem>
          <CommandItem>
            <Link href="https://discord.gg/qpgZqt2cag" className="flex-grow">
              Join discord
            </Link>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Read" className="text-dull-text mt-2">
          <CommandItem>
            <Link
              href="https://marchhq.notion.site/28ca05934f954d92bf006f410cce8745?v=16987117e945417fa84c36675def9269"
              className="flex-grow"
            >
              Changelog
            </Link>
          </CommandItem>
          <CommandItem>
            <Link
              href="https://marchhq.notion.site/28ca05934f954d92bf006f410cce8745?v=fa9099b0ad4f450ca8d9997a8aecbee8"
              className="flex-grow"
            >
              Journals
            </Link>
          </CommandItem>
          <CommandItem>
            <Link
              href="https://marchhq.notion.site/28ca05934f954d92bf006f410cce8745?v=c75cf2f947b14c3e8a83433340f7edb5"
              className="flex-grow"
            >
              Memes
            </Link>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Social" className="text-dull-text mt-2">
          <CommandItem>
            <Link href="https://x.com/_marchhq" className="flex flex-grow">
              <Twitter size={10} />
              <span className="opacity-0">.</span>
            </Link>
          </CommandItem>
          {/* <CommandItem>LinkedIn</CommandItem> */}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default CommandHandler;
