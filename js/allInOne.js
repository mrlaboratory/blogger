/*
Redirector for mrlaboratory.info
Code Develop : Md Mijanur Rahaman;
FB: fb.com/mdmijanurrahaman.mr
Number : +8801854650673
*/
var redirectPage ="https://www.mrlaboratory.info/p/redirect.html?url=";
var redirectRef = "?ref=https://www.mrlaboratory.info/";
var redirectLength = document.querySelectorAll(".redirect").length;
for(var i=0;i<redirectLength;i++){
var redirectselector = document.querySelectorAll(".redirect")[i];
var redirectURL = document.querySelectorAll(".redirect")[i].href;
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

// Disable Copy Text
if (typeof document.onselectstart!="undefined") { document.onselectstart=new Function ("return false" );
} else { document.onmousedown=new Function ("return false"); document.onmouseup=new Function ("return true");
}


// theme color
var r = $(":root");
$(document).ready(function(){
  $(".themecolor input").change(function(){
  var inpcolormr = $(".themecolor input").val();
   localStorage.setItem("themecoolor", inpcolormr);
   $(":root").get(0).style.setProperty("--bgcolor", inpcolormr);
  });
});
var inpcolormr =window.localStorage.getItem("themecoolor")?window.localStorage.getItem("themecoolor"):"";
if(!inpcolormr==0){
    $(":root").get(0).style.setProperty("--bgcolor", inpcolormr);
    $(".themecolor input").val(inpcolormr);
}else{
       $(".themecolor input").val("#00ccff");

}

// blockquote customize and copier
var g = $(".post blockquote");
for (var i = 0, len = g.length; i < len; i++)
{
 (function(index){
 $(".post blockquote:eq("+i+")").after().on("click",function(){
    var texttt = $(".post-outer blockquote:eq("+index+")").text();
    navigator.clipboard.writeText(texttt);
    $(".post blockquote:eq("+index+")").after("Copied");
        })
 
    })(i);
}

/* for google translator
(function() { var add = document.createElement('script'); var crs = document.createAttribute('crossorigin'); crs.value = 'anonymous'; add.setAttributeNode(crs); add.defer = true; add.src = 'https://mrlaboratory.github.io/blogger/js/translateweb.js'; var sc = document.getElementsByTagName('head')[0]; sc.parentNode.insertBefore(add, sc); })();
function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:'en',includedLanguages:'bn,en,id,vi,zh-CN,th,ru,ms,ko,ja,it,hi,fr,es,de,ar,tr,jw,sn,vi-VN	',layout:google.translate.TranslateElement.InlineLayout.SIMPLE},'google_translate_element')}$(".hover").mouseleave(function (){$(this).removeClass("hover")});
*/

// images upload plugn
var co = 0; (function($){$.fn.zzImgUr=function(x){var d=$.extend({cliendID:"",mode:"file",format:"o,",css:{width:"100%"},max:10,loading:"./source/images/loading.gif",lang:{noID:"\u1ee8ng d\u1ee5ng ch\u01b0a \u0111\u0103ng k\u00fd",addImage:"Ch\u1ecdn \u1ea3nh",addURL:"Th\u00eam URL",reset:"L\u00e0m m\u1edbi",upload:"T\u1ea3i l\u00ean",choose:"\u0110\u00e3 ch\u1ecdn",waitConnect:"\u0110ang k\u1ebft n\u1ed1i...",waitUpload:"\u0110ang t\u1ea3i l\u00ean...",noteURL:"Nh\u1eadp URL \u1ea3nh v\u00e0o \u0111\u00e2y:",errContact:'<a href="http://devs.forumvi.com/t131-jq-plugin-jquery-plugin-zzimgur#831" rel="nofollow" target="_blank">Nh\u1ea5n v\u00e0o \u0111\u00e2y</a> \u0111\u1ec3 b\u00e1o l\u1ed7i.',errURL:"URL kh\u00f4ng truy c\u1eadp \u0111\u01b0\u1ee3c.",errSize:"URL l\u1ed7i ho\u1eb7c k\u00edch th\u01b0\u1edbc qu\u00e1 nh\u1ecf.",errRepeat:"URL kh\u00f4ng h\u1ee3p l\u1ec7 ho\u1eb7c \u0111\u00e3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng."},success:function(d,b){},input:function(d){d.click(function(){this.select()})},remove:function(d,b){}},x);return this.each(function(x,b){function e(a){return'<img class="imgur_Zzbv-icon'+a+'" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" height="16" width="16" alt="'+a+'" />'}function y(){2<z&&$(".imgur_Zzbv-li",b).data("height",34*z).hover(function(){var a=$(this);if($(".imgur_Zzbv-progress",a).length)return!1;a.height(a.data("height"))},function(){$(this).height(68)})}function J(a,c){$(c).css({"background-image":"url("+d.loading+")","background-position":"0 0"});var b=$(c).closest(".imgur_Zzbv-li");$.ajax({url:"https://api.imgur.com/3/image/"+a,headers:{Authorization:"Client-ID "+d.cliendID},type:"DELETE",success:function(a){var b=[];$.each($(".imgur_Zzbv-input",$(c).parent()),function(a,c){b.push(c.value)});d.remove(b[0],b);$(c).closest(".imgur_Zzbv-li").remove();A();"0"==B.text()&&k.click()},error:function(a){C(b,a)}})}function K(a){var c=new FileReader,l=new Image;c.readAsDataURL(a);co=0;c.onload=function(c){l.src=c.target.result;l.onerror=function(){return!1};l.onload=function(){var c=this.src;if(!$(".imgur_Zzbv-image img[src='"+c+"']",b).length){var g=this.width,l=this.height,f=a.name,m=Math.ceil(a.size/1024)+"Kb";h.append('<div class="imgur_Zzbv-li"><div class="imgur_Zzbv-image"><img src="'+c+'" /></div><div class="imgur_Zzbv-info"><a class="imgur_Zzbv-remove" href="#">Delete</a><div class="imgur_Zzbv-tip">'+e("Complete")+" "+d.lang.choose+'</div><div class="imgur_Zzbv-wrap-progress"><div class="imgur_Zzbv-progress"></div></div><div>'+f+"</div><small><strong>"+g+"x"+l+"</strong> <em>("+m+")</em></small></div></div>");y();$(".imgur_Zzbv-progress",b).length>s&&$(".imgur_Zzbv-li:gt("+(s-1)+")",b).remove();t.text($(".imgur_Zzbv-progress",b).length)}w()}}}function D(a,c,l){var g=$(".imgur_Zzbv-li",b).eq(a);$(".imgur_Zzbv-tip",g).html('<img src="'+d.loading+'" alt="loading..." /> <span>'+d.lang.waitConnect+"</span>");$.ajax({url:"https://api.imgur.com/3/image",xhr:function(){var a=new window.XMLHttpRequest;a.upload.addEventListener("progress",function(a){a.lengthComputable&&(a=a.loaded/a.total*100+"%",$(".imgur_Zzbv-tip span",g).text(d.lang.waitUpload),$(".imgur_Zzbv-progress",g).animate({width:a}))},!1);return a},method:"POST",headers:{Authorization:"Client-ID "+d.cliendID},data:{image:c,type:l},success:function(a){$(".imgur_Zzbv-info",g).html(L(a,d.format.split(",")));d.input($(".imgur_Zzbv-input",g));E();g.addClass("imgur_Zzbv-success");setTimeout(function(){g.removeClass("imgur_Zzbv-success")},300);n.html(e("Complete"))},error:function(a){n.html(e("Error"));C(g,a);E()}})}function E(){A();0===$(".imgur_Zzbv-progress",b).length&&k.fadeIn()}function A(){B.text($(".imgur_Zzbv-delete",b).length)}function C(a,c){$(".imgur_Zzbv-info",a).html('<div class=".imgur_Zzbv-dl"><div class=".imgur_Zzbv-dt"></div><div class=".imgur_Zzbv-dd" style="margin-left: 0!important; color: red">'+c.statusText+'</div></div><div class=".imgur_Zzbv-dl"><div class=".imgur_Zzbv-dt"></div><div class=".imgur_Zzbv-dd" style="margin-left: 0!important">'+d.lang.errContact+"</div></div>")}function M(a,c){var b=a.data.link,d="IMG",e="URL";/o|s|b|t|m|l|h/.test(c)&&(d="img",e="url");return null===c||""===c?b:"o"===c?"["+d+"]"+b+"[/"+d+"]":"["+e+"="+b+"]["+d+"]http://i.imgur.com/"+a.data.id+c+"."+a.data.type.split("/")[1]+"[/"+d+"][/"+e+"]"}function N(a){var c="";switch(a){case"o":c="Original";break;case"s":c="Small Square";break;case"b":c="Big Square";break;case"t":c="Small Thumb";break;case"m":c="Medium Thumb";break;case"l":c="Large Thumb";break;case"h":c="Huge Thumb";break;case"c":c="Custom";break;default:c="Link"}return c}function L(a,c){var b="",e=[],f="",h="";$.each(c,function(c,d){var m=d.match(/\{(o|s|b|t|m|l|h)\}/gi);if(null===m)f=d,h=M(a,d);else{var k=d;$.each(m,function(c,b){f=/o|s|b|t|m|l|h/.exec(b)[0];k=k.replace(b,"http://i.imgur.com/"+a.data.id+f+"."+a.data.type.split("/")[1])});f="c";h=k}e.push(h);co++;m='<a class="imgur_Zzbv-delete" data-delete="'+a.data.deletehash+'" href="#" target="_blank">Delete</a>  <button onclick="copyimglink('+ co +')" class="zzcopyLink">Copy</button>';0!==c&&(m="");b+=m+'<div class="imgur_Zzbv-dl"><div class="imgur_Zzbv-dt">'+N(f)+':</div><div class="imgur_Zzbv-dd"><input type="text" class="imgur_Zzbv-input" value="'+h+'" readonly="readonly" /></div></div>'});d.success(e[0],e);return b}function w(){p.add(u).fadeIn()}function F(){$(".imgur_Zzbv-choose",b).replaceWith($(".imgur_Zzbv-choose",b).clone())}function G(){220>v.width()?v.addClass("imgur_Zzbv-mini"):v.removeClass("imgur_Zzbv-mini")}var q='multiple="multiple"',s=d.max;1===s&&(q="");$(this,b).html('<div class="imgur_Zzbv"> <div class="imgur_Zzbv-control"><a href="https://www.mrlaboratory.info" rel="dofollow" class="mrocredt" target="_blank">  &copy;   MR Laboratory</a><div class="imgur_Zzbv-mode">'+e("Image")+'</div> <div class="imgur_Zzbv-status"> <img src="'+d.loading+'" alt="loading..." /> </div> <div class="imgur_Zzbv-upload-computer imgur_Zzbv-add"> '+e("Select")+' <div class="imgur_Zzbv-textSelect">'+d.lang.addImage+'</div> <input type="file" class="imgur_Zzbv-choose" '+q+' /> </div> <div class="imgur_Zzbv-upload-URL imgur_Zzbv-add"> <div class="imgur_Zzbv-iconSelect"></div> <div class="imgur_Zzbv-textSelect">'+d.lang.addURL+'</div> </div> <div class="imgur_Zzbv-length"> <span class="imgur_Zzbv-complete">0</span> / <span class="imgur_Zzbv-selected">0</span> </div> <div class="imgur_Zzbv-button"> <div class="imgur_Zzbv-reset">'+e("Reset")+d.lang.reset+'</div> <div class="imgur_Zzbv-upload">'+e("Upload")+d.lang.upload+'</div> </div> </div> <div class="imgur_Zzbv-preview"> <div class="imgur_Zzbv-list"></div> </div> </div>');var v=$(".imgur_Zzbv",b),q=$(".imgur_Zzbv-control",b),f=$(".imgur_Zzbv-mode",b),n=$(".imgur_Zzbv-status",b),H=$(".imgur_Zzbv-upload-computer",b),r=$(".imgur_Zzbv-upload-URL",b),I=$(".imgur_Zzbv-add",b),u=$(".imgur_Zzbv-length",b),t=$(".imgur_Zzbv-selected",b),B=$(".imgur_Zzbv-complete",b),k=$(".imgur_Zzbv-reset",b),p=$(".imgur_Zzbv-upload",b),h=$(".imgur_Zzbv-list",b),z=d.format.split(",").length;v.css(d.css);G();$(window).resize(function(){G()});if(!/[a-z0-9]{15}/.test(d.cliendID))return q.html('<div class="imgur_Zzbv-status" style="display: block;"> '+e("Error")+' </div><div style="text-align: center;">'+d.lang.noID+': <span style="color: red;">cliendID</span> '+e("Devs")+" </a></div>"),!1;"url"==d.mode&&(f.addClass("imgur_Zzbv-zzURL"),I.toggle());q.on("change",".imgur_Zzbv-choose",function(a){if((a=this.files)&&a[0])for(var c=0;c<a.length;c++)K(a[c],b,d)});p.click(function(){if(f.hasClass("imgur_Zzbv-zzURL")){$(".imgur_Zzbv-imageURL:not('.imgur_Zzbv-ok')",b).closest(".imgur_Zzbv-li").remove();t.text($(".imgur_Zzbv-imageURL",b).length);if(h.is(":empty"))return u.add(p).fadeOut(),!1;$(".imgur_Zzbv-imageURL",b).each(function(a){D(a,this.value,"URL")})}else $(".imgur_Zzbv-image img",b).each(function(a){D(a,this.src.replace(/data:image\/.+;base64\,/,""),"base64")});p.add(f).add(I).add(".imgur_Zzbv-remove",b).fadeOut();n.fadeIn()});k.click(function(){f.hasClass("imgur_Zzbv-zzURL")?(r.show(),H.hide()):(r.hide(),H.show(),F());h.empty();$("span",u).text(0);n.html('<img src="'+d.loading+'" alt="loading..." />');k.add(p).add(n).add(u).fadeOut();f.fadeIn()});h.on("click",".imgur_Zzbv-delete",function(a){a.preventDefault();J($(this).data("delete"),this)});h.on("click",".imgur_Zzbv-remove",function(a){a.preventDefault();$(this).closest(".imgur_Zzbv-li").remove();a=$(".imgur_Zzbv-progress",b).length;t.text(a);"0"==a&&k.click();f.hasClass("imgur_Zzbv-zzURL")?10>$(".imgur_Zzbv-imageURL",b).length&&r.fadeIn():F()});r.click(function(){h.prepend('<div class="imgur_Zzbv-li"><div class="imgur_Zzbv-image"></div><div class="imgur_Zzbv-info"><a class="imgur_Zzbv-remove" href="#">Delete</a><div class="imgur_Zzbv-tip">'+d.lang.noteURL+'</div><div class="imgur_Zzbv-wrap-progress"><div class="imgur_Zzbv-progress"></div></div><input class="imgur_Zzbv-imageURL" type="text" /></div></div>');y();w();t.text($(".imgur_Zzbv-progress",b).length);$(".imgur_Zzbv-imageURL",b).length>=s&&r.hide()});h.on("input",".imgur_Zzbv-imageURL",function(){var a=this.value,c=$(this),f=c.prev().prev();if(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([[^\\s]\/]*)*\/?.+\.(jpg|png|gif|jpeg|bmp|apng|tiff|xcf)$/i.test(a)&&!$(".imgur_Zzbv-image img[src='"+a+"']",b).length){c.parent().prev().html('<img src="'+a+'" />');f.html(e("Complete")+" "+a.match(/\w+\.(jpg|png|gif|jpeg|bmp|apng|tiff|xcf)/i)[0]);c.addClass("imgur_Zzbv-ok");var g=c.parent().prev().find("img");g.error(function(){f.html('<span class="imgur_Zzbv-errorURL">'+e("Error")+" "+d.lang.errURL+"</span>");c.removeClass("imgur_Zzbv-ok")});g.load(function(){1==g.width()&&1==g.height()&&(f.html('<span class="imgur_Zzbv-errorURL">'+e("Error")+" "+d.lang.errSize+"</span>"),c.removeClass("imgur_Zzbv-ok"))});w(b)}else null===a||""===a?(f.html('<span class="imgur_Zzbv-errorURL">'+e("Error")+" "+d.lang.noteURL+"</span>"),c.removeClass("imgur_Zzbv-ok"),c.parent().prev().empty()):(f.html('<span class="imgur_Zzbv-errorURL">'+e("Error")+" "+d.lang.errRepeat+"</span>"),c.removeClass("imgur_Zzbv-ok"))});f.click(function(){f.toggleClass("imgur_Zzbv-zzURL").children("img").toggleClass("imgur_Zzbv-iconUrl");k.click()})})}}(jQuery));

// modify by Md MIjanur Rahaman
// admin@mrlaboratory.com

// images upload js
 $(".upload").zzImgUr({
        cliendID: "3fbefe7bfa42da9",
        // old cliendID 74f5c858f447bb9

        mode: "file",
        format: "",
        css: {
            width: "100%"
        },
        max: 10,
        loading: "http://i.imgur.com/m3NXDa6.gif",
        lang: {
            noID: "Unregistered application",
          addImage: "Choose photo",
          addURL: "Add the URL",
          reset: "Refresh",
          upload: "Upload",
          choose: "Selected",
          waitConnect: "Connecting...",
          waitUpload: "Uploading in progress...",
          noteURL: "Enter the image URL here:",
          errContact: '<a href="https://www.mrlaboratory.info/2021/06/add-qr-scanner-code-script-to-your.html" rel="nofollow" target="_blank">Click here</a> to report an error.',
          errURL: "The URL is not accessible.",
          errSize: "Error URL or size is too small.",
          errRepeat: "The URL is invalid or already in use."
        },
        success: function (firstVal, arrVal) {
            console.log(firstVal);
            console.log(arrVal);
        },
        input: function (arrInput) {
            console.log(arrInput);
            arrInput.click(function () {
                this.select();
                console.log(this);
            });
        },
        remove: function (firstVal, arrVal) {
            console.log(firstVal);
            console.log(arrVal);
        }
    });

function copyimglink(num){
    num--
    var copyUrl = $(".imgur_Zzbv-input:eq("+num+")").val();
     navigator.clipboard.writeText(copyUrl);
     $(".zzcopyLink:eq("+num+")").text("Copied");
     $(".imgur_Zzbv-input:eq("+num+")").css("color","#00a26d")
}

// safe link with mrlaboratory
   var safelinkPage ="https://www.mrlaboratory.info/p/safelink.html?u=";
var safelinkLength = $(".safelink").length;
for(var i=0;i<safelinkLength;i++){
var safelinkselector = $(".safelink")[i];
var safelinkURL = $(".safelink")[i].href;
modifysafelinkURL =safelinkPage+safelinkURL;
safelinkselector.href=modifysafelinkURL;
safelinkselector.target="_blank";
safelinkselector.title="MR Laboratory to "+safelinkURL;
}

// copy post link
function copypostLink(){
var texttt = $(".linkboxbtn input").val()
navigator.clipboard.writeText(texttt);

}

