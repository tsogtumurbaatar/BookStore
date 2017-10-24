export const todos = (state= [], action) =>{
	switch(action.type) {
		case 'ADD_TODO' :
			return [{ id:action.id,
					book_name:action.book_name},...state
					]
		
		case 'REMOVE_TODO' :
			{
				return state.filter(x=> x.id != action.id)
			}
		
		case 'UPDATE_TODO' :
			{
				return state.map((s) => {
					if (s.id !== action.id) {
						return s;
					}
					return { "book_name" : action.book_name,
							 "id" : s.id};
				});
			}	

		case 'TOGGLE_TODO' :
			{
				return state.map((s) => {
					if (s.id !== action.id) {
						return s;
					}
					return { "book_name" : s.book_name,
							 "id" : s.id};
				});
			}
		
	 	case 'FETCH_REQUEST' :
      		{	

      			window.alert('I am going to fetch data from DB');
      				return state;
      		}

    	case 'FETCH_SUCCESS' : 
      			return  action.payload;

		default:
			return state
	}
}