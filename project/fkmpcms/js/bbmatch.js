	//alert(getMatchPercent("isas isabasasdsasas", "isab"));
	//getStringMatchPercent("asdsdaas Inst", "asdasd", null, true);
	
	function percent_to_color(p)
	{
		var color = "#FFFFFF";
		
		if (p==100)		color = "#FF2F9F";
		else if (p>98)		color = "#FF5F9F";
		else if (p>=95)		color = "#FF9F9F";
		else if (p>90)		color = "#00FF00";
		else if (p>80)		color = "#33FF00";
		else if (p>70)		color = "#55FF00";
		else if (p>60)		color = "#77EE00";
		else if (p>50)		color = "#99EE00";
		else if (p>40)		color = "#EEEE00";
		else if (p>30)		color = "#FFEE00";
		else if (p>20)		color = "#FFFF00";
		else if (p>0)		color = "#FFFFF0";
			
		/*if (p==100)		color = "#FF5E00";
		else if (p>98)		color = "#FF8224";
		else if (p>95)		color = "#FFA648";
		else if (p>90)		color = "#FFB85A";
		else if (p>80)		color = "#24FCFF";
		else if (p>70)		color = "#7EFFFF";
		else if (p>60)		color = "#77EE00";
		else if (p>50)		color = "#99EE00";
		else if (p>40)		color = "#EEEE00";
		else if (p>30)		color = "#FFEE00";
		else if (p>20)		color = "#FFFF00";
		else if (p>0)		color = "#FFFFF0";*/
			
			
		return color;
	}
	
	
	function checkMatchString(obj, srcname, dstname)
	{
		$("." + srcname).css("background-color", ""); 
		$("." + dstname).css("background-color", "");
		
		var str = $(obj).text();
		
		if (str=="") return;
		else
		{
			var max_match_percent = 0;
			var max_match_count = 0;
			
			$(obj).css("background-color", "#00ff00"); 
			
			$("." + dstname).each(function (i) {
				
				var p = getMatchPercentTotal(str, $(this).text(), "", "");
				
				var color = percent_to_color(p);
				
				if (p>0)
				{
					if (max_match_percent<p)
						max_match_percent = p;
					
					max_match_count++;
				}
				
				$(this).css("background-color", color);
			});
		}
	}
	
	function getMatchPercentTotal(maincheck1, maincheck2, subcheck1, subcheck2, check_penalty)
	{
		var p = 0;
		
		if (maincheck1=="" || maincheck2=="") return 0;
		
		if (maincheck1==maincheck2)
		{
			p = 100;
		}
		else
		{
			p = getStringMatchPercent(maincheck1, maincheck2, null, check_penalty);
			
			// 문자열 서로 변경해서 재비교
			if (p==0)
			{
				if (maincheck1.length>maincheck2.length)
				{
					p = getStringMatchPercent(maincheck2, maincheck1, null, check_penalty);
					p = p * 0.85;
					//if (p>70)
						//p -= 15;
				}
			}
		}
		
		if (p!=0)
		{
			if (subcheck1==subcheck2)
			{
				if (p<=99) p++;
			}
			else
			{
				if (p==100) p = 99;
			}
		}
		
		return p;
	}
	
	function blankDelete(str)
	{
		while(str.indexOf("  ")!=-1)
		{
			str = str.replace(new RegExp(/  /gi), "");
		}
		
		return str;
	}
	
	function TwoBtye2OneByte(str)
	{
		var one = "~`!@#$%^&*()-=\\_+|;:\"'<>?,./{}[] ";
		var two = "～｀！＠＃＄％＾＆＊（）－＝￦＿＋｜；：”＂＇＜＞？，．／｛｝［］　";
		var ch = "";
		
		for (var i=0; i<two.length; i++)
		{
			ch = two.substring(i, i+1);
			
			if (str.indexOf(ch)>=0)
			{
				str = str.replace(new RegExp(ch, "g"), one.substring(i, i+1));
			}
		}
		
		return str;
	}
	
	function getPenalty(str1, str2)
	{
		var penalty = 1;
		var str_inst1 = str1.replace(new RegExp(/\((.*?)inst(.*?)\)/gi), "@INST@");
		var str_inst2 = str2.replace(new RegExp(/\((.*?)inst(.*?)\)/gi), "@INST@");
		
		str_inst1 = str_inst1.replace(new RegExp(/\((.*?)mr(.*?)\)/gi), "@INST@");
		str_inst2 = str_inst2.replace(new RegExp(/\((.*?)mr(.*?)\)/gi), "@INST@");
		
		str_inst1 = str_inst1.replace(new RegExp(/\((.*?)instrumental(.*?)\)/gi), "@INST@");
		str_inst2 = str_inst2.replace(new RegExp(/\((.*?)instrumental(.*?)\)/gi), "@INST@");
		
		str_inst1 = str_inst1.replace(new RegExp(/\((.*?)반주(.*?)\)/gi), "@INST@");
		str_inst2 = str_inst2.replace(new RegExp(/\((.*?)반주(.*?)\)/gi), "@INST@");
		
		str_inst1 = str_inst1.replace(new RegExp(/\((.*?)연주(.*?)\)/gi), "@INST@");
		str_inst2 = str_inst2.replace(new RegExp(/\((.*?)연주(.*?)\)/gi), "@INST@");
		
		str_inst1 = str_inst1.replace(new RegExp(/\[(.*?)inst(.*?)\]/gi), "@INST@");
		str_inst2 = str_inst2.replace(new RegExp(/\[(.*?)inst(.*?)\]/gi), "@INST@");
		
		str_inst1 = str_inst1.replace(new RegExp(/\[(.*?)mr(.*?)\]/gi), "@INST@");
		str_inst2 = str_inst2.replace(new RegExp(/\[(.*?)mr(.*?)\]/gi), "@INST@");
		
		str_inst1 = str_inst1.replace(new RegExp(/\[(.*?)instrumental(.*?)\]/gi), "@INST@");
		str_inst2 = str_inst2.replace(new RegExp(/\[(.*?)instrumental(.*?)\]/gi), "@INST@");
		
		str_inst1 = str_inst1.replace(new RegExp(/\[(.*?)반주(.*?)\]/gi), "@INST@");
		str_inst2 = str_inst2.replace(new RegExp(/\[(.*?)반주(.*?)\]/gi), "@INST@");

		str_inst1 = str_inst1.replace(new RegExp(/\[(.*?)연주(.*?)\]/gi), "@INST@");
		str_inst2 = str_inst2.replace(new RegExp(/\[(.*?)연주(.*?)\]/gi), "@INST@");

		if (str_inst1.indexOf("@INST@")>=0 && str_inst2.indexOf("@INST@")>=0)
		{
			return 0;
		}
		else if (str_inst1.indexOf("@INST@")>=0 || str_inst2.indexOf("@INST@")>=0)
			return 0.6;

		// 간혹 뒤에 제목 .inst 라고 되어있는 항목들에 대한 체크를 하기위한 처리
		str_inst1 = str1.replace(new RegExp(/\((.*?)\)/gi), "");
		str_inst2 = str2.replace(new RegExp(/\((.*?)\)/gi), "");
		
		str_inst1 = str1.replace(new RegExp(/\([.*?]\)/gi), "");
		str_inst2 = str2.replace(new RegExp(/\([.*?]\)/gi), "");
		
		str_inst1 = str_inst1.replace(new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi), "");
		str_inst2 = str_inst2.replace(new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi), "");
		
		str_inst1 = str_inst1.substring(str_inst1.length-6);
		str_inst2 = str_inst2.substring(str_inst2.length-6);
		
		str_inst1 = str_inst1.replace(new RegExp(/ inst/gi), "@INST@");
		str_inst2 = str_inst2.replace(new RegExp(/ inst/gi), "@INST@");
		
		if (str_inst1.indexOf("@INST@")>0 && str_inst2.indexOf("@INST@")<=0)
		{
			return 0.6;
		}
		else if (str_inst2.indexOf("@INST@")>0 && str_inst1.indexOf("@INST@")<=0)
		{
			return 0.6;
		}
		
		return 1;
	}
	
	
	// 실제 문자열 일치확률 구하기(아래의 getMatchPercent 및 getMatchPercentFull 함수와 같은 역할을 한다. 속도를 위해...)
	function getStringMatchPercent(str1, str2, ignore_str, check_penalty)
	{
		var result = 0;
		
		str1 = str1.toLowerCase();
		str2 = str2.toLowerCase();
		
		str1 = blankDelete(str1);
		str2 = blankDelete(str2);
		
		var diff_len = parseInt(str1.length-str2.length);
		diff_len = Math.abs(diff_len);
		
		if (ignore_str!=null)
		{
			var ignore_str_len = ignore_str.length;
			
			if (str1.substring(0, ignore_str_len)==ignore_str && str2.substring(0, ignore_str_len)!=ignore_str)
			{
				str1 = str1.substring(ignore_str_len);	
			}
			
			if (str2.substring(0, ignore_str_len)==ignore_str && str1.substring(0, ignore_str_len)!=ignore_str)
			{
				str2 = str2.substring(ignore_str_len);	
			}
		}
		
		str1 = TwoBtye2OneByte(str1);
		str2 = TwoBtye2OneByte(str2);	
		
		// (inst) 등과같이 해당 문자열에 대해서 조금 확률을 낮추기 위해 사용한다.
		var penalty = 1;
		
		if (check_penalty)
		{
			penalty = getPenalty(str1, str2);
			
			if (penalty==0)
			{
				//alert(str1 + "\n" + str2);
				
				var str_temp1 = "";
				var str_temp2 = "";
				
				var z1 = str1.lastIndexOf("(");
				var z2 = str2.lastIndexOf("(");
				
				if (z1==-1) z1 = str1.lastIndexOf("[");
				if (z2==-1) z2 = str2.lastIndexOf("[");
				
				if (z1!=-1)
				{
					str_temp1 = str1.substring(0, z1);
					str1 = str1.substring(z1, str1.length);
				}
				
				if (z2!=-1)
				{
					str_temp2 = str2.substring(0, z2);
					str2 = str2.substring(z2, str2.length);
				}
				
				str1 = str1.replace(new RegExp(/\((.*?)inst(.*?)\)/gi), "@INST@");
				str2 = str2.replace(new RegExp(/\((.*?)inst(.*?)\)/gi), "@INST@");
				//alert(str1 + "\n" + str2);
				str1 = str1.replace(new RegExp(/\((.*?)mr(.*?)\)/gi), "@INST@");
				str2 = str2.replace(new RegExp(/\((.*?)mr(.*?)\)/gi), "@INST@");
				//alert(str1 + "\n" + str2);
				str1 = str1.replace(new RegExp(/\((.*?)instrumental(.*?)\)/gi), "@INST@");
				str2 = str2.replace(new RegExp(/\((.*?)instrumental(.*?)\)/gi), "@INST@");
				
				str1 = str1.replace(new RegExp(/\((.*?)반주(.*?)\)/gi), "@INST@");
				str2 = str2.replace(new RegExp(/\((.*?)반주(.*?)\)/gi), "@INST@");
				
				str1 = str1.replace(new RegExp(/\((.*?)연주(.*?)\)/gi), "@INST@");
				str2 = str2.replace(new RegExp(/\((.*?)연주(.*?)\)/gi), "@INST@");
				
				str1 = str1.replace(new RegExp(/\[(.*?)inst(.*?)\]/gi), "@INST@");
				str2 = str2.replace(new RegExp(/\[(.*?)inst(.*?)\]/gi), "@INST@");
				
				str1 = str1.replace(new RegExp(/\[(.*?)mr(.*?)\]/gi), "@INST@");
				str2 = str2.replace(new RegExp(/\[(.*?)mr(.*?)\]/gi), "@INST@");
				
				str1 = str1.replace(new RegExp(/\[(.*?)instrumental(.*?)\]/gi), "@INST@");
				str2 = str2.replace(new RegExp(/\[(.*?)instrumental(.*?)\]/gi), "@INST@");
				
				str1 = str1.replace(new RegExp(/\[(.*?)반주(.*?)\]/gi), "@INST@");
				str2 = str2.replace(new RegExp(/\[(.*?)반주(.*?)\]/gi), "@INST@");	
				
				str1 = str1.replace(new RegExp(/\[(.*?)연주(.*?)\]/gi), "@INST@");
				str2 = str2.replace(new RegExp(/\[(.*?)연주(.*?)\]/gi), "@INST@");	
				
				str1 = str_temp1 + str1;
				str2 = str_temp2 + str2;
				
				diff_len = parseInt(str1.length-str2.length);
				diff_len = Math.abs(diff_len);
				
				//alert(str1 + "\n" + str2 + "\n" + diff_len);
				
				penalty = 1;
			}
		}
		
		var str_change1 = str1.replace(new RegExp(/ /gi), "");
		var str_change2 = str2.replace(new RegExp(/ /gi), "");
		
		var p3 = 0;
		
		if (str_change1==str_change2) {
			var m = parseInt(str1.length-str2.length);
			m /= 5;
			
			result = 100 - Math.abs(m);
			
			if (penalty!=1)
				result = result * penalty;
			
			return result;
		}
		else
		{
			var str_inst1 = str_change1.replace(new RegExp(/[\/?.,;:|*~`!^\-_+<>@\#$%&\\\=\'\"]/gi), "");
			var str_inst2 = str_change2.replace(new RegExp(/[\/?.,;:|*~`!^\-_+<>@\#$%&\\\=\'\"]/gi), "");
		
			if (str_inst1.length>14 && str_inst2.substring(0, str_inst1.length)==str_inst1)
			{
				var m = parseInt(str_inst1.length-str_inst2.length);
				p3 = 100 - (Math.abs(m)*2);
			}
		}
		
		
		//var p1 = getStringMatchPercentProc(str_change1, str_change2);
		var p1 = getStringMatchPercentProc(str1, str2, diff_len);
		
		//alert(str1 + "\n" + str2 + "\n" + p1);
		
		str_change1 = str_change1.replace(new RegExp(/\((.*?)\)/gi), "");
		str_change2 = str_change2.replace(new RegExp(/\((.*?)\)/gi), "");
		
		str_change1 = str_change1.replace(new RegExp(/\[(.*?)\]/gi), "");
		str_change2 = str_change2.replace(new RegExp(/\[(.*?)\]/gi), "");
		//alert(str_change1 + "\n" + str_change2);
		var p2 = getStringMatchPercentProc(str_change1, str_change2, diff_len);
		if (p2>10)
			p2 -= 10;
		
		// () 를 제외한 문자열의 내용이 똑같다면, 100%가 아니도록 되돌린다.
		if (p2==100)
		{
			var m = parseInt(str1.length-str2.length);
			m /= 1.5;
			p2 = 96 - Math.abs(m);
		}
		
		// () 를 제외한 문자열의 내용이 똑같다면, 100%가 아니도록 되돌린다.
		if (penalty==1 && str_change1==str_change2) {
			var m = parseInt(str1.length-str2.length);
			m /= 2.5;
			
			result = 96 - Math.abs(m);
			
			if (penalty!=1)
				result = result * penalty;

			return result;
		}
		else if (str_change1==str_change2) {
			var m = parseInt(str1.length-str2.length);
			m /= 3;
			
			p1 = p1 - Math.abs(m);
			p2 = p2 - Math.abs(m);
		}
		//else
			//p2 = p2 - 
		
		//alert("p1 : " + p1 + "\np2 : " + p2 + "\np3 : " + p3);
		
		if (parseInt(p1) < parseInt(p3))
			p1 = parseInt(p3);
			
		var n = (parseInt(p1) > parseInt(p2)) ? parseInt(p1) : parseInt(p2);
		
		if (penalty!=1)
			n = n * penalty;// * (0.3);
			
		return n;
	}
	
	function getStringMatchPercentProc(str1, str2, diff_len)
	{
		var str_change1 = str1.replace(new RegExp(/[ \{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi), "");
		var str_change2 = str2.replace(new RegExp(/[ \{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi), "");
		
		if (str_change1==str_change2) {
			//alert(str1 + "/" + str2);
			//var m = parseInt(str1.length-str2.length);
			//m /= 4;
			
			diff_len /= 4;
			
			return 99 - Math.abs(diff_len);
		}
		
		//var percent0 = checkAllChar(str_change1, str_change2);
		
		//str_change1 = str_change2.replace(new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi), "");//new RegExp(/[^a-z0-9_ㄱ-ㅎ가-힣ㅏ-ㆌ ]/gi), "");
		//str_change2 = str_change2.replace(new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi), "");//new RegExp(/[^a-z0-9_ㄱ-ㅎ가-힣ㅏ-ㆌ ]/gi), "");
		
		var lenval_min = str_change1.length<str_change2.length ? str_change1.length : str_change2.length;
		var lenval_max = str_change1.length<str_change2.length ? str_change2.length : str_change1.length;
		
		var percent1 = checkAllChar(str_change1, str_change2);
		var percent2 = 0;
		var percent3 = check_string_all(str_change1, str_change2);
		 
		//alert(lenval_max-lenval_min);
		
		if (lenval_max-lenval_min>16)
		{
			percent1 = 0;
			//return cutDotNumber("0");
		}
			
		if (lenval_min*2<lenval_max)
		{
			percent1 = 0;
			//return cutDotNumber("0");
		}
		
		// 너무 길이차이가 많이나면, 패스
		if (lenval_min<3 && lenval_min*5<lenval_max)
		{
			return 0;
		}
		
		percent2 = check_match_explode(" ", str1, str2, lenval_min, lenval_max, diff_len);
		//alert("check_match_explode : " + str2 + "\n" + percent2);
		//if (percent2==0)
			//percent2 = check_match_explode(".", str_change1, str_change2, lenval_min, lenval_max);;
		
		//alert('GET [' + str_change1 + ']\npercent1 : ' + percent1 + '\npercent2 : ' + percent2 + '\npercent3 : ' + percent3);
		
		if (percent2<=0)
		{
			if (str2.indexOf(str1)!=-1)
			{
				var z = 0
				z = (str2.length<str1.length) ? str1.length : str2.length;
				
				percent2 = str1.length / z * 100 - diff_len;
			}
		}
		else
		{
			if (percent2-(lenval_max + diff_len)<=0)
				return percent2;
		}
		
//alert("percent1 : " + percent1 + "\npercent2 : " + percent2 + "\npercent3 : " + percent3 + "\nlen_diff : " + diff_len);

		percent2 = percent2<percent3 ? percent3 : percent2;
		
		if (percent1>percent2)
		{
			var p = ((percent1+percent2)/200) * 100;
			
			if (p>=100)
			{
				var m = parseInt(str1.length-str2.length);
				m /= 4;
				return 100 - Math.abs(m);
			}
			
			p = percent1 - (lenval_max + diff_len);
		}
		else
		{
			p = percent2 - diff_len;
			
			if (p<=0)
				p = percent2;
		}
		
		return cutDotNumber(p);
		
//alert("P2 : " + percent2);		
		//if (percent1==0 && percent2==0)	return cutDotNumber(percent2);
		if (percent2<=1)
		{
			var result = percent1-diff_len;
			if (result<0) result = 0;
			
			return cutDotNumber(result);
		}
		else if (percent1<=1)
		{
			var result = percent2-diff_len;
			if (result<0) result = 0;
			
			return cutDotNumber(result);
		}
		else if (percent2>=80)
		{
			var result = percent2-diff_len;
			if (result<0) result = 0;
			
			return cutDotNumber(result);
		}
		else if (percent2<40 && percent2<percent1)
		{
			return cutDotNumber(percent1);	
		}
		else
		{
			var p = ((percent1+percent2)/200) * 100;
			
			if (p>=100)
			{
				var m = parseInt(str1.length-str2.length);
				m /= 4;
				return 100 - Math.abs(m);
			}
			else
			{
				//if (Math.abs(percent1-percent2)>45)
				if (percent1<10 || percent2<10)
				{
					p = percent1<percent2 ? percent2 : percent1;
					//p -= diff_len;
					p -= (lenval_max + diff_len);
				}

				//alert(str1);
				//p = percent1<percent2 ? percent2 : percent1;
			}
			
			return cutDotNumber(p);
		}
	}
	
	
	// () 안의 문자를 제외하지 않고, 가급적 전체 문자열 체크
	function getMatchPercentFull(str1, str2, ignore_str)
	{
		//var match_cnt = 0;
		
		var chk = "~`!@#$%^&*()-=\\_+|;':<>?,./";
		
		var i = 0;
		
		str1 = str1.toLowerCase();
		str2 = str2.toLowerCase();
		
		str1 = blankDelete(str1);
		str2 = blankDelete(str2);
		
		var diff_len = parseInt(str1.length-str2.length);
		diff_len = Math.abs(diff_len);
		
		if (ignore_str!=null)
		{
			var ignore_str_len = ignore_str.length;
			
			if (str1.substring(0, ignore_str_len)==ignore_str && str2.substring(0, ignore_str_len)!=ignore_str)
			{
				str1 = str1.substring(4);	
			}
			
			if (str2.substring(0, ignore_str_len)==ignore_str && str1.substring(0, ignore_str_len)!=ignore_str)
			{
				str2 = str2.substring(4);	
			}
		}
		
		str1 = TwoBtye2OneByte(str1);
		str2 = TwoBtye2OneByte(str2);
		
		var str_change1 = str1.replace(new RegExp(/ /gi), "");
		var str_change2 = str2.replace(new RegExp(/ /gi), "");
		
		if (str_change1==str_change2) {
			var m = parseInt(str1.length-str2.length);
			m /= 5;
			return 100 - Math.abs(m);
		}
		
		str_change1 = str_change1.replace(new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\" ]/gi), "");
		str_change2 = str_change2.replace(new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\" ]/gi), "");
		
		if (str_change1==str_change2) {
			var m = parseInt(str1.length-str2.length);
			m /= 4;
			return 100 - Math.abs(m);
		}
		
		//var percent0 = checkAllChar(str_change1, str_change2);
		
		str_change1 = str1.replace(new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi), "");//new RegExp(/[^a-z0-9_ㄱ-ㅎ가-힣ㅏ-ㆌ ]/gi), "");
		str_change2 = str2.replace(new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi), "");//new RegExp(/[^a-z0-9_ㄱ-ㅎ가-힣ㅏ-ㆌ ]/gi), "");
		
		var lenval_min = str_change1.length<str_change2.length ? str_change1.length : str_change2.length;
		var lenval_max = str_change1.length<str_change2.length ? str_change2.length : str_change1.length;
		
		var percent1 = checkAllChar(str_change1, str_change2);
		var percent2 = 0;
		var percent3 = check_string_all(str_change1, str_change2);
		
		//alert(lenval_max-lenval_min);
		
		if (lenval_max-lenval_min>16)
		{
			percent1 = 0;
			//return cutDotNumber("0");
		}
			
		if (lenval_min*2<lenval_max)
		{
			percent1 = 0;
			//return cutDotNumber("0");
		}
		
		// 너무 길이차이가 많이나면, 패스
		if (lenval_min<3 && lenval_min*5<lenval_max)
		{
			return 0;
		}
		
		percent2 = check_match_explode(" ", str1, str2, lenval_min, lenval_max, diff_len);
		
		/*if (percent2==0)
		{
			str_temp1 = str1.replace(new RegExp(/[\{\}\[\]\/?,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi), "");
			str_temp2 = str2.replace(new RegExp(/[\{\}\[\]\/?,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi), "");
		
			percent2 = check_match_explode(".", str_temp1, str_temp2, lenval_min, lenval_max);;
		}*/
		
		if (percent2==0)
		{
			//percent2 = check_string_all(str_change1, str_change2);
		}
		
		percent2 = percent2<percent3 ? percent3 : percent2;
		
		//if (percent1==0 && percent2==0)	return cutDotNumber(percent2);
		if (percent2==0)		return cutDotNumber(percent2);
		else if (percent1==0)	return cutDotNumber(percent2);
		else if (percent2>80)	return cutDotNumber(percent2);
		else if (percent2<40 && percent2<percent1)
		{
			return cutDotNumber(percent1);	
		}
		else
		{
			var p = ((percent1+percent2)/200) * 100;
			
			if (p==100)
			{
				var m = parseInt(str1.length-str2.length);
				m /= 4;
				return 100 - Math.abs(m);
			}
			
			return cutDotNumber(p);
		}
	}
	
	// () 안의 문자를 제외하고, 가급적 전체 문자열 체크
	function getMatchPercent(str1, str2, ignore_str)
	{
		//var match_cnt = 0;
		
		var chk = "~`!@#$%^&*()-=\\_+|;':<>?,./";
		
		var i = 0;
		
		str1 = str1.toLowerCase();
		str2 = str2.toLowerCase();
		
		str1 = blankDelete(str1);
		str2 = blankDelete(str2);
		
		var diff_len = parseInt(str1.length-str2.length);
		diff_len = Math.abs(diff_len);
		
		if (ignore_str!=null)
		{
			var ignore_str_len = ignore_str.length;
			
			if (str1.substring(0, ignore_str_len)==ignore_str && str2.substring(0, ignore_str_len)!=ignore_str)
			{
				str1 = str1.substring(4);	
			}
			
			if (str2.substring(0, ignore_str_len)==ignore_str && str1.substring(0, ignore_str_len)!=ignore_str)
			{
				str2 = str2.substring(4);	
			}
		}
		
		str1 = TwoBtye2OneByte(str1);
		str2 = TwoBtye2OneByte(str2);
		
		var str_change1 = str1.replace(new RegExp(/ /gi), "");
		var str_change2 = str2.replace(new RegExp(/ /gi), "");
		
		if (str_change1==str_change2) {
			var m = parseInt(str1.length-str2.length);
			m /= 5;
			return 100 - Math.abs(m);
		}
		
		str_change1 = str1.replace(new RegExp(/\((.*?)\)/gi), "");
		str_change2 = str2.replace(new RegExp(/\((.*?)\)/gi), "");
		
		str_change1 = str_change1.replace(new RegExp(/\[(.*?)\]/gi), "");
		str_change2 = str_change2.replace(new RegExp(/\[(.*?)\]/gi), "");
		
		str_change1 = str_change1.replace(new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\" ]/gi), "");
		str_change2 = str_change2.replace(new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\" ]/gi), "");
		
		if (str_change1==str_change2) {
			var m = parseInt(str1.length-str2.length);
			m /= 4;
			return 100 - Math.abs(m);
		}
		
		//var percent0 = checkAllChar(str_change1, str_change2);
		
		str_change1 = str1.replace(new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi), "");//new RegExp(/[^a-z0-9_ㄱ-ㅎ가-힣ㅏ-ㆌ ]/gi), "");
		str_change2 = str2.replace(new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi), "");//new RegExp(/[^a-z0-9_ㄱ-ㅎ가-힣ㅏ-ㆌ ]/gi), "");
		
		var lenval_min = str_change1.length<str_change2.length ? str_change1.length : str_change2.length;
		var lenval_max = str_change1.length<str_change2.length ? str_change2.length : str_change1.length;
		
		var percent1 = checkAllChar(str_change1, str_change2);
		var percent2 = 0;
		var percent3 = check_string_all(str_change1, str_change2);
		
		//alert(lenval_max-lenval_min);
		
		if (lenval_max-lenval_min>16)
		{
			percent1 = 0;
			//return cutDotNumber("0");
		}
			
		if (lenval_min*2<lenval_max)
		{
			percent1 = 0;
			//return cutDotNumber("0");
		}
		
		// 너무 길이차이가 많이나면, 패스
		if (lenval_min<3 && lenval_min*5<lenval_max)
		{
			return 0;
		}
		
		percent2 = check_match_explode(" ", str1, str2, lenval_min, lenval_max, diff_len);
		
		//if (percent2==0)
			//percent2 = check_match_explode(".", str_change1, str_change2, lenval_min, lenval_max);;
		
		if (percent2==0)
		{
			//percent2 = check_string_all(str_change1, str_change2);
		}
		
		percent2 = percent2<percent3 ? percent3 : percent2;
		
		//if (percent1==0 && percent2==0)	return cutDotNumber(percent2);
		if (percent2==0)		return cutDotNumber(percent2);
		else if (percent1==0)	return cutDotNumber(percent2);
		else if (percent2>80)	return cutDotNumber(percent2);
		else if (percent2<40 && percent2<percent1)
		{
			return cutDotNumber(percent1);	
		}
		else
		{
			var p = ((percent1+percent2)/200) * 100;
			
			if (p==100)
			{
				var m = parseInt(str1.length-str2.length);
				m /= 4;
				return 100 - Math.abs(m);
			}
			
			return cutDotNumber(p);
		}
	}
	
	function check_string_all(str1, str2)
	{
		var z = 0;
		var panalty1_count = str1.length;
		var panalty2_count = str2.length;
		var panalty_count = 0;
		
		var strSrc = str1.replace(new RegExp(/ /gi), "");
		var strDst = str2.replace(new RegExp(/ /gi), "");
		
		var str_temp1 = strSrc.replace(new RegExp(/\((.*?)\)/gi), "");
		var str_temp2 = strDst.replace(new RegExp(/\((.*?)\)/gi), "");
		
		str_temp1 = str_temp1.replace(new RegExp(/\[(.*?)\]/gi), "");
		str_temp2 = str_temp1.replace(new RegExp(/\[(.*?)\]/gi), "");
		
		var max1 = strSrc.length;
		var max2 = strDst.length;
		
		var len_max = max1<max2 ? max2 : max1;
		
		panalty1_count = (panalty1_count-strSrc.length);
		panalty2_count = (panalty2_count-strSrc.length);
		panalty_count = Math.abs(panalty1_count - panalty2_count);
		
		var ch = "";
		
		var idx = -1;
		var finded = 0;
		var start_idx = -1;
		
		var percent = 0;
		
		var percent_default = 0;
		
		// 대상 문자열이 더 작다면,
		if (str_temp2<str_temp1)
		{
			//percent_default = 10;
		}
		
		strSrc = strSrc.replace(new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi), "");
		strDst = strDst.replace(new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi), "");
		
		var len_diff = Math.abs(str1.length-str2.length);
		
		if (len_diff<=6 && strSrc.length>8 && strDst.indexOf(strSrc)!=-1)
		{
			//var n = strDst.indexOf(strSrc);
			var n1 = strSrc.length/len_max * 100;
			var n2 = strDst.indexOf(strSrc) / len_max * 100;
			
			n1 /= 10;
			n2 /= 10;
			
			percent = 96 - (len_diff*2) - percent_default;
			
			percent -= n1;
			percent -= n2;
		}
		else if (len_diff<=6 && strDst.length>8 && strSrc.indexOf(strDst)!=-1)
		{
			var n1 = strDst.length/len_max * 100;
			var n2 = strSrc.indexOf(strDst) / len_max * 100;
			
			n1 /= 10;
			n2 /= 10;
			
			percent = 96 - (len_diff*2) - percent_default;
			
			percent -= n1;
			percent -= n2;
		}
		else if (len_diff<=strDst.length/2 && strDst.indexOf(strSrc)!=-1)
		{
			var n1 = strSrc.length / len_max * 100;
			var n2 = strDst.indexOf(strSrc) / len_max * 100;
			
			//n1 /= 10;
			n2 /= 10;
			//alert(n2);
			percent = (96 - (len_diff*2)) - percent_default;
			
			percent -= n1;
			percent -= n2;
		}
		else if (len_diff<=strSrc.length/2 && strSrc.indexOf(strDst)!=-1)
		{
			var n1 = strDst.length/len_max * 100;
			var n2 = strSrc.indexOf(strDst) / len_max * 100;
			
			n1 /= 10;
			n2 /= 10;
			
			percent = 90 - (len_diff*2) - percent_default;
			
			percent -= n1;
			percent -= n2;
		}
		else
		{
			var arr_char = new Array(strSrc.length);
			var src_char = new Array(strSrc.length);
			//var dst_char = new Array(strSrc.length);
			var diff_char = 0;
	
			for (var i=0; i<strSrc.length; i++)
			{
				//dst_char[i] = 0;
				arr_char[i] = 0;
				src_char[i] = "";
				ch = strSrc.substring(i, i+1);
				
				if (i>=strDst.length) break;
				
				idx = strDst.indexOf(ch);
				
				if (idx==-1)
				{
					if (arr_char[i]==0)
						diff_char++;
						
					continue;
				}
				
				do
				{
					finded = 0;
					
					var x = ((max2-i)-idx);//-(Math.abs(idx-i));
					
					x *= (1/(panalty_count+1));
					
					//alert(panalty);
					for (var k=0; i+k<strSrc.length; k++)
					{
						if (strSrc.substring(i+k, i+k+1)==strDst.substring(idx+k, idx+k+1))
						{
							//arr_char[i] = k + 1 + x + finded;//-(strSrc.length-i-finded)
							arr_char[i]++;//-(strSrc.length-i-finded)
							src_char[i] = strSrc.substring(i, i+k+1);
							//if (dst_char[i]==0) dst_char[i] = k;
							finded++;
						}
						else
							break;
					}
						
					if (finded<=2) arr_char[i] = 0;
					
					if (finded>2 && start_idx==-1) start_idx = k;
						
					idx = strDst.indexOf(ch, idx+1);
				}
				while (idx!=-1 && idx<strSrc.length);
				
				if (arr_char[i]==0)
					diff_char++;
			}

			var match_cnt = 0;
			var match_idx = 0;
			for (var i=0; i<arr_char.length; i++)
			{
				if (match_cnt<arr_char[i])
				{
					match_cnt = arr_char[i];
					match_idx = i;
					
					//====================================
					
					percent += match_cnt / len_max * 100;
					
					var n = 100-(match_idx/len_max*100);
					n = n/5;
					
					percent += n;
					
					if (percent > 95) percent = 95;
					
					//percent -= diff_char;
					
					n = 100 - (src_char[match_idx].length/len_max*100);
					n = n/10;
					
					percent -= n;
					
					//====================================
				}
			}
			//alert(strDst + ' : ' + percent);
			//var d = Math.abs(max1-max2) * 2;
			//var l = (str_temp1.length<str_temp2.length) ? str_temp2.length : str_temp1.length;
			
			if (start_idx==-1) return 0;
			
			if (percent>100) percent = 98;
			
			//percent = match_cnt / len_max * 100;
			/*
			var n = 100-(match_idx/len_max*100);
			n = n/5;
			
			percent += n;
			
			if (percent > 95) percent = 95;
			
			//percent -= diff_char;
			
			n = 100 - (src_char[match_idx].length/len_max*100);
			n = n/10;
			
			percent -= n;
			*/
			//n = (diff_char/len_max*100);
			//n = n/5;
			
			n = diff_char * 2;
			//percent -= n;
			
			if (percent<diff_char)
				percent -= diff_char;
			else
				percent -= n;
				//alert(strDst + ' : ' + n);
			//alert(strDst + ' : ' + percent);
			/*	
				alert(strDst + "\n" + percent);*/
				//alert(percent);
				
			//if (percent<=0)
				//percent = 30;
			
			
			
			//d = (str_temp1.length<str_temp2.length) ? str_temp2.length : str_temp1.length;
			//d = len_max - src_char[match_idx].length + diff_char * 1.5;
			///percent -= d;
			
			//alert(match_cnt + "/" + len_max + "=" + percent);
			
			/*
			return percent;
			
			//percent = match_cnt/(l*src_char[match_idx].length*2)*100;//((start_idx / 0.5) * x + (match_idx+1) * x)*100;
			percent = match_cnt/(l*5)*100;//((start_idx / 0.5) * x + (match_idx+1) * x)*100;
			//percent = match_cnt/((start_idx / 0.5) * x + (match_idx+1) * x)*100;
			//return percent;
			if (percent > 100) percent = 95;
			
			if (percent>80) percent -= d;
			
			if (percent>50)
			{
				//d = (strSrc.length<strDst.length) ? strDst.length : strSrc.length;
				//d -= src_char[match_idx].length;
				
				d = (str_temp1.length<str_temp2.length) ? str_temp2.length : str_temp1.length;
				d -= src_char[match_idx].length - diff_char * 1.5;
			//d += diff_char;
				percent -= d;
			}*/
			
			if (percent<0) percent = 0;
		}
		
		percent -= percent_default;
		
		if (percent<0) percent = 0;
		
		//percent *= (panalty_count+1) * 0.1;
			
		return  percent;
	}
	
	function check_find_explode(explode_str, str_change1, str_change2, lenval_min, lenval_max, diff_len)
	{
		diff_len = Math.abs(str_change1.length-str_change2.length) < diff_len ? diff_len : Math.abs(str_change1.length-str_change2.length);
		
		str_change1 = str_change1.replace(new RegExp(/,/), " ");
		str_change2 = str_change2.replace(new RegExp(/,/), " ");

		str_change1 = str_change1.replace(new RegExp(/\(/), " ");
		str_change2 = str_change2.replace(new RegExp(/\(/), " ");
		
		str_change1 = str_change1.replace(new RegExp(/\)/), " ");
		str_change2 = str_change2.replace(new RegExp(/\)/), " ");
		
		str_change1 = str_change1.replace(new RegExp(/-/), " ");
		str_change2 = str_change2.replace(new RegExp(/-/), " ");
		
		var arr_src = str_change1.split(explode_str);
		
		var match_cnt = 0;
		
		var max_cnt = 0;
		var max_arr_src = arr_src.length;
		var max_arr_dst = arr_dst.length;
		
		var arr_check_true = 0;
		
		if (max_arr_src==0 || max_arr_dst==0) return 0;
		
		// 배열요소끼리 모두 일치하는지 확인
		var arr_check = Array();
		
		for (i=0; i<arr_src.length; i++)
		{
			arr_src[i] = arr_src[i].replace(new RegExp(/[\{\}\[\]\/?,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi), "");
		}
		
		for (i=0; i<arr_src.length; i++)
		{
			str_change2.indexOf(arr_src[i]);
			arr_check[i] = false;
			
			for (var k=0; k<arr_dst.length; k++)
			{
				if (arr_src[i]!="" && arr_src[i]==arr_dst[k])
				{
					arr_check[i] = true;
					arr_check_true++;
				}
			}
		}
		
	}
	
	function check_match_explode(explode_str, str_change1, str_change2, lenval_min, lenval_max, diff_len)
	{
		var chk = "~`!@#$%^&*()-=\\_+|;':<>?,./";
		
		diff_len = Math.abs(str_change1.length-str_change2.length) < diff_len ? diff_len : Math.abs(str_change1.length-str_change2.length);
		
		str_change1 = str_change1.replace(new RegExp(/,/), " ");
		str_change2 = str_change2.replace(new RegExp(/,/), " ");
		
		str_change1 = str_change1.replace(new RegExp(/\(/), " ");
		str_change2 = str_change2.replace(new RegExp(/\(/), " ");
		
		str_change1 = str_change1.replace(new RegExp(/\)/), " ");
		str_change2 = str_change2.replace(new RegExp(/\)/), " ");
		
		str_change1 = str_change1.replace(new RegExp(/-/), " ");
		str_change2 = str_change2.replace(new RegExp(/-/), " ");
		
		var arr_src = str_change1.split(explode_str);
		var arr_dst = str_change2.split(explode_str);
		
		var match_cnt = 0;
		
		var max_cnt = 0;
		var max_arr_src = arr_src.length;
		var max_arr_dst = arr_dst.length;
		
		var arr_check_true = 0;
		
		if (max_arr_src==0 || max_arr_dst==0) return 0;
		
		// 배열요소끼리 모두 일치하는지 확인
		var arr_check = Array();
		
		for (i=0; i<arr_src.length; i++)
		{
			arr_src[i] = arr_src[i].replace(new RegExp(/[\{\}\[\]\/?,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi), "");
		}
		
		for (i=0; i<arr_dst.length; i++)
		{
			arr_dst[i] = arr_dst[i].replace(new RegExp(/[\{\}\[\]\/?,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi), "");
		}
		
		for (i=0; i<arr_src.length; i++)
		{
			arr_check[i] = false;
			
			for (var k=0; k<arr_dst.length; k++)
			{
				if (arr_src[i]!="" && arr_src[i]==arr_dst[k])
				{
					arr_check[i] = true;
					arr_check_true++;
				}
			}
		}
		
		/*
		if (arr_src.length>0 && arr_src.length==arr_check.length)
		{
			//return 10;
			
			var all_match = true;
			
			for (i=0; i<arr_check.length; i++)
			{
				if (arr_check[i]==false)
				{
					all_match = false;
				}
			}
			
			var result = 100/arr_dst.legnth();
			
			
			if (arr_src.length==1)
				
			if (all_match) return (80 - checkLenDiff(str_change1, str_change2)/1.8);
		}
		*/
		
		for (i=0; i<arr_src.length; i++)
		{
			if (arr_src[i]==" " || arr_src[i]=="")
			{
				arr_src[i] = "";
				max_arr_src--;
			}
			else if (arr_src[i].length==1)
			{
				//if (chk.indexOf(arr_src[i])>=0)
				{
					arr_src[i] = "";
					max_arr_src--;
				}
			}
		}
		
		for (i=0; i<arr_dst.length; i++)
		{
			if (arr_dst[i]==" " || arr_dst[i]=="")
			{
				arr_dst[i] = "";
				max_arr_dst--;
			}
			else if (arr_dst[i].length==1)
			{
				//if (chk.indexOf(arr_dst[i])>=0)
				{
					arr_dst[i] = "";
					max_arr_dst--;
				}
			}
		}
		
		var bigger_len = arr_src.length<arr_dst.length ? arr_dst.length : arr_src.length;
		
		if (arr_src.length>0 && bigger_len==arr_check_true)
		{
			//return 10;
			
			var all_match = true;
			
			for (i=0; i<arr_check.length; i++)
			{
				if (arr_check[i]==false)
				{
					all_match = false;
				}
			}

			var x = 90/(Math.abs(max_arr_src-max_arr_dst)+1);
			//var result = 80 - x;
			
			var result = 90 - (Math.abs(max_arr_src-max_arr_dst)+1);
			
			if (all_match)
			{
				return (result - checkLenDiff(str_change1, str_change2)/1.8);
			}
		}
		
		max_cnt = (max_arr_src<max_arr_dst) ? max_arr_dst : max_arr_src;
		
		var stepval = 1;
		
		if (lenval_min*3<lenval_max)
			stepval = lenval_min/lenval_max;
		
		var matched_len = 0;
		
		for (i=0; i<arr_src.length; i++)
		{
			if (arr_src[i]==" " || arr_src[i]=="") continue;
			
			for (var k=0; k<arr_dst.length; k++)
			{
				if (arr_dst[k]==" " || arr_dst[k]=="") continue;
				
				str1 = arr_src[i].substring(0, arr_src[i].length-1);
				str2 = arr_dst[k].substring(0, arr_dst[k].length-1);
				
				if (arr_src[i]==arr_dst[k])
				{
					matched_len += arr_src[i].length;
					match_cnt++;
					break;
				}
				else if (str1!="" && str2!="" && str1.length>1 && str2.length>1 && str1==str2)
				{
					matched_len += str1.length;
					match_cnt += 0.5;
					break;
				}
				else if (k==arr_dst.length-1 && checkHead(arr_src[i], arr_dst[k]))
				{
					if (checkLenDiff(arr_src[i], arr_dst[k])<5)
						match_cnt += stepval;
					break;
				}
				else if (k==arr_dst.length-1 && checkTail(arr_src[i], arr_dst[k]))
				{
					if (checkLenDiff(arr_src[i], arr_dst[k])<5)
						match_cnt += stepval;
					break;
				}
				else if (checkHead(arr_src[i], arr_dst[k]) && checkTail(arr_src[i], arr_dst[k+1]))
				{
					match_cnt++;
					break;
				}
				else if (getByteLen(arr_src[i])>5 && checkHead(arr_src[i], arr_dst[k]))
				{
					var ln = checkLenDiff(arr_src[i], arr_dst[k]);
					
					if (ln<=4)	match_cnt += 1;
					else		match_cnt += 0.5;
					break;
				}
			}
		}
		
		var percent = match_cnt/max_cnt*100;
		
		if (percent<70 && arr_src.length==arr_dst.length && arr_src.length>1 && arr_src.length<=3)
		{
			var diff_cnt = 0;
			var diff_word_src = "";
			var diff_word_dst = "";
			
			for (i=0; i<arr_src.length; i++)
			{
				if (arr_src[i]==arr_dst[i]) continue;
				
				diff_cnt++;
				
				diff_word_src += arr_src[i];
				diff_word_dst += arr_dst[i];
			}
			
			var ln = checkLenBig(diff_word_src, diff_word_dst);
			
			if (ln<=3)
			{
				match_cnt += 1;
				percent = match_cnt/max_cnt*100;
			}
		}
		
		if (percent>=100)
		{
			if (lenval_max!=lenval_min)
			{
				var m = parseInt(lenval_min/lenval_max*100);
				
				// 여기는 문자열을 잘라서 비교한 부분에 대한 처리이므로,
				// 추후 조절이 필요한 부분이다. 예를 들어 (낚시 = 낚시낚시 의경우 100%가 나오지만 위의 공식으로 50%로 조절된다.
				// 영문등의경우엔 틀릴 수 있으므로, 아래의 가중치를 더 줄 수 있도록 해야할 수 도 있다.
				//m *= 0.3;
				//alert(str1);
				percent = 100 - Math.abs(m);
				percent -= diff_len;
			}
			else
				percent = 98;
		}
		
		if (lenval_max/matched_len<5)
		{
			var limit_percent = (lenval_max-lenval_min)/lenval_max*100;
			if (percent>limit_percent)
			{
				percent = limit_percent;
			}
			
			//alert('test : ' + str_change1 + '\n' + str_change2 + '\n' + percent);
		}
		else
		{
			percent = matched_len/lenval_max * 100;
			percent -= diff_len;
			//alert('test : ' + str_change1 + '\n' + str_change2 + '\n' + percent);
			var limit_percent = (lenval_max-lenval_min)/lenval_max*100;
			if (percent>limit_percent)
			{
				percent = limit_percent;
			}
		}
		
		return percent;
	}
	
	function checkLenDiff(str1, str2)
	{
		var ln = getByteLen(str1) - getByteLen(str2);
					
		if (ln<0)	ln *= -1;
		return ln;
	}
	
	function checkLenBig(str1, str2)
	{
		if (str1.length<str2.length)
		{
			return str2.length;
		}
			
		return str1.length;	
	}
	
	function checkDiff(no1, no2)
	{
		var ln = no1 - no2;
		if (ln<0)	ln *= -1;
		return ln;
	}
	
	function cutDotNumber(p)
	{
		if (p>100) p = 100;
			
		p = "" + p;
		if (p.length>5)
			p = p.substring(0, 5);
		return p;
	}
	
	function get_changed_len_percent(str1, str2)
	{
		var z = 0
		z = (str2.length<str1.length) ? str1.length : str2.length;
		z = 100/z;
		return z;
		/*
		if (!max_percent)
			max_percent = 100;
			
		z = max_percent - z * diff_len;
		
		return z;
		*/
	}
	
	function checkAllChar(str1, str2)
	{
		str1 = str1.replace(new RegExp(/ /gi), "");
		str2 = str2.replace(new RegExp(/ /gi), "");
		
		var strSrc = (str1.length<str2.length) ? str1 : str2;
		var strDst = (str1.length<str2.length) ? str2 : str1;
		
		var max1 = strSrc.length;
		var max2 = strDst.length;
		
		var ch = "";
		
		var idx = -1;
		
		for (var i=0; i<max1; i++)
		{
			ch = strSrc.substring(i, i+1);
			idx = strDst.indexOf(ch);
			
			if (idx==-1) continue;
			if (checkDiff(i, idx)<4)
				strDst = strDst.replace(ch, "");
		}
		
		if (strDst=="") return 90;
		
		
		var l = get_changed_len_percent(str2, strDst);
		var p = 90 - l * strDst.length;
		
		p -= (strDst.length/max2*100);
		
		if (p<0)
			p = 1;
		return p;
	}
	
	function checkHead(str1, str2)
	{
		if (str1.length<str2.length)
		{
			str2 = str2.substring(0, str1.length);
		}
		else if (str1.length>str2.length)
		{
			str1 = str1.substring(0, str2.length);
		}
		
		return (str1==str2);
	}
	
	function checkTail(str1, str2)
	{
		if (str1.length<str2.length)
		{
			str2 = str2.substring(str2.length-str1.length, str2.length);
		}
		else if (str1.length>str2.length)
		{
			str1 = str1.substring(str1.length-str2.length, str1.length);
		}
		
		return (str1==str2);
	}
	
	
	
	
	var arr_point = new Array();
	var arr_percent = new Array();
	
	function initMatchPointPercent()
	{
		for (var i in arr_point) {
			arr_point[i] = 0;
		}
	}
	
	function calcMatchPointPercent(str, dstname, add_point, check_penalty)
	{
		if (str=="")
		{
			for (var i in arr_percent) {
				arr_percent[i] = 0;
			}
			
			return 0;
		}
		else
		{
			//$(obj).css("background-color", "#00ff00"); 
			
			if (dstname.substring(0, 1)==".")
			{
				for (var i in arr_percent) {
					arr_percent[i] = 0;
				}
	
				$(dstname).each(function (i) {
					
					if (!arr_percent[i]) 
						arr_percent[i] = 0;
					
					if (!arr_point[i])
						arr_point[i] = 0;
						
					var p = getMatchPercentTotal(str, $(this).text(), "", "", check_penalty);
					var color = percent_to_color(p);
					
					$(this).css("background-color", color);
					
					/*if (!arr_point[i])
					{
						var obj = new Object();
						obj.point = 0;
						obj.percent = 0;
						obj.calc_max = 0;
						arr_point[i] = obj;
					}
					else
					{
						arr_point[i].percent = 0;
						arr_point[i].calc_max = 0;
					}*/
					
					arr_percent[i] = parseInt(p);
					arr_point[i] += parseInt(p) * add_point;
				});
				
				return 0;
			}
			else if (dstname.substring(0, 1)=="#")
			{
				var obj = $(dstname);
		
				var p = getMatchPercentTotal(str, obj.text(), "", "", check_penalty);
				var color = percent_to_color(p);
				
				obj.css("background-color", color);
				
				return parseInt(p) * add_point;
				//if (!arr_point[dstname])
					//arr_point[dstname] = 0;
						
				//arr_point[dstname] = parseInt(p) * add_point;
			}
		}
		
		return 0;
	}
	
	function calcMatchPointSame(str, dstname, add_point, not_change_color)
	{
		if (str=="") return 0;
		else
		{
			var str1 = str.toLowerCase();
			var str2 = "";
			
			if (dstname.substring(0, 1)==".")
			{
				for (var i in arr_percent) {
					arr_percent[i] = 0;
				}
				
				$(dstname).each(function (i) {
					
					str2 = $(this).text().toLowerCase();
					
					if (!arr_percent[i]) 
						arr_percent[i] = 0;
						
					if (!arr_point[i])
						arr_point[i] = 0;
					
					if (str1==str2)
					{
						var p = 100;
						
						if (!not_change_color)
						{
							var color = percent_to_color(p);
							$(this).css("background-color", color);
						}
					
						arr_percent[i] = parseInt(p);
						arr_point[i] += parseInt(p) * add_point;
					}	
				});
				
				return 0;
			}
			else if (dstname.substring(0, 1)=="#")
			{
				var obj = $(dstname);
				
				str2 = obj.text().toLowerCase();
				
				
				if (str1==str2)
				{
					var p = 100;
					
					if (!not_change_color)
					{
						var color = percent_to_color(p);
						obj.css("background-color", color);
					}
				
					return parseInt(p) * add_point;
				}
			}
		}
		
		return 0;
	}
	
	function checkMatchString(str, dstname, check_penalty)
	{
		//$("." + srcname).css("background-color", ""); 
		$("." + dstname).css("background-color", "");
		
		//var str = $(obj).text();
		
		if (str=="") return;
		else
		{
			var max_match_percent = 0;
			var max_match_count = 0;
			
			//$(obj).css("background-color", "#00ff00"); 
			
			$("." + dstname).each(function (i) {
				
				var p = getMatchPercentTotal(str, $(this).text(), "", "", check_penalty);
				
				var color = percent_to_color(p);;
				
				if (p>0)
				{
					if (max_match_percent<p)
						max_match_percent = p;
					
					max_match_count++;
				}
				
				$(this).css("background-color", color);
				
				//$(this).text($(this).text() + " / " + p);
				
			});
		}
	}
