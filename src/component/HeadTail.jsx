import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HeadTailPage() {
  const navigage = useNavigate()
  const [selectedValue, setSelectedValue] = useState("");
  const [heads, setHeads] = useState([]);
  const [tails, setTails] = useState([]);
  const [lastHead, setLastHead] = useState(false);

  function handleSelect(event) {
    setSelectedValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (selectedValue === "") {
      alert("Please select a value");
      return;
    }

    if (selectedValue === "H") {
      setHeads([...heads, selectedValue]);
      setLastHead(true);
    } else if (selectedValue === "T") {
      if (lastHead) {
        setHeads(heads.slice(0, -1).concat(heads.slice(-1)[0] + selectedValue));
      } else {
        if (tails.length === 0) {
          setTails([selectedValue])
        } else {
          let lastTail = tails.slice(-1)[0]
          if (lastTail.length < 2) {
            setTails(tails.slice(0, -1).concat(lastTail + selectedValue));
          } else {
            setTails([...tails, selectedValue]);
          }
        }
      }
      setLastHead(false);
    }
    setSelectedValue("");
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <button onClick={()=>navigage("/")} 
              style={{color:"blue", padding:"12px", 
              backgroundColor:"red", cursor:"pointer"}}>Back</button>

      <form onSubmit={handleSubmit}>
        <select value={selectedValue} onChange={handleSelect} 
              style={{color:"blue", padding:"12px", 
              backgroundColor:"green", cursor:"pointer"}}>
          <option value="">select value</option>
          <option value="H">H</option>
          <option value="T">T</option>
        </select>
        <button type="submit" 
            style={{color:"blue", padding:"12px", 
            backgroundColor:"green", cursor:"pointer"}}>Submit</button>
      </form>

      <div>
        <div>
          {heads.map((head, index) => (
            <div key={index}>{head}</div>
          ))}
        </div>
        <div>
          {tails.map((tail, index) => (
            <div key={index}>{tail}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeadTailPage;
