'use client';
import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { usePathname } from "next/navigation";

const edus = [
    {
        uni: "University of Bergen",
        img: `./images/uib-logo-gray.png`,
        position: "Developer",
        duration: 3.64,
        desc: "Develop a C++ module to read/write register from/to a FPGA Xilinx VCU118 via the TCP protocal",
        topic: "Proton computed tomography",
        date: [new Date(Date.UTC(2019, 6, 15)), new Date(Date.UTC(2020, 0, 15))],
        current: false
    },
    {
        uni: "Suranaree University of Technology",
        img: `./images/sut-logo.png`,
        position: "Posdoctoral researcher",
        duration: 3.84,
        desc: "Develope a proton computed tomography prototype with FPGA control system",
        topic: "Proton computed tomography",
        date: [new Date(Date.UTC(2023, 8, 1)), new Date(Date.UTC(2024, 7, 31))],
        current: true
    }
]

const edusTH = [
    {
        uni: "มหาวิทยาลัยแบร์เกน",
        img: `./images/uib-logo-gray.png`,
        position: "นักพัฒนาซอฟต์แวร์",
        desc: "พัฒนาโมดูล C++ เพื่ออ่าน/เขียน Registers จาก/ไปยัง FPGA Xilinx VCU118 ผ่านโปรโตคอล TCP",
        topic: "พัฒนาเครื่องสร้างภาพตัดขวางจากโปรตอนโดยอาศัยคอมพิวเตอร์",
        date: [new Date(Date.UTC(2019 + 543, 6, 15)), new Date(Date.UTC(2020 + 543, 0, 15))],
        current: false
    },
    {
        uni: "มหาวิทยาลัยเทคโนโลยีสุรนารี",
        img: `./images/sut-logo.png`,
        position: "นักวิจัยหลังปริญญาเอก",
        desc: "พัฒนาครื่องสร้างภาพตัดขวางจากโปรตอนโดยอาศัยคอมพิวเตอร์ต้นแบบด้วยระบบควบคุม FPGA",
        topic: "พัฒนาเครื่องสร้างภาพตัดขวางจากโปรตอนโดยอาศัยคอมพิวเตอร์",
        date: [new Date(Date.UTC(2023 + 543, 8, 1)), new Date(Date.UTC(2024 + 543, 7, 31))],
        current: true
    }
]

