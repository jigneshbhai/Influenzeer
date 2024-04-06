import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
   <header className="w-full border-b">
    <div className="wrapper flex items-center justify-between">
        <Link href="/"  >
            <Image  src="/assets/images/logo.png" width={350} height={38} alt="Eventopia" className="rounded-md"/>
        </Link>
    </div>
   </header>

  )
}

export default Header