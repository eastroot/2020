if (typeof(fkmp) !== 'object') var fkmp = {};

/**
 * fkmp common javascript library
 * @author swg2000@naver.com
 */
(function(){ 
	fkmp.uiData = null;
	fkmp.prcStatus = null;
	fkmp.FAIL_MSG = "FAIL";
	fkmp.SUCCESS_MSG = "TRUE";
	fkmp.UPLOAD_DIR = "/uploads";
	fkmp.STATIC_URL = "<?=$this->config->item('base_url')?>";
	fkmp.TIMEOUT = 3000;
	fkmp.TITLE = "FKMP";
			
	/**
	 * ajax 호출을 위한 메소드
	 * @param string setUrl 호출URL
	 * @param json param 
	 * @param function callback
	 * @return void
	 */
	if(typeof fkmp.setData !== 'function') { 
		fkmp.setData = function(setUrl, param, callback) {
			$.ajax({
				url : setUrl,
				type : "POST",
				timeout : fkmp.TIMEOUT,
				data : 	param,
				success : function(response) {
					if(typeof(callback) == 'function') callback(eval(response));
				},
				error : function(x, o, e) 
				{	
					fkmp.printMsg('서비스에 오류가 발생 했습니다.');
				}
			});
			return;
		}
	}
	
	/**
	 * modal alert window 출력
	 * @param string strMsg 출력 문구
	 * @param string confirmAction 확인버튼 클릭 시 호출되는 메소드명
	 * @return void
	 */
	if(typeof fkmp.printMsg !== 'function') { 
		fkmp.printMsg = function(strMsg, successAction) {
			alert(strMsg);
		}
	}
	
	/**
	 * modal alert window 출력
	 * @param string strMsg 출력 문구
	 * @param string confirmAction 확인버튼 클릭 시 호출되는 메소드명
	 * @return void
	 */
	if(typeof fkmp.msgConfirm !== 'function') {
		fkmp.msgConfirm = function(strMsg, confirmAction)
		{
			/*var paramData = {"id" : "popupMsg"};
			$('body').append(dom.createObject( 'div', paramData, '', '' ));
			
			$('#popupMsg').html( strMsg );
			$('#popupMsg').dialog({
				autoOpen: true,
				title: fkmp.TITLE,
				modal: true,
				width : 400,
				buttons: {
					"확인": function() {
						if(typeof(confirmAction) == 'function') confirmAction();
						$('#popupMsg').remove();
					},
					"취소" : function() {
						$( this ).dialog( "close" );
					}
				}
			});*/
			if(confirm(strMsg) == true) {
				if(typeof(confirmAction) == 'function') confirmAction();
			}
		}
	}

	/**
	 * 메소드 return value 
	 * @param boolean result
	 * @param string msg
	 * @param data string
	 * @return object json data
	 */
	if(typeof fkmp.resultMsg !== 'function') {
		fkmp.resultMsg = function(result, msg, data) {
			var resultData = {'resultType' : true, 'resultMsg' : '', 'result' : ''};
				resultData.result = result;
				resultData.resultMsg = msg;
				resultData.data = data;
			
			return resultData;
		}
	}
	
	/**
	 * 로그인 페이지로 이동
	 * @return void
	 */
	if(typeof fkmp.moveLogin !== 'function') {
		fkmp.moveLogin = function()
		{
			var loginUrl = "/member/login";
			$(location).attr('href', loginUrl);
		}
	}
})();