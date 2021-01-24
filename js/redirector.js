/*
Redirector for mrlaboratory.info
Code Develop : Md Mijanur Rahaman;
FB: fb.com/mdmijanurrahaman.mr
Number : +8801854650673
*/var redirectPage ="https://www.mrlaboratory.info/p/redirect.html?url=";
var redirectRef = "?ref=https://www.mrlaboratory.info/";
var redirectLength = document.querySelectorAll(".redirect li a").length;
for(var i=0;i<redirectLength;i++){
var redirectselector = document.querySelectorAll(".redirect li a")[i];
var redirectURL = document.querySelectorAll(".redirect li a")[i].href;
modifyRedirectURL =redirectPage+redirectURL+redirectRef;
redirectselector.href=modifyRedirectURL;
redirectselector.target="_blank";
redirectselector.title="MR Laboratory to "+redirectURL;
}/*
Redirector for mrlaboratory.info
Code Develop : Md Mijanur Rahaman;
FB: fb.com/mdmijanurrahaman.mr
Number : +8801854650673
*/
// update 24.01.2021 by Md Mijanur Rahaman - admin@mrlaboratory.com