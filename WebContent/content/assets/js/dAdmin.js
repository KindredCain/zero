function layout(){
    $(".page").css({
        "height":$(window).height() + "px"
    });
    $(".page-content").css({
        "height":$(window).height() + "px"
    });
    $(".shadow-box").css({
        "width":$(window).width() + "px",
        "height":$(window).height() + "px"
    });
     $(".add-select").css({
        "height":$(window).height() + "px"
    });
}
$(window).ready(function(){
    layout();
    $("#bt1").click(function(){
        document.getElementById("adminContent").style.display="block";
        document.getElementById("on").style.display="none";
        document.getElementById("adminTeacher").style.display="none";
        document.getElementById("on2").style.display="none";
        
    });
     $("#bt2").click(function(){
        document.getElementById("adminContent").style.display="none";
        document.getElementById("on").style.display="block";
        document.getElementById("adminTeacher").style.display="none";
        document.getElementById("on2").style.display="none";
    });
     $("#bt3").click(function(){
        document.getElementById("adminContent").style.display="none";
        document.getElementById("on").style.display="none";
        document.getElementById("adminTeacher").style.display="block";
        document.getElementById("on2").style.display="none";
    });
     $("#bt4").click(function(){
        document.getElementById("adminContent").style.display="none";
        document.getElementById("on").style.display="none";
        document.getElementById("adminTeacher").style.display="none";
        document.getElementById("on2").style.display="block";
    });
     $("#bt5").click(function(){
        document.getElementById("adminContent").style.display="block";
        document.getElementById("on").style.display="none";
        document.getElementById("adminTeacher").style.display="none";
        document.getElementById("on2").style.display="none";
    });
     $("#bt6").click(function(){
        document.getElementById("adminContent").style.display="block";
        document.getElementById("on").style.display="none";
        document.getElementById("adminTeacher").style.display="none";
        document.getElementById("on2").style.display="none";
    });
});