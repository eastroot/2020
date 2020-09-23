function logOut()
{
	if (!confirm("로그아웃 하시겠습니까?")) return;
	
	var result = logOut_proc();
	
	if(!result)
	{
		return false;
	} 
	else 
	{
		alert("정상적으로 로그아웃 되었습니다.");
		location.href="/html/mInfo/login.html.php";
	}	
}