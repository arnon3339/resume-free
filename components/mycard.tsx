'use client';

import * as React from "react"
import Link from "next/link";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  Linkedin,
  PhoneCall,
  Mail,

} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { AlertContact } from "@/components/contact";

import { TypeAnimation } from 'react-type-animation';
import MyDrawer from "./mydrawer";


export function MyCard({en}: any) {
  const [showContact, setShowContact] = React.useState(-1);
  const [isEn, setIsEn] = React.useState(en);

  React.useEffect(() => {

  }, [isEn]);

  return (
    <div className="relative h-full w-full flex flex-row justify-center items-center">
      {showContact != -1 && <AlertContact kind={showContact} en={isEn} contact={showContact} setContact={setShowContact}/>}
      <Card className="w-11/12">
        <CardContent className="py-4">
          <div className="flex flex-row justify-start items-start max-sm:items-stretch max-sm:flex-col">
              <div className="flex flex-col justify-center items-center">
                <a href="/">
                  <Avatar className="size-52 max-md:size-32">
                      <AvatarImage src={`./images/me4.jpg`} alt="@shadcn" />
                      <AvatarFallback>POK</AvatarFallback>
                  </Avatar></a>
                  <Card className="flex flex-row justify-center items-start text-sm rounded-none">
                    <Link replace className={`border-r-2 px-1  ${isEn? "bg-destructive": ""}`} href="/?en=true" onClick={() => {setIsEn(true)}}>EN</Link>
                    <Link replace className={`px-1 ${isEn? "": "bg-destructive"}`} href="/?en=false" onClick={() => {setIsEn(false)}}>TH</Link>
                  </Card>
                  <MyDrawer en={isEn} title={{en:"Know me more", th:"ข้อมูลเพิ่มเติ่ม"}}/>
              </div>
              <div className="pl-10 pt-4 flex flex-col justify-start items-start max-sm:px-0">
              <div className="text-4xl font-bold max-md:text-2xl max-sm:text-center max-sm:w-full">{`${isEn?"Arnon Songmoolnak": "อานนท์ สงมูลนาค"}`}</div>
              <div className="text-xl min-h-56 max-lg:min-h-80 max-md:min-h-56 max-md:text-sm max-sm:text-center">    
                <TypeAnimation key={String(isEn)}
                  sequence={[
                    isEn?"I am a physicist with a strong passion for coding and data analysis, honed through\
                     self-learning and practical experience. Throughout my career, I have successfully applied\
                      my programming skills to complex data analysis tasks, yielding insightful results and contributing\
                       to significant projects. I am now eager to transition into a data scientist role, where I can leverage\
                        my analytical expertise and coding proficiency to drive data-driven decision-making and innovation. ": 
                        "ผมเป็นนักฟิสิกส์ที่มีความหลงใหลในการเขียนโปรแกรมและการวิเคราะห์ข้อมูล ซึ่งพัฒนามาจากการเรียนรู้ด้วยตนเองและประสบการณ์จริง ตลอดอาชีพการงานของผม\
                         ผมได้ใช้ทักษะการเขียนโปรแกรมในการวิเคราะห์ข้อมูลที่ซับซ้อน โดยให้ผลลัพธ์ที่มีคุณค่าและมีส่วนร่วมในโครงการสำคัญๆ นอกจากนี้ ผมยังพัฒนาแอปพลิเคชันแบบ\
                          full-stack ที่ใช้ทั้งเทคโนโลยี front-end และ back-end ตอนนี้ผมมีความต้องการที่จะก้าวเข้าสู่บทบาทของนักวิทยาศาสตร์ข้อมูล โดยใช้ความเชี่ยวชาญในการพัฒนา\
                           full-stack และทักษะการวิเคราะห์ในการขับเคลื่อนการตัดสินใจและนวัตกรรมที่ขับเคลื่อนด้วยข้อมูล", // Types 'One'
                    2000, // Waits 1s
                    () => {
                      // console.log('Sequence completed');
                    },
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={0}
                  speed={64}
                />
              </div>
              </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex flex-row justify-end w-full items-stretch max-sm:justify-center">
            <a className="fill-foreground flex flex-col justify-center mr-2 cursor-pointer" href="https://github.com/arnon3339" target="_blank">
<svg className="fill-foreground w-6 h-6" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" className="stroke-card fill-card" strokeWidth="1" fillRule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" className="fill-foreground">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">

</path>
            </g>
        </g>
    </g>
</svg>

            </a>
            <a className="fill-foreground flex flex-col justify-center mr-2 cursor-pointer" 
            href="https://www.linkedin.com/in/arnon-songmoolnak-9b64a7142/" target="_blank">
            <Linkedin className="w-6 h-6"/>
            </a>
            <a className="fill-foreground flex flex-col justify-center mr-2 cursor-pointer" 
            href="/files/my-resume.pdf" target="_blank">
            <svg className="h-6 w-6 fill-foreground"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V11C19 11.5523 19.4477 12 20 12C20.5523 12 21 11.5523 21 11V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM10.3078 23.5628C10.4657 23.7575 10.6952 23.9172 10.9846 23.9762C11.2556 24.0316 11.4923 23.981 11.6563 23.9212C11.9581 23.8111 12.1956 23.6035 12.3505 23.4506C12.5941 23.2105 12.8491 22.8848 13.1029 22.5169C14.2122 22.1342 15.7711 21.782 17.287 21.5602C18.1297 21.4368 18.9165 21.3603 19.5789 21.3343C19.8413 21.6432 20.08 21.9094 20.2788 22.1105C20.4032 22.2363 20.5415 22.3671 20.6768 22.4671C20.7378 22.5122 20.8519 22.592 20.999 22.6493C21.0755 22.6791 21.5781 22.871 22.0424 22.4969C22.3156 22.2768 22.5685 22.0304 22.7444 21.7525C22.9212 21.4733 23.0879 21.0471 22.9491 20.5625C22.8131 20.0881 22.4588 19.8221 22.198 19.6848C21.9319 19.5448 21.6329 19.4668 21.3586 19.4187C21.11 19.3751 20.8288 19.3478 20.5233 19.3344C19.9042 18.5615 19.1805 17.6002 18.493 16.6198C17.89 15.76 17.3278 14.904 16.891 14.1587C16.9359 13.9664 16.9734 13.7816 17.0025 13.606C17.0523 13.3052 17.0824 13.004 17.0758 12.7211C17.0695 12.4497 17.0284 12.1229 16.88 11.8177C16.7154 11.4795 16.416 11.1716 15.9682 11.051C15.5664 10.9428 15.1833 11.0239 14.8894 11.1326C14.4359 11.3004 14.1873 11.6726 14.1014 12.0361C14.0288 12.3437 14.0681 12.6407 14.1136 12.8529C14.2076 13.2915 14.4269 13.7956 14.6795 14.2893C14.702 14.3332 14.7251 14.3777 14.7487 14.4225C14.5103 15.2072 14.1578 16.1328 13.7392 17.0899C13.1256 18.4929 12.4055 19.8836 11.7853 20.878C11.3619 21.0554 10.9712 21.2584 10.6746 21.4916C10.4726 21.6505 10.2019 21.909 10.0724 22.2868C9.9132 22.7514 10.0261 23.2154 10.3078 23.5628ZM11.8757 23.0947C11.8755 23.0946 11.8775 23.0923 11.8824 23.0877C11.8783 23.0924 11.8759 23.0947 11.8757 23.0947ZM16.9974 19.5812C16.1835 19.7003 15.3445 19.8566 14.5498 20.0392C14.9041 19.3523 15.2529 18.6201 15.5716 17.8914C15.7526 17.4775 15.9269 17.0581 16.0885 16.6431C16.336 17.0175 16.5942 17.3956 16.8555 17.7681C17.2581 18.3421 17.6734 18.911 18.0759 19.4437C17.7186 19.4822 17.3567 19.5287 16.9974 19.5812ZM16.0609 12.3842C16.0608 12.3829 16.0607 12.3823 16.0606 12.3823C16.0606 12.3822 16.0607 12.3838 16.061 12.3872C16.061 12.386 16.0609 12.385 16.0609 12.3842Z"/>
</svg>
            </a>
              {/* <Button variant="outline">Contact me</Button> */}
              <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{`${isEn?"Contact me": "ติดต่อที่"}`}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => {
              setShowContact(0);
            }}>
              <Mail className="mr-2 h-4 w-4" />
              <span>{`${isEn?"Mail":"อีเมลล์"}`}</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => {
              setShowContact(1);
            }}>
              <PhoneCall className="mr-2 h-4 w-4" />
              <span>{`${isEn?"Phone":"โทร"}`}</span>
            </DropdownMenuItem>
            {/* <DropdownMenuItem>
              <a href="https://www.linkedin.com/in/arnon-songmoolnak-9b64a7142/" target="_blank" className="flex flex-row cursor-default">
                <Linkedin className="mr-2 h-4 w-4" />
                <span>Linkedin</span>
              </a>
            </DropdownMenuItem> */}
            <DropdownMenuItem>
              <a href="https://www.facebook.com/An0nSongmoolnakGuMaha/" target="_blank" className="flex flex-row cursor-default">
                <div>
                  <svg className="fill-foreground w-4 h-4" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 48.605 48.605" xmlSpace="preserve">
<g>
	<path d="M34.094,8.688h4.756V0.005h-8.643c-0.721-0.03-9.51-0.198-11.788,8.489c-0.033,0.091-0.761,2.157-0.761,6.983l-7.903,0.024
		v9.107l7.913-0.023v24.021h12.087v-24h8v-9.131h-8v-2.873C29.755,10.816,30.508,8.688,34.094,8.688z M35.755,17.474v5.131h-8v24
		h-8.087V22.579l-7.913,0.023v-5.107l7.934-0.023l-0.021-1.017c-0.104-5.112,0.625-7.262,0.658-7.365
		c1.966-7.482,9.473-7.106,9.795-7.086l6.729,0.002v4.683h-2.756c-4.673,0-6.338,3.054-6.338,5.912v4.873L35.755,17.474
		L35.755,17.474z"/>
</g>
</svg>
                </div>
                <span>&nbsp;&nbsp;Facebook</span>
              </a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
