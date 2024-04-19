import { useRef } from "react";
import Button from "../components/common/Button"
import Input from "../components/common/Input"
import TextButton from "../components/common/TextButton"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useModal } from "../context/ModalContext";
import { useTheme } from "../context/ThemeContext";

function Home()
{
  const tempRef = useRef<HTMLDivElement>(null);
  const modal = useModal();
  const theme = useTheme();

  useGSAP(()=>{
    gsap.fromTo(
      tempRef.current,{
          xPercent:30
      },
      {
        xPercent:-30,
        scrollTrigger:{
          trigger:tempRef.current,
          start:"0% 100%",
          end:"100% 0%",
          scrub:true,
          // markers:true
        }
      }
  );
  }, [tempRef.current])

  return (
    <>
      <div className="max-w-lg mx-auto card flex flex-col gap-4 mt-2">
        <Button onClick={async()=>{
          console.log(await modal?.CreateModal("Modal Title","Modal Content","OK","CANCEL"));
        }}>SHOW MODAL</Button>
      </div>
      <div className="max-w-lg mx-auto card flex flex-col gap-4 mt-2">
        <Button onClick={async()=>{
          theme.setTheme(theme.theme === "light" ? "dark" : "light");
        }}>TOGGLE THEME</Button>
      </div>
      <div className="max-w-lg mx-auto card flex flex-col gap-4 mt-2">
        <Link to={"/3d"}>
          <Button className="">ENTER EXPERIENCE</Button>
        </Link>
      </div>
      <div className="max-w-lg mx-auto card flex flex-col gap-4 mt-12">
        <Input hasError>HEHE</Input>
        <Input placeHolder="HEHEHHE">HEHE</Input>
        <Button className="mt-8">HEHE</Button>
        <Button className="bg-accent">HEHE</Button>
        <TextButton>HEHE</TextButton>
      </div>
      <div className="flex justify-center mt-2">
        <div className="h-64 max-w-lg w-full card" ref={tempRef}>

        </div>
      </div>
      <div className="h-screen"></div>
    </>
  )
}

export default Home