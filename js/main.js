$('#scroll').on('click', function () {
  $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top }, 500); //$("#elementtoScrollToID").offset().top
})

$('#cat1').on('click', function () {
    $("#skills1").css("width", "100%")
})

$('#cat2').on('click', function () {
  $("#skills2").css("width", "100%")
})

