import { useState } from 'react'
import React from 'react'

const Form = ({ searchResults }) => {
  const [input, setInput] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input) {
        alert("Please Enter Username or Email")
        return;
    }
    searchResults(input)
  }

  return (
    <div>
      <form action="" className='search-form' onSubmit={onSubmit}>
        <input type="text" placeholder='Enter username or email' className='search-bar' value={input} onChange={(e) => setInput(e.target.value)}  />
        <input type="submit" value="Search" className='submit-button' />
      </form>
    </div>
  )
}

export default Form
