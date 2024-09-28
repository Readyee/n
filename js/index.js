var usernumber = 0;
var message1 = "message 1";
var message2 = "message 2";
var message3 = "message 3";
var message4 = "message 4";
function ok() {
    if (usernumber == 0){
        document.getElementById("img").src = "img/strucher.png";
        message1 = "the body is the backbone of a website you need it and info inputing";
        message3 = "Body";
        message4 = "head";
        message2 = "the head is like the head of a body you can make a tittle and you can also make css and javascript work together <br> it is very inporant";
        usernumber = 1;
    }else if (usernumber == 1){
        document.getElementById("img").src = "img/strucher2.png";
        message3 = "the document";
        message1 = "he document  is way to tell the pc/laptop see this as a html file and to treat it like one";
        message4 = "the html file";
        message2 = "the html file is the file that say this will go and then that";
        usernumber = 0
    }
    document.getElementById('replace-me1').innerText = message1;
    document.getElementById('replace-me2').innerText = message2;
    document.getElementById('replace-me3').innerText = message3;
    document.getElementById('replace-me4').innerText = message4;
   
}