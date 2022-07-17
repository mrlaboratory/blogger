// click button = .affcupon
// object name mrcupon and mrcupon2 2

$('.affcupon').on('click',function(){
var m = 0;
for(var i = 0;i<Object.keys(mrcupon).length;i++){
if($('.cupon input').val()==Object.values(mrcupon)[i][0]){
$('.discountp').text((mrcupon[i][1]/100)*$(".simpleCart_total").text().replace('.',''))
$('.affcupon').text('Applied')
$('.discounttext').text(mrcupon[i][0]+' '+mrcupon[i][1]+'%')
}
}
for(var i = 0;i<Object.keys(mrcupon2).length;i++){
if($('.cupon input').val()==Object.values(mrcupon2)[i][0]){
$('.discountp').text(mrcupon2[i][1])
$('.affcupon').text('Applied');
$('.discounttext').text(mrcupon2[i][0]+' '+mrcupon2[i][1]+' tk');
}
}


})
