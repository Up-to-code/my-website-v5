import Image from "next/image";
import Link from "next/link";
import React from "react";
interface ProjctCartProps {
  name: string;
  image: string;
  id: string;
}
function ProjctCart({ name, image, id }: ProjctCartProps) {
  return (
    <Link href={`/projects/${id}`}>
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="rounded-lg border border-zinc-700"
      />
      <p className="text-2xl font-bold my-3">{name.length > 20 ? name.slice(0, 20) + "..." : name}</p>
    </Link>
  );
}

export default ProjctCart;
