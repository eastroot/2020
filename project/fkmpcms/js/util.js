// Flash Activating Script
// 2005-12-05
// inome _at_ nhncorp.com
// Don't Edit Below! Never!

// s: source url
// d: flash id
// w: source width
// h: source height
// al: align
// t: wmode ("" for none, transparent, opaque ...)
function mf(s,d,w,h,t,al){
        return "<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0\" width="+w+" height="+h+" id="+d+" align="+al+"><param name=wmode value="+t+" /><param name=movie value="+s+" /><param name=quality value=high /><param name=menu value=false /><embed src="+s+" quality=high wmode="+t+" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/shockwave/download/index.cgi?p1_prod_version=shockwaveflash\" width="+w+" height="+h+"></embed></object>";
}

// write document contents
function documentwrite(src){
        document.write(src);
}



//iframe 속에서 parent의 제목을 수정하기 위해서 사용
//usage : addTitle('arFields(0,0)')
function addTitle(vStr){
	if (parent.AddTitle.innerHTML == ""){
		parent.AddTitle.innerHTML = parent.AddTitle.innerHTML + vStr;
	} else {
		parent.AddTitle.innerHTML = vStr;
	}
}

function noData() {
	alert('현재 등록된 내역이 없습니다..')
}

function noModify() {
	alert('확인한 기록이 있으므로 수정이나 삭제를 할 수 없습니다..')
}

function idx_del(idx){
	var idx;
	confirmmsg = confirm('정말로 삭제 하시겠습니까?\n\n [확인]을 누르시면 삭제됩니다.');
 	if ( confirmmsg == true  ){
			document.ifm.location.href="pop.delete.act.asp?idx="+idx;
	}
}

function infoDBA(form) {  
		alert("중요 정보 삭제는 시스템관리자에게 문의해 주시기 바랍니다.")
}
 
function callDBA() {
	aa = window.confirm("정말 삭제하시겠습까?");
	if ( aa == true){
		alert('삭제를 원하시면 DBA에게 요청하십시오.')
	}
}

function EnterKeyCheck(e)
{
	if("Netscape" != navigator.appName){ //IE 라면
		if(event.keyCode == 13)
			formSubmit(document.search_form);
	}
}

function convert(nr){
  	var chr;
  	if (nr==10) {
  		chr="A"
  	} else if (nr==11){
  		chr="B"
  	} else if (nr==12){
  		chr="C"
  	} else if (nr==13){
  		chr="D"
  	} else if (nr==14){
  		chr="E"
  	} else if (nr==15){
  		chr="F"
  	} else {
  		chr=nr;
  	}
  	return(chr);
}

/* 공통팝업 */
var popupObj=null;
function openPopup(vUrl,vWidth,vHeight,vScrollBar,vResizable){
	var x=screen.width/2-vWidth/2; 		//창을 화면 중앙으로 위치
	var y=screen.height/2-vHeight/2;

	if (popupObj != null && !popupObj.closed)	popupObj.close();	//popUp을 하나만 남기고 모두다 닫는다
	
	var vCond = 'toolbar=no,location=no,status=no,left='+x+', top='+y+',width='+vWidth+',height='+vHeight+',scrollbars='+vScrollBar+',resizable='+vResizable;
	popupObj = window.open(vUrl,'popupObj',vCond);
	popupObj.window.focus();
}

function openPopMain(qStr,x,y){
	try{
		top.opener._openPopMain(qStr,x,y);
	}catch(e){
		//alert('catch 에서 열림'+e);	
		_openPopMain(qStr,x,y);
	}
}

function _openPopMain(qStr,x,y){
	var vCond = 'toolbar=no,location=no,status=no,left='+x+', top='+y+',width=1,height=1,scrollbars=no,statuls=yes,resizable=yes';
	popupObj = window.open('../../../main/common/popMain.html?'+qStr,'',vCond);
	//popupObj.window.focus();
}


