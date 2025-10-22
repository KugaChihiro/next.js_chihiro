import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-50 flex w-full items-center border-b border-[rgba(229,232,235,1)] border-[1px]">
      <div className="flex items-center mx-[40px] my-[12px] justify-between w-full">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="logo" width={16} height={16} />
          <p className="font-bold ml-4 text-[18px] leading-[23px]">Evently</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none focus-visible:outline-none">
            <Image src="/avatar.svg" alt="avatar" width={40} height={40} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={4}>
            <DropdownMenuItem>Logout</DropdownMenuItem>
            <DropdownMenuItem>Dashboard</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}