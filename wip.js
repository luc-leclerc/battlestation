
var request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
		debugger;
		console.log(this.responseText);
    }
}
request.open("GET", "https://raw.githubusercontent.com/luc-leclerc/battlestation/main/sample_script.js", false);
request.send();