import Image from "next/image";
import { useState } from "react";

const Step3 = ({ formData, setFormData, prevStep, nextStep }) => {
  const [imageDrop, setImageDrop] = useState(null);

  const buttonEnable = () => {
    if (formData.date === "" || formData.image === "") {
      return true;
    }
    return false;
  };
  const handleDrop = (event) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const previewImage = URL.createObjectURL(file);

      setImageDrop(previewImage);
      setFormData(previewImage);
    }
  };

  return (
    <div className="w-[480px] h-[655px] rounded-[8px] bg-[#ffffff]  flex flex-col justify-around items-center">
      <div className="w-[416px] h-[385px] gap-[28px] ">
        <Image src={"/Main 1.png"} alt="" width={60} height={60} />
        <h1 className="text-[#202124] text-[26px] font-bold">Join Us! 😎</h1>
        <h1 className="text-[#8E8E8E] text-[18px]">
          Please provide all current information accurately.
        </h1>
        <h2>Date of birth *</h2>
        <input
          className="w-[416px] h-[44px] rounded-[8px] p-[8px] bg-[#CBD5E1]"
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />

        <h2>Profile image *</h2>
        <label
          htmlFor="proFileImage"
          className="rounded-[8px]  w-[416px] h-[180px] bg-[#7F7F800D] flex justify-center items-center flex-col"
        >
          <input
            className="hidden w-full h-full"
            type="file"
            id="proFileImage"
            value={formData.image}
            onChange={handleDrop}
          />
          {imageDrop ? (
            <img src={imageDrop} className="w-full h-full rounded-[8px]" />
          ) : (
            <input
              className="hidden w-full h-full"
              type="file"
              id="proFileImage"
              value={formData.image}
              onChange={handleDrop}
            />
          )}
        </label>
      </div>
      <div className="w-[416px] h-[44px] flex justify-between ">
        <button
          onClick={prevStep}
          className="w-[128px] h-[44px] rounded-[6px] bg-[#D6D8DBbf]"
        >
          {"< Back"}
        </button>
        <button
          disabled={buttonEnable()}
          onClick={nextStep}
          className={`w-[416px] h-[44px]  ${
            buttonEnable() === true ? "bg-[#D6D8DB]" : "bg-[black]"
          } rounded-[6px] text-white`}
        >
          {"Submit 3/3 >"}
        </button>
      </div>
    </div>
  );
};

export default Step3;
