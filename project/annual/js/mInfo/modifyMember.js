function send_info(){
		//alert('send_info()');
		if(!$('#search_word').val())
		{
			alert('검색어를 입력하세요.');
			return;
		}
		location.href="modifyMember.html.php?option_val="+$('#option_val').val()+"&search_word="+$('#search_word').val();
		return false;
}


function chn_info()
{
	//#M_id
	//#M_Name
	//#M_deptName
	//#M_deptCode
	//#RANK_NAME
	//#RANK_CODE
		
	var result = M_modiSend($('#modifyMemberSet'));
//console.log(result);
return false;

	if (result == 1)
	{
		$('#M_id').val("");
		$('#M_Name').val("");
		$('#M_deptCode').val("");
		$('#RANK_CODE').val("");
		return;
	}
	else if (result == 2)
	{
		
		return;
	}

}
