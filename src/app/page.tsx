"use client"

import { Euphoria_Script } from "next/font/google";
import { useState } from "react";

export default function Home() {

  const [result, setResult] = useState("0")
  const [equation, setEquation] = useState("")

  const button_number: string[][] = [["+/-", "0" , "."], ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]]
  const button_ops: string[][] = [["C", "DEL"], ["*", "/"], ["+", "-"]]
  const calculated: boolean = false

  const button_action = (button: string): void =>{
    if (button === "+/-"){
      if(Number(result) > 0){
        setResult("-" + result)
      } else {
        let pos_num = result.replace("-","")
        setResult(pos_num)
      }
    } else if (button === "C"){
        setResult("0")
        setEquation("")
    } else if (button === "DEL"){
        let new_result = result.slice(0, -1)
        if (new_result.length === 0){
          new_result = "0"
        }
        setResult(new_result)
    } else if (button === "*" || button === "/" || button === "+" || button === "-"){
        setEquation(equation + result + button)
        setResult("0")
    } else if (button === "="){
        try{
          let full = equation + result
          let answer = eval(full)

          setEquation(full)
          setResult(answer)
        } catch (error){
          setResult("Error")
        }
    } else {
        if (result === "0"){
          setResult(button)
        } else {
          setResult(result + button)
        }
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-evenly py-32 px-8 bg-white dark:bg-black">

        <div className="flex flex-col bg-white">
          <text className="text-right">{equation}</text>
          <input className="text-black text-right" type="text" value={result} defaultValue={0} readOnly/>
        </div>
        <div className="grid grid-cols-5 gap-6 text-center">
          <div className="col-span-3 grid grid-cols-3 gap-6 text-center">
            {
              button_number.reverse().map((button: string[]) =>
                (
                  button.map((number: string) => (
                    <button className="bg-white text-black w-16 h-16" key={number} onClick={() => button_action(number)}>
                      {number}
                    </button>
                  ))
                )
              )
            }
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-6 text-center">
            {
              button_ops.map((ops: string[]) => (
                ops.map((op: string) => (
                  <button className="bg-white text-black w-16 h-16" key={op} onClick={() => button_action(op)}>
                      {op}
                </button>
                ))
              ))
            }
            <button className=" bg-white text-black h-16 col-span-2 text-center" onClick={() => button_action("=")}>
              =
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
