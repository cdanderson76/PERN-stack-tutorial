import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";
import dotenv from 'dotenv';

dotenv.config();

// INITIALIZE ARCJET

export const aj = arcjet({

  key: process.env.ARCJET_KEY, 
  characteristics: ['ip.src'],
  rules: [
    // SHIELD PROTECTS YOUR APP FROM COMMON ATTACKS E.G. SQL INJECTION, XSS, AND CSRF ATTACKS
    shield({ mode: 'LIVE' }),
    detectBot({
      mode:'LIVE',
      // BLOCK ALL BOTS EXCEPT SEARCH ENGINES
      allow:[
        'CATEGORY:SEARCH_ENGINE'
        // SEE WHOLE LIST AT 'https://arcjet.com/bot-list
      ]
    }),
    // RATE LIMITING ()
    tokenBucket({
      mode:'LIVE',
      refillRate: 5, 
      interval: 10, // SECONDS
      capacity: 10, // NUMBER OF TOKENS
    })
  ]
})


