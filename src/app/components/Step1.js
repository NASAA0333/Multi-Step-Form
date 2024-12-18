import Image from "next/image";
import { useState } from "react";

const Step1 = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState({});
  const buttonEnable = () => {
    if (
      formData.firstName == "" ||
      formData.lastName == "" ||
      formData.username == ""
    ) {
      return true;
    }
    return false;
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.match(/^[a-zA-Z]+$/)) {
      newErrors.firstName =
        "First name cannot contain special characters or numbers.";
    }
    if (!formData.lastName.match(/^[a-zA-Z]+$/)) {
      newErrors.lastName =
        "Last name cannot contain special characters or numbers.";
    }
    if (!formData.username.match(/^[a-zA-Z]+$/)) {
      newErrors.username =
        "This username is already taken. Please choose another one.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (validate()) {
      nextStep(formData);
    }
  };

  const buttonEnamble = true;
  return (
    <div className="w-[480px] h-[655px] rounded-[8px] bg-[#ffffff]  flex flex-col justify-around items-center">
      <div className="w-[416px] h-[385px] gap-[28px] ">
        <Image src={"/Main 1.png"} alt="" width={60} height={60} />
        <h1 className="">Join Us! 😎</h1>
        <h1>Please provide all current information accurately.</h1>
        <h2>{"First name *"} </h2>
        <input
          className="w-[416px] h-[44px] rounded-[8px] p-[8px] bg-[#CBD5E1]"
          type="text"
          placeholder="Placeholder"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName}</p>
        )}
        <h2>{"Last name *"} </h2>
        <input
          className="w-[416px] h-[44px] rounded-[8px] p-[8px] bg-[#CBD5E1]"
          type="text"
          placeholder="Placeholder"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm">{errors.lastName}</p>
        )}
        <h2>{"Username *"} </h2>
        <input
          className="w-[416px] h-[44px] rounded-[8px] p-[8px] bg-[#CBD5E1]"
          type="email"
          placeholder="Placeholder"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username}</p>
        )}
      </div>
      <button
        disabled={buttonEnable()}
        onClick={next}
        className={`w-[416px] h-[44px]  ${
          buttonEnable() === true ? "bg-[#D6D8DB]" : "bg-[black]"
        } rounded-[6px] text-white`}
      >
        {"Continue 1/3 >"}
      </button>
    </div>
  );
};

export default Step1;
