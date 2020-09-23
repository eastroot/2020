
/*
$(document).ready(function()
{
	if(getCookie("itbob_id") != "")
	{
		document.getElementById("m_id").value = getCookie("itbob_id");
		document.getElementById("m_id").focus();
		document.getElementById("m_pass").focus();
		document.getElementById("save_id").checked = true;
	}
});


function getCookie(Name) 
{
	var search = Name + "="
	if (document.cookie.length > 0) 
	{ 
		// 쿠키가 설정되어 있다면
		offset = document.cookie.indexOf(search)
		if (offset != -1) 
		{	 
			// 쿠키가 존재하면
			offset += search.length
			// set index of beginning of value
			end = document.cookie.indexOf(";", offset)
			// 쿠키 값의 마지막 위치 인덱스 번호 설정
			if (end == -1)
				end = document.cookie.length
			return unescape(document.cookie.substring(offset, end))
		}
	}
	return "";
}


function setCookie (name, value, expires) 
{
	document.cookie = name + "=" + escape (value) +"; path=/; expires=" + expires.toGMTString();
}

*/	

function frmSubmit()
{
	
	/*
	var expdate = new Date();
	if(document.getElementById("save_id").checked == true)
	{
		expdate.setTime(expdate.getTime() + 1000 * 3600 * 24 * 30);
		setCookie("itbob_id", $("#f_userid").val(), expdate);
	}
	else
	{
		setCookie("itbob_id", "", expdate);	
	}
	*/

	if(!$('#f_userid').val()){
		alert('아이디를 입력하세요');
		$('#f_userid').focus();
		return false;
	}

	if(!$('#f_passwd').val()){
		alert('패스워드를 입력하세요');
		$('#f_passwd').focus();
		return false;
	}
	var result = frmSend($('#frmLogin'));
//console.log("result = " + result);	
	
	if(!result)
	{
		alert("실패");
		self.location.reload();
		//$('#f_userid').val("");
		$('#f_passwd').val("");
		$('#f_passwd').focus();
	} 
	else 
	{
		//alert("성공");
		alert("로그인 되었습니다.");
		location.href="/html/anuual_employees.php";
	}

//	$('#frmLogin').submit();
}