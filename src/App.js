import Page1 from './pages/page1';
import './App.css';

function App() {
  return (
    <div className="App">
      <Page1 mess={"Landing Page"}/>
      <Page1 mess = {"Evaluation Page"}></Page1>
      <Page1 mess = {"Result/Chatbot Page"}></Page1>
    </div>
  );
}

export default App;
