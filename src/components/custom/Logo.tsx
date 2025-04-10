import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="meal-finder">
      <Image src={"/images/home/logo_long.png"} alt="Logo" width={200} height={50} priority={false} />
    </Link>
  );
}