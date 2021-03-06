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
        case "Lv100 ガルーダ":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.garu-time').text(getDate());
            $('#garu_tbl tbody > tr:last').after(rec);
            break;
        case "Lv100 アテナ":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.ate-time').text(getDate());
            $('#ate_tbl tbody > tr:last').after(rec);
            break;
        case "Lv100 グラニ":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.gura-time').text(getDate());
            $('#gura_tbl tbody > tr:last').after(rec);
            break;
        case "Lv100 バアル":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.baa-time').text(getDate());
            $('#baa_tbl tbody > tr:last').after(rec);
            break;
        case "Lv100 フラム＝グラス":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.hura-time').text(getDate());
            $('#hura_tbl tbody > tr:last').after(rec);
            break;
        case "Lv100 マキュラ・マリウス":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.makyu-time').text(getDate());
            $('#makyu_tbl tbody > tr:last').after(rec);
            break;
        case "Lv100 メドゥーサ":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.medu-time').text(getDate());
            $('#medu_tbl tbody > tr:last').after(rec);
            break;
        case "Lv100 ナタク":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.nata-time').text(getDate());
            $('#nata_tbl tbody > tr:last').after(rec);
            break;
        case "Lv100 ティアマト・マグナ＝エア":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.h-tia-time').text(getDate());
            $('#h_tia_tbl tbody > tr:last').after(rec);
            break;
        case "Lv100 コロッサス・マグナ":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.h-coro-time').text(getDate());
            $('#h_coro_tbl tbody > tr:last').after(rec);
            break;
        case "Lv100 リヴァイアサン・マグナ":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.h-riva-time').text(getDate());
            $('#h_riva_tbl tbody > tr:last').after(rec);
            break;
        case "Lv100 ユグドラシル・マグナ":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.h-yugu-time').text(getDate());
            $('#h_yugu_tbl tbody > tr:last').after(rec);
            break;
        case "Lv100 シュヴァリエ・マグナ":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.h-shuva-time').text(getDate());
            $('#h_shuva_tbl tbody > tr:last').after(rec);
            break;
        case "Lv100 セレスト・マグナ":
            var rec = '<tr class="selectable"><td>' + id + '</td></tr>>';
            $('.h-sere-time').text(getDate());
            $('#h_sere_tbl tbody > tr:last').after(rec);
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

    $("#garu_body").addClass("hide");
    $("#ate_body").addClass("hide");
    $("#baa_body").addClass("hide");
    $("#gura_body").addClass("hide");

    $("#hura_body").addClass("hide");
    $("#makyu_body").addClass("hide");
    $("#medu_body").addClass("hide");
    $("#nata_body").addClass("hide");

    $("#h_riva_body").addClass("hide");
    $("#h_coro_body").addClass("hide");
    $("#h_sere_body").addClass("hide");
    $("#h_shuva_body").addClass("hide");
    $("#h_yugu_body").addClass("hide");
    $("#h_tia_body").addClass("hide");

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

    if ($(this).hasClass('active')){
        allTableClearCaseOfNotHide();
    }
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

    $("#garu_body").addClass("hide");
    $("#ate_body").addClass("hide");
    $("#baa_body").addClass("hide");
    $("#gura_body").addClass("hide");

    $("#hura_body").addClass("hide");
    $("#makyu_body").addClass("hide");
    $("#medu_body").addClass("hide");
    $("#nata_body").addClass("hide");

    $("#h_riva_body").addClass("hide");
    $("#h_coro_body").addClass("hide");
    $("#h_sere_body").addClass("hide");
    $("#h_shuva_body").addClass("hide");
    $("#h_yugu_body").addClass("hide");
    $("#h_tia_body").addClass("hide");

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

    if ($(this).hasClass('active')){
        allTableClearCaseOfNotHide();
    }

});
$("#all_tab").on("click", function () {
    $("#baha_body").removeClass("hide");
    $("#gra_body").removeClass("hide");

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

    $("#garu_body").addClass("hide");
    $("#ate_body").addClass("hide");
    $("#baa_body").addClass("hide");
    $("#gura_body").addClass("hide");

    $("#hura_body").addClass("hide");
    $("#makyu_body").addClass("hide");
    $("#medu_body").addClass("hide");
    $("#nata_body").addClass("hide");

    $("#h_riva_body").addClass("hide");
    $("#h_coro_body").addClass("hide");
    $("#h_sere_body").addClass("hide");
    $("#h_shuva_body").addClass("hide");
    $("#h_yugu_body").addClass("hide");
    $("#h_tia_body").addClass("hide");

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

    if ($(this).hasClass('active')){
        allTableClearCaseOfNotHide();
    }

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

    $("#garu_body").addClass("hide");
    $("#ate_body").addClass("hide");
    $("#baa_body").addClass("hide");
    $("#gura_body").addClass("hide");

    $("#hura_body").addClass("hide");
    $("#makyu_body").addClass("hide");
    $("#medu_body").addClass("hide");
    $("#nata_body").addClass("hide");

    $("#h_riva_body").addClass("hide");
    $("#h_coro_body").addClass("hide");
    $("#h_sere_body").addClass("hide");
    $("#h_shuva_body").addClass("hide");
    $("#h_yugu_body").addClass("hide");
    $("#h_tia_body").addClass("hide");

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

    if ($(this).hasClass('active')){
        allTableClearCaseOfNotHide();
    }


});

