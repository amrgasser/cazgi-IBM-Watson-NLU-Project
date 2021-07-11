const express = require('express');
const app = new express();
require('dotenv').config({ path: './.env' })


app.use(express.static('client'))

const cors_app = require('cors');
app.use(cors_app());

// Make An instance of NLU
const getNLUInstance = () => {
  const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1')
  const { IamAuthenticator } = require('ibm-watson/auth')

  const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
    version: '2021-03-25',
    authenticator: new IamAuthenticator({
      apikey: process.env.API_KEY,
    }),
    serviceUrl: process.env.API_URL,
  })
  return naturalLanguageUnderstanding
}




app.get("/",(req,res)=>{
    res.render('index.html');
  });

app.get("/url/emotion", (req,res) => {
    let nlu = getNLUInstance()
    nlu.analyze({
        url:req.query.url,
        features:{
            emotion:{}
        }
    }).then((analysisResults)=>{
        console.log(analysisResults.result);
        res.send(analysisResults.result.emotion.document.emotion)})
    .catch(err => console.log(err))
    return
});

app.get("/url/sentiment", (req,res) => {
    let nlu = getNLUInstance()
    nlu.analyze({
        url:req.query.url,
        features:{
            sentiment:{}
        }
    }).then((analysisResults)=>{
    console.log(analysisResults.result.sentiment)
    res.send(analysisResults.result.sentiment.document)
    })
    .catch(err => console.log(err))
    return
});

app.get("/text/emotion", (req,res) => {
    let nlu = getNLUInstance()
    nlu.analyze({
        text:req.query.text,
        features:{
            emotion:{}
        }
    }).then((analysisResults)=>{
        console.log(analysisResults.result);
        res.send(analysisResults.result.emotion.document.emotion)})
    .catch(err => console.log(err))
    return
});

app.get("/text/sentiment", (req,res) => {
    let nlu = getNLUInstance()
    nlu.analyze({
        text:req.query.text,
        features:{
            sentiment:{}
        }
    }).then((analysisResults)=>{
    console.log(analysisResults.result.sentiment)
    res.send(analysisResults.result.sentiment.document)
    })
    .catch(err => console.log(err))
    return
});

let server = app.listen(8080, () => {
    console.log('Listening', server.address().port)
})

