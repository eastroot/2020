<!--

var moveObject;		// 스크롤 함수를 주기적으로 실행하기 위한  setInterval 오브젝트
var targetObject;		// 
var titleObject;				//제목줄
var titleMove;

// obj를 스크롤 시킨다
function scrollStart(obj)
{  
	if(targetObject==obj)    return;	// 타겟이 동일하면 무시	
	if(moveObject!=null)     clearInterval(moveObject);  
	targetObject = obj;
	moveObject = setInterval("objectScroll()",40);
}

function scrollStopTitle()
{
	clearInterval(titleMove);
	titleObject.style.posLeft = 0;
}

function scrollStop(obj)
{  
	if(targetObject!=obj)    return; // 대상이 타겟이 아니면 무시
	//alert(event.toElement);
	if(event.toElement== obj || event.toElement==obj.parentElement) return;

	clearInterval(moveObject);
	obj.style.posLeft = 0;
	targetObject = null;
}

function objectScroll(){
  var posx = targetObject.style.posLeft;
  posx= posx-1;
  var w = targetObject.offsetWidth;
  if((posx+w)<0)
    posx = 100;
  targetObject.style.posLeft = posx;
}

function waitSongTitle(title,addScript)
{
	//alert(title);
	document.write("<div style=\"width:100%;height:14;overflow-x:hidden;cursor:hand;background-color:transparent\" onmouseover=\"scrollStart(this.firstChild)\" onmouseout=\"scrollStop(this.firstChild)\" onClick=\""+addScript+"\"><div style=\"position:absolute;white-space:nowrap;height:14;background-color:transparent\">"+title+"</div></div>");
}



function playSongTitle(title,addScript)
{
	document.write("<div style=\"width:100%;height:14;overflow-x:hidden;cursor:default\"><div id='titlediv' style=\"position:absolute;white-space:nowrap\" onClick=\""+addScript+"\">"+title+"</div></div>");

	titleObject = document.getElementById("titlediv");
	clearInterval(titleMove);
	titleMove = setInterval("titleScroll()",50);
}



function titleScroll(){
	var posx = titleObject.style.posLeft;
	posx= posx-1;
	var w = titleObject.offsetWidth;
	if((posx+w)<0)
	posx = 97;
	titleObject.style.posLeft = posx;
}

//-->