'use client';
import { usePathname } from "next/navigation";
import { Card } from "./ui/card";

const edus = [
    {
        uni: "Khon Kaen University",
        img: `./images/kku-logo.png`,
        degree: "Bachelor of science (physics)",
        gpa: 3.64,
        desc: "IrMn material is a part of HDD reader head.",
        topic: "Effect of stress and annealing temperature on crystal structure and magnetic property of IrMn thin film layer",
        date: [new Date(Date.UTC(2012, 5, 22)), new Date(Date.UTC(2016, 7, 5))],
        add: ", science (physics) first class honors"
    },
    {
        uni: "Suranaree University of Technology",
        img: `./images/sut-logo.png`,
        degree: "Doctor of philosophy (physics)",
        gpa: 3.84,
        desc: "ALICE PIxel DEtector (ALPIDE) is monolithic active pixel sensor which have been developed by CERN.",
        topic: "Development of monolithic active pixel sensors (MAPS) detector for track reconstruction in proton computed tomography",
        date: [new Date(Date.UTC(2016, 7, 7)), new Date(Date.UTC(2023, 7, 24))],
        add: ""
    }
]

const edusTh = [
    {
        uni: "มหาวิทยาลัยขอนแก่น",
        img: `./images/kku-logo.png`,
        degree: "ปริญญาตรี วิทยาศาสตร์ (ฟิสิกส์)",
        gpa: 3.64,
        desc: "วัสดุ IrMn เป็นส่วนหนึ่งของหัวอ่านฮาร์ดดิสก์",
        topic: "ผลของความเครียดและอุณหภูมิการอบอ่อนต่อโครงสร้างผลึกและสมบัติทางแม่เหล็กของชั้นฟิล์มบาง IrMn",
        date: [new Date(Date.UTC(2012 + 543, 5, 22)), new Date(Date.UTC(2016 + 543, 7, 5))],
        add: " วิทยาศาสตร์ (ฟิสิกส์) เกียรตินิยมอันดับหนึ่ง"
    },
    {
        uni: "มหาวิทยาลัยเทคโนโลยีสุรนารี",
        img: `./images/sut-logo.png`,
        degree: "ดุษฎีบัณฑิต (ฟิสิกส์)",
        gpa: 3.84,
        desc: "ALICE Pixel Detector (ALPIDE) เป็นเซ็นเซอร์พิกเซลแบบแอคทีฟแบบโมโนลิทิกที่ได้รับการพัฒนาโดย CERN",
        topic: "การพัฒนาหัววัดอนุภาคแบบ Monolithic Active Pixel Sensors \
(MAPS) สําหรับการหาเส้นทางในเครื่องสร้างภาพตัดขวางจาก\
โปรตอนโดยอาศัยคอมพิวเตอร์",
        date: [new Date(Date.UTC(2016 + 543, 7, 7)), new Date(Date.UTC(2023 + 543, 7, 24))],
        add: ""
    }
]

export default function Education({en}: any) {

  const pathname = usePathname();
    return (
        <>
        <div className="flex flex-row justify-center items-center">
            <Card className="px-8 py-4">
                <a className="text-4xl font-bold uppercase" href={`${pathname}?en=${en}`}>
                    {en? "Education": "การศึกษา"}
                </a>
            </Card>
        </div>
        {(en?edus:edusTh).map((e: any, i) => {
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
                               {e["degree"]}
                            </div>
                            <br/>
                            <div>
                                <b>{en?"University":"มหาวิทยาลัย"}</b><b>:</b> <span> {e["uni"]}</span>
                            </div>
                            <div>
                                <b>{en?"Research topic":"หัวข้อวิจัย"}</b><b>:</b> <span> {e["topic"]}</span>
                            </div>
                            <div>
                                <b>{en?"GPA":"เกรดเฉลี่ย"}</b><b>:</b> <span> {e["gpa"]}{e["add"]}</span>
                            </div>
                            <div>
                                <b>{en?"Description":"เพิ่มเติม"}</b><b>:</b> <span> {e["desc"]}</span>
                            </div>
                        </div>
                        <div className="absolute top-1 right-0 text-center min-w-56 max-sm:bottom-0 max-sm:left-0 max-sm:ml-auto max-sm:top-auto 
                            max-sm:text-xs text-muted-foreground">
                            {("0" + (e["date"][0].getDate())).slice(-2) + "/" +
                            ("0"+(e["date"][0].getMonth()+1)).slice(-2) + "/" +
                            e["date"][0].getFullYear()} - {("0" + e["date"][1].getDate()).slice(-2) + 
                                "/" + ("0"+(e["date"][1].getMonth()+1)).slice(-2) + "/" +
                            e["date"][1].getFullYear()}
                        </div>
                    </div>
                </Card>
            );
        })}
        <div className="block h-10 w-1"></div>
        </>
    )
};
