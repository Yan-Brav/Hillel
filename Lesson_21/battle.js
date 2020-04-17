$batman = $('#batman');
$joker = $('#joker');
$boom = $('#explosion');
let batmanLocation = {};
let jokerLocation = {};
function explode() {
    if (Math.abs(batmanLocation.batmanX - jokerLocation.jokerX) < 30
        && Math.abs(batmanLocation.batmanY - jokerLocation.jokerY) < 30) {
        $boom.offset({left: $batman.offset().left, top: $batman.offset().top});
        $boom.animate({
            opacity: 1
        }, 0)
    } else {
        $boom.animate({
            opacity: 0
        }, 0)
    }
}
$(document).on('keydown',function(key) {
    switch(parseInt(key.which)) {
        case 39:
            $batman.animate({
                left: '+=10px'
            },10);
            break;
        case 37:
            $batman.animate({
                left: '-=10px'
            },10);
            break;
        case 38:
            $batman.animate({
                top: '-=10px'
            },10);
            break;
        case 40:
            $batman.animate({
                top: '+=10px'
            },10);
            break;
    }
    batmanLocation = {
        batmanX: $batman.offset().left,
        batmanY: $batman.offset().top
    };
    // $boom.offset({left: $batman.offset().left, top: $batman.offset().top});
    explode();
});
$(document).on('keydown', function(key) {
    switch(parseInt(key.which)) {
        case 68:
            $joker.animate({
                left: '+=10px'
            },10);
            break;
        case 65:
            $joker.animate({
                left: '-=10px'
            },10);
            break;
        case 87:
            $joker.animate({
                top: '-=10px'
            },10);
            break;
        case 88:
            $joker.animate({
                top: '+=10px'
            },10);
            break;
    }
    jokerLocation = {
        jokerX: $joker.offset().left,
        jokerY: $joker.offset().top
    };
});
