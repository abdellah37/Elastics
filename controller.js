
const Services = require('./services');
const { Client } = require('@elastic/elasticsearch');
var elasticsearch=require('elasticsearch');
var client = new elasticsearch.Client({
  node: process.env.ELASTIC_HOST
});

module.exports = {

 async  fetch(req,res){      // ce controller est responsable de la réception des requêtes 
    const query = req.body.query;     //envoyer par la partie frontend et de chercher dans le cluster et de renvoyer
                                        //la réponse vers la partie frontend 
    try {
      console.log(query)
      
      const result = await Services.fetch(query);
      console.log(result);
      const data = result.hits.hits.map((te)=>{
        return {
          id: te._id,
          data: te._source
        }
      })
      res.json({status_code: 200, success: true, data: data, messsage: "fetch match query for multiple requests successful!" });
    } catch (error) {
        console.trace(error.message);
      res.json({status_code: 500, success: false, data: [], message: error});
    }
  }


} 