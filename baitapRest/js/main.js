let tinhDiem = (...diem) => {
    console.log(diem)
    let diemMon = 0;
    let diemTB = 0;
    for (const diemTungMon of diem) {
        if (diemTungMon >= 0 && diemTungMon <= 10) {
            diemMon += diemTungMon;
            console.log(diemMon)
        } else {
            return 'Điểm Không Hợp Lệ';
        }
    }
    diemTB = diemMon / diem.length;
    return diemTB;
}
const tinhKhoi1 = () => {
    let a1 = Number(document.getElementById('inpToan').value);
    let a2 = Number(document.getElementById('inpLy').value);
    let a3 = Number(document.getElementById('inpHoa').value);
    // console.log(a1, a2, a3);
    let diemTB = tinhDiem(a1, a2, a3);
    // console.log(diemTB);
    document.getElementById("tbKhoi1").innerHTML = diemTB;
}
document.getElementById("btnKhoi1").onclick = tinhKhoi1;

const tinhKhoi2 = () => {
    let a1 = Number(document.getElementById('inpVan').value);
    let a2 = Number(document.getElementById('inpSu').value);
    let a3 = Number(document.getElementById('inpDia').value);
    let a4 = Number(document.getElementById('inpEnglish').value);
    // console.log(a1, a2, a3, a4);
    let diemTB = tinhDiem(a1, a2, a3, a4);
    // console.log(diemTB);
    document.getElementById("tbKhoi2").innerHTML = diemTB;
}
document.getElementById("btnKhoi2").onclick = tinhKhoi2;