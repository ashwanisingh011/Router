// rrd import
import { Outlet, useLoaderData } from "react-router-dom";
// helper functions
import { fetchData } from "../helpers";

// assets import
import wave from "../assets/wave.svg";
// components import
import Nav from "../Components/Nav";

// loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

function Main() {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
     <Nav userName={userName}/>
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="Wave image "/>
    </div>
  );
}

export default Main;
