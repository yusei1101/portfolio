//トップページへ戻る
$(".top-page").click(function(){
    $("html, body").animate({"scrollTop":0}, 500);
  });
  
$(window).on("scroll", function(){
    if($(this).scrollTop() > 100){
      $(".top-page").show();
    }else{
      $(".top-page").hide();
    }
  });


// リンク先まで飛ばす
$("a[href]").click(function(){
    const speed = 500;
    const headerHight = 0;
    const id = $(this).attr("href");
    const position = $(id).offset().top - headerHight;
    $("html, body").animate({"scrollTop": position}, speed);
    return false;
  });