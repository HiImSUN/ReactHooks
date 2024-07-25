import useBeforeLeave from "./useBeforeLeave";
const App = () => {
  const begMessage = () => console.log("plz don't leave");
  useBeforeLeave(begMessage);
  return <div className="App">hi</div>;
};

export default App;
