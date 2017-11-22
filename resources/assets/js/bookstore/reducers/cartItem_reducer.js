const initial_state = [];

export const cartItem = (state= initial_state, action) =>{
	switch(action.type) {
		case 'ADD_CART' :
			return [{ id:action.id,
					book:action.book,
					qty:action.qty},...state
					]
		
		case 'REMOVE_CART' :
			{
				return state.filter(x=> x.id != action.id)
			}
		
		
		default:
			return state
	}
}