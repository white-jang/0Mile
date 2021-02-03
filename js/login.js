function checkID_PW() {
    var id = document.getElementById("ID").value;
    var pw = document.getElementById("PW").value;
    if (id == "")
        alert("ID를 입력하세요.");
    else if (pw == "")
        alert("비밀번호를 입력하세요.");
    else
        alert("로그인에 성공했습니다.");
}