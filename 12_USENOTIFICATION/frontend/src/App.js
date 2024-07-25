import useNotification from "./useNotification";

const App = () => {
  const triggerNotif = useNotification("Welcome to my website!", {
    body: "Take a look plz",
  });
  return (
    <div>
      <button onClick={triggerNotif}>Notify Btn</button>
    </div>
  );
};

export default App;
