export function generateKey(){
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let text = '';

	for (let i = 0; i < 8; i++)
	text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;	
}

//all the finance category arrays (top contributors, etc) are structured the same way
//so i can sort them with the same function
export function sortByTotal(arr){
	return arr.sort((a, b) => {
		return a['@attributes'].total - b['@attributes'].total;
	});
}