import Image from "next/image";

const Step1 = ({ formData, setFormData, nextStep }) => {
  return (
    <div className="w-[480px] h-[655px] rounded-[32px] bg-[#ffffff]  flex flex-col justify-around items-center">
      <div className="w-[416px] h-[385px] gap-[28px] bg-blue-500">
        <Image src={"/Main 1.png"} alt="" width={60} height={60} />
        <h1 className="">Join Us! 😎</h1>
        <h1>Please provide all current information accurately.</h1>
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
      </div>
      <button
        onClick={nextStep}
        className="w-[416px] h-[44px] gap-[8px] bg-[#D6D8DB]"
      >
        {"Continue 1/3 >"}
      </button>
    </div>
  );
};

export default Step1;
