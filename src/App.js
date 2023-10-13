import "./App.css";
import sampledata from "./sample-data.json";
import Header from "./components/Header/Header";
import InputSection from "./components/InputSection/InputSection";
import Layout from "./components/Layout/Layout";
import React, { useState } from "react";
import LocationInfoDialog from "./components/LocationInfoDialog/LocationInfoDialog";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [expenses, setExpenses] = useState(sampledata); //new


  // Function to add a new expense
  const addExpense = (newExpense) => {
    setExpenses((prev)=>{
      return( [...prev,{...newExpense, id: uuidv4()}]  )
    });
  };


  
  
  console.log(expenses);

  return (
    <div className="App">
      <Header />
      <LocationInfoDialog/>
      <InputSection onAddExpense={addExpense} />
      <Layout expenses={expenses} setExpenses={setExpenses}/>
    </div>
  );
    }

export default App;
