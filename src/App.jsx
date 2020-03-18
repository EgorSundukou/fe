import React , {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import State from "./State";

const items = [
  {
    text: 'Home',
    link: 'home-page'
  },
  {
    text: 'Products',
    link: 'prod-page'
  },
  {
    text: 'Services',
    link: 'serv-page'
  },
  {
    text: 'Prices',
    link: 'price-page',
    size: 1
  }
];

const items2 = [
  {
    text: 'Home2',
    link: 'home-page'
  },
  {
    text: 'Products2',
    link: 'prod-page'
  },
  {
    text: 'Services2',
    link: 'serv-page'
  },
];
const text = "Some text"

function App() {
  const [totalCount, setTotalCount] = useState(0)

  function buttonClicked(name) {
    console.log("Cliked!!!"+name)
  }

  function countChangedD() {
    console.log("ChangedTc!!!")

    setTotalCount(totalCount - 1)
  }
    function countChangedU() {
        console.log("ChangedT!!!")

        setTotalCount(totalCount + 1)
    }


  return (
    <div className="App" className="container">
      <Header items={items} />
      <Content />
      <Footer items={items} items2={items2} text={text} />
      <Header items={items}/>
      {/*<Content bc={buttonClicked}/>*/}
      Total:{totalCount}
      <hr/>
      <State countChangeD={countChangedD} countChangeU={countChangedU} />
      <hr/>
      <State countChangeD={countChangedD} countChangeU={countChangedU} />
      <Footer items={items} items2={items2} text={text}/>

    </div>
  );
}

export default App;
