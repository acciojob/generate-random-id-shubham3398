function makeid(l) {
  // write your code here
	const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

	let ans = "";

	for(let i = 0; i < l; i++){
		let index = Math.floor((Math.random() * characters.length) % characters.length);
		ans += characters.charAt(index);	
	}

	return ans;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l)); 
