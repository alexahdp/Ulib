/**
 * Allow change css-rules for style elements.
 * Example: $('#my_style').style('.article', 'color', 'blue'); - change 'color' property for selector '.article' in style-element with id='my_style'
 */

$.fn.style = function(selector, property, value){
	if( $(this).prop('tagName') !== 'STYLE') return;
	var style = this.get(0);
	$.each(style.sheet.cssRules, function(i, li){
		if(li.selectorText === selector){
			li.style[property] = value;
			return false;
		}
	});
};
