import React from "react"
import './App.css'

export default function Main() {

  const [item, setItem] = React.useState()
  const [amount, setAmount] = React.useState()
  const [lists, setLists] = React.useState([])

  const addList = () => {
    if (!item || !amount) {
      alert("กรอกให้ครบก่อนจ้าาา")
      return
    }

    const newList = {item, amount}
    setLists([...lists, newList])
  }

  return (
    <>
      <div className="main"></div>
      <h1>Simple Expense Tracker</h1>
      <div className="Boxbox">
        <input
          type="text"
          placeholder="Enter item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
        <button className="button" onClick={addList}>Add</button>
      </div>
        <div className="section-list">
          {lists.map((inlist, index) => (
            <div className="item">
              <div>{inlist.item}</div>
              <div>{inlist.amount}</div>
            </div>
          ))}
        </div>
    </>
  )
}