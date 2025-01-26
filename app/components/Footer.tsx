import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto py-5 flex items-center border-t-2 border-gray-300 justify-between text-softTextColor flex-wrap gap-12 sm:gap-14">
      <div className="flex-1 flex flex-col gap-3.5">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.jpeg" alt="tk blog" width={50} height={50} />
          <h1 className="text-xl">theblog by Kuzgun</h1>
        </div>
        <p className="font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className="mt-2.5 flex gap-2.5">
          <Image src="/youtube.png" alt="facebook" width={18} height={18} />
          <Image src="/youtube.png" alt="instagram" width={18} height={18} />
          <Image src="/youtube.png" alt="tiktok" width={18} height={18} />
          <Image src="/youtube.png" alt="youtube" width={18} height={18} />
        </div>
      </div>
      <div className="flex-1 flex lg:justify-end lg:gap-[100px] gap-[50px] w-full justify-between text-sm lg:text-base">
        <div className="flex flex-col gap-2.5 font-light">
          <span className="font-bold">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="flex flex-col gap-2.5 font-light">
          <span className="font-bold">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className="flex flex-col gap-2.5 font-light">
          <span className="font-bold">Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
