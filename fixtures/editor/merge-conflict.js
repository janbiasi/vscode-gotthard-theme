<<<<<<<<<< HEAD
var thisIsMyBranch = 20
=======
var thisIsAnotherBranch = 20;
>>>>>>> someOtherBranch

(() => {
    console.log("Hello world!");
})();

document.getElementById("app").addEventListener("click", function (ev) {
    ev.preventDefault();
    alert("App clicked!");
});