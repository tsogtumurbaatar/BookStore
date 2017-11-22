let nextTodoId = 0

export const addCart = (book, qty) => {
	return {
		type:'ADD_CART',
		id: nextTodoId++,
		book: book,
		qty:qty
	}
}

export const removeCart = (id) => {
	return {
		type:'REMOVE_CART',
		id: id
	}
}
