$(".updatepanel").height($(".panel-info").height());
document.getElementById('file').onchange = function() {
  add();
  var imgFile = this.files[0];
  var fr = new FileReader();
  fr.onload = function() {
    var imgs = document.getElementsByClassName('updateimg');
    imgs[imgs.length-1].src = fr.result;
    /*document.getElementById('image').getElementsByTagName('img')[0].src = fr.result;*/
  };
  fr.readAsDataURL(imgFile);
};
function add(){
  var html = "<div class='col-sm-4'><div class='panel panel-info'><div class='panel-heading'><i class='fa fa-times'></i></div><div class='panel-body' style='text-align: center;'><div class='row'><div class='col-sm-12 col-md-12'><img class='updateimg img-responsive' src='img/p_big3.jpg' style='width: inherit;height: 210px;'/></div></div></div></div></div>";
  $("#updatebox").before(html);
}
$(".fa-times").click(function(){
  alert("111");
  /*alert($(this).parent().parent().parent().html());*/
  $(this).parent().parent().parent().remove();
});
function loadFile(file){
    $("#filename").html(file.name);
}
/*$(".panel").on("click","i",function(){
alert("111");
alert($(this).parent().parent().parent().html());
$(this).parent().parent().parent().remove();
});*/
/*function delete(){

}*/
