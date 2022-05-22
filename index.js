
const favs = ["Badmiton","Chess","Movies","Cricket","Travelling"];
console.log(favs)
const favList = document.createElement("ul");
document.body.append(favList);

favs.forEach((f) => {
    const favio = document.createElement("li");
    favio.innerText = f;
    favList.append(favio)
})