const esb = require('elastic-builder');
const { Client } = require('@elastic/elasticsearch');
var elasticsearch=require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200'
});

module.exports = {

async fetch(email,name)  {
  try {
    const response = await client.search({
      q: name
    });
    console.log(response.hits.hits)
  } catch (error) {
    console.trace(error.message)
  }
  return client.search({
    q: name
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
