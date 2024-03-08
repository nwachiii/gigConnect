import React from "react";
import {Check5} from '@/assets/icons/Check5';
import {Check9} from '@/assets/icons/Check9';
import {Minus4} from '@/assets/icons/Minus4';
import {Minus} from '@/assets/icons/Minus';
import { Check8 } from "@/assets/icons/Check8";

export const CheckboxBase = ({
  checked,
  indeterminate,
  size,
  type,
  state,
  className,
}) => {
  return (
    <div
      className={`border border-solid ${
        state === "default" && !checked
          ? "border-foundationgreygrey-100"
          : state === "disbaled"
          ? "border-foundationgreygrey-200"
          : !checked && state === "focused"
          ? "border-foundationprimaryprimary-300"
          : "border-foundationprimaryprimary-500"
      } ${size === "md" ? "w-[20px]" : "w-[16px]"} ${
        state === "focused" ? "shadow-highlight-shadow" : ""
      } ${size === "md" ? "h-[20px]" : "h-[16px]"} ${
        checked ? "overflow-hidden" : ""
      } ${
        size === "sm" && type === "checkbox"
          ? "rounded-[4px]"
          : size === "md" && type === "checkbox"
          ? "rounded-[6px]"
          : size === "md" && ["check-circle", "radio"].includes(type)
          ? "rounded-[10px]"
          : "rounded-[8px]"
      } ${
        !checked && ["default", "focused"].includes(state)
          ? "bg-[#ffffff]"
          : (!checked && state === "disbaled" && type === "check-circle") ||
            (state === "disbaled" && type === "checkbox") ||
            (state === "disbaled" && type === "radio")
          ? "bg-foundationgreygrey-25"
          : (checked && state === "default" && type === "check-circle") ||
            (checked && state === "focused" && type === "check-circle") ||
            (checked && state === "hover" && type === "check-circle")
          ? "bg-foundationprimaryprimary-500"
          : type === "check-circle" && checked && state === "disbaled"
          ? "bg-foundationgreygrey-200"
          : "bg-foundationprimaryprimary-50"
      } ${
        checked && ["check-circle", "checkbox"].includes(type) ? "relative" : ""
      } ${className}`}
    >
      {((checked &&
        !indeterminate &&
        size === "sm" &&
        state === "default" &&
        type === "checkbox") ||
        (checked &&
          !indeterminate &&
          size === "sm" &&
          state === "focused" &&
          type === "checkbox") ||
        (checked &&
          !indeterminate &&
          size === "sm" &&
          state === "hover" &&
          type === "checkbox")) && (
        <Check9 className="!absolute !w-[12px] !h-[12px] !top-[2px] !left-[2px]" />
      )}

      {((indeterminate && size === "sm" && state === "default") ||
        (indeterminate && size === "sm" && state === "focused") ||
        (indeterminate && size === "sm" && state === "hover")) && (
        <Minus4 className="!absolute !w-[12px] !h-[12px] !top-[2px] !left-[2px]" />
      )}

      {checked && type === "radio" && (
        <div
          className={`relative ${size === "md" ? "w-[8px]" : "w-[6px]"} ${
            size === "md" ? "left-[6px]" : "left-[5px]"
          } ${size === "md" ? "top-[6px]" : "top-[5px]"} ${
            size === "md" ? "h-[8px]" : "h-[6px]"
          } ${size === "md" ? "rounded-[4px]" : "rounded-[3px]"} ${
            state === "disbaled"
              ? "bg-foundationgreygrey-200"
              : "bg-foundationprimaryprimary-500"
          }`}
        />
      )}

      {type === "check-circle" && checked && size === "sm" && (
        <Check8 className="!absolute !w-[10px] !h-[10px] !top-[3px] !left-[3px]" />
      )}

      {((checked && !indeterminate && size === "md" && type === "checkbox") ||
        (checked &&
          !indeterminate &&
          size === "sm" &&
          state === "disbaled" &&
          type === "checkbox") ||
        (checked && size === "md" && type === "check-circle")) && (
        <Check5
          className={
            size === "sm"
              ? "!absolute !w-[12px] !h-[12px] !top-[2px] !left-[2px]"
              : size === "md" && state === "disbaled" && type === "checkbox"
              ? "!absolute !w-[16px] !h-[16px] !top-[2px] !left-[2px]"
              : "!absolute !w-[14px] !h-[14px] !top-[3px] !left-[3px]"
          }
          color={
            state === "disbaled" && type === "checkbox"
              ? "#ADB0B6"
              : type === "check-circle"
              ? "white"
              : "#053AF9"
          }
        />
      )}

      {indeterminate &&
        ["md", "sm"].includes(size) &&
        (size === "md" || state === "disbaled") && (
          <Minus
            className={
              size === "sm"
                ? "!absolute !w-[12px] !h-[12px] !top-[2px] !left-[2px]"
                : size === "md" && state === "disbaled"
                ? "!absolute !w-[16px] !h-[16px] !top-[2px] !left-[2px]"
                : "!absolute !w-[14px] !h-[14px] !top-[3px] !left-[3px]"
            }
            color={state === "disbaled" ? "#ADB0B6" : "#053AF9"}
          />
        )}
    </div>
  );
};

// CheckboxBase.propTypes = {
//   checked: PropTypes.bool,
//   indeterminate: PropTypes.bool,
//   size: PropTypes.oneOf(["md", "sm"]),
//   type: PropTypes.oneOf(["radio", "check-circle", "checkbox"]),
//   state: PropTypes.oneOf(["disbaled", "focused", "hover", "default"]),
// };
