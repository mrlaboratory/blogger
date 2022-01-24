var relateddata = "";
var defaultimg = "https://i.imgur.com/62sv78x.png";
var relatedTitles=new Array();
var relatedUrls=new Array();
var thumburl=new Array();
var windowloaction =window.location.href;
var sln=0;
function getblogpost(cat,max){
    if(cat==""){var F_URL=windowloaction+"/feeds/posts/default?alt=json-in-script&max-results=100"}
else{var F_URL=windowloaction+"/feeds/posts/default/-/"+cat+"?alt=json-in-script&max-results=100"}
$.ajax({
    type: 'GET',
    url: F_URL,
    async: false,
    contentType: "application/json",
    dataType: 'jsonp',
    success: function (json) {
for(var i=0;i<json.feed.entry.length;i++){
var entry=json.feed.entry[i];
relatedTitles[sln]=entry.title.$t;
try{thumburl[sln]=entry.gform_foot.url}
catch(error){s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);
if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl[sln]=d}
else thumburl[sln]=defaultimg}
relatedUrls[sln]=json.feed.entry[i].link[1].href.replace("#comment-form","")
sln++;
}
printRelatedLabels_thumbs(max);
} }); }
function printRelatedLabels_thumbs(max){
var r=Math.floor((relatedTitles.length-1)*Math.random());
        var i=0;
        if(relatedTitles.length>0)
        relateddata+='<h2>'+relatedpoststitle+'</h2> <div class="relatedcontainer" style="clear: both;"/>';
        while(i<relatedTitles.length&&i<20&&i<max){
        relateddata+='<div class="relateddiv"> <a  href="'+relatedUrls[r]+'"><img class="related_img" src="'+thumburl[r]+'"/><div class="blurdiv"></div><div id="related-title"><h2>'+relatedTitles[r]+'</h2></div></a></div>';
        if(r<relatedTitles.length-1){r++}else{r=0}i++
        
    } relateddata+='</div>';
    $('.related-posts').append(relateddata);
    }
