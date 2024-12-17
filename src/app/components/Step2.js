import Image from "next/image";
const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div className="w-[480px] h-[655px] rounded-[32px] bg-[#ffffff]  flex flex-col justify-center items-center">
      <div className="w-[416px] h-[385px] gap-[28px] bg-blue-500">
        <Image src={"/Main 1.png"} alt="" width={60} height={60} />
        <h1 className="">Join Us! 😎</h1>
        <h1>Please provide all current information accurately.</h1>{" "}
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
      </div>
      <div className="w-[416px] h-[44px] gap-[8px] bg-[#D6D8DB]">
        <button onClick={prevStep} className="w-[128px] h-[44px]">
          Previous
        </button>
        <button onClick={nextStep} className="w-[280px] h-[44px]">
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
