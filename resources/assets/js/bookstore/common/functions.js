export const implementSorting=(array_of_fields,sortState) =>{
window.alert('hihi');
return function sorting(a,b){
		if (a.cat_id < b.cat_id)
			return 1;
		if (a.cat_id > b.cat_id)
			return -1;
		return 0;
	} 

	


}