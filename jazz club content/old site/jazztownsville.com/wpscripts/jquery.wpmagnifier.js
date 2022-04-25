(function($){$.fn.magnifier=function(klass){var mx,my;function clamp(a,b,c){return Math.max(b,Math.min(c,a));}function getDataFloat(e,name,defaultValue){if(isNaN(parseFloat($(e).data(name))))return defaultValue;return parseFloat($(e).data(name));}function getMagnifierImage(e){return $("#"+$(e).data("image"))[0];}$(this).each(function(){var eLarge=getMagnifierImage(this);if(eLarge){var url=$(eLarge).css("background-image");url=url.match(/^url\("?(.+?)"?\)$/);if(url[1]){if(this){eLarge.m_zoom=getDataFloat(this,"initial-zoom",1.0);eLarge.m_zoomMin=getDataFloat(this,"min-zoom",1.0);eLarge.m_zoomMax=getDataFloat(this,"max-zoom",10.0);eLarge.m_fadeSpeed=getDataFloat(this,"fade-speed",200.0);}var img=new Image();$(img).load(function(){eLarge.m_width=img.width;eLarge.m_height=img.height;});img.src=url[1];}}});function mouseMove(e,x,y){var eLarge=getMagnifierImage(e);if(eLarge){var rx=x/$(e).innerWidth();var ry=y/$(e).innerHeight();var lx=eLarge.m_width*eLarge.m_zoom*rx;var ly=eLarge.m_height*eLarge.m_zoom*ry;var px=lx-$(eLarge).innerWidth()/2;var py=ly-$(eLarge).innerHeight()/2;px=clamp(px,0,eLarge.m_width*eLarge.m_zoom-$(eLarge).innerWidth());py=clamp(py,0,eLarge.m_height*eLarge.m_zoom-$(eLarge).innerHeight());var bgp=-px+"px "+-py+"px";$(eLarge).css({backgroundPosition:bgp});$(eLarge).css("background-size",eLarge.m_width*eLarge.m_zoom+"px "+eLarge.m_height*eLarge.m_zoom+"px");}}$(this).mousemove(function(e){var lb=parseInt($(this).css("border-left"),10);var tb=parseInt($(this).css("border-top"),10);mx=e.pageX-$(this).offset().left-(isNaN(lb)?0:lb);my=e.pageY-$(this).offset().top-(isNaN(tb)?0:tb);mouseMove(this,mx,my);});$(this).mouseenter(function(e){var eLarge=getMagnifierImage(this);if(eLarge){$(eLarge).stop();$(eLarge).fadeIn(eLarge.m_fadeSpeed);}$(this).css('cursor','crosshair');});$(this).mouseleave(function(e){var eLarge=getMagnifierImage(this);if(eLarge){$(eLarge).stop();$(eLarge).fadeOut(eLarge.m_fadeSpeed);}$(this).css('cursor','auto');});$(this).bind("mousewheel DOMMouseScroll",function(e){if($(this).data("zoom")===true){var eLarge=getMagnifierImage(this);if(eLarge){var delta=e.type==='DOMMouseScroll'?-e.originalEvent.detail:e.originalEvent.wheelDelta;if(delta/120>0){eLarge.m_zoom=clamp(eLarge.m_zoom*1.1,eLarge.m_zoomMin,eLarge.m_zoomMax);}else{eLarge.m_zoom=clamp(eLarge.m_zoom/1.1,eLarge.m_zoomMin,eLarge.m_zoomMax);}mouseMove(this,mx,my);return false;}}});};}(jQuery));