const hoverText = () => {
    let str = document.querySelector(".heading").innerHTML;
    let char = [...str];

    let content = '';

    for (let value of char) {
        content += `<span>${value}</span>`;
    }
    document.querySelector(".heading").innerHTML = content;
}

hoverText();