import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import data from "./data";

function App() {
  const card = data.map((item) => {
    return (
      <Cards
        key={item.id}
        coverImg={item.coverImg}
        rating={item.stats.rating}
        reviewCounter={item.stats.reviewCounter}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });
  return (
    <div className="-App" >
      <Navbar />
      <Main />
      <section className="card-list">{card}</section>
    </div>
  );
}

export default App;
