// Date 객체를 선언합니다: 현재 시간 측정
var date = new Date();
// 요소를 추출합니다.
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDay();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
alert(year+ ", " + hours);
if (hours < 12)
    alert("오전입니다.");
else
    alert("오후입니다.");
