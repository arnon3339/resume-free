'use client';
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Card, CardContent } from "./ui/card";
import { MyPagination } from "./pagination";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { ChevronDown, ChevronUp } from "lucide-react";
import {RingLoader} from "react-spinners"

type DataType = {
    total: number,
    values: Array<Object>,
    authors: Array<Array<String>>,
    bolds: Array<number>,
    ands: Array<number>
}

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
        uni: "Suranaree University of Technology",
        img: `./images/deeplearningai.png`,
        position: "Machine Learning Specialization",
        link: "coursera.org",
        href: "https://verify.openedg.org/",
        desc: "Including Supervised Machine Learning: Regression and Classification, Advanced Learning Algorithms, \
        Unsupervised Learning, Recommenders, Reinforcement Learning",
        topic: "Proton computed tomography",
        date: [new Date(Date.UTC(2024, 6, 21)), null],
        file: "/files/deepai-cer.pdf"
    }
]

export default function Publication({en, page, sorts, ascs}: any) {
    // const [sorts, setSorts] = useState([0, 1, 2, 3]);
const [data, setData] = useState<DataType | null>(null);
  const pathname = usePathname();

    const router = useRouter();

    useEffect(() => {
        const fetchData = async() =>{
            try{
                const res = await fetch(`api/scopus?page=${page}&pri=${sorts.join(',')}&ascs=${ascs.join(',')}`);
                if (res.ok){
                    const newData = await res.json();
                    setData(newData);
                }
            } catch{}
        }
        fetchData();
    }, [page, ascs, sorts]);

    const genNewSorts = (index: number) =>{
        let newSorts: Array<number> = [];
        sorts.forEach((ee: number, ii: number) =>{
            if (ee != index) newSorts.push(ee);
        });
        router.push(`/pub?en=${en}&page=0&sorts=${[index, ...newSorts].join(',')}&
ascs=${(ascs.map((eee:number, iii:number) => iii === index? (-1)*eee: eee)).join(',')}`);
    }

    useEffect(() =>{
    }, [sorts]);

    return (
        <>
        <div className="flex flex-row justify-center items-center">
            <Card className="px-8 py-4">
                <a className="text-4xl font-bold uppercase" href={`${pathname}?en=${en}`}>
                   {en?"Publication":"งานตีพิมพ์"}
                </a>
            </Card>
        </div>        
        {
            !data &&<><div className="min-h-screen w-full flex-col justify-center items-center">
                <div aria-label="Loading..." role="status" className="flex justify-center items-center space-x-2 ">
    <svg className="h-20 w-20 animate-spin stroke-muted-foreground" viewBox="0 0 256 256">
        <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
        <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round"
            strokeWidth="24"></line>
        <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
        </line>
        <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
            strokeWidth="24"></line>
        <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
        </line>
        <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
            strokeWidth="24"></line>
        <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
        <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
        </line>
    </svg>
    <span className="text-4xl font-medium text-muted-foreground">Loading...</span>
</div>
                </div></>
        }
        {data && <>
        <div className="w-full flex flex-row justify-center max-sm:justify-center">
                <Menubar>
                <MenubarMenu>
                    <MenubarTrigger className={`w-28 max-sm:text-[10px] max-sm:w-16 flex flex-row justify-center ${sorts[0]===0? "bg-accent": ""}`}
                    onClick={() => {genNewSorts(0)}}>
                        {en?"Date":"วันตีพิมพ์"}
                        {ascs[0] === 1&& <ChevronDown />}{ascs[0] != 1&& <ChevronUp />}
                        </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className={`w-28 max-sm:text-[10px] max-sm:w-16 flex flex-row justify-center ${sorts[0]===1? "bg-accent": ""}`}
                    onClick={() => {genNewSorts(1)}}>
                        {en?"Title":"ชื่อเรื่อง"}
                        {ascs[1] === 1&& <ChevronDown />}{ascs[1] != 1&& <ChevronUp />}
                        </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className={`w-28 max-sm:text-[10px] max-sm:w-16 flex flex-row justify-center ${sorts[0]===2? "bg-accent": ""}`}
                    onClick={() => {genNewSorts(2)}}>
                        {en?"Author":"ผู้แต่ง"}
                        {ascs[2] === 1&& <ChevronDown />}{ascs[2] != 1&& <ChevronUp />}
                        </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className={`w-28 max-sm:text-[10px] max-sm:w-16 flex flex-row justify-center ${sorts[0]===3? "bg-accent": ""}`}
                    onClick={() => {genNewSorts(3)}}>
                        {en?"Journal":"วารสาร"}
                        {ascs[3] === 1&& <ChevronDown />}{ascs[3] != 1&& <ChevronUp />}
                        </MenubarTrigger>
                </MenubarMenu>
                </Menubar>
        </div>
        
            {data?.values.map((e: any, i) => {
                return (
                    <Card key={i} className="rounded-xl p-4 pt-6 w-full relative max-lg:py-8  max-sm:pt-2 max-sm:pb-8">
                        <div className="flex flex-col justify-start items-stretch max-sm:flex-col h-40 max-lg:h-56">
                            <div className="flex flex-col justify-center items-center">
                            </div>
                            <div className="flex flex-col justify-center max-sm:text-sm h-full">
                                <a className="text-xl font-bold max-md:text-xl max-sm:text-sm max-sm:text-center hover:underline"
                                href={`https://www.scopus.com/record/display.uri?eid=${e["eid"]}&origin=inward`} target="_blank">
                                    {e["dc:title"]}
                                </a>
                                <div className="flex flex-col mt-auto h-full justify-end">
                                    <div className="max-sm:text-center">
                                        <b>{e["prism:publicationName"]}</b>
                                    </div>
                                    <div className="max-sm:text-center max-sm:h-14 max-sm:line-clamp-3">
                                        {
                                            data.authors[i].map((eee: any, iii: number) => {
                                                let text = "";
                                                if (iii === 0) text = eee;
                                                else if (iii === data.authors[i].length - 1) text = data.ands[i]? " and " + eee: ", " + eee;
                                                else text = ", " + eee;

                                                if (data.bolds[i] === iii)
                                                        return (<span key={`span-author-${i}-${iii}`}><strong>{text}</strong></span>);
                                                else
                                                    return (<span key={`span-author-${i}-${iii}`}>{text}</span>);
                                            })
                                        } 
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-1 right-2 text-center min-w-56 max-sm:bottom-0 max-sm:left-0 max-sm:ml-auto max-sm:top-auto 
                            max-sm:text-xs text-muted-foreground flex flex-row justify-end max-sm:justify-center">
                        <div>
                            {("0" + ((new Date(e["prism:coverDate"])).getDate())).slice(-2) + "/" +
                            ("0"+((new Date(e["prism:coverDate"])).getMonth()+1)).slice(-2) + "/" +
                            (new Date(e["prism:coverDate"])).getFullYear()}
                        </div>
                        </div>
                        </div>
                    </Card>
                );
            })}
        <MyPagination current={page} total={data? Math.ceil((data?.total)/20): 0} en={en} sorts={sorts} ascs={ascs}/>
        <div className="block h-10 w-1"></div>
        </>
   }</>
    )
};
