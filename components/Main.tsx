'use client'

import { useState, useEffect } from "react";

import Image from "next/image";
import headpageImage from "@/public/images/headpage-image.jpg"
import stemWeek from "@/public/images/stem-week.jpg"
import kent from "@/public/images/kent.jpg"
import kent2 from "@/public/images/kent2.jpg"
import { LuPen } from "react-icons/lu";
import hichi from "@/public/images/hichi.jpg"
import bocchan from "@/public/images/bocchan.jpg"
import snitch from "@/public/images/snitch.jpg"
import gichi from "@/public/images/gichi.jpg"
import donaldo from "@/public/images/donaldo.jpg"

const Main = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        // Add the slide-in-active class after the component mounts
        setIsVisible(true);
      }, []);
    return (
        <main
            className="flex flex-col gap-24 pt-44 pb-8"
        >
{/* section 1 */}
            <div
                className="flex items-center justify-around flex-wrap py-8"
            >
                <div
                     className={`flex flex-col slide-in-div ${isVisible ? 'slide-in-active' : ''}`}
                >
                    <h1
                        className="font-bold text-9xl opacity-10 animate-pulse"
                    >
                        STEM Society
                    </h1>
                    <h1
                        className="font-bold text-9xl animate-pulse"
                    >
                        STEM Society
                    </h1>
                    <h1
                        className="font-bold text-9xl opacity-10 animate-pulse"
                    >
                        STEM Society
                    </h1>
                    <p
                        className="py-5 text-center"
                    >
                        Innovate, Educate, Elevate - Cultivating Excellence in STEM Together.
                    </p>
                </div>
                <Image  
                    src={stemWeek}
                    alt="headpageImage"
                    className={`w-[50rem] slide-in-long-div ${isVisible ? 'slide-in-active' : ''}`}
                />
            </div>

            <div
            className={`flex justify-around w-full slide-in-long-div ${isVisible ? 'slide-in-active' : ''}`}
            >
                <h2
                    className="font-bold border-l-4 border-[#111111] px-5 hover:bg-[#111111] hover:text-[#dad6ca] py-1"
                >
                    Integrity
                </h2>
                <h2
                    className="font-bold border-l-4 border-[#111111] px-5 hover:bg-[#111111] hover:text-[#dad6ca] py-1"
                >
                    Compassion
                </h2>
                <h2
                    className="font-bold border-l-4 border-[#111111] px-5 hover:bg-[#111111] hover:text-[#dad6ca] py-1"
                >
                    Patriotism
                </h2>
                <h2
                    className="font-bold border-l-4 border-[#111111] px-5 hover:bg-[#111111] hover:text-[#dad6ca] py-1"
                >
                    Resilience
                </h2>
                <h2
                    className="font-bold border-l-4 border-[#111111] px-5 hover:bg-[#111111] hover:text-[#dad6ca] py-1 "
                >
                    Innovation
                </h2>
            </div>

{/* section 2 */}
            <div
                className="flex justify-between px-10 gap-20 items-center bg-[#111111] w-full text-[#dad6ca] py-28 flex-wrap"
            >
                <Image
                    src={headpageImage}
                    alt="stemWeek"
                    className="w-[45rem]"
                />
                <div
                    className="flex flex-col gap-10"
                >
                    <h1
                        className="font-semibold text-9xl"
                    >
                        Upcoming <span
                            className="text-[#111111]"
                        > Events </span>
                    </h1>
                    <h1
                        className="font-semibold text-9xl text-[#111111]"
                    >
                        Upcoming <span
                            className="text-[#dad6ca]"
                        > Events </span>
                    </h1>
                    <h2
                        className="text-5xl font-semibold flex gap-10 items-center"
                    >
                        <span
                            className="border-[1px] border-solid rounded-full border-[#dad6ca] p-5 px-9"
                        >
                            1
                        </span>
                        STEM Week
                    </h2>
                    <p>
                        STEM Week is a dynamic and engaging week-long event featuring a series of STEM competitions and activities designed to ignite curiosity, foster innovation, and celebrate the wonders of Science, Technology, Engineering, and Mathematics. Throughout the week, participants will have the opportunity to showcase their talents, collaborate on exciting projects, and immerse themselves in the ever-evolving world of STEM.
                    </p>
                    <h2
                        className="text-5xl font-semibold flex gap-10 items-center"
                    >
                        <span
                            className="border-[1px] border-solid rounded-full border-[#dad6ca] p-5 px-8"
                        >
                            2
                        </span>
                        Cultural Festival
                    </h2>
                    <p>
                        The Cultural Festival is an immersive and vibrant week-long celebration, offering a diverse array of cultural activities and competitions designed to spark curiosity, inspire creativity, and revel in the richness of our cultural tapestry. Throughout the festival, participants will have the chance to showcase their unique talents, collaborate on exciting cultural projects, and immerse themselves in the dynamic world of our diverse heritage. Join us for a spirited and engaging week, where we come together to celebrate and embrace the beauty of cultural diversity.
                    </p>
                </div>
            </div>

{/* section 3 */}
            <div
                className="flex flex-col px-[10rem] gap-16"
            >
                <h1
                    className="text-7xl font-bold"
                >
                    Shared insights from our community
                </h1>
                <div
                    className="flex justify-center  gap-20 items-center flex-wrap"
                >
                    <Image
                        src={kent}
                        alt="kent"
                        className="w-[20rem] rounded-full"
                    />
                    <div
                        className="flex flex-col gap-5"
                    >
                        <h2
                            className="text-4xl font-semibold"
                        >
                            Bochibori Norikamano
                        </h2>
                        <p>
                            STEM Week was a tremendous success, leaving me hopeful for continued momentum. The enthusiastic participation highlighted the importance of fostering curiosity in STEM. I look forward to ongoing collaboration, building on the connections and knowledge gained. Whether a student, educator, or professional, lets use this positive energy to fuel future projects. My aspiration is to see the impact extend beyond the week, fostering innovation and contributing to a future where science and technology drive positive change. Cheers to the success of STEM Week and the exciting journey ahead!
                        </p>
                    </div>
                </div>
                <div
                    className="flex justify-center  gap-20 items-center flex-wrap"
                >
                    <Image
                        src={kent2}
                        alt="kent2"
                        className="w-[20rem] rounded-full"
                    />
                    <div
                        className="flex flex-col gap-5"
                    >
                        <h2
                            className="text-4xl font-semibold"
                        >
                            Hikarimari Tobikoto
                        </h2>
                        <p>
                            STEM Week proved immensely successful, instilling hope for sustained momentum. The fervent engagement underscored the significance of nurturing curiosity in STEM. I anticipate continued collaboration, leveraging the established connections and acquired knowledge. Whether one is a student, educator, or professional, lets harness this positivity to propel forthcoming projects. My aim is to witness the influence extend beyond the week, cultivating innovation and playing a role in a future where science and technology propel positive transformations. Heres to the triumph of STEM Week and the thrilling path ahead!
                        </p>
                    </div>
                </div>
                <button
                    className="place-self-end bg-[#111111] text-[#dad6ca] px-10 py-3 rounded-full text-2xl font-semibold hover:bg-neutral-500 flex gap-5 items-center"
                >
                    <LuPen 
                        size={23}
                    />
                    Submit content
                </button>
            </div>

            {/* section 4 */}
            <div
                className="flex w-full"
            >
                <h1
                    className="text-7xl font-semibold place-self-end px-[10rem]"
                >
                    The Leadership Organization
                </h1>
            </div>

            <div
                className="flex justify-around w-full px-[10rem] flex-wrap"
            >
                <div
                    className="flex flex-col items-center gap-5"
                >
                    <Image
                        alt="hichi"
                        src={hichi}
                        className="w-[13rem] rounded-full"
                    />
                    <div
                        className="flex flex-col items-center"
                    >
                        <small>
                            President
                        </small>
                        <h2
                            className="text-2xl font-semibold"
                        >
                            Hichimichi Monkado
                        </h2>
                        <p
                            className="text-base underline text-neutral-500"
                        >
                            hichimichimonkado@gmail.com
                        </p>
                    </div>
                </div>
                <div
                    className="flex flex-col items-center gap-5"
                >
                    <Image
                        alt="bocchan"
                        src={bocchan}
                        className="w-[13rem] rounded-full"
                    />
                    <div
                        className="flex flex-col items-center"
                    >
                        <small>
                            Vice President
                        </small>
                        <h2
                            className="text-2xl font-semibold"
                        >
                            Bocchan Haburachiman
                        </h2>
                        <p
                            className="text-base underline text-neutral-500"
                        >
                            bocchanhaburachiman@gmail.com
                        </p>
                    </div>
                </div>
                <div
                    className="flex flex-col items-center gap-5"
                >
                    <Image
                        alt="gichi"
                        src={gichi}
                        className="w-[13rem] rounded-full"
                    />
                    <div
                        className="flex flex-col items-center"
                    >
                        <small>
                            Secretary
                        </small>
                        <h2
                            className="text-2xl font-semibold"
                        >
                            Gichi Puchitichihiko
                        </h2>
                        <p
                            className="text-base underline text-neutral-500"
                        >
                            gichipuchitichihiko@gmail.com
                        </p>
                    </div>
                </div>
                <div
                    className="flex flex-col items-center gap-5"
                >
                    <Image
                        alt="donaldo"
                        src={donaldo}
                        className="w-[13rem] rounded-full"
                    />
                    <div
                        className="flex flex-col items-center"
                    >
                        <small>
                            Treasurer
                        </small>
                        <h2
                            className="text-2xl font-semibold"
                        >
                            Donaldo Bonaldo
                        </h2>
                        <p
                            className="text-base underline text-neutral-500"
                        >
                            donaldobonaldo@gmail.com
                        </p>
                    </div>
                </div>
                <div
                    className="flex flex-col items-center gap-5"
                >
                    <Image
                        alt="snitch"
                        src={snitch}
                        className="w-[13rem] rounded-full"
                    />
                    <div
                        className="flex flex-col items-center"
                    >
                        <small>
                            Public Information Officer
                        </small>
                        <h2
                            className="text-2xl font-semibold"
                        >
                            Snitch Ritchikitchi
                        </h2>
                        <p
                            className="text-base underline text-neutral-500"
                        >
                            snitchritchikitchi@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Main;