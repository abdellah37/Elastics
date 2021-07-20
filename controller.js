
const Services = require('./services');
const { Client } = require('@elastic/elasticsearch');
var elasticsearch=require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200'
});

module.exports = {

 async  fetch(req,res){
    const query = req.body.query;

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