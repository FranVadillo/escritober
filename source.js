window.onload = function() {
    let row;
    row = document.getElementById("row");
    entry = document.getElementById("entry");
    let newText, childs;
    const d = new Date();
    for(let i = 0; i < 31; i++){
        newText = entry.cloneNode(true);
        childs = newText.childNodes;
        childs[1].childNodes[0].innerHTML = texts[i];
        childs[1].childNodes[0].href = "texts/"+texts[i]+".pdf"
        row.appendChild(newText);
    }
    entry.parentNode.removeChild(entry);
};
