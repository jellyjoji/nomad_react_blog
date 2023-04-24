import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // let post = 'aaaa';
  let [title, setTitle] = useState(['Click the Thumbs up ','Click the Heart ','Click the Smile ','Click the Crying ']);
  let [liked, setLiked] = useState(0);
  let [heart, setHeart] = useState(0);
  let [smile, setSmile] = useState(0);
  let [crying, setCrying] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      {/* lists */}
      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{title[0]}<span onClick={()=>{setLiked(liked+1)}}>👍🏻</span> {liked}</h4>
        <p>2/17</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{title[1]}<span onClick={()=>{setHeart(heart+1)}}>♥️</span> {heart}</h4>
        <p>3/22</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{title[2]}<span onClick={()=>{setSmile(smile+1)}}>😀</span> {smile}</h4>
        <p>4/4</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{title[3]}<span onClick={()=>{setCrying(crying+1)}}>😢</span> {crying}</h4>
        <p>11/13</p>
      </div>
              {/* click here btn */}
              <button onClick={ ()=>{ 
          // ... means 괄호를 벗겨주세요
          let copy = [...title];
          copy[0] = 'Im clicked';
          setTitle(copy)
      } }> Change Button </button>
            {/* click here btn */}
            <button onClick={ ()=>{ 
          // ... means 괄호를 벗겨주세요
          let copy = [...title];
          copy.sort();
          setTitle(copy)
      } }> Sort Button </button>

      {/* <Modal/> */}

      {
        modal == true ? <Modal/> : null
      }

    </div>
    
  );
}
function Modal(){
  return(
    <div className="modal">
        <h4>title</h4>
        <p>date</p>
        <p>detail</p>
    </div>
  )
}

export default App;
