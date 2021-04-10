function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formURL = document.getElementById('form-url').value

    if(Client.checkForURL(formURL)) {

    post({url: formURL})
    .then(function(res) {
      document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
      document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
      document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
      document.getElementById('polarity').innerHTML = 'Polarity: '+ Client.polarityChecker(res.score_tag);
      document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;

    })
    } else {
        alert('Invalid URL, please try again.');
    }
}



const post = async ( data = {}) => {
    const response = await fetch('http://localhost:8080/url', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        mode: 'cors',
        body: JSON.stringify(data)
    });
    try {
        return await response.json();
    } catch (error) {
        console.log('error', error);
    }
};



export { handleSubmit }
