$(function () {
    $(document).on("click", ".devour", function () {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: { devoured: true }
        }).then(
            function () {
                console.log("Changed status to devoured!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var newBurger = $("#burger").val().trim();
        
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: { name: newBurger }
        }).then(
            function () {
                console.log("Created new burger!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


});