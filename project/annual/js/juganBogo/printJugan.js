function frmSubmit(juchaCode)
{
	if (!confirm("생성후에는 해당 주차의 내용을 수정할수 없습니다.\n계속하시겠습니까?")) return;
	
	var result = frmSend($('#frm'));
	
	if(!result)
	{
		return false;
	} 
	else 
	{
		$("#btnDiv").hide();
		window.print();
		$("#btnDiv").show();
		return true;
	}
}

