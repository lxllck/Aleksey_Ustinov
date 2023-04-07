
let h1 = document.querySelector ('h1');
h1.style.setProperty ("margin-top", "30px");
h1.style.setProperty ("margin-bottom", "20px");
h1.style.setProperty ("text-align", "center");

let h2 = document.querySelector ('h2');
h2.style = "text-align: center;", "padding-bottom: 15px;";

let body = document.querySelector ('body');
body.style.setProperty ("font-family", "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif");
body.style.setProperty ("background-color","rgb(249, 245, 241)");
body.style.setProperty ("margin-left", "30px");
body.style.setProperty ("margin-right", "30px");



let figures = document.querySelectorAll ('.fig');
let caps = document.querySelectorAll ('figcaption');
for (let i = 0; i < figures.length; i++) {
    figures[i].style.cssText = 'display:inline-block; border: solid rgb(200, 199, 198) 1px; border-radius: 30px;padding: 30px 20px;margin-right: 10px; margin-bottom: 20px;';
    caps[i].style.cssText = 'text-align: center;font-weight: bold; padding-top: 10px;'
}
