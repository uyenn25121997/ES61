let addBtn = () => {
    const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

    let btn = '';

    for (let i = 0; i < colorList.length; i++) {
        btn += `<button onclick="changeColor('${colorList[i]}')" class="color-button ${colorList[i]}"></button>`
    }
    document.getElementById('colorContainer').innerHTML = btn;
}
addBtn()

const changeColor = (i) => {
    document.querySelector(".house").className = `house ${i}`
}