import useFadeIn from "./useFadeIn";
import useNetwork from "./useNetwork";

const App = () => {
  const fadeInH1 = useFadeIn(2, 5);
  const fadeInP = useFadeIn(5);

  const handleNetworkChange = (online) => {
    console.log(online ? "We just turned online" : "We just turned offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>Ipsum Lorem dopem sia nom</p>

      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default App;
