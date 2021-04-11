function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formURL = document.getElementById('form-url').value

    if( Client.checkForURL(formURL) === 1 ) {

      const post = async ( data = {}) => {
        console.log("form submited");
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
              const data = await response.json();
              document.querySelector("#subjectivity").innerHTML = "Subjectivity: " + data.subjectivity;
              document.querySelector("#confidence").innerHTML = "Confidence: "  + data.confidence;
              document.querySelector("#irony").innerHTML = "Irony: " + data.irony;
              document.querySelector('#polarity').innerHTML = "Polarity: " + Client.polarityChecker(data.score_tag);
              document.querySelector("#agreement").innerHTML = "Agreement: " + data.agreement;
          } catch (error) {
              console.log('error', error);
          }
      };
    post({url: formURL})
    }
}

export { handleSubmit }
