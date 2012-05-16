(function($){var initHeight=null;var initWidth=null;$.schoolSuggest=function(input,options){var $input=$(input).attr("autocomplete","off");var $results;var timeout=false;var prevLength=0;var cache=[];var cacheSize=0;if(!options.attachObject){options.attachObject=$(document.createElement("ul")).appendTo("body");}$results=$(options.attachObject);$results.addClass(options.resultsClass);resetPosition();$(window).load(resetPosition).resize(resetPosition);$(document).click(function(event){if(event.target==input){return;}setTimeout(function(){$results.hide();},200);if($.trim($(input).val())!=""&&$.trim($(options.dataContainer).val())!=""){}else{if($.trim($input.val())=="简码/汉字"){}else{$(input).val("");$(options.dataContainer).val("");}}});$input.focus(function(){if($.trim($(this).val())=="请输入"){$(this).val("").css("color","#000");}if($.trim($(this).val())==""){displayItems("");}});$input.click(function(event){$(this).val("");$(options.dataContainer).val("");var q=$.trim($(this).val());displayItems(q);$(this).select();});$input.blur(function(){var q=$.trim($(this).val());if(q!=""){var reg=new RegExp("^.*"+q+".*$","im");for(var i=0;i<options.source.length;i++){if(reg.test(options.source[i].chineseName)||reg.test(options.source[i].allPin)||reg.test(options.source[i].simplePin)){$(options.dataContainer).val(options.source[i].stationTelecode);$input.val(options.source[i].chineseName);break;}}}});$input.keyup(processKey);function resetPosition(){var offset=$input.offset();$results.css({top:(offset.top+input.offsetHeight)+"px",left:offset.left+"px"});}function processKey(e){if((/27$|38$|40$/.test(e.keyCode)&&$results.is(":visible"))||(/^13$|^9$/.test(e.keyCode)&&getCurrentResult())){if(e.preventDefault){e.preventDefault();}if(e.stopPropagation){e.stopPropagation();}e.cancelBubble=true;e.returnValue=false;switch(e.keyCode){case 38:prevResult();break;case 40:nextResult();break;case 13:selectCurrentResult();break;case 27:$results.hide();break;}}else{if($input.val().length!=prevLength){if(timeout){clearTimeout(timeout);}timeout=setTimeout(suggest,options.delay);prevLength=$input.val().length;}}}function suggest(){$input.val($input.val().toUpperCase());var q=$.trim($input.val());displayItems(q);}function displayItems(items){$results.empty();var html="";if(items==""){for(h in options.hot_list){html+='<li  stationtelecode="'+options.hot_list[h].stationTelecode+'"><a href="#'+h+'">'+options.hot_list[h].chineseName+"</a></li>";if(h>15){break;}}html='<div class="gray ac_result_tip">输入或选择 </div><ul>'+html+"</ul>";}else{for(var i=0;i<options.source.length;i++){var reg=new RegExp("^"+items+".*$","im");if(reg.test(options.source[i].chineseName)||reg.test(options.source[i].allPin)||reg.test(options.source[i].simplePin)){html+='<li  stationtelecode="'+options.hot_list[i].stationTelecode+'"><a href="#'+i+'" >'+options.source[i].chineseName+"</a></li>";}}if(html==""){suggest_tip='<div class="gray ac_result_school_tip">对不起，找不到：'+items+"</div>";}else{suggest_tip='<div class="gray ac_result_tip">输入或选择</div>';}html=suggest_tip+"<ul>"+html+"</ul>";}$results.html(html).show();$results.children("ul").children("li:first-child").addClass(options.selectClass);$results.children("ul").children("li").mouseover(function(){$results.children("ul").children("li").removeClass(options.selectClass);$(this).addClass(options.selectClass);}).click(function(e){e.preventDefault();e.stopPropagation();selectCurrentResult();});try{$results.bgiframe();if($results.width()>$("> ul",$results).width()){$results.css("overflow","hidden");}else{$("> iframe.bgiframe",$results).width($("> ul",$results).width());$results.css("overflow","scroll");}if($results.height()>$("> ul",$results).height()){$results.css("overflow","hidden");}else{$("> iframe.bgiframe",$results).height($("> ul",$results).height());$results.css("overflow","scroll");}if($("> iframe.bgiframe",$results).length>0){if(!initWidth){initWidth=$results.width();}if(!initHeight){initHeight=$results.height();}$results.width(initWidth+18);$results.height(initHeight+15);}}catch(e){}}function getCurrentResult(){if(!$results.is(":visible")){return false;}var $currentResult=$results.children("ul").children("li."+options.selectClass);if(!$currentResult.length){$currentResult=false;}return $currentResult;}function selectCurrentResult(){$currentResult=getCurrentResult();if($currentResult){$input.val($currentResult.children("a").html().replace(/<span>.+?<\/span>/i,""));$results.hide();if($(options.dataContainer)){$(options.dataContainer).val($currentResult.attr("stationtelecode"));}if(options.onSelect){options.onSelect.apply($input[0]);}}}function nextResult(){$currentResult=getCurrentResult();if($currentResult){$currentResult.removeClass(options.selectClass).next().addClass(options.selectClass);}else{$results.children("ul").children("li:first-child").addClass(options.selectClass);}}function prevResult(){$currentResult=getCurrentResult();if($currentResult){$currentResult.removeClass(options.selectClass).prev().addClass(options.selectClass);}else{$results.children("ul").children("li:last-child").addClass(options.selectClass);}}};$.fn.schoolSuggest=function(source,options){if(!source){return;}options=options||{};options.source=source;options.hot_list=options.hot_list||[];options.delay=options.delay||0;options.resultsClass=options.resultsClass||"ac_results";options.selectClass=options.selectClass||"ac_over";options.matchClass=options.matchClass||"ac_match";options.minchars=options.minchars||1;options.delimiter=options.delimiter||"\n";options.onSelect=options.onSelect||false;options.dataDelimiter=options.dataDelimiter||"\t";options.dataContainer=options.dataContainer||"#SuggestResult";options.attachObject=options.attachObject||null;this.each(function(){new $.schoolSuggest(this,options);});return this;};})(jQuery);