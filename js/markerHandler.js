AFRAME.registerComponent("markerHandler", {
  init: asymc function () {

    this.el.addEventListener("markerFound", () => {
      console.log("marker is found")
      this.handleMarkerFound();
    });

    this.el.addEventListener("markerLost", () => {
      console.log("marker is lost")
      this.handleMarkerLost();
    });
   },
  handleMarkerFound: function () {
   var buttonDiv = document.getElementById("button-div");
   butonDiv.style.display = "flex";

   var ratingButton = document.getElementById("rating-button");
   var orderButton = document.getElementById("order-button");

   ratingButton.addEventListener("click", fuction () {
    swal({
      icon: "warning",
      title: "Rate Dish",
      text: "Work In Progress",
    });
   });

  orderButton.addEventListener("click", fuction () {
    swal({
      icon: "https://i.imgur.com/4NZ6uLY.jpg",
      title: "!Thanks For Your Order!",
      text: "Your order will be served soon at your table.",
    });
   });
  },

handleMarkerLost: function () {
  var buttonDiv = document.getElementById("button-div");
  buttonDiv.style.display = "none";
}
});
