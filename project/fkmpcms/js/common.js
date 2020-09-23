jQuery.validator.addMethod("phone", function (phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, "");
    return this.optional(element) || phone_number.length > 9 &&
          phone_number.match(/^\(?[\d\s]{2,3}-[\d\s]{3,4}-[\d\s]{4}$/);
}, "- 잘못된 형식의 연락처입니다."); 

jQuery.validator.addMethod("date", function (date, element) {
    date = date.replace(/\s+/g, "");
    return this.optional(element) || date.length > 6 &&
          date.match(/^\(?[\d\s]{4}-[\d\s]{2}-[\d\s]{2}$/);
}, "- 잘못된 형식의 날짜입니다."); 

jQuery.validator.addMethod("jumin", function (jumin, element) {
    jumin = jumin.replace(/\s+/g, "");
    return this.optional(element) || jumin.length > 6 &&
          jumin.match(/^\(?[\d\s]{6}-[\d\s]{7}$/);
}, "- 잘못된 형식의 주민등록번호 입니다."); 

jQuery.extend(jQuery.validator.messages, {
    required: "필수 입력 사항입니다.",
    remote: "수정 바랍니다.",
    email: "이메일 주소를 올바로 입력하세요.",
    url: "URL을 올바로 입력하세요.",
    date: "날짜의 형식이 잘못 입력됐습니다.",
    dateISO: "ISO 형식에 맞는 날짜로 입력하세요.",
    number: "숫자만 입력하세요.",
    digits: "숫자(digits)만 입력하세요.",
    creditcard: "올바른 신용카드 번호를 입력하세요.",
    equalTo: "값이 서로 다릅니다.",
    accept: "승낙해 주세요.",
    maxlength: jQuery.validator.format("{0}글자 이상은 입력할 수 없습니다."),
    minlength: jQuery.validator.format("적어도 {0}글자는 입력해야 합니다."),
    rangelength: jQuery.validator.format("{0}글자 이상 {1}글자 이하로 입력해 주세요."),
    range: jQuery.validator.format("{0}에서 {1} 사이의 값을 입력하세요."),
    max: jQuery.validator.format("{0} 이하로 입력해 주세요."),
    min: jQuery.validator.format("{0} 이상으로 입력해 주세요.")
});

jQuery.validator.setDefaults({
    onkeyup:false,
    onclick:false,
    onfocusout:false,
    showErrors:function(errorMap, errorList){

        if(errorList.length == 0) return;

        var caption = $(errorList[0].element).attr('caption') || $(errorList[0].element).attr('name');
        $(errorList[0].element).focus();
        alert(errorList[0].message);
        
    }
});
