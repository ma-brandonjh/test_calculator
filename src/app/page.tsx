"use client"

import { useState, ChangeEvent } from "react";

export default function Home() {

  const [result, setResult] = useState("")

  const button_number: string[][] = [["+/-", "0" , "."], ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]]

  const button_action = (button: string): void =>{
    if (button === "+/-"){
      
    } else {
      setResult(result + button)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-evenly py-32 px-8 bg-white dark:bg-black">
        <div className="bg-white">
          <input className="text-black text-right" type="text" value={result} defaultValue={0} readOnly/>
        </div>
        <div className="grid grid-cols-3 gap-6 text-center">
          {
            button_number.reverse().map((button: string[]) =>
              (
                button.map((number: string) => (
                  <button className="bg-white text-black w-auto" key={number} onClick={() => button_action(number)}>
                    {number}
                  </button>
                ))
              )
            )
          }
        </div>
      </main>
    </div>
  );
}
