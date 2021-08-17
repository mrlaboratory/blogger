function getQueryVariable(variable)
{

       var query = window.location.search.substring(1);

       var vars = query.split("&");

       for (var i=0;i<vars.length;i++) {

               var pair = vars[i].split("=");

               if(pair[0] == variable){return pair[1];}

       }

       return(false);
}
var time = 40;

var page = getQueryVariable("t");

if(page.indexOf("https://drive.google.com/file/d/") != -1){
var drivelink = page.split('/');
    var drivelinkk = drivelink[5];	
    var finaldrivelinkk = "https://drive.google.com/uc?id="+drivelinkk+"&export=download";
}else{
var finaldrivelinkk =page;
}

    
function countDown(){

time--;

gett("timecount").innerHTML = time;

if(time == 0){

   window.location = finaldrivelinkk;
}

}

function gett(id){

if(document.getElementById) return document.getElementById(id);

if(document.all) return document.all.id;

if(document.layers) return document.layers.id;

if(window.opera) return window.opera.id;

}

function init(){

if(gett('timecount')){

setInterval(countDown, 1000);

gett("timecount").innerHTML = time;

}

else{

setTimeout(init, 50);

}

}

document.onload = init();

document.querySelector(".btnwsafe").href=finaldrivelinkk;