//임시로...
function openPopMain2(qStr,x,y){
	try{
		top.opener._openPopMain2(qStr,x,y);
	}catch(e){
		//alert('catch 에서 열림'+e);	
		_openPopMain2(qStr,x,y);
	}
}
function _openPopMain2(qStr,x,y){
	var vCond = 'toolbar=no,location=no,status=no,left='+x+', top='+y+',width=1,height=1,scrollbars=no,statuls=yes,resizable=yes';
	popupObj = window.open('../../../main/common/popMain2.html?'+qStr,'',vCond);
	//popupObj.window.focus();
}

//var Popup=null;
//function CommPopup(URL, Width, Height, ScrollBar, Resizable) {
//	var iMyWidth;
//	var iMyHeight;
//	iMyWidth = (window.screen.width/2) - 450;
//	iMyHeight = (window.screen.height/2) - 350;
//
//	if(Popup != null && !Popup.closed) 
//		Popup.close();
//	src=URL;
//	if(!ScrollBar) 
//		ScrollBar = no;
//	if(!Resizable) 
//		Resizable = no;
//	etc = 'toolbar=no,location=no,status=no,scrollbars=' + ScrollBar + ',width=' + Width + ',height=' + Height + ',resizable=' + Resizable + ",left=" + iMyWidth + ",top=" + iMyHeight
//	Popup = window.open(src,'', etc);
//	Popup.window.focus();
//}

// 첨부파일당 10M로 제한 
function imgStrSize(val) {
	//이미지 크기 계산
	if(val > 1024 && val < 1048576)	{
		strFileSize = Math.round(eval(val)/1000)+"KB";
	} else if(val<1024) {
		strFileSize = eval(val)+"B";
	} else {
		intMB = (eval(val)/1000)/1000 ;
		intMB = Math.round(intMB*100)/100

		strFileSize = intMB+"MB";
	}
	
	return strFileSize;
}

function imgReSize(imgWidth, imgHeight, maxWidth, imgObj) {
    	if (imgWidth > maxWidth) {
  		heightValue = parseInt((maxWidth * imgHeight)/imgWidth);
  		widthValue = maxWidth;
    	} else {
  		heightValue = imgHeight;
  		widthValue = imgWidth;
    	}

	imgObj.style.width = widthValue;
	imgObj.style.height = heightValue;
}

function imgReSizeFixed(imgWidth,imgHeight,maxWidth,maxHeight, imgObj) {
	if (imgWidth >  maxWidth) {
		widthValue = maxWidth;
	} else {
		widthValue = imgWidth;
	}
	
	WidthRate = (widthValue / imgWidth) ;

	if (imgHeight > maxHeight) {
		heightValue = maxHeight ;
	} else {
		heightValue = imgHeight ;
	}

	HeightRate = (heightValue / imgHeight) ;

	if (maxWidth == 0) {
		WidthRate = 100;
	}

	if (maxHeight == 0) {
		HeightRate = 100;
	}

	if (HeightRate < WidthRate) {
		widthValue =  imgWidth * HeightRate ;
		heightValue = imgHeight * HeightRate ;
	} else {
		widthValue  =  imgWidth * WidthRate;
		heightValue = imgHeight * WidthRate;
	}

	imgObj.style.width = widthValue;
	imgObj.style.height = heightValue;
}


function getmulticontent(source, maxlength, separate_str) {
   
    	var content_size = getLength(source);
    	var multicontent = "";

    	if(maxlength >= content_size) {
        	return source;
    	}
    
    	var oldpos = 0;
    	var j=0;
    	var i=0;

    	while(i < content_size) {
        	if(source.charCodeAt(i) < 256) {
            		j++;
        	} else {
            		j += 2;
        	}
        	i++;
        
        	if(j >= maxlength) {
            		if(j > maxlength) 
            			i--;
            		scontent = source.substring(oldpos, i);

            		if(scontent.length) 
            			multicontent += scontent + separate_str;

            		oldpos = i;
            		j=0;

        	}
    }
   
    multicontent = multicontent.substring(0, multicontent.length - separate_str.length);
    return multicontent;
}

