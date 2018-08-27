$(document).ready(function() {
  const headerHeight = $("header").height();
  const containerOffset = headerHeight + 40 + "px";
  $("#page-container").css("margin-top", containerOffset);

  window.onresize = () => {
    const headerHeight = $("header").height();
    const containerOffset = headerHeight + 40 + "px";
    $("#page-container").css("margin-top", containerOffset);
  };

  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      var headerHeight = $("header").height() + 40;

      console.log(hash);
      console.log(headerHeight);

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - headerHeight
        },
        800
      );
    }
  });
});
