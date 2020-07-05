function linkOver(id, id2){
    document.getElementById(id).classList.add("desative");
    document.getElementById(id2).classList.add("desative");
}

function linkOut(id, id2){
    document.getElementById(id).classList.remove("desative");
    document.getElementById(id2).classList.remove("desative");
}

function cardOver(id){
    document.getElementById(id).classList.add('ative');
}

function cardOut(id){
    document.getElementById(id).classList.remove('ative');
}
