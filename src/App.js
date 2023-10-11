import './App.css';
import sampledata from './sample-data.json';
import Header from './components/Header/Header';
import InputSection from './components/InputSection/InputSection';
import Cards from './components/Cards/Cards';
import Layout from './components/Layout/Layout';

function App() {
  console.log(sampledata);
  return (
    
    <div className="App">
      <Header/>
      <InputSection/>
      
      <Layout data={sampledata}/>
    </div>
    
  );
}
export default App;
