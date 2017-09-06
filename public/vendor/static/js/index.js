/**
 * Created by kouji on 2017/07/23.
 */

var tweet;
var wsUri = "ws://ec2-52-40-135-194.us-west-2.compute.amazonaws.com:1880/ws/twitter";
var ws = new WebSocket(wsUri);

/* websocketリスナー */
ws.onmessage = function (evt) {
    tweet = JSON.parse(evt.data);
    var id = tweet.id;
    var target = tweet.target;
    switch (target) {
        case "Lv100 プロトバハムート":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.baha-time').text(getDate());
            $('#baha_tbl tbody > tr:last').after(rec);
            break;
        case "Lv100 ジ・オーダー・グランデ":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.gra-time').text(getDate());
            $('#gra_tbl tbody > tr:last').after(rec);
            break;
        case "Lv60 リヴァイアサン・マグナ":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.riva-time').text(getDate());
            $('#riva_tbl tbody > tr:last').after(rec);
            break;
        case "Lv70 コロッサス・マグナ":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.coro-time').text(getDate());
            $('#coro_tbl tbody > tr:last').after(rec);
            break;
        case "Lv75 セレスト・マグナ":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.sere-time').text(getDate());
            $('#sere_tbl tbody > tr:last').after(rec);
            break;
        case "Lv75 シュヴァリエ・マグナ":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.shuva-time').text(getDate());
            $('#shuva_tbl tbody > tr:last').after(rec);
            break;
        case "Lv60 ユグドラシル・マグナ":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.yugu-time').text(getDate());
            $('#yugu_tbl tbody > tr:last').after(rec);
            break;
        case "Lv50 ティアマト・マグナ":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.tia-time').text(getDate());
            $('#tia_tbl tbody > tr:last').after(rec);
            break;
        case "Lv100 ラファエル":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.rafa-time').text(getDate());
            $('#rafa_tbl tbody > tr:last').after(rec);
            break;
        case "Lv100 ウリエル":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.uri-time').text(getDate());
            $('#uri_tbl tbody > tr:last').after(rec);
            break;
        case "Lv100 ガブリエル":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.gabu-time').text(getDate());
            $('#gabu_tbl tbody > tr:last').after(rec);
            break;
        case "Lv100 ミカエル":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.mika-time').text(getDate());
            $('#mika_tbl tbody > tr:last').after(rec);
            break;
    }
};
/* テーブルデータがクリックされたら、クリップボードにコピーする */
$("tr > td").on("click", function () {
    document.execCommand('copy');
});

