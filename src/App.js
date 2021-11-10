import Item from './components/Item';
import Card from './components/Card';

const App = () => {
  let n = 0;

  return(
    <>
    <h1>Minha primeira aplicação com React!</h1>
    <ul>
      <Item>Item {++n}</Item>
      <Item>Item {++n}</Item>
      <Item>Item {++n}</Item>
    </ul>
    <Card />
    </>
  )
}

export default App;