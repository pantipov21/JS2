let quantity = Number(process.argv[2]);
if (isNaN(quantity)==true)
	console.log("в параметре не число");
	
if (quantity <=0)
	console.log("количество должно быть строго больше нуля");
	
if (quantity > 0){
	console.log("поиск %d простых чисел...", quantity);

	let count = 0;
	
	let t = 2;
	console.log("найденные простые числа:");
	while (count < quantity){
		let flag = true;
		let i = 2;
		while (i < t && flag === true){
			if (t % i === 0) 
				flag = false;
			i++;
		}
		if (flag == true){
			count++;
			console.log("%d", t);
		}
		t++;
	}
}
