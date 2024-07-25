import useScroll from "./useScroll";

const App = () => {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "10000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        HELLO
      </h1>
    </div>
  );
};

export default App;
