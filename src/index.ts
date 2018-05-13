let reHeadTail = /-?([A-Z])([^A-Z])/g;
let reLongHead = /-?([A-Z]+)/g;
let reDash = /^-/;

let cache = Object.create(null);

export function kebabCase(str: any, useCache?: boolean): string {
	str = String(str);

	let value: string;

	return (
		(useCache && cache[str]) ||
		((value = (str as string)
			.replace(reHeadTail, (match, head, tail) => '-' + head.toLowerCase() + tail)
			.replace(reLongHead, (match, head) => '-' + head.toLowerCase())
			.replace(reDash, '')),
		useCache ? (cache[str] = value) : value)
	);
}
