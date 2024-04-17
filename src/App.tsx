import "./App.css";

function App() {
  return (
    <div className="App">
      Вы Василий Пидарасов?
      <button
        className="alertButton"
        onClick={() => {
          alert("Осуждаю !!!");
        }}
      >
        Подтвердить
      </button>
    </div>
  );
}

export default App;
