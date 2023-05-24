import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div class="holder flipH">
        <div class="card">
          <div class="front">A</div>
          <div class="back">A</div>
        </div>
      </div>

      <div class="holder flipV">
        <div class="card">
          <div class="front">B</div>
          <div class="back">B</div>
        </div>
      </div>

      <div class="holder flipH">
        <div class="card">
          <div class="front">C</div>
          <div class="back">C</div>
        </div>
      </div>
    </>
  );
}

export default App;
