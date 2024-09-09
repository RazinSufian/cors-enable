fetch('http://localhost:8000/https://3p3xvw09xg.execute-api.ap-south-1.amazonaws.com/dev/report_details?report_id=00000008&patient_id=00000011', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    const jsonDisplay = document.getElementById('json-display');
    jsonDisplay.textContent = JSON.stringify(data, null, 2);
})
.catch(error => console.error('Error fetching data:', error));
