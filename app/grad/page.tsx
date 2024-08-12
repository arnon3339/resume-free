import Education from "@/components/education";

export const metadata = {
  title: "Education",
};

export default async function Page({params, searchParams}: any) {
    const {en} = await searchParams;
    return <Education en={en === "false"? false: true}/>;    
};
