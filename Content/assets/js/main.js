jQuery(function ($) {

    $(".notification a").click(function () {
        $(".FAQDropdown").css("display","none");
        $(".profileDropDown").css("display","none");
        $(".StatisticsBox").css("display", "none");
        $(".xx").css("display", "none");

        $(".notifyDropDown").toggle();
    });
    $(".faqToggle a").click(function () {
        $(".faqToggle p").css("display", "none");
        $(".faqToggle i").removeClass("fa-chevron-up");
        $(".faqToggle i").addClass("fa-chevron-down");
        $(this).parent().find("p").toggle();
        if ($(this).parent().find("i").hasClass("fa-chevron-down")) {
            $(this).parent().find("i").removeClass("fa-chevron-down");
            $(this).parent().find("i").addClass("fa-chevron-up");

        }
        else{
            $(".faqToggle i").addClass("fa-chevron-down");
        }
    });
    $(".fAQ a").click(function () {
      $(".notifyDropDown").css("display","none");
      $(".profileDropDown").css("display", "none");
      $(".StatisticsBox").css("display", "none");
      $(".xx").css("display", "none");
        $(".FAQDropdown").toggle();
    });
    $(".personalInfo").click(function () {
        $(".notifyDropDown").css("display","none");
        $(".FAQDropdown").css("display", "none");
        $(".StatisticsBox").css("display", "none");
        $(".xx").css("display", "none");
          $(".profileDropDown").toggle();
      });
    $(".bookDetailsBtn").click(function () {
        $(".xx").css("display", "none");
          $(".StatisticsBox").css("display", "block");

    })

    
    $(".bookDetailsBtn").click(function () {
        $(".xx").css("display", "none");
        $(".StatisticsBox").css("display", "block");

    })

      $(".stt a").click(function () {
          $(".notifyDropDown").css("display", "none");
          $(".FAQDropdown").css("display", "none");
          $(".profileDropDown").css("display", "none");
          //$(".StatisticsBox").css("display", "none");

          $(".xx").toggle();
      });

      $(".stt2 a").click(function () {
          $(".notifyDropDown").css("display", "none");
          $(".FAQDropdown").css("display", "none");
          $(".profileDropDown").css("display", "none");
          $(".StatisticsBox").css("display", "none");

          $(".xx").toggle();
      });

     
    
});

