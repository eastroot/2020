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
		{
			$('#' + obj_id).get(0).style.imeMode = "disabled";
		}
		
		if (window.CSSBS_ie || window.CSSBS_safari)
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
				if (!systemKey(event.keyCode) && !checkStringASCII(strList, event.keyCode))
				{
					event.returnValue=false;
					return false;
				}
			});
		}
	}