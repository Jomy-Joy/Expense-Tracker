import './App.css';
import sampledata from './sample-data.json';
import Header from './components/Header/Header';
import InputSection from './components/InputSection/InputSection';
import Cards from './components/Cards/Cards';
import Layout from './components/Layout/Layout';
import TotalExpenseCard from './components/TotalExpenseCard/TotalExpenseCard';
import GreatestAmount from './components/GreatestAmount/GreatestAmount';

function App() {
//total expense
      let totalexpense = 0;
      sampledata.forEach(value => {
        totalexpense += parseFloat(value.amount.replace("$",""));
      });
      //greatest amount
      const result = sampledata.reduce((acc, { date, amount }) => {
        const parsedAmount = parseFloat(amount.replace("$", ""));
        if (!acc[date]) acc[date] = 0;
        acc[date] += parsedAmount;
        return acc;
      }, {});
    
      const [dateWithMaxAmount, maxAmount] = Object.entries(result).reduce(
        ([maxDate, maxAmount], [date, total]) =>
          total > maxAmount ? [date, total] : [maxDate, maxAmount],
        ["", 0]
      );
  console.log(sampledata);
  return (
    
    <div className="App">
      <Header/>
      <InputSection/>
      <TotalExpenseCard totalExpense={totalexpense}/>
      <GreatestAmount greatestDate={dateWithMaxAmount} greatestExpense={maxAmount} />
      <Layout data={sampledata}/>
   
    </div>

  );
}
export default App;
