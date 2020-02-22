import React from 'react';
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

  function countChanged(value) {
    console.log("Changed!!!"+value)
    setTotalCount(totalCount + 1)
  }

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
      <Header menuItems={items}/>
      {/*<Content bc={buttonClicked}/>*/}
      Total:{totalCount}
      <hr/>
      <State countChange={countChanged}/>
      <hr/>
      <State countChange={countChanged}/>
      <Footer menuItems={items} menu2Items={items2} text={text}/>

    </div>
  );
}

export default App;
