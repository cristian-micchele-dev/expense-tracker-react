import {VictoryPie, VictoryLabel} from 'victory'
import { useGlobalState } from '../context/GlobalState'

function ExpenseChart() {
  const {transactions} = useGlobalState()

  const totalIncome = transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)

  const totalExpense = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0) * -1

  let totalExpensePercentage = 0
  let totalIncomePercentage = 0

  if (totalIncome > 0) {
    totalExpensePercentage = Math.round((totalExpense / totalIncome) * 100)
    totalIncomePercentage = 100 - totalExpensePercentage
  }

  // Si no hay ingresos, no mostrar el gráfico
  if (totalIncome === 0) {
    return (
      <div className="text-center text-gray-400">
        Agrega ingresos para ver el gráfico.
      </div>
    )
  }

  return (
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        {x: 'Expense', y: totalExpensePercentage},
        {x: 'Incomes', y: totalIncomePercentage}
      ]}
      animate={{duration: 1000}}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={<VictoryLabel angle={45} style={{fill: "white"}} />}
    />
  )
}

export default ExpenseChart