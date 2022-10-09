(() => {
    console.log("hello world");
    const text = document.querySelector("body").querySelectorAll("* > *");
    const style = document.createElement("style");
    style.innerHTML = `
        .tagshot-style { 
            background: linear-gradient(110.71deg, rgba(255, 199, 0, 0.51) 0%, rgba(213, 205, 0, 0.51) 30.28%, rgba(130, 232, 0, 0.5) 62.93%, rgba(66, 255, 0, 0.51) 100%); 
            cursor: pointer; 
            box-shadow:inset 0px 0px 0px 1px red;
            border-radius: 4px
        }
        `;

    document.getElementsByTagName("html")[0].prepend(style);
    let getCanvas;
    for (let i = 0; i < text.length; i++) {
      text[i].addEventListener("mouseenter", (e) => {
        text[i].classList.add("tagshot-style");
        text[i].onclick = () => {
            console.log("clicked");
            text[i].classList.remove("tagshot-style");
            html2canvas(text[i]).then(
              function (canvas) {
                var anchorTag = document.createElement("a");
                document.body.appendChild(anchorTag);
                anchorTag.download = "filename.jpg";
                anchorTag.href = canvas.toDataURL();
                anchorTag.target = "_blank";
                anchorTag.click();

                text[i].classList.add("tagshot-style");
              }
            );
        };
      });
      text[i].addEventListener("mouseout", (e) => {
        text[i].classList.remove("tagshot-style");
        text[i].onclick = () => {};
      });
    }
})();
