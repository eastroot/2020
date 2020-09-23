
/*
*----------------------------
* 팝업 콘트롤러 함수
*----------------------------
*/
function popup_controller() {
	/**
	* 앨범 팝업 영역
	*/
	{
		/**
		* 앨범정보 보기	예) /perform/album/get_info/?f_albumcode=700000000377687
		* @param	string
		* @return	void
		*/
		this.open_album_view = function (f_albumcode) {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=1100, height=1000,left=100, top=100";
			window.open("/perform/album/get_view/?f_albumcode="+f_albumcode, "_blank", option);
		}
		
		/**
		* 앨범정보 보기	예) /perform/album/get_info/?f_albumcode=700000000377687
		* @param	string
		* @return	void
		*/
		this.open_expire_album_view = function (f_albumcode) {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=1425, height=1000,left=100, top=100";
			window.open("/perform/expire_album/get_view/?f_albumcode="+f_albumcode, "_blank", option);
		}
		
		
		/**
		* 론뮤직 등록 팝업
		* @param	string
		* @return	void
		*/
		this.open_ron_right = function () {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=820, height=800,left=100, top=100";
			window.open("/perform/ronmusic/ron_music_write/", "_blank", option);
		}
		
		/**
		* UCI 없음  등록 팝업
		* @param	string
		* @return	void
		*/
		this.open_uci_right = function () {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=820, height=800,left=100, top=100";
			window.open("/perform/ronmusic_ucix/uci_music_write/", "_blank", option);
		}
		/**
		* 뮤직 대랑등록 팝업
		* @param	string
		* @return	void
		*/
		this.open_music_upload_right = function () {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=820, height=800,left=100, top=100";
			window.open("/perform/music_upload/music_upload_write/?uci_yn=Y", "_blank", option);
		}
		
		/**
		* UCI 없음  뮤직대량등록 팝업
		* @param	string
		* @return	void
		*/
		this.open_music_upload_uci_right = function () {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=820, height=800,left=100, top=100";
			window.open("/perform/music_upload/music_upload_write/?uci_yn=N", "_blank", option);
		}		
		
		/**
		* 대량 등록 (앨범, 곡) 팝업
		* @param	string
		* @return	void
		*/
		this.open_massive_right = function () {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=820, height=800,left=100, top=100";
			window.open("/perform/massive/massive_write/", "_blank", option);
		}
		
		/**
		* 앨범정보 보기	예) /perform/album/get_info/?f_albumcode=700000000377687
		* @param	string
		* @return	void
		*/
		this.open_mematch_album_view = function (f_albumcode) {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=820, height=800,left=100, top=100";
			window.open("/perform/mematch/get_view/?f_albumcode="+f_albumcode, "_blank", option);
		}
		
		this.open_mematch_confirm_view = function (f_albumcode) {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=330,left=100, top=100";
			window.open("/perform/mematch/get_mematch_confirm_view/?f_albumcode="+f_albumcode, "_blank", option);
		}
		
		/**
		* 앨범 등록/수정
		* @param	string
		* @return	void
		*/
		this.open_album_write = function (f_albumcode) {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=720, height=800,left=100, top=100";
			window.open("/perform/album/album_write/?f_albumcode="+f_albumcode, "_blank", option);
		}
		
		/**
		* 앨범 등록/수정
		* @param	string
		* @return	void
		*/
		this.open_mematch_album_write = function (f_albumcode) {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=720, height=800,left=100, top=100";
			window.open("/perform/mematch/album_view/?f_albumcode="+f_albumcode, "_blank", option);
		}
		
		/**
		* MP3 등록 / 수정 pys!@# -> 곡단위 등록 팝업
		* @param	string
		* @return	void
		*/		
		this.open_mp3_search_view = function (f_songcode) 
		{
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=1200, height=900,left=100, top=100";
			window.open("/perform/song/open_mp3_search_view?f_songcode="+f_songcode, "_blank", option);
		}
		
		/**
		* MP3 등록 / 수정 pys!@# -> 앨범 단위 등록 팝업
		* @param	string
		* @return	void
		*/		
		this.open_mp3_search_view2 = function (f_albumcode) 
		{
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes, width=1500, height=900,left=100, top=100";
			window.open("/perform/song/open_mp3_search_view2?f_albumcode="+f_albumcode, "_blank", option);
		}
		
		/**
		* MP3 등록 / 수정 pys!@# -> 앨범 단위 등록 팝업
		* @param	string
		* @return	void
		*/		
		/*this.open_mp3_search_ovs_view2 = function (f_albumcode) 
		{
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes, width=1500, height=900,left=100, top=100";
			window.open("/perform/song_ovs/open_mp3_search_view2?f_albumcode="+f_albumcode, "_blank", option);
		}*/
		
		/**
		* MP3 등록 / 수정 pys!@# -> 앨범 단위 등록 팝업
		* @param	string
		* @return	void
		*/		
		this.open_mp3_search_view2_dna = function (f_albumcode) 
		{
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes, width=1500, height=900,left=100, top=100";
			window.open("/perform/dna/open_mp3_search_view2?f_albumcode="+f_albumcode, "_blank", option);
		}
		
		/**
		* 앨범 등록/수정
		* @param	string
		* @return	void
		*/
		this.open_album_auto_write = function () {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=550,left=100, top=100";
			window.open("/perform/album/album_auto_write/", "_blank", option);
		}

		
		/**
		* 앨범 등록/수정
		* @param	string
		* @return	void
		*/
		this.open_album_search = function (f_type, sch_val, check_val) {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=620, height=650,left=100, top=100";
			window.open("/perform/album/album_search/?f_type="+f_type+"&main_search_val="+sch_val+"&check_val="+check_val, "_blank", option);
		}
		
		/**
		* 곡 신규 생성 앨범 통합 데이터 검색
		* @param	string
		* @return	void
		*/
		this.open_mematch_album_search = function (f_type, sch_val, check_val) {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=620, height=650,left=100, top=100";
			window.open("/perform/mematch/album_search/?f_type="+f_type+"&main_search_val="+sch_val+"&check_val="+check_val, "_blank", option);
		}
		
		/**
		* 자동 앨범 검색
		* @param	string
		* @return	void
		*/
		this.open_album_auto_search = function (f_type) {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=620, height=650,left=100, top=100";
			window.open("/perform/album/album_search/?f_type="+f_type, "_blank", option);
		}
		
		this.open_write_request = function (f_seq) {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=550, height=500,left=100, top=100";
			window.open("/perform/album/album_request_write/?f_seq="+f_seq, "_blank", option);
		}
		
		this.open_mematch_view = function (f_songcode) {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=1000, height=900,left=100, top=100";
			window.open("/perform/album/get_mematch_view/?f_songcode="+f_songcode, "_blank", option);
		}
		
		this.open_song_page = function () {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=1100, height=900,left=100, top=100";
			window.open("/perform/song/make_song_data/", "_blank", option);
		}
		
		
	}
	
	/**
	* 회원 팝업 영역
	*/
	{
		/**
		* 입회신청 회원 등록/수정
		* @param	string
		* @return	void
		*/
		this.open_member_write_memship = function (f_req_no) { 
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=1000, height=1250, left=100, top=100";
			window.open("/site/memship/member_write_memship/?f_req_no="+f_req_no, "_blank", option);
		}		
		/**
		* 회원 등록/수정
		* @param	string
		* @return	void
		*/
		this.open_member_write = function (f_personcode) {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=1150, height=1250, left=100, top=100";
			window.open("/member/member/member_write/?f_personcode="+f_personcode, "_blank", option);
		}
		/**
		* 사진올리기 팝업
		* @param	string
		* @return	void
		*/
		this.open_member_picture = function (f_personcode) {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=380, left=100, top=100";
			window.open("/member/member/member_picture_write/?f_personcode="+f_personcode, "_blank", option);
		}
			
		/**
		* 회원 소속사 이력관리
		* @param	string
		* @return	void
		*/
		this.open_mng_history = function (f_personcode) {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=330,left=100, top=100";
			window.open("/member/member/history_view/?f_personcode="+f_personcode, "_blank", option);
		}
		/**
		* 회원 검색
		* @param	string
		* @return	void
		*/
		{
			this.open_person_search = function () {
				var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=600, height=600,left=100, top=100";
				window.open("/member/member/person_search", "_blank", option);
			}
		}
		
		/**
		* 회원 검색
		* @param	string
		* @return	void
		*/
		{
			this.open_member_union = function (f_personcode) {
				var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=650, height=560,left=100, top=100";
				window.open("/member/member/member_union?f_personcode="+f_personcode, "_blank", option);
			}
		}
		
		/**
		* 회원 검색
		* @param	string
		* @return	void
		*/
		{
			this.open_member_total_excel = function (f_personcode) {
				var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=300, height=300,left=100, top=100";
				window.open("/member/member/total_excel/", "_blank", option);
			}
		}
		
		/**
		* 회원 검색
		* @param	string
		* @return	void
		*/
		{
			this.open_print_witak = function (f_personcode) {
				var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=890, height=1150,left=100, top=100";
				window.open("/member/member/print_witak/?f_personcode="+f_personcode, "_blank", option);
			}
		}
	}
	
	/**
	* 수동앨범등록
	*/
	/*
	{
		this.open_album_write = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=620, height=600,left=100, top=100";
			window.open("/perform/album/album_write", "_blank", option);
		}
	}
	*/
	
	/**
	* 위원회 제출 자료 생성
	*/
	{
		/**
		* 위원회 제출자료 생성
		* @return	void
		*/
		this.open_committee_excel = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=230,left=100, top=100";
			window.open("/perform/song/committee_excel", "_blank", option);
		}

	}
	
	/**
	* 곡별 실연정보 엑셀출력
	*/
	{
		/**
		* 곡별 실연정보 엑셀출력
		* @return	void
		*/
		this.open_perform_excel = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=550, height=350,left=100, top=100";
			window.open("/perform/song/perform_excel", "_blank", option);
		}
		
		this.open_set_share_view = function (f_songcode){
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=700, height=650,left=100, top=100";
			window.open("/perform/perform/set_share_view?f_songcode="+f_songcode, "_blank", option);	
		}
		
		/**
		* 곡별 실연정보 엑셀출력
		* @return	void
		*/
		this.open_perform_detail_view = function (f_personcode, f_albumcode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=750, height=600,left=100, top=100";
			window.open("/perform/perform/perform_detail_view?f_personcode="+f_personcode+"&f_albumcode="+f_albumcode, "_blank", option);
		}
		
		/**
		* 곡별 실연정보 엑셀출력
		* @return	void
		*/
		/*
		this.open_get_resource = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=230,left=100, top=100";
			window.open("http://220.90.201.108:8080/cms2014/sqlloder_meta.htm", "_blank", option);
		}
		*/
		
	}
	
	/**
	* 양도/양수 팝업영역
	*/
	{
		/**
		* 양도/양수(회원상세정보)
		* @param	string
		* @return	void
		*/
		{
			this.open_transfer_set = function (f_personcode) {
				var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=830, height=900,left=100, top=100";
				window.open("/member/transfer/transfer_set/?f_personcode="+f_personcode, "_blank", option);
			}
		}
		/**
		* 선택내역 양도취소
		* @return	void
		*/
		{
			this.open_transfer_cancel = function () {
				var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=230,left=100, top=100";
				window.open("/member/transfer/transfer_cancel_view", "_blank", option);
			}
		}
		
		/**
		* 멤버 검색(양수자, 승계자)
		* @param	string
		* @return	void
		*/
		{
			this.open_member_search = function (f_type) {
				var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=600, height=600,left=100, top=100";
				window.open("/member/transfer/member_search_view/?f_type="+f_type, "_blank", option);
			}
		}
		/**
		* 양도/양수 상세
		*/
		{
			this.open_transfer_detail = function (f_key, f_personcode) {
				var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=1400, height=700,left=100, top=100";
				window.open("/member/transfer/get_list/?"+f_key+"="+f_personcode, "_blank", option);
			}
		}
	}
	/**
	* 승계 팝업영역
	*/
	{
		/**
		* 승계설정(회원상세정보)
		* @param	string
		* @return	void
		*/
		{
			this.open_succession_set = function (f_personcode) {
				var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=830, height=500,left=100, top=100";
				window.open("/member/succession/succession_set/?f_send_pid="+f_personcode, "_blank", option);
			}
		}
		/**
		* 승계취소
		* @param	string
		* @param	string
		* @return	void
		*/
		{
			this.open_succession_cancel = function (f_send_pid, f_recv_pid) {
				var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=230,left=100, top=100";
				window.open("/member/succession/succession_cancel_view/?f_send_pid="+f_send_pid+"&f_recv_pid="+f_recv_pid, "_blank", option);
			}
		}
		
		/**
		* 권리자 실연 정보 리스트
		*/
		this.open_get_right_list = function (f_personcode, f_my_personcode, f_ptype) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes, width=700, height=680,left=100, top=100";
			window.open("/member/member/get_right_list?f_personcode="+f_personcode+"&f_ptype="+f_ptype+"&f_my_personcode="+f_my_personcode, "_blank", option);
		}
	}
	
	/**
	* 지급보류팝업영역
	*/
	{
		/**
		* 지급보류설정(회원상세정보)
		* @param	string
		* @return	void
		*/
		{
			this.open_defer_write = function (f_personcode) {
				var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=830, height=700,left=100, top=100";
				window.open("/member/defer/defer_set/?f_personcode="+f_personcode, "_blank", option);
			}
		}
		
		/**
		* 지급보류설정(회원상세정보)
		* @param	string
		* @return	void
		*/
		{
			this.open_defer_write2 = function (f_personcode) {
				var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=830, height=700,left=100, top=100";
				window.open("/member/defer/defer_set2/?f_personcode="+f_personcode, "_blank", option);
			}
		}
		/**
		* 지급보류주부지설정(회원상세정보)
		* @return	void
		*/
		{
			this.open_defer_limit_set = function (f_personcode, f_all) {
				var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=250,left=100, top=100";
				window.open("/member/defer/defer_limit_set/?f_personcode="+f_personcode+"&f_all="+f_all, "_blank", option);
			}
		}
		
		/**
		* 지급보류주부지설정(회원상세정보)
		* @return	void
		*/
		{
			this.open_defer_view = function (f_personcode) {
				var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=800, height=500,left=100, top=100";
				window.open("/member/defer/get_list/?f_personcode="+f_personcode, "_blank", option);
			}
		}
		
		
		/**
		* 선택내역지급보류해제
		* @return	void
		*/
		{
			this.open_defer_cancel = function () {
				var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=250,left=100, top=100";
				window.open("/member/defer/defer_cancel_view/", "_blank", option);
			}
		}
	}

	/**
	* 소속사 팝업 영역
	*/
	{
		/**
		* 소속사 등록
		* @param	string
		* @return	void
		*/
		this.open_management_write = function (f_mngcd) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=430, height=500,left=100, top=100";
			window.open("/member/management/management_write/?f_mngcd="+f_mngcd, "_blank", option);
		}
		
		/**
		* 소속사 찾기
		* @param	string
		* @return	void
		*/
		this.open_management_search = function (f_mngcd) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=480,left=100, top=100";
			window.open("/member/management/management_search/", "_blank", option);
		}
		
		/**
		* 소속사 찾기 NEW
		* @param	string
		* @return	void
		*/
		this.open_production_search = function (f_mngcd) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=650, height=700,left=100, top=100";
			window.open("/member/management/production_search/", "_blank", option);
		}
		
		/**
		* 소속 실연자 정보
		* @param	string
		* @return	void
		*/
		this.open_management_perform_view = function (f_mngcd) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=630, height=480,left=100, top=100";
			window.open("/member/management/management_perform_view/?f_mngcd="+f_mngcd, "_blank", option);
		}
		
		/**
		* 소속 실연자 앨범 정보
		* @param	string
		* @return	void
		*/
		this.open_management_album_view = function (f_mngcd) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=630, height=480,left=100, top=100";
			window.open("/member/management/management_album_view/?f_mngcd="+f_mngcd, "_blank", option);
		}
	}
	
	/**
	* 우편번호 팝업
	*/
	{
		/**
		* 우편번호 찾기
		* @param	string
		* @return	void
		*/
		this.open_zipcode_search = function (f_mngcd) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=650, height=800, left=100, top=100";
			window.open("/zipcode/zipcode/get_load_list/", "_blank", option);
		}
	}
	
	/**
	* 압류 팝업 영역
	*/
	{
		/**
		* 압류상세내역
		* @param	string
		* @return	void
		*/
		this.open_get_detail_view = function (f_seize_seq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=550, height=800,left=100, top=100";
			window.open("/member/seize/get_detail_view/?f_seize_seq="+f_seize_seq, "_blank", option);
		}
		
		/**
		* 압류설정(회원상세정보)
		* @param	string
		* @return	void
		*/
		this.open_seize_write = function (f_personcode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=450,left=100, top=100";
			window.open("/member/seize/write_view/?f_personcode="+f_personcode, "_blank", option);
		}
		
		this.open_seize_update = function (f_seize_seq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=450,left=100, top=100";
			window.open("/member/seize/seize_update/?f_seize_seq="+f_seize_seq, "_blank", option);
		}
		
		/**
		* 압류내역(회원상세정보)
		* @param	string
		* @return	void
		*/
		this.open_seize_view = function (f_personcode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=600, height=450,left=100, top=100";
			window.open("/member/seize/get_list/?f_personcode="+f_personcode, "_blank", option);
		}
	}
	
	/**
	* 그룹 팝업 영역
	*/
	{
		/**
		* 그룹 등록/수정 팝업
		* @param	string
		* @return	void
		*/
		this.open_group_write = function (f_groupcode , silyun) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=700,left=100, top=100";
			window.open("/member/group/group_write/?f_groupcode="+f_groupcode+"&isSil="+silyun, "_blank", option);
		}
		
		/**
		* 그룹 검색 팝업
		* @return	void
		*/
		this.open_group_search = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=520, height=540,left=100, top=100";
			window.open("/member/group/group_search/", "_blank", option);
		}
		
		/**
		* 그룹멤버 상세정보
		* @return	void
		*/
		this.open_groupmember_view = function (f_personcode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=520, height=540,left=100, top=100";
			window.open("/member/group/groupmember_view/?f_personcode="+f_personcode, "_blank", option);
		}
		
		/**
		* 그룹 회원 검색 팝업
		* @param	string
		* @return	void
		*/
		this.open_group_member_search = function (f_grouptype) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=520, height=540,left=100, top=100";
			window.open("/member/group/group_member_search_view/?f_grouptype="+f_grouptype, "_blank", option);
		}
		
		/**
		* 그룹 상세 정보
		* @param	string
		* @param	string
		* @return	void
		*/
		this.open_group_detail_view = function (f_code, f_type, f_albumcode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=620, height=540,left=100, top=100";
			window.open("/member/group/get_detail_view/?f_code="+f_code+"&f_type="+f_type+"&f_albumcode="+f_albumcode, "_blank", option);
		}
	}
	
	/**
	* Push 팝업영역
	*/
	{
		/**
		* Push 발송 팝업
		* @return	void
		*/
		this.open_push_send_view = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=400,left=100, top=100";
			window.open("/member/push/push_send_view/", "_blank", option);
		}
	}
	/**
	* crm 팝업영역
	*/
	{
		/**
		* crm 등록 팝업
		* @return	void
		*/
		this.open_crm_write = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=600, height=900,left=100, top=100";
			window.open("/member/crm/crm_write/", "_blank", option);
		}
		/**
		* 실연자검색
		* @return	void
		*/
		this.open_crm_member_search = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=600, height=700,left=100, top=100";
			window.open("/member/crm/member_search_view/", "_blank", option);
		}
		/**
		* 접수 내용
		* @param	string
		* @return	void
		*/
		this.open_crm_view = function (f_crm_seq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=600, height=900,left=100, top=100";
			window.open("/member/crm/get_view/?f_crm_seq="+f_crm_seq, "_blank", option);
		}
	}
	/**
	* sms 팝업영역
	*/
	{
		/**
		* sms 관리
		* @return	void
		*/
		this.open_sms_view = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=600, height=400,left=100, top=100";
			window.open("/member/sms/get_view/", "_blank", option);
		}
		/**
		* sms 사용내역
		* @return	void
		*/
		this.open_sms_use_view = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=600, height=700,left=100, top=100";
			window.open("/member/sms/sms_use_view/", "_blank", option);
		}
		/**
		* sms 발송할 회원검색
		* @return	void
		*/
		this.open_sms_member_search = function (f_personcode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=660, height=700,left=100, top=100";
			window.open("/member/sms/sms_member_search_view/?f_personcode="+f_personcode, "_blank", option);
		}
	}
	/**
	* 악기 팝업영역
	*/
	{
		/**
		* 악기등록/수정 팝업
		* @param	string
		* @return	void
		*/
		this.open_instrument_write = function (f_instrumentcode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=400,left=100, top=100";
			window.open("/perform/instrument/instrument_write/?f_instrumentcode="+f_instrumentcode, "_blank", option);
		}
		
		/**
		* 악기함등록/수정 팝업
		* @return	void
		*/
		this.open_box_view = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=450, height=400,left=100, top=100";
			window.open("/perform/instrument/instrument_box_list/", "_blank", option);
		}
		
		/**
		* 악기함등록/수정 팝업
		* @param	string
		* @return	void
		*/
		this.open_box_write = function (f_boxcode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=450, height=200,left=100, top=100";
			window.open("/perform/instrument/instrument_box_write/?f_boxcode="+f_boxcode, "_blank", option);
		}
		
		/**
		* 악기통합 
		* @param	string
		* @return	void
		*/
		this.open_instrument_merge = function (f_instrumentcode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=850, height=730,left=100, top=100";
			window.open("/perform/instrument/instrument_merge/?f_instrumentcode="+f_instrumentcode, "_blank", option);
		}
		
		/**
		* 악기통합 
		* @param	string
		* @return	void
		*/
		this.open_instrument_jungbok = function (f_instrumentcode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=900, height=730,left=100, top=100";
			window.open("/perform/instrument/instrument_jungbok/?f_instrumentcode="+f_instrumentcode, "_blank", option);
		}
		
		
	}
	
	/**
	* 사실확인서관리
	*/
	{
		/**
		* 폴더생성/수정
		* @param	string
		* @return	void
		*/
		this.open_folder_write = function (f_seq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=550, height=350,left=100, top=100";
			window.open("/perform/realfile/folder_write/?f_seq="+f_seq, "_blank", option);
		}
		/**
		* 파일업로드
		* @param	string
		* @return	void
		*/
		this.open_file_upload = function (f_seq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=550, height=350,left=100, top=100";
			window.open("/perform/realfile/file_upload/?f_seq="+f_seq, "_blank", option);
		}
	}
	
	/**
	* 전송분배 팝업영역
	*/
	{
		/**
		* 이자  설정
		*/
		this.open_share_interest_write = function (f_pricecode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=700, height=350,left=100, top=100";
			window.open("/share/share/interest_set?f_pricecode="+f_pricecode, "_blank", option);
		}
		
		/**
		* 전송분배 프로세스 팝업
		*/
		this.open_share_list = function (f_year, f_quarter) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=1000, height=800,left=100, top=100";
			window.open("/share/share/share_process?f_year="+f_year+"&f_quarter="+f_quarter, "_blank", option);
		}
		
		/**
		* 방송분배 프로세스 팝업
		*/
		this.open_share_bs_list = function (f_year, f_quarter) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=1000, height=800,left=100, top=100";
			window.open("/share/share_bs/share_process?f_year="+f_year+"&f_quarter="+f_quarter, "_blank", option);
		}
		
		/**
		* 방송분배 프로세스 팝업
		*/
		this.open_share_bs_list_new = function (f_year, f_quarter, f_type) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes, width=1000, height=1000,left=100, top=100";
			window.open("/share/share_process/share_bs_process_new?f_year="+f_year+"&f_quarter="+f_quarter+"&f_type="+f_type, "_blank", option);
		}
		
		/**
		* 공연분배 프로세스 팝업
		*/
		this.open_share_pf_list = function (f_year, f_quarter) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=1000, height=800,left=100, top=100";
			window.open("/share/share_pf/share_process?f_year="+f_year+"&f_quarter="+f_quarter, "_blank", option);
		}
		
		/**
		* 디음송분배 프로세스 팝업
		*/
		this.open_share_dms_list = function (f_year, f_quarter) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=1000, height=800,left=100, top=100";
			window.open("/share/share_dms/share_process?f_year="+f_year+"&f_quarter="+f_quarter, "_blank", option);
		}
		/**
		* 이자금 일괄 설정
		*/
		this.open_share_interest_write_all = function (f_type, f_year, f_quarter) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=300,left=100, top=100";
			window.open("/share/share/interest_all_set?f_type="+f_type+"&f_year="+f_year+"&f_quarter="+f_quarter, "_blank", option);
		}
		
		/**
		* 로그 업로드 팝업
		*/
		this.open_st_log_upload = function (f_cp, f_type, f_service) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=700, height=500,left=100, top=100";
			window.open("/fee/fee/st_log_upload_view?f_cp="+f_cp+"&f_type="+f_type+"&f_service="+f_service, "_blank", option);
		}
		
		/**
		* 로그 가져오기 - 자동화 팝업
		*/
		this.open_get_log_auto = function (f_year, f_quarter) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=700, height=500,left=100, top=100";
			window.open("/get_log_file.php?f_year="+f_year+"&f_quarter="+f_quarter, "_blank", option);
		}
		/**
		* 로그 가져오기
		* @return	void
		*/
