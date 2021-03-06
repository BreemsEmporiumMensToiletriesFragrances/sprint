import m from 'mori';

export function emptyAssocIn(obj, keys, value) {
	if (!m.count(keys)) { return value; }
	return m.assocIn(obj, keys, value);
}

export function merge(a, b) {
    var res = {};
    for (var k in a) { if (a.hasOwnProperty(k)) { res[k] = a[k]; } }
    for (var k in b) { if (b.hasOwnProperty(k)) { res[k] = b[k]; } }
    return res;
}

export function isObjOrMap(o) {
	try {
		return o !== null && (m.isMap(o) || isObj(i));
	}
	catch (e) { return false; }
}

export function isObj(o) {
	try {
		return o !== null && Object.getPrototypeOf(o) === Object.prototype;
	}
	catch (e) { return false; }
}
