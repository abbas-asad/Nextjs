import Image from "next/image";
export default function Home() {
  return (
      <div className="prof-section">
        <div className="description">
          <p>Hi, I'm</p>
          <p className="yellow ">Abbas Asad</p>
          <p>I am a <span className="yellow">React Developer</span></p>

        </div>
        <div className="img">
          <Image src={'/profile.gif'} width={350} height={270} alt="image not found" className="prof-img" />

        </div>
      </div>
  );
}
