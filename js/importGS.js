function underscore(nStr) {
	"use strict";
	nStr=nStr.split(' ').join('_');
	return nStr;
	}

function importInterns(json) {
	"use strict";
	var pre_html = '<ul id=importGS class="interns">';
	var actual_html = '';
	var post_html = '</ul>';
	

	
	var len = json.feed.entry.length;
	
	for (var i=0; i<len; i++) {
		actual_html += [
			'<li class="intern" id="',
			underscore(json.feed.entry[i].gsx$name.$t),
			'">',
			'<div id="bio" class="theBio"><p',// style="top:',
			//json.feed.entry[i].gsx$offset.$t,
			//'%">',
			'>',
			json.feed.entry[i].gsx$aboutyou.$t,
			'</p></div>',
			'<img src="img/intern_photos/',
			underscore(json.feed.entry[i].gsx$name.$t),
			'.png" class="bioPic" alt="',
			json.feed.entry[i].gsx$name.$t,
			'">',
			'<div id="name"><p>',
			json.feed.entry[i].gsx$name.$t,
			', ',
			json.feed.entry[i].gsx$age.$t,
			'</p></div><div id="info"><p></br>',
			json.feed.entry[i].gsx$school.$t,
			'</br>',
			json.feed.entry[i].gsx$hometown.$t,
			'</br>',
			json.feed.entry[i].gsx$interestincapacity.$t,
			'</p></div>',
			'<div class="like" style="z-index:7"></div>',
			'<div class="dislike" style="z-index:7"></div>',
			'</li>',
			].join('');
		}
            document.getElementById('tinderslide').innerHTML = pre_html + actual_html + post_html;
			
		var table_pre='<div class="directory"><ul>';
		var table_actual='';
		var table_post='</ul></div>';
		var j=0;
		for (var y=0; y<len; y++) {
			table_actual+= [
				'<li><a href="#" id="',
				underscore(json.feed.entry[y].gsx$name.$t),
				'">',
				json.feed.entry[y].gsx$shortname.$t,
				'</a></li>',
			].join('');
			j++;
			if (j >= 8) {
				table_actual+='</ul><ul>';
				j=0;
			}
		}
		document.getElementById('footer').innerHTML += table_pre + table_actual + table_post;
				
}

