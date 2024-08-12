'use client';

import { Card } from "./ui/card"
import { useEffect, useState } from "react";

type Props = {
  kind: number ,
  en: boolean,
  contact: number,
  setContact: (a: number) => void
}

const info = [
  "songmoolnak.arnon@sut.ac.th",
  "+66 61279 8098",
]

export function AlertContact({kind, en, contact, setContact}: Props) {
  const [coppied, setCoppied] = useState(false);
  navigator.clipboard.writeText((kind==0)? info[kind]: "+66612798098");

  return (
    <>
    <div className="h-full w-full fixed top-0 left-0 bottom-0 right-0 z-50" 
      onClick={() => {
        setContact(-1);
      }}
    ></div>
    <Card id="contact-alert" className="h-20 w-96 fixed top-0 left-0 bottom-0 right-0 m-auto z-50">
      <div id="contact-alert" className="w-full h-full flex flex-row justify-center items-center relative">
      <div>{info[kind]}</div>
      <div className="fill-foreground w-10 h-10 ml-2 relative cursor-pointer" onClick={() => {
        setCoppied(prev => !prev);
      }}>
        <svg className="w-8 h-8 fill-foreground" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M11 5C10.4477 5 10 5.44772 10 6V8H14V6C14 5.44772 13.5523 5 13 5H11ZM15.8293 5C15.4175 3.83481 14.3062 3 13 3H11C9.69378 3 8.58254 3.83481 8.17071 5H6C4.34315 5 3 6.34315 3 8V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V8C21 6.34315 19.6569 5 18 5H15.8293ZM16 7V9C16 9.55228 15.5523 10 15 10H9C8.44772 10 8 9.55228 8 9V7H6C5.44772 7 5 7.44772 5 8V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V8C19 7.44772 18.5523 7 18 7H16Z" />
  </svg>
  <div className="absolute top-0 left-0 bottom-0 right-0 m-auto text-center mt-1 mr-1 text-xl">&#10003;</div>
      </div>
  <div className="absolute bottom-0 left-auto text-muted-foreground text-sm">{`${en?"Coppied":"คัดลอกแล้ว"}`}</div>
  <div className="absolute bottom-0 left-auto text-muted-foreground text-sm">{`${en?"Coppied":"คัดลอกแล้ว"}`}</div>
  <div className="absolute top-0 -right-2 p-1 w-10 h-10 fill-none stroke-foreground cursor-pointer" onClick={() => {
    setContact(-1);
  }}><svg>
    <g id="Edit / Close_Circle">
<path id="Vector" d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
    </svg></div>
  </div>
    </Card>
    </>
  )
}