$("#new_tab").on("click", function () {
    $("#baha_body").addClass("hide");
    $("#gra_body").addClass("hide");

    $("#rafa_body").addClass("hide");
    $("#uri_body").addClass("hide");
    $("#gabu_body").addClass("hide");
    $("#mika_body").addClass("hide");

    $("#riva_body").addClass("hide");
    $("#coro_body").addClass("hide");
    $("#sere_body").addClass("hide");
    $("#shuva_body").addClass("hide");
    $("#yugu_body").addClass("hide");
    $("#tia_body").addClass("hide");

    $("#garu_body").removeClass("hide");
    $("#ate_body").removeClass("hide");
    $("#baa_body").removeClass("hide");
    $("#gura_body").removeClass("hide");

    $("#hura_body").addClass("hide");
    $("#makyu_body").addClass("hide");
    $("#medu_body").addClass("hide");
    $("#nata_body").addClass("hide");

    $("#h_riva_body").addClass("hide");
    $("#h_coro_body").addClass("hide");
    $("#h_sere_body").addClass("hide");
    $("#h_shuva_body").addClass("hide");
    $("#h_yugu_body").addClass("hide");
    $("#h_tia_body").addClass("hide");

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

    if ($(this).hasClass('active')){
        allTableClearCaseOfNotHide();
    }


});
$("#old_tab").on("click", function () {
    $("#baha_body").addClass("hide");
    $("#gra_body").addClass("hide");

    $("#rafa_body").addClass("hide");
    $("#uri_body").addClass("hide");
    $("#gabu_body").addClass("hide");
    $("#mika_body").addClass("hide");

    $("#riva_body").addClass("hide");
    $("#coro_body").addClass("hide");
    $("#sere_body").addClass("hide");
    $("#shuva_body").addClass("hide");
    $("#yugu_body").addClass("hide");
    $("#tia_body").addClass("hide");

    $("#garu_body").addClass("hide");
    $("#ate_body").addClass("hide");
    $("#baa_body").addClass("hide");
    $("#gura_body").addClass("hide");

    $("#hura_body").removeClass("hide");
    $("#makyu_body").removeClass("hide");
    $("#medu_body").removeClass("hide");
    $("#nata_body").removeClass("hide");

    $("#h_riva_body").addClass("hide");
    $("#h_coro_body").addClass("hide");
    $("#h_sere_body").addClass("hide");
    $("#h_shuva_body").addClass("hide");
    $("#h_yugu_body").addClass("hide");
    $("#h_tia_body").addClass("hide");

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

    if ($(this).hasClass('active')){
        allTableClearCaseOfNotHide();
    }


});
// $("#old_tab").on("click", function () {
//     $("#baha_body").addClass("hide");
//     $("#gra_body").addClass("hide");
//
//     $("#rafa_body").addClass("hide");
//     $("#uri_body").addClass("hide");
//     $("#gabu_body").addClass("hide");
//     $("#mika_body").addClass("hide");
//
//     $("#riva_body").addClass("hide");
//     $("#coro_body").addClass("hide");
//     $("#sere_body").addClass("hide");
//     $("#shuva_body").addClass("hide");
//     $("#yugu_body").addClass("hide");
//     $("#tia_body").addClass("hide");
//
//     $("#garu_body").addClass("hide");
//     $("#ate_body").addClass("hide");
//     $("#baa_body").addClass("hide");
//     $("#gura_body").addClass("hide");
//
//     $("#hura_body").addClass("hide");
//     $("#makyu_body").addClass("hide");
//     $("#medu_body").addClass("hide");
//     $("#nata_body").addClass("hide");
//
//     $("#grand-tag img").addClass("unselect");
//     $("#grand-tag span").addClass("unselect");
//     $("#baha-tag img").addClass("unselect");
//     $("#baha-tag span").addClass("unselect");
//     $("#riva-tag img").addClass("unselect");
//     $("#riva-tag span").addClass("unselect");
//     $("#coro-tag img").addClass("unselect");
//     $("#coro-tag span").addClass("unselect");
//     $("#sere-tag img").addClass("unselect");
//     $("#sere-tag span").addClass("unselect");
//     $("#shuva-tag img").addClass("unselect");
//     $("#shuva-tag span").addClass("unselect");
//     $("#yugu-tag img").addClass("unselect");
//     $("#yugu-tag span").addClass("unselect");
//     $("#tia-tag img").addClass("unselect");
//     $("#tia-tag span").addClass("unselect");
//
//
// });
$("#kaze_tab").on("click", function () {
    $("#baha_body").addClass("hide");
    $("#gra_body").addClass("hide");

    $("#rafa_body").removeClass("hide");
    $("#uri_body").addClass("hide");
    $("#gabu_body").addClass("hide");
    $("#mika_body").addClass("hide");

    $("#riva_body").addClass("hide");
    $("#coro_body").addClass("hide");
    $("#sere_body").addClass("hide");
    $("#shuva_body").addClass("hide");
    $("#yugu_body").addClass("hide");
    $("#tia_body").removeClass("hide");

    $("#garu_body").removeClass("hide");
    $("#ate_body").addClass("hide");
    $("#baa_body").addClass("hide");
    $("#gura_body").addClass("hide");

    $("#hura_body").addClass("hide");
    $("#makyu_body").addClass("hide");
    $("#medu_body").addClass("hide");
    $("#nata_body").removeClass("hide");

    $("#h_riva_body").addClass("hide");
    $("#h_coro_body").addClass("hide");
    $("#h_sere_body").addClass("hide");
    $("#h_shuva_body").addClass("hide");
    $("#h_yugu_body").addClass("hide");
    $("#h_tia_body").addClass("hide");

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
    $("#tia-tag img").removeClass("unselect");
    $("#tia-tag span").removeClass("unselect");

    if ($(this).hasClass('active')){
        allTableClearCaseOfNotHide();
    }


});
$("#hi_tab").on("click", function () {
    $("#baha_body").addClass("hide");
    $("#gra_body").addClass("hide");

    $("#rafa_body").addClass("hide");
    $("#uri_body").addClass("hide");
    $("#gabu_body").addClass("hide");
    $("#mika_body").removeClass("hide");

    $("#riva_body").addClass("hide");
    $("#coro_body").removeClass("hide");
    $("#sere_body").addClass("hide");
    $("#shuva_body").addClass("hide");
    $("#yugu_body").addClass("hide");
    $("#tia_body").addClass("hide");

    $("#garu_body").addClass("hide");
    $("#ate_body").removeClass("hide");
    $("#baa_body").addClass("hide");
    $("#gura_body").addClass("hide");

    $("#hura_body").removeClass("hide");
    $("#makyu_body").addClass("hide");
    $("#medu_body").addClass("hide");
    $("#nata_body").addClass("hide");

    $("#h_riva_body").addClass("hide");
    $("#h_coro_body").addClass("hide");
    $("#h_sere_body").addClass("hide");
    $("#h_shuva_body").addClass("hide");
    $("#h_yugu_body").addClass("hide");
    $("#h_tia_body").addClass("hide");

    $("#grand-tag img").addClass("unselect");
    $("#grand-tag span").addClass("unselect");
    $("#baha-tag img").addClass("unselect");
    $("#baha-tag span").addClass("unselect");
    $("#riva-tag img").addClass("unselect");
    $("#riva-tag span").addClass("unselect");
    $("#coro-tag img").removeClass("unselect");
    $("#coro-tag span").removeClass("unselect");
    $("#sere-tag img").addClass("unselect");
    $("#sere-tag span").addClass("unselect");
    $("#shuva-tag img").addClass("unselect");
    $("#shuva-tag span").addClass("unselect");
    $("#yugu-tag img").addClass("unselect");
    $("#yugu-tag span").addClass("unselect");
    $("#tia-tag img").addClass("unselect");
    $("#tia-tag span").addClass("unselect");

    if ($(this).hasClass('active')){
        allTableClearCaseOfNotHide();
    }


});
$("#mizu_tab").on("click", function () {
    $("#baha_body").addClass("hide");
    $("#gra_body").addClass("hide");

    $("#rafa_body").addClass("hide");
    $("#uri_body").addClass("hide");
    $("#gabu_body").removeClass("hide");
    $("#mika_body").addClass("hide");

    $("#riva_body").removeClass("hide");
    $("#coro_body").addClass("hide");
    $("#sere_body").addClass("hide");
    $("#shuva_body").addClass("hide");
    $("#yugu_body").addClass("hide");
    $("#tia_body").addClass("hide");

    $("#garu_body").addClass("hide");
    $("#ate_body").addClass("hide");
    $("#baa_body").addClass("hide");
    $("#gura_body").removeClass("hide");

    $("#hura_body").addClass("hide");
    $("#makyu_body").removeClass("hide");
    $("#medu_body").addClass("hide");
    $("#nata_body").addClass("hide");

    $("#h_riva_body").addClass("hide");
    $("#h_coro_body").addClass("hide");
    $("#h_sere_body").addClass("hide");
    $("#h_shuva_body").addClass("hide");
    $("#h_yugu_body").addClass("hide");
    $("#h_tia_body").addClass("hide");

    $("#grand-tag img").addClass("unselect");
    $("#grand-tag span").addClass("unselect");
    $("#baha-tag img").addClass("unselect");
    $("#baha-tag span").addClass("unselect");
    $("#riva-tag img").removeClass("unselect");
    $("#riva-tag span").removeClass("unselect");
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

    if ($(this).hasClass('active')){
        allTableClearCaseOfNotHide();
    }


});
$("#tuti_tab").on("click", function () {
    $("#baha_body").addClass("hide");
    $("#gra_body").addClass("hide");

    $("#rafa_body").addClass("hide");
    $("#uri_body").removeClass("hide");
    $("#gabu_body").addClass("hide");
    $("#mika_body").addClass("hide");

    $("#riva_body").addClass("hide");
    $("#coro_body").addClass("hide");
    $("#sere_body").addClass("hide");
    $("#shuva_body").addClass("hide");
    $("#yugu_body").removeClass("hide");
    $("#tia_body").addClass("hide");

    $("#garu_body").addClass("hide");
    $("#ate_body").addClass("hide");
    $("#baa_body").removeClass("hide");
    $("#gura_body").addClass("hide");

    $("#hura_body").addClass("hide");
    $("#makyu_body").addClass("hide");
    $("#medu_body").removeClass("hide");
    $("#nata_body").addClass("hide");

    $("#h_riva_body").addClass("hide");
    $("#h_coro_body").addClass("hide");
    $("#h_sere_body").addClass("hide");
    $("#h_shuva_body").addClass("hide");
    $("#h_yugu_body").addClass("hide");
    $("#h_tia_body").addClass("hide");

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
    $("#yugu-tag img").removeClass("unselect");
    $("#yugu-tag span").removeClass("unselect");
    $("#tia-tag img").addClass("unselect");
    $("#tia-tag span").addClass("unselect");

    if ($(this).hasClass('active')){
        allTableClearCaseOfNotHide();
    }


});
$("#h_tab").on("click", function () {
    $("#baha_body").addClass("hide");
    $("#gra_body").addClass("hide");

    $("#rafa_body").addClass("hide");
    $("#uri_body").addClass("hide");
    $("#gabu_body").addClass("hide");
    $("#mika_body").addClass("hide");

    $("#riva_body").addClass("hide");
    $("#coro_body").addClass("hide");
    $("#sere_body").addClass("hide");
    $("#shuva_body").addClass("hide");
    $("#yugu_body").addClass("hide");
    $("#tia_body").addClass("hide");

    $("#garu_body").addClass("hide");
    $("#ate_body").addClass("hide");
    $("#baa_body").addClass("hide");
    $("#gura_body").addClass("hide");

    $("#hura_body").addClass("hide");
    $("#makyu_body").addClass("hide");
    $("#medu_body").addClass("hide");
    $("#nata_body").addClass("hide");

    $("#h_riva_body").removeClass("hide");
    $("#h_coro_body").removeClass("hide");
    $("#h_sere_body").removeClass("hide");
    $("#h_shuva_body").removeClass("hide");
    $("#h_yugu_body").removeClass("hide");
    $("#h_tia_body").removeClass("hide");

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

    if ($(this).hasClass('active')){
        allTableClearCaseOfNotHide();
    }

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
// $(".nav-tab").on("click", function () {
//     allTableClearCaseOfNotHide();
// });
function clearTableByBodyNameAndTblName(bodyName,tblName){
        $(tblName+' tr').remove();
        $(tblName).prepend('<tr></tr>');
        $(bodyName+' > .tag-label-container > .time').text('');
};
function clearTableByBodyNameAndTblNameCaseOfNotHide(bodyName,tblName){
    if(!$(bodyName).hasClass('hide')){
        $(tblName+' tr').remove();
        $(tblName).prepend('<tr></tr>');
        $(bodyName+' > .tag-label-container > .time').text('');
    }
};
//いま表示されてるテーブルを全部クリアする
function allTableClearCaseOfNotHide(){
    //マグナ
    clearTableByBodyNameAndTblNameCaseOfNotHide('#shuva_body','#shuva_tbl');
    clearTableByBodyNameAndTblNameCaseOfNotHide('#sere_body','#sere_tbl');
    clearTableByBodyNameAndTblNameCaseOfNotHide('#coro_body','#coro_tbl');
    clearTableByBodyNameAndTblNameCaseOfNotHide('#riva_body','#riva_tbl');
    clearTableByBodyNameAndTblNameCaseOfNotHide('#yugu_body','#yugu_tbl');
    clearTableByBodyNameAndTblNameCaseOfNotHide('#tia_body','#tia_tbl');

    //100
    clearTableByBodyNameAndTblNameCaseOfNotHide('#baha_body','#baha_tbl');
    clearTableByBodyNameAndTblNameCaseOfNotHide('#gra_body','#gra_tbl');

    //天使
    clearTableByBodyNameAndTblNameCaseOfNotHide('#mika_body','#mika_tbl');
    clearTableByBodyNameAndTblNameCaseOfNotHide('#uri_body','#uri_tbl');
    clearTableByBodyNameAndTblNameCaseOfNotHide('#gabu_body','#gabu_tbl');
    clearTableByBodyNameAndTblNameCaseOfNotHide('#rafa_body','#rafa_tbl');

    //旧石
    clearTableByBodyNameAndTblNameCaseOfNotHide('#hura_body','#hura_tbl');
    clearTableByBodyNameAndTblNameCaseOfNotHide('#makyu_body','#makyu_tbl');
    clearTableByBodyNameAndTblNameCaseOfNotHide('#medu_body','#medu_tbl');
    clearTableByBodyNameAndTblNameCaseOfNotHide('#nata_body','#nata_tbl');

    //新石
    clearTableByBodyNameAndTblNameCaseOfNotHide('#garu_body','#garu_tbl');
    clearTableByBodyNameAndTblNameCaseOfNotHide('#ate_body','#ate_tbl');
    clearTableByBodyNameAndTblNameCaseOfNotHide('#gura_body','#gura_tbl');
    clearTableByBodyNameAndTblNameCaseOfNotHide('#baa_body','#baa_tbl');

    //HL
    clearTableByBodyNameAndTblNameCaseOfNotHide('#h_shuva_body','#h_shuva_tbl');
    clearTableByBodyNameAndTblNameCaseOfNotHide('#h_sere_body','#h_sere_tbl');
    clearTableByBodyNameAndTblNameCaseOfNotHide('#h_coro_body','#h_coro_tbl');
    clearTableByBodyNameAndTblNameCaseOfNotHide('#h_riva_body','#h_riva_tbl');
    clearTableByBodyNameAndTblNameCaseOfNotHide('#h_yugu_body','#h_yugu_tbl');
    clearTableByBodyNameAndTblNameCaseOfNotHide('#h_tia_body','#h_tia_tbl');


};

$(document).keydown(function(event){
    if(event.keyCode === 113 ) {
        allTableClearCaseOfNotHide();
    }
});

function getDate(){
    var now = new Date();
    var h = now.getHours();
    var mi = now.getMinutes();
    var s = now.getSeconds();
    return h + ":" + mi + ":"+ s;
};
