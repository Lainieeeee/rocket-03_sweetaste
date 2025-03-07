/*====================================================
計數器
====================================================*/
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.counter').forEach(counter => {
        const countElement = counter.querySelector('.count');
        const incrementButton = counter.querySelector('#increment');
        const decrementButton = counter.querySelector('#decrement');

        let count = 0;

        incrementButton.addEventListener('click', function () {
            count++;
            updateCount();
        });

        decrementButton.addEventListener('click', function () {
            if (count > 0) {
                count--;
                updateCount();
            }
        });

        function updateCount() {
            countElement.textContent = count;
        }
    });
});