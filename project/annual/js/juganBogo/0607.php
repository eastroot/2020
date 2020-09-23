<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<?

function getJucha()
		{	
			//$getTimestemp = (string)date('w',strtotime(date('y-m-d')));
			//$getTimestemp = (string)date('w',strtotime(date('Ym').'01'));
			$setPreMonth = 8-(7 - $jucha);	//앞달의 빈 칸수
			$now_d	= (int)date('d');	//	현재 일의 일자
			$arrThisJuchaVal = array();
			$jucha = ceil(($now_d + $setPreMonth) / 7);	//주차
			
			$newTimeStamp = date('Y/m/d',strtotime(date('Ymd')));	// 서버에서 현재날짜를 가져옴
			$arrNewTimeStamp	= explode("/",$newTimeStamp);		// 가져온 현재날짜를 / 단위로 나누어 arrNewTimeStamp 배열에 저장
	
			$arrThisJuchaVal['todayInfo']['y'] = date('Y');	// 현재 년도
			$arrThisJuchaVal['todayInfo']['m'] = date('m');	// 현재 월
			$arrThisJuchaVal['todayInfo']['d'] = date('d');	// 현재 날짜
	
			$arrThisJuchaVal['fridayInfo']['y'] = $arrNewTimeStamp[0];	
			$arrThisJuchaVal['fridayInfo']['m'] = $arrNewTimeStamp[1];	
			$arrThisJuchaVal['fridayInfo']['d'] = $arrNewTimeStamp[2];	
	
			$arrThisJuchaVal['fridayInfo']['jucha'] = ceil(($now_d + $setPreMonth) / 7);	//주차 계산
			
			$getMonth = date('d',strtotime(date('y-m-d'))); 	// 현재 일자
			$getMMM = date('w',strtotime($getMonth));	// 월 : 0 ~ 토 : 6으로 표현되는 요일의 오늘 일자의 일차

			
			echo("설정 일의 주차 jucha");
			echo("<br>");
			echo($jucha); 	// 설정 일의 주차
			
			echo("<br>");echo("<br>");
			echo("앞달의 빈 칸수 setPreMonth");
			echo("<br>");
			echo($setPreMonth);
			echo("<br>");

			echo("설정 일의 주차 jucha");
			echo("<br>");
			echo($jucha); 	// 설정 일의 주차
			
			echo("<br>");echo("<br>");
			echo("앞달의 빈 칸수 setPreMonth");
			echo("<br>");
			echo($setPreMonth);
			echo("<br>");
			
			echo("<br>");
			echo("오늘 일자 getMonth");
			echo("<br>");
			echo($getMonth);	// 오늘 일자
			echo("<br>");
			echo("<br>");
			
		//	$getMMM = date('w',strtotime($getMonth));
			echo("오늘 일자의 일차 getMMM");
			echo("<br>");
			echo($getMMM);
			echo("<br>");
			echo("<br>");
		//	echo("그 달의 마지막일 -> 한달의 총 일수");
			echo("<br>");

			return $arrThisJuchaVal;//배열			
		}
		
		echo("0&nbsp&nbsp&nbsp1&nbsp&nbsp2&nbsp&nbsp3&nbsp&nbsp&nbsp4&nbsp&nbsp5&nbsp&nbsp6");
		echo("<br>");
		echo("월 화 수 목 금 토 일 -> 1week");
	
		echo("<br>");
		echo("<br>");echo("<br>");
		$arrThisJuchaVal = getJucha();
	//	echo($showJucha);
/*		
		$arrThisJuchaVal['todayInfo']['y'] = date('Y');
		$arrThisJuchaVal['todayInfo']['m'] = date('m');
		$arrThisJuchaVal['todayInfo']['d'] = date('d');
	*/	

		$arrThisJuchaVal['todayInfo']['d'];
//		$arrThisJuchaVal[0][1] = $zeroOne;
//		$arrThisJuchaVal[1][0] = 10;
//		$arrThisJuchaVal[1][1] = 11;
		echo("배열 키값 테스트 <br>");
		
		echo("<br>");
		echo($arrThisJuchaVal[0][1]);echo("<br>");
		echo($arrThisJuchaVal[1][0]);echo("<br>");
		echo($arrThisJuchaVal[1][1]);echo("<br>");
	
		echo($arrThisJuchaVal['todayInfo']['y']);
		echo($arrThisJuchaVal['todayInfo']['m']);
		echo($arrThisJuchaVal['todayInfo']['d']);
		
