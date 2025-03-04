// favoriteIcon
function actionToggle(button) {
    var solidIcon = button.querySelector('.fa-solid');
    var regularIcon = button.querySelector('.fa-regular');
    solidIcon.classList.toggle('d-none');
    regularIcon.classList.toggle('d-none');
}