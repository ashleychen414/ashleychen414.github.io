$('#ok').click(tempOutput);
$('#reset').hide();

function tempOutput() {
    const temp = parseInt ($('#tempInput').val())
    const type = $('#tempType').val()
    const hot = 'YOU ARE ON FIRE!!!!'
    const cold = 'YOU ARE ICE COLD!!!'
    const warm = 'You are as lukewarm as a bottle of water. stay hydrated!'
   

    if (temp >= 25 && type == 'celsius' || temp > 75 && type == 'farenheit') {
        console.log(hot)
        $('body').css('background-image', 'url(http://pluspng.com/img-png/fire-png-gif-download-256.gif)')
        $('#output').html(hot);
    } 
    else if (temp <= 0 && type == 'celsius' || temp < 32 && type == 'farenheit') {
       console.log(cold)
       $('body').css('background-image', 'url(https://media.giphy.com/media/xewXAm7cU6Lny/giphy.gif)')
       $('#output').html(cold);
    }

    else {
        console.log(warm)
       $('body').css ('background', '#83c4f7')
       $('#output').html(warm);
    } 

$('#reset').show()
};

$('#reset').click (function (){
    $('#reset').hide();
    $('#tempInput').val ('');
    $('body').css ('background','white')
    $('#output').html('');
});