function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formURL = document.getElementById('form-url').value

    if(Client.checkForURL(formURL)) {

    post('http://localhost:8080/url', {url: formURL})
    .then(function(res) {
      document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
      document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
      document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
      document.getElementById('polarity').innerHTML = 'Polarity: '+ Client.polarityChecker(res.score_tag);
      document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;

    })
    } else {
        alert('Seems like an invalid URL, please try again with a valid URL.');
    }
}



const post = async (url = "", data = {}) => {
    const response = await fetch(url, {
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
