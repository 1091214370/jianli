//创意简历开始
$(document).ready(function () {
    $(".toggle1").click(function () {
       $(".selectbox1").slideToggle();
        $(".selectbox2,.selectbox3,.selectbox4,.selectbox5").hide("slow");
    });
    $(".toggle2").click(function () {
       $(".selectbox2").slideToggle();
        $(".selectbox1,.selectbox3,.selectbox4,.selectbox5").hide("slow");
    });
    $(".toggle3").click(function () {
        $(".selectbox3").slideToggle();
        $(".selectbox1,.selectbox2,.selectbox4,.selectbox5").hide("slow");
    });
    $(".toggle4").click(function () {
        $(".selectbox4").slideToggle();
        $(".selectbox1,.selectbox2,.selectbox3,.selectbox5").hide("slow");
    });
    $(".toggle5").click(function () {
        $(".selectbox5").slideToggle();
        $(".selectbox1,.selectbox2,.selectbox3,.selectbox4").hide("slow");
    });
});
