function chn_pass()
{
	if(!$('#m_pass').val())
	{
		alert('현재 비밀번호를 입력하세요.');
		$('#m_pass').focus();
		return;
	}
	if(!$('#new_pass').val())
	{
		alert('새로운 비밀번호를 입력하세요');
		$('#new_pass').focus();
		return;
	}
	if(!$('#new_pass_chk').val())
	{
		alert('새로운 비밀번호를 확인해주세요.');
		$('#new_pass_chk').focus();
		return;
	}
	if ($('#new_pass').val() != $('#new_pass_chk').val())
	{
		alert("새로 입력한 비밀번호가 일치하지 않습니다.");	
		$('#new_pass_chk').val("");
		$('#new_pass_chk').focus();
		return;
	}
	
	var result = passSend($('#passForm'));
	
	if (result == 1)
	{
		$('#m_pass').val("");
		$('#new_pass').val("");
		$('#new_pass_chk').val("");
		return;
	}
	else if (result == 2)
	{
		$('#m_pass').focus();
		return;
	}
	else if (result == 3)
	{
		return;
	}
	
	
}