import { useGlobalState } from "../context/GlobalState"




function Balance()  {
    const { transactions } = useGlobalState();  /* usamos el hook */

    const amounts = transactions.map(transaction => transaction.amount); 

    // EL REDUCE lo que hace es sumar todos los montos
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); 
  return (
    <div className="flex justify-between ">
    
        <h3>Balance</h3>
        <h1 className="text-2xl font-bold ">${total}</h1>
        
    </div>
  )}

export default Balance