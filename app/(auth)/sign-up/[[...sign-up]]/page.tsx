'use client'

import LoginBanner from "@/components/loginBanner";
import { SignUp, SignedOut, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-1 mx-auto max-w-7xl bg-white text-black">
        <div className="flex flex-row flex-wrap justify-center mt-10">
          <SignedOut>
            <div className="basis-full grow sm:basis-auto px-5">
              <LoginBanner />
            </div>
          </SignedOut>
          <div className="basis-auto mt-7 xl:mt-0">
            <SignUp />
          </div>
        </div>
      </div>
    </>
  );
}
