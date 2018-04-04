let nav = document.querySelectorAll('.link')
const html = document.querySelector('html');

nav.forEach((el) => {
  el.addEventListener("click", (event) => {
    const colours = ["blue", "green", "red", "yellow", "pink"]
    colours.forEach(colour => {
      html.style.backgroundColor = colour;
    })
  })
})
