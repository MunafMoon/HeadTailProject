import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigator = useNavigate()
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <button onClick={() => navigator("/")}
      style={{color:"blue", padding:"12px", 
      backgroundColor:"red", cursor:"pointer"}}>Back</button>
      <div>Paragraph for About</div>
    </div>
  )
}
