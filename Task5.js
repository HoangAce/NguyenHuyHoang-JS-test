function countKey() {
    let NoiDung = document.getElementById('NoiDung');
    let SoKyTu = document.getElementById('SoKyTu');
    if (NoiDung instanceof Element && SoKyTu instanceof Element) {
        let length = NoiDung.value.length;
        if (length > 200) {
            SoKyTu.value = 'You have typed more than the allowed characters!';
        } else {
            SoKyTu.value = length;
        }
    }
}