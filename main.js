var barOne=0;var barTwo=50;var barThree=75;function moveF(val){bar=document.getElementById('barOption').value;var elem=document.getElementById(bar);var hdnVal=document.getElementById('hdn'+bar);var prgLabel=document.getElementById('label'+bar);var width=hdnVal.value;width=width*1+val;width=width>=100?100:width;width=width<=0?0:width;elem.style.width=width+'%';var colCode='#ff6600';if(width>=100){colCode='#ff6600'}else{switch(bar){case 'bar1':colCode='#4CAF50'
break;case 'bar2':colCode='#3f72a8'
break;case 'bar3':colCode='#f1c40f'
break;default:colCode='#ff6600'}}
elem.style.backgroundColor=colCode;prgLabel.innerHTML=width*1+'%';hdnVal.value=width}

