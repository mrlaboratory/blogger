// Disable Copy Text
if (typeof document.onselectstart!=&quot;undefined&quot; ) { document.onselectstart=new Function (&quot;return false&quot; );
} else { document.onmousedown=new Function (&quot;return false&quot; ); document.onmouseup=new Function (&quot;return true&quot; );
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

// for google translator
(function() { var add = document.createElement('script'); var crs = document.createAttribute('crossorigin'); crs.value = 'anonymous'; add.setAttributeNode(crs); add.defer = true; add.src = 'https://mrlaboratory.github.io/blogger/js/translateweb.js'; var sc = document.getElementsByTagName('head')[0]; sc.parentNode.insertBefore(add, sc); })();
function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:'en',includedLanguages:'bn,en,id,vi,zh-CN,th,ru,ms,ko,ja,it,hi,fr,es,de,ar,tr,jw,sn,vi-VN	',layout:google.translate.TranslateElement.InlineLayout.SIMPLE},'google_translate_element')}$(".hover").mouseleave(function (){$(this).removeClass("hover")});

