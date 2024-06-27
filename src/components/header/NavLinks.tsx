import Link from "next/link";
import Twitter from "../icons/Twitter";
import { FC } from "react";

type NavLinksProps = {
  isMobile?: boolean;
};

const NavLinks: FC<NavLinksProps> = ({ isMobile }) => {
  if (isMobile) {
    return (
      <div className="flex flex-col gap-y-8 mt-14 ml-4">
        <div>
          <span className="text-xs text-dull-text">HQ</span>
          <div className="flex flex-col gap-y-6 mt-2">
            <Link href="https://cal.com/march" className="flex-grow">
              Schedule a demo
            </Link>
            <Link href="https://discord.gg/qpgZqt2cag" className="flex-grow">
              Join discord
            </Link>
          </div>
        </div>

        <div>
          <span className="text-xs text-dull-text">Read</span>
          <div className="flex flex-col gap-y-6 mt-2">
            <Link
              href="https://marchhq.notion.site/28ca05934f954d92bf006f410cce8745?v=16987117e945417fa84c36675def9269"
              className="flex-grow"
            >
              Changelog
            </Link>
            <Link
              href="https://marchhq.notion.site/28ca05934f954d92bf006f410cce8745?v=fa9099b0ad4f450ca8d9997a8aecbee8"
              className="flex-grow"
            >
              Journals
            </Link>
            <Link
              href="https://marchhq.notion.site/28ca05934f954d92bf006f410cce8745?v=c75cf2f947b14c3e8a83433340f7edb5"
              className="flex-grow"
            >
              Memes
            </Link>
          </div>
        </div>

        <div>
          <span className="text-xs text-dull-text">Social</span>{" "}
          <div className="flex flex-col gap-y-6 mt-2">
            <Link href="https://x.com/_marchhq" className="flex flex-grow">
              <Twitter size={18} />
              <span className="opacity-0">.</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Link
        href={
          "https://blog.march.cat"
        }
      >
        Blog
      </Link>
      <Link
        href={
          "https://marchhq.notion.site/28ca05934f954d92bf006f410cce8745?v=fa9099b0ad4f450ca8d9997a8aecbee8&pvs=4"
        }
      >
        Journals
      </Link>
      <Link href="https://x.com/_marchhq">
        <Twitter size={18} />
      </Link>
    </>
  );
};

export default NavLinks;