function GetCookie(sName) {
  	var aCookie = document.cookie.split(';');
  	for (var i=0; i < aCookie.length; i++)  {
		var aCrumb = aCookie[i].split('=');
		if (sName == trim(aCrumb[0])) {
	  		return unescape(aCrumb[1]);
		}
  	}

  	return null;
}

function hexa(numb){
  	var nb1=Math.floor(numb/16);  // 16으로 나눈 소수점 없는 정수
  	var nb2=numb%16;              // 16으로 나누고 나머지
  	var chr = convert(nb1);
  	var str=""+chr;
  	chr = convert(nb2);
  	str+=chr;
  	return(str);
}

// 주민등록번호 체크 
function CheckJoomin(ssn) {
        
/*
    	if (ssn.length == 13)
    		return true;
    	else
    		return false;
*/    
	var key = "234567892345";
	var total = 0;
	for(var i=0; i<12; i++)	{
		total = total + ssn.charAt(i)*key.charAt(i);
	}
	total = 11 - (total % 11);

	switch(total) {
		case 11:
			total=1;
			break;
		case 10:
			total=0;
			break;
		default:
			total=total;
			break;
	}

	if(ssn.charAt(12) != total) {
		return false;
	}
	return true;
}


// 사업자등록번호 체크 
function CheckBizNo(vencod) { 
/*
    	if (vencode.length == 10)
    		return true;
    	else
    		return false;
*/    
    	if (vencod == "") 
    		return false;
    
    	var sum = 0; 
    	var getlist =new Array(10); 
    	var chkvalue =new Array("1","3","7","1","3","7","1","3","5"); 
    
    	for(var i=0; i<10; i++) { 
    		getlist[i] = vencod.substring(i, i+1); 
    	} 
    
    	for(var i=0; i<9; i++) { 
    		sum += getlist[i]*chkvalue[i]; 
    	} 
    
    	sum = sum + parseInt((getlist[8]*5)/10); 
    	sidliy = sum % 10; 
    	sidchk = 0; 
    
    	if(sidliy != 0) { 
    		sidchk = 10 - sidliy; 
    	} else { 
    		sidchk = 0; 
    	} 
    	if(sidchk != getlist[9]) { 
    		return false; 
    	} 
    	return true; 
} 

function CheckValidBookID(val) {
	for(i=0;i<val.length;i++) {
		ch = val.substring(i, i+1);
		if((ch >= '0' && ch <= '9') || (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch == '_')) 
			continue;
        	else 
        		return(false);
	}
	return (true);
}

/* check mail format */
function CheckEmail(str) {
	for(var l=0;l<=(str.length-1);l++){
		if(str.indexOf(' ')>=0) return false;
	}
	if((str.indexOf('/'))!=-1 || (str.indexOf(';'))!=-1) return false;
	if((str.length!=0)&&(str.search(/(\S+)@(\S+)\.(\S+)/)==-1)) return false;
	return true;
}