export default function Experience({en}: any) {
    const [now, setNow] = useState(new Date(Date.now()));

    const pathname = usePathname();
    useEffect(() => {
        const fetchData = async() =>{
            try{
                const res = await fetch("api/utils?kind=time&q=now");
                if (res.ok){
                    const data = await res.json();
                    setNow(data.value);
                }
            } catch{}
        }

        fetchData();
    }, []);

    return (
        <>
        <div className="flex flex-row justify-center items-center">
            <Card className="px-8 py-4">
                <a className="text-4xl font-bold uppercase" href={`${pathname}?en=${en}`}>
                    {en?"Experience":"ประสบการณ์"}
                </a>
            </Card>
        </div>
        {(en?edus:edusTH).map((e: any, i) => {
            return (
                <Card key={i} className="rounded-xl p-4 w-full relative max-lg:py-8  max-sm:pt-2 max-sm:pb-8">
                    <div className="flex flex-row justify-start items-stretch h-full max-sm:flex-col">
                        <div className="flex flex-col justify-center items-center">
                            <div className={`size-52 max-md:size-32`}>
                                <img src={e["img"]} alt="" />                    
                            </div>
                        </div>
                        <div className="flex flex-col justify-center self-auto max-sm:text-sm">
                            <div className="text-2xl font-bold max-md:text-xl max-sm:text-lg max-sm:text-center">
                               {e["position"]}
                            </div>
                            <br/>
                            <div>
                                <b>{en?"Organization":"หน่วยงาน"}</b><b>:</b> <span> {e["uni"]}</span>
                            </div>
                            <div>
                                <b>{en?"Project":"โครงการ"}</b><b>:</b> <span> {e["topic"]}</span>
                            </div>
                            <div key={`duration-the-${i}`}>
                                <b>{en?"Duration":"ระยะเวลา"}</b><b>:</b> 
                                    {
                                        Array.from({length: 1}).map((ee, ii) => {
                                            const oneDay = 24 * 60 * 60 * 1000;
                                            let lastDate = e["current"]? new Date(now): new Date(e["date"][1]);
                                            if (!en && !e["current"])
                                                lastDate.setFullYear(lastDate.getFullYear());
                                            else if (en)
                                                lastDate.setFullYear(lastDate.getFullYear());
                                            else
                                                lastDate.setFullYear(lastDate.getFullYear() + 543);
                                            const diffDays = Math.round(Math.abs((lastDate.getTime() - e["date"][0]) / oneDay));
                                            const year = diffDays/365.25;
                                            const numYear = (Math.floor(year));
                                            const numMonth = Math.floor((year - numYear)*12);
                                            if (numYear > 0){
                                                if (numMonth){
                                                    return (
                                                        <span key={`span-del-date-${i}-${ii}`}> {numYear} {(numYear >1)? 
                                                            (en? "years": "ปี"): (en?"year": "ปี")} {numMonth} {(numMonth>1)?
                                                                 (en?"months": "เดือน"): (en?"month": "เดือน")}</span>
                                                    );
                                                }else{
                                                    return (
                                                        <span key={`span-del-date-${i}-${ii}`}> {numYear} {(numYear >1)?
                                                             (en? "years": "ปี"): (en?"year": "ปี")}</span>
                                                    );
                                                }
                                            }else{
                                                if (numMonth){
                                                    return (
                                                        <span key={`span-del-date-${i}-${ii}`}> {numMonth} {(numMonth>1)?
                                                             (en?"months": "เดือน"): (en?"month": "เดือน")}</span>
                                                    );
                                                }else{
                                                    return (
                                                        <span key={`span-del-date-${i}-${ii}`}> - </span>
                                                    );
                                            }
                                        }})
                                    }
                            </div>
                            <div>
                                <b>{en?"Description":"คำอธิบาย"}</b><b>:</b> <span> {e["desc"]}</span>
                            </div>
                        </div>
                        { e["current"] &&
                            <div className="absolute top-1 right-0 text-center min-w-56 max-sm:bottom-0 max-sm:left-0 max-sm:ml-auto max-sm:top-auto 
                            max-sm:text-xs text-muted-foreground">
                            {("0" + (e["date"][0].getDate())).slice(-2) + "/" +
                            ("0"+(e["date"][0].getMonth()+1)).slice(-2) + "/" +
                            e["date"][0].getFullYear()} - {("0" + (new Date(now)).getDate()).slice(-2) + 
                                "/" + ("0"+((new Date(now)).getMonth()+1)).slice(-2) + "/" +
                            String((new Date(now)).getFullYear() + (en?0:543))}
                        </div>
                        }
                        { !e["current"] &&
                            <div className="absolute top-1 right-0 text-center min-w-56 max-sm:bottom-0 max-sm:left-0 max-sm:ml-auto max-sm:top-auto 
                            max-sm:text-xs text-muted-foreground">
                            {("0" + (e["date"][0].getDate())).slice(-2) + "/" +
                            ("0"+(e["date"][0].getMonth()+1)).slice(-2) + "/" +
                            e["date"][0].getFullYear()} - {("0" + e["date"][1].getDate()).slice(-2) + 
                                "/" + ("0"+(e["date"][1].getMonth()+1)).slice(-2) + "/" +
                            e["date"][1].getFullYear()}
                        </div>
                        }
                    </div>
                </Card>
            );
        })}
        <div className="block h-10 w-1"></div>
        </>
    )
};
