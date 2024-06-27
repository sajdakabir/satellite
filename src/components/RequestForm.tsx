"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SendRequest } from "@/server/loop-req";
import { MoveRight } from "lucide-react";
import { useState } from "react";

const RequestForm = () => {
  const [email, setEmail] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await SendRequest(email);
    // Closing the dialog
    setOpen(false);
    setEmail("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="outline-none focus:outline-none">
        <button className="group mx-auto flex items-center px-3 py-2 text-xs text-text-hover border border-text-hover rounded-xl hover:bg-text-hover hover:text-black">
          Request Access{" "}
          <MoveRight
            className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
            strokeWidth={1.4}
            size={14}
          />
        </button>
      </DialogTrigger>
      <DialogContent className="bg-dashboard rounded-xl md:rounded-2xl border-none h-fit w-fit px-4 pt-4 pb-3">
        <form
          onSubmit={handleSubmit}
          className="w-fit mx-auto flex flex-col md:flex-row items-center gap-y-4 md:gap-x-4"
        >
          <input
            type="text"
            placeholder="Enter your email"
            className="md:mx-auto md:w-56 py-2"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />

          <button
            type="submit"
            className="mx-auto flex items-center justify-center px-2 py-2 text-xs text-text-hover border border-text-hover rounded-[10px] hover:bg-text-hover hover:text-black"
          >
            Request
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RequestForm;
