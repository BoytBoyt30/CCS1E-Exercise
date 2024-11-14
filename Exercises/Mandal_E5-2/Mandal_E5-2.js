//change specific texts in the text box
function result() {
    let area = document.getElementById('textArea').value;
    let findText = document.getElementById('find').value;
    let replaceText = document.getElementById('replace').value;
    
    area = area.replace(findText, replaceText);
    document.getElementById('textArea').value = area;
}
//change the lettercase
function caseText() {
    let area = document.getElementById('textArea').value;
    //determine case wether to switch upper or lower
    if (area === area.toUpperCase()) {
        document.getElementById('textArea').value = area.toLowerCase();
    } else {
        document.getElementById('textArea').value = area.toUpperCase();
    }
}
//determine the length of the text by alert
function lengthText() {
    let area = document.getElementById('textArea').value;
    let lengthVar = area.length;
    alert('Text length is: ' + lengthVar);
}
//determine if a specific word is in the text by alert
function includeText() {
    let area = document.getElementById('textArea').value;
    let findText = document.getElementById('find').value;
    let includeVar = area.includes(findText);
    alert(includeVar);
}
//finding the position of a word using alert
function searchText() {
    let area = document.getElementById('textArea').value;
    let findText = document.getElementById('find').value;
    let searchVar = area.search(findText);
    //display else functions if text is not found
    if (searchVar !== -1) {
        alert('Your word Position is in: ' + searchVar);
    } else {
        alert('Text not found.');
    }
}
//clear the input boxes
function clearBox() {
    document.getElementById('find').value = "";
    document.getElementById('replace').value = "";
}