// forked from calmbooks's "CSS3でボタンをつくる！（ジャンプ）" http://jsdo.it/calmbooks/7Yfa
/*===================================================

簡単3ステップ！
画像を使わず、CSS3でWebボタンをつくります。

ホップステップジャンプのステップです。
第1プロセスはこちら → http://jsdo.it/calmbooks/eCSH
第2プロセスはこちら → http://jsdo.it/calmbooks/qncQ

クリックさせないリンク jdtRunAway(http://5509.me/log/jdtrunaway)
を利用して、逃げるボタンを作ってみました。

===================================================*/

/**
 * jDTRunAway
 *
 * @version      $Rev$
 * @author       nori (http://twitter.com/5509)
 * @copyright    (c) 2010 誰が使うの？何の役にも立たないjQueryプラグイン
 * @license      The MIT License
 * @link         http://jdtplugins.googlecode.com/svn/trunk/jdtlightbox/index.html
 *
 * $Date$
 */


(function($) {

  var mouseX, mouseY, dE = document.documentElement;
  var moverFlag = false

  $.fn.jdtRunAway = function(options) {
    
    var c = $.extend({
      rate: 10,
      instance: 7000
    }, options);
    
    $(document)
      .mousemove(function(e) {
        mouseY = e.pageY ? e.pageY : event.clientY + dE.scrollTop;
        mouseX = e.pageX ? e.pageX : event.clientX + dE.scrollLeft;
      })
      .keydown(function(e) {
        if ( e.keyCode == 9 ) {
          alert('ひきょうもの！');
          return false;
        }
      });
      
    $(this).each(function() {
	   	mover(this, c.instance, c.rate);
    });
  }
  
  //ボタンを動かすメソッド
  function mover(selector, instance, rate) {
    var firstPointX = [],
      firstPointY = [];
      
    // offsetの保存
    $(selector).each(function(index) {
      var offset = $(this).offset();
      firstPointX[index] = offset.left;
      firstPointY[index] = offset.top;
      
      $(this).after($('<span/>')
        .css({
          display: 'inline-block',
          width: $(this).width()
        })
      );
    });
    
    var $this = $(selector);

    (function(){
      $this.each(function(index) {
        var elem = $(this),
          offset = elem.offset(),
          theta = Math.atan2(offset.top - mouseY, offset.left - mouseX),
          d = instance / Math.sqrt(Math.pow(mouseX - offset.left, 2) + Math.pow(mouseY - offset.top, 2)),
          //ここでleftとtopの値を決定している
          left = parseInt(offset.left) + d * Math.cos(theta) + (firstPointX[index] - offset.left) * 0.1,
          top = parseInt(offset.top) + d * Math.sin(theta) + (firstPointY[index] - offset.top) * 0.1;
          
        if ( !isNaN(top) && !isNaN(left) ) {
	   		elem.css({
		   			left: left,
		   			top: top
		   	});
        } else {
          elem.css('position', 'absolute');
        }
      });
      setTimeout(arguments.callee, rate);
    })();
  }
})(jQuery)