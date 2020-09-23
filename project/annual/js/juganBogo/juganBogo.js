function frmSubmit(dept_code , my_code , m_id)
{
	if (m_id != 'ks.bang@ilv.co.kr' && m_id != 'ys.park@ilv.co.kr' && m_id != 'ms.woo@ilv.co.kr' && m_id != 'ih.jun@ilv.co.kr' && m_id != 'jh.baek@ilv.co.kr')
	{
		alert("쓰기권한이 없습니다.");	
		return;
	}
	if (dept_code != my_code)
	{
		alert("쓰기권한이 없습니다.");	
		return;
	}
	
	var result = frmSend($('#frm'+dept_code));
	
	if(!result)
	{
		return false;
	} 
	else 
	{
		alert("등록하신 정보로 변경되었습니다.");
		location.reload();
		return true;
	}
}


function ceo_com(jucha_code)
{
	var url = "/html/juganBogo/ceoComment.html.php?jucha_code="+jucha_code;
	var opt = "width=480, height=430, resizable=no, scrollbars=no, status=no;";
	
	window.open(url , "" , opt);
}


function preView(jucha_code , now_code , dept_code)
{
	if (dept_code != '01' && dept_code != '05')
	{
		alert('권한이 없습니다.');	
		return;
	}
	
	if (now_code <= jucha_code)
	{
		alert("아직 현재 주차의 보고가 완료되지 않아 생성할 수 없습니다.");	
		return;
	}
	
	var url = "/html/juganBogo/preView.html.php?juchaCode="+jucha_code;
	var opt = "width=800, height=1200, top=50 , left=400 , resizable=no, scrollbars=yes, status=no;";
	
	window.open(url , "" , opt);
}

$(document).ready(function()
{
	var icon = document.getElementById("icon");
	var badge = new IOSBadge(icon , {theme : 'red' , size : 22 , position : "top-left"});
	badge.setContent('new');
	if (!$("#ceoCommentHide").val())
		badge.hide();
	var stat = $("#bogoStatus").val();
	
	if (stat == 'Y')// db의 stat필드의 레코드가 Y 일때 readonly로 바꿔 수정은 못하지만 스크롤가능하게 변경
	{
		$(".statBtn").hide();
		//$("textarea").attr("disabled", true);
		$("textarea").attr("readonly", true);//disabled를 readonly로 바꿔 수정은못하지만 스크롤가능하게 변경
	}
	
	var m_id = $("#m_id").val();
	if (m_id != 'ks.bang@ilv.co.kr' && m_id != 'ys.park@ilv.co.kr' && m_id != 'ms.woo@ilv.co.kr' && m_id != 'ih.jun@ilv.co.kr' && m_id != 'jh.baek@ilv.co.kr')
	{
		$("textarea").attr("readonly" , true);
	}
});