$(document).ready(function() {
  //resets the scroll position when the page is reloaded
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };

  //adjusts page-container div offset depending on prevailing header size in view
  const setPageContainerOffset = () => {
    const headerHeight = $("header").height();
    const containerOffset = headerHeight + "px";
    $("#page-container").css("margin-top", containerOffset);
  };

  const scrollContent = () => {
    var headerHeight = $("header").height() + 40;
    $("html, body").animate(
      {
        scrollTop: $("#about-container").offset().top - headerHeight
      },
      800
    );
  };

  setPageContainerOffset();

  //enables background picture to be seen before the page content scrolls into view
  $("#quote-container").animate(
    {
      opacity: 0
    },
    3600,
    () => {
      scrollContent();
    }
  );

  window.onresize = () => {
    setPageContainerOffset();
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
