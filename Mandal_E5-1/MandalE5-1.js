let rugAmount, rugSize;

function result() {
    rugSize = document.getElementById('length').value * document.getElementById('width').value; //rug total size
    document.getElementById('rugSize').innerHTML = rugSize + " m<sup>2</sup>"; //rug size display
    rugAmount = rugSize / 2; //rug total amount
    document.getElementById('rugAmount').innerHTML = rugAmount; //rug amount dispaly
}
