
$(document).ready(function(){
    
/*    function back() {
       if ($('#rectangle').hasClass('hide')){
        $('#rectangle').removeClass('hide');
    } else {    
        $('#rectangle').addClass('hide');
    }
}
    var move=document.getElementById('left');
    move.addEventListener('click', back);
    
    



function back2() {
       if ($('#rectangle2').hasClass('hide')){
        $('#rectangle2').removeClass('hide');
    } else {    
        $('#rectangle2').addClass('hide');
    }
}
    var move2=document.getElementById('left2');
    move2.addEventListener('click', back2);
    


function back3() {
       if ($('#rectangle3').hasClass('hide2')){
        $('#rectangle3').removeClass('hide2');
    } else {    
        $('#rectangle3').addClass('hide2');
    }
}
    var move3=document.getElementById('left3');
    move3.addEventListener('click', back3);
    
    
    function back4() {
       if ($('#rectangle4').hasClass('hide2')){
        $('#rectangle4').removeClass('hide2');
    } else {    
        $('#rectangle4').addClass('hide2');
    }
}
    var move4=document.getElementById('left4');
    move4.addEventListener('click', back4); */
    
    
})


$(document).on("scroll", function() {

        if($(document).scrollTop()>200) {
            $('#rectangle2').removeClass('hide')
        }
    
        if($(document).scrollTop()>200) {
            $('#rectangle').removeClass('hide')
        }
    
        if($(document).scrollTop()>160) {
            $('#rectangle3').removeClass('hide2')
        }
    
        if($(document).scrollTop()>160) {
            $('#rectangle4').removeClass('hide2')
        }
    
    
})