/*
		echo("<br>");echo("<br>");
		echo($arrThisJuchaVal['fridayInfo']['y']);
		echo($arrThisJuchaVal['fridayInfo']['m']);
		echo($arrThisJuchaVal['fridayInfo']['jucha']);
*/
		echo("<br>");echo("<br>");echo("<br>");echo("<br>");
		
		$arrThisJuchaVal['fridayInfo']['jucha'] = $arrThisJuchaVal['fridayInfo']['y'].$arrThisJuchaVal['fridayInfo']['m'].$arrThisJuchaVal['fridayInfo']['jucha'];	//주차 ex) 2015/06/1주차
		echo($arrThisJuchaVal['fridayInfo']['jucha']);
		
		
		
		
	//$arrThisJuchaVal['fridayInfo']['jucha'] = ceil(($now_d + $setPreMonth) / 7);
	/*	 
		$arr['value1']['content1'] = "array_values 예제1";

		$arr['value2'] = "array_values 예제2";
		$arr['value3'] = "array_values 예제3";
		
		echo ('$arr[0] : '.$arr["value1"]['content1'].'<br>');

		echo ('$arr[1] : '.$arr['value2'].'<br>');

		echo  '$arr[2] : '.$arr['value3'].'<br>';

*/
/*
		$arr['value1']['content1'] = "val : 1 content :1";
		$arr['value1']['content2'] = "val : 1 content :2";
		$arr['value1']['content3'] = "val : 1 content :3";
		$arr['value2']['content1'] = "val : 2 content :1";
		$arr['value2']['content2'] = "val : 2 content :2";
		$arr['value2']['content3'] = "val : 2 content :3";
		$arr['value3']['content1'] = "val : 3 content :1";
		$arr['value3']['content2'] = "val : 3 content :2";
		$arr['value3']['content3'] = "val : 3 content :3";
		echo ('$arr[0] : '.$arr["value1"]['content1'].'<br>');
		echo ('$arr[0] : '.$arr["value2"]['content2'].'<br>');
		echo ('$arr[0] : '.$arr["value3"]['content3'].'<br>');
		echo ('$arr[1] : '.$arr['value1']['content1'].'<br>');
		echo ('$arr[1] : '.$arr['value2']['content2'].'<br>');
		echo ('$arr[1] : '.$arr['value3']['content3'].'<br>');
		echo  '$arr[2] : '.$arr['value1']['content1'].'<br>';
		echo  '$arr[2] : '.$arr['value2']['content2'].'<br>';
		echo  '$arr[2] : '.$arr['value3']['content3'].'<br>';

*/






/*
function getJucha()
{	
	//$getTimestemp = (string)date('w',strtotime(date('y-m-d')));
	//$getTimestemp = (string)date('w',strtotime(date('Ym').'01'));
	$setPreMonth = 8-(7 - $jucha);	//앞달의 빈 칸수
	
	//$now_d	= (int)date('d');	//현재 일의 일자
	
	$now_d	= (int)date('d');	//	설정 일의 일자
	$arrJucha = array();		// 주차 저장 배열
	$jucha = ceil(($now_d + $setPreMonth) / 7);	//주차
	
	//$setPreMonth = 8-(7 - $jucha);	//앞달의 빈 칸수

	
		echo("<br>");
	echo("<br>");
	
*/

//////////////////////////////////////////////////////////////////////////////

//	$jucha = getJucha();


/*	echo("설정 일의 주차 jucha");
	echo("<br>");
	echo($jucha); 	// 설정 일의 주차
	
	echo("<br>");echo("<br>");
	echo("앞달의 빈 칸수 setPreMonth");
	$setPreMonth = 8-(7 - $jucha);	//앞달의 빈 칸수
	
	echo("<br>");
	echo($setPreMonth);
*/


