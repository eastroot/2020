/**
 * 파일업로드
 * @param object obj_form
 * @param string subpath
 * @param string obj_name
 * @param number rnum
 * @param object obj_filename
 * @param object obj_filepath
 * @return void
 */

function file_uplode(obj_form, subpath, obj_name, rnum, obj_filename, obj_filepath) {


/*alert($(obj_form).serialize());
console.log(obj_form);	
console.log(subpath);		
console.log(obj_name);	
console.log(rnum);			
console.log(obj_filename);
console.log(obj_filepath);*/


var base_url = $('#ajax_comm').attr("base_url");

	$(obj_form).ajaxForm({ 
		type : "post",
		async : true,
		url : "/ajax/upload/file_upload/"+subpath+"/"+obj_name+"/"+rnum,
		dataType : "json",
		success : function(jsondata) {
			
			if(jsondata.result == 'ok') {
				
				// & 가 들어갈 시 Disallowed Key Characters 에러가 나서 처리. 20150107 & 자체를  리플레이스 : 김국선
				
				var filename = jsondata.filename.replace('&', '');
				
				if(obj_filename)
					obj_filename.val(filename);
				if(obj_filepath)
					obj_filepath.val(jsondata.filepath);
				
				if(subpath == "bbs_img")
				{
					var filepatch = jsondata.filepath.replace('/fkmp/web/cms/', base_url);
					img = "<br><img src='"+filepatch+"'>";
					pasteHTMLDemo(img);	
				}		
				
				if (subpath=="dna_meta" || subpath=="dna_meta_file")
				{
					alert("OK");
				}
				
			} else {
				alert(jsondata.result);
			}
		},
		beforeSend : null,
		error : function(x, o, e) {
			
			alert('파일 업로드를 실패했습니다.<BR>' + x.status + " : "+ o +" : "+e);
		}
	}).submit();


	
}


/**
 * 파일업로드
 * @param object obj_form
 * @param string subpath
 * @param string obj_name
 * @param number rnum
 * @param object obj_filename
 * @param object obj_filepath
 * @return void
 */

function file_uplode_s(obj_form, subpath, obj_name, obj_filename, obj_filepath) {
//	alert("/ajax/upload/file_upload_single/"+subpath+"/"+obj_name);
	$(obj_form).ajaxForm({ 
		type : "post",
		async : true,
		url : "/ajax/upload/file_upload_single/"+subpath+"/"+obj_name,
		dataType : "json",
		success : function(jsondata) {

//alert(jsondata.result);			
			if (jsondata.result == 'ok') {
				/*
				if(obj_filename)
					$(obj_filename).val(jsondata.filename);
				if(obj_filepath)
					$(obj_filepath).val(jsondata.filepath);
				
				*/
				
				// & 가 들어갈 시 Disallowed Key Characters 에러가 나서 처리. 20150107 & 자체를  리플레이스 : 김국선
				
				var filename = jsondata.filename.replace('&', '');
				
//				if(obj_filename)
					$("#"+obj_filename).val(filename);
//				if(obj_filepath)
					$("#"+obj_filepath).val(jsondata.filepath);
			} else {
				alert(jsondata.result);
			}
		},
		beforeSend : null,
		error : function(x, o, e) {
			alert('파일 업로드를 실패했습니다.<BR>' + x.status + " : "+ o +" : "+e);
		}
	}).submit();
}

function file_uplode_song(obj_form, subpath, obj_name, obj_filename, obj_filepath) {
	$(obj_form).ajaxForm({ 
		type : "post",
		async : true,
		url : "/ajax/upload/file_upload_song/"+subpath+"/"+obj_name,
		dataType : "json",
		success : function(jsondata) {
			if (jsondata.result == 'ok') {
				
				// & 가 들어갈 시 Disallowed Key Characters 에러가 나서 처리. 20150107 & 자체를  리플레이스 : 김국선
				var filename = jsondata.filename.replace('&', '');
				
				$("#"+obj_filename).val(filename);
				$("#"+obj_filepath).val(jsondata.filepath);
				go_report();
			} 
			else if (jsondata.result == "filesize_error")
			{
				alert("filesize_error");
				return;
			}
			else if (jsondata.result == "zip_error")
			{
				alert("zip_error");
				return;
			}
			else {
				alert(jsondata.result);
				return;
			}
		},
		beforeSend : null,
		error : function(x, o, e) {
			alert('파일 업로드를 실패했습니다.<BR>' + x.status + " : "+ o +" : "+e);
		}
	}).submit();
}

function JSONtoString(object) 
{
  var results = [];
  for (var property in object) 
  {
    var value = object[property];
    if (value)
      results.push(property.toString() + ': ' + value);
  }
  return '{' + results.join(', ') + '}';
}




function file_uplode_hoon(obj_form, subpath, obj_name, rnum, obj_filename, obj_filepath) 
{
	//var obj_s = JSONtoString(obj_form);
	//alert(obj_form.length);
	//return;
//	console.log("obj_form : "+obj_form.f_filename_info);
//	console.log("subpath : "+subpath);
//	console.log("obj_name : "+obj_name);
//	console.log("rnum : "+rnum);
//	console.log("obj_filename : "+obj_filename);
//	console.log("obj_filepath : "+obj_filepath);
//	console.log("\n");
//	return;

	$(obj_form).ajaxForm(
	{ 
		type : "post",
		async : true,
		url : "/ajax/upload/file_upload_hoon/"+subpath+"/"+obj_name+"/"+rnum,
		dataType : "json",
		success : function(jsondata) 
		{
			if (jsondata.result == 'ok') 
			{
				var filename = jsondata.filename.replace('&', '');
				if(obj_filename)
					obj_filename.val(filename);
				if(obj_filepath)
					obj_filepath.val(jsondata.filepath);
			} 
			else 
			{
				alert(jsondata.result);
			}
		},
		beforeSend : null,
		error : function(x, o, e) 
		{
			alert('파일 업로드를 실패했습니다.<BR>' + x.status + " : "+ o +" : "+e);
		}
	}).submit();
}




/**
 * 파일업로드
 * @param object obj_form
 * @param string subpath
 * @param string obj_name
 * @param number rnum
 * @param object obj_filename
 * @param object obj_filepath
 * @return void
 */

function file_uplode_dna_search(obj_form, subpath, obj_name, obj_filename, obj_filepath) {
	
	$(obj_form).ajaxForm({ 
		type : "post",
		async : false,
		url : "/ajax/upload/file_upload_single/"+subpath+"/"+obj_name,
		dataType : "json",
		success : function(jsondata) {
			if (jsondata.result == 'ok') {
				var filename = jsondata.filename.replace('&', '');
				$("#"+obj_filename).val(filename);
				$("#"+obj_filepath).val(jsondata.filepath);
			} else {
				alert(jsondata.result);
			}
		},
		beforeSend : null,
		error : function(x, o, e) {
			alert('파일 업로드를 실패했습니다.<BR>' + x.status + " : "+ o +" : "+e);
		}
	}).submit();
}