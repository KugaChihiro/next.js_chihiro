import Image from "next/image";
import Logo from "../../public/logo.svg";
import Avatar from "../../public/avatar.svg";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-50 flex w-full items-center border-b border-[rgba(229,232,235,1)] border-[1px]">
      <div className="flex items-center mx-10 my-[12px] justify-between w-full">
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" className = "w-4 h-4" />
          <p className="font-bold ml-4 text-[18px] leading-[23px]">Evently</p>
        </div>
        <div>
          <Image src={Avatar} alt="Avatar" width={40} height={40} />
        </div>
      </div>
    </div>
  );
}