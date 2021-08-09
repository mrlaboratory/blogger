
var templateSNumber;
var weburl = window.location.href;
if(weburl.indexOf("https://mrlaboratory") != -1){
    templateSNumber = weburl.match(/[0-9]+/);
    tempdownf("https://template.mrlaboratory.info/search?q=template"+templateSNumber);
}else if(typeof(template) !== 'undefined'){
    tempdownf("https://template.mrlaboratory.info/search?q=template"+template);
}else{
    templateSNumber = "template.mrlaboratory.info" ; 
    tempdownf("https://template.mrlaboratory.info");
}

function tempdownf(sr){
    callText='<img src="https://i.imgur.com/O1N4z1b.png" alt=""><a href="'+sr+'" target="_blank">Download This Template</a>';
var downloadmrtemp = document.createElement("div");
document.body.appendChild(downloadmrtemp);
downloadmrtemp.classList.add('downloadT');
downloadmrtemp.innerHTML=callText;
downloadmrtemp.style.cssText='opacity: 100%; width: 250px; height: 100px; position: fixed;left: 10px;bottom: 10px;background-color: #8994ff;border-radius: 8px;opacity: 100%;display: block;z-index:9999999999;';
$(".downloadT a").css({"opacity":"100%","display": "block","padding": "5px","margin": "0px","text-decoration": "none","background": "#fff700","border-radius": "8px","color": "black","font-weight": "bold","position": "absolute","bottom": "50px","animation":"tempanimamr 5s infinite","cursor": "pointer"});
$(".downloadT img").css({"height": "100%","width": "auto","position": "absolute","right": "0px"});
document.styleSheets[0].insertRule('\ @keyframes tempanimamr {\ 0%{bottom: 20px;}\ 20%{bottom: 70px}\ 50%{bottom: 50px}\ 100%{bottom: 50px}\ }'
);
}
