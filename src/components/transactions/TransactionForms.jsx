import { useState } from "react"
import { useGlobalState } from "../../context/GlobalState"

function TransactionForms() {
  const {addTransaction} = useGlobalState();
  const [description,setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => { 
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount 
    })

    setDescription('');
    setAmount(0);

  }
 
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="enter a description"   onChange={(e) => setDescription(e.target.value) }
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full" value={description}
         /> 
        <input type="number" placeholder="00.00" step={0.01}  onChange={(e) => setAmount(e.target.value)}
         className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full" value={amount}
        />
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">add transaction</button>
      </form>
    </div>
  )
}

export default TransactionForms