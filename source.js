window.onload = function() {
    let row;
    row = document.getElementById("row-2023");
    entry = document.getElementById("entry-2023");
    let newText, childs;
    for(let i = 0; i < 31; i++){
        newText = entry.cloneNode(true);
        childs = newText.childNodes;
        childs[1].childNodes[0].innerHTML = texts2023[i];
        childs[1].childNodes[0].href = "texts-2023/"+texts2023[i]+".pdf"
        row.appendChild(newText);
    }
    entry.parentNode.removeChild(entry);
    row = document.getElementById("row-2024");
    entry = document.getElementById("entry-2024");
    for(let i = 0; i < 31; i++){
        newText = entry.cloneNode(true);
        childs = newText.childNodes;
        childs[1].childNodes[0].innerHTML = texts2024[i];
        childs[1].childNodes[0].href = "texts-2024/"+texts2024[i]+".pdf"
        row.appendChild(newText);
    }
    entry.parentNode.removeChild(entry);
};
