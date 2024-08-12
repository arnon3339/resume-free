'use client';
import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { usePathname } from "next/navigation";

const edus = [
    {
        uni: "Python institute",
        img: `./images/pythonint2.png`,
        position: "PCEP - Certified Entry-Level Python Programmer",
        link: "verify.openedg.org",
        href: "https://verify.openedg.org/",
        desc: "Certification ID is HmpR.4KFu.eujd",
        topic: "Python, OOP",
        date: [new Date(Date.UTC(2024, 4, 31)), null],
        file: "/files/python-cer.pdf"
    },
    {
        uni: "DeepLearning.AI, Stanford University",
        img: `./images/deeplearningai.png`,
        position: "Machine Learning Specialization",
        link: "coursera.org",
        href: "https://verify.openedg.org/",
        desc: "Including Supervised Machine Learning: Regression and Classification, Advanced Learning Algorithms, \
        Unsupervised Learning, Recommenders, Reinforcement Learning",
        topic: "Machine learning, Deep learning, Supervised and Unsupervised learning, reinforcement learning",
        date: [new Date(Date.UTC(2024, 6, 21)), null],
        file: "/files/deepai-cer.pdf"
    }
]
const edusTh = [
    {
        uni: "Python institute",
        img: `./images/pythonint2.png`,
        position: "PCEP - Certified Entry-Level Python Programmer",
        link: "verify.openedg.org",
        href: "https://verify.openedg.org/",
        desc: "ID ของใบประกาศคือ HmpR.4KFu.eujd",
        topic: "Python, OOP",
        date: [new Date(Date.UTC(2024 + 543, 4, 31)), null],
        file: "/files/python-cer.pdf"
    },
    {
        uni: "DeepLearning.AI, Stanford University",
        img: `./images/deeplearningai.png`,
        position: "Machine Learning Specialization",
        link: "coursera.org",
        href: "https://verify.openedg.org/",
        desc: "รวมใบประกาศของ Supervised Machine Learning: Regression and Classification, Advanced Learning Algorithms, \
        Unsupervised Learning, Recommenders, Reinforcement Learning",
        topic: "Machine learning, Deep learning, Supervised and Unsupervised learning, reinforcement learning",
        date: [new Date(Date.UTC(2024 + 543, 6, 21)), null],
        file: "/files/deepai-cer.pdf"
    }
]

export default function Certification({en}: any) {
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
                   {en?"Certification":"ใบประกาศ"}
                </a>
            </Card>
        </div>
        {(en?edus:edusTh).map((e: any, i) => {
            return (
                <Card key={i} className="rounded-xl p-4 w-full relative max-lg:py-8  max-sm:pt-2 max-sm:pb-8 max-lg:pt-14">
                    <div className="flex flex-row justify-start items-stretch h-full max-sm:flex-col">
                        <div className="flex flex-col justify-center items-center">
                            <div className={`size-52 max-md:size-32 p-2`}>
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
                                <b>{en?"Skills":"ความสามารถ"}</b><b>:</b> <span> {e["topic"]}</span>
                            </div>
                            <div key={`duration-the-${i}`}>
                                <b>{en?"link":"ลิงค์"}</b><b>:</b> <span><a href={e["href"]} target="_blank" className="underline"> {e["link"]}</a></span>
                            </div>
                            <div>
                                <b>{en?"Description":"เพิ่มเติม"}</b><b>:</b> <span> {e["desc"]}</span>
                            </div>
                        </div>
                        <div className="absolute top-1 right-0 text-center min-w-56 max-sm:bottom-0 max-sm:left-0 max-sm:ml-auto max-sm:top-auto 
                        max-sm:text-xs text-muted-foreground flex flex-col justify-start">
                    {!e["date"][1] && <div>
                        {("0" + (e["date"][0].getDate())).slice(-2) + "/" +
                        ("0"+(e["date"][0].getMonth()+1)).slice(-2) + "/" +
                        e["date"][0].getFullYear()} - {(e["date"][1]?("0" + (new Date(now)).getDate()).slice(-2) + 
                            "/" + ("0"+((new Date(now)).getMonth()+1)).slice(-2) + "/" +
                        (new Date(now)).getFullYear(): "No expire")}
                    </div>}
                    {e["date"][1] && <div>
                            {("0" + (e["date"][0].getDate())).slice(-2) + "/" +
                            ("0"+(e["date"][0].getMonth()+1)).slice(-2) + "/" +
                            e["date"][0].getFullYear()} - {("0" + e["date"][1].getDate()).slice(-2) + 
                                "/" + ("0"+(e["date"][1].getMonth()+1)).slice(-2) + "/" +
                            e["date"][1].getFullYear()}
                    </div>}
                    <a href={e["file"]} target="_blank" className="underline">
                        {en?"Download":"ดาวน์โหลด"}
                    </a>
                    </div>
                    </div>
                </Card>
            );
        })}
        <div className="block h-10 w-1"></div>
        </>
    )
};
