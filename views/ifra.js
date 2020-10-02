
function getservices(){
    window.open("services.html" , target="main")
}
function getinfo(){
    window.open("info.html" , target="main")
}
function gethome(){
    window.open("home.html" , target="main")
}
function getcontacts(){
    window.open("contacts.html" , target="main")
}
function getabout(){
    window.open("about.html" , target="main")
}
function alvis(){
    al.style.visibility="hidden";
   
}
var a =0;

function gofront(){
    a +=1;
    //alert(a);

    if(a>1 && a<13){al.style.visibility="visible";}else{al.style.visibility="hidden";}
    if(a==1){box1.src="a1.gif";box2.innerHTML="ඉඩමක් තෝරා ගැනීම";}
    if(a==2){box1.src="a2.gif";box2.innerHTML="බිම සකස් කිරීම";}
    if(a==3){box1.src="a3.gif";box2.innerHTML="කුරුඳු තවානක්";}
    if(a==4){box1.src="a4.gif";box2.innerHTML="පැළ සිටවීම";}
    if(a==5){box1.src="a5.gif";box2.innerHTML="කුරුඳු පැළ";}
    if(a==6){box1.src="a6.gif";box2.innerHTML="කුරුඳු පැළ රැක බලා ගැනීම";}
    if(a==7){box1.src="a7.gif";box2.innerHTML="වැඩුණු කුරුඳු ගස්";}
    if(a==8){box1.src="a8.gif";box2.innerHTML="කුරුඳු කැපීම";}
    if(a==9){box1.src="a9.gif";box2.innerHTML="කුරුඳු තැලීම";}
    if(a==10){box1.src="a10.gif";box2.innerHTML="කුරුඳු කූරු සකස් කිරීම";}
    if(a==11){box1.src="a11.gif";box2.innerHTML="කුරුඳු මිටි";}
    if(a==12){box1.src="a12.gif";box2.innerHTML="කුරුඳු නිෂ්පාදන";}
    if(a==13){box1.src="a13.gif";box2.innerHTML="කුරුඳු තෙල්";a=0;}
       
}

function goback(){
    a -=1;
    //alert(a);
    if(a>1 && a<13){al.style.visibility="visible";}else{al.style.visibility="hidden";}
    if(a==1){box1.src="a1.gif";box2.innerHTML="ඉඩමක් තෝරා ගැනීම";}
    if(a==2){box1.src="a2.gif";box2.innerHTML="බිම සකස් කිරීම";}
    if(a==3){box1.src="a3.gif";box2.innerHTML="කුරුඳු තවානක්";}
    if(a==4){box1.src="a4.gif";box2.innerHTML="පැළ සිටවීම";}
    if(a==5){box1.src="a5.gif";box2.innerHTML="කුරුඳු පැළ";}
    if(a==6){box1.src="a6.gif";box2.innerHTML="කුරුඳු පැළ රැක බලා ගැනීම";}
    if(a==7){box1.src="a7.gif";box2.innerHTML="වැඩුණු කුරුඳු ගස්";}
    if(a==8){box1.src="a8.gif";box2.innerHTML="කුරුඳු කැපීම";}
    if(a==9){box1.src="a9.gif";box2.innerHTML="කුරුඳු තැලීම";}
    if(a==10){box1.src="a10.gif";box2.innerHTML="කුරුඳු කූරු සකස් කිරීම";}
    if(a==11){box1.src="a11.gif";box2.innerHTML="කුරුඳු මිටි";}
    if(a==12){box1.src="a12.gif";box2.innerHTML="කුරුඳු නිෂ්පාදන";}
    if(a==13){box1.src="a13.gif";box2.innerHTML="කුරුඳු තෙල්";}
    
}
