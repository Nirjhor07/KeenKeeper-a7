import Link from "next/link";
import { CiClock1 } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";
import { TiHomeOutline } from "react-icons/ti";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-10">
      <div className="flex-1">
        <p className="text-xl text-base-700">
          <span className="font-extrabold">Keen</span>
          <span className="text-base-400">Keeper</span>
        </p>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-8 gap-3">
          <li>
            <button className="btn btn-success bg-[#244D3F] text-white ">
              <Link
                href="/"
                className="flex justify-center items-center gap-2 "
              >
                <TiHomeOutline></TiHomeOutline> Home
              </Link>
            </button>
          </li>
          <li>
            <button className="btn btn-success bg-[#244D3F] text-white hidden md:block">
              <Link href="/" className="flex justify-center items-center gap-2">
                <CiClock1></CiClock1> Timeline
              </Link>
            </button>
          </li>
          <li>
            <button className="btn btn-success bg-[#244D3F] text-white hidden sm:block">
              <Link href="/" className="flex justify-center items-center gap-2">
                <ImStatsDots></ImStatsDots> Stats
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
