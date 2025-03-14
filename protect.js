//Disable Selection
function disableText(e){
  return false;
}
function reEnable(){
  return true;
}
//For browser IE4+
document.onselectstart = new Function ("return false");
//For browser NS6
if (window.sidebar){
  document.onmousedown = disableText;
  document.onclick = reEnable;
}
window.onkeydown = function(e){
  if(e.keyCode == 116){
    return true;
  }
  else{
   return false;
  }
};

