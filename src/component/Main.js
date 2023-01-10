import React from "react";
import { useState } from "react";
import memesData from "../memesData";

const Main = () => {


    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: "https://i.imgflip.com/30b1gx.jpg",
    })

    const generateMeme = () =>{
        const memesArr = memesData.data.memes
        const randomArr = Math.floor(Math.random() * memesArr.length)
        setMeme( prevMeme => {
            return(
                {
                topText: "",
                bottomText: "",
                randomImg: memesArr[randomArr].url})
        })

    }
    const changeText = (event) =>{
        const {name, value} = event.target
        setMeme(prevMeme =>{
            return(
                {...prevMeme,
                [name]: value  
                }
            )
        })
    }

    return(
        <main className=" p-8">
            <div className=" flex flex-col items-center gap-3">
                <div className=" flex flex-wrap gap-4 justify-center w-full">
                    <input  
                        className=" border border-gray-500 rounded-md p-2" 
                        type="text" 
                        onChange={changeText}
                        name="topText"  
                        value={meme.topText}
                        placeholder="Top Text"
                    />
                    <input 
                        className=" border border-gray-500 rounded-md p-2" 
                        type="text" 
                        onChange={changeText}
                        name="bottomText"
                        value={meme.bottomText}
                        placeholder="Bottom Text"
                    />
                </div>
                <button onClick={generateMeme} className=" bg-gradient-to-r from-purple-900 to-purple-500 h-10 rounded-md text-white w-full sm:w-96">Generate new meme image</button>

                <div className=" w-full sm:w-96 relative text-center">
                    <img className=" object-cover m-auto" src={meme.randomImg} alt="an image of a meme" />
                    <h1 style={{textShadow: "0px 0px 1rem black"}} className=" absolute uppercase top-4 w-full text-center font-bold text-white text-xl">{meme.topText}</h1>
                    <h1 style={{textShadow: "0px 0px 1rem black"}} className=" absolute uppercase bottom-4 w-full text-center font-bold text-white text-xl">{meme.bottomText}</h1>
                </div>
            </div>
            
        </main>
    )
}

export default Main;