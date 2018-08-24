$(document).ready(function() {
  //Global variable to hold prpject info:

  // Get the header
  var header = document.getElementById("page-header");

  // Get the offset position of the navbar

  window.onscroll = () => {
    stickyHeader();
  };

  const stickyHeader = () => {
    let sticky = header.offsetTop;
    const headerHeight = $("header").height();
    const containerOffset = headerHeight + 40 + "px";
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky");
      $("#page-container").css("margin-top", containerOffset);
    } else {
      header.classList.remove("sticky");
    }
  };

  window.onresize = () => {
    if (header.offsetTop === 0) {
      const headerHeight = $("header").height();
      const containerOffset = headerHeight + 40 + "px";
      $("#page-container").css("margin-top", containerOffset);
    }
  };
});
