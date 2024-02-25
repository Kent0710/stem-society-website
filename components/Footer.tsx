import { MdOutlineFeedback } from "react-icons/md";
import Image from "next/image";
import ayano from "@/public/images/ayano.jpg"

const Footer = () => {
    return (
        <footer
            className="flex flex-col gap-10 bg-[#111111] text-[#dad6ca] py-12 px-[10rem]"
        >
            <div
                className="flex justify-between"
            >
                <h1
                    className="text-5xl font-semibold"
                >
                    Reach out directly!
                </h1>
                <h1
                    className="text-7xl font-semibold text-neutral-600"
                >
                    Feedbacks
                </h1>
                <h1
                    className="text-7xl font-semibold pr-20 text-neutral-600"
                >
                    Concerns
                </h1>
            </div>
            <form
                className="w-full flex gap-10 items-center"
            >
                <textarea
                    className="px-10 py-3 rounded-full bg-[#111111] border-2 border-solid border-[#dad6ca] resize-none w-[90%]"
                    placeholder="Type your message here..."
                />
                <button
                    className="bg-[#dad6ca] text-[#111111] h-fit py-4 rounded-full px-20 font-semibold flex gap-5 text-2xl hover:bg-[#4b4942] items-center"
                >
                    <MdOutlineFeedback 
                        size={27}
                    />
                    Submit
                </button>
            </form>
            <div
                className="px-[20rem] text-center text-sm gap-8 flex flex-col items-center"
            >
                <div
                    className="flex flex-col gap-2 items-center"
                >
                    <Image
                        alt="ayano"
                        src={ayano}
                        className="w-20 rounded-full"
                    />
                    <p
                        className="text-xl font-bold"
                    >
                        Developed by : nami
                    </p>
                    <p>
                        It Takes a Great Talent and Skill to Conceal One&apos;s Talent and Skill.
                    </p>
                </div>
                <p>
                    The content on this website is provided for informational purposes only. The STEM Society is not responsible for any errors or omissions in the information provided or any actions taken based on this information. The STEM society reserves the right to make changes to the website and its content at any time without notice.
                </p>
                <p>
                © 2024 STEM Society. All rights reserved. The content, images, and materials on this website are protected by copyright law. Any unauthorized use or reproduction of the content without the express written permission of the STEM Society is prohibited.
                </p>
            </div>
        </footer>
    )
};

export default Footer;