function lxfEndtime(){
  $t=$('#t').html();
  if($t!=0){
    $('#t').html($t-1);
    $i=setTimeout("lxfEndtime()",1000);
  }else{
    $('.xlBox').animate({"margin-top":"-600px"},1000);
    $('.bt1').animate({"right":"120px"},1000);
    $('#t').html(5);
    clearTimeout($i);
  }
};
$()
$(document).ready(function(){
  lxfEndtime();
  $('.close').click(function(){
    $('.xlBox').animate({"margin-top":"-600px"},1000);
    $('.bt1').animate({"right":"120px"},1000);
    $('#t').html(5);
    clearTimeout($i);
  })

});
