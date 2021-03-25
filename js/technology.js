$(".css_icon").click(()=>{
    $(".css_icon").toggleClass("css_icon_colour");
});

// Frontend
$(".small_hex_1").hover(function () {
        // over
        // $("#technology").css("background-color", "#D4F1F4");
        $(".html_icon").toggleClass("html_icon_colour");
        $(".css_icon").toggleClass("css_icon_colour");
        $(".js_icon").toggleClass("js_icon_colour");
        $(".jquery_icon").toggleClass("jquery_icon_colour");
        $(".bootstrap_icon").toggleClass("bootstrap_icon_colour");
        $(".angular_icon").toggleClass("angular_icon_colour");
        $(".react_icon").toggleClass("react_icon_colour");
        $(".wordpress_icon").toggleClass("wordpress_icon_colour");
    }, function () {
        // out
        // $("#technology").css("background-color", "rgb(5,68,94)");
        $(".html_icon").toggleClass("html_icon_colour");
        $(".css_icon").toggleClass("css_icon_colour");
        $(".js_icon").toggleClass("js_icon_colour");
        $(".jquery_icon").toggleClass("jquery_icon_colour");
        $(".bootstrap_icon").toggleClass("bootstrap_icon_colour");
        $(".angular_icon").toggleClass("angular_icon_colour");
        $(".react_icon").toggleClass("react_icon_colour");
        $(".wordpress_icon").toggleClass("wordpress_icon_colour");
    }
);

// Backend
$(".small_hex_2").hover(function () {
    // over
    $(".django_icon").toggleClass("django_icon_colour");
    $(".flask_icon").toggleClass("flask_icon_colour");
    $(".php_icon").toggleClass("php_icon_colour");
    $(".nodejs_icon").toggleClass("nodejs_icon_colour");
}, function () {
    // out
    $(".django_icon").toggleClass("django_icon_colour");
    $(".flask_icon").toggleClass("flask_icon_colour");
    $(".php_icon").toggleClass("php_icon_colour");
    $(".nodejs_icon").toggleClass("nodejs_icon_colour");
}
);

// databases
$(".small_hex_3").hover(function () {
    // over
    $(".mysql_icon").toggleClass("mysql_icon_colour");
    $(".mongodb_icon").toggleClass("mongodb_icon_colour");
    $(".postgresql_icon").toggleClass("postgresql_icon_colour");
}, function () {
    // out
    $(".mysql_icon").toggleClass("mysql_icon_colour");
    $(".mongodb_icon").toggleClass("mongodb_icon_colour");
    $(".postgresql_icon").toggleClass("postgresql_icon_colour");
}
);

// Cloud Solutions
$(".small_hex_4").hover(function () {
    // over
    $(".aws_icon").toggleClass("aws_icon_colour");
    $(".gcp_icon").toggleClass("gcp_icon_colour");
    $(".heroku_icon").toggleClass("heroku_icon_colour");
    $(".digitalocean_icon").toggleClass("digitalocean_icon_colour");
}, function () {
    // out
    $(".aws_icon").toggleClass("aws_icon_colour");
    $(".gcp_icon").toggleClass("gcp_icon_colour");
    $(".heroku_icon").toggleClass("heroku_icon_colour");
    $(".digitalocean_icon").toggleClass("digitalocean_icon_colour");
}
);