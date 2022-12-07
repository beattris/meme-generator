import logo from "../assets/Troll Face.png"

export const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <img src={logo} className="logo" alt="logo" />
        <h2>Meme Generator</h2>
        <h4>React Course - Project 3</h4>
      </nav>
    </header>
  );
};
