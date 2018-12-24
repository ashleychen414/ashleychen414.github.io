// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

$('.thumb').click(one);
//$('#second').click(two);
//$('#third').click(three);
//$('#fourth').click(four);

function one() {
   const src =  $(this).attr('src')
   console.log(src)
    $('#bigimage').attr('src', src);
   
}

//function two() {
    // $('#bigimage').attr('src', 'img/2.jpg');
//}

//function three() {
    //$('#bigimage').attr('src', 'img/3.jpg');
//}

//function four() {
    //$('#bigimage').attr('src', 'img/4.jpg');
//}