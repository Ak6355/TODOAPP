import React from "react";
import Header from "./components/Header";
import Todoitem from "./components/Todoitem";
import Button from "./components/Button";
import CounterComponent from "./components/CounterComponent";

import './style.css';

const App = () =>{
  return(
    <div className="todo-container"> 
      <Header />
      <CounterComponent />
      <Todoitem text="8.30AM Wake up"/>
      <Todoitem text ="9.30AM - 11.00AM React"/>
      <Todoitem text=" 1.30PM-3.30PM DSA" />
      <Todoitem text =" 4.00PM-5.00PM Novel" />
      <Todoitem text =" 9.00PM-10.30PM Youtube Tutotrials"/>
      <Todoitem text =" 11.00PM-11.30PM GROUP DISCUSSION" />
      <Todoitem text ="12.00AM SLEEP" />

      <Button />
      
    </div>
  );
};

export default App;
