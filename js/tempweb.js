var demoTemplateU = document.getElementById("demoTemplate");
var downloadTemplateU = document.getElementById("downloadTemplate");
var tempcheck1MR = document.getElementById("tempcheckLink1");
var tempcheck2MR = document.getElementById("tempcheckLink2");
var tempcheck3MR = document.getElementById("tempcheckLink3");
var tempcheck4MR = document.getElementById("tempcheckLink4");
var tempcheck5MR = document.getElementById("tempcheckLink5");
var tempcheck6MR = document.getElementById("tempcheckLink6");
var tempcheck7MR = document.getElementById("tempcheckLink7");
var altersafePreview = document.querySelector(".safePreview");
var altersafeDownload = document.querySelector(".safeDownload");

if(temDownLink.indexOf("https://drive.google.com/file/d/") != -1){
var drivelink = temDownLink.split('/');
    var drivelinkk = drivelink[5];	
    var temDownLink = "https://drive.google.com/uc?id="+drivelinkk+"&export=download";
}else{
var temDownLink =temDownLink;
}

var modifytempDemoLink ="https://template.mrlaboratory.info/p/template.html?u="+tempDemoLink;
var modifytemDownLink ="https://template.mrlaboratory.info/p/download.html?t="+convertToHex(temDownLink);
demoTemplateU.href=modifytempDemoLink;
downloadTemplateU.href=modifytemDownLink;
var tempMobileF ="https://search.google.com/test/mobile-friendly?url="+tempDemoLink;
var tempspeed ="https://developers.google.com/speed/pagespeed/insights/?url="+tempDemoLink;
var tempMResponsive ="https://www.responsinator.com/?url="+tempDemoLink;
var tempGTest ="https://search.google.com/test/rich-results?url="+tempDemoLink;
var tempAllResponsive ="https://responsivedesignchecker.com/checker.php?url="+tempDemoLink;
var tempmockup6 ="https://mockup.mrlaboratory.info/?url="+tempDemoLink;
var tempschema7 ="https://validator.schema.org/#url="+tempDemoLink;
tempcheck1MR.href=tempMobileF;
tempcheck2MR.href=tempspeed;
tempcheck3MR.href=tempMResponsive;
tempcheck4MR.href=tempGTest;
tempcheck5MR.href=tempAllResponsive;
tempcheck6MR.href=tempmockup6;
tempcheck7MR.href=tempschema7;
altersafePreview.href=tempDemoLink;
altersafeDownload.href=temDownLink;

function convertToHex(str) {
    var hex = '';
    for(var i=0;i<str.length;i++) {
        hex += ''+str.charCodeAt(i).toString(16);
    }
    hex="https://www.mrlaboratory.info/p/download.html?6d726c61626f7261746f7279"+hex;
    return hex;
}


