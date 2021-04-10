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
    // switch (score){
    //     case "P+":
    //         display = "strong positive";
    //         break;
    //     case "P":
    //         display = "positive";
    //         break;
    //     case "NEW":
    //         display = "neutral";
    //         break;
    //     case "N":
    //         display = "negative";
    //         break;
    //     case "N+":
    //         display = "strong negative";
    //         break;
    //     case "NONE":
    //         display = "no sentiment";
    // }
    return display.toUpperCase();
}


export { polarityChecker }
