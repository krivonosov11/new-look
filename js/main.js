var my_date = new Date();
var month = my_date.getMonth() + 1;
if (month <= 9) {
    month = '0' + month;
}
var tomorrow_date = (my_date.getDate() + 1) + "." + month + "." + my_date.getFullYear();
document.getElementById('date').innerText = tomorrow_date;

$(document).ready(function (e) {
    $('.button').click(function (e) {
        $('html, body').animate({
            scrollTop: $("#form").offset().top
        }, 1000);
    });
});