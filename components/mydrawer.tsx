'use client';

import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'
import IconCV from "@/modules/icons/cv";
import Link from "next/link";
 
import { Button } from "@/components/ui/button"
import { AlertContact } from "./contact";
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { GraduationCap } from "lucide-react";

type Title = {
  en: string,
  th: string
}
 
type Props = {
  title: Title,
  en: boolean
}
 
export default function MyDrawer({title, en}: Props) {
    const [goal, setGoal] = React.useState(350)
    const [isOpen, setIsOpen] = React.useState(false);
    const [over, setOver] = React.useState(-1);
    const [showContact, setShowContact] = React.useState(-1);
    const router = useRouter();
    const pathname = usePathname();

    const menu = {
      home: {
        name: "Home",
        nameTH: "หน้าหลัก",
        path: "/"}
      , 
      grad: {
        name: "Education",
        nameTH: "การศึกษา",
        path: "/grad"}
      , 
      work: {
        name: "Experience",
        nameTH: "ประสบการณ์",
        path: "/exp"}
      , 
      skills: {
        name: "Skill",
        nameTH: "ความสามารถ",
        path: "/skill"}
      , 
      project: {
        name: "Project",
        nameTH: "โปรเจค",
        path: "#"}
      , 
      certification: {
        name: "Certification",
        nameTH: "ใบประกาศ",
        path: "/cer"}
      , 
      publication: {
        name: "Publication",
        nameTH: "งานตีพิมพ์",
        path: "/pub"}
      , 
      hobby: {
        name: "Hobby",
        nameTH: "งานอดิเรก",
        path: "#"}
    }

    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }

    return (
      <div>
        <Drawer open={isOpen} onOpenChange={setIsOpen} onClose={()=>{
          setTimeout(() =>{
          }, 1000);
          }}>
        <DrawerTrigger asChild>
            <Button variant="default" className="mt-2" onClick={() => setIsOpen(true)}>{`${en? title.en: title.th}`}</Button>
        </DrawerTrigger>
        <DrawerContent className="w-full" aria-describedby={undefined}>
            <div className="w-full">
            <VisuallyHidden.Root> 
            <DrawerHeader className="">
                <DrawerTitle>Move Goal</DrawerTitle>
                <DrawerDescription>Set your daily activity goal.</DrawerDescription>
            </DrawerHeader></VisuallyHidden.Root>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] 
             max-md:grid-cols-[repeat(auto-fit,minmax(100px,1fr))] 
            place-items-center place-content-center py-4">
              {Object.keys(menu).map((k, i) => {
                return (
                  <div key={`menu-${i}`} className={`flex flex-col justify-center items-center w-[150px] max-md:w-[100px] place-self-center text-center 
                  ${(i != 4 && i != 7)? "cursor-pointer": ""}`} 
                  onMouseOver={()=>{
                    if (i != 4 && i != 7)
                      setOver(i)
                  }} onMouseLeave={()=> {setOver(-1)}} onClick={() => {
                    router.prefetch(menu[k as keyof typeof menu]["path"] + `?en=${String(en)}`)
                    setIsOpen(false);
                    setTimeout(() => {
                      router.push(menu[k as keyof typeof menu]["path"] + `?en=${String(en)}`);
                    }, 1000);
                  }}
                  >
                    <div className={`fill-foreground w-24 h-24 max-md:w-16 max-md:h-16 p-4 max-md:p-2 rounded-full border-foreground flex justify-center items-center 
                    ${(i==over) || (menu[k as keyof typeof menu]["path"] == pathname)? "border-[4px]": "border-0"}`} 
                    >
                      <IconCV kind={k}/>
                    </div>
                    {/* <GraduationCap className="w-32 h-32"/> */}
                    <div className={`text-2xl max-md:text-lg ${i==over?"font-bold": "font-normal"}`}>{menu[k as keyof typeof menu][en? "name": "nameTH"]}</div>
                  </div>
                );
              })}
            </div>
            <DrawerFooter className="flex flex-row w-full justify-center">
                <DrawerClose asChild>
                <Button className="w-64" variant="outline">{en?"Cancel":"ยกเลิก"}</Button>
                </DrawerClose>
            </DrawerFooter>
            </div>
        </DrawerContent>
        </Drawer>
      </div>
    );
    
};
    