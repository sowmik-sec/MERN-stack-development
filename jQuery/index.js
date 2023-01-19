//$("h1").css("color", "red");

//$("h1").addClass("big-title margin-50");

$("h1").text("Bye");

$("button").html("<em>Don't click me</em>");

$("a").attr("href", "http://yahoo.com");

$("h1").click(function () {
  $("h1").css("color", "purple");
});

$("button").click(function () {
  $("h1").css("color", "red");
});

$("input").keypress(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "green");
});

$("h1").before("<button>new</button>");

$("h1").after("<button>new</button>");

$("h1").prepend("<button>new</button>");
$("h1").append("<button>new</button>");

$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
