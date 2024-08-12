import Experience from "@/components/experience";

export const metadata = {
  title: "Experience",
};

export default async function Page({params, searchParams}: any) {
    const {en} = await searchParams;
    return <Experience en={en === "false"? false: true}/>;    
};
