import useFullscreen from "./useFullscreen";

const App = () => {
  const { element, isFullscreen, triggerFull, exitFull } = useFullscreen();

  return (
    <div>
      <div
        ref={element}
        style={{ width: "300px", height: "200px", background: "lightblue" }}
      >
        <p>이 요소를 풀스크린으로 전환합니다.</p>
        {isFullscreen ? (
          <button onClick={exitFull}>풀스크린 종료</button>
        ) : (
          <button onClick={triggerFull}>풀스크린 시작</button>
        )}
      </div>
    </div>
  );
};

export default App;
