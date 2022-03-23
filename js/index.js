SampleText_VI = "Một con mèo nhỏ bị ném từ một chiếc xe hơi trên đường vành đai Toulouse" + "\n" + "\n" + "Hiệp hội bảo vệ động vật tìm thấy con mèo nhỏ bị thương. Điều này đang gióng lên hồi chuông cảnh báo về sự gia tăng việc bỏ rơi thú cưng trong mùa hè." + "\n" + "\n" + "Một cử chỉ khó hiểu và tàn nhẫn. Một con mèo ba tháng tuổi, được gọi là Nounette, đã bị cố tình ném từ một chiếc xe đang di chuyển vào cuối tháng 7 trên đường vành đai Toulouse, báo cáo của France Bleu. Đó là một hiệp hội bảo vệ động vật địa phương, Cha'Mania tiết lộ câu chuyện để cảnh báo số lượng động vật bị bỏ rơi ngày càng tăng trong mùa hè." + "\n" + "\n" + "Sự thật xảy ra trên đường vành đai Toulouse vào ngày 27 tháng 7. Sau khi đuổi con vật ra khi lái xe, tài xế quay xe lại và đi mất. Nounette (mèo) gần như đã chết. Cô bị một phương tiện khác đâm trúng và phát hiện bị thương nặng trong bụi rậm bởi một người. Người này sau đó đã đưa cô đến cơ sở của Cha'Mania để điều trị." + "\n" + "\n" + "«Mang đến một bác sĩ thú y, chúng tôi nhận thấy rằng bên trong cơ thể cô ấy, mọi thứ đều bị phá vỡ: chú mèo con có ba vết nứt ở xương chậu. Để có được trở lại trên đôi chân của mình, cô được kê đơn thuốc kháng sinh và được điều trị bằng lồng, » đài phát thanh nói." + "\n" + "\n" + "«Con vật không phải là một món đồ nội thất»" + "\n" + "\n" + "Tức giận, các thành viên của hiệp hội muốn sử dụng sự kiện này để nâng cao nhận thức của công chúng về việc bỏ rơi và lạm dụng vật nuôi, một hiện tượng mà họ cảm thấy là quá phổ biến. «Thật đơn giản để gọi cho hiệp hội và nói rằng, bạn không muốn thú cưng của bạn vì một số lý do gì đó, nhưng từ đó ném nó ra ngoài cửa sổ trên đường, lái xe ... Rõ ràng là thiếu sự tôn trọng đối với động vật », Brigitte Maréchaux, một tình nguyện viên ở France Bleu đã phản ứng. Chính người phụ nữ này đã trông coi con mèo vào cho đến khi nó bình phục." + "\n" + "\n" + "«Chúng ta sẽ phải đưa ra một luật. Mỗi năm, chúng tôi tiếp nhận ngày càng nhiều động vật bị bỏ rơi, một tình nguyện viên nói với La Dépêche du Midi. Nó phải dừng lại. Một con vật không phải là một món đồ nội thất ». Hiệp hội đã đưa ra một lời kêu gọi các nhân chứng với hy vọng xác định người chịu trách nhiệm và nộp đơn kiện chống lại anh ta." + "\n" + "\n" + "Nguồn: https://goo.gl/Z1ACXA";
langSite = 'vi';
SampleText = SampleText_VI;
urlAPI = 'https://resoomer.com/';
limit_char_transfert = 10000;
max_char_post = 200000;
issetPost = 0;

setExemple = function () {
    var textExemple = SampleText;
    $("#contentText").val(textExemple);
    if (window.screen.availWidth >= 500) {
        document.getElementById("contentText").style.height = "1px";
        document.getElementById("contentText").style.height = (25 + document.getElementById("contentText").scrollHeight) + "px";
    }
    noticeForText();
};

clearTextarea = function () {
    $("#contentText").val("");
    $("#contentText").keyup();
    $("#returnResoomer").html("");
    $(divADS).addClass("DisplayNone");
    $("div.adsFeature").addClass("DisplayNone");
    noticeTextSize();
    $.ajax({
        encoding: "UTF-8",
        url: urlAPI + 'controllers/AFC.php?action=clearText',
        success: function () { }
    });
};

clearNotificationUser = function () {
    $("#userNotification").remove();
    $.ajax({
        encoding: "UTF-8",
        url: urlAPI + 'controllers/AFC.php?action=clearNotificationUser',
        success: function () { }
    });
};

openUploader = function () {
    $("#uploaderContent").removeClass("DisplayNone");
    $("#uploadPart").removeClass("DisplayNone");
    $("#returnJsUpload,#returnErrorFile").addClass("DisplayNone");
    $("#loadingPart,#responsePart").addClass("DisplayNone");
    $("#returnJsUpload,#returnErrorFile").html("&nbsp;");
    $("#titleDocUpload").html("&nbsp;");
    $("header,section").addClass("blurContent");

};

