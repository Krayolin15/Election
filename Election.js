const ctx = document.getElementById('electionChart').getContext('2d');

const electionChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['DAD Party', 'PPP Party', 'CCCC Party', 'MCD Party'],
        datasets: [{
            data: [45, 5, 27, 23],
            backgroundColor: [
                '#FF6B6B',
                '#4ECDC4',
                '#2EBCDD',
                '#A8D8B9'
            ],
            borderColor: '#ffffff',
            borderWidth: 2
        }]
    },
    options: {
        plugins: {
            outlabels: {
                text: '%l %p', // <-- HOW THE TEXT SHOWS (label + %)
                color: 'black',
                stretch: 30,
                font: {
                    resizable: true,
                    minSize: 14,
                    maxSize: 18
                },
                padding: 10,
                lineHeight: 1.5
            },
            legend: {
                display: false
            }
        }
    }
});

const partyElements = document.querySelectorAll('.name p'); 
partyElements.forEach((el, index) => {
    el.addEventListener('mouseenter', () => {
       
        electionChart.setActiveElements([
            { datasetIndex: 0, index: index }
        ]);
        electionChart.update();
    });

    el.addEventListener('mouseleave', () => {
        // Reset when mouse leaves
        electionChart.setActiveElements([]);
        electionChart.update();
    });
});