/*		
		this.open_get_log = function (yyyyq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=230,left=100, top=100";
			window.open("http://220.90.201.108:8080/cms2014/sqlloder_log.htm?yyyyq="+yyyyq, "_blank", option);
		}
*/		
		/**
		* 분기설정 등록/수정
		* @param	string
		* @param	string
		* @return	void
		*/
		this.open_write_share_info= function (f_share_code) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=420, height=350,left=100, top=100";
			window.open("/share/share/write_share_info?f_share_code="+f_share_code, "_blank", option);
		}
		/**
		* 유보금설정
		* @param	string
		* @param	string
		* @return	void
		*/
		this.open_defer_set= function (f_year, f_quarter, f_type) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=520, height=400,left=100, top=100";
			window.open("/share/share/defer_set?f_year="+f_year+"&f_quarter="+f_quarter+"&f_type="+f_type, "_blank", option);
		}
		
		/**
		* 외국곡설정
		* @param	string
		* @param	string
		* @return	void
		*/
		this.open_foreign_set= function (f_year, f_quarter, f_type) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=600, height=450,left=100, top=100";
			window.open("/share/share/foreign_set?f_year="+f_year+"&f_quarter="+f_quarter+"&f_type="+f_type, "_blank", option);
		}
		
		/**
		* 투입DB설정
		* @param	string
		* @param	string
		* @param	string
		* @return	void
		*/
		this.open_put_db_set = function (f_type, f_year, f_quarter) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=250,left=100, top=100";
			window.open("/share/share/put_db_set_view?f_type="+f_type+"&f_year="+f_year+"&f_quarter="+f_quarter, "_blank", option);
		}
		/**
		* 자동매핑설정
		*/
		this.open_log_set = function (f_type, f_year, f_quarter) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=250,left=100, top=100";
			window.open("/share/share/log_set_view?f_type="+f_type+"&f_year="+f_year+"&f_quarter="+f_quarter, "_blank", option);
		}
		/**
		* 자동매핑설정
		*/
		this.open_auto_mapping_set = function (f_type, f_year, f_quarter) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=250,left=100, top=100";
			window.open("/share/share/auto_mapping_set?f_type="+f_type+"&f_year="+f_year+"&f_quarter="+f_quarter, "_blank", option);
		}
		/**
		* 자동매핑실행
		*/
		this.open_auto_mapping_start= function (f_type, f_year, f_quarter) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=900, height=500,left=100, top=100";
			window.open("/share/share/auto_mapping_start?f_type="+f_type+"&f_year="+f_year+"&f_quarter="+f_quarter, "_blank", option);
		}
		/**
		* 곡매핑
		*/
		this.open_song_mapping= function (f_type, f_year, f_quarter) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=1100, height=900,left=100, top=100";
			window.open("/share/share/song_mapping_list?f_type="+f_type+"&f_year="+f_year+"&f_quarter="+f_quarter, "_blank", option);
		}
		/**
		* 관리자 곡매핑
		*/
		this.open_song_mapping_big= function (f_type, f_year, f_quarter) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=1360, height=1250,left=100, top=100";
			window.open("/share/share/song_mapping_list_big?f_type="+f_type+"&f_year="+f_year+"&f_quarter="+f_quarter, "_blank", option);
		}
		/**
		* 가수매핑
		*/
		this.open_artist_mapping= function (f_type, f_year, f_quarter) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=1100, height=900,left=100, top=100";
			window.open("/share/share/artist_mapping_list?f_type="+f_type+"&f_year="+f_year+"&f_quarter="+f_quarter, "_blank", option);
		}
		
		
		/**
		* 방송, 공연, 디음송 지급분기 설정
		*/
		this.open_jigub_bungi_list = function (f_type, f_year, f_quarter) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes, width=1300, height=800,left=0, top=0";
			window.open("/reward/bs/get_list_share_price?f_type="+f_type+"&jigub_gubun=&bungi_gubun=&start_bungi=&end_bungi=&company_name=", "_blank", option);
		}
		
		/**
		* 방송, 공연, 디음송 자동화 데이터에서 지급분기 설정
		*/
		this.open_jigub_bungi_list_auto = function (f_type, f_year, f_quarter, f_step) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes, width=1300, height=800,left=0, top=0";
			window.open("/reward/bs/get_list_share_price?f_year="+f_year+"&f_quarter="+f_quarter+"&f_step="+f_step+"&f_type="+f_type+"&jigub_gubun=&bungi_gubun=&start_bungi=&end_bungi=&company_name=", "_blank", option);
		}

		/**
		* 신탁, 복제 지급분기 설정
		*/
		this.open_jigub_bungi_list_st = function (f_type, f_year, f_quarter) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes, width=1300, height=800,left=0, top=0";
			window.open("/reward/bs/get_list_share_price_st?f_type="+f_type+"&jigub_gubun=&bungi_gubun=&start_bungi=&end_bungi=&company_name=", "_blank", option);
		}		
		
		
		
		/**
		* 분배
		*/
		this.open_share_view = function (f_type, f_year, f_quarter) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=960, height=700,left=100, top=100";
			window.open("/share/share/share_view?f_type="+f_type+"&f_year="+f_year+"&f_quarter="+f_quarter, "_blank", option);
		}
		
		/**
		* 소액 결제 전체 신탁
		*/
		this.open_account_give_total_view = function (f_personcode, f_syear, f_squarter, f_eyear, f_equarter, f_ckjubu) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=530, height=400,left=100, top=100";
			window.open("/share/share/account_give_total_view/?f_personcode="+f_personcode+"&f_syear="+f_syear+"&f_squarter="+f_squarter+"&f_eyear="+f_eyear+"&f_equarter="+f_equarter+"&f_ckjubu="+f_ckjubu, "_blank", option);
		}
		
		/**
		* 소액 결제 전체 방송
		*/
		this.open_account_give_total_view_bs = function (f_personcode, f_syear, f_squarter, f_eyear, f_equarter, f_ckjubu) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=530, height=400,left=100, top=100";
			window.open("/share/share_bs/account_give_total_view/?f_personcode="+f_personcode+"&f_syear="+f_syear+"&f_squarter="+f_squarter+"&f_eyear="+f_eyear+"&f_equarter="+f_equarter+"&f_ckjubu="+f_ckjubu, "_blank", option);
		}
		
		/**
		* 소액 결제 전체 디음송
		*/
		this.open_account_give_total_view_dms = function (f_personcode, f_syear, f_squarter, f_eyear, f_equarter, f_ckjubu) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=530, height=400,left=100, top=100";
			window.open("/share/share_dms/account_give_total_view/?f_personcode="+f_personcode+"&f_syear="+f_syear+"&f_squarter="+f_squarter+"&f_eyear="+f_eyear+"&f_equarter="+f_equarter+"&f_ckjubu="+f_ckjubu, "_blank", option);
		}
		
		/**
		* 소액 결제 전체 공연
		*/
		this.open_account_give_total_view_pf = function (f_personcode, f_syear, f_squarter, f_eyear, f_equarter, f_ckjubu) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=530, height=400,left=100, top=100";
			window.open("/share/share_pf/account_give_total_view/?f_personcode="+f_personcode+"&f_syear="+f_syear+"&f_squarter="+f_squarter+"&f_eyear="+f_eyear+"&f_equarter="+f_equarter+"&f_ckjubu="+f_ckjubu, "_blank", option);
		}
		
		/**
		* 기타금액 수동설정(전송)
		*/
		this.open_put_price_set = function (f_type, f_year, f_quarter) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=400,left=100, top=100";
			window.open("/share/share/put_price_set/?f_type="+f_type+"&f_year="+f_year+"&f_quarter="+f_quarter, "_blank", option);
		}
		
		/**
		* 기타금액 수동설정(방송)
		*/
		this.open_put_price_set_bs = function (f_type, f_year, f_quarter) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=400,left=100, top=100";
			window.open("/share/share_bs/put_price_set/?f_type="+f_type+"&f_year="+f_year+"&f_quarter="+f_quarter, "_blank", option);
		}
		
		/**
		* 기타금액 수동설정(공연)
		*/
		this.open_put_price_set_pf = function (f_type, f_year, f_quarter) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=400,left=100, top=100";
			window.open("/share/share_pf/put_price_set/?f_type="+f_type+"&f_year="+f_year+"&f_quarter="+f_quarter, "_blank", option);
		}
		
		/**
		* 기타금액 수동설정(디음송)
		*/
		this.open_put_price_set_dms = function (f_type, f_year, f_quarter) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=400,left=100, top=100";
			window.open("/share/share_dms/put_price_set/?f_type="+f_type+"&f_year="+f_year+"&f_quarter="+f_quarter, "_blank", option);
		}
		
		/**
		* 기타금액 수동설정(디음송)
		*/
		this.open_spc_collect = function (f_type, f_year, f_month) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=700, height=800,left=100, top=100";
			window.open("/share/spc/put_spc_collect/?f_type="+f_type+"&f_year="+f_year+"&f_month="+f_month, "_blank", option);
		}
		
		this.open_delete_foreign_singer2 = function (f_type, f_year, f_quarter, f_step) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=700, height=800,left=100, top=100";
			window.open("/share/share_process/delete_foreign_data_view/?f_type="+f_type+"&f_year="+f_year+"&f_quarter="+f_quarter+"&f_step="+f_step, "_blank", option);
		}

		/**
		* 기타금액 수동설정(상시매칭)
		*/		
		this.open_bosang_always_matching = function (f_type) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes, width=1000, height=1000,left=100, top=100";
			window.open("/share/share_bosang_memat/always_matching?f_type="+f_type, "_blank", option);
		}		



	}
	
	/**
	* 보상금징수 -> 방송 팝업영역
	*/
	{
		/**
		* 폴더생성/수정
		*/
		this.open_log_upload = function (seq_company, f_type) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=700, height=500,left=100, top=100";
			window.open("/reward/bs/bs_log_upload?seq_company="+seq_company+"&f_type="+f_type, "_blank", option);
		}
		/**
		* 최종분배투입
		*/
		this.open_share_put_bs = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=250,left=100, top=100";
			window.open("/reward/bs/bs_share_put_view", "_blank", option);
		}

		/**
		* 업체 검색 -> TEXT
		*/
		this.open_company_search = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=500,left=100, top=100";
			window.open("/reward/bs/bs_company_search", "_blank", option);
		}
		
		/**
		* 업체 검색 -> DB INSERT -> 공통사용
		*/
		this.open_company_search_db = function (f_type, f_year, f_month) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=500,left=100, top=100";
			window.open("/reward/bs/bs_company_search_list?f_type="+f_type+"&f_year="+f_year+"&f_month="+f_month, "_blank", option);
		}
		
		/**
		* 일괄 설정 -> 공통사용
		*/
		this.open_package_set = function (f_type, f_year, f_month) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=200,left=100, top=100";
			window.open("/reward/bs/bs_package_set_view?f_type="+f_type+"&f_year="+f_year+"&f_month="+f_month, "_blank", option);
		}
		/**
		* 최종확정
		*/
		this.open_share_bosang_price_put = function (f_type) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=200,left=100, top=100";
			window.open("/reward/bs/share_bosang_price_put_view?f_type="+f_type, "_blank", option);
		}
		
		/**
		* 분배금 지급설정 > 지급분기설정
		*/
		this.open_set_jigub_bungi = function (f_type) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=200,left=100, top=100";
			window.open("/reward/bs/bs_set_jigub_bungi?f_type="+f_type, "_blank", option);
		}		
	}
	
	/**
	* 사용료징수 팝업영역
	*/
	{
		/**
		* 업체 관리 등록/수정  
		*/
		this.open_company_set = function (seq_company) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=910, height=700,left=100, top=100";
			window.open("/reward/company_bs/company_set/"+seq_company , "_blank", option);
		}

		/**
		* 업체 관리 등록/수정  
		*/
		this.open_site_set = function (seq_company,seq_osp) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=910, height=700,left=250, top=150";
			window.open("/fee/company/company_set/"+seq_company+"/?seq_osp="+seq_osp , "_blank", option);
		}

		/**
		* OSP 관리 등록/수정  
		*/
		this.open_osp_set = function (seq_osp) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=910, height=700,left=100, top=100";
			window.open("/fee/osp/osp_set/"+seq_osp , "_blank", option);
		}


		/**
		* OSP사이트 선택
		*/
		this.open_site_select = function (seq_osp) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=910, height=700,left=100, top=100";
			window.open("/company/search/company_search/?seq_osp="+seq_osp, "_blank", option);
		}

		/**
		* 서비스 관리 등록/수정  
		*/
		this.open_service_set = function (f_service_seq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=910, height=500,left=250, top=150";
			window.open("/fee/service/service_set/"+f_service_seq , "_blank", option);
		}

		
		/**
		* 최종분배투입
		*/
		this.open_share_put = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=200,left=100, top=100";
			window.open("/fee/fee/share_put_view", "_blank", option);
		}
		
		/**
		* 최종확정
		*/
		this.open_share_price_put = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=200,left=100, top=100";
			window.open("/fee/fee/share_price_put_view", "_blank", option);
		}
		/**
		* 징수설정
		*/
		this.open_collect_set= function (seq_company, f_type) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=900, height=500,left=100, top=100";
			window.open("/reward/bs/bs_put_collect_set?seq_company="+seq_company+"&f_type="+f_type, "_blank", option);
		}
		/**
		* 업체 검색 -> TEXT
		*/
		this.open_company_search = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=500,left=100, top=100";
			window.open("/reward/bs/bs_company_search", "_blank", option);
		}
		
		/**
		* 업체 검색 -> DB INSERT -> 공통사용
		*/
		this.open_company_search_db = function (f_type, f_year, f_month) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=500,left=100, top=100";
			window.open("/reward/bs/bs_company_search_list?f_type="+f_type+"&f_year="+f_year+"&f_month="+f_month, "_blank", option);
		}
		
		/**
		* 일괄 설정
		*/
		this.open_fee_package_set = function (f_type, f_year, f_month) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=550, height=300,left=100, top=100";
			window.open("/fee/fee/package_set_view?f_type="+f_type+"&f_year="+f_year+"&f_month="+f_month, "_blank", option);
		}
		
		/**
		* 징수관리 징수자료 엑셀 업로드
		*/
		this.open_collect_upload = function (f_type, f_year, f_month) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=450, height=400,left=100, top=100";
			window.open("/fee/fee/collect_excel?f_type="+f_type+"&f_year="+f_year+"&f_month="+f_month, "_blank", option);
		}
	}
	
	/**
	* 복제관리 팝업영역
	*/
	{
		/**
		* 업체 검색
		*/
		this.open_company_search_copy = function (f_year, f_month) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=600, height=500,left=100, top=100";
			window.open("/fee/fee/copy_company_search_list?f_year="+f_year+"&f_month="+f_month, "_blank", option);
		}
		
		/**
		* 징수금 설정
		*/
		this.open_copy_collect_set = function (f_copycode, f_songcode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=500,left=100, top=100";
			window.open("/fee/fee/copy_collect_set?f_copycode="+f_copycode+"&f_songcode="+f_songcode, "_blank", option);
		}
		
		/**
		* 징수금 설정
		*/
		this.open_copy_collect_set2 = function (f_copycode, proc_gubun) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=900, height=800,left=100, top=100";
			window.open("/fee/fee/copy_collect_set2?f_copycode="+f_copycode+"&proc_gubun="+proc_gubun, "_blank", option);
		}
		
		/**
		* 곡확정
		*/
		this.open_song_decide = function (f_copycode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=550, height=600,left=100, top=100";
			window.open("/fee/fee/song_decide_view?f_copycode="+f_copycode, "_blank", option);
		}
		
		/**
		* 곡확정
		*/
		this.open_song_uplolad = function (f_copycode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=550, height=800,left=100, top=100";
			window.open("/fee/fee/song_uplolad_view?f_copycode="+f_copycode, "_blank", option);
		}
		
		
		/**
		* 관리정보
		*/
		this.open_manage_view = function (f_songcode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=500,left=100, top=100";
			window.open("/fee/fee/manage_view?f_songcode="+f_songcode, "_blank", option);
		}
	}
	/**
	* 법무->내부검토요청 관리 팝업영역
	*/
	{
		/**
		* 내부검토요청 등록
		*/
		this.open_examine_write = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=700, height=600,left=100, top=100";
			window.open("/law/examine/examine_write", "_blank", option);
		}
		
		/**
		* 내부검토요청 미검토, 재검토
		*/
		this.open_examine_answer = function (f_examinecode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=650, height=520,left=100, top=100";
			window.open("/law/examine/examine_answer_view?f_examinecode="+f_examinecode, "_blank", option);
		}
		
		/**
		* 내부검토요청 의견보기
		*/
		this.open_examine_rewrite = function (f_examinecode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=650, height=650,left=100, top=100";
			window.open("/law/examine/examine_rewrite_view?f_examinecode="+f_examinecode, "_blank", option);
		}
	}
	
	/**
	* 사이트 팝업영역
	*/
	{
		/**
		* 게시판 글쓰기
		*/
		this.open_bbs_write = function (f_seq, f_code) {

			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=700, height=800,left=100, top=100";
			window.open("/site/bbs/view_write?f_seq="+f_seq+"&f_code="+f_code, "_blank", option);
		}
		
		/**
		* 회원게시판 글쓰기
		*/
		this.open_pbbs_write = function (f_seq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=650, height=800,left=100, top=100";
			window.open("/site/bbs/pbbs_write?f_seq="+f_seq, "_blank", option);
		}
		/**
		* 자주묻는질문 글쓰기
		*/
		this.open_question_write = function (f_seq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=800, height=800,left=100, top=100";
			window.open("/site/bbs/question_write?&f_seq="+f_seq, "_blank", option);
		}
		/**
		* FAQ 글쓰기
		*/
		this.open_faq_write = function (f_seq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=600, height=550,left=100, top=100";
			window.open("/site/bbs/faq_write?&f_seq="+f_seq, "_blank", option);
		}
		/**
		* 게시판 답글쓰기
		*/
		this.open_write_bbs_dap = function (f_seq, f_code) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=650, height=800,left=100, top=100";
			window.open("/site/bbs/bbs_write_dap?f_parent="+f_seq+"&f_code="+f_code, "_blank", option);
		}
		/**
		* 회원게시판 답글쓰기
		*/
		this.open_write_pbbs_dap = function (f_seq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=650, height=800,left=100, top=100";
			window.open("/site/bbs/pbbs_write_dap?f_parent="+f_seq, "_blank", option);
		}
		/**
		* 게시판 view페이지 보기
		*/
		this.open_write_bbs_view = function (f_seq, f_code) { 
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=650, height=600,left=100, top=100";
			window.open("/site/bbs/get_view?f_seq="+f_seq+"&f_code="+f_code, "_blank", option);
		}
		/**
		* 회원게시판 view페이지 보기
		*/
		this.open_write_pbbs_view = function (f_seq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=650, height=600,left=100, top=100";
			window.open("/site/bbs/get_view_pbbs?f_seq="+f_seq, "_blank", option);
		}
		/**
		* 비밀게시판 답변등록 및 view 페이지
		*/
		this.open_secret_answer_write = function (f_seq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=550,left=100, top=100";
			window.open("/site/bbs/secret_answer_write?f_seq="+f_seq, "_blank", option);
		}
	}
	
	/**
	* 팝업, 배너 팝업영역
	*/
	{
		/**
		* 배너 등록/수정
		*/
		this.open_banner_write = function (f_seq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=600, height=220,left=100, top=100";
			window.open("/site/popup/banner_write?f_seq="+f_seq, "_blank", option);
		}
		/**
		* 팝업 등록/수정
		*/
		this.open_popup_write = function (f_seq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=800, height=600,left=100, top=100";
			window.open("/site/popup/popup_write?f_seq="+f_seq, "_blank", option);
		}
		
	}
	
	/**
	* 소송관리 팝업 영역
	*/
	{
		/**
		* 신규 등록
		*/
		this.open_incident_write = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=1200, height=900,left=100, top=100";
			window.open("/law/incident/incident_write", "_blank", option);
		}
		/**
		* 나의 사건 관리
		*/
		this.open_incident_manage = function (f_incidentcode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=1200, height=900,left=100, top=100";
			window.open("/law/incident/incident_manage_view?f_incidentcode="+f_incidentcode, "_blank", option);
		}
		/**
		* 심급내용 수정
		*/
		this.open_sim_write = function (f_sim_infocode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=530, height=300,left=100, top=100";
			window.open("/law/incident/sim_write?f_sim_infocode="+f_sim_infocode, "_blank", option);
		}
		/**
		* 최근기일내용 수정
		*/
		this.open_gi_write = function (f_gi_infocode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=530, height=300,left=100, top=100";
			window.open("/law/incident/gi_write?f_gi_infocode="+f_gi_infocode, "_blank", option);
		}
		/**
		* 최근 제출서류 접수내용  수정
		*/
		this.open_paper_write = function (f_papercode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=530, height=250, left=100, top=100";
			window.open("/law/incident/paper_write?f_papercode="+f_papercode, "_blank", option);
		}
		/**
		* 최근 제출서류 접수내용  수정
		*/
		this.open_progress_write = function (f_progresscode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=700, height=250, left=100, top=100";
			window.open("/law/incident/progress_write?f_progresscode="+f_progresscode, "_blank", option);
		}
		
	}
	/**
	* 부실채권관리 팝업 영역
	*/
	{
		/**
		* 부실채권관리 등록
		*/
		this.open_distress_write = function (f_collectcode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=550, height=700,left=100, top=100";
			window.open("/law/distress/distress_write?f_collectcode="+f_collectcode, "_blank", option);
		}	
	}
	
	/**
	* 관리
	*/
	{
		/**
		* 사용자 등록 및 수정
		*/
		this.open_manager_info = function (f_seqadmin) {
			var url = fkmp.STATIC_URL + "/manager/admin/manager_write";
			if(f_seqadmin != "") url = url +  "?f_seqadmin=" + f_seqadmin;
			
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=820, height=700,left=100, top=100";
			window.open(url, "_blank", option);
		}
		
		/**
		 * 관리자 설정메뉴 팝업
		 */
		this.open_manager_set = function() {
			var url = fkmp.STATIC_URL + "/manager/admin/manager_set_edit";
			
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=800, height=700,left=100, top=100";
			window.open(url, "_blank", option);
		}
	}
	
	/**
	* 회계 팝업 영역
	*/
	{
		/**
		* 유보금 일괄 등록
		*/
		this.open_reserve_package_write = function (f_type, f_startdate, f_enddate, company_name) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=500,left=100, top=100";
			window.open("/accounting/etc_price/reserve_package_use_view?f_type="+f_type+"&f_startdate="+f_startdate+"&f_enddate="+f_enddate+"&company_name="+company_name, "_blank", option);
		}	
		
		/**
		* 유보금  등록
		*/
		this.open_reserve_write = function (f_pricecode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=300,left=100, top=100";
			window.open("/accounting/etc_price/reserve_use?f_pricecode="+f_pricecode, "_blank", option);
		}	
		
		/**
		* 이자  등록
		*/
		this.open_interest_write = function (f_pricecode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=300,left=100, top=100";
			window.open("/accounting/etc_price/interest_set?f_pricecode="+f_pricecode, "_blank", option);
		}
		
		/**
		* 외국곡 일괄 등록
		*/
		this.open_interest_package_write = function (f_type, f_startdate, f_enddate, company_name) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=500,left=100, top=100";
			window.open("/accounting/etc_price/interest_package_use_view?f_type="+f_type+"&f_startdate="+f_startdate+"&f_enddate="+f_enddate+"&company_name="+company_name, "_blank", option);
		}	
		
		/**
		* 외국곡 일괄 등록
		*/
		this.open_foreign_package_write = function (f_type, f_startdate, f_enddate, company_name) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=500,left=100, top=100";
			window.open("/accounting/etc_price/foreign_package_use_view?f_type="+f_type+"&f_startdate="+f_startdate+"&f_enddate="+f_enddate+"&company_name="+company_name, "_blank", option);
		}	
		
		/**
		* 외국곡  등록
		*/
		this.open_foreign_write = function (f_pricecode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=300,left=100, top=100";
			window.open("/accounting/etc_price/foreign_use?f_pricecode="+f_pricecode, "_blank", option);
		}
		
		/**
		* 외국곡  등록
		*/
		this.open_give_write = function (f_seq, f_type) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=300,left=100, top=100";
			window.open("/accounting/remit/give_write?f_seq="+f_seq+"&f_type="+f_type, "_blank", option);
		}	
		/**
		* 원천징수 팝업
		*/
		this.open_withholding_open = function (f_personcode, f_pay_date) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes, width=900, height=1024,left=100, top=100";
			window.open("/accounting/withholding/withholding_view?f_personcode="+f_personcode+"&f_pay_date="+f_pay_date, "_blank", option);
		}	
		/**
		* 원천징수2 팝업
		*/
		this.open_withholding_open_2 = function (f_personcode, f_pay_date) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes, width=900, height=1024,left=100, top=100";
			window.open("/accounting/withholding/withholding_view_2?f_personcode="+f_personcode+"&f_pay_date="+f_pay_date, "_blank", option);
		}
		/**
		* 원천징수엑셀업로드 팝업
		*/
		this.open_withholding_upload = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes, width=800, height=1024,left=100, top=100";
			window.open("/accounting/withholding/withholding_upload", "_blank", option);
		}
		/**
		* 기타금액관리(이자)
		*/
		this.open_put_interest = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes, width=800, height=500,left=100, top=100";
			window.open("/accounting/etc_price/put_interest_view", "_blank", option);
		}
		
		/**
		* 송금관리
		*/
		this.open_share_upload = function (f_gubun, f_type, f_date) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes, width=400, height=380,left=100, top=100";
			window.open("/accounting/remit/share_upload_view?f_gubun="+f_gubun+"&f_type="+f_type+"&f_date="+f_date, "_blank", option);
		}
		
		/**
		* 송금관리
		*/
		this.open_wonchun_share_upload = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes, width=400, height=380,left=100, top=100";
			window.open("/accounting/wonchun/wonchun_share_upload_view", "_blank", option);
		}
		
		/**
		* 원천징수 팝업
		*/
		this.open_withholding_open = function (f_personcode, f_pay_date) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes, width=800, height=1024,left=100, top=100";
			window.open("/accounting/wonchun/wonchun_view?f_personcode="+f_personcode+"&f_pay_date="+f_pay_date, "_blank", option);
		}
	}
	
	/**
	* 연혁 팝업 영역
	*/
	{
		/**
		* 연혁등록
		*/
		this.open_history_write = function (f_seq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=600, height=400,left=100, top=100";
			window.open("/site/history/history_write?f_seq="+f_seq, "_blank", option);
		}
	}
	
	/**
	* 수수료율 관리
	*/
	{
		/**
		* 수수료율 등록
		*/
		this.open_commission_write = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=300,left=100, top=100";
			window.open("/accounting/commission/commission_write", "_blank", option);
		}
		
		/**
		* 수수료율 수정
		*/
		this.open_commission_update = function (f_feecode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=400, height=300,left=100, top=100";
			window.open("/accounting/commission/commission_update_view?f_feecode="+f_feecode, "_blank", option);
		}
	}
	/**
	* 역대임원 관리
	*/
	{
		/**
		* 역대임원 등록/수정
		*/
		this.open_officer_write = function (f_seq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=430, height=450,left=100, top=100";
			window.open("/site/history/member_write/?f_seq="+f_seq, "_blank", option);
		}
	}
	
	/**
	* 관련기관 관리
	*/
	{
		/**
		* 관련기관 등록/수정
		*/
		this.open_organization_write = function (f_kind, f_seq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=650, height=280,left=100, top=100";
			window.open("/site/information/organization_write/?f_kind="+f_kind+"&f_seq="+f_seq, "_blank", option);
		}
	}
	/**
	* 입회관련
	*/
	{
		/**
		* 입회관련 등록/수정
		*/
		this.open_join_write = function (f_joinmembercode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=550, height=670,left=100, top=100";
			window.open("/site/information/join_write/?f_joinmembercode="+f_joinmembercode, "_blank", option);
		}
	}
	
	/**
	* 개인정보수집동의
	*/
	{
		/**
		* 개인정보수집동의 등록/수정
		*/
		this.open_consent_write = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=500, height=400,left=100, top=100";
			window.open("/site/information/consent_write", "_blank", option);
		}
	}
	/**
	* 소식지 관련
	*/
	{
		/**
		* 소식지 등록/수정
		*/
		this.open_newspaper_write = function (f_seq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=630, height=550,left=100, top=100";
			window.open("/site/news/newspaper_write?f_seq="+f_seq, "_blank", option);
		}
	}
	/**
	* 개인회원변경신청 관련 팝업
	*/
	{
		/**
		* 개인회원변경신청 등록/수정
		*/
		this.open_infomation_view = function (f_personcode, f_appdate,f_procstatus) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=1400, height=1300,left=100, top=100";
			window.open("/site/information/get_view?f_personcode="+f_personcode+"&f_appdate="+f_appdate+"&f_procstatus="+f_procstatus, "_blank", option);
		}
	}
	/**
	* 관리비율 조회
	*/
	{
		/**
		* 관리비율 조회
		*/
		this.open_ratio_view = function (f_songcode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=430, height=530,left=100, top=100";
			window.open("/site/information/ratio_view?f_songcode="+f_songcode, "_blank", option);
		}
	}
	
	/**
	* 과거소급 
	*/
	{
		/**
		* 과거소급 대상 설정 
		* @param	string
		* @param	string
		* @param	string
		* @return	void
		*/
		this.open_retroactivity_target_write = function (f_year, f_quarter, f_type, f_count) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=600, height=600,left=100, top=100";
			window.open("/share/retro/get_retroactivity_target_view?f_year="+f_year+"&f_quarter="+f_quarter+"&f_type="+f_type+"&f_count="+f_count, "_blank", option);
		}
		/**
		* 앨범 등록/수정
		* @param	string
		* @return	void
		*/
		this.open_retro_view = function (f_albumcode, f_year, f_quarter, f_type) {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=820, height=1000,left=100, top=100";
			window.open("/share/retro/get_view/?f_albumcode="+f_albumcode+"&f_year="+f_year+"&f_quarter="+f_quarter+"&f_type="+f_type, "_blank", option);
		}
	}
	
	/**
	* 등록실연 
	*/
	{
		/**
		* 등록실연 상세보기
		* @param	string
		* @param	string
		* @param	string
		* @return	void
		*/
		this.open_establish_info = function (f_esid) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=900, height=800, left=100, top=100";
			window.open("/perform/perform/establish_info?f_esid="+f_esid, "_blank", option);
		}
		
		this.open_confirm_proc_pset = function (f_esid, f_albumcode, f_personcode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=900, height=800, left=100, top=100";
			window.open("/perform/perform/confirm_proc_pset?f_esid="+f_esid+"&f_albumcode="+f_albumcode+"&f_personcode="+f_personcode, "_blank", option);
		}
		
		/**
		* 등록실연 등록 수정
		* @param	string
		* @param	string
		* @param	string
		* @return	void
		*/
		this.open_establish_write = function (f_seq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=600, height=600,left=100, top=100";
			window.open("/perform/perform/establish_write?f_seq="+f_seq, "_blank", option);
		}
		
		this.open_consult_view = function (f_seq, f_esid, f_status) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=600, height=600,left=100, top=100";
			window.open("/perform/perform/consult_view?f_seq="+f_seq+"&f_esid="+f_esid+"&f_status="+f_status, "_blank", option);
		}
		
		/**
		* 미등록앨범 등록 수정
		* @param	string
		* @param	string
		* @param	string
		* @return	void
		*/
		this.open_request_album_view = function (f_ralbumcode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=900, height=1100,left=100, top=100";
			window.open("/perform/perform/request_album_view?f_ralbumcode="+f_ralbumcode, "_blank", option);
		}
		/*
		* 앱 등록 수정
		*/
		this.open_request_album_view_app = function (f_ralbumcode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=900, height=1100,left=100, top=100";
			window.open("/perform/perform/request_album_view_app?f_ralbumcode="+f_ralbumcode, "_blank", option);
		}	
	
	}

	
	/**
	* ICN 
	*/
	{
		/**
		* ICN 상세정보보기
		* @param	string
		* @return	void
		*/
		this.open_icn_detail_info = function (f_procdate) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=900, height=800, left=100, top=100";
			window.open("/icn/icn/icn_detail_view?f_procdate="+f_procdate, "_blank", option);
		}
		
		/**
		* ICN 상세정보보기
		* @param	string
		* @return	void
		*/
		this.open_icn_match_pass_detail = function (f_procdate) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=900, height=800, left=100, top=100";
			window.open("/icn/icn/icn_match_pass_detail?f_procdate="+f_procdate, "_blank", option);
		}
	}
	
	/**
	*API
	*/
		/**
		* 회원가입 동의 페이지
		*/
		this.open_sign_up_agree = function () {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=640, height=800, left=100, top=100";
			window.open("/api_company/api_member/sign_agree/", "_blank", option);
		}
		
		/**
		* 관리자 수정페이지
		*/
		this.open_sign_up = function (f_idx) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=640, height=800, left=100, top=100";
			window.open("/api_company/api_member/sign_up?f_idx="+f_idx , "_blank", option);
		}
		
		this.open_disagree_sign = function (idx) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=640, height=220, left=100, top=100";
			window.open("/api_company/api_member/disagree_sign?f_idx="+idx, "_blank", option);
		}
		
		this.open_api_album_view = function(f_albumcode, f_proc_status) {
			//var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500, height=350, left=100, top=100";
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=820, height=1000,left=100, top=100";
			window.open("/perform/album/get_api_view/?f_albumcode="+f_albumcode+"&f_proc_status="+f_proc_status, "_blank", option);
		}
		
		this.open_perform_view = function (f_albumcode) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=820, height=1150, left=100, top=100";
			window.open("/perform/album/get_api_perform_view?f_albumcode="+f_albumcode, "_blank", option);
		}
		
		this.open_approve_member = function (f_idx , f_sanum) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=860, height=800, left=100, top=100";
			window.open("/api_company/api_member/approve_member?f_idx="+f_idx+"&f_sanum="+f_sanum, "_blank", option);
		}
		
		this.api_bbs_write = function (f_seq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=690, height=750, left=100, top=100";
			window.open("/api_company/api_bbs/api_bbs_write?f_seq="+f_seq, "_blank", option);
		}
		
		
		
		
		this.open_pf_log = function (f_year , f_quarter , f_code , f_type, f_yyyyqq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=690, height=750, left=100, top=100";
			window.open("/share/share_pf/pf_log_popup?f_year="+f_year+"&f_quarter="+f_quarter+"&f_code="+f_code+"&f_type="+f_type+"&f_yyyyqq="+f_yyyyqq, "_blank", option);
		}
		
		this.open_dms_log = function (f_year , f_quarter , f_code , f_type, f_yyyyqq) {
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=690, height=750, left=100, top=100";
			window.open("/share/share_dms/dms_log_popup?f_year="+f_year+"&f_quarter="+f_quarter+"&f_code="+f_code+"&f_type="+f_type+"&f_yyyyqq="+f_yyyyqq, "_blank", option);
		}
		
		this.open_yang_upload = function () 
		{
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=690, height=200, left=100, top=100";
			window.open("/site/information/yang_upload" , "_blank", option);
		}
		
		this.open_album_null_search = function () 
		{
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=960, height=880, left=100, top=100";
			window.open("/perform/album/album_null_search" , "_blank", option);
		}
		
		this.open_update_std_num = function () 
		{
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=430, height=300, left=100, top=100";
			window.open("/perform/song/update_std_num" , "_blank", option);
		}
		
		this.open_dup_delete = function (f_songcode_del , f_albumcode , obj) 
		{
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=600, height=500, left=100, top=100";
			window.open("/perform/album/dup_delete?f_songcode_del="+f_songcode_del+"&f_albumcode="+f_albumcode , "_blank", option);
		}
		
		this.open_dup_delete_mematch = function (f_songcode_del , f_albumcode , obj) 
		{
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=600, height=500, left=100, top=100";
			window.open("/perform/mematch/dup_delete_mematch?f_songcode_del="+f_songcode_del+"&f_albumcode="+f_albumcode , "_blank", option);
		}
		
		this.open_bunbae_apply_upload = function (f_seq) 
		{
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=800, height=1000,left=100, top=100";
			window.open("/api_company/api_perform/bunbae_apply_upload?f_seq="+f_seq, "_blank", option);
		}
		
		this.open_category_manager = function () 
		{
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=490, height=400,left=100, top=100";
			window.open("/site/contractor/contractor_manager", "_blank", option);
		}
		
		this.open_contractor_signup = function () 
		{
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=700, height=300,left=100, top=100";
			window.open("/site/contractor/contractor_signup", "_blank", option);
		}
		
		this.open_contractor_excel_upload = function () 
		{
			var option = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no, width=700, height=260,left=100, top=100";
			window.open("/site/contractor/contractor_excel_upload", "_blank", option);
		}
		

		
		
		
}

// 팝업콘트롤러 선언
var popup = new popup_controller();