
	
	// 한글 문자 반모음 (ㄱ) 체크
	function isKoreanCharHalf(chr)
	{
		chr = chr.charCodeAt(0);
		if ((chr >= 0x3130) && 
			(chr <= 0x318F))
			return true;

		return false;
	}

	// 한글 문자 완성본 (가) 체크
	function isKoreanCharFull(chr)
	{ 
		chr = chr.charCodeAt(0);
		if ((chr >= 0xAC00) && 
			(chr <= 0xD7AF))
			return true;

		return false;
	}
	
	// 한글 문자열인지 체크
	function isKorean(str)
	{ 
		for (var i = 0; i < str.length; i++)
			if (isKoreanCharHalf(str.substring(i,i+1)) || 
				!isKoreanCharFull(str.substring(i,i+1)))
				return false;

		return true;
	}
		
	function checkString(str1, str2)
	{
		if (str1.indexOf("|")==-1)
			str1 += "|";
		
		var arr = str1.split("|");
		var usekor = false;
		var chk = "";
		
		for (var i=0; i<arr.length; i++)
		{
			if (arr[i]=="english")
				chk += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
			else if (arr[i]=="number")
				chk += "0123456789";
			else if (arr[i]=="korean")
				usekor = true;
			else
				chk += arr[i];
		}
		
		for (var i = 0; i < str2.length; i++)
		{
			var ch = str2.substring(i, i + 1);
			if (chk.indexOf(ch) < 0)
			{
				if (!usekor)
					return false;
				else if (!isKoreanCharFull(ch))
					return false;
			}
		}

		return true;
	}
	
	// 길이 초과 미만 체크
	function checkLength(str, min_len, max_len)
	{
		var len = getByteLen(str);
		
		if (len<min_len || len>max_len )
			return true;
		
		return false;		
	}
	
	function autoCutStr(obj, maxLen)
	{
		var str = obj.value;
		var byteSize = 0;
		var cutLen = 0;
		
		for (var i=0; i<str.length; i++)
		{
			var ch = str.charAt(i);
			byteSize += (escape(ch).length > 4) ? 2 : 1;
		
			if (byteSize<=maxLen)
				cutLen = i + 1;
		}
		
		if (byteSize > maxLen)
		{
			obj.disabled = true;
			var temp = str.substr(0, cutLen);
			obj.value = temp;
			obj.disabled = false;
		}
		
		try
		{
			obj.focus();
		}
		catch(err){}
		
		return getByteLen(obj.value);// (byteSize > maxLen) ? maxLen : byteSize;
	}
	
	function getByteLen(str)
	{
		var  byteSize = 0
		for (var i=0; i<str.length; i++)
		{
			var ch = str.charAt(i);
			byteSize += (escape(ch).length > 4) ? 2 : 1;
		}	
		
		return byteSize;
	}

	function install_autoCutStr(obj_id, span_id, max_len)
	{
		$('#' + obj_id).keyup( function(e) {
			var len = autoCutStr(this, max_len);
			$('#' + span_id).html(len);
		});

		$('#' + obj_id).keypress( function(e) {
			var len = autoCutStr(this, max_len);
			$('#' + span_id).html(len);
		});

		$('#' + obj_id).keydown( function(e) {
			var len = autoCutStr(this, max_len);
			$('#' + span_id).html(len);
		});
		
		var len = autoCutStr($('#' + obj_id).get(0), max_len);
		$('#' + span_id).html(len);
	}
	
	function systemKey(ch)
	{
		switch(ch)
		{
			case 8:	return true;	// Back Space
			case 9:	return true;	// Tab
			case 13:	return true;	// Enter
			case 16:	return true;	// Shift
			case 17:	return true;	// Control
			case 18:	return true;	// Alt
			case 19:	return true;	// Pause / Break
			case 20:	return true;	// Caps Lock
			case 27:	return true;	// ESC
			case 32:	return true;	// Space
			case 33:	return true;	// Page Up
			case 34:	return true;	// Page Down
			case 35:	return true;	// End
			case 36:	return true;	// Home
			case 37:	return true;	// Left
			case 38:	return true;	// Up
			case 39:	return true;	// Right
			case 40:	return true;	// Down
			case 45:	return true;	// Insert
			case 46:	return true;	// Delete
			case 144:	return true;	// Num Lock
			case 145:	return true;	// Scroll Lock
		}
		
		return false;
	}
	
	function checkStringASCII(str, ch)
	{
		if (str.indexOf("|")==-1)
			str += "|";
		
		var arr = str.split("|");
		var usekor = false;
		var chk = "";
		
		for (var i=0; i<arr.length; i++)
		{
			if (arr[i]=="korean") continue;
			
			if (arr[i]=="english")
				chk += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
			else if (arr[i]=="number")
				chk += "0123456789";
			else
				chk += arr[i];
		}
		
		for (var i = 0; i < chk.length; i++)
		{
			if (String.fromCharCode(ch)==chk.charAt(i))
			{
				return true;
			}
		}

		return false;
	}
	
	function install_onlyInput(obj_id, strList)
	{
		if (strList.indexOf("korean")==-1)
			$('#' + obj_id).get(0).style.imeMode = "disabled";
			
		if ($.browser.msie || $.browser.safari)
		{
			$('#' + obj_id).keypress( function(event) {
				if (!checkStringASCII(strList, event.keyCode))
				{
					event.returnValue=false;
					return false;
				}
			});
		}
		else
		{
			$('#' + obj_id).keypress(function(event) {
				if (!systemKey(event.keyCode) && !checkStringASCII(strList, event.charCode))
				{
					event.returnValue=false;
					return false;
				}
			});
		}
	}
	
	function install_checkEnter(obj_id, num)
	{
		if ($.browser.msie || $.browser.safari)
		{
			$('#' + obj_id).keypress( function(event) {
				if (event.keyCode==13)
				{
					var str = this.value;

					var idx = str.indexOf("\n");
					
					if (idx!=-1)
					{
						for (var i=1; i<num-1; i++)
						{
							idx = str.indexOf("\n", idx+1);
							if (idx==-1) break;
						}
						
						if (i>=num-1)
						{
							alert('줄바꿈은 ' + num + '번까지만 가능합니다.');
							event.returnValue = false;
							return false;
						}
					}
				}
			});
		}
		else
		{
			$('#' + obj_id).keypress(function(event) {
				if (event.keyCode==13)
				{
					var str = this.value;
					
					var idx = str.indexOf("\n");
					
					if (idx!=-1)
					{
						for (var i=1; i<num-1; i++)
						{
							idx = str.indexOf("\n", idx+1);
							if (idx==-1) break;
						}
						
						if (i>=num-1)
						{
							alert('줄바꿈은 ' + num + '번까지만 가능합니다.');
							event.returnValue = false;
							return false;
						}
					}
				}
			});
		}
	}
	
	function changeBorderColor(obj, val)
	{
		obj.style.borderColor = val;
	}
	
	function install_hookKeyPress(obj_id, strList, func)
	{
		if (!func) return;
		
		if (strList.indexOf("korean")==-1)
			$('#' + obj_id).get(0).style.imeMode = "disabled";
			
		if ($.browser.msie || $.browser.safari)
		{
			$('#' + obj_id).keypress( function(event) {
				if (strList!="all")
				{
					if (!checkStringASCII(strList, event.keyCode))
					{
						event.returnValue=false;
						return false;
					}
				}
				
				try
				{
					func(String.fromCharCode(event.keyCode));
				}
				catch(err){}
			});
		}
		else
		{
			$('#' + obj_id).keypress(function(event) {
				if (strList!="all")
				{
					if (!systemKey(event.keyCode) && !checkStringASCII(strList, event.charCode))
					{
						event.returnValue=false;
						return false;
					}
				}
				
				try
				{
					func(String.fromCharCode(event.charCode));
				}
				catch(err){}
			});
		}
	}
	
	/*
	function install_onlyNumber(obj_id)
	{
		$('#' + obj_id).get(0).style.imeMode = "disabled";
		if ($.browser.msie || $.browser.safari)
		{
			$('#' + obj_id).keypress( function(event) {
				if((event.keyCode<48)||(event.keyCode>57))
				{
					event.returnValue=false;
					return false;
				}
			});
		}
		else
		{
			$('#' + obj_id).keydown( function(event) {
				if((event.keyCode<48)||(event.keyCode>57))
				{
					event.returnValue=false;
					return false;
				}
			});			
		}
	}
	
	function install_onlyNumber2Number(obj_id)
	{
		$('#' + obj_id).get(0).style.imeMode = "disabled";
		if ($.browser.msie || $.browser.safari)
		{
			$('#' + obj_id).keypress( function(event) {
				if((event.keyCode!=126) && ((event.keyCode<48)||(event.keyCode>57)))
				{
					event.returnValue=false;
					return false;
				}
			});
		}
		else
		{
			$('#' + obj_id).keydown( function(event) {
				if((event.keyCode!=126) && ((event.keyCode<48)||(event.keyCode>57)))
				{
					event.returnValue=false;
					return false;
				}
			});
		}
	}
	
	function install_onlyEnglish(obj_id)
	{
		$('#' + obj_id).get(0).style.imeMode = "disabled";
		if ($.browser.msie || $.browser.safari)
		{
			$('#' + obj_id).keypress( function(event) {
				if((event.keyCode>=97)&&(event.keyCode<=122)) {}
				else if((event.keyCode>=65)&&(event.keyCode<=90)) {}
				else
				{
					event.returnValue=false;
					return false;
				}
			});
		}
		else
		{
			$('#' + obj_id).keydown( function(event) {
				if((event.keyCode>=97)&&(event.keyCode<=122)) {}
				else if((event.keyCode>=65)&&(event.keyCode<=90)) {}
				else
				{
					event.returnValue=false;
					return false;
				}
			});
		}
	}
	*/