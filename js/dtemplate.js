var weburl=window.location.href;
var templateSNumber;
if(weburl.indexOf("https://mrlaboratory") != -1){
    templateSNumber = weburl.match(/[0-9]+/);
    tempdownf("https://template.mrlaboratory.info/search?q=template"+templateSNumber);
}else if(typeof(template) !== 'undefined'){
    var mrtemps = window.localStorage.getItem("tempserial")?window.localStorage.getItem("tempserial"):"";
if(!mrtemps==0){
   var templwor ="num4";
}else{
   
}
}else{

if(!mrtemps==0){
 
}else{
    
}
}
function tempdownf(sr){
    callText='<img src="https://i.imgur.com/O1N4z1b.png" style="width:85px;height:100px;position:absolute;right:0px;" alt="Download blogger template"><a href="'+sr+'"  style="opacity:100%;display: block;padding: 5px;margin: 0px;text-decoration: none;background: #fff700;border-radius: 8px;color: black;font-weight: bold;position: absolute;bottom: 50px;animation:tempanimamr 5s infinite;cursor: pointer;left:3px;" target="_blank">Download This Template</a>';
var downloadmrtemp = document.createElement("div");
document.body.appendChild(downloadmrtemp);
downloadmrtemp.classList.add('downloadT');
downloadmrtemp.innerHTML=callText;
downloadmrtemp.style.cssText='opacity: 100%; width: 250px; height: 100px; position: fixed;left: 10px;bottom: 10px;background-color: #8994ff;border-radius: 8px;opacity: 100%;display: block;z-index:9999999999;';
document.styleSheets[0].insertRule('\ @keyframes tempanimamr {\ 0%{bottom: 20px;}\ 20%{bottom: 70px}\ 50%{bottom: 50px}\ 100%{bottom: 50px}\ }'
);
}

/**
 * Developer Credit Script
 * 
 * Developed by: Md Mijanur Rahaman
 * LinkedIn: https://www.linkedin.com/in/mijanurrahaman
 * GitHub: https://github.com/mrlaboratory
 * Website: https://mrlaboratory.github.io
 * Business: Bismillah IT House, Shantirhat, Patiya, Chittagong
 * Business Website: https://bismillahithouse.com/
 * WhatsApp: https://wa.me/8801854650673
 * Contact: mrlaboratory23@gmail.com | +8801854650673
 * 
 * Description: This script displays a colorful developer credit in the console.
 */

(function() {
    const creditMessage = `\n%c🚀 Developed by: %cMd Mijanur Rahaman\n%c🔗 LinkedIn: %chttps://www.linkedin.com/in/mijanurrahaman\n%c💻 GitHub: %chttps://github.com/mrlaboratory\n%c🌐 Website: %chttps://mrlaboratory.github.io\n%c🏢 Business: %cBismillah IT House, Shantirhat, Patiya, Chittagong\n%c🛍 Business Website: %chttps://bismillahithouse.com/\n%c📞 WhatsApp: %chttps://wa.me/8801854650673\n%c✉️ Contact: %cmrlaboratory23@gmail.com | +8801854650673\n`;
    
    console.log(creditMessage, 
        'color: yellow; font-size: 22px; font-weight: bold;', 'color: cyan; font-size: 22px; font-weight: bold;', 
        'color: orange; font-size: 18px; font-weight: bold;', 'color: white; font-size: 18px;',
        'color: green; font-size: 18px; font-weight: bold;', 'color: white; font-size: 18px;',
        'color: blue; font-size: 18px; font-weight: bold;', 'color: white; font-size: 18px;',
        'color: purple; font-size: 18px; font-weight: bold;', 'color: white; font-size: 18px;',
        'color: red; font-size: 18px; font-weight: bold;', 'color: white; font-size: 18px;',
        'color: brown; font-size: 18px; font-weight: bold;', 'color: white; font-size: 18px;',
        'color: pink; font-size: 18px; font-weight: bold;', 'color: white; font-size: 18px;');
})();
