import { useRef } from "react";
import Button from "../components/common/Button"
import Input from "../components/common/Input"
import TextButton from "../components/common/TextButton"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Home()
{
  const tempRef = useRef<HTMLDivElement>(null);

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
      <div className="max-w-lg mx-auto card flex flex-col gap-4 mt-12">
        <Input hasError>HEHE</Input>
        <Input placeHolder="HEHEHHE">HEHE</Input>
        <Button className="mt-8">HEHE</Button>
        <Button className="bg-accent">HEHE</Button>
        <TextButton>HEHE</TextButton>
      </div>
      <div className="h-screen flex justify-center mt-2">
        <div className="h-64 max-w-lg w-full card" ref={tempRef}>

        </div>
      </div>
    </>
  )
}

export default Home