import Image from "next/image";

const Success = () => {
  return (
    <div className="w-[480px] h-[655px] rounded-[8px] bg-[#ffffff]  flex flex-col justify-around items-center">
      <div className="w-[416px] h-[385px] gap-[28px] ">
        <Image src={"/Main 1.png"} alt="" width={60} height={60} />
        <h1 className=" text-[#202124] text-[26px] font-bold">
          You're All Set 🔥
        </h1>
        <h1 className="text-[#8E8E8E] text-[18px]">
          We have received your submission. Thank you!
        </h1>
      </div>
    </div>
  );
};

export default Success;
