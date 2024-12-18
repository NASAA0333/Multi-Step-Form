import Image from "next/image";

const Step3 = ({ formData, setFormData, prevStep, nextStep }) => {
  // const handleSubmit = () => {
  //   // Add your form submission logic here
  //   console.log("Form submitted: ", formData);
  // };
  const validate = () => {
    if (formData.date == "" || formData.image == "") {
      return true;
    }
    return false;
  };

  return (
    <div className="w-[480px] h-[655px] rounded-[8px] bg-[#ffffff]  flex flex-col justify-around items-center">
      <div className="w-[416px] h-[385px] gap-[28px] ">
        <Image src={"/Main 1.png"} alt="" width={60} height={60} />
        <h1 className="">Join Us! 😎</h1>
        <h1>Please provide all current information accurately.</h1>{" "}
        <h2>{"Date of birth *"}</h2>
        <input
          className="w-[416px] h-[44px] rounded-[8px] p-[8px] bg-[#CBD5E1]"
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <h2>{"Profile image *"}</h2>
        <input
          className="w-[416px] h-[180px] rounded-[8px] p-[8px] bg-[#CBD5E1]"
          type="file"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
      </div>
      <div className="w-[416px] h-[44px] flex justify-between ">
        <button
          onClick={prevStep}
          className="w-[128px] h-[44px] rounded-[6px] bg-[#D6D8DBbf]"
        >
          {"< Back"}
        </button>
        <button
          disabled={validate()}
          onClick={nextStep}
          className={`w-[416px] h-[44px]  ${
            validate() === true ? "bg-[#D6D8DB]" : "bg-[black]"
          } rounded-[6px] text-white`}
        >
          {"Continue 3/3 >"}
        </button>
      </div>
    </div>
  );
};

export default Step3;
