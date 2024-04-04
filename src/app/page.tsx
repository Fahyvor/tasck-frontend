"use client";
import Footer from "@/components/footer"
import Image from "next/image"

const musicArray = [
  {
    image: "/wizkid2.png",
    name: "Made in Lagos (Deluxe)"
  },
  {
    image: "/wizkid3.png",
    name: "Made in Lagos"
  },
  {
    image: "/ghetto.png",
    name: "Ghetto Love"
  }
]

const page = () => {
  return (
    <div className="dark_bg text-white w-full">
      <div className="body_nav flex justify-between px-12 items-center py-4 max-sm:px-6">
        <p className="font-bold text-[64px] max-sm:text-[32px]">Wizkid</p>
        <a href="/booking-form">
        <div className="yellow_bg p-4 rounded-lg max-sm:p-2">
          <p className="text-[16px] max-sm:text-[12px] font-medium">Book appointment</p>
        </div>
        </a>
      </div>

      <div className="body_1">
        <Image src="/wizkid.png" alt="" width={1000} height={600} quality={100} className="mx-auto" />
        <div className="wizkid_text_1 absolute flex justify-end -mt-[45%] md:-mt-[35%] max-sm:-mt-[60%] text-[32px]
        md:text-[20px] max-sm:text-[16px] font-medium w-full pr-[5.5%]">
          <p className="lg:w-[35%] md:w-[50%] max-sm:w-[70%] lg:mr-[5%] md:-mr-[4%] 
          max-sm:-mr-[3%]">See Wizkid Live in London at the TOTTENHAM HOTSPUR STADIUM on July 29th!</p>
        </div>

        <div className="wizkid_text_2 absolute -mt-[14%] max-sm:-mt-[2%] flex pl-[6%] text-[32px] md:text-[20px] max-sm:text-[16px] font-medium w-full">
          <p className="lg:w-[35%] md:w-[50%] max-sm:w-[70%] text-end max-sm:-mt-[24%] md:-ml-[5%] max-sm:-ml-[5.5%]">See Wizkid Live in London at the TOTTENHAM HOTSPUR STADIUM on July 29th!</p>
        </div>
      </div>

      <div className="yellow_bg yellow-dimarcation mb-4 text-transparent p-2 w-full">
        .
      </div>

      <div className="music_video_part">
        <div className="music_nav grid lg:grid-cols-5 md:grid-cols-4 max-sm:grid-cols-3 text-center max-sm: lg:px-[20%] lg:my-24 px-6 gap-6 justify-center">
          <p className="bg-gray-400 p-2">Musics</p>
          <p className="p-2">Video</p>
          <p className="p-2">Upcoming</p>
          <p className="p-2">Endorsement</p>
          <p className="p-2">Awards</p>
        </div>

        <div className="music_albums grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-8 px-24 md:px-12 my-8 max-sm:px-8 lg:mt-8 lg:mb-[20%]">
        {musicArray.map((music, index) => (
          <div key={index} className="flex flex-col gap-4">
            <Image src={music.image} alt="" width={100} height={100} quality={100} className="w-full"/>
            <p className="font-semibold text-[24px] max-sm:text-[18px]">{music.name}</p>
          </div>
        ))}
        </div>
      </div>

      
      <Footer />
    </div>
  )
}

export default page