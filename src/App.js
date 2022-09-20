import { Routes, Route } from "react-router-dom";
import Posts  from './components/posts';
import PostsID from './components/postID';

//import "./App.css"
//import './styles.css';


import './CSS/AllStyles.css'


function App() {
  return (
    <div className="App">

      <header>
        <h1> React Forum POC</h1>
        
      </header>

      <main>
      <Routes>
        <Route path="/" element={< Posts />} />
        <Route path="/post/:id" element={< PostsID />} />
      </Routes>
      </main>


      <footer>
        <h3>Footer</h3>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </footer>

    </div>
  );
}

export default App;