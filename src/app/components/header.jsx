import Image from "next/image";

export function Header() {
  return (
    <div className="w-[480px] h-[655px] rounded-[32px] bg-[#ffffff]  flex flex-col justify-center items-center">
      <div className="w-[416px] h-[385px] gap-[28px] bg-blue-500">
        <Image src={"/Main 1.png"} alt="" width={60} height={60} />
        <h1 className="">Join Us! 😎</h1>
        <h1 className="">Please provide all current information accurately.</h1>
      </div>
    </div>
  );
}
