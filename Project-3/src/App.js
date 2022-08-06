import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";
function App() {
  const card = data.map((item) => {
    return (
      <Card
      coverImg={item.coverImg}
      location={item.location}
      url={item.url}
      title={item.title}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description} 
      />
    );
  });
  return (
    <div className="-App" >
      <Navbar navTitle="My Tourist Journey" />
      {card}
    </div>
  );
}

export default App;
