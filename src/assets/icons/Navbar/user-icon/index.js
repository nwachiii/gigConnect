import React from "react";

export const UserIcon = ({ color, boxSize }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={boxSize ?? "24"}
      height={ boxSize ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
        stroke={color ?? "#2E2E2E"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
