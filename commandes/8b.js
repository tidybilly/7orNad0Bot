expotrs.run = (client, message, args) => {
const rn = require('random-number')
const response = [
  "oui.",
  "non.",
  "peut-être que oui peut-être que non.",
  "absoluement !",
  "absoluement pas.",
  "essaye encore.",
  "concentre toi bien et demande ça plus tard.",
  "chut c'est secret.",
  "je ne peux pas le prédire.",
  "je sais pas.",
  "j'ai des sources qui disent que oui.",
  "j'ai des sources qui disent que non.",
  "j'ai pas d'info à donner.",
  "redemande plus tard.",
  "je pourrai le dire, sauf que j'ai pas envie.",
  "définitivement oui.",
  "pas du tout.",
  "à coté de la plaque."
]
if(!args) return message.channel.send(`:x: ${message.author}, écrit une question`)
let r = rn({
               min: 0,
               max: hug.length - 1,
               integer: true
           });
       let ball = response[r];
       message.channel.send(`:gem: ${message.author}, ${ball}`)
}
