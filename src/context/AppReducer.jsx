
export default (state, action) => {

    switch(action.type) { /* el type es la accion que se va a realizar */
        case 'ADD_TRANSACTION':
            return {transactions: [...state.transactions, action.payload]}

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload) //BUSCA EL ID QUE SE VA A ELIMINAR
            } 

            
        default:
            return state

            
    }

    

}