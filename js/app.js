let button = document.querySelector("#button");
let div_wrapper = document.querySelector("#wrapper");
let h1_text = document.createElement("h1");
let h1_text2 = document.createElement("h1");
let h1_text3 = document.createElement("h1");
let palla_div = document.createElement("div");
let div_image = document.createElement("div");
let div_pad = document.createElement("div");
let audio = new Audio(".../../audio/audiop.mp3");
let audio2 = new Audio(".../../audio/gravesound.mp3");

button.addEventListener("click", () => {
  div_wrapper.remove();
  audio.play();
  h1_text.innerHTML = `<span class= "span-color">You know you</span> <b>Messed</b> <span class= "span-color">up right?</span>`;
  div_image.innerHTML = `<img class="img-fluid mt-4 pt-4" src="audio/meme.png">`;

  setTimeout(() => {
    h1_text2.innerHTML = `<span class= "span-color">You should never press a </span><b>Red</b> <span class= "span-color">button</span>`;
    h1_text.remove();
  }, 5000);

  setTimeout(() => {
    h1_text3.innerHTML = `<span class= "span-color">It's looking</span> <b>Slow</b> <span class= "span-color">for you now......</span>`;
    h1_text2.remove();
  }, 9000);

  setTimeout(() => {
    h1_text3.remove();
    div_image.remove();
    audio2.play();
    palla_div.innerHTML = `<img class="img-fluid center-items" src="https://s4.gifyu.com/images/Palla.gif" alt="Palla.gif" border="0" />`;
  }, 15500);

  palla_div.classList.add("container", "text-center");
  div_pad.classList.add("pb-4", "mb-4");
  div_image.classList.add("fade-in");
  h1_text.classList.add("text-color");
  h1_text2.classList.add("text-color");
  h1_text3.classList.add("text-color");

  palla_div.append(div_pad, h1_text, h1_text2, h1_text3, div_image);
  document.body.append(palla_div);
});
