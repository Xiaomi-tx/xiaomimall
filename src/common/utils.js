export function debounce(fnc, delay) {
	let timer = null;
	return function(...args) {
		if(timer) clearInterval(timer);
		timer = setTimeout(() => {
			fnc.apply(this, args)
		}, delay);
	}
}
