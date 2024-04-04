"use client";
import Image from "next/image"
import React from "react"

const socialArray = [
    {
        icon: "/twitter.png",
        link: ""
    },
    {
        icon: "/instagram.png",
        link: ""
    },
    {
        icon: "/mail.png",
        link: ""
    },
    {
        icon: "/spotify.png",
        link: ""
    },
    {
        icon: "/tiktok.png",
        link: ""
    },
    {
        icon: "/youtube.png",
        link: ""
    }
]

const Footer: React.FC = () => {
  return (
    <div>
        <div className="footer-upper yellow_bg text-white p-3 py-5">
            <p className="text-[32px] font-semibold text-center max-sm:text-[20px]">Follow</p>

            <div className="social_icons flex gap-4 justify-center mt-4">
                {socialArray.map((social, index) => (
                    <div key={index}>
                        <a href={social.link}>
                            <Image src={social.icon} alt="icon" width={25} height={25} quality={100} />
                        </a>
                    </div>
                ))}
            </div>
        </div>

        <div className="footer-lower">
           <p className="text-center text-white mt-4 pb-4 max-sm:text-sm">&copy; 2023 TASCK Creative Company Limited. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer