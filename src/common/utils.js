export function debounce(fnc, delay) {
	let timer = null;
	return function(...args) {
		if(timer) clearInterval(timer);
		timer = setTimeout(() => {
			fnc.apply(this, args)
		}, delay);
	}
}


export function sort(arr) {
	let newArr = [...arr];
	for (let i = 0; i < newArr.length; i++) {
		for (let j = i; j < newArr.length; j++) {
			if (newArr[i] >= newArr[j + 1]) {
				let t = newArr[i];
				newArr[i] = newArr[j + 1];
				newArr[j + 1] = t;
			}
		}
	}

	return newArr;
}

