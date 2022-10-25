import React from "react";
import Link from "next/link";

const ButtonTag = ({ data }) => {
  const { name, cca3 } = data;
  return (
    <Link href={`/detail/${cca3}`}>
      <div className="bg-white shadow rounded-sm h-fit cursor-pointer mr-2 hover:bg-white/20 transition">
        <p className="py-1 px-7 flex items-center text-xs">{name.common}</p>
      </div>
    </Link>
  );
};

export default React.memo(ButtonTag);
