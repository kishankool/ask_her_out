import React from 'react'
import "./wrong.css"

export default function Wrong() {
  return (
    <div className='wrong'>
      <div className='upperText'>
        No...<br />
        Wrong Answer
      </div>
      <button className="button">Try Again :( </button>
    </div>
  )
}
