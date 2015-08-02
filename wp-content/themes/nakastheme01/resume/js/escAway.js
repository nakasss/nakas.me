//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//	カラーパーサークラス
//		このクラスのコードの大部分は以下参考ページのものを流用しています。
//		参考：rgbcolor.js
//			(http://www.phpied.com/rgb-color-parser-in-javascript/)
//		参考：【JavaScript】各種色指定用の文字列を16進カラーコード(#xxxxxx)に変換
//			(http://furyu.tea-nifty.com/annex/2007/11/javascript16xxx_23af.html)

var	HTMLcolorTable	=	{
	aliceblue:[240,248,255],
	antiquewhite:[250,235,215],
	aqua:[0,255,255],
	aquamarine:[127,255,212],
	azure:[240,255,255],
	beige:[245,245,220],
	bisque:[255,228,196],
	black:[0,0,0],
	blanchedalmond:[255,235,205],
	blue:[0,0,255],
	blueviolet:[138,43,226],
	brown:[165,42,42],
	burlywood:[222,184,135],
	cadetblue:[95,158,160],
	chartreuse:[127,255,0],
	chocolate:[210,105,30],
	coral:[255,127,80],
	cornflowerblue:[100,149,237],
	cornsilk:[255,248,220],
	crimson:[220,20,60],
	cyan:[0,255,255],
	darkblue:[0,0,139],
	darkcyan:[0,139,139],
	darkgoldenrod:[184,134,11],
	darkgray:[169,169,169],
	darkgreen:[0,100,0],
	darkkhaki:[189,183,107],
	darkmagenta:[139,0,139],
	darkolivegreen:[85,107,47],
	darkorange:[255,140,0],
	darkorchid:[153,50,204],
	darkred:[139,0,0],
	darksalmon:[233,150,122],
	darkseagreen:[143,188,143],
	darkslateblue:[72,61,139],
	darkslategray:[47,79,79],
	darkturquoise:[0,206,209],
	darkviolet:[148,0,211],
	deeppink:[255,20,147],
	deepskyblue:[0,191,255],
	dimgray:[105,105,105],
	dodgerblue:[30,144,255],
	feldspar:[209,146,117],
	firebrick:[178,34,34],
	floralwhite:[255,250,240],
	forestgreen:[34,139,34],
	fuchsia:[255,0,255],
	gainsboro:[220,220,220],
	ghostwhite:[248,248,255],
	gold:[255,215,0],
	goldenrod:[218,165,32],
	gray:[128,128,128],
	green:[0,128,0],
	greenyellow:[173,255,47],
	honeydew:[240,255,240],
	hotpink:[255,105,180],
	indianred:[205,92,92],
	indigo:[75,0,130],
	ivory:[255,255,240],
	khaki:[240,230,140],
	lavender:[230,230,250],
	lavenderblush:[255,240,245],
	lawngreen:[124,252,0],
	lemonchiffon:[255,250,205],
	lightblue:[173,216,230],
	lightcoral:[240,128,128],
	lightcyan:[224,255,255],
	lightgoldenrodyellow:[250,250,210],
	lightgrey:[211,211,211],
	lightgreen:[144,238,144],
	lightpink:[255,182,193],
	lightsalmon:[255,160,122],
	lightseagreen:[32,178,170],
	lightskyblue:[135,206,250],
	lightslateblue:[132,112,255],
	lightslategray:[119,136,153],
	lightsteelblue:[176,196,222],
	lightyellow:[255,255,224],
	lime:[0,255,0],
	limegreen:[50,205,50],
	linen:[250,240,230],
	magenta:[255,0,255],
	maroon:[128,0,0],
	mediumaquamarine:[102,205,170],
	mediumblue:[0,0,205],
	mediumorchid:[186,85,211],
	mediumpurple:[147,112,216],
	mediumseagreen:[60,179,113],
	mediumslateblue:[123,104,238],
	mediumspringgreen:[0,250,154],
	mediumturquoise:[72,209,204],
	mediumvioletred:[199,21,133],
	midnightblue:[25,25,112],
	mintcream:[245,255,250],
	mistyrose:[255,228,225],
	moccasin:[255,228,181],
	navajowhite:[255,222,173],
	navy:[0,0,128],
	oldlace:[253,245,230],
	olive:[128,128,0],
	olivedrab:[107,142,35],
	orange:[255,165,0],
	orangered:[255,69,0],
	orchid:[218,112,214],
	palegoldenrod:[238,232,170],
	palegreen:[152,251,152],
	paleturquoise:[175,238,238],
	palevioletred:[216,112,147],
	papayawhip:[255,239,213],
	peachpuff:[255,218,185],
	peru:[205,133,63],
	pink:[255,192,203],
	plum:[221,160,221],
	powderblue:[176,224,230],
	purple:[128,0,128],
	red:[255,0,0],
	rosybrown:[188,143,143],
	royalblue:[65,105,225],
	saddlebrown:[139,69,19],
	salmon:[250,128,114],
	sandybrown:[244,164,96],
	seagreen:[46,139,87],
	seashell:[255,245,238],
	sienna:[160,82,45],
	silver:[192,192,192],
	skyblue:[135,206,235],
	slateblue:[106,90,205],
	slategray:[112,128,144],
	snow:[255,250,250],
	springgreen:[0,255,127],
	steelblue:[70,130,180],
	tan:[210,180,140],
	teal:[0,128,128],
	thistle:[216,191,216],
	tomato:[255,99,71],
	turquoise:[64,224,208],
	violet:[238,130,238],
	violetred:[208,32,144],
	wheat:[245,222,179],
	white:[255,255,255],
	whitesmoke:[245,245,245],
	yellow:[255,255,0],
	yellowgreen:[154,205,50]
};

