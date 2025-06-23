import Link from "next/link";
import Footer from "../footer/footer";


export default function AboutPage() {

    return (
    <>
    <main className="flex gap-5 m-7 ml-7 bg-gray-800">
    <Link href="/home" className="text-white-500">Home</Link>
    <Link href="/about" className="text-green-800 dark:text-gray-400">About</Link>
    <Link href="/contact" className="text-white-500">Contact</Link>
    </main>

        <div className="text-xl my-4  mx-100" > About me </div>
        
        <p>
        Jeg hedder Jonas og studerer webudvikling med fokus på front-end og digitalt design.
        Det, der driver mig, er glæden ved at skabe websites, der ikke bare ser godt ud,
        men også føles rigtige at bruge. Jeg arbejder primært med HTML, CSS og JavaScript,
        og jeg er begyndt at udforske React, Tailwind CSS og Figma for at udvide mine kompetencer.
        Det, jeg elsker ved webudvikling, er den kreative frihed – balancen mellem teknik og æstetik. 
        Uanset om jeg designer en enkel landing page eller bygger en mindre webapp, 
        forsøger jeg altid at finde måder at forbedre både performance og brugeroplevelse. 
        Når jeg ikke koder, bruger jeg tid på fotografi – især street og natur, 
        og lige nu skyder jeg med mit Fujifilm X-T30. Jeg laver også musik i Ableton Live, 
        og når jeg vil koble af, spiller jeg spil som *The Witcher 3* og *Hades*. 
        De kreative interesser hjælper mig med at tænke anderledes og gør mig, efter min mening,
        til en bedre udvikler. Jeg er nysgerrig af natur og altid klar til at lære noget nyt. 
        Mit mål er at udvikle mig gennem praktiske projekter, erfaring og samarbejde med andre.
        </p>

    <Footer></Footer>
    </>
    )
}