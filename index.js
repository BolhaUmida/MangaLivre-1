const figcaptions = document.querySelectorAll(".linkAnime");
const bordas = document.querySelectorAll(".borda");

for (let i = 0; i < figcaptions.length; i++) {
  figcaptions[i].addEventListener("mouseover", function (e) {
    bordas[i].style.border = "2px solid black";
    bordas[i].style.borderRadius = "5px";
  });

  figcaptions[i].addEventListener("mouseout", function (e) {
    bordas[i].style.border = "";
    bordas[i].style.borderRadius = "";
  });
}