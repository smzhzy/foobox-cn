﻿GenrePack = {
	"流行": "Pop",
	"华语流行": "CPop",
	"C-POP": "CPop",
	"日语流行": "JPop",
	"J-POP": "JPop",
	"韩语流行": "KPop",
	"K-POP": "KPop",
	"摇滚": "Rock",
	"经典": "Classical",
	"古典": "Classical",
	"Classic": "Classical",
	"Classik": "Classical",
	"动漫": "ACG",
	"Anime": "ACG",
	"Comic": "ACG",
	"Game": "ACG",
	"游戏": "ACG",
	"Blue": "Blues",
	"乡村": "Country",
	"其他": "Other",
	"其它": "Other",
	"电音": "EDM",
	"迪斯科": "Disco",
	"民谣": "Folk",
	"金属": "Metal",
	"朋克": "Punk",
	"蓝调": "Blues",
	"布鲁斯": "Blues",
	"纯乐器演奏": "Instrumental",
	"器乐": "Instrumental",
	"说唱": "Rap",
	"嘻哈": "Hip-Hop",
	"疯克": "Funk",
	"新世纪音乐": "NewAge",
	"New Age": "NewAge",
	"爵士": "Jazz"
}

function GetGenre(name){
	var str = GenrePack[name];
	if(!str) str = name;
	return str;
}