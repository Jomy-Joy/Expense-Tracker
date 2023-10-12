import "./App.css";
import sampledata from "./sample-data.json";
import Header from "./components/Header/Header";
import InputSection from "./components/InputSection/InputSection";
import Layout from "./components/Layout/Layout";
import TotalExpenseCard from "./components/TotalExpenseCard/TotalExpenseCard";
import GreatestAmount from "./components/GreatestAmount/GreatestAmount";
import React, { useState } from "react";
import LocationInfoDialog from "./components/LocationInfoDialog/LocationInfoDialog";

function App() {
  const [expenses, setExpenses] = useState(sampledata); //new
  // Function to add a new expense
  

  // Function to add a new expense
  const addExpense = (newExpense) => {
    setExpenses((prev)=>{
      return( [...prev,newExpense]  )
    });
  };


  
  console.log(sampledata);

  return (
    <div className="App">
      <Header />
      <LocationInfoDialog/>
      <InputSection onAddExpense={addExpense} />
      
      <Layout data={expenses} />
    </div>
  );
    }

export default App;
