// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

const accum = (s: string): string => {
	let myString = '';
	for (let i = 0; i < s.length; i++) {
		myString += s[i].toUpperCase();
		myString += s[i].toLowerCase().repeat(i);
		if (s.length - i > 1) {
			myString += '-';
		}
	}
	return myString;
};
