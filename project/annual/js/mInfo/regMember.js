function reg_Member()
{
	//#M_id
	//#M_pass
	//#M_pass_chk
	//#M_Name
	//#deptName
	//#M_rank
	
	if(!$('#M_id').val())
	{
		alert('아이디를 입력하세요.');
		$('#M_id').focus();
		return;
	}
	if(!$('#M_pass').val())
	{
		alert('비밀번호를 입력하세요.');
		$('#M_pass').focus();
		return;
	}
	if(!$('#M_pass_chk').val())
	{
		alert('비밀번호 확인을 입력하세요.');
		$('#M_pass_chk').focus();
		return;
	}
	if(!$('#M_Name').val())
	{
		alert('이름을 입력하세요.');
		$('#M_Name').focus();
		return;
	}
	if($('#deptName > option:selected').val() == "0")
	{
		alert('부서를 선택하세요.');
		
		return;
	}
	if($('#M_rank > option:selected').val() == "0")
	
	{
		alert('직급을 선택하세요.');
	
		return;
	}
	if($('#M_pass').val() != $('#M_pass_chk').val())
	{
		alert("비밀번호가 일치하지 않습니다.");
		$('#M_pass_chk').val("");
		$('#M_pass_chk').focus();
		return;
	}
	
	
	var result = M_RegSend($('#RegMemberForm'));
	
	if (result == 1)
	{
		$('#M_id').val("");
		$('#m_pass').val("");
		$('#M_pass_chk').val("");
		$('#M_Name').val("");
		$('#deptName').val("");
		$('#M_rank').val("");
		location.reload();
		return;
	}
	else if (result == 2)
	{
		$('#m_pass').focus();
		return;
	}
	else if (result == 3)
	{
		alert('저장에 실패했습니다.');
		return;
	}
	else if(result == 4)
	{
		alert('이미 사용중인 아이디입니다.');
		$('#M_id').focus();
		return;
	}
	
}
