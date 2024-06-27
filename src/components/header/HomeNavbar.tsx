import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignCenter } from "lucide-react";
import NavLinks from "./NavLinks";

const HomeNavbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full px-8 md:px-0">
      <nav className="flex items-end justify-between h-12 md:h-16">
        <Link href={""} className="hover:text-text-hover">
          march
        </Link>
        <div className="hidden md:flex items-center gap-x-8 text-sm">
          <NavLinks />
        </div>

        <Sheet>
          <SheetTrigger className="md:hidden outline-none focus:outline-none data-[state=open]:translate-x-8 duration-700">
            <AlignCenter size={20} />
          </SheetTrigger>
          <SheetContent className="bg-dashboard border-none">
            <NavLinks isMobile />
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default HomeNavbar;
