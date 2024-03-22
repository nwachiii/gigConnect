export const OnboardingHeader = () => {
    return (
        <div className="flex w-[1440px] items-center justify-between px-[24px] py-[13px] relative bg-white border-b [border-bottom-style:solid] border-[#efefef]">
        <GigconnectLogoB className="!relative !w-[143.74px] !h-[28px]" />
        <div className="inline-flex items-center justify-end gap-[28px] relative flex-[0_0_auto]">
          <div className="inline-flex items-center justify-end gap-[8px] relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-[10px] relative flex-[0_0_auto]">
              <div className="relative w-[38px] h-[38px] bg-neutral-100 rounded-[19px]" />
              <User03 className="!absolute !w-[24px] !h-[24px] !top-[7px] !left-[7px]" />
            </div>
            <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
              <div className="relative w-[79px] h-[14px] mt-[-1.00px] font-paragraph-small-medium font-[number:var(--paragraph-small-medium-font-weight)] text-night text-[length:var(--paragraph-small-medium-font-size)] tracking-[var(--paragraph-small-medium-letter-spacing)] leading-[var(--paragraph-small-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-small-medium-font-style)]">
                Ola Ahmed
              </div>
              <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-gray-01 text-[10px] tracking-[0] leading-[10px] whitespace-nowrap">
                olaahmed@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}