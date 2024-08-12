import Certification from "@/components/certification";

export const metadata = {
  title: "Certification",
};

export default async function Page({params, searchParams}: any) {
    const {en} = await searchParams;
    return <Certification en={en === "false"? false: true}/>;    
};
