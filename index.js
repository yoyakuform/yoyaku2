$(function () {
    // カレンダー
    $(function () {
        $('input[name="date00"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });
  
    // 送信
    $('form').submit(function () {
        var date = $('input[name="date01"]').val();
        var date = $('input[name="date02"]').val();
        var date = $('input[name="date03"]').val();
        var number = $('input[name="number"].val();
        var name = $('input[name="name"].val();
        var number = $('input[name="tel"].val();
        var text = $('input[name="text"].val();

        var msg = `●第一希望日：${date01}\n●第二希望日：${date02}\n●第三希望日：${date03}\n●人数：${number}\n●氏名：${name}●TEL：${tel}\n●備考：${text}`;
        sendText(msg);

        return false;
    });
});
