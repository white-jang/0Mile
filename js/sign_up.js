function checkID() {
    id = document.getElementById("ID").value;
    Eng = /[a-zA-Z]/;
    Num = /[0-9]/;
    if (id == "") {
        alert("ID가 입력되지 않았습니다.");
        return false;
    } else if (id.length > 10)
        alert("ID는 10글자 이하여야 합니다.");
    else if (id.length < 3)
        alert("ID는 3글자 이상이어야 합니다.");
    else
        for (i = 0; i < id.length; i++) {
            if (Eng.test(id.charAt(i)) == false && Num.test(id.charAt(i)) == false) {
                alert("ID는 영문/숫자의 조합만 가능합니다.");
                return;
            } else {
                alert("ID가 확인되었습니다.");
                return true;
            }
        }
}

function checkPW() {
    pw = document.getElementById("PW").value;
    PWpat = /[0-9a-zA-Z.;\-]/;
    if (pw == "") {
        alert("비밀번호가 입력되지 않았습니다.");
        return false;
    } else if (pw.length < 8)
        alert("비밀번호는 8글자 이상이어야 합니다.");
    else if (pw.length > 16)
        alert("비밀번호는 16글자 이하여야 합니다.");
    else
        for (i = 0; i < pw.length; i++) {
            if (PWpat.test(pw.charAt(i)) == false) {
                alert("비밀번호는 영문/숫자/특수문자의 조합만 가능합니다.");
                return;
            } else {
                alert("비밀번호가 확인되었습니다.");
                return true;
            }
        }
}

function checkagainPW() {
    if (document.getElementById("PW").value != document.getElementById("PWcheck").value)
        alert("입력된 비밀번호가 일치하지 않습니다.");
    else {
        alert("비밀번호 확인이 완료되었습니다.");
        return true;
    }
}

function checkeverything() {
    var result = confirm("회원가입을 완료하시겠습니까?");
    if (result == true) {
        if (checkID() == true && checkPW() == true && checkagainPW() == true)
            alert("회원가입이 완료되었습니다. 축하합니다!");
    }
}