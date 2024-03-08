function kiemtraUserName() {
    let regex = /^[a-z0-9_-]{3,16}$/;
    let chuoiKT = document.getElementById("txtChuoi").value;
    let kq = regex.test(chuoiKT);
    if (kq == true) {
        document.getElementById("kqkt").innerHTML = "Nhap dung UserName";
    } else {
        document.getElementById("kqkt").innerHTML = "Nhap sai UserName";
    }
}

function kiemtraPASS() {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
    let chuoiKTPassword = document.getElementById("txtChuoiPassword").value;
    let kq1 = regex.test(chuoiKTPassword);
    if (kq1 == true) {
        document.getElementById("kqktPassword").innerHTML = "Nhap dung Password";
    } else {
        document.getElementById("kqktPassword").innerHTML = "Nhap sai Password";
    }
}

function kiemtraEmail() {
    let regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let chuoiKTEmail = document.getElementById("txtChuoiEmail").value;
    let kq2 = regex.test(chuoiKTEmail);
    if (kq2 == true) {
        document.getElementById("kqktEmail").innerHTML = "Nhap dung Email";
    } else {
        document.getElementById("kqktEmail").innerHTML = "Nhap sai Email";
    }
}

function kiemtraIPv4() {
    let regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i;
    let chuoiKTEmail = document.getElementById("txtIPv4").value;
    let kq3 = regex.test(chuoiKTEmail);
    if (kq3 == true) {
        document.getElementById("kqktIPv4").innerHTML = "String that matches";
    } else {
        document.getElementById("kqktIPv4").innerHTML = "String that doesn't match (all the parts must be less than 255)";
    }
}

function kiemtraHexValue() {
    let regex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i;
    let chuoiKTEmail = document.getElementById("txtHexValue").value;
    let kq4 = regex.test(chuoiKTEmail);
    if (kq4 == true) {
        document.getElementById("kqktHexValue").innerHTML = "String that matches";
    } else {
        document.getElementById("kqktHexValue").innerHTML = "String that doesn't match";
    }
}

function kiemtraSlug() {
    let regex = /^[a-z0-9-]+$/;
    let chuoiKTEmail = document.getElementById("txtSlug").value;
    let kq5 = regex.test(chuoiKTEmail);
    if (kq5 == true) {
        document.getElementById("kqktSlug").innerHTML = "String that matches";
    } else {
        document.getElementById("kqktSlug").innerHTML = "String that doesn't match (contains underscores)";
    }
}

function kiemtraURL() {
    let regex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    let chuoiKTEmail = document.getElementById("txtURL").value;
    let kq6 = regex.test(chuoiKTEmail);
    if (kq6 == true) {
        document.getElementById("kqktURL").innerHTML = "String that matches";
    } else {
        document.getElementById("kqktURL").innerHTML = "String that doesn't match (contains underscores)";
    }
}

function kiemtraTag() {
    let regex = /^<([a-z\d]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)$/;
    let chuoiKTEmail = document.getElementById("txtTag").value;
    let kq7 = regex.test(chuoiKTEmail);
    if (kq7 == true) {
        document.getElementById("kqktTag").innerHTML = "String that matches";
    } else {
        document.getElementById("kqktTag").innerHTML = "String that doesn't match > (the opening and closing tags don't match).";
    }
}

function kiemtraDates() {
    let regex = /^([1-2][0-9]|3[0-1]|0?[1-9])([-\.\/ ])(1[0-2]|0?[1-9])(\2)([\d]{4}|[\d]{2})$/;
    let chuoiKTEmail = document.getElementById("txtDates").value;
    let kq8 = regex.test(chuoiKTEmail);
    if (kq8 == true) {
        document.getElementById("kqktDates").innerHTML = "String that matches";
    } else {
        document.getElementById("kqktDates").innerHTML = "String that doesn't match.";
    }
}