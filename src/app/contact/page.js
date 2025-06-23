'use client'
import Link from "next/link";
import Footer from "../footer/footer";
import { useState } from 'react'

export default function ContactPage() {
const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Du kan sende data til en API her
    console.log({ name, email, message })
    setSubmitted(true)
  }
    return (
        <>
        <div className="flex gap-5 m-7 ml-7 bg-gray-800">
        <Link href="/home" className="text-white-500">Home</Link>
        <Link href="/about" className="text-white-500">About</Link>
        <Link href="/contact" className="text-green-800 dark:text-gray-400">Contact</Link>
        </div>

        <div className="text-xl my-4  mx-100" >Get In Touch</div>
        <p>
            Tak fordi du kiggede forbi!  
            Hvis du leder efter en motiveret og 
            detaljeorienteret webudvikler med interesse 
            for front-end og responsivt design, så vil jeg meget gerne høre fra dig. 
            Uanset om det handler om et projekt, en praktikplads eller en uformel snak, 
            er du velkommen til at kontakte mig. Jeg er altid åben for nye muligheder og udvikling.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-gray-900 rounded shadow-lg space-y-4">
      <h2 className="text-2xl font-bold text-white">Kontakt os</h2>

      <input
        type="text"
        placeholder="Navn"
        className="w-full p-2 rounded bg-gray-800 text-white"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 rounded bg-gray-800 text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Besked"
        className="w-full p-2 rounded bg-gray-800 text-white"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Send
      </button>

      {submitted && <p className="text-green-400 mt-2">Tak for din besked!</p>}
    </form>

        <Footer></Footer>
        </>
    )
}