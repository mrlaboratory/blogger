	//word linker script by mrlaboratory.com
    var text1 = [
    'mr laboratory',
	'MR Laboratory',
    'Md Mijanur Rahaman',  
    'facebook',
	'Facebook',
	'Youtube',
	'youtube',
	'twitter',
	'Twitter',
	'search',
	'Search',
	'blogger tricks',
	'blogger tutorial',
	'hacking',
	'seo tutorial',
	'seo tricks',
	'online earning',
	'freelancing',
	'outsourcing',
	'computer tricks',
	'video marketing',
	'web development',
	'digital marketing',
	'email marketing',
	'affiliate marketing',
	'motivational',
	'video editing',
	'photo editing'
	
    ];
    var liNK1 = [
    'https://mrlaboratory.info',
	'https://mrlaboratory.com',
    'https://admin.mrlaboratory.info',
    'https://facebook.com/mrlaboratory',
	'https://facebook.com/mrlaboratory',
	'https://www.youtube.com/channel/UC8uhhaqA9s540gufCwKwrKA',
	'https://www.youtube.com/channel/UC8uhhaqA9s540gufCwKwrKA',
	'https://twitter.com/mrlaboratory2',
	'https://twitter.com/mrlaboratory2',
	'https://www.google.com/search?q=mr+laboratory',
	'https://www.google.com/search?q=mr+laboratory',
	'https://www.mrlaboratory.info/p/blogger-tutorial.html',
	'https://www.mrlaboratory.info/p/blogger-tutorial.html',
	'https://www.mrlaboratory.info/p/ethical-hacking.html',
	'https://www.mrlaboratory.info/p/seo-tutorial.html',
	'https://www.mrlaboratory.info/p/seo-tutorial.html',
	'https://www.mrlaboratory.info/p/online-earning.html',
	'https://www.mrlaboratory.info/p/online-earning.html',
	'https://www.mrlaboratory.info/p/online-earning.html',
	'https://www.mrlaboratory.info/p/computer-tricks.html',
	'https://www.mrlaboratory.info/p/youtube-marketing.html',
	'https://www.mrlaboratory.info/p/web-developing.html',
	'https://www.mrlaboratory.info/p/digital-marketing.html',
	'https://www.mrlaboratory.info/search?q=email+marketing',
	'https://www.mrlaboratory.info/search?q=affiliate+marketing',
	'https://www.mrlaboratory.info/p/motivational-speech.html',
	'https://www.mrlaboratory.info/p/video-editing.html',
	'https://www.mrlaboratory.info/p/photo-editing.html'
	
	
    ];
    for (var i=0; i<text1.length;i++){
var liNK = liNK1[i];
var y = text1[i];
    highlight(y);
        function highlight(text) {
            html = document.querySelector(".post-body").innerHTML;
		
            re = new RegExp(text, 'g');
            if (re.test(html)) {
                html = html.replace(re, '<a class="word-linking-mr"  target="_blank" href='+liNK+'>' + text + '</a> ');    
            }  
            document.querySelector(".post-body").innerHTML = html;    
        }    }
		//word linker script by mrlaboratory.com
