// index.blade.phpで定義したLaravel.coursesを使う
console.log(Laravel.courses);

// tdのidとデータのcourse_indexが一致したら、そのデータのタイトルをtdに出力する
Laravel.courses.forEach(function(course) {
    for(let i=1; i<=25; i++) {
        if($('#index_'+i).is(`[id = index_${course['course_index']}]`)) {
            $('#index_' + i).html(`<h5>${course['title']}</h5>`);
        }
    }
});

// tdがクリックされた時の処理
$('td').click(function() {
    $('#exampleModal').modal('show');
    $('#btn-cancel').hide();
    $('#btn-delete').hide();
    $('#btn-submit').hide();

    const $id = $(this).attr('id');

    // クリックされたtdのデータをモーダルに埋め込む
    // 途中でbreakしたいので、forEachじゃなくてsomeを使う
    Laravel.courses.some(function(course) {
        let course_index = 'index_' + course['course_index']

        if($id === course_index) {
            $('.modal').removeClass('empty');
            $('#btn-edit').show();
            $('#btn-create').hide();
            $('#modal-title').text(course['title']);
            $('#modal-note').text(course['note']);
            $('#modal-place').text(course['place']);
            $('#modal-teacher').text(course['teacher']);
            return true;
        } else {
            $('.modal').addClass('empty');
            $('#btn-edit').hide();
            $('#btn-create').show();
            $('.show-data').text('');
        }
    });
});

$('#btn-edit').click(function() {
    $('.modal-input').show();
    $('.show-data').hide();
    $('#btn-cancel').show();
    $('#btn-close').hide();
    $('#btn-delete').show();
    $('#btn-submit').show();
    $(this).hide();

    $('#input-title').val($('#modal-title').text());
    $('#input-note').val($('#modal-note').text());
    $('#input-place').val($('#modal-place').text());
    $('#input-teacher').val($('#modal-teacher').text());
});

$('#btn-create').click(function() {
    $('.modal-input').show();
    $('.show-data').hide();
    $('#btn-cancel').show();
    $('#btn-close').hide();
    $('#btn-submit').show();
    $(this).hide();

    $('#input-title').val('');
    $('#input-note').val('');
    $('#input-place').val('');
    $('#input-teacher').val('');
});

$('#btn-cancel').click(function() {
    $('.modal-input').hide();
    $('.show-data').show();
    $('#btn-cancel').hide();
    $('#btn-close').show();
    $('#btn-delete').hide();
    $('#btn-submit').hide();

    if($('.modal').hasClass('empty')) {
         $('#btn-create').show();
    } else {
        $('#btn-edit').show();
    }
});

// 編集・作成データの送信（ajax）
$('#btn-submit').click(function() {
    // 作成データ
    if($('.modal').hasClass('empty')) {

    }
    // 編集データ
    else {

    }
});

$('.btn-delete').click(function() {

});