function CheckEmail3(value) {
	if (value == "") 
		return false;
	var tmp_input = value;
	tmp_input = tmp_input.replace(/(,| |\t)+$/, "");
	tmp_input = tmp_input.replace(/\s+/g, "");
	var emailpattern	= /[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+(\.[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+)*@[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+(\.[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+)*/;	
	var email_array		= tmp_input.split(",");
	var email_count		= email_array.length;
	var t;
	var result;
	var b_rtn_value = true;
	for (var i = 0; i < email_count; i++) {
		t = str_extract_java(email_array[i], "<", ">");
		result = t.match(emailpattern);

    		if (result == null)
			b_rtn_value = false;
		else if (result[0] != t)				
			b_rtn_value = false;			

	}
    	return b_rtn_value;		
}

//usage : onblur=check_num(this);
function check_num(obj) {
	if(obj.value == "") return true;
	var s       = new String("0123456789");
	var re_data = String(obj.value);
	var len     = re_data.length;
	var numYn   = false;

	for(var i = 0 ; i < len; i++){
     		numYn   = false;
     		for(var k = 0 ; k < 10; k++){
         		if(re_data.charAt(i) == s.charAt(k)){
          			numYn = true;
         		}
     		}
     		if(!numYn) {
      			alert("숫자만 입력할 수 있습니다.");
      			obj.focus();
      			return false;
     		}
	}
	return true;
}

function onlyNumber(){
	if((event.keyCode<48)||(event.keyCode>57)) {
		if (event.keyCode == 46)	{
			event.returnValue=true;
			}
		else {
			event.returnValue=false;
		}	
	}	
}

function setZero(fld){
	if(fld.value=="0") fld.value="";
}

function resetZero(fld){
	if(fld.value=="") fld.value="0";
}

function IsNumber(t) {
	var i,j;
	var Digit = '1234567890'
	astr = Digit;
    
    	//0일때.. false가 리턴되서..
    	if(t == "0") 
    		return(true);
    
	if (t.length == 0) 
		return(false);
	if (astr.length > 1) {
		for(i=0;i<t.length;i++) {
			if(astr.indexOf(t.substring(i,i+1)) < 0)  {
				j=1;
				return(false);
			}
		}
	}
	return(t);
}

function IsContinueNo(t) {
	var i;
	var cont_flag=false;
	var next='';

	for(i=0; i<t.length-1; i++) {
		next = parseInt(t.substring(i, i+1)) + 1;
		if(t.substring(i+1, i+2) == next) 
			cont_flag = true;
		else 
			return(false); 
	}
	return(cont_flag);
}

function WhiteChk(strValue) {
  	var flag=true;
	if (strValue!="") {
		for (var i=0; i < strValue.length; i++) {
			if (strValue.charAt(i) == " ") {
			  	flag=false;
			  	break;
			}
		}
	}
	return flag;
}

function HaveSpecialChars(t) {
        var i,j;

        for(i=0;i<t.length;i++) {
                ch = t.substring(i, i+1);
                if((ch >= ' ' && ch <= '/') || (ch >= ':' && ch <= '@') || (ch >= '[' && ch <= '`') || (ch >= '{' && ch <= '~')) return(true);
        }
        return(false);
}


function IsAlphaNumeric(t) {
	var i,j;

	for(i=0;i<t.length;i++) {
		ch = t.substring(i, i+1);
		if((ch >= '0' && ch <= '9') || (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) 
			j=0;
                else 
                	return(false);
	}
	return(true);
}


function CheckEmail2(email) {
        myreg = /(\w)@\w.\w.\w/;
	if (!myreg.test(email)) 
		return false;

	if (IsHangul(email) == true) 
		return(false); 

    	return true;
}



function IsHangul(str) {
	for (i = 0; i < str.length; i++) {
		ch = str.substring(i, i+1);
		if (ch < ' ' || ch > '~') 
			return(true);
	}
	return(false);
}


function getLength(str) {
  	return(str.length+(escape(str)+"%u").match(/%u/g).length-1);
}

//usage : variable.trim
String.prototype.trim = function() {
 	return this.replace(/(^\s*)|(\s*$)/gi, "");
}

//usage : variable.replaceAll
String.prototype.replaceAll = function(str1, str2) {
 	var temp_str = "";
 
 	if (this.trim() != "" && str1 != str2) 	{
  		temp_str = this.trim();
 
  		while (temp_str.indexOf(str1) > -1) {
   			temp_str = temp_str.replace(str1, str2);
  		}
 	}
 
 	return temp_str;
}

function GetStrByte(val) {
    if(val < 1024) 
    	return val + " B";
    else if(val >= 1024 && val < 1024 * 1024) 
    	return parseInt(val/1024) + "." + parseInt((val%1024)/100) + " KB";
    else 
    	return parseInt(val/1024/1024) + "." + parseInt((val%1024)/100) + " MB";
}

function trim(s) {
        var i, j;
        var ns;
	var strlen = s.length;
        for (i = 0, ns = ''; i < strlen; i++) 
        	if (s.charAt(i) != ' ')  
        		break;
        for (j = strlen - 1; j >= 0; j--) 
        	if (s.charAt(j) != ' ')  
        		break;
	if(i > j) 
		return '';

        ns = s.substring(i, j+1);
        return ns;
}

function rtrim(s) {
        var j;
        var ns;
        for (j = s.length - 1; j >= 0; j--) 
        	if (s.charAt(j) != ' ')  
        		break;
        ns = s.substring(0, j + 1);
        return ns;
}

/* 두개의 문자열 사이의 문장을 검출해 내는 함수 */
function str_extract_java(value, start, end) {
    	var tmp;
	var stStr = eval("/"+start+"/");
	var endStr = eval("/["+end+" ]+/g");

	if ((value.search(stStr)) == -1)
		return value;

	tmp = value.split(start);
	tmp = tmp[1];
	tmp = tmp.replace(endStr, "");

	return tmp;
}

function validate_id() {
	var e1 = event.srcElement;
	var check='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';
	event.returnValue = true;
	
	for (var i=0;i<e1.value.length;i++)
    		if (-1 == check.indexOf(e1.value.charAt(i)))
            		event.returnValue = false;
	
	if (!event.returnValue) {
    		alert("영문,숫자,'-','_'만 사용 가능합니다.");
    		e1.className='badvalue';
    		document.register.mid.value='';
    		document.register.mid.focus();
	} else { 
		e1.className=''; 
	}
}

//usage : openMax('/cdn/item/1.jpg');
function openMax(var1) {
  	var imgObj = new Image();
  	imgObj.src = var1;
  	if  (imgObj.height > 600) {
  		openHeight = 600;
  		openWidth  = 600 * (imgObj.width / imgObj.height);
  	} else {
  		openWidth  = imgObj.width;
  		openHeight = imgObj.height;
  	}
  	var wopt = "scrollbars=no,status=no,resizable=no";
  	wopt += ",width=" + openWidth;
  	wopt += ",height=" + openHeight;

	window.open('/include/common/mdImageMax.jsp?max='+var1+'&openheight='+openHeight,'_blank',wopt);
}

//usage : checkAll(document.form);
function checkAll(form) { 
	var check = true;
	
	for(i=0,j=0; i < form.elements.length; ++i){
		if (form.elements[i].checked == true)
			j++;
	}
	
	if (j == form.elements.length)	check = false;

	for(i=0; i < form.elements.length; ++i){
		form.elements[i].checked = check;
	}
}

/* ---------------------------------------------------------------------- *\
  Description : 클릭함에 따라 'var0'로 지정된 체크박스를 선택과 해제를 반복
  Usage       : checkAllbyVar(tmpObj,var0);
  Arguments   : tmpObj - form Object
  Example     : <input type="checkbox" value="Y" checked onClick=checkAllbyVar(document.register,"auth")>전체메뉴<br>
		<input type="checkbox" name="auth1" value="Y" checked>LH업체관리<br>
		<input type="checkbox" name="auth2" value="Y" checked>CP업체관리<br>
\* ---------------------------------------------------------------------- */
function checkAllbyVar(tmpObj,var0)
{ 
	var chkStatus = true;

	for(i=0; i < tmpObj.elements.length; ++i){
		if (tmpObj.elements[i].name.substring(0,var0.length) == var0) {
			//alert("before : name["+i+"] = "+tmpObj.elements[i].name+", checked["+i+"] = "+tmpObj.elements[i].checked);

			if (tmpObj.elements[i].name == var0) {
				// 클릭한 결과가 현재의 상태이므로 
				if (tmpObj.elements[i].checked == true)	chkStatus = true;
				else					chkStatus = false;
			} else {
				tmpObj.elements[i].checked = chkStatus;
			}

			//alert("after : name["+i+"] = "+tmpObj.elements[i].name+", checked["+i+"] = "+tmpObj.elements[i].checked);
		}
	}
}

/* ---------------------------------------------------------------------- *\
  Description : 선택함에 따라 지정된 체크박스만 선택하거나 지정된 체크박스를 제외한 모든 체크박스를 선택
  Usage       : checkOnly(tmpObj,tmpTarget,tmpLike)
  Arguments   : tmpObj - form Object
  		tmpTarget - 개별 Object 이름
  		tmpLike - "Y" 이면 Only Select, "N"이면 Exclude Select
\* ---------------------------------------------------------------------- */
function checkOnly(tmpObj,tmpTarget,tmpLike)
{ 
	for(i=0; i < tmpObj.elements.length; ++i){
	    if (tmpObj.elements[i].type == "checkbox") {
		if (tmpLike == "Y") {
			if (tmpObj.elements[i].name != tmpTarget)
				tmpObj.elements[i].checked = false;
		} else {
			if (tmpObj.elements[i].name == tmpTarget)
				tmpObj.elements[i].checked = false;
		}
	    }
	}
}

//usage : onKeyPress="checkAmount()";
function checkAmount() {
	if(event.keyCode < 46 || event.keyCode > 57 || event.keyCode == 47) 
		event.keyCode=null;
}


/* ---------------------------------------------------------------------- *\
  Description : 클릭함에 따라 지정된 태그 display와 none을 반복..
  		지정된 태그 예) <tr height="25" id="schedule_date" style="display:none">
  Usage       : menuclick(objname);
  Arguments   : objname - ID of signed tag
\* ---------------------------------------------------------------------- */
var old_menu = '';

function menuclick(submenu)
{
	if( old_menu != submenu ) {
		if( old_menu !='' ) {
			old_menu.style.display = 'none';
		}
	
		submenu.style.display = 'block';
		old_menu = submenu;
	
	} else {
		submenu.style.display = 'none';
		old_menu = '';
	}
}

/* ---------------------------------------------------------------------- *\
  Description : flag 값에 따라 지정된 태그 display와 none을 반복..
  		지정된 태그 예) <tr height="25" id="schedule_date" style="display:none">
  Usage       : menuclick1(objname,flag);
  Arguments   : objname - ID of signed tag
  		flag - true or false of display
\* ---------------------------------------------------------------------- */
function menuclick1(submenu,flag)
{
	if (flag == true) {
		document.getElementById(submenu).style.display = 'block';
	} else {
		document.getElementById(submenu).style.display = 'none';
	}
}

/* ---------------------------------------------------------------------- *\
  Description : flag 값에 따라 지정된 태그들을 교대로 display와 none을 반복..
  		지정된 태그 예) <tr height="25" id="schedule_date" style="display:none">
  Usage       : menuclick2(objname1,objname2,flag);
  Arguments   : objname1,objname2 - ID of signed tag
  		flag - select 1 or 2 of display
\* ---------------------------------------------------------------------- */
function menuclick2(submenu1,submenu2,flag)
{
	if( flag == 1) {
		submenu1.style.display = 'block';
		submenu2.style.display = 'none';
	} else {
		submenu1.style.display = 'none';
		submenu2.style.display = 'block';
	}
}

function menuclick3(submenu1,submenu2,submenu3,flag)
{
	switch (flag) {
	    case 1 :
		submenu1.style.display = 'block';
		submenu2.style.display = 'none';
		submenu3.style.display = 'none';
		break;

	    case 2 :
		submenu1.style.display = 'none';
		submenu2.style.display = 'block';
		submenu3.style.display = 'none';
		break;

	    case 3 :
		submenu1.style.display = 'none';
		submenu2.style.display = 'none';
		submenu3.style.display = 'block';
		break;

	    default :
	}
}

/* ---------------------------------------------------------------------- *\
  Description : AddNext()를 클릭할 때마다 테이블이 추가된다.
  		addCnt는 총 테이블의 갯수를 카운트한다..
  		예) 	<input type="button" value="추가" onClick="AddNext()">
  			~
			<div id=divAddInput style="display:none">
			<table width="100%" bgcolor="#bbbbbb" border="0" cellpadding="1" cellspacing="1" align="center">
			<tr>
				<td>
					<input type="text" name=employee[ADD_ID] size="20" maxlength="25"></td>
			</tr>
			</table>
			</div>
  Usage       : AddNext();
  Arguments   : 없음
\* ---------------------------------------------------------------------- */
var id_cnt = 1;

function AddNext() { 
    	var NextTrackHTML = "";
    
    	NextTrackHTML = divAddInput.innerHTML.replaceAll('[ADD_ID]', id_cnt);
    	AddList.innerHTML = AddList.innerHTML + "\n" + NextTrackHTML;
    	id_cnt++;
    	
    	document.register.addCnt.value++;
}

//2006-04-06 KJK 아이프레임 사이즈 자동 조절
function resizeFrame(iframeObj){
	var innerBody = iframeObj.contentWindow.document.body;
	var innerHeight = innerBody.scrollHeight + (innerBody.offsetHeight - innerBody.clientHeight);
	var innerWidth = innerBody.scrollWidth + (innerBody.offsetWidth - innerBody.clientWidth);
	iframeObj.style.height = innerHeight;
	iframeObj.style.width = innerWidth;
}

//tr 클릭, 오버, 아웃 시 배경색 변하기
var oldTrNum;
function clickTr(num){
	if(oldTrNum) document.getElementById("tr"+oldTrNum).style.background='#FFFFFF';
	document.getElementById("tr"+num).style.background='#AAFFFF';
	oldTrNum = num;
}
function overTr(num){
	if(num!=oldTrNum){
		document.getElementById("tr"+num).style.background='#E0FEFB';	
	}
}
function outTr(num){
	if(num!=oldTrNum){
		document.getElementById("tr"+num).style.background='#FFFFFF';	
	}
}

function permissionDenied(){
	alert("현재 고객께서는 해당컨텐츠의 사용이 불가능합니다.\n\n문의전화 : 2105-1700");
}

function strPad(input, length, chr, pType){
	input = input.toString();
	var outStr = "";
	for(i=0; i<length - input.length; i++) outStr+= chr;
	if(pType == "R" ){
		outStr = input + outStr;
	}else{
		outStr = outStr + input;
	}
	return outStr;
}

function hideEventLayer(){
	var lay = document.getElementById("eventLayer");
	lay.innerHTML = "";
	lay.style.display = "none";
}

function showThumb(fpath){
	var lay = document.getElementById("eventLayer");
	lay.innerHTML = '<img src="'+fpath+'" border="0" onMouseOut="hideEventLayer();">';
	lay.style.left = event.clientX - 18;
	lay.style.top = event.clientY - 18;
	lay.style.display = "block";
}

function showWait(){
	var lay = document.getElementById("eventLayer");
	lay.innerHTML = '<div style="position:absolute; width:300px; height:120px; z-index:10; border: #7F9DB9 1px solid; font: 12px 굴림; color: #000000; border-color:#7F9DB9; background-color: #CCFFFF; padding:25,25,25,25;text-align:center;"><font color="#0080FF">실행중입니다. 잠시만 기다리세요...</font><br><br><img src="/images/loader01.gif" width="32" height="32" border="0"></div>';
	lay.style.left = document.body.scrollWidth / 2 - 150;
	lay.style.top = document.body.scrollHeight / 2 - 60;
	lay.style.display = "block";
}

function printWindowPriview() {
	if (!factory.object) {
		return;
	} else {
		factory.printing.header = ""; //윗쪽타이틀
		factory.printing.footer = ""; //아랫쪽타이틀
		factory.printing.portrait = true; //인쇄레이아웃설정, 가로(false), 세로(true)
		factory.printing.leftMargin = 5; //왼쪽여백
		factory.printing.topMargin = 5;//윗쪽여백
		factory.printing.rightMargin = 5; //오른쪽여백
		factory.printing.bottomMargin = 5; //아랫쪽여백
		factory.printing.Preview();
	}
}
