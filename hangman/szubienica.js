var password = prompt("podaj hasło do ogdadnięcia", "sranie");
password = password.toUpperCase();

var length = password.length;

var password1 = "";

var wrong = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

for(i = 0; i <length; i++) {
    if(password.charAt(i)==" " )password1 = password1 + " ";
    else password1 = password1 + "-";
}


function write_passwd()
{
    document.getElementById("board").innerHTML = password1;
}

window.onload = start;

var letters = ["A", "Ą", "B", "C","Ć", "D", "E", "Ę", "F","G","H", "I","J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś", "T","U","V", "W", "X", "Y", "Z", "Ź", "Ż"];


function start()
{
    var divText ="";
    for(i = 0; i<=34; i++)
    {
        var element = "lett" + i;
        divText += '<div class = "letter" onclick="check('+i+')" id = "' + element + '" >' + letters[i] + '</div>';
        if((i + 1)%7 == 0 ) divText += '<div style="clear:both"></div>';
    }
    document.getElementById("alphabet").innerHTML = divText;

    write_passwd();
    

}

String.prototype.setChar = function(pos, char)
{
    if(pos > this.length - 1) return this.toString();
    else return this.substr(0, pos) + char + this.substr(pos + 1);
}



function check(nr)
{
    var guessed = false;
    for(i = 0; i < length; i++)
    {
        if(password.charAt(i) == letters[nr])
        {
            password1 = password1.setChar(i,letters[nr]);
            guessed = true;
        }
    }
    if(guessed == true)
    { 
        yes.play();
        var element = "lett" + nr;
        document.getElementById(element).style.backgroundColor = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";


        write_passwd(); 
    } else {
        no.play();
        var element = "lett" + nr;
        document.getElementById(element).style.backgroundColor = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";");
        wrong++;
        var picture = "img/s" + wrong + ".jpg";
        document.getElementById("hp").innerHTML = '<img src="'+picture+'" alt="">';
    }
    //win 
    if(password == password1) {
        document.getElementById("alphabet").innerHTML = "Gratulacje, odgadłeś hasło: " + password +
         '<br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?????';
    }
    //lose
    if(wrong >=9) {
        document.getElementById("alphabet").innerHTML = "Jesteś pierdoła, hasło to: " + password +
         '<br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?????';
    }
    }
   
