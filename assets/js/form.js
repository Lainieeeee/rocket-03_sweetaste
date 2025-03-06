/*====================================================
信用卡 有效期限
====================================================*/
document.addEventListener("DOMContentLoaded", function () {
    const expiryYearSelect = document.getElementById("expiryYear");
    const currentYear = new Date().getFullYear();

    for (let i = 0; i < 10; i++) { // 最多顯示10年
        let year = currentYear + i;
        let option = document.createElement("option");
        option.value = year.toString().slice(-2); // YY格式（例如: 24, 25）
        option.textContent = year; // 西元年顯示（例如: 2024, 2025）
        expiryYearSelect.appendChild(option);
    }
});

/*====================================================
地址
====================================================*/
let twzipcode = new TWzipcode({
    district: {
        onChange: function (id) {
        console.log(this.nth(id).get());
        }
    }
});