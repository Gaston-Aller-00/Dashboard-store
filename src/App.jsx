import {RiMenu3Fill} from "react-icons/ri";
//componentes
import SideBar from "./components/shared/SideBar";
function App() {
  return (
    <>
      <div className="bg-[#262837] w-full min-h-screen">
        <SideBar />
        {/* menu movil */}
        <nav className="bg-[#1F1D2B] lg:hidden">
          <button><RiMenu3Fill/></button>
        </nav>
      </div>
    </>
  );
}

export default App;
