$(".comments-label").on("click",function(){$("div#binhluan").slideToggle();$(".fbcomments").slideUp();});$(".fbcomments-label").on("click",function(){$(".fbcomments").slideToggle();$("div#binhluan").slideUp();});$(".email-popup").on("click",function(){$(".btn-popup").fadeIn();}); $(".btn-popup-close").on("click",function(){$(".btn-popup").fadeOut();})
// dark mode
document.getElementById("darkmode").addEventListener("click",function(){var e=document.body.classList.toggle("night");localStorage.setItem("darkmode-banner",e)}),jQuery(document).ready(function(e){e(function(){e("darkmode").click(function(e){e.preventDefault()})})});
// grid mode
document.getElementById("gridmode").addEventListener("click",function(){var e=document.body.classList.toggle("list");localStorage.setItem("gridmode-banner",e)}),jQuery(document).ready(function(e){e(function(){e("gridmode").click(function(e){e.preventDefault()})})});
$(document).ready(function(){$(".apps").each(function(){var d=$(this);$(".drop",d).click(function(n){return n.preventDefault(),$div=$(".gb_fa",d),$div.slideToggle(),$(".gb_fa").not($div).hide(),!1})}),$("html,.drops,.dropsss,.dropss,.tt_tg,.dropdown-link,.dropdwn,.Label button,.bg_Se input").click(function(){$(".gb_fa").hide()}),$(".au").each(function(){var d=$(this);$(".dropss",d).click(function(n){return n.preventDefault(),$div=$(".au-menu",d),$div.slideToggle(),$(".au-menu").not($div).hide(),!1})}),$("html,.drop,.drops,.dropsss,.tt_tg,.dropdown-link,.dropdwn,.Label button,.bg_Se input").click(function(){$(".au-menu").hide()}),$(".tb").each(function(){var d=$(this);$(".dropsss",d).click(function(n){return n.preventDefault(),$div=$(".tb-menu",d),$div.slideToggle(),$(".tb-menu").not($div).hide(),!1})
$('.tb-menu,.au-menu').click(function(e){e.stopPropagation()})}),$("html,.drop,.drops,.dropss,.tt_tg,.dropdown-link,.dropdwn,.Label button,.bg_Se input").click(function(){$(".tb-menu").hide()
$('.recent-comments ul').empty()
$('#numcomments').attr('value','0')
$('#allcomments').attr('value','')
$('.loading').removeClass('loader').removeClass('load')}),$("html").click(function(){$(".tg-menu").hide()}),$(".tg").each(function(){var d=$(this);$(".tt_tg",d).click(function(n){return n.preventDefault(),$div=$(".tg-menu",d),$div.slideToggle(),$(".tg-menu").not($div).hide(),!1})}),$("html,.drop,.drops,.dropss,.dropsss,.dropdown-link,.dropdwn,.Label button,.bg_Se input").click(function(){$(".tg-menu").hide()}),$(".dropdown").each(function(){var d=$(this);$(".dropdown-link",d).click(function(n){return n.preventDefault(),$div=$(".dropdown-container",d),$div.slideToggle(),$(".dropdown-container").not($div).hide(),!1})}),$("html,.drop,.drops,.dropss,.dropsss,.tt_tg,.dropdwn,.Label button,.bg_Se input").click(function(){$(".dropdown-container").hide()}),$(".dd").each(function(){var d=$(this);$(".drops",d).click(function(n){return n.preventDefault(),$div=$(".dd-menu",d),$div.slideToggle(),$(".dd-menu").not($div).hide(),!1})}),$("html,.drop,.dropss,.dropsss,.tt_tg,.dropdown-link,.dropdwn,.Label button,.bg_Se input").click(function(){$(".dd-menu").hide()}),$(".dds").each(function(){var d=$(this);$(".dropdwn",d).click(function(n){return n.preventDefault(),$div=$(".dds-menu",d),$div.slideToggle(),$(".dds-menu").not($div).hide(),!1})}),$("html,.drop,.drops,.dropss,.dropsss,.tt_tg,.dropdown-link,.Label button,.bg_Se input").click(function(){$(".dds-menu").hide()})
$('#backer .open').click(function(e){e.stopPropagation()
$('.overlay').removeClass('hidden')
$('#backer .list-label-widget-content').removeClass('invisible')
$('#backer button.open').addClass('hidden')
$('#backer button.close').removeClass('hidden')})
$('#backer .list-label-widget-content').click(function(e){e.stopPropagation()})
$('html,.drop,.drops,.dropss,.dropsss,.tt_tg,.dropdown-link,.dropdwn,.bg_Se input').click(function(){$('#backer .list-label-widget-content').addClass('invisible')
$('#backer button.open').removeClass('hidden')
$('#backer button.close,.overlay').addClass('hidden')})
$('#backer .dark').click(function(){$('#backer .darkmode ul').slideToggle()
$('#backer .darkmode .expand_more').toggle()
$('#backer .darkmode .expand_less').toggle()})
$('#backer .grid').click(function(){$('#backer .gridmode ul').slideToggle()
$('#backer .gridmode .expand_more').toggle()
$('#backer .gridmode .expand_less').toggle()})
$('#backer .blog').click(function(){$('#backer .blog ul').slideToggle()
$('#backer .blog .expand_more').toggle()
$('#backer .blog .expand_less').toggle()})
$('#backer .facebook').click(function(){$('#backer .facebook ul').slideToggle()
$('#backer .facebook .expand_more').toggle()
$('#backer .facebook .expand_less').toggle()})
$('#backer .maytinh').click(function(){$('#backer .maytinh ul').slideToggle()
$('#backer .maytinh .expand_more').toggle()
$('#backer .maytinh .expand_less').toggle()})
$('#backer .psdcmnd').click(function(){$('#backer .psdcmnd ul').slideToggle()
$('#backer .psdcmnd .expand_more').toggle()
$('#backer .psdcmnd .expand_less').toggle()})
$('#backer .download').click(function(){$('#backer .download ul').slideToggle()
$('#backer .download .expand_more').toggle()
$('#backer .download .expand_less').toggle()})
$('.bg_Se input').click(function(e){e.stopPropagation()
$('.gb_Se').addClass('gb_af')})
$('html,.drop,.drops,.dropss,.dropsss,.tt_tg,.dropdown-link,.dropdwn,.Label button').click(function(){$('.gb_Se').removeClass('gb_af')})
$('#backer .open').click(function(e){e.stopPropagation()
$('#backer').removeClass('fixed').addClass('default')})
var lastScroll=0;jQuery(document).ready(function($){$(window).scroll(function(){var scroll=$(window).scrollTop();if(scroll>lastScroll){$('#backer').removeClass('default').addClass('fixed')
$('#backer .list-label-widget-content').addClass('invisible')
$('#backer button.open').removeClass('hidden')
$('.gb_Se').removeClass('gb_af')
$('#backer button.close,.overlay,.dong-menu').addClass('hidden')}else if(scroll<lastScroll){$('#backer').addClass('default').removeClass('fixed')}
lastScroll=scroll})})
$('.bg_Se input').click(function(e){e.stopPropagation()
$('.gb_Se').addClass('gb_af')})
$('html,.drop,.drops,.dropss,.dropsss,.tt_tg,.dropdown-link,.dropdwn,.Label button').click(function(){$('.gb_Se').removeClass('gb_af')})
var lastScroll=0;jQuery(document).ready(function($){$(window).scroll(function(){var scroll=$(window).scrollTop();if(scroll>lastScroll){$('#backer').removeClass('default').addClass('fixed')
$('#backer .list-label-widget-content').addClass('invisible')
$('#backer button.open').removeClass('hidden')
$('.gb_Se').removeClass('gb_af')
$('#backer button.close,.overlay').addClass('hidden')}else if(scroll<lastScroll){$('#backer').addClass('default').removeClass('fixed')}
lastScroll=scroll})})
$('.bg_Se input').on('keyup',function(e){var textinput=$(this).val()
if(textinput){$.ajax({type:'GET',url:'/feeds/posts/summary',data:{'max-results':10,'alt':'json','q':textinput},dataType:'jsonp',success:function(data){$('.results,.clear-text').removeClass('hidden')
$('.results').empty()
if(data.feed.entry){for(var i=0;i<data.feed.entry.length;i++){for(var j=0;j<data.feed.entry[i].link.length;j++){if(data.feed.entry[i].link[j].rel=='alternate'){var postUrl=data.feed.entry[i].link[j].href;break}}
var postTitle=data.feed.entry[i].title.$t
$('.results').append('<li><a href='+postUrl+' title="'+postTitle+'">'+'<svg viewBox="0 0 48 48"><path d="M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-3.98 12H14v-4h20.02v4zm0 8H14v-4h20.02v4zm-6 8H14v-4h14.02v4z"></path></svg>'+postTitle+'</a></li>')}}else{$('.results').addClass('hidden')}}})}else{$('.results,.clear-text').addClass('hidden')}})
$('.clear-text').click(function(){$('.bg_Se input').val('')
$('.results,.clear-text').addClass('hidden')
$('.results').empty()})
$.ajax({url:"/feeds/posts/summary",type:"get",data:{'max-results':0,'alt':'json'},dataType:"jsonp",success:function(e){var totalItems=e.feed.openSearch$totalResults.$t;$('.total_posts').html(totalItems)}})})
$(function(){$.fn.scrollToTop=function(){$(this).hide().removeAttr("href"),"0"!=$(window).scrollTop()&&$(this).fadeIn("slow")
var o=$(this);$(window).scroll(function(){"0"==$(window).scrollTop()?$(o).fadeOut("slow"):$(o).fadeIn("slow")}),$(this).click(function(){$("html, body").animate({scrollTop:0},"slow")})}
$(".MD-StoTop").scrollToTop()})
$('.tb button.dropsss').on('click',function(){scroll=0
if($('.tb-menu').css('display')==='none'){$('.recent-comments').addClass('loader')
var numcomments=10;$.ajax({type:'GET',url:'/feeds/comments/summary',data:{'max-results':numcomments,'alt':'json'},dataType:'jsonp',jsonp:'callback',jsonpCallback:'getComments',success:function(e){$('.recent-comments').removeClass('loader')
var totalcomments=e.feed.openSearch$totalResults.$t
$('#allcomments').attr('value',totalcomments)
scroll=1
$('.recent-comments').scroll(function(){var a=$('.recent-comments').scrollTop(),b=parseInt($('.comments').height()-$('.recent-comments').height())
if(a>=b){if(scroll==1){scroll=0
$('.loading').addClass('loader').addClass('load')
var items=Number($('#numcomments').val())
items=items+numcomments
if(items<=totalcomments){setTimeout(function(){$('#numcomments').val(items)
$.ajax({type:'GET',url:'/feeds/comments/summary',data:{'max-results':numcomments,'start-index':items+1,'alt':'json'},dataType:'jsonp',jsonp:'callback',jsonpCallback:'getComments',success:function(){scroll=1
var lastcomments=items+numcomments;if(lastcomments>totalcomments){$('.loading').removeClass('loader').removeClass('load')}}})},1000)}else{$('.loading').removeClass('loader').removeClass('load')}}}})}})}else{$('.recent-comments ul').empty()
$('#numcomments').attr('value','0')
$('#allcomments').attr('value','')
$('.loading').removeClass('loader').removeClass('load')}})
function getComments(e){if(e.feed.entry){for(var t=0;t<e.feed.entry.length;t++){for(var r=0;r<e.feed.entry[t].link.length;r++)
if("alternate"==e.feed.entry[t].link[r].rel){var a=e.feed.entry[t].link[r].href;break}
var n=e.feed.entry[t].published.$t,l=e.feed.entry[t].author[0].gd$image.src.replace("//img1.blogblog.com/img/b16-rounded.gif","//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s40"),s=n.substring(8,10)+"/"+n.substring(5,7)+"/"+n.substring(0,4),i=e.feed.entry[t].author[0].uri.$t,c=(e.feed.entry[t].title.$t,e.feed.entry[t].author[0].name.$t),o=e.feed.entry[t].summary.$t.substring(0,150);function formatUrl(o){if(o){o=o.replace(/((https?\:\/\/)|(www\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi,function(url){var full_url=url;if(!full_url.match('^https?:\/\/')){full_url='//'+full_url}
return'<a href="'+full_url+'">'+url+'</a>'})}
return o}
$(".recent-comments ul").append('<li><div class="rc_avatar"><img src='+l+' alt="'+c+'" /></div><div class="rc_block"><div class="rc_header"><span class="rc_user"><a rel="nofollow" href='+a+' title="'+c+'">'+c+'</a></span><span class="rc_date"><a rel="nofollow" href='+a+'>'+s+'</a></span></div><p class="rc_content">'+formatUrl(o)+"</p></div></li>")}}
function replaceText(){bodyText=document.getElementsByClassName('recent-comments')[0]
text=bodyText.innerHTML
text=text.replace(/8\|/gi,'😎')
bodyText.innerHTML=text}
replaceText()}
function protect(){void 0!==document.onselectstart?document.onselectstart=new Function("return false"):(document.onmousedown=new Function("return false"),document.onmouseup=new Function("return true"));}
for(var g=$(".post blockquote"),len=(i=0,g.length);i<len;i++)!function(e){$(".post blockquote:eq("+i+")").after().on("click",function(){var i=$(".post-outer blockquote:eq("+e+")").text();navigator.clipboard.writeText(i),$(".post blockquote:eq("+e+")").after("Copied")})}(i);
function copypostLink(){var e=$(".linkboxbtn input").val();navigator.clipboard.writeText(e)}; 
var parent,ink,d,x,y;$(".ripple").mouseup(function(e){ink.addClass("end")}),$(".ripple").mousedown(function(e){var i=$(this);0==(parent=i).find(".ink").length&&parent.append("<div class='splash-wrapper'><div class='ink'></div></div>"),(ink=parent.find(".ink")).removeClass("animate"),ink.removeClass("end"),ink.height()||ink.width()||(d=Math.max(parent.outerWidth(),parent.outerHeight()),ink.css({height:d,width:d})),x=e.pageX-parent.offset().left-ink.width()/2,y=e.pageY-parent.offset().top-ink.height()/2,ink.css({top:y+"px",left:x+"px"}).addClass("animate")});
var _0x297e81=_0x4e5c;function _0x134e(){var _0x2d65f0=['1315jiYotK','append','https://drive.google.com/file/d/','9YOWjmV','94950XwVLaK','5897463AnHERy','2722832Igxmgp','indexOf','https://drive.google.com/uc?id=','537117SKgfYR','4jNSQoh','2216710CZGJux','undefined','\x22\x20\x20target=\x22_blank\x22>Demo</a><a\x20\x20href=\x22','4684UgKpPf','14SXyUnE','\x22\x20target=\x22_blank\x22>Download</a></div>','&export=download','https://www.mrlaboratory.info/p/download.html?6d726c61626f7261746f7279','<div\x20class=\x22demodown\x22><a\x20href=\x22','split','216912YUrKCQ'];_0x134e=function(){return _0x2d65f0;};return _0x134e();}function _0x4e5c(_0x4b38db,_0x428f94){var _0x134e57=_0x134e();return _0x4e5c=function(_0x4e5c24,_0x20ef46){_0x4e5c24=_0x4e5c24-0x102;var _0x5b99ef=_0x134e57[_0x4e5c24];return _0x5b99ef;},_0x4e5c(_0x4b38db,_0x428f94);}(function(_0x5790dc,_0x356859){var _0x465761=_0x4e5c,_0x3008ed=_0x5790dc();while(!![]){try{var _0xd55594=parseInt(_0x465761(0x10a))/0x1+parseInt(_0x465761(0x115))/0x2*(parseInt(_0x465761(0x114))/0x3)+parseInt(_0x465761(0x103))/0x4*(-parseInt(_0x465761(0x10b))/0x5)+parseInt(_0x465761(0x10f))/0x6*(-parseInt(_0x465761(0x104))/0x7)+-parseInt(_0x465761(0x111))/0x8+parseInt(_0x465761(0x10e))/0x9*(-parseInt(_0x465761(0x116))/0xa)+parseInt(_0x465761(0x110))/0xb;if(_0xd55594===_0x356859)break;else _0x3008ed['push'](_0x3008ed['shift']());}catch(_0x434f57){_0x3008ed['push'](_0x3008ed['shift']());}}}(_0x134e,0x33243));if(typeof temDownLink!==_0x297e81(0x117)){if(temDownLink[_0x297e81(0x112)](_0x297e81(0x10d))!=-0x1)var drivelink=temDownLink[_0x297e81(0x109)]('/'),drivelinkk=drivelink[0x5],temDownLink=_0x297e81(0x113)+drivelinkk+_0x297e81(0x106);else var temDownLink=temDownLink;var newtempdemomrll=_0x297e81(0x108)+tempDemoLink+_0x297e81(0x102)+convertToHex(temDownLink)+_0x297e81(0x105);$('#post-toc')[_0x297e81(0x10c)](newtempdemomrll);}function convertToHex(_0x276145){var _0x2593a4=_0x297e81,_0x22a9cf='';for(var _0x40b78b=0x0;_0x40b78b<_0x276145['length'];_0x40b78b++){_0x22a9cf+=''+_0x276145['charCodeAt'](_0x40b78b)['toString'](0x10);}return _0x22a9cf=_0x2593a4(0x107)+_0x22a9cf,_0x22a9cf;}
