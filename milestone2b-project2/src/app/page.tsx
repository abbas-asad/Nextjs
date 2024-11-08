import Image from "next/image";
export default function Home() {
  return (
    <div className="prof-section flex justify-between gap-8 w-[80vw] h-screen cs:flex-col-reverse cs:justify-center cs:gap-10 lg:w-[92vw] cs:text-center">
      <div className="description flex flex-col justify-center gap-10 cs:gap-6 font-bold text-5xl text-white cs:text-3xl">
        <p>Hi, I'm</p>
        <p className="text-[#ffe51f]">Abbas Asad</p>
        <p>I am <span className="text-[#ffe51f]">Web Developer</span></p>

      </div>
      <div className="img flex items-center cs:justify-center">
        <Image src={'/profile.gif'} width={350} height={270} alt="image not found" className="prof-img rounded-[20px] border-4 border-[#ffe51f] cs:max-w-[74%]" />

      </div>
    </div>
  );
}