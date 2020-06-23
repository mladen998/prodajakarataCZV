function toggleDiv(a){
    var e=document.getElementById(a);
    if(e.style.display == "block"){
        e.style.display="none"
    } else {
        e.style.display="block"
    }
    return true;
  }