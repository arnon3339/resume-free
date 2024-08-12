"use client";

import { usePathname } from "next/navigation";
import { Card } from "./ui/card";
import { useSearchParams } from 'next/navigation'
import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { ModeToggle } from "./theme-icon";

import { useState, useEffect, Suspense } from "react";
import MyDrawer from "./mydrawer";



export default function MyMain({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <MySubMain>
        {children}
      </MySubMain>
    </Suspense>
  );
}

function MySubMain({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
   const searchParams = useSearchParams();
  const en = searchParams.get('en');
  const [isEn, setIsEn] = useState(en === "false"? false: true);

  useEffect(() => {
    setIsEn(en === "false"? false: true);
  }, [en]);

  if (pathname === '/')
    return <div>
      <div className="fixed top-[10px] right-[10px] z-50"><ModeToggle en={isEn}/></div>
        {children}
        </div>
  else
    return (
    <div className="flex flex-col items-center justify-center w-full">
        <div className="fixed top-0 right-0 left-0 mx-auto z-50 flex justify-center items-center bg-transparent">
            <Card className="w-11/12 rounded-full bg-transparent bg-gradient-to-t from-card/0 to-card/100 to-40%">
                <div className="flex flex-row justify-center items-center w-full">
                    <div className="flex flex-row justify-center items-center">
                      <a href="/">
                        <Avatar className="size-24 max-md:size-14">
                          <AvatarImage src={`./images/me4.jpg`} alt="@shadcn" />
                            <AvatarFallback>POK</AvatarFallback>
                        </Avatar>
                      </a>
                        <div className="flex flex-col ml-4 text-xl font-bold text-foreground max-sm:text-sm justify-center items-center max-sm:items-start">
                          <div>{`${isEn?"Arnon Songmoolnak":"อานนท์ สงมูลนาค"}`}</div>
                          <Card className="flex flex-row justify-center items-start text-sm rounded-none max-sm:text-[8px]">
                            <Link replace className={`border-r-2 px-1  ${isEn? "bg-destructive": ""}`} href={`${pathname}?en=true`} onClick={() => {setIsEn(true)}}>EN</Link>
                            <Link replace className={`px-1 ${isEn? "": "bg-destructive"}`} href={`${pathname}?en=false`} onClick={() => {setIsEn(false)}}>TH</Link>
                          </Card>
                        </div>
                    </div>
                    <div className="ml-auto mr-14 flex flex-row max-sm:mr-4 max-sm:mb-2">
                        <MyDrawer en={isEn} title={{en: "menu", th: "เมนู"}}/>
                    </div>
                </div>
            </Card>
            <div className="pl-4"><ModeToggle en={isEn}/></div>
        </div>
        <div className="mt-28 w-10/12 flex flex-col gap-y-4 max-md:mt-24 max-sm:mt-20">
        {children}
        </div>
    </div>
    );
}