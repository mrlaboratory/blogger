var relateddata = "";
var defaultimg = "https://i.imgur.com/62sv78x.png";
var relatedTitles=new Array();
var relatedUrls=new Array();
var thumburl=new Array();
var windowloaction ="window.location.href";
var sln=0;
function getblogpost(e,t){if(""==e)var l=windowloaction+"/feeds/posts/default?alt=json-in-script&max-results=100";else l=windowloaction+"/feeds/posts/default/-/"+e+"?alt=json-in-script&max-results=100";$.ajax({type:"GET",url:l,async:!1,contentType:"application/json",dataType:"jsonp",success:function(e){for(var l=0;l<e.feed.entry.length;l++){var r=e.feed.entry[l];relatedTitles[sln]=r.title.$t;try{thumburl[sln]=r.gform_foot.url}catch(e){s=r.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d?thumburl[sln]=d:thumburl[sln]=defaultimg}relatedUrls[sln]=e.feed.entry[l].link[1].href.replace("#comment-form",""),sln++}printRelatedLabels_thumbs(t)}})}function printRelatedLabels_thumbs(e){var t=Math.floor((relatedTitles.length-1)*Math.random()),l=0;for(relatedTitles.length>0&&(relateddata+="<h2>"+relatedpoststitle+'</h2> <div class="relatedcontainer" style="clear: both;"/>');l<relatedTitles.length&&l<20&&l<e;)relateddata+='<div class="relateddiv"> <a  href="'+relatedUrls[t]+'"><img class="related_img" src="'+thumburl[t]+'"/><div class="blurdiv"></div><div id="related-title"><h2>'+relatedTitles[t]+"</h2></div></a></div>",t<relatedTitles.length-1?t++:t=0,l++;relateddata+="</div>",$(".related-posts").append(relateddata)}
