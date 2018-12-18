// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

$('#first').click(one);
$('#second').click(two);
$('#third').click(three);
$('#fourth').click(four);

function one() {
    $('#bigimage').attr('src', 'img/1.jpg');
}

function two() {
    $('#bigimage').attr('src', 'img/2.jpg');
}

function three() {
    $('#bigimage').attr('src', 'img/3.jpg');
}

function four() {
    $('#bigimage').attr('src', 'img/4.jpg');
}