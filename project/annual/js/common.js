/* 비동기 통신 */
var commonAjaxResultVal = null;

//sendType = get | post
//asyncType = false | true

function sendAjax(url, sendData, sendType, asyncType){
	commonAjaxResultVal = null;
	$.ajax({
        url:url,
        type:sendType,
        async: asyncType,
        dataType:'json',
        data:sendData,
        success:function(res){
			
			commonAjaxResultVal	= res;
			
        }    
    });
    
} //function ajax


function fileFormSendAjax(formIndex, formId){

		commonAjaxResultVal = null;
		 var form = $('form')[formIndex];
     var formData = new FormData(form);
     $.ajax({
        url: $('#'+formId).attr('action'),
        processData: false,
        contentType: false,
        data: formData,
        type: 'POST',
        async: false,
    		dataType:'json',
        success: function(res){
            commonAjaxResultVal	= res;
        }
    });



}

function logout(){
	sendAjax("http://komca.itbob.co.kr/new_match/php/logout.php", null, "post", false);
	if(commonAjaxResultVal.result == "success"){
		location.href = "http://komca.itbob.co.kr/new_match/";
	} else {
		alert(commonAjaxResultVal.msg);
		return false;
	}	
	
}

