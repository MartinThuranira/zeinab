  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  $(document).ready(function(){
      $("input").focus(function(){
          $(this).css("background-color", "#cccccc");
      });
      $("input").blur(function(){
          $(this).css("background-color", "#ffffff");
           var $result = $("#result");
           var email = $("#email").val();
            $result.text("");

        if (!validateEmail(email)) {
          $result.text(email + " is not valid";
          $result.css("color", "red");
          }
    }
      });
  })

 