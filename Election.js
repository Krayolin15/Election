const ctx = document.getElementById('electionChart').getContext('2d');
        const electionChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['DAD Party: 45%', 'PPP Party: 5%', 'CCCC Party: 27%', 'MCD Party: 23%'],
                datasets: [{
                    data: [45, 5, 27, 23],
                    backgroundColor: [
                        '#FF6B6B', 
                        '#4ECDC4', 
                        '#2EBCDD', 
                        '#A8D8B9'  
                    ],
                    borderWidth: 1,
                    borderColor: '#fff'
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            color: 'black',
                            font: {
                                size: 14
                            }
                        }
                    }
                }
            }
        });