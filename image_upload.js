/*const ctx = document.getElementById('predictions-chart');
const labels = ['Atelectasis', 'Cardiomegaly', 'Consolidation', 'Edema', 'Effusion',
                'Emphysema', 'Fibrosis', 'Hernia', 'Infiltration', 'Mass', 'Nodule',
                'Pleural_Thickening', 'Pneumonia', 'Pneumothorax'];

if (ctx !== null) {
    let prediction= {{ predictions }};
    prediction = predictions.map((prediction) => prediction*100);
    const myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                  label: 'Predictions',
                  backgroundColor: 'rgba(220,220,220,1)', 
                  data: predictions
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: true,
                        color: '#555',
                    },
                    ticks: {
                        fontColor: '#fff'
                    }
                }],
                yAxes: [{
                    display: true,
                    gridLines: {
                        display: true,
                        color: '#555',
                    },
                    ticks: {
                        fontColor: '#fff'
                    }
                }]
            }
        }
    });
}*/
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
/*
function readURL(input) {
    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const dataURL = e.target.result; // get the contents of the file as a data URL
        const img = document.getElementById('myImage'); // get the image element
        img.src = dataURL; // set the source of the image to the data URL
      };

      reader.readAsDataURL(input.files[0]); // read the contents of the file as a data URL
    }
  }

  // add an event listener to the file input element
  const fileInput = document.getElementById('myFileInput');
  fileInput.addEventListener('change', function() {
    readURL(this);
  }, false);*/
