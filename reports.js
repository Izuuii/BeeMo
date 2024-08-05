const ctx = document.getElementById('myChart').getContext('2d');

// Fixed temperature data: 6 values outside the range and the rest within the normal range (32-35)
const temperatures = [
    29, 33, 32, 34, 35, 33, 36, 37, 31, 34, 35, 33,
    32, 34, 30, 33, 32, 34, 38, 39, 32, 34, 33, 32
];

// Generate an array of hours for the x-axis labels
const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

// Define the data for the chart
const data = {
    labels: hours,
    datasets: [{
        label: 'Temperature (°C)',
        data: temperatures,
        borderColor: 'rgba(16, 137, 255, 1)', // Line color
        backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent background
        borderWidth: 2,
        pointBackgroundColor: 'rgba(16, 137, 255, 1)',
        pointRadius: 2
    }]
};

// Define the options for the chart
const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows custom height and width
    scales: {
        y: {
            min: 1,
            max: 50,
            ticks: {
                stepSize: 1, // Show every degree on the y-axis
                color: 'black',
                font: {
                    size: 12
                }
            },
        },
        x: {
            ticks: {
                color: 'black',
                font: {
                    size: 12
                }
            },
        }
    },
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                font: {
                    size: 14
                }
            }
        },
        annotation: {
            annotations: {
                optimalRange: {
                    type: 'box',
                    yMin: 32,
                    yMax: 35,
                    backgroundColor: 'rgba(0, 255, 0, 0.2)', // Green background for optimal range
                },
                lowRange: {
                    type: 'box',
                    yMin: 1,
                    yMax: 32,
                    backgroundColor: 'rgba(255, 127, 127, 0.4)', // Red background for lower range
                },
                highRange: {
                    type: 'box',
                    yMin: 35,
                    yMax: 50,
                    backgroundColor: 'rgba(255, 127, 127, 0.4)', // Red background for higher range
                }
            }
        }
    }
};

// Create the line chart
new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});