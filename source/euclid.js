'use strict';

function euclid(...values) {
	if (values.length <= 1) {
		return values[0];
	}

	let nod = function (val1, val2) {
		if (!(val1 && val2)) {
			return val1 || val2;
		}

		val1 = Math.abs(val1);
		val2 = Math.abs(val2);

		while (val1 !== val2) {
			if (val1 > val2) {
				val1 = val1 - val2;
			} else {
				val2 = val2 - val1;
			}
		}
		return val1;
	}

	for (let i = 0; i < values.length - 1; i++) {
		values[i + 1] = nod(values[i], values[i + 1]);
	}
	return values[values.length - 1];
}