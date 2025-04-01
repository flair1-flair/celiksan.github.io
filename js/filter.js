// Filter functionality for portfolio items
// This script filters portfolio items based on the selected category

$(document).ready(function() {
    // Check if filter buttons exist before attaching events
    if ($(".filter-button").length > 0) {
      $(".filter-button").on("click", function() {
        // Get the filter value
        var filterValue = $(this).data("filter");
        console.log("Filter clicked:", filterValue);
        
        // Remove active class from all buttons and add to current
        $(".filter-button").removeClass("active");
        $(this).addClass("active");
        
        // If "all" is selected, show everything
        if (filterValue === "all") {
          $("#portfolio .row.justify-content-between > [class^='col-']").show();
          return;
        }
        
        // Hide all items first
        $("#portfolio .row.justify-content-between > [class^='col-']").hide();
        
        // Find and show items with matching category
        $("#portfolio .row.justify-content-between > [class^='col-']").each(function() {
          var categoryText = $(this).find(".mil-label.mil-upper.mil-accent").text().trim();
          if (categoryText === filterValue) {
            $(this).show();
          }
        });
      });
      
      // Trigger click on "all" button to initialize
      $(".filter-button[data-filter='all']").trigger("click");
    } else {
      console.log("Filter buttons not found on page");
    }
  });