// API response output (https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/response)

const polarity = {
  "P+":"strong positive",
  "P": "postive",
  "NEW": "neutral",
  "N": "negative",
  "N+": "strong negative",
  "NONE": "no sentiment"
}
const polarityChecker = (score) => {
    const display = polarity[score];
    return display.toUpperCase();
}


export { polarityChecker }
