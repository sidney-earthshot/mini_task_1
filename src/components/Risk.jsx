import React from "react";

export default function Risk({ basis, content, bg_colour }) {
  return (
    <div
      className={`text-white text-sm ${bg_colour} ${basis} px-3 py-1 mr-4 my-2 rounded-full`}
    >
      {content}
    </div>
  );
}
