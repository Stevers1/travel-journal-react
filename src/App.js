import TopBar from "./components/TopBar"
import "./App.css"
import Card from "./components/Card"
import cardData from "./components/cardData"
import CardBackward from "./components/CardBackward"


function App() {

  const card = cardData.map(data => {
    if(data.id % 2 == 0){
      return<CardBackward item={data}/>
    }else return <Card item={data}/>
  })

  return(
    <div className="container">
      <TopBar/>
      {card}
    </div>
  )
}

export default App