closeUploader = function () {
    $("#uploaderContent").addClass("DisplayNone");
    $("#returnJsUpload,#returnErrorFile").addClass("DisplayNone");
    $("#returnJsUpload,#returnErrorFile").html("&nbsp;");
    $("#titleDocUpload").html("&nbsp;");
    $("header,section").removeClass("blurContent");
    $('#file-upload').val("");
};

closeTranslate = function () {
    $("#translationContent").addClass("DisplayNone");
};

closeRewriter = function () {
    $("#RewriterContent").addClass("DisplayNone");
};

noticeForText = function () {
    var contentText = $("#contentText").val();
    if (contentText == "") {
        $("#noticeForText").animate({ fontSize: '12px', fontWeight: 200 }, 125);
    } else {
        $("#noticeForText").animate({ fontSize: '13px', fontWeight: 600 }, 125);
    }
};

noticeTextSize = function () {
    /*
    var textValue = $('#contentText').val();
    var textSize = textValue.length;
    if(textSize > max_char_post)	{
        $('#noticeSizeText').html(textSize);
        $('#conteneurNoticeSizeText').removeClass('DisplayNone');
    }else{
        $('#conteneurNoticeSizeText').addClass('DisplayNone');
    }
    */
};

function textAreaAdjust(o) {
    if (window.screen.availWidth >= 500) {
        o.style.height = "1px";
        o.style.height = (25 + o.scrollHeight) + "px";
    }
    var contentText = $("#contentText").val();
    noticeForText();
    noticeTextSize();
}

function addKeywordFromSuggestion(keywordValue) {
    var KeywordsFieldDefault = $("#keywordsFiltre").val();
    var KeywordsField = KeywordsFieldDefault.trim();
    if (KeywordsField == "") {
        $("#keywordsFiltre").val(keywordValue);
        $("#keywordsFiltre").keyup();
    } else {
        var explodeKeywordField = KeywordsField.split(",");
        if (explodeKeywordField.length == 1) {
            if (explodeKeywordField[0].toLowerCase().trim() == keywordValue.toLowerCase().trim()) {
                $("#keywordsFiltre").val("");
            } else {
                $("#keywordsFiltre").val(KeywordsField.trim() + ', ' + keywordValue);
            }
            $("#keywordsFiltre").keyup();
        } else {
            var iCheckKeyword = 0;
            var newKeywordFieldValue = '';
            var indexKeyword;
            var explodeKeywordFieldLength = explodeKeywordField.length;
            for (indexKeyword = 0; indexKeyword < explodeKeywordFieldLength; ++indexKeyword) {
                if (explodeKeywordField[indexKeyword].toLowerCase().trim() == keywordValue.toLowerCase().trim()) {
                    iCheckKeyword = iCheckKeyword + 1;
                } else {
                    if (newKeywordFieldValue == '') {
                        newKeywordFieldValue += explodeKeywordField[indexKeyword].trim();
                    } else {
                        newKeywordFieldValue += ', ' + explodeKeywordField[indexKeyword].trim();
                    }
                }
            }
            if (iCheckKeyword == 0) {
                $("#keywordsFiltre").val(KeywordsField + ', ' + keywordValue);
                $("#keywordsFiltre").keyup();
            } else {
                $("#keywordsFiltre").val(newKeywordFieldValue);
                $("#keywordsFiltre").keyup();
            }
        }
    }
}

function clearSuggests() {
    $("#keywordsFiltre").val("");
    $("#keywordsFiltre").keyup();
}

$(function () {
    /*
    $('img.browserFeature').on({
        mouseenter: function(){
            $(this).animate({width: '160px', height: '160px'}, 125);
        },
        mouseleave: function(){
            $(this).animate({width: '130px', height: '130px'}, 125);
        }
    });
    */
});

function changeSummaryView(dropdown) {
    var viewSelect = dropdown.options[dropdown.selectedIndex].value;
    document.getElementById(viewSelect).click();
}
function OnSearch(input) {
    if (input.value == "") {
        addKeywordFromSuggestion("");
    }
}
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "00:" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function evalMinutes(start_time, end_time) {
    //var start_time ="830";
    //var end_time ="1930";

    var start_hour = start_time.slice(0, -2);
    var start_minutes = start_time.slice(-2);

    var end_hour = end_time.slice(0, -2);
    var end_minutes = end_time.slice(-2);

    var startDate = new Date(0, 0, 0, start_hour, start_minutes);
    var endDate = new Date(0, 0, 0, end_hour, end_minutes);

    var millis = endDate - startDate;
    var minutes = millis / 1000 / 60;
    return minutes;
}