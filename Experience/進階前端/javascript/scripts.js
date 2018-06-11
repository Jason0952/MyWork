$(function() {
    $(".menu-toggle").on("click",function(e) {
        e.preventDefault();
        $(this).siblings("ul").slideToggle();
        $(this).find("i").toggleClass("fa-caret-down").toggleClass("fa-caret-up");
    });
    $("body").on("click",function(e) {
        if ($(e.target).parents(".main-menu").length < 1) {
            $(".main-menu ul").slideUp();
            $(".menu-toggle i").removeClass("fa-caret-up").addClass("fa-caret-down");
        }
    });
});