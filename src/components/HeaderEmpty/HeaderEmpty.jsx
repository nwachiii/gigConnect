/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const HeaderEmpty = ({ className }) => {
  return (
    <div
      className={`w-[1144px] h-[68px] bg-[#ffffff7a] rounded-[24px] border border-solid border-[#f6f7f7c7] shadow-[0px_4px_48px_#00000005] backdrop-blur-[68px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(68px)_brightness(100%)] ${className}`}
    >
      <div className="relative w-[1099px] h-[42px] top-[12px] left-[21px]">
        <div className="inline-flex items-start gap-[38px] absolute top-[12px] left-[367px]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[18px] whitespace-nowrap">
            Talent Marketplace
          </div>
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[18px] whitespace-nowrap">
            Find Work
          </div>
        </div>
      </div>
    </div>
  );
};
