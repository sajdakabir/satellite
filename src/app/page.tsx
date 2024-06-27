import Footer from "@/components/footer/Footer";
import HomeNavbar from "@/components/header/HomeNavbar";
import Image from "next/image";
import CommandHandler from "@/components/CommandHandler";
import RequestForm from "@/components/RequestForm";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col justify-between">
      <HomeNavbar />
      <CommandHandler />
      <section className="h-full max-w-72 md:max-w-80 mx-auto grid place-content-center text-center">
        <Image
          src="/logo.png"
          alt="Hero image"
          width={65}
          height={75}
          className="mx-auto mb-2 h-auto w-auto"
        />

        <h2 className="text-2xl flex flex-col text-text-hover font-medium">
          <span>second brain for</span>
          <span>next generation makers.</span>
        </h2>

        <div className="text-sm mt-2">
        march is a connected workspace for all your action items such as to-do's, notes, urls to put on motion.
        </div>

        <div className="mt-6">
          <RequestForm />
          <div className="mt-3">
            <p className="text-xs text-dull-text">
              building in nights & weekends.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
