(function setupBattleStation() {
    var zIndexBase = 900000;
    var zIndexHeader = zIndexBase + 1;
    var mainDivId = "lucM";
    var headerDivId = "lucH";

    var mainDiv = document.getElementById(mainDivId) || document.createElement('div');
    mainDiv.innerHTML = '';
    mainDiv.id = mainDivId;
    mainDiv.style = null;
    mainDiv.style.width = "300px";
    mainDiv.style.height = "300px";
    mainDiv.style.position = "absolute";
    mainDiv.style["z-index"] = zIndexBase;
    mainDiv.style["background-color"] = "#f1f1f1";
    mainDiv.style.border = "1px solid #d3d3d3";
    mainDiv.style["text-align"] = "center";

    var headerDiv = document.getElementById(headerDivId) || document.createElement('div');
    headerDiv.innerHTML = '';
    headerDiv.id = headerDivId;
    headerDiv.text = "Click here to move";
    headerDiv.style = null;
    headerDiv.style.padding = "10px";
    headerDiv.style.cursor = "move";
    headerDiv.style["z-index"] = zIndexHeader;
    headerDiv.style["background-color"] = "#2196F3";
    headerDiv.style.color = "#fff";

    var placeholderP = document.createElement('p');
    placeholderP.innerText = "Placeholder";

    mainDiv.appendChild(headerDiv);
    mainDiv.appendChild(placeholderP);
    document.body.appendChild(mainDiv);

    dragElement(mainDiv, headerDivId);

	/** Inspired from: https://www.w3schools.com/howto/howto_js_draggable.asp*/
    function dragElement(rootElement, headerName) {
        var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
        document.getElementById(headerName).onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            rootElement.style.top = (rootElement.offsetTop - pos2) + "px";
            rootElement.style.left = (rootElement.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
})();
