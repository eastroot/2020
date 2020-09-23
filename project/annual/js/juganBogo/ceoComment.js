function frmSubmit()
{
	//alert(dept_code);
	var result = frmSend($('#frm'));
	
	
	if(!result)
	{
		return false;
	} 
	else 
	{
		alert("등록하신 정보로 변경되었습니다.");
		self.close();
		opener.location.reload();
	}
}