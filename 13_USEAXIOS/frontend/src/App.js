import useAxios from "./useAxios";

const App = () => {
  const { loading, data, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(`Loading: ${loading}\nData:${JSON.stringify(data)}`);
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch Button</button>
    </div>
  );
};

export default App;