function HTMLcolor(color)
{
	var	r,g,b;
	color	=	color.replace(/\s/g,'').toLowerCase();
	if(	color.match(/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/)	)	//	rgb(r,g,b)
	{
		r	=	parseInt(RegExp.$1);
		g	=	parseInt(RegExp.$2);
		b	=	parseInt(RegExp.$3);
	}
	else if(	color.match(/^#([a-f\d][a-f\d])([a-f\d][a-f\d])([a-f\d][a-f\d])$/)	)	//	#rrggbb
	{
		r	=	parseInt("0x"+RegExp.$1);
		g	=	parseInt("0x"+RegExp.$2);
		b	=	parseInt("0x"+RegExp.$3);
	}
	else if(	color.match(/^#([a-f\d])([a-f\d])([a-f\d])$/)	)	//	#rgb
	{
		r	=	parseInt("0x"+RegExp.$1)*0x11;
		g	=	parseInt("0x"+RegExp.$2)*0x11;
		b	=	parseInt("0x"+RegExp.$3)*0x11;
	}
	else
	{
		r=0;g=0;b=0;
		var	d	=	HTMLcolorTable[color];
		if(	d!=null	)
		{
			r	=	d[0];
			g	=	d[1];
			b	=	d[2];
		}
	}
	this.r	=	r;
	this.g	=	g;
	this.b	=	b;
	//	some getters
	this.toRGB	=	function()
	{
		return	'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
	}
}

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

//	リンクの遁走化
var	escAway;
//	リンクの逃走化：異常版。文字がバラバラに逃げる。とても重い。
var	escAwayDividing;
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//	escAway遁走HTML化
(function()	//	イロイロ隠蔽したい。見ちゃイヤン。
{
	var	mouseEventFlag	=	false;
	var	__doc__	=	document;
	var	__body__;
	//##########################################################################
	//	ルーチン集
	//--------------------------------------------------------------------------
	//	イベント登録
	var	addEvent	=	function(element,target,func)
	{
		if(	element.addEventListener	)
		{
			element.addEventListener(target,func,false);
			return	true;
		}
		if(	element.attachEvent	)
		{
			element.attachEvent("on"+target,func);
			return	true;
		}
		return	false;
	};
	//--------------------------------------------------------------------------
	//	getBoundingClientRectが実装されているかどうかチェックする
	var	is_getBoundingClientRect	=	function()
	{	//return	(typeof	Element.prototype.getBoundingClientRect	==	'function')
		var	dummy	=	__doc__.createElement("div");
		return	(dummy.getBoundingClientRect)!==undefined;
	};
	//--------------------------------------------------------------------------
	//	スタイルを得たい
	var	getStyle	=	function(ele,target)
	{
		var style	=	ele.currentStyle	||	__doc__.defaultView.getComputedStyle(ele,'');
		return	(	style	)	?	style[target]	:	null;
	};
	//------------------------------------------------------------------------------
	//	バックグラウンドカラーを得たい
	var	getBgcolor	=	function(ele)
	{
		do
		{
			var	r	=	getStyle(ele,'backgroundColor');
			if(	r==null	)	break;	//	error
			if(	r!="transparent"	&&	r!="rgba(0, 0, 0, 0)"	)	return	r;
		}
		while(	ele	=	ele.parentNode	)
		//	見つからなかった
		return	"#000000";
	};
	//##########################################################################
	//	マウス座標
	var	mouseX,mouseY;
	//	マウス座標用の関数登録
	if(	undefined !== window.ActiveXObject	)	//	IE判別
	{
		if(	__doc__.compatMode=='CSS1Compat'	)	//	モード判別
		{
			var	__base__scroll__	=	__doc__.documentElement;
			//	マウス座標イベント取得
			mouseEventFlag	=	addEvent(document,"mousemove",
			function(e)
			{
				mouseX	=	__base__scroll__.scrollLeft	+	event.clientX;
				mouseY	=	__base__scroll__.scrollTop	+	event.clientY;
			}
			);
		}
		else
		{
			//	マウス座標イベント取得
			mouseEventFlag	=	addEvent(document,"mousemove",
			function(e)
			{
				mouseX	=	__body__.scrollLeft	+	event.clientX;
				mouseY	=	__body__.scrollTop	+	event.clientY;
			}
			);
		}
	}
	else
	{
		//	マウス座標イベント取得
		mouseEventFlag	=	addEvent(window,"mousemove",
		function(e)
		{
			mouseX	=	e.pageX;
			mouseY	=	e.pageY;
		}
		);
	}
	//##########################################################################
	//	座標取得ルーチン
	var	getPosition;
	//	座標取得ルーチンを設定
	if(	is_getBoundingClientRect()	)	//	getBoundingClientRectでの座標取得
	{
		//	モード判別:サファリ等は強制的に互換モードのルーチンを使う
		if(	__doc__.compatMode=='CSS1Compat'	&&	undefined===window.defaultstatus	)
		{	//	DOCTYPE 標準準拠モード
			var	__getPosition_base__	=	__doc__.documentElement;
			//
			getPosition	=	function(el)
			{
				var	pos	=	el.getBoundingClientRect();
				return	{	x:(pos.left	+	__getPosition_base__.scrollLeft	-	__getPosition_base__.clientLeft)
						,	y:(pos.top	+	__getPosition_base__.scrollTop	-	__getPosition_base__.clientTop)	};
			};
		}
		else
		{	//	DOCTYPE その他互換モード
			getPosition	=	function(el)
			{
				var	pos	=	el.getBoundingClientRect();
				return	{	x:(pos.left	+	__body__.scrollLeft)
						,	y:(pos.top	+	__body__.scrollTop)	};
			};
		}
	}
	else
	{	//	getBoundingClientRectが無い
		if(	undefined !== window.opera	)
		{
			getPosition	=	function(el)
			{
				var	ex	=	0;
				var	ey	=	0;
				do
				{ 
					ex	+=	el.offsetLeft;
					ey	+=	el.offsetTop;
				}
				while(	el	=	el.offsetParent	);
				//
				return	{x:ex,y:ey};
			};
		}
		else
		{
			getPosition	=	function(target)
			{
				var	ex	=	0;
				var	ey	=	0;
				//
				var	el	=	target;
				do
				{ 
					ex	+=	el.offsetLeft;
					ey	+=	el.offsetTop;
				}
				while(	el	=	el.offsetParent	);
				//	要素内スクロール対応
				var	el	=	target;
				do
				{
					ex	-=	el.scrollLeft;
					ey	-=	el.scrollTop;
					el	=	el.parentNode;
				}
				while(	el!=__body__	);
				//
				return	{x:ex,y:ey};
			};
		}
	};

	//##########################################################################
	//	遁走化のためのHTML解析部分
	var	initializeFunction	=	function(kind,idName)
	{
		var	step	=	-1;
		var	id	=	idName;
		if(	"one"==kind	)	step	=	1;
		if(	"div"==kind	)	step	=	100;
		//
		var	pieceObjs;	//	ばらした文字列のエレメントを記録する配列
		var	workingStack;	//	HTML解析のスタック
		//-------------------------------------------------------
		//	タグの再帰解析開始：スタックを積む
		var	checkChildNodeCall	=	function(trg,ctx)
		{
			workingStack.push(	{	target:trg	,	anchor:ctx	}	);
			step	=	200;
		};
		//-------------------------------------------------------
		//	解析クラス：ＨＴＭＬ解析工程を細分化し、スレッタイズ(←あやしい造語？)する為のクラス
		this.working	=	function()
		{
			switch(step)
			{
				case	1:
					//==========================================================
					//	リンクの逃走化：通常版。タグが直接逃げる。
					var	te	=	__doc__.getElementById(idName);	//	対象特定
					if(	te==null	)	break;
					awayObjects.push(new	escAwayObject(te,10));
					//==========================================================
					break;
				case	100:
					//==========================================================
					//	リンクの逃走化：異常版。文字がバラバラに逃げる。とても重い。
					var	target	=	__doc__.getElementById(idName);	//	対象特定
					if(	target==null	)	break;
					//	新しいエレメントツリーを作る
					pieceObjs	=	new	Array();	//	ばらした文字列のエレメントを記録する配列
					workingStack	=	new	Array();	//	HTML解析のスタック
					//	HTML解析開始
					checkChildNodeCall(target,null);
					return	false;
					//----------------------------------------------------------
					//	ノード内解析開始：スタックをワークエリアにしている
				case	200:	//	call:checkChildNode
					var	nowStack	=	workingStack[workingStack.length-1];
					//
					if(	nowStack.target.childNodes.length==0	)
					{
						nowStack["result"]	=	nowStack.target.cloneNode(true);
						step	=	300;
						return	false;
					}
					//
					var	result;
					//	アンカーの場合はアンダーバーに
					if(	"A"==nowStack.target.tagName	)
					{
						result	=	__doc__.createElement("u");
						result.className	=	nowStack.target.className;
						nowStack.anchor	=	nowStack.target;
					}
					else
					{	//	アンカータグ以外は複製
						result	=	nowStack.target.cloneNode(true);
						result.innerHTML	=	"";
					}
					//
					nowStack["result"]	=	result;
					nowStack["nodeLoop"]	=	0;
					//
					step	=	210;
					return	false;
					//----------------------------------------------------------
					//	タグ内の兄弟エレメントの解析
				case	210:
					var	nowStack	=	workingStack[workingStack.length-1];
					//	子ノードチェック
					if(	nowStack.nodeLoop<nowStack.target.childNodes.length	)
					{
						var	chk	=	nowStack.target.childNodes[nowStack.nodeLoop++];
						//
						if(	3==chk.nodeType	)
						{	//	テキストの場合は、一文字ずつspanで挟んで追加
							var	j;
							var	tx	=	chk.nodeValue;
							for(j=0;j<tx.length;j++)
							{
								var	c	=	tx.charAt(j);
								if(	c>=" "	)
								{
									var	s;
									if(	null!=nowStack.anchor	)
									{	//	今のＡタグコンテキストでバラス
										s	=	nowStack.anchor.cloneNode(true);
									}
									else
									{	//	生テキストとしてバラス
										s	=	__doc__.createElement("span");
									}
								//	s.className	=	nowStack.target.className;
									s.innerHTML	=	c!=" "	?	c	:	"&nbsp;";
									nowStack.result.appendChild(s);
									pieceObjs.push(s);	//	遁走オブジェクト配列に追加
								}
							}
						}
						else
						{	//	再帰的に子ノードを解析し、追加
							checkChildNodeCall(chk,nowStack.anchor);
						}
						//
						return	false;
					}
					step	=	300;
					return	false;
					//----------------------------------------------------------
					//	タグの再帰解析の終了：スタックを戻る
				case	300:
					if(	workingStack.length>1	)
					{	//	スタックを戻り、結果を一つ上のノードに加える
						var	nowStack	=	workingStack[workingStack.length-1];
						workingStack.pop();
						var	nowStackPre	=	workingStack[workingStack.length-1];
						nowStackPre.result.appendChild(	nowStack.result	);
						//
						step	=	210;
						return	false;
					}
					//
					step	=	400;
					return	false;
					//----------------------------------------------------------
					//	ＨＴＭＬ解析終了
				case	400:	//	return:checkChildNode
					var	nowStack	=	workingStack[0];
					//	新しいものに置き換え
					var	p	=	nowStack.target.parentNode;
					p.replaceChild(nowStack.result,nowStack.target);
					//	バラバラにしたタグをそれぞれ遁走登録
					for(var i=0;i<pieceObjs.length;i++)	awayObjects.push(new escAwayObject(pieceObjs[i],1));
					break;
					//==========================================================
				default:
			}
			//	エラー
			step	=	-1;
			return	true;	//	初期化作業終了
		};
	};
	//##########################################################################
	//	遁走化登録スタック
	//		一旦スタックに積み、非同期でHTML解析と遁走化登録をする
	var	initializeStack	=	new	Array();
	//--------------------------------------------------------------------------
	//	リンクの逃走化：通常版。タグが直接逃げる。
	escAway	=	function(idName)
	{
		initializeStack.push(new initializeFunction("one",idName));
	};
	//	リンクの逃走化：異常版。文字がバラバラに逃げる。とても重い。
	escAwayDividing	=	function(idName)
	{
		initializeStack.push(new initializeFunction("div",idName));
	};
	//##########################################################################
	//	移動オブジェクト配列
	var	awayObjects	=	new	Array();
	//	位置チェック用カウンター
	var	awayCheckCounter	=	0;
	//	実行スレッド
	var	escAwayThread	=	function()
	{
		var	i;
		var	et;
		var	mx	=	awayObjects.length;
		//----------------------------------------------------------------------
		//	登録解析
		et	=	((new Date()).getTime())	+5;	//	5msec以上は処理しない
		while(	initializeStack.length>0	)
		{
			var	it	=	initializeStack[0];
			if(	it.working()	)	initializeStack.shift();
			//
			if(	((new Date()).getTime())>et	)	break;
		}
		//----------------------------------------------------------------------
		//	移動
	//	et	=	((new Date()).getTime())	+10;	//	5msec以上は処理しない
	//	for(i=0;i<mx;i++)
	//	{
	//		//	移動の更新
	//		awayObjects[awayMoveCounter].moveFunc();
	//		awayMoveCounter++;
	//		if(	awayMoveCounter>=mx	)	awayMoveCounter	=	0;
	//		//	時間がかかるようなら途中で中断する
	//		if(	((new Date()).getTime())>et	)	break;
	//	}
		//	多少重くなっても、この方が引っかかり感が無くイラつかない
		for(i=0;i<mx;i++)	awayObjects[i].moveFunc();
		//----------------------------------------------------------------------
		//	位置チェック
		et	=	((new Date()).getTime())	+5;	//	5msec以上は処理しない
		for(i=0;i<mx;i++)
		{
			//	マウス反応位置の更新
			awayObjects[awayCheckCounter].updatePos();
			awayCheckCounter++;
			if(	awayCheckCounter>=mx	)	awayCheckCounter	=	0;
			//	時間がかかるようなら途中で中断する
			if(	((new Date()).getTime())>et	)	break;
		}
		//----------------------------------------------------------------------
		setTimeout(escAwayThread,30);	//	50msec間隔
	};
	//##########################################################################
	//	エレメント遁走化オブジェクト（笑）
	//		te:対象エレメント
	//		sen:反応の鈍さ。１以上１０程度まで。小さい方が良く反応する。
	var	escAwayObject	=	function(te,sen)
	{
		//	色
		var	txc	=	new	HTMLcolor(getStyle(te,'color'));
		var	bgc	=	new	HTMLcolor(getBgcolor(te));
		//	対象となるタグ複製
		var	m;
		if(	"A"==te.tagName	)
		{	//	アンカータグの場合だけ、uにする
			m	=	__doc__.createElement("u");
			m.className	=	te.className;
			m.innerHTML	=	te.innerHTML;
		}
		else
		{	//	アンカー以外は複製
			m	=	te.cloneNode(true);
		}
		var	al	=	0;
		var	at	=	0;
		//	影となるタグの登録＆対象を子ノードにする
		var	p	=	te.parentNode;
		p.replaceChild(m,te);
		m.style.position	=	"relative";
		m.appendChild(te);
		//	色などのスタイルを設定
		te.style.position	=	"absolute";
		te.style.left	=	0;
		te.style.top	=	0;
		te.style.color	=	txc.toRGB();
		m.style.visibility	=	"hidden";	//	デフォルトでは影は見えない。
		te.style.visibility	=	"visible";	//	不可視を継承しない
		//------------------------------------------------------------------------
		//	■ズレ補正：どうにもならないのでブラウザ判別。
		//	FireFox。でも、微妙にズレているような気がする。
		if(	/a/[-1]=='a'	)
		{
		//	al	+=	(m.offsetWidth	-	te.offsetWidth)/2.0;
			at	+=	(m.offsetHeight	-	te.offsetHeight)/2.0;
		}
		//	IE。どの道ズレる。FFのように式で出せそうに無い為、拡大の状況でズレ具合が変化してしまう。
//		if(	'\v'=='v'	)
//		{
//			at	+=	1;
//		}
		//------------------------------------------------------------------------
		//	逃走リンクメイン
		var	nx	=	0;
		var	ny	=	0;
		var	vx,vy;
		var	runM	=	0;
		var	nw	=	m.offsetWidth/2.0;
		var	nh	=	m.offsetHeight/2.0;
		var	nrr	=	nw*nw+nh*nh;
		if(	nrr<1000	)	nrr	=	1000;
		//	エレメントの座標を求める
		var	ep;
		this.updatePos	=	function()
		{
			ep	=	getPosition(m);
		};
		this.updatePos();
		//	要素移動メイン関数
		this.moveFunc	=	function()
		{	
			var	blx=ep.x+nw-mouseX;
			var	bly=ep.y+nh-mouseY;
			//	逃走部分
			if(runM<1)
			{
				if(runM==-1&&blx*blx+bly*bly>40000)	runM=0;
				var	gpr=Math.sqrt(nx*nx+ny*ny)+50;
				if(runM==0&&gpr<60)
				{	//	元の場所に戻る
					vx=0;
					vy=0;
					ax=0;
					ay=0;
					nx=0;
					ny=0;
					//runM=sen;
					//	影を透明にしてズレを誤魔化す
					m.style.visibility	=	"hidden";	//	デフォルトでは影は見えない。
				}
				else
				{	//	マウスから逃げる加速度
					ax=-nx*gpr/50000;
					ay=-ny*gpr/50000;
					//	影を表示
					//m.style.visibility	=	"visible";
				}
			}
			else
			{
				ax=0;
				ay=0;
				runM--;
			}
			//	元に収まる部分
			var	gmx	=	blx+nx;
			var	gmy	=	bly+ny;
			var	gmr	=	.25*gmx*gmx+gmy*gmy;
			if(runM<0)
			{
				if(runM<-1)	runM++;
				if(gmr>=100)
				{
					ax+=gmx/gmr*3000;
					ay+=gmy/gmr*3000;
				}
				else
				{
					th=Math.random()*6.288185307178;
					vx=Math.sin(th)*50;
					vy=Math.cos(th)*50;
				}
			}
			//	反応＆逃走開始
			if(runM<1&&gmr<nrr)	{
				runM=-sen;
			}
			//	移動量算出
			vx=vx*.6+ax;if(vx>20){vx=20;}else if(vx<-20){vx=-20;};
			nx+=vx;
			vy=vy*.6+ay;if(vy>20){vy=20;}else if(vy<-20){vy=-20;};
			ny+=vy;
			//	移動:pxをつけないとXHTMLで動かない？
			te.style.left	=	nx+al+"px";
			te.style.top	=	ny+at+"px";
		};
	};
	//##########################################################################
	//	body onLoad	待ち合わせ
	addEvent(window,"load",function()
	{
		__body__	=	__doc__.body;
		if(	mouseEventFlag	)	escAwayThread();
	});

})();

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
