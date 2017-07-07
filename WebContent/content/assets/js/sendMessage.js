  $(document).ready(function(){
          document.getElementById("Student").style.display="none";
  });
function Class(argument){
    // alert($(argument).children(".weui-cell__bd").children("p").text());
    document.getElementById("SnedMessage").style.display="none";
    document.getElementById("Student").style.display="block";
}

function Cancel(){
    document.getElementById("SnedMessage").style.display="block";
    document.getElementById("Student").style.display="none";
}