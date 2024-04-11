import Title from "./component/title";
import Header from "./component/header";
import Cardone from "./component/cardone";
import Cardtwo from "./component/cardTwo";
import Cardthree from "./component/cardThree";
import Cardfour from "./component/cardFour";

function App() {
  return (
    <div>
        <div>
          <Header/>
        </div>

        <div>
          <Title/>
        </div>

        <div className="grid grid-cols-4 gap-4 p-4">
          <Cardone/>
          <Cardtwo/>
          <Cardthree/>
          <Cardfour/>

        </div>
       

    </div>
  );
}

export default App;
