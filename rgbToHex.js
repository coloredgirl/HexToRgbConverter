/*Write a function that converts HEX to RGB. 
Then Make that function auto-dect the formats so that if you enter HEX color format,
it returns RGB and if you enter RGB color format it returns HEX.*/

const convertToHex=(color) =>{
	let hex = color.toString (16)
	return hex.length ==1 ? "0" + hex : hex;
}

const rgbToHex =(r,g,b)=> {
	return "#" + convertToHex(r) + convertToHex(g) + convertToHex(b);
}
alert (rgbToHex(1,12,200));

//converting Hex to rgb

const convertToRgb= (hex)=> {
	let output = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return output? { 
		r: parseInt(output[1], 16),
    	g: parseInt(output[2], 16),
    	b: parseInt(output[3], 16)
	} :null;
}
alert(convertToRgb("0047ff").g);