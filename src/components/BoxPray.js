import React from "react";

const BoxPray = ({ title, hours }) => {
  return (
    <div className="w-full px-[27px] py-[15px] bg-[#0C8F8F] rounded-[20px] shadow-md shadow-gray-500">
      <h2 className="text-[18px] font-semibold">{title}</h2>
      <h1 className="text-[24px] font-semibold">{hours} WIB</h1>
    </div>
  );
};

export default BoxPray;
