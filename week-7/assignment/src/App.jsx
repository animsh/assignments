import "./App.css";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();

  const onClickHandler = (e) => {
    navigate(e.target.dataset["path"]);
  };

  return (
    <>
      <h1>Week 7 Assignment</h1>
      <div className="card">
        <button data-path="/one" onClick={onClickHandler}>
          Question 1
        </button>
        <button data-path="/two" onClick={onClickHandler}>
          Question 2
        </button>
        <button data-path="/three" onClick={onClickHandler}>
          Question 3
        </button>
        <button data-path="/four" onClick={onClickHandler}>
          Question 4
        </button>
        <button data-path="/five" onClick={onClickHandler}>
          Question 5
        </button>
        <button data-path="/six" onClick={onClickHandler}>
          Question 6
        </button>
        <button data-path="/seven" onClick={onClickHandler}>
          Question 7
        </button>
      </div>
    </>
  );
}

export default App;
