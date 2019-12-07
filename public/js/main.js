const main = () => {
  (function() {
    $("a.page-scroll").click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top - 40
            },
            900
          );
          return false;
        }
      }
    });

    // affix the navbar after scroll below header
    $("#nav").affix({
      offset: {
        top: $("header").height()
      }
    });
    $("#nav-wrapper").css({
      "min-height": $("#nav").height() + "px"
    });
  })();
};
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  console.log("DARK MODE!!");
  const elements = document.getElementsByClassName("dark-convertable-image");
  for (let i = 0; i < elements.length; i++) {
    const arr = elements[i].src.split("/");
    arr[arr.length - 1] = "dark." + arr[arr.length - 1];
    elements[i].src = arr.join("/");
  }
}
main();
