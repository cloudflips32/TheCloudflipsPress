import Image from "next/image"
import Link from "next/link"
import logo from '../app/img/logo.svg'
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
      <Link href='/'>
        <Image src={logo} alt='cloudflipspress' width={40} />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn.png" />
          <AvatarFallback className="text-black">
            AS
          </AvatarFallback>
        </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href='/profile'>
              <a>Profile</a>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href='/auth'>
              <a>Logout</a>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

    </div>
  )
}

export default Navbar