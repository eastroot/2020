function blankId(id, fieldName){
	
	if ($("#"+id).val() == "")
	{
		$("#msg_alert").html(fieldName + " 필드를 입력하세요");
		$("#modal-alert").modal("show");
		$("#"+id).focus();
		return false;
	}
	else
	{
		return true;
	}
}

function alert_modal(str)
{
	$("#msg_alert").html(str);
	$("#modal-alert").modal("show");
	return false;
}

function file_uplode(obj_form, subpath, obj_name, obj_filename, obj_filepath) {
	
	$(obj_form).ajaxForm({
		type : "post",
		async : false,
		url : "/upload/file_upload/"+subpath+"/"+obj_name,
		dataType : "json",
		success : function(jsondata) {
			if (jsondata.result == 'ok') {
				//alert("파일업로드를 완료하였습니다.");
				// & 가 들어갈 시 Disallowed Key Characters 에러가 나서 처리. 20150107 & 자체를  리플레이스 : 김국선
				var filename = jsondata.filename.replace('&', '');
				$("#"+obj_filename).val(filename);
				$("#"+obj_filepath).val(jsondata.filepath);
					
			} else {
				alert(jsondata.result);
			}
		},
		error : function(x, o, e) {
			alert('파일 업로드를 실패했습니다.<BR>' + x.status + " : "+ o +" : "+e);
		}
	}).submit();
}


function fileUplode(obj_form, subpath, obj_name, obj_filename, obj_filepath, obj_filepath_thum) {
	
	$(obj_form).ajaxForm({
		type : "post",
		async : false,
		url : "/upload/fileUpload/"+subpath+"/"+obj_name,
		dataType : "json",
		success : function(jsondata) {
			if (jsondata.result == 'ok') {
				//alert("파일업로드를 완료하였습니다.");
				// & 가 들어갈 시 Disallowed Key Characters 에러가 나서 처리. 20150107 & 자체를  리플레이스 : 김국선
				var filename = jsondata.filename.replace('&', '');
				$("#"+obj_filename).val(filename);
				$("#"+obj_filepath).val(jsondata.filepath);
				
				if (subpath=="screenshotFile")
					$("#"+obj_filepath_thum).val(jsondata.thumnailpath);
					
			} else {
				alert(jsondata.result);
			}
		},
		error : function(x, o, e) {
			alert('파일 업로드를 실패했습니다.<BR>' + x.status + " : "+ o +" : "+e);
		}
	}).submit();
}
