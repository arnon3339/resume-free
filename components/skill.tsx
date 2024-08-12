'use client';
import { usePathname } from "next/navigation";
import { Card } from "./ui/card";

const skills = {
  Hardware: {
    skill: ["FPGA", "Arduino", "Zaber motor"],
     skillTh: [],
    thTopic: "ฮาร์ดแวร์",
    thDesc: "ในวิทยานิพนธ์ปริญญาเอกของผม ผมได้พัฒนาและใช้งานระบบฮาร์ดแวร์ที่ซับซ้อนเพื่อควบคุมเครื่องสร้างภาพตัดขวางจากโปรตอนโดยอาศัยคอมพิวเตอร์\
     ซึ่งรวมถึงการออกแบบส่วนประกอบฮาร์ดแวร์ที่กำหนดเอง การรวมเข้ากับระบบที่มีอยู่ และการรับประกันการทำงานที่แม่นยำและเชื่อถือได้สำหรับการถ่ายภาพความละเอียดสูง\
      งานของผมยังรวมถึงการแก้ไขปัญหาและการปรับแต่งฮาร์ดแวร์เพื่อให้ได้ประสิทธิภาพที่ดีที่สุดในสภาพแวดล้อมการวิจัย",
    desc: `In my Ph.D. thesis, I developed and utilized sophisticated hardware systems to control a proton computed tomography
     device. This involved designing custom hardware components, integrating them with existing systems, and ensuring precise
      and reliable operation for high-resolution imaging.
     My work also included troubleshooting and optimizing the hardware to achieve optimal performance in a research setting.`,
    svg: (
      <svg
        className="w-56 h-56 max-lg:w-44 max-lg:h-44 max-md:w-32 max-md:h-32"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>ionicons-v5-l</title>
        <rect
          x="80"
          y="80"
          width="352"
          height="352"
          rx="48"
          ry="48"
          className="stroke-foreground fill-none"
          strokeLinejoin="round"
          strokeWidth={32}
        />
        <rect
          x="144"
          y="144"
          width="224"
          height="224"
          rx="16"
          ry="16"
          className="stroke-foreground fill-none"
          strokeLinejoin="round"
          strokeWidth={32}
        />
        <line
          x1="256"
          y1="80"
          x2="256"
          y2="48"
          className="stroke-foreground fill-none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
        />
        <line
          x1="336"
          y1="80"
          x2="336"
          y2="48"
          className="stroke-foreground fill-none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
        />
        <line
          x1="176"
          y1="80"
          x2="176"
          y2="48"
          className="stroke-foreground fill-none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
        />
        <line
          x1="256"
          y1="464"
          x2="256"
          y2="432"
          className="stroke-foreground fill-none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
        />
        <line
          x1="336"
          y1="464"
          x2="336"
          y2="432"
          className="stroke-foreground fill-none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
        />
        <line
          x1="176"
          y1="464"
          x2="176"
          y2="432"
          className="stroke-foreground fill-none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
        />
        <line
          x1="432"
          y1="256"
          x2="464"
          y2="256"
          className="stroke-foreground fill-none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
        />
        <line
          x1="432"
          y1="336"
          x2="464"
          y2="336"
          className="stroke-foreground fill-none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
        />
        <line
          x1="432"
          y1="176"
          x2="464"
          y2="176"
          className="stroke-foreground fill-none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
        />
        <line
          x1="48"
          y1="256"
          x2="80"
          y2="256"
          className="stroke-foreground fill-none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
        />
        <line
          x1="48"
          y1="336"
          x2="80"
          y2="336"
          className="stroke-foreground fill-none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
        />
        <line
          x1="48"
          y1="176"
          x2="80"
          y2="176"
          className="stroke-foreground fill-none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
        />
      </svg>
    ),
  },
  "Programming language": {

    thTopic: "ภาษาคอมพิวเตอร์",
    thDesc: "ผมมีความหลงใหลในการเรียนรู้ภาษาโปรแกรมและเพลิดเพลินกับการใช้พวกมันเพื่อแก้ปัญหาที่ซับซ้อนและบรรลุภารกิจต่าง ๆ ในขณะที่ผมมีความเชี่ยวชาญในหลายภาษาโปรแกรม\
     รายการต่อไปนี้เน้นภาษาโปรแกรมที่ผมกำลังใช้ประโยชน์อย่างมีประสิทธิภาพในปัจจุบัน",
    skill: [
      "Python",
      "Javascript",
      "Typescript",
      "C",
      "C++",
      "Rust",
      "VHDL Verilog",
      "Bash script"
    ],
     skillTh: [],
    desc: `I have a passion for learning programming languages and enjoy leveraging them to solve complex problems and achieve\
     various tasks. While I am proficient in many programming languages, the following list highlights\
      those I am currently utilizing effectively.`,
    svg: (
      <svg
        className="fill-foreground w-56 h-56 p-4 stroke-none max-lg:w-44 max-lg:h-44 max-md:w-32 max-md:h-32"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 32 32"
        xmlSpace="preserve"
      >
        <path
          id="digital_1_"
          d="M28.5,31.36c-1.577,0-2.86-1.283-2.86-2.86s1.283-2.86,2.86-2.86s2.86,1.283,2.86,2.86
	S30.077,31.36,28.5,31.36z M28.5,26.36c-1.18,0-2.14,0.96-2.14,2.14s0.96,2.14,2.14,2.14s2.14-0.96,2.14-2.14
	S29.68,26.36,28.5,26.36z M12,31.36c-1.577,0-2.86-1.283-2.86-2.86s1.283-2.86,2.86-2.86s2.86,1.283,2.86,2.86
	S13.577,31.36,12,31.36z M12,26.36c-1.18,0-2.14,0.96-2.14,2.14s0.96,2.14,2.14,2.14s2.14-0.96,2.14-2.14S13.18,26.36,12,26.36z
	 M20.36,30.5h-0.72v-4h0.721L20.36,30.5L20.36,30.5z M3.86,30.5H3.14v-4h0.72C3.86,26.5,3.86,30.5,3.86,30.5z M20,23.36
	c-1.577,0-2.86-1.283-2.86-2.86s1.283-2.86,2.86-2.86s2.86,1.283,2.86,2.86S21.577,23.36,20,23.36z M20,18.36
	c-1.18,0-2.14,0.96-2.14,2.14s0.96,2.14,2.14,2.14s2.14-0.96,2.14-2.14S21.18,18.36,20,18.36z M3.5,23.36
	c-1.577,0-2.86-1.283-2.86-2.86s1.283-2.86,2.86-2.86s2.86,1.283,2.86,2.86S5.077,23.36,3.5,23.36z M3.5,18.36
	c-1.18,0-2.14,0.96-2.14,2.14s0.96,2.14,2.14,2.14s2.14-0.96,2.14-2.14S4.68,18.36,3.5,18.36z M28.86,22.5h-0.72v-4h0.721
	L28.86,22.5L28.86,22.5z M12.36,22.5h-0.72v-4h0.72V22.5z M28.5,14.36c-1.577,0-2.86-1.283-2.86-2.86s1.283-2.86,2.86-2.86
	s2.86,1.283,2.86,2.86S30.077,14.36,28.5,14.36z M28.5,9.36c-1.18,0-2.14,0.96-2.14,2.14s0.96,2.14,2.14,2.14s2.14-0.96,2.14-2.14
	S29.68,9.36,28.5,9.36z M12,14.36c-1.577,0-2.86-1.283-2.86-2.86S10.423,8.64,12,8.64s2.86,1.283,2.86,2.86S13.577,14.36,12,14.36z
	 M12,9.36c-1.18,0-2.14,0.96-2.14,2.14s0.96,2.14,2.14,2.14s2.14-0.96,2.14-2.14S13.18,9.36,12,9.36z M20.36,13.5h-0.72v-4h0.721
	L20.36,13.5L20.36,13.5z M3.86,13.5H3.14v-4h0.72C3.86,9.5,3.86,13.5,3.86,13.5z M20,6.36c-1.577,0-2.86-1.283-2.86-2.86
	S18.423,0.64,20,0.64s2.86,1.283,2.86,2.86S21.577,6.36,20,6.36z M20,1.36c-1.18,0-2.14,0.96-2.14,2.14S18.82,5.64,20,5.64
	s2.14-0.96,2.14-2.14S21.18,1.36,20,1.36z M3.5,6.36c-1.577,0-2.86-1.283-2.86-2.86S1.923,0.64,3.5,0.64S6.36,1.923,6.36,3.5
	S5.077,6.36,3.5,6.36z M3.5,1.36c-1.18,0-2.14,0.96-2.14,2.14S2.32,5.64,3.5,5.64S5.64,4.68,5.64,3.5S4.68,1.36,3.5,1.36z
	 M28.86,5.5h-0.72v-4h0.721L28.86,5.5L28.86,5.5z M12.36,5.5h-0.72v-4h0.72V5.5z"
        />
      </svg>
    ),
  },
  "Web Development": {

    thTopic: "พัฒนาเว็บไซต์",
    thDesc: "เพื่อชักชวนให้ผู้คนใช้ซอฟต์แวร์ของผม ผมสร้าง Interface ที่ใช้งานง่ายและเป็นมิตรกับผู้ใช้ รวมทั้งการใช้ Backend ที่มีความน่าเชื่อถือ ในฐานะโปรแกรมเมอร์แบบ Full stack\
     ผมพัฒนาเว็บไซต์โดยใช้ React และแอปพลิเคชันมือถือที่ด้วย Flutter เพื่อให้มั่นใจถึงประสบการณ์ผู้ใช้ที่ราบรื่นและสม่ำเสมอในทุกแพลตฟอร์ม\
      ความเชี่ยวชาญของผมยังรวมไปถึงการสร้างแอปพลิเคชันและ API ฝั่งเซิร์ฟเวอร์ที่สเกลได้ ซึ่งเป็นการให้แนวทางแบบบูรณาการและครอบคลุมในการพัฒนาซอฟต์แวร์",
    skill: [
      "HTML",
      "CSS",
      "React",
      "NextJS",
      "Nestjs",
      "Tailwind",
      "FastAPI",
      "Nodejs",
      "Flutter",
    ],
     skillTh: [],
    desc: `To persuade people to use my software, I create intuitive and user-friendly interfaces and robust backend solutions.\
     As a full stack developer, I develop responsive websites using React and engaging mobile applications with Flutter, ensuring\
      a seamless and consistent user experience across platforms. My expertise extends to building scalable server-side\
       applications and APIs, providing a comprehensive and integrated approach to software development.`,
    svg: (
      <svg
        className="fill-foreground w-56 h-56 max-lg:w-44 max-lg:h-44 max-md:w-32 max-md:h-32"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M877.685565 727.913127l-0.584863-0.365539a32.898541 32.898541 0 0 1-8.041866-46.423497 411.816631 411.816631 0 1 0-141.829267 145.777092c14.621574-8.992268 33.62962-5.117551 43.645398 8.772944l0.146216 0.073108a30.412874 30.412874 0 0 1-7.968758 43.206751l-6.141061 4.020933a475.201154 475.201154 0 1 1 163.615412-164.419599 29.974227 29.974227 0 0 1-42.841211 9.357807z m-537.342843-398.584106c7.164571-7.091463 24.71046-9.650239 33.26408 0 10.600641 11.185504 7.164571 29.462472 0 37.138798l-110.612207 107.468569L370.901811 576.14119c7.164571 7.091463 8.114974 27.342343 0 35.384209-9.796455 9.723347-29.828011 8.188081-36.480827 1.535265L208.309909 487.388236a18.423183 18.423183 0 0 1 0-25.953294l132.032813-132.032813z m343.314556 0l132.032813 132.032813a18.423183 18.423183 0 0 1 0 25.953294L689.652124 613.133772c-6.652816 6.579708-25.587754 10.746857-36.553935 0-10.30821-10.235102-7.091463-31.290168 0-38.381632l108.345863-100.669537-111.855041-108.638294c-7.164571-7.676326-9.504023-26.611265 0-36.04218 9.284699-9.138484 26.903696-7.091463 34.068267 0z m-135.54199-26.318833c3.582286-9.504023 21.347498-15.498868 32.679217-11.258612 10.819965 4.020933 17.180349 19.008046 14.256035 28.512069l-119.896906 329.716493c-3.509178 9.504023-20.616419 13.305632-30.193551 9.723347-10.161994-3.509178-21.201282-17.545889-17.545888-26.976804l120.627985-329.716493z" />
      </svg>
    ),
  },
  "Data science": {

    thTopic: "นักวิทยาศาสตร์ข้อมูล",
    thDesc: "ในฐานะนักฟิสิกส์ ผมมีประสบการณ์มากมายในการนำเสนอข้อมูลเพื่อแสดงคุณค่าของงานวิจัยของผม ผมมีทักษะในการวิเคราะห์ชุดข้อมูลขนาดใหญ่ พัฒนาระบบสำหรับการเก็บข้อมูล\
     และใช้เครื่องมือการแสดงผลสำหรับการนำเสนอที่มีประสิทธิภาพ นอกจากนี้ ผมยังมีความสามารถในการประยุกต์ใช้ Deep Learning and Machine Learning\
     เพื่อแก้ปัญหาที่ซับซ้อนและกลั่นกรองความหมายที่มีคุณค่าจากข้อมูล",
    skill: [
      "ML/Deep learning",
      "Scikit-Learn",
      "TensorFlow",
      "Numpy",
      "Pandas",
      "Matplotlib",
      "Jupyter notebook",
    ],
     skillTh: [],
    desc: `As a physicist, I have extensive experience in presenting data to\
     demonstrate the value of my research. I am skilled in analyzing large datasets,\
      developing pipelines for data collection, and utilizing visualization tools for effective presentation.\
       Additionally, I have the capability to apply machine learning and deep learning techniques to solve\
        complex problems and derive meaningful insights from data.`,
    svg: (
      <svg
        className="fill-none stroke-foreground w-56 h-56 max-lg:w-44 max-lg:h-44 max-md:w-32 max-md:h-32"
        viewBox="0 0 48 48"
        data-name="Layer 1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={2}
          height="22"
          width="7"
          x="4"
          y="22"
        />
        <rect
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={2}
          height="16"
          width="7"
          x="15"
          y="28"
        />
        <rect
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={2}
          height="25"
          width="7"
          x="26"
          y="19"
        />
        <rect
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={2}
          height="21"
          width="7"
          x="37"
          y="23"
        />
        <circle
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={2}
          cx="7"
          cy="14"
          r="2"
        />
        <circle
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={2}
          cx="19"
          cy="20"
          r="2"
        />
        <circle
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={2}
          cx="30"
          cy="11"
          r="2"
        />
        <circle
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={2}
          cx="41"
          cy="15"
          r="2"
        />
        <line
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={2}
          x1="9"
          x2="17"
          y1="15"
          y2="19"
        />
        <line
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={2}
          x1="21"
          x2="28"
          y1="19"
          y2="12"
        />
        <line
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={2}
          x1="32"
          x2="39"
          y1="12"
          y2="14"
        />
      </svg>
    ),
  },
  Database: {

    thTopic: "การจัดการฐานข้อมูล",
    thDesc: "ผมมีประสบการณ์มากมายในการจัดการและใช้ข้อมูลที่เก็บไว้ในเซิร์ฟเวอร์ฐานข้อมูล ซึ่งรวมถึงงานต่าง ๆ เช่น การออกแบบโครงสร้างของข้อมูลภายในระบบฐานข้อมูลที่มีประสิทธิภาพ\
     การดำเนินการกรองข้อมูลที่ต้องการ และการรับประกันความสมบูรณ์ของข้อมูล ผมมีความเชี่ยวชาญในการใช้ระบบการจัดการฐานข้อมูลหลากหลายประเภทเพื่อบักทึก เรียกใช้ และวิเคราะห์ข้อมูลอย่างมีประสิทธิภาพ",
    skill: ["NoSQL", "MySQL", "PostgreSQL", "SQLAlchemy"],
     skillTh: [],
    desc: `I have extensive experience in managing and utilizing data stored on database servers.
     This includes tasks such as designing efficient database schemas, 
    performing queries, and ensuring data integrity. I am proficient in using various database
     management systems to store, retrieve, and analyze data effectively.`,
    svg: (
      <svg
        className="fill-none stroke-foreground w-56 h-56 max-lg:w-44 max-lg:h-44 max-md:w-32 max-md:h-32"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 18V6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 6V18" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M12 10C16.4183 10 20 8.20914 20 6C20 3.79086 16.4183 2 12 2C7.58172 2 4 3.79086 4 6C4 8.20914 7.58172 10 12 10Z"
          strokeWidth="1.5"
        />
        <path
          d="M20 12C20 14.2091 16.4183 16 12 16C7.58172 16 4 14.2091 4 12"
          strokeWidth="1.5"
        />
        <path
          d="M20 18C20 20.2091 16.4183 22 12 22C7.58172 22 4 20.2091 4 18"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  Tools: {

    thTopic: "เครื่องมือ",
    thDesc: "ด้วยทักษะที่หลากหลายของผม ผมมีความชำนาญในการใช้เครื่องมือต่าง ๆ เพื่อทำงานและโครงการให้สำเร็จอย่างมีประสิทธิภาพ ความคุ้นเคยกับเครื่องมือเหล่านี้ช่วยให้ผมสามารถทำงานได้อย่างราบรื่น\
     เพิ่มประสิทธิภาพ และรับประกันผลลัพธ์คุณภาพสูงในหลากหลายสาขา ไม่ว่าจะเป็นการพัฒนาซอฟต์แวร์ การวิเคราะห์ข้อมูล หรือการจัดการโครงการ ผมใช้เครื่องมือที่เหมาะสมเพื่อให้ได้ผลลัพธ์ที่ดีที่สุด",
     skillTh: [],
    skill: [
      "Linux",
      "Git",
      "Docker",
      "TMUX",
      "Vercel",
      "Heroku",
      "Vivado",
      "Blender",
      "Geant4",
      "Generative AI",
      "AWS",
      "GCP",
      "Azure",
    ],
    desc: `With my diverse skill set, I am proficient in using a wide range of tools to efficiently complete tasks and projects. 
    My familiarity with these tools allows me to streamline workflows, enhance productivity, and ensure high-quality outcomes
     in various domains. Whether it's software development, data analysis, or project management, I leverage the right tools to achieve optimal results.`,
    svg: (
      <svg
        className="stroke-none fill-foreground w-56 h-56 max-lg:w-44 max-lg:h-44 max-md:w-32 max-md:h-32 p-2"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <clipPath id="clip-tools">
            <rect width="32" height="32" />
          </clipPath>
        </defs>
        <g id="tools" clipPath="url(#clip-tools)">
          <g
            id="Group_1918"
            data-name="Group 1918"
            transform="translate(-364 -416)"
          >
            <g id="Group_1891" data-name="Group 1891">
              <g id="Group_1890" data-name="Group 1890">
                <g id="Group_1889" data-name="Group 1889">
                  <g id="Group_1888" data-name="Group 1888">
                    <g id="Group_1887" data-name="Group 1887">
                      <g id="Group_1886" data-name="Group 1886">
                        <g id="Group_1885" data-name="Group 1885">
                          <g id="Group_1884" data-name="Group 1884">
                            <g id="Group_1883" data-name="Group 1883">
                              <g id="Group_1882" data-name="Group 1882">
                                <g id="Group_1881" data-name="Group 1881">
                                  <g id="Group_1880" data-name="Group 1880">
                                    <g id="Group_1879" data-name="Group 1879">
                                      <path
                                        id="Path_3757"
                                        data-name="Path 3757"
                                        d="M385.788,432.722l9.221-9.221a3.471,3.471,0,0,0,0-4.9l-1.627-1.627a3.549,3.549,0,0,0-4.9,0l-8.5,8.5a7.836,7.836,0,0,0-10.791-8.463,1,1,0,0,0-.318,1.628l3.016,3.015-.642,1.584-1.569.648-3.026-3.026a1,1,0,0,0-1.628.318,7.83,7.83,0,0,0,9.422,10.567,3.481,3.481,0,0,0-.1.8,3.439,3.439,0,0,0,.34,1.471l-6.193,6.193-1.224.676c-.009,0-.013.014-.021.018a.963.963,0,0,0-.192.175,1,1,0,0,0-.135.133c0,.006-.01.008-.014.014l-2.772,4.377a1,1,0,0,0,.138,1.243l.863.862a1,1,0,0,0,1.242.137l4.378-2.772c.006,0,.009-.01.014-.014a4.349,4.349,0,0,0,.308-.327c.005-.008.014-.012.019-.02l.675-1.225,6.191-6.191a3.278,3.278,0,0,0,2.479.174l9.055,9.055a3.571,3.571,0,1,0,5.05-5.049Zm-17.669-4.36a5.816,5.816,0,0,1-1.665-4.876l2.286,2.286a1,1,0,0,0,1.089.218l2.573-1.064a1,1,0,0,0,.545-.549l1.048-2.586a1,1,0,0,0-.22-1.083l-2.272-2.272a5.844,5.844,0,0,1,6.125,8.071,1,1,0,0,0,.214,1.1l.007.007-2.22,2.22-.006-.006a1,1,0,0,0-1.1-.214A5.82,5.82,0,0,1,368.119,428.362Zm2.845,13.109-.45-.45,5.434-5.434.449.449Zm-3.036,1.885.045.045.656.655-1.911,1.211Zm10.528-8.109-1.765-1.764a1.451,1.451,0,0,1,.084-1.969L389.9,418.39a1.464,1.464,0,0,1,2.069,0l1.626,1.626a1.467,1.467,0,0,1,0,2.071l-13.126,13.124A1.491,1.491,0,0,1,378.456,435.247Zm14.676,9.868a1.607,1.607,0,0,1-2.221,0l-8.759-8.759,2.221-2.221,8.76,8.76a1.568,1.568,0,0,1,0,2.22Z"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="Group_1904" data-name="Group 1904">
              <g id="Group_1903" data-name="Group 1903">
                <g id="Group_1902" data-name="Group 1902">
                  <g id="Group_1901" data-name="Group 1901">
                    <g id="Group_1900" data-name="Group 1900">
                      <g id="Group_1899" data-name="Group 1899">
                        <g id="Group_1898" data-name="Group 1898">
                          <g id="Group_1897" data-name="Group 1897">
                            <g id="Group_1896" data-name="Group 1896">
                              <g id="Group_1895" data-name="Group 1895">
                                <g id="Group_1894" data-name="Group 1894">
                                  <g id="Group_1893" data-name="Group 1893">
                                    <g id="Group_1892" data-name="Group 1892">
                                      <path
                                        id="Path_3758"
                                        data-name="Path 3758"
                                        d="M391.108,443.091a.824.824,0,1,0,1.165,0A.823.823,0,0,0,391.108,443.091Z"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="Group_1917" data-name="Group 1917">
              <g id="Group_1916" data-name="Group 1916">
                <g id="Group_1915" data-name="Group 1915">
                  <g id="Group_1914" data-name="Group 1914">
                    <g id="Group_1913" data-name="Group 1913">
                      <g id="Group_1912" data-name="Group 1912">
                        <g id="Group_1911" data-name="Group 1911">
                          <g id="Group_1910" data-name="Group 1910">
                            <g id="Group_1909" data-name="Group 1909">
                              <g id="Group_1908" data-name="Group 1908">
                                <g id="Group_1907" data-name="Group 1907">
                                  <g id="Group_1906" data-name="Group 1906">
                                    <g id="Group_1905" data-name="Group 1905">
                                      <path
                                        id="Path_3759"
                                        data-name="Path 3759"
                                        d="M391.3,420.688a.578.578,0,0,0-.818,0L379.071,432.1a.579.579,0,0,0,.821.818l11.4-11.406A.578.578,0,0,0,391.3,420.688Z"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),
  },
  Comprehension: {

    thTopic: "ความรู้และเข้าใจ",
    thDesc: "การเรียนรู้ภาษาโปรแกรมอย่างเดียวไม่เพียงพอ ผมยังมุ่งเน้นไปที่การทำความเข้าใจแนวคิดพื้นฐานของวิทยาการคอมพิวเตอร์และการทำงานของการเขียนโปรแกรม\
     ความรู้ที่ครอบคลุมนี้ทำให้ผมสามารถเขียนโค้ดได้อย่างมีประสิทธิภาพและประสิทธิผลมากขึ้น",
    skill: [
      "Concurrent programming",
      "OOP programming",
      "Computing automation",
      "Computing architecture",
      "Data collection",
    ],
    skillTh: [
      "การเขียนโปรแกรมเชิงขนาน",
      "การเขียนโปรแกรมเชิงวัตถุ",
      "การเขียนโปรแกรมเชิงอัตโนมัติ",
      "สถาปัตยกรรมคอมพิวเตอร์",
      "การเก็บรวบรวมข้อมูล",
    ],
    desc: `Learning programming languages is not enough; I also focus on understanding the underlying concepts of computer science and how programming works.
     This comprehensive knowledge allows me to write more efficient and effective code.`,
    svg: (
      <svg
        className="fill-none stroke-foreground w-56 h-56 max-lg:w-44 max-lg:h-44 max-md:w-32 max-md:h-32"
        viewBox="0 0 64 64"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35,9.62C38.79,11,46.19,14.76,45.83,23.39a1,1,0,0,0,.25.71l5.12,5.67a2,2,0,0,1,0,2.66l-1.9,2.16a5,5,0,0,0-1.23,3.23L48,43a3,3,0,0,1-3,3l-2.12,0a4,4,0,0,0-4,4v4.24a1,1,0,0,1-1,1H25.43a1,1,0,0,1-1-1V41.05a2,2,0,0,0-1.14-1.81C19.74,37.52,9.37,31.4,13.08,20a15.46,15.46,0,0,1,5.3-7.75"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
        <path
          d="M22.2,22c0-3.38-2.08-6.2-3.21-8.29A8.06,8.06,0,0,1,18,10c0-4.44,4.05-8,8.49-8"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
        <path
          d="M30.85,22c0-3.38,2.09-6.2,3.21-8.29A8,8,0,0,0,35,10c0-4.44-4-8-8.48-8"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
        <rect
          x="20.51"
          y="21.84"
          width="12.36"
          height="4.04"
          rx="1.39"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
        <path
          d="M29.79,25.88V28c0,1.27-1.19,2.29-3.1,2.29-2.1,0-3.1-1-3.1-2.29V25.88"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
      </svg>
    ),
  },
};

export default function Skill({en}: any) {

  const pathname = usePathname();
    return (
        <>
        <div className="flex flex-row justify-center items-center">
            <Card className="px-8 py-4">
                <a className="text-4xl font-bold uppercase" href={`${pathname}?en=${en}`}>
                    {en?"skill": "ความสามารถ"}
                </a>
            </Card>
        </div>
        {Object.keys(skills).map((k: any, i) => {
            return (
              <Card
                key={i}
                className="rounded-xl p-4 w-full relative max-lg:py-8  max-sm:pt-2 max-sm:pb-8 "
              >
                <div className="flex flex-row justify-start items-stretch h-full max-sm:flex-col">
                  <div className="flex flex-col justify-center items-center">
                    <div className="max-md:hidden max-sm:block">
                        {skills[k as keyof typeof skills]["svg"]}
                    </div>
                  </div>
                    <div className="flex flex-col justify-start items-start">
                        <div className="flex flex-row">
                            <div className="hidden max-md:block max-sm:hidden">
                                {skills[k as keyof typeof skills]["svg"]}
                            </div>
                            <div className="flex flex-col">
                                <div className="font-bold text-4xl max-sm:text-center max-sm:w-full max-md:text-2xl">
                                  {en?k:skills[k as keyof typeof skills]["thTopic"]}</div>
                                <div className="text-lg max-sm:text-center max-md:text-sm">
                                  {en?skills[k as keyof typeof skills]["desc"]:skills[k as keyof typeof skills]["thDesc"]}</div>
                            </div>
                        </div>
                        <div className="mt-4 grid grid-cols-5 grid-flow-row gap-2 max-lg:grid-cols-4 max-md:grid-cols-3 max-md:w-full">
                            {skills[k as keyof typeof skills][((String(k)==="Comprehension") && !en)?"skillTh": "skill"].map((ee, ii) => {
                            return (
                                <Card
                                key={`skill-indi-${i}-${ii}`}
                                className="flex flex-col justify-center items-center py-2 px-4 text-xl text-center max-lg:text-lg max-md:text-sm"
                                >
                                {ee}
                                </Card>
                            );
                            })}
                        </div>
                    </div>
                </div>
              </Card>
            );
        })}
        <div className="block h-10 w-1"></div>
        </>
    )
};
