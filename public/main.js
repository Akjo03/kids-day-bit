const ctxCoffeee = document.getElementById('coffee').getContext('2d');
const ctxPlaceholder = document.getElementById('placeholder').getContext('2d');
let width, height, gradient;

const coffee = new Chart(ctxCoffeee, {
    type: 'line',
    data: {
        labels: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'],
        datasets: [{
            label: 'Justin',
            data: [4, 2, 1, 3, 2],
            backgroundColor: [
                'rgba(255, 99, 132)',
            ],
            borderColor: 'rgba(255, 99, 132, 0.5)',
            borderWidth: 4
        },
        {
            label: 'Timo',
            data: [3, 1, 2, 0, 1],
            backgroundColor: [
                'rgba(75, 192, 192)',
            ],
            borderColor: 'rgba(75, 192, 192, 0.5)',
            borderWidth: 4
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
         }
    },
});

const placeholder = new Chart(ctxPlaceholder, {
    type: 'pie',
    data: {
        labels: ['Placeholder'],
        datasets: [{
            label: 'Irgendeine Statistik ',
            data: [1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});

function getGradient(ctx, chartArea) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, 'rgba(255, 99, 132, 1)');
    gradient.addColorStop(0.5, 'rgba(54, 162, 235, 1)');
    gradient.addColorStop(1, 'rgba(255, 206, 86, 1)');
  }

  return gradient;
}