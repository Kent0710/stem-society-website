import Link from "next/link";

import { MdOutlineAdminPanelSettings } from "react-icons/md";

const Header = () => {
    return (
        <header
            className="w-full py-5 px-20 font-semibold flex justify-between fixed bg-[#dad6ca] z-10 backdrop-blur-xl bg-opacity-50 items-center"
        >
            
            <div
                className="flex gap-28"
            >
                <a href="#">
                <h1
                    className="text-xl"
                >
                    STEM Society
                </h1>
                </a>
                <div
                    className="text-lg flex gap-16"
                >
                    <Link
                        href="/news"
                        className="hover:opacity-50"
                    >
                        News
                    </Link>
                    <Link
                        href="/about"
                        className="hover:opacity-50"
                    >
                        Articles
                    </Link>
                    <Link
                        href="/about"
                        className="hover:opacity-50"
                    >
                        About
                    </Link>
                </div>
            </div>

            <button
                className="flex gap-3 border-[1px] border-solid border-[#111111] rounded-full py-2 px-5 items-center
                    hover:bg-[#111111] hover:text-[#dad6ca]  "
            >
                <MdOutlineAdminPanelSettings
                    size={27}
                />
                Log In as Admin
            </button>

        </header>
    )
};

export default Header;