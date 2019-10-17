import React from "react";

import * as parkDate from "./data/skateboard-parks.json";
import Map from './components/Map';


const App = () => {
  return (
    <Map data={parkDate.features} />
  )

}

export default App;