import { useState } from "react";
import memesData from "../memesData";

export const Meme = () => {
  // const [memeImage, setMemeImage] = useState( "http://i.imgflip.com/1bij.jpg");
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
  }

  return (
    <main>
      <div className="meme-form">
        <div className="meme-inputs-wrapper">
          <input type="text" placeholder="Top text" />
          <input type="text" placeholder="Bottom text" />
        </div>
        <button className="meme-button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} alt="" className="meme-image" />
    </main>
  );
};
