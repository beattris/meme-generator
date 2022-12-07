export const Meme = () => {
  return (
    <main>
      <form className="meme-form">
        <div className="meme-inputs-wrapper">
          <input type="text" placeholder="Top text" />
          <input type="text" placeholder="Bottom text" />
        </div>
        <button className="meme-button">Get a new meme image 🖼</button>
      </form>
    </main>
  );
};
