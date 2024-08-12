import Skill from "@/components/skill";

export const metadata = {
  title: "Skill",
};

export default async function Page({params, searchParams}: any) {
    const {en} = await searchParams;
    return <Skill en={en === "false"? false: true}/>;    
};
