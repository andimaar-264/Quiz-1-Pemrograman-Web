function validateForm() {
    let x = document.forms["myForm"]["nama-pasien"].value;
    let y = document.forms["myForm"]["tempat"].value;
    let b = document.forms["myForm"]["tanggal"].value;
    let z = document.forms["myForm"]["notelp"].value;
    if (x == "" || y == "" || z == "" || b == "") {
        alert("Harus diisi semua");
        return false;
    }
}