/*

	echo("<br>");
//	$getMonth = date('d',strtotime(date('y-m-d'))); 	// 오늘 일자
	$getMonth = date('d',strtotime(date('Ym'.'18'))); 	// 오늘 일자
	$getMMM = date('w',strtotime($getMonth));
	
	
	
	
	
	echo("설정 일의 주차 jucha");
	echo("<br>");
	echo($jucha); 	// 설정 일의 주차
	
	echo("<br>");echo("<br>");
	echo("앞달의 빈 칸수 setPreMonth");
	
	
	echo("<br>");
	echo($setPreMonth);
	echo("<br>");
	
	
	
	
	
	echo("<br>");
	echo("오늘 일자 getMonth");
	echo("<br>");
	echo($getMonth);	// 오늘 일자
	echo("<br>");
	echo("<br>");
	
//	$getMMM = date('w',strtotime($getMonth));
	echo("오늘 일자의 일차 getMMM");
	echo("<br>");
	echo($getMMM);
	
	echo("<br>");
	echo("<br>");
//	echo("그 달의 마지막일 -> 한달의 총 일수");
	echo("<br>");
	
	return $arrjucha;
}
	echo("0&nbsp&nbsp&nbsp1&nbsp&nbsp2&nbsp&nbsp3&nbsp&nbsp&nbsp4&nbsp&nbsp5&nbsp&nbsp6");
	echo("<br>");
	echo("월 화 수 목 금 토 일 -> 1week");
	
	echo("<br>");
	echo("<br>");echo("<br>");
	$showJucha = getJucha();
	echo($showJucha);
*/
	
	
//date('y-m-1');
/*
	echo("<br>");
	echo("<br>");
	$jucha = getJucha();
	echo("설정 일의 주차 jucha");
	echo("<br>");
	echo($jucha); 	// 설정 일의 주차
	
	echo("<br>");echo("<br>");
	echo("앞달의 빈 칸수 setPreMonth");
	$setPreMonth = 7-(7 - $jucha);	//앞달의 빈 칸수
	
	echo("<br>");
	echo($setPreMonth);
	echo("<br>");
	$getMonth = date('d',strtotime(date('y-m-d'))); 	// 오늘 일자
	//$getMonth = date('d',strtotime(date('Ym'."03"))); 	// 오늘 일자
//	$getMonth = date('d',strtotime('First day of this month' ));
	
	echo("<br>");
	echo("오늘 일자 getMonth");
	echo("<br>");
	echo($getMonth);	// 오늘 일자
	echo("<br>");
	echo("<br>");
	
	$getMMM = date('w',strtotime($getMonth));
	echo("오늘 일자의 일차 getMMM");
	echo("<br>");
	echo($getMMM);
	
	echo("<br>");
	echo("<br>");
//	echo("그 달의 마지막일 -> 한달의 총 일수");
	echo("<br>");
	
	*/
//	echo date('t',strtotime('2015-06-05')); // 그 달의 마지막일 -> 한달의 총 일수
//	$monthLast = (string)date("");
	
/*

function getWeekInfo($_date)

{

    $BASIC_DOW = 1; // 1(mon) ~ 7(sun)

    list($yy, $mm, $dd) = explode('-', $_date);

    

    $dow = date('N', mktime(0, 0, 0, $mm, 1, $yy));

    

    if ($dow <= $BASIC_DOW)

    {

        $diff = $BASIC_DOW - $dow;

        $srt_day = $diff+1;

    } else {

        $diff = 7-$dow;

        $srt_day = $diff + $BASIC_DOW + 1;

    }




    if ($dd < $srt_day)

    {

        $new_date = date('Y-m-d', mktime(0, 0, 0, $mm, 0, $yy));

        return getWeekInfo($new_date);

    } else {

        $wom = ceil(($dd-($srt_day-1))/7);

        //$new_date = substr($yy, 2, 2). $mm. $wom; 

  $new_date = (int)$mm. '월' .$wom . '주차'; 
	
	
        return $new_date;

    }

}
$BASIC_DOW = 3; // 1(Mon) - 7(Sun) , 주차를 나누는 기준 요일
$new_date = date('Y-m-d', mktime(0, 0, 0, date('m'), 0, date('Y')));
 $league_code = getWeekInfo($new_date);
echo($league_code);

*/
echo("<br>".$arrThisJuchaVal['todayInfo']['d']);
?>
<?echo("<br>".$arrThisJuchaVal['todayInfo']['d']);?>
<html>
	<body>
	<?echo("<br>".$arrThisJuchaVal['todayInfo']['d']."<br>");?>
	
	<?=$arrThisJuchaVal['todayInfo']['d']?>
	<?=$arrThisJuchaVal['todayInfo']['d'];?>
	
	<?=$dat = date('y-m-d');?>
	</body>
</html>