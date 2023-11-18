import { useState } from "react";
import {
  RiAddLine,
  RiUser3Line,
  RiMenu3Fill,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
//componentes
import SideBar from "./components/shared/SideBar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";
function App() {
  // states
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  // functions
  // change visivility of menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <>
      <div className="bg-[#262837] w-full min-h-screen">
        <SideBar showMenu={showMenu} />
        <Car showOrder={showOrder} setShowOrder={setShowOrder} />
        {/* menu movil */}
        <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
          <button className="p-2">
            <RiUser3Line />
          </button>
          <button className="p-2">
            <RiAddLine />
          </button>
          <button onClick={toggleOrders} className="p-2">
            <RiPieChartLine />
          </button>
          <button onClick={toggleMenu} className="text-white  p-2 ">
            {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
        </nav>
        {/* el pb-20 es para que la ultima card no quede pegada a la barra del menu ⬇️ */}
        <main className="lg:pl-32 lg:pr-96 pb-20">
          <div className=" md:p-8 p-4 ">
            <Header />
            {/* Title content */}
            <div className="flex items-start justify-between mb-16  ">
              <h2 className="text-xl text-gray-300">Chose dishes</h2>
              <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
                <RiArrowDownSLine />
                Dine in
              </button>
            </div>
            {/* Content */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {/* CardSSSS */}
              <Card
                img="food-9.png"
                description="Chicken with salad "
                price="2.99"
                inventory="20"
              />

              <Card
                img="dish.png"
                description="Sweet chicken with tomato "
                price="3.79"
                inventory="20"
              />

              <Card
                img="food-9.png"
                description="Veggies and seasoned meat"
                price="3.29"
                inventory="20"
              />

              <Card
                img="food-6.png"
                description="Meat with Veggies and rice"
                price="2.29"
                inventory="20"
              />

              <Card
                img="food-7.png"
                description="Vegetables and fruits"
                price="2.49"
                inventory="20"
              />

              <Card
                img="food-6.png"
                description="Meat with Veggies and rice"
                price="2.29"
                inventory="20"
              />

              <Card
                img="food-7.png"
                description="Veggies and fruits"
                price="2.49"
                inventory="20"
              />

              <Card
                img="food-8.png"
                description="Speacy seasoned seafood nodles"
                price="2.29"
                inventory="20"
              />

              <Card
                img="food-9.png"
                description="Veggies and seasoned meat"
                price="3.29"
                inventory="20"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
