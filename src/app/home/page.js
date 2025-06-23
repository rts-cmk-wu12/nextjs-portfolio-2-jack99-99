import Image from "next/image";
import myImage from "./jonas.png";
import Link from "next/link";
import Footer from "../footer/footer";

export default function HomePage() {
  return (
    <>
   <main className="flex gap-5 m-7 ml-7 bg-gray-800" >
    <Link href="/home" className="text-green-800 dark:text-gray-700">Home</Link>
    <Link href="/about" className="text-white-500">About</Link>
    <Link href="/contact" className="text-white-500">Contact</Link>
   </main>


   <div className="justify-center ml-5 mr-5 my-4">
    <div className="text-xl my-4">Jonas</div>
    <p className="flex">Hej, jeg hedder Jonas 
      og er studerende på Center for Medie og 
      Kommunikation (CMK) på Roskilde Tekniske Skole. 
      Jeg brænder for webudvikling og digitalt design, 
      og jeg udforsker hele tiden nye værktøjer og 
      teknologier for at udvikle mine færdigheder.
      
      <Image alt="jonas ost" src={myImage} className="ml-50 rounded-full"></Image>
      </p>
   </div>

    <Footer></Footer>
   </>
  );
}
