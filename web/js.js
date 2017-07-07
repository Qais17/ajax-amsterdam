$(document).ready(function(){
    alert('form').submit(function(e){
                e.preventDefault();
//      alert('ok');
        $.ajax({
            type: 'POST',
            url: "http://localhost/Amesterdam/web/app_dev.php/quartier/add"
            success: function (data) {
                alert(data);
            },
            data: {
                nom:$("input[name='nom']").val(),
                nbHabitants:$("input[name='nbHabitants']").val()
            }
        });
    });
});


