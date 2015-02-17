i18n.lang = {
	//locale properties
	"langCode": "fa-IR",
	"langName": "فارسی - ایران",
	"fromCode": "en-US",
	"direction": "rtl",
	"style": "fa-IR.css",	//locale style to be applied
	toLocalNumber: function(n) {
		//convert n to local numbers
		return n.toString().replace(/\d/gi, function(t) {return String.fromCharCode(parseInt(t) + 1776);} );
	},
	toLocalDateStr: function(d) {
		//convert d to local date
		var jdate = this.gregorian_to_jalali(d.getFullYear(), d.getMonth()+1, d.getDate());
		return this.toLocalNumber(jdate.year + "/" + jdate.month + "/" + jdate.day);
	},
	"load": function () {
		//this would be run after loading (translating to) this locale
		console.log('locale load function');
	},
	"unload": function () {
		//this would be run after unloading this locale
		//usually undo things done in load
		console.log('locale unload function');
	},
	/* translations */
	"context": {
		"i18n.js usage example": "مثال استفاده از i18n.js",
		"This is a test header": "این یک تیتر تستی است",
		"i18n.js is a flexible internationalization library for JavaScript.": "i18n.js یک کتابخانه منعطف بین المللی کردن برای جاوا اسکریپت است.",
		"customContext": {
			"Number test:": "تست اعداد:",
			"Date test:": "تست تاریخ:",
			"Current locale:": "زبان فعلی:",
		},
	},
	/* locale specific functions */
	gregorian_to_jalali: function(g_y,g_m,g_d)
	{
		g_y = parseInt(g_y);
		g_m = parseInt(g_m);
		g_d = parseInt(g_d);

		var d_4=g_y%4,
			g_a = [0,0,31,59,90,120,151,181,212,243,273,304,334],
			doy_g = g_a[parseInt(g_m)] + g_d,
			jy,doy_j,jm,jd;
		if (d_4==0 && g_m>2)
			doy_g++;
		var d_33 = parseInt( ((g_y-16) % 132) * 0.0305),
			a = (d_33==3 || d_33 < (d_4-1) || d_4==0) ? 286 : 287,
			b = ((d_33==1 || d_33==2) && (d_33==d_4 || d_4==1)) ? 78: ((d_33==3 && d_4==0)?80:79);
		if (parseInt((g_y-10)/63)==30)
		{
			a--;
			b++;
		}
		
		if (doy_g>b)
		{
			jy=g_y-621;
			doy_j=doy_g-b;
		}
		else
		{
			jy=g_y-622;
			doy_j=doy_g+a;
		}
		
		if (doy_j<187)
		{
			jm=parseInt((doy_j-1)/31);
			jd=doy_j-(31*jm++);
		}
		else
		{
			jm=parseInt((doy_j-187)/30);
			jd=doy_j-186-(jm*30);
			jm+=7;
		}
		return {year:jy,month:jm,day:jd};
	}
};
