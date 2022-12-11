import { useState } from "react";
import memesData from "../memesData";

export const Meme = () => {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage(){
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage (memesArray[randomNumber].url);
  }

  return (
    <main>
      <div className="meme-form">
        <div className="meme-inputs-wrapper">
          <input type="text" placeholder="Top text" />
          <input type="text" placeholder="Bottom text" />
        </div>
        <button className="meme-button" onClick={getMemeImage}>Get a new meme image 🖼</button>
        </div>
        <img src={memeImage} alt="" className="meme-image"/>
    </main>
  );
};
