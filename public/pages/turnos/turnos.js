let Checked = null;

for (let CheckBox of document.getElementsByClassName('custom-control-input')){
	CheckBox.onclick = function(){
  	if(Checked!=null){
      Checked.checked = false;
      Checked = CheckBox;
    }
    Checked = CheckBox;
  }
}