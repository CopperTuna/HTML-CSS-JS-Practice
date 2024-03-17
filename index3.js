const imageId = document.querySelector("#imageId");
const radioContainer = document.querySelector(".radio-container");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const fragment = document.createDocumentFragment();

const images = ["images/aspin.jpg", "images/betta fish.jpg", "images/chihuahua.jpg",
"images/clown killifish.jpg", "images/common danio.jpg", "images/fish.jpg", "images/german sheperd.jpg",
"images/golden retriever.jpg", "images/guppy fish.jpg", "images/molly fish.jpg"];
const radioGroup = [];

for(let i = 1; i <= images.length; i++) {
    let radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "radioButtons";
    radioButton.id = `radioButton${i}`;
    radioGroup.push(radioButton);
    if(i === 1) {
        radioButton.checked = true;
    }
}
radioGroup.forEach((radioButton, index) => {
    fragment.appendChild(radioButton);
});
radioContainer.appendChild(fragment);
radioGroup.forEach((radioButton, index) => {
    radioButton.addEventListener("change", function() {
        currentIndex = index;
        imageId.src = images[currentIndex];
    });
});

let currentIndex = 0;
previous.addEventListener("click", function() {
    if(currentIndex > 0){
        currentIndex--;
        imageId.src = images[currentIndex];
        radioGroup[currentIndex].checked = true;
    }
});
next.addEventListener("click", function() {
    if(currentIndex < images.length - 1) {
        currentIndex++;
        imageId.src = images[currentIndex];
        radioGroup[currentIndex].checked = true;
    }
});