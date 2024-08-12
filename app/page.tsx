import { MyCard } from "@/components/mycard";


export const metadata = {
  title: "Profile",
};

export default async function Home({params, searchParams}: any) {
  const {en} = await searchParams;
  return (
      <div className="flex flex-col justify-center items-center w-full min-h-screen py-2">
      <MyCard en={en === "false"? false: true} />
      </div>
  );
}
