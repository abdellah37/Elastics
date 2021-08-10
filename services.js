const esb = require('elastic-builder');
const { Client } = require('@elastic/elasticsearch');
var elasticsearch=require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'elasticsearch:9200'
});
                             // dans ce script qui cherche dans le cluster et renvoie la réponse vers le controller 
module.exports = {

async fetch(query)  {  
  try {
    const response = await client.search({
      q: query
    });
    console.log(response.hits.hits) 
  } catch (error) {
    console.trace(error.message)
  }
  return client.search({
    q: query
  });
}
}

/*try {
  const response = await client.search({
    q: name
  });
  console.log(response.hits.hits)
} catch (error) {
  console.trace(error.message)
}*/
