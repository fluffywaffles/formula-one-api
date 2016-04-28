var mailgun = require('mailgun-js')({apiKey: "key-0427e9f62f466535f9d41e5f8d45184f", domain: "nuisepic.com"})
  , mustache = require('mustache')

module.exports.RENDERING_ENGINE = {
  handlebars : 'handlebars',
  jade       : 'pug',
  pug        : 'pug'
}

/// Options: object containing template, variables, engine
module.exports = function (data, options) {
  var renderer = require(options.engine)

  data.html = renderer.render(options.template, options.variables)

  mailgun.messages().send(data, function (error, body) {
    console.error(error)
    console.log(body)
  })
}

