!function(t){effectsIn=["bounceIn","bounceInDown","bounceInUp","bounceInLeft","bounceInRight","fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight","fadeInUpBig","fadeInDownBig","fadeInLeftBig","fadeInRightBig","flipInX","flipInY","foolishIn","lightSpeedIn","rollIn","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","twisterInDown","twisterInUp","swap","swashIn","tinRightIn","tinLeftIn","tinUpIn","tinDownIn"],effectsOut=["bombRightOut","bombLeftOut","bounceOut","bounceOutDown","bounceOutUp","bounceOutLeft","bounceOutRight","fadeOut","fadeOutUp","fadeOutDown","fadeOutLeft","fadeOutRight","fadeOutUpBig","fadeOutDownBig","fadeOutLeftBig","fadeOutRightBig","flipOutX","flipOutY","foolishOut","hinge","holeOut","lightSpeedOut","puffOut","rollOut","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","rotateDown","rotateUp","rotateLeft","rotateRight","swashOut","tinRightOut","tinLeftOut","tinUpOut","tinDownOut","vanishOut"];var i=effectsIn.length,e=effectsOut.length;t.fn.mdSlider=function(s){function a(){"ActiveXObject"in window&&t(".md-item-opacity",J).addClass("md-ieopacity"),J.addClass("loading-image");var i="";if(s.responsive&&(i+=" md-slide-responsive"),s.fullwidth&&(i+=" md-slide-fullwidth"),s.showBullet&&s.posBullet&&(i+=" md-slide-bullet-"+s.posBullet),!s.showBullet&&s.showThumb&&s.posThumb&&(i+=" md-slide-thumb-"+s.posThumb),J.wrap('<div class="'+s.className+i+'"><div class="md-item-wrap"></div></div>'),P=J.parent(),_=P.parent(),E=s.responsive?J.width():s.width,j=s.height,K=[],U=C(),U&&_.addClass("md-touchdevice"),J.find("."+s.itemClassName).each(function(i){Z++,K[i]=t(this),t(this).find(".md-object").each(function(){var i=t(this).data("y")?t(this).data("y"):0,e=t(this).data("x")?t(this).data("x"):0,a=t(this).data("width")?t(this).data("width"):0,n=t(this).data("height")?t(this).data("height"):0;a>0&&t(this).width(a/s.width*100+"%"),n>0&&t(this).height(n/s.height*100+"%");var o={top:i/s.height*100+"%",left:e/s.width*100+"%"};t(this).css(o)}),i>0&&t(this).hide()}),n(),o(),s.slideShow&&(ai=!0),t(".md-object",J).hide(),t(".md-video",_).size()>0)if(s.videoBox)t(".md-video",_).mdvideobox();else{var e=t('<div class="md-video-control" style="display: none"></div>');_.append(e),t(".md-video",_).click(function(){var i=t("<iframe></iframe>");i.attr("allowFullScreen","").attr("frameborder","0").css({width:"100%",height:"100%",background:"black"}),i.attr("src",t(this).attr("href"));var s=t('<a href="#" class="md-close-video" title="Close video"></a>');return s.click(function(){return e.html("").hide(),ai=!0,!1}),e.html("").append(i).append(s).show(),ai=!1,!1})}t(window).resize(function(){S()}).trigger("resize"),k();var a=!1;t(window).blur(function(){a=(new Date).getTime()}),t(window).focus(function(){if(a){var t=(new Date).getTime()-a;t>si-oi?oi=si-200:oi+=t,a=!1}}),t(window).trigger("scroll")}function n(){if(s.slideShow&&s.showLoading){var i=t('<div class="loading-bar-hoz loading-bar-'+s.loadingPosition+'"><div class="br-timer-glow" style="left: -100px;"></div><div class="br-timer-bar" style="width:0px"></div></div>');_.append(i),H=t(".br-timer-bar",i),q=t(".br-timer-glow",i)}if(s.slideShow&&s.pauseOnHover&&P.hover(function(){ni=!0},function(){ni=!1}),0!=s.styleBorder){var e='<div class="border-top border-style-'+s.styleBorder+'"></div>';e+='<div class="border-bottom border-style-'+s.styleBorder+'"></div>',s.fullwidth||(e+='<div class="border-left border-style-'+s.styleBorder+'"><div class="edge-top"></div><div class="edge-bottom"></div></div>',e+='<div class="border-right border-style-'+s.styleBorder+'"><div class="edge-top"></div><div class="edge-bottom"></div></div>'),_.append(e)}if(0!=s.styleShadow){'<div class="md-shadow md-shadow-style-'+s.styleShadow+'"></div>'}if(s.showArrow&&(A=t('<div class="md-arrow"><div class="md-arrow-left"><span></span></div><div class="md-arrow-right"><span></span></div></div>'),P.append(A),t(".md-arrow-right",A).bind("click",function(){m()}),t(".md-arrow-left",A).bind("click",function(){u()})),0!=s.showBullet){Y=t('<div class="md-bullets"></div>'),_.append(Y);for(var a=0;Z>a;a++)Y.append('<div class="md-bullet"  rel="'+a+'"><a></a></div>');if(s.showThumb){for(var n=parseInt(J.data("thumb-width")),o=parseInt(J.data("thumb-height")),a=0;Z>a;a++){{var d=K[a].data("thumb"),r=K[a].data("thumb-type");K[a].data("thumb-alt")}if(d){var h;h="image"==r?t("<img />").attr("src",d).attr("alt",K[a].data("thumb-alt")).css({top:-(9+o)+"px",left:-(n/2-2)+"px",opacity:0}):t("<span></span>").attr("style",d).css({top:-(9+o)+"px",left:-(n/2-2)+"px",opacity:0}),t("div.md-bullet:eq("+a+")",Y).append(h).append('<div class="md-thumb-arrow" style="opacity: 0"></div>')}}t("div.md-bullet",Y).hover(function(){t(this).addClass("md_hover"),t("img, span",this).show().animate({opacity:1},200),t(".md-thumb-arrow",this).show().animate({opacity:1},200)},function(){t(this).removeClass("md_hover"),t("img, span",this).animate({opacity:0},200,function(){t(this).hide()}),t(".md-thumb-arrow",this).animate({opacity:0},200,function(){t(this).hide()})})}t("div.md-bullet",_).click(function(i){if(i.preventDefault(),!t(this).hasClass("md-current")){var e=t(this).attr("rel");l(e)}})}else if(s.showThumb){var c=t('<div class="md-thumb"><div class="md-thumb-container"><div class="md-thumb-items"></div></div></div>').appendTo(_);F=t(".md-thumb-items",c);for(var a=0;Z>a;a++){{var d=K[a].data("thumb"),r=K[a].data("thumb-type");K[a].data("thumb-alt")}if(d){var p=t('<a class="md-thumb-item" />').attr("rel",a);p.append("image"==r?t("<img />").attr("src",d).attr("alt",K[a].data("thumb-alt")):t("<span />").attr("style",d).css("display","inline-block")),F.append(p)}}t("a",F).click(function(){if(t(this).hasClass("md-current")||ei)return!1;var i=t(this).attr("rel");l(i)})}}function o(){U?(J.bind("touchstart",function(t){return ii?!1:(t=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],ii=!0,Q=void 0,J.mouseY=t.pageY,void(J.mouseX=t.pageX))}),J.bind("touchmove",function(t){if(t=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],ii){var i=t.pageX||t.clientX,e=t.pageY||t.clientY;return"undefined"==typeof Q&&(Q=!!(Q||Math.abs(e-J.mouseY)>Math.abs(i-J.mouseX))),Q?void(ii=!1):(N=i-J.mouseX,!1)}}),J.bind("touchend",function(){if(ii){if(ii=!1,N>s.touchSensitive)return u(),N=0,!1;if(N<-s.touchSensitive)return m(),N=0,!1}})):(P.hover(function(){A&&A.addClass("active")},function(){A&&A.removeClass("active")}),_.trigger("hover")),s.enableDrag&&(J.mousedown(function(t){return ii||(ii=!0,Q=void 0,J.mouseY=t.pageY,J.mouseX=t.pageX),!1}),J.mousemove(function(t){if(ii){var i=t.pageX||t.clientX,e=t.pageY||t.clientY;return"undefined"==typeof Q&&(Q=!!(Q||Math.abs(e-J.mouseY)>Math.abs(i-J.mouseX))),Q?void(ii=!1):(N=i-J.mouseX,!1)}}),J.mouseup(function(){return ii?(ii=!1,N>s.touchSensitive?u():N<-s.touchSensitive&&m(),N=0,!1):void 0}),J.mouseleave(function(){J.mouseup()}))}function d(){if(F){F.unbind("touchstart"),F.unbind("touchmove"),F.unbind("touchmove"),F.css("left",0);var i=0,e=F.parent().parent();if(t("a.md-thumb-item",F).each(function(){t("img",t(this)).length>0?(t("img",t(this)).css("borderLeftWidth")&&(i+=parseInt(t("img",t(this)).css("borderLeftWidth"),10)),t("img",t(this)).css("borderRightWidth")&&(i+=parseInt(t("img",t(this)).css("borderRightWidth"),10)),t("img",t(this)).css("marginLeft")&&(i+=parseInt(t("img",t(this)).css("marginLeft"),10)),t("img",t(this)).css("marginRight")&&(i+=parseInt(t("img",t(this)).css("marginRight"),10))):(t("span",t(this)).css("borderLeftWidth")&&(i+=parseInt(t("span",t(this)).css("borderLeftWidth"),10)),t("span",t(this)).css("borderRightWidth")&&(i+=parseInt(t("span",t(this)).css("borderRightWidth"),10)),t("span",t(this)).css("marginLeft")&&(i+=parseInt(t("span",t(this)).css("marginLeft"),10)),t("span",t(this)).css("marginRight")&&(i+=parseInt(t("span",t(this)).css("marginRight"),10))),t(this).css("borderLeftWidth")&&(i+=parseInt(t(this).css("borderLeftWidth"),10)),t(this).css("borderRightWidth")&&(i+=parseInt(t(this).css("borderRightWidth"),10)),t(this).css("marginLeft")&&(i+=parseInt(t(this).css("marginLeft"),10)),t(this).css("marginRight")&&(i+=parseInt(t(this).css("marginRight"),10)),i+=parseInt(J.data("thumb-width"))}),t(".md-thumb-next",e).remove(),t(".md-thumb-prev",e).remove(),i>t(".md-thumb-container",e).width()&&(ti=t(".md-thumb-container",e).width()-i,F.width(i),e.append('<div class="md-thumb-prev"></div><div class="md-thumb-next"></div>'),t(".md-thumb-prev",e).click(function(){r("right")}),t(".md-thumb-next",e).click(function(){r("left")}),h(),U)){ei=!0;var a,n;F.bind("touchstart",function(t){return t=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],a=!0,this.mouseX=t.pageX,n=F.position().left,!1}),F.bind("touchmove",function(t){return t.preventDefault(),t=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],a&&F.css("left",n+t.pageX-this.mouseX),!1}),F.bind("touchend",function(i){if(i.preventDefault(),i=i.originalEvent.touches[0]||i.originalEvent.changedTouches[0],a=!1,Math.abs(i.pageX-this.mouseX)<s.touchSensitive){var e=t(i.target).closest("a.md-thumb-item");return e.length&&l(e.attr("rel")),F.stop(!0,!0).animate({left:n},400),!1}return F.position().left<ti?F.stop(!0,!0).animate({left:ti},400,function(){h()}):F.position().left>0&&F.stop(!0,!0).animate({left:0},400,function(){h()}),n=0,!1})}}}function r(i){if(F)if("left"==i){var e=F.position().left;if(e>ti){var s=t(".md-thumb-container",_).width();e-s>ti?F.stop(!0,!0).animate({left:e-s},400,function(){h()}):F.stop(!0,!0).animate({left:ti},400,function(){h()})}}else if("right"==i){var e=F.position().left;if(0>e){var s=t(".md-thumb-container",_).width();0>e+s?F.stop(!0,!0).animate({left:e+s},400,function(){h()}):F.stop(!0,!0).animate({left:0},400,function(){h()})}}else{var a=t("a",F).index(t("a.md-current",F));if(a>=0){var e=F.position().left,n=a*t("a",F).width();if(0>n+e)F.stop(!0,!0).animate({left:-n},400,function(){h()});else{var o=n+t("a",F).width(),s=t(".md-thumb-container",_).width();o+e>s&&F.stop(!0,!0).animate({left:s-o},400,function(){h()})}}}}function h(){var i=F.position().left;i>ti?t(".md-thumb-next",_).show():t(".md-thumb-next",_).hide(),0>i?t(".md-thumb-prev",_).show():t(".md-thumb-prev",_).hide()}function l(i){if(oi=0,si=K[i].data("timeout")?K[i].data("timeout"):s.slideShowDelay,H){var e=oi*E/si;H.width(e),q.css({left:e-100+"px"})}z=V,V=parseInt(i),s.onStartTransition.call(J);var a=".slide-"+(V+1)+", .slide-"+(z+1);if(t(".md-slide-item:not("+a+")",_).hide(),K[z]){t("div.md-bullet:eq("+z+")",Y).removeClass("md-current"),t("a:eq("+z+")",F).removeClass("md-current"),v(K[z]);var n=s.transitions;if("random"==s.transitions.toLowerCase()){var o=new Array("slit-horizontal-left-top","slit-horizontal-top-right","slit-horizontal-bottom-up","slit-vertical-down","slit-vertical-up","strip-up-right","strip-up-left","strip-down-right","strip-down-left","strip-left-up","strip-left-down","strip-right-up","strip-right-down","strip-right-left-up","strip-right-left-down","strip-up-down-right","strip-up-down-left","left-curtain","right-curtain","top-curtain","bottom-curtain","slide-in-right","slide-in-left","slide-in-up","slide-in-down","fade");n=o[Math.floor(Math.random()*(o.length+1))],void 0==n&&(n="fade"),n=t.trim(n.toLowerCase())}if(-1!=s.transitions.indexOf(",")){var o=s.transitions.split(",");n=o[Math.floor(Math.random()*o.length)],void 0==n&&(n="fade"),n=t.trim(n.toLowerCase())}if(K[V].data("transition")){var o=K[V].data("transition").split(",");n=o[Math.floor(Math.random()*o.length)],n=t.trim(n.toLowerCase())}(this.support=Modernizr.csstransitions&&Modernizr.csstransforms3d)||"slit-horizontal-left-top"!=n&&"slit-horizontal-top-right"!=n&&"slit-horizontal-bottom-up"!=n&&"slit-vertical-down"!=n&&"slit-vertical-up"!=n||(n="fade"),$=!0,O(n),Y&&t("div.md-bullet:eq("+V+")",Y).addClass("md-current"),F&&t("a:eq("+V+")",F).addClass("md-current"),r()}else K[V].css({top:0,left:0}).show(),g(K[i]),Y&&t("div.md-bullet:eq("+V+")",Y).addClass("md-current"),F&&t("a:eq("+V+")",F).addClass("md-current"),r(),$=!1}function c(){l(0),G=setInterval(p,40)}function p(){if($)return!1;if(ai&&!ni)if(oi+=40,oi>si)m();else if(H){var t=oi*E/si;H.width(t),q.css({left:t-100+"px"})}}function m(){if($)return!1;var t=V;t++,t>=Z&&s.loop?(t=0,l(t)):Z>t&&l(t)}function u(){if($)return!1;var t=V;t--,0>t&&s.loop?(t=Z-1,l(t)):t>=0&&l(t)}function f(t){var i=t.data("easeout")?t.data("easeout"):"",s=!!window.ActiveXObject&&+/msie\s(\d+)/i.exec(navigator.userAgent)[1]||0/0;s=0/0!=s?11:parseInt(s),clearTimeout(t.data("timer-start")),""!=i&&"keep"!=i&&9>=s?t.fadeOut():(t.removeClass(effectsIn.join(" ")),""!=i?("random"==i&&(i=effectsOut[Math.floor(Math.random()*e)]),t.addClass(i)):t.hide())}function v(i){i.find(".md-object").each(function(){var i=t(this);i.stop(!0,!0).hide(),clearTimeout(i.data("timer-start")),clearTimeout(i.data("timer-stop"))})}function g(e){t(".md-object",e).each(function(){var e=t(this);e.data("easeout")&&e.removeClass(effectsOut.join(" "));var s=e.data("easein")?e.data("easein"):"",a=!!window.ActiveXObject&&+/msie\s(\d+)/i.exec(navigator.userAgent)[1]||0/0;a=0/0!=a?11:parseInt(a),"random"==s&&(s=effectsIn[Math.floor(Math.random()*i)]),e.removeClass(effectsIn.join(" ")),e.hide(),void 0!=e.data("start")?e.data("timer-start",setTimeout(function(){""!=s&&9>=a?e.fadeIn():e.show().addClass(s)},e.data("start"))):e.show().addClass(s),void 0!=e.data("stop")&&e.data("timer-stop",setTimeout(function(){f(e)},e.data("stop")))})}function w(){s.onEndTransition.call(J),t(".md-strips-container",J).remove(),K[z].hide(),K[V].show(),$=!1,g(K[V])}function b(i,e){var a,e=e?e:s,n=t('<div class="md-strips-container"></div>'),o=Math.round(E/e.strips),d=Math.round(j/e.strips),r=t(".md-mainimg img",K[V]),h=t(".md-slider-overlay",K[V]);if(h.length){var l=t('<div class="md-slider-overlay"></div>');l.css({"background-color":h.css("background-color")}),n.append(l)}0==r.length&&(r=t(".md-mainimg",K[V]));for(var c=0;c<e.strips;c++){var p,m,u=i?d*c+"px":"0px",f=i?"0px":o*c+"px";c==e.strips-1?(p=i?"0px":E-o*c+"px",m=i?j-d*c+"px":"0px"):(p=i?"0px":o+"px",m=i?d+"px":"0px"),a=t('<div class="mdslider-strip"></div>').css({width:p,height:m,top:u,left:f,opacity:0}).append(r.clone().css({marginLeft:i?0:-(c*o)+"px",marginTop:i?-(c*d)+"px":0})),n.append(a)}J.append(n)}function y(i,e,s){var a,n=t('<div class="md-strips-container"></div>'),o=E/i,d=j/e,r=t(".md-mainimg img",K[s]),h=t(".md-slider-overlay",K[s]);if(h.length){var l=t('<div class="md-slider-overlay"></div>');l.css({"background-color":h.css("background-color")}),n.append(l)}0==r.length&&(r=t(".md-mainimg",K[s]));for(var c=0;e>c;c++)for(var p=0;i>p;p++){var m=d*c+"px",u=o*p+"px";a=t('<div class="mdslider-tile"/>').css({width:o,height:d,top:m,left:u}).append(r.clone().css({marginLeft:"-"+u,marginTop:"-"+m})),n.append(a)}J.append(n)}function I(){var i,e=[],s=t('<div class="md-strips-container"></div>'),a=t(".md-slider-overlay",K[V]);if(a.length){var n=t('<div class="md-slider-overlay"></div>');n.css({"background-color":a.css("background-color")}),s.append(n)}t(".md-mainimg img",K[z]),t(".md-mainimg img",K[V]),e.push(t(".md-mainimg img",K[z]).length>0?t(".md-mainimg img",K[z]):t(".md-mainimg",K[z])),e.push(t(".md-mainimg img",K[V]).length>0?t(".md-mainimg img",K[V]):t(".md-mainimg",K[V]));for(var o=0;2>o;o++)i=t('<div class="mdslider-strip"></div>').css({width:E,height:j}).append(e[o].clone()),s.append(i);J.append(s)}function x(i){var e=t('<div class="md-strips-container '+i+'"></div>'),s=t(".md-mainimg img",K[z]).length>0?t(".md-mainimg img",K[z]):t(".md-mainimg",K[z]),a=t('<div class="mdslider-slit"/>').append(s.clone()),n=t('<div class="mdslider-slit"/>'),o=s.position(),d=t(".md-slider-overlay",K[V]);if(d.length){var r=t('<div class="md-slider-overlay"></div>');r.css({"background-color":d.css("background-color")}),e.append(r)}n.append(s.clone().css("top",o.top-j/2+"px")),("slit-vertical-down"==i||"slit-vertical-up"==i)&&(n=t('<div class="mdslider-slit"/>').append(s.clone().css("left",o.left-E/2+"px"))),e.append(a).append(n),J.append(e)}function O(i){switch(i){case"slit-horizontal-left-top":case"slit-horizontal-top-right":case"slit-horizontal-bottom-up":case"slit-vertical-down":case"slit-vertical-up":x(i),t(".md-object",K[V]).hide(),K[z].hide(),K[V].show();var e=t(".mdslider-slit",J).first(),a=t(".mdslider-slit",J).last(),n={transition:"all "+s.transitionsSpeed+"ms ease-in-out","-webkit-transition":"all "+s.transitionsSpeed+"ms ease-in-out","-moz-transition":"all "+s.transitionsSpeed+"ms ease-in-out","-ms-transition":"all "+s.transitionsSpeed+"ms ease-in-out"};t(".mdslider-slit",J).css(n),setTimeout(function(){e.addClass("md-trans-elems-1"),a.addClass("md-trans-elems-2")},50),setTimeout(function(){s.onEndTransition.call(J),t(".md-strips-container",J).remove(),$=!1,g(K[V])},s.transitionsSpeed);break;case"strip-up-right":case"strip-up-left":y(s.stripCols,1,V);var o=t(".mdslider-tile",J),d=s.transitionsSpeed/s.stripCols/2,r=s.transitionsSpeed/2;"strip-up-right"==i&&(o=t(".mdslider-tile",J).reverse()),o.css({height:"1px",bottom:"0px",top:"auto"}),o.each(function(i){var e=t(this);setTimeout(function(){e.animate({height:"100%",opacity:"1.0"},r,"easeInOutQuart",function(){i==s.stripCols-1&&w()})},i*d)});break;case"strip-down-right":case"strip-down-left":y(s.stripCols,1,V);var o=t(".mdslider-tile",J),d=s.transitionsSpeed/s.stripCols/2,r=s.transitionsSpeed/2;"strip-down-right"==i&&(o=t(".mdslider-tile",J).reverse()),o.css({height:"1px",top:"0px",bottom:"auto"}),o.each(function(i){var e=t(this);setTimeout(function(){e.animate({height:"100%",opacity:"1.0"},r,"easeInOutQuart",function(){i==s.stripCols-1&&w()})},i*d)});break;case"strip-left-up":case"strip-left-down":y(1,s.stripRows,V);var o=t(".mdslider-tile",J),d=s.transitionsSpeed/s.stripRows/2,r=s.transitionsSpeed/2;"strip-left-up"==i&&(o=t(".mdslider-tile",J).reverse()),o.css({width:"1px",left:"0px",right:"auto"}),o.each(function(i){var e=t(this);setTimeout(function(){e.animate({width:"100%",opacity:"1.0"},r,"easeInOutQuart",function(){i==s.stripRows-1&&w()})},i*d)});break;case"strip-right-up":case"strip-right-down":y(1,s.stripRows,V);var o=t(".mdslider-tile",J),d=s.transitionsSpeed/s.stripRows/2,r=s.transitionsSpeed/2;"strip-left-right-up"==i&&(o=t(".mdslider-tile",J).reverse()),o.css({width:"1px",left:"auto",right:"1px"}),o.each(function(i){var e=t(this);setTimeout(function(){e.animate({width:"100%",opacity:"1.0"},r,"easeInOutQuart",function(){i==s.stripRows-1&&w()})},i*d)});break;case"strip-right-left-up":case"strip-right-left-down":y(1,s.stripRows,z),K[z].hide(),K[V].show();var o=t(".mdslider-tile",J),d=s.transitionsSpeed/s.stripRows,r=s.transitionsSpeed/2;"strip-right-left-up"==i&&(o=t(".mdslider-tile",J).reverse()),o.filter(":odd").css({width:"100%",right:"0px",left:"auto",opacity:1}).end().filter(":even").css({width:"100%",right:"auto",left:"0px",opacity:1}),o.each(function(i){var e=t(this),a=i%2==0?{left:"-50%",opacity:"0"}:{right:"-50%",opacity:"0"};setTimeout(function(){e.animate(a,r,"easeOutQuint",function(){i==s.stripRows-1&&(s.onEndTransition.call(J),t(".md-strips-container",J).remove(),$=!1,g(K[V]))})},i*d)});break;case"strip-up-down-right":case"strip-up-down-left":y(s.stripCols,1,z),K[z].hide(),K[V].show();var o=t(".mdslider-tile",J),d=s.transitionsSpeed/s.stripCols/2,r=s.transitionsSpeed/2;"strip-up-down-right"==i&&(o=t(".mdslider-tile",J).reverse()),o.filter(":odd").css({height:"100%",bottom:"0px",top:"auto",opacity:1}).end().filter(":even").css({height:"100%",bottom:"auto",top:"0px",opacity:1}),o.each(function(i){var e=t(this),a=i%2==0?{top:"-50%",opacity:0}:{bottom:"-50%",opacity:0};setTimeout(function(){e.animate(a,r,"easeOutQuint",function(){i==s.stripCols-1&&(s.onEndTransition.call(J),t(".md-strips-container",J).remove(),$=!1,g(K[V]))})},i*d)});break;case"left-curtain":y(s.stripCols,1,V);var o=t(".mdslider-tile",J),h=E/s.stripCols,d=s.transitionsSpeed/s.stripCols/2;o.each(function(i){var e=t(this);e.css({left:h*i,width:0,opacity:0}),setTimeout(function(){e.animate({width:h,opacity:"1.0"},s.transitionsSpeed/2,function(){i==s.stripCols-1&&w()})},d*i)});break;case"right-curtain":y(s.stripCols,1,V);var o=t(".mdslider-tile",J).reverse(),h=E/s.stripCols,d=s.transitionsSpeed/s.stripCols/2;o.each(function(i){var e=t(this);e.css({right:h*i,left:"auto",width:0,opacity:0}),setTimeout(function(){e.animate({width:h,opacity:"1.0"},s.transitionsSpeed/2,function(){i==s.stripCols-1&&w()})},d*i)});break;case"top-curtain":y(1,s.stripRows,V);var o=t(".mdslider-tile",J),l=j/s.stripRows,d=s.transitionsSpeed/s.stripRows/2;o.each(function(i){var e=t(this);e.css({top:l*i,height:0,opacity:0}),setTimeout(function(){e.animate({height:l,opacity:"1.0"},s.transitionsSpeed/2,function(){i==s.stripRows-1&&w()})},d*i)});break;case"bottom-curtain":y(1,s.stripRows,V);var o=t(".mdslider-tile",J).reverse(),l=j/s.stripRows,d=s.transitionsSpeed/s.stripRows/2;o.each(function(i){var e=t(this);e.css({bottom:l*i,height:0,opacity:0}),setTimeout(function(){e.animate({height:l,opacity:"1.0"},s.transitionsSpeed/2,function(){i==s.stripRows-1&&w()})},d*i)});break;case"slide-in-right":var c=0;I();var o=t(".mdslider-strip",J);o.each(function(){m=t(this);var i=c*E;m.css({left:i}),m.animate({left:i-E},s.transitionsSpeed,function(){w()}),c++});break;case"slide-in-left":var c=0;I();var o=t(".mdslider-strip",J);o.each(function(){m=t(this);var i=-c*E;m.css({left:i}),m.animate({left:E+i},2*s.transitionsSpeed,function(){w()}),c++});break;case"slide-in-up":var c=0;I();var o=t(".mdslider-strip",J);o.each(function(){m=t(this);var i=c*j;m.css({top:i}),m.animate({top:i-j},s.transitionsSpeed,function(){w()}),c++});break;case"slide-in-down":var c=0;I();var o=t(".mdslider-strip",J);o.each(function(){m=t(this);var i=-c*j;m.css({top:i}),m.animate({top:j+i},s.transitionsSpeed,function(){w()}),c++});break;case"fade":default:var p={strips:1};b(!1,p);var m=t(".mdslider-strip:first",J);m.css({height:"100%",width:E}),"slide-in-right"==i?m.css({height:"100%",width:E,left:E+"px",right:""}):"slide-in-left"==i&&m.css({left:"-"+E+"px"}),m.animate({left:"0px",opacity:1},s.transitionsSpeed,function(){w()})}}function C(){return"ontouchstart"in window||"createTouch"in document}function S(){if(_.width(),E=s.responsive?_.width():s.width,s.responsive&&(j=s.fullwidth&&E>s.width?s.height:Math.round(E/s.width*s.height)),s.responsive||s.fullwidth||_.width(E),!s.responsive&&s.fullwidth&&_.css({"min-width":E+"px"}),s.fullwidth){t(".md-objects",J).width(s.width);var i=20;(_.width()-s.width)/2>20&&(i=(_.width()-s.width)/2),_.find(".md-bullets").css({left:i,right:i}),_.find(".md-thumb").css({left:i,right:i})}s.responsive&&s.fullwidth&&_.width()<s.width&&t(".md-objects",J).width(E),_.height(j),t(".md-slide-item",J).height(j),T(),d(),B(),D(),X()}function T(){t(".md-slide-item",J).each(function(){var i=t(".md-mainimg img",this);if(1==i.length){if(i.data("defW")&&i.data("defH")){var e=i.data("defW"),s=i.data("defH");L(i,e,s)}}else t(".md-mainimg",t(this)).width(t(".md-slide-item:visible",J).width()).height(t(".md-slide-item:visible",J).height())})}function k(){var i=t(".md-slide-item .md-mainimg img",J).length;J.data("count",i),0==J.data("count")&&R(),t(".md-slide-item .md-mainimg img",J).each(function(){t(this).load(function(){var i=t(this);if(!i.data("defW")){var e=W(i.attr("src"));L(i,e.width,e.height),i.data({defW:e.width,defH:e.height})}J.data("count",J.data("count")-1),0==J.data("count")&&R()}),this.complete&&t(this).load()})}function R(){J.removeClass("loading-image"),c()}function L(i,e,s){var a=t(".md-slide-item:visible",J).width(),n=t(".md-slide-item:visible",J).height();if(s>0&&n>0)if(e/s>a/n){var o=a-n/s*e;i.css({width:"auto",height:n+"px"}),i.css(0>o?{left:o/2+"px",top:0}:{left:0,top:0})}else{var d=n-a/e*s;i.css({width:a+"px",height:"auto"}),i.css(0>d?{top:d/2+"px",left:0}:{left:0,top:0})}}function B(){var i=1;parseInt(t.browser.version,10)<9&&(i=6),t(".md-objects",J).css(_.width()<s.width?{"font-size":_.width()/s.width*100-i+"%"}:{"font-size":100-i+"%"})}function D(){t(".md-objects div.md-object",J).each(_.width()<s.width&&s.responsive?function(){var i=_.width()/s.width,e=t(this),a={};e.data("paddingtop")&&(a["padding-top"]=e.data("paddingtop")*i),e.data("paddingright")&&(a["padding-right"]=e.data("paddingright")*i),e.data("paddingbottom")&&(a["padding-bottom"]=e.data("paddingbottom")*i),e.data("paddingleft")&&(a["padding-left"]=e.data("paddingleft")*i),t("> a",e).length?t("> a",e).css(a):e.css(a)}:function(){var i=t(this),e={};i.data("paddingtop")&&(e["padding-top"]=i.data("paddingtop")),i.data("paddingtop")&&(e["padding-top"]=i.data("paddingtop")),i.data("paddingright")&&(e["padding-right"]=i.data("paddingright")),i.data("paddingbottom")&&(e["padding-bottom"]=i.data("paddingbottom")),i.data("paddingleft")&&(e["padding-left"]=i.data("paddingleft")),t("> a",i).length?t("> a",i).css(e):i.css(e)})}function X(){if(s.showThumb&&!s.showBullet){var t=J.data("thumb-height");if("1"==s.posThumb){var i=t/2;_.find(".md-thumb").css({height:t+10,bottom:-i-10}),_.css({"margin-bottom":i+10})}else _.find(".md-thumb").css({height:t+10,bottom:-(t+40)}),_.css({"margin-bottom":t+50})}}function W(t){var i=new Image;i.src=t;var e={height:i.height,width:i.width};return e}var M={className:"md-slide-wrap",itemClassName:"md-slide-item",transitions:"strip-down-left",transitionsSpeed:800,width:990,height:420,responsive:!0,fullwidth:!0,styleBorder:0,styleShadow:0,posBullet:2,posThumb:1,stripCols:20,stripRows:10,slideShowDelay:6e3,slideShow:!0,loop:!1,pauseOnHover:!1,showLoading:!0,loadingPosition:"bottom",showArrow:!0,showBullet:!0,videoBox:!1,showThumb:!0,enableDrag:!0,touchSensitive:50,onEndTransition:function(){},onStartTransition:function(){}};s=t.extend({},M,s);var z,E,j,_,P,U,A,Y,H,q,F,Q,N,G,J=t(this),K=[],V=-1,Z=0,$=!0,ti=0,ii=!1,ei=!1,si=0,ai=!1,ni=!1,oi=0;t(document).ready(function(){a()})},t.fn.reverse=[].reverse;var s=function(t,i,e){this.m_pfnPercent=i,this.m_pfnFinished=e,this.m_nLoaded=0,this.m_nProcessed=0,this.m_aImages=new Array,this.m_nICount=t.length;for(var s=0;s<t.length;s++)this.Preload(t[s])};s.prototype={Preload:function(t){var i=new Image;this.m_aImages.push(i),i.onload=s.prototype.OnLoad,i.onerror=s.prototype.OnError,i.onabort=s.prototype.OnAbort,i.oImagePreload=this,i.bLoaded=!1,i.source=t,i.src=t},OnComplete:function(){this.m_nProcessed++,this.m_nProcessed==this.m_nICount?this.m_pfnFinished():this.m_pfnPercent(Math.round(this.m_nProcessed/this.m_nICount*10))},OnLoad:function(){this.bLoaded=!0,this.oImagePreload.m_nLoaded++,this.oImagePreload.OnComplete()},OnError:function(){this.bError=!0,this.oImagePreload.OnComplete()},OnAbort:function(){this.bAbort=!0,this.oImagePreload.OnComplete()}},t.fn.mdvideobox=function(i){t(this).each(function(){function e(){if(0==t("#md-overlay").length){var i=t('<div id="md-overlay" class="md-overlay"></div>').hide().click(s),e=t('<div id="md-videocontainer" class="md-videocontainer"><div id="md-video-embed"></div><div class="md-description clearfix"><div class="md-caption"></div><a id="md-closebtn" class="md-closebtn" href="#"></a></div></div>');e.css({width:c.initialWidth+"px",height:c.initialHeight+"px",display:"none"}),t("#md-closebtn",e).click(s),t("body").append(i).append(e)}o=t("#md-overlay"),d=t("#md-videocontainer"),h=t("#md-video-embed",d),r=t(".md-caption",d),p.click(a)}function s(){return o.fadeTo("fast",0,function(){t(this).css("display","none")}),h.html(""),d.hide(),!1}function a(){c.click.call(),o.css({height:t(window).height()+"px"});var i=t(window).height()/2-c.initialHeight/2,e=t(window).width()/2-c.initialWidth/2;return d.css({top:i,left:e}).show(),h.css({background:"#fff url(css/loading.gif) no-repeat center",height:c.contentsHeight,width:c.contentsWidth}),o.css("display","block").fadeTo("fast",c.defaultOverLayFade),r.html(u),h.fadeIn("slow",function(){n()}),!1}function n(){h.css("background","#fff"),l='<iframe src="'+m+'" width="'+c.contentsWidth+'" height="'+c.contentsHeight+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',h.html(l)}var o,d,r,h,l,c=t.extend({initialWidth:640,initialHeight:400,contentsWidth:640,contentsHeight:350,defaultOverLayFade:.8,click:function(){}},i),p=t(this),m=p.attr("href"),u=p.attr("title");e()})}}(jQuery);