// index.blade.phpで定義したLaravel.coursesを使う
console.log(Laravel.courses);

$('td').click(function() {
    $('#exampleModal').modal('show');
    const id_index = $(this).attr('id');

    Laravel.courses.some(function(course) {
        let index = 'index_' + course['course_index']

        if(id_index === index) {
            $('#input-title').val(course['title']);
            $('#input-note').val(course['note']);
            $('#input-place').val(course['place']);
            $('#input-teacher').val(course['teacher']);
            return true;
        } else {
            $('#input-title').val("");
            $('#course')[0].reset();
        }
    });
});

$('.btn-light').click(function() {

});

$('.btn-danger').click(function() {
    $('#input-title').val("");
    $('#course')[0].reset();
});

Laravel.courses.forEach(function(course) {
    for(let i=1; i<=25; i++) {
        if($('#index_'+i).is(`[id = index_${course['course_index']}]`)) {
            $('#index_' + i).html(`<h5>${course['title']}</h5>`);
        }
    }
});
