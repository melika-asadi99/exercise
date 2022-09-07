$(function () {
    $(".imgItem1").show();
    $(".imgItem2").hide();
    $(".imgItem3").hide();
    $(".imgItem4").hide();
    $(".btnItem1").addClass("active");
    $(".btnItem2").removeClass("active");
    $(".btnItem3").removeClass("active");
    $(".btnItem4").removeClass("active");
    
    $(".groupbox1").show();
    $(".groupbox2").hide();
    $(".groupbox3").hide();
    $(".goup1").addClass("active");
    $(".group2").removeClass("active");
    $(".group3").removeClass("active");
    $(".groupnext1").hide();
    $(".groupnext2").hide();
    $(".groupnext3").hide();
    $(".groupprev1").show();
    $(".groupprev2").hide();
    $(".groupprev3").hide();



    $(".group1").click(function () {
        $(".groupbox1").show();
        $(".groupbox2").hide();
        $(".groupbox3").hide();
        $(".group1").addClass("active");
        $(".group2").removeClass("active");
        $(".group3").removeClass("active");
    });

    $(".group2").click(function () {
        $(".groupbox1").hide();
        $(".groupbox2").show();
        $(".groupbox3").hide();
        $(".group1").removeClass("active");
        $(".group2").addClass("active");
        $(".group3").removeClass("active");
    });
    $(".group3").click(function () {
        $(".groupbox1").hide();
        $(".groupbox2").hide();
        $(".groupbox3").show();
        $(".group1").removeClass("active");
        $(".group2").removeClass("active");
        $(".group3").addClass("active");
    });
    
    
    $(".btnItem2").click(function () {
        $(".imgItem1").hide();
        $(".imgItem2").show();
        $(".imgItem3").hide();
        $(".imgItem4").hide();
        $(".btnItem1").removeClass("active");
        $(".btnItem2").addClass("active");
        $(".btnItem3").removeClass("active");
        $(".btnItem4").removeClass("active");
    });
    $(".btnItem3").click(function () {
        $(".imgItem1").hide();
        $(".imgItem2").hide();
        $(".imgItem3").show();
        $(".imgItem4").hide();
        $(".btnItem1").removeClass("active");
        $(".btnItem2").removeClass("active");
        $(".btnItem3").addClass("active");
        $(".btnItem4").removeClass("active");
    });
    $(".btnItem4").click(function () {
        $(".imgItem1").hide();
        $(".imgItem2").hide();
        $(".imgItem3").hide();
        $(".imgItem4").show();
        $(".btnItem1").removeClass("active");
        $(".btnItem2").removeClass("active");
        $(".btnItem3").removeClass("active");
        $(".btnItem4").addClass("active");
    });
    $(".group1").click(function () {
        $(".groupbox1").show();
        $(".groupbox2").hide();
        $(".groupbox3").hide();
        $(".group1").addClass("active");
        $(".group2").removeClass("active");
        $(".group3").removeClass("active");
        $(".groupnext1").hide();
        $(".groupnext2").hide();
        $(".groupnext3").hide();
        $(".groupprev1").show();
        $(".groupprev2").hide();
        $(".groupprev3").hide();
    });
    $(".group2").click(function () {
        $(".groupbox1").hide();
        $(".groupbox2").show();
        $(".groupbox3").hide();
        $(".group1").removeClass("active");
        $(".group2").addClass("active");
        $(".group3").removeClass("active");
        $(".groupnext1").hide();
        $(".groupnext2").show();
        $(".groupnext3").hide();
        $(".groupprev1").hide();
        $(".groupprev2").show();
        $(".groupprev3").hide();
    });
    $(".group3").click(function () {
        $(".groupbox1").hide();
        $(".groupbox2").hide();
        $(".groupbox3").show();
        $(".group1").removeClass("active");
        $(".group2").removeClass("active");
        $(".group3").addClass("active");
        $(".groupnext1").hide();
        $(".groupnext2").hide();
        $(".groupnext3").show();
        $(".groupprev1").hide();
        $(".groupprev2").hide();
        $(".groupprev3").hide();
    });
    $(".groupprev1").click(function () {
        $(".groupbox1").hide();
        $(".groupbox2").show();
        $(".groupbox3").hide();
        $(".group1").removeClass("active");
        $(".group2").addClass("active");
        $(".group3").removeClass("active");
        $(".groupnext1").hide();
        $(".groupnext2").show();
        $(".groupnext3").hide();
        $(".groupprev1").hide();
        $(".groupprev2").show();
        $(".groupprev3").hide();
    });
    $(".groupnext2").click(function () {
        $(".groupbox1").show();
        $(".groupbox2").hide();
        $(".groupbox3").hide();
        $(".group1").addClass("active");
        $(".group2").removeClass("active");
        $(".group3").removeClass("active");
        $(".groupnext1").hide();
        $(".groupnext2").hide();
        $(".groupnext3").hide();
        $(".groupprev1").show();
        $(".groupprev2").hide();
        $(".groupprev3").hide();
    });
    $(".groupprev2").click(function () {
        $(".groupbox1").hide();
        $(".groupbox2").hide();
        $(".groupbox3").show();
        $(".group1").removeClass("active");
        $(".group2").removeClass("active");
        $(".group3").addClass("active");
        $(".groupnext1").hide();
        $(".groupnext2").hide();
        $(".groupnext3").show();
        $(".groupprev1").hide();
        $(".groupprev2").hide();
        $(".groupprev3").hide();
    });
    $(".groupnext3").click(function () {
        $(".groupbox1").hide();
        $(".groupbox2").show();
        $(".groupbox3").hide();
        $(".group1").removeClass("active");
        $(".group2").addClass("active");
        $(".group3").removeClass("active");
        $(".groupnext1").hide();
        $(".groupnext2").show();
        $(".groupnext3").hide();
        $(".groupprev1").hide();
        $(".groupprev2").show();
        $(".groupprev3").hide();
    });

});