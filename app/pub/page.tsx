import Publication from "@/components/publication";

export const metadata = {
  title: "Publication",
};

export default async function Page({params, searchParams}: any) {
    const {en, page, sorts, ascs} = await searchParams;

    return <Publication en={en === "false"? false: true} page={page? parseInt(page): 0} 
    sorts={sorts? sorts.split(',').map((e: string, i:number) => parseInt(e)): [0, 1, 2, 3]} 
    ascs={ascs? ascs.split(',').map((e: string, i:number) => parseInt(e)): [-1, 1, 1, 1]}
    />;    
};
