import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Slider from "./Slider";
import { useEffect, useState } from "react";
import './App.css'
import axios from "axios";

function App() {

  const [isenble, setIsenble] = useState(false)
  const [creative, setCreative] = useState([])
  const [colors, setColors] = useState([]);
  useEffect(() => {
    const fetchColors = async () => {
        try {
            const response = await axios.get('https://random-flat-colors.vercel.app/api/random?count=5');
            let arr = response.data.colors;
            setColors(arr);
        } catch (error) {
            console.error('Error fetching colors:', error);
        }
    };
    fetchColors();
}, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <div>
          <Dashboard isenble={isenble} setIsenble={setIsenble} creative={creative} colors={colors}/>
        </div>
        <div className="slider">
          {isenble && <Slider creative={creative} setCreative={setCreative} colors={colors}/>}
        </div>
      </div>
    </>
  );
}

export default App;
