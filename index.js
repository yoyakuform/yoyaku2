$(function () {
    // カレンダー
    $(function () {
        $('input[name="date00"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });

    // 参加人数分の氏名欄を生成
    $('#form-number').click(function () {
        $('#form-name').empty();
        var num = $('input[name="number"]:checked').val();
        for (i = 0; i < num; i++) {
            $('#form-name').append(
                `<input class="form-control w-100 mt-1" name="name" maxlength="10">`
            );
        }
    });

    // 送信
    $('form').submit(function () {
        var date01 = $('input[name="date01"]').val();
        var time01 = $('input[name="time01"]').val();
        var date02 = $('input[name="date02"]').val();
        var time02 = $('input[name="time02"]').val();
        var date03 = $('input[name="date03"]').val();
        var time03 = $('input[name="time03"]').val();
        var number = $('input[name="number"]').val();
        var name = $('input[name="name"]').val();
        var tel = $('input[name="tel"]').val();
        var address = $('input[name="address"]').val();
        $('#form-name').children().each(function (i, elm) {
            names += $(elm).val() + '、';
        })
        names = names.slice(0, -1);

        var msg = `・第一希望日：${date01}\n希望時間：${time01}\n・第二希望日：${date02}\n希望時間：${time02}\n・第三希望日：${date03}\n希望時間：${time03}\n人数：${number}\n氏名：${name}\n電話番号：${tel}\n備考：${address}`;
        sendText(msg);

        return false;
    });
});
