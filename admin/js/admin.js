const ctx = document.getElementById('salesChart');

new Chart(ctx, {
    type: 'bar',

    data: {
        labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May'
        ],

        datasets: [{
            label: 'Sales',

            data: [
                500,
                800,
                1200,
                900,
                1500
            ]
        }]
    },

    options: {
        responsive: true
    }
});
