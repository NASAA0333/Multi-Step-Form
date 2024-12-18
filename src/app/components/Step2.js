import Image from "next/image";
import { useState } from "react";
const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});
  const buttonEnable = () => {
    if (
      formData.email == "" ||
      formData.number == "" ||
      formData.password == "" ||
      formData.confirmPassword == ""
    ) {
      return true;
    }
    return false;
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.email.match(/^[a-zA-Z @]+$/)) {
      newErrors.email = "";
    }
    if (!formData.number.match(/^[1234567890]+$/)) {
      newErrors.number = "";
    }
    if (!formData.password.match(/^[a-zA-Z 1234567890]+$/)) {
      newErrors.password = "";
    }
    if (!formData.confirmPassword.match(/^[a-zA-Z 1234567890]+$/)) {
      newErrors.confirmPassword = "";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (validate()) {
      nextStep(formData);
    }
  };
  return (
    <div className="w-[480px] h-[655px] rounded-[8px] bg-[#ffffff]  flex flex-col justify-around items-center">
      <div className="w-[416px] h-[385px] gap-[28px] ">
        <Image src={"/Main 1.png"} alt="" width={60} height={60} />
        <h1 className="">Join Us! 😎</h1>
        <h1>Please provide all current information accurately.</h1>{" "}
        <h2>{"Email *"} </h2>
        <input
          className="w-[416px] h-[44px] rounded-[8px] p-[8px] bg-[#CBD5E1]"
          type="Email"
          placeholder="Placeholder"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        <h2>{"Phone number *"} </h2>
        <input
          className="w-[416px] h-[44px] rounded-[8px] p-[8px] bg-[#CBD5E1]"
          type="text"
          placeholder="Placeholder"
          value={formData.number}
          onChange={(e) => setFormData({ ...formData, number: e.target.value })}
        />
        {errors.number && (
          <p className="text-red-500 text-sm">{errors.number}</p>
        )}
        <h2>{"Password *"} </h2>
        <input
          className="w-[416px] h-[44px] rounded-[8px] p-[8px] bg-[#CBD5E1]"
          type="Password"
          placeholder="Placeholder"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
        <h2>{" Confirm Password *"} </h2>
        <input
          className="w-[416px] h-[44px] rounded-[8px] p-[8px] bg-[#CBD5E1]"
          type="Password"
          placeholder="Placeholder"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
        )}
      </div>
      <div className="w-[416px] h-[44px] flex justify-between">
        <button
          onClick={prevStep}
          className="w-[128px] h-[44px] rounded-[6px] bg-[#D6D8DBbf]"
        >
          {"< Back"}
        </button>
        <button
          disabled={buttonEnable()}
          onClick={next}
          className={`w-[416px] h-[44px]  ${
            buttonEnable() === true ? "bg-[#D6D8DB]" : "bg-[black]"
          } rounded-[6px] text-white`}
        >
          {"Continue 2/3 >"}
        </button>
      </div>
    </div>
  );
};

export default Step2;
