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