var request = require("request");
var cheerio = require("cheerio");

request("https://www.contabeis.com.br", function (err, res, body) {
  if (err) console.log("Erro: " + err);

  var $ = cheerio.load(body);

  $(".conteudoLista article").each(function () {
    var title = $(this).find(".editora-tecnologia a").text().trim();

    console.log("titulo:" + title);
  });
});