$("#lv100_tab").on("click", function () {
    console.log("lv100_tab");
    $("#baha_body").removeClass("hide");
    $("#gra_body").removeClass("hide");

    $("#rafa_body").removeClass("hide");
    $("#uri_body").removeClass("hide");
    $("#gabu_body").removeClass("hide");
    $("#mika_body").removeClass("hide");


    $("#riva_body").addClass("hide");
    $("#coro_body").addClass("hide");
    $("#sere_body").addClass("hide");
    $("#shuva_body").addClass("hide");
    $("#yugu_body").addClass("hide");
    $("#tia_body").addClass("hide");

    $("#grand-tag img").removeClass("unselect");
    $("#grand-tag span").removeClass("unselect");
    $("#baha-tag img").removeClass("unselect");
    $("#baha-tag span").removeClass("unselect");
    $("#riva-tag img").addClass("unselect");
    $("#riva-tag span").addClass("unselect");
    $("#coro-tag img").addClass("unselect");
    $("#coro-tag span").addClass("unselect");
    $("#sere-tag img").addClass("unselect");
    $("#sere-tag span").addClass("unselect");
    $("#shuva-tag img").addClass("unselect");
    $("#shuva-tag span").addClass("unselect");
    $("#yugu-tag img").addClass("unselect");
    $("#yugu-tag span").addClass("unselect");
    $("#tia-tag img").addClass("unselect");
    $("#tia-tag span").addClass("unselect");
});
$("#magna_tab").on("click", function () {
    $("#baha_body").addClass("hide");
    $("#gra_body").addClass("hide");

    $("#rafa_body").addClass("hide");
    $("#uri_body").addClass("hide");
    $("#gabu_body").addClass("hide");
    $("#mika_body").addClass("hide");

    $("#riva_body").removeClass("hide");
    $("#coro_body").removeClass("hide");
    $("#sere_body").removeClass("hide");
    $("#shuva_body").removeClass("hide");
    $("#yugu_body").removeClass("hide");
    $("#tia_body").removeClass("hide");

    $("#grand-tag img").addClass("unselect");
    $("#grand-tag span").addClass("unselect");
    $("#baha-tag img").addClass("unselect");
    $("#baha-tag span").addClass("unselect");
    $("#riva-tag img").removeClass("unselect");
    $("#riva-tag span").removeClass("unselect");
    $("#coro-tag img").removeClass("unselect");
    $("#coro-tag span").removeClass("unselect");
    $("#sere-tag img").removeClass("unselect");
    $("#sere-tag span").removeClass("unselect");
    $("#shuva-tag img").removeClass("unselect");
    $("#shuva-tag span").removeClass("unselect");
    $("#yugu-tag img").removeClass("unselect");
    $("#yugu-tag span").removeClass("unselect");
    $("#tia-tag img").removeClass("unselect");
    $("#tia-tag span").removeClass("unselect");
});
$("#all_tab").on("click", function () {
    $("#baha_body").removeClass("hide");
    $("#gra_body").removeClass("hide");

    $("#rafa_body").removeClass("hide");
    $("#uri_body").removeClass("hide");
    $("#gabu_body").removeClass("hide");
    $("#mika_body").removeClass("hide");

    $("#riva_body").removeClass("hide");
    $("#coro_body").removeClass("hide");
    $("#sere_body").removeClass("hide");
    $("#shuva_body").removeClass("hide");
    $("#yugu_body").removeClass("hide");
    $("#tia_body").removeClass("hide");

    $("#grand-tag img").removeClass("unselect");
    $("#grand-tag span").removeClass("unselect");
    $("#baha-tag img").removeClass("unselect");
    $("#baha-tag span").removeClass("unselect");
    $("#riva-tag img").removeClass("unselect");
    $("#riva-tag span").removeClass("unselect");
    $("#coro-tag img").removeClass("unselect");
    $("#coro-tag span").removeClass("unselect");
    $("#sere-tag img").removeClass("unselect");
    $("#sere-tag span").removeClass("unselect");
    $("#shuva-tag img").removeClass("unselect");
    $("#shuva-tag span").removeClass("unselect");
    $("#yugu-tag img").removeClass("unselect");
    $("#yugu-tag span").removeClass("unselect");
    $("#tia-tag img").removeClass("unselect");
    $("#tia-tag span").removeClass("unselect");
});
$("#ang_tab").on("click", function () {
    $("#baha_body").addClass("hide");
    $("#gra_body").addClass("hide");

    $("#rafa_body").removeClass("hide");
    $("#uri_body").removeClass("hide");
    $("#gabu_body").removeClass("hide");
    $("#mika_body").removeClass("hide");

    $("#riva_body").addClass("hide");
    $("#coro_body").addClass("hide");
    $("#sere_body").addClass("hide");
    $("#shuva_body").addClass("hide");
    $("#yugu_body").addClass("hide");
    $("#tia_body").addClass("hide");

    $("#grand-tag img").addClass("unselect");
    $("#grand-tag span").addClass("unselect");
    $("#baha-tag img").addClass("unselect");
    $("#baha-tag span").addClass("unselect");
    $("#riva-tag img").addClass("unselect");
    $("#riva-tag span").addClass("unselect");
    $("#coro-tag img").addClass("unselect");
    $("#coro-tag span").addClass("unselect");
    $("#sere-tag img").addClass("unselect");
    $("#sere-tag span").addClass("unselect");
    $("#shuva-tag img").addClass("unselect");
    $("#shuva-tag span").addClass("unselect");
    $("#yugu-tag img").addClass("unselect");
    $("#yugu-tag span").addClass("unselect");
    $("#tia-tag img").addClass("unselect");
    $("#tia-tag span").addClass("unselect");
});
// $("#grand-tag").on("click", function () {
//     if($("#grand-tag img").hasClass('unselect')){
//         $("#grand-tag img").removeClass('unselect');
//         $("#grand-tag span").removeClass('unselect');
//     }else{
//         $("#grand-tag img").addClass('unselect');
//         $("#grand-tag span").addClass('unselect');
//     }
//     // $("#grand-tag img").css("filter","grayscale(1)");
// });
/* キャラタグがクリックされた時の画面制御 */
$(".chara-tag").on("click", function () {
    if ($(this).children('img').hasClass('unselect')) {
        $(this).children('img').removeClass('unselect');
        $(this).children('span').removeClass('unselect');
        //↓せっかく上頑張ったけど、眠すぎて無理なんでリファクタよろ
        if ($(this).hasClass('baha')) {
            $("#baha_body").removeClass("hide");
        }
        if ($(this).hasClass('grande')) {
            $("#gra_body").removeClass("hide");
        }
        if ($(this).hasClass('riva')) {
            $("#riva_body").removeClass("hide");
        }
        if ($(this).hasClass('coro')) {
            $("#coro_body").removeClass("hide");
        }
        if ($(this).hasClass('sere')) {
            $("#sere_body").removeClass("hide");
        }
        if ($(this).hasClass('yugu')) {
            $("#yugu_body").removeClass("hide");
        }
        if ($(this).hasClass('tia')) {
            $("#tia_body").removeClass("hide");
        }
        if ($(this).hasClass('shuva')) {
            $("#shuva_body").removeClass("hide");
        }

    } else {
        $(this).children('img').addClass('unselect');
        $(this).children('span').addClass('unselect');

        if ($(this).hasClass('baha')) {
            $("#baha_body").addClass("hide");
        }
        if ($(this).hasClass('grande')) {
            $("#gra_body").addClass("hide");
        }
        if ($(this).hasClass('riva')) {
            $("#riva_body").addClass("hide");
        }
        if ($(this).hasClass('coro')) {
            $("#coro_body").addClass("hide");
        }
        if ($(this).hasClass('sere')) {
            $("#sere_body").addClass("hide");
        }
        if ($(this).hasClass('yugu')) {
            $("#yugu_body").addClass("hide");
        }
        if ($(this).hasClass('tia')) {
            $("#tia_body").addClass("hide");
        }
        if ($(this).hasClass('shuva')) {
            $("#shuva_body").addClass("hide");
        }
    }
    // $("#grand-tag img").css("filter","grayscale(1)");
});
function getDate(){
    var now = new Date();
    var h = now.getHours();
    var mi = now.getMinutes();
    var s = now.getSeconds();
    return h + ":" + mi + ":"+ s;
};