$(function () {
    // カレンダー
    $(function () {
        $('input[name="date00"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });
  
    // 送信
    $('form').submit(function () {
        var date01 = $('input[name="date01"]').val();
        var date02 = $('input[name="date02"]').val();
        var date03 = $('input[name="date03"]').val();
        var number = $('input[name="number"].val();
        var name = '';
        var number = $('input[name="tel"].val();

        var msg = `第一希望日：${date01}\n第二希望日：${date02}\n第三希望日：${date03}\n人数：${number}\n氏名：${name}\nTEL：${tel}`;
        sendText(msg);

        return false;
    });
});
