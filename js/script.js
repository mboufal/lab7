function init(){
	var but = document.getElementById('entrybutton');
	var output = document.getElementById('textoutput');
	var input = document.getElementById('entryinput');
		function myEventFunction(){
			alert('Magda Boufal: ' + input.value);
			output.innerHTML = input.value;
		}
		but.addEventListener('click', init);
}

window.addEventListener('load', init);