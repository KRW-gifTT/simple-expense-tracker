import React from "react"
import './App.css'
import Lists from "./components/Lists"

export default function Main() {

  const [item, setItem] = React.useState()
  const [amount, setAmount] = React.useState()
  const [lists, setLists] = React.useState([])

  const addList = () => {
    if (!item || !amount) {
      alert("กรอกให้ครบก่อนจ้าาา")
      return
    }

    const newList = {item, amount, id:Date.now()}
    setLists([...lists, newList])
  }

  const deleteItem = (id) => {
    const newList = lists.filter((inlist) => inlist.id != id)
    setLists(newList)
  }

  const totalAmount = () => {
    let total = 0
    for(const item of lists) {
      total = total + item.amount
    }
    return total
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
            <Lists key={index} item={inlist.item} amount={inlist.amount} onClick={() => deleteItem(inlist.id)}></Lists>
          ))}
        </div>
        <div>{totalAmount()}</div>
    </>
  )
}