
/*var elasticsearch =require('es7')
var client = new elasticsearch.Client({
        host: 'localhost:9200'
});*/

'use strict'
const express =require('express');
const app =express();
const { Client } = require('@elastic/elasticsearch');
var elasticsearch=require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200'
});

/*client.indices.create ({ 
  index : 'users' , 
  
  body : {
    
    "mappings": {
      "properties": {
        "age":    { "type": "integer" },  
        "email":  { "type": "keyword"  }, 
        "name":   { "type": "text"  }     
      }
    },
    "settings": {
      "index": {
        "number_of_shards": 5,  
        "number_of_replicas": 2 
      }
    }



 }



})*/



client.indices.create ({ 
  index : 'users' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  },
                  "profileid":{
                    "type" :"long"
                  },
                  
                  "numRegNat":{
                    "type":"text",
                    "fields": {"raw": {"type": "keyword"}}
                    
                  },
                  "firstName": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                  },
                  "lastName": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
              
                  },
                  "birthday": {
                    "type": "date"
                  },
                  "email": {
                    "type": "text",
                    "fields": {"keyword": {"type": "keyword"}}
                    
                  },
                  "tel": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                    
                   
                  },
                  "creationDate": {
                    "type": "date"
                  },
                 
                  
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})


client.indices.create ({ 
  index : 'logs' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "profileId" : {
                    "type":"long"
                  },
                 
                  "actionType": {
                    "type": "text",
                  
                  },
                 
                  "field": {
                    "type": "text",
                    
                  },
                  "on": {
                    "type": "text",
                    
                  },
                  "date": {
                    "type": "date"
                  },
                 
                  
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})


/*client.indices.create ({ 
  index : 'Logs' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "firstName": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                  },
                  "lastName": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                  },
                  "birthday": {
                    "type": "date"
                  },
                  "email": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                  },
                  "tel": {
                    "type": "text",
                    "fields": {"keyword": {"type": "keyword"}}
                  },
                  "creationDate": {
                    "type": "date"
                  },
                 
                  
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "5",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})*/











 




/*async function run () {
  // Let's start by indexing some data
  await client.index({
    index: 'game-of-thrones',
    // type: '_doc', // uncomment this line if you are using {es} ≤ 6
    body: {
      character: 'Ned Stark',
      quote: 'Winter is coming.'
    }
  })



  await client.index({
    index: 'game-of-thrones',
    // type: '_doc', // uncomment this line if you are using {es} ≤ 6
    body: {
      character: 'Daenerys Targaryen',
      quote: 'I am the blood of the dragon.'
    }
  })

  await client.index({
    index: 'game-of-thrones',
    // type: '_doc', // uncomment this line if you are using {es} ≤ 6
    body: {
      character: 'Tyrion Lannister',
      quote: 'A mind needs books like a sword needs a whetstone.'
    }
  })

  // We need to force an index refresh at this point, otherwise we will not
  // get any result in the consequent search
  await client.indices.refresh({ index: 'game-of-thrones' })

  // Let's search!
  const { body } = await client.search({
    index: 'game-of-thrones',
    // type: '_doc', // uncomment this line if you are using {es} ≤ 6
    body: {
      query: {
        match: { quote: 'winter' }
      }
    }
  })

  console.log(body.hits.hits)
}

run().catch(console.log)*/

client.indices.create ({ 
  index : 'mandates' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "profileId" : {
                    "type":"long"
                  },
                 
                  "userId": {
                    "type": "long",
                  
                  },
                 
                  "name": {
                    "type": "text",
                    "fields": {"keyword": {"type": "keyword"}}
                    
                  },
                  "description": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                    
                  }
                 
                  
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})

/*client.indices.create ({ 
  index : 'blockeprofiles' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "profileId" : {
                    "type":"long"
                  },
      
                 
                  "banneprofileid": {
                    "type": "long",
                    
                  },
                  "creatinDate": {
                    "type": "date",
                    
                  }
                 
                  
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})*/

client.indices.create ({ 
  index : 'profiles' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "profileId" : {
                    "type":"long"
                  },
                 
                  "userId": {
                    "type": "long",
                  
                  },
                 
                  "firstname": {
                    "type": "text",
                    "fields": {"keyword": {"type": "keyword"}}
                    
                  },
                  "lastname": {
                    "type": "text",
                    "fields": {"keyword": {"type": "keyword"}}
                    
                  },
                 
                  "tel": {
                    "type": "text",
                    "fields": {"keyword": {"type": "keyword"}}
                  },
                 
                  "avatar": {
                    "type": "text",
                    "fields": {"keyword": {"type": "keyword"}}
                  }
                 
                  
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})


client.indices.create ({ 
  index : 'groupsprofiles' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "profileId" : {
                    "type":"long"
                  },
                 
                  "groupId": {
                    "type": "long",
                  
                  }
                  
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})

client.indices.create ({ 
  index : 'groups' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "profileId" : {
                    "type":"long"
                  },
                 
                  "name": {
                    "type": "keyword"
                  
                  },
                  "description":{
                    "type":"text",
                    "fields": {"raw": {"type": "keyword"}}
                  },
                  "creationDate" : {
                    "type":"date"
                  }
                  
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})

client.indices.create ({ 
  index : 'roles' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "name" : {
                    "type":"keyword"
                  },
                 
                  "description": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                  
                  }
                  
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})

client.indices.create ({ 
  index : 'notifications' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "profileId" : {
                    "type":"long"
                  },
                 
                  "type": {
                    "type": "long",
                  
                  },
                 
                  "title": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                    
                  },
                  "message": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                    
                  },
                  "creationDate":{
                    "type":"date"
                  },
                  "read":{
                    "type":"byte"
                  }


                 
                  
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})

/*client.indices.create ({ 
  index : 'usersacces' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                                    
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})*/

/*client.indices.create ({ 
  index : 'groupshistories' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                                    
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


}) */


client.indices.create ({ 
  index : 'data' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  },
                  "profileId":{
                    "type" :"long"
                  },
                  
                  "name":{
                    "type":"text",
                    
                  },
                  "shortdescription": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                   
                  },
                  "fullDescription": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
              
                  },
                  "creationDate": {
                    "type": "date"
                  },
                  "updateDate": {
                    "type": "date",
               
                  },
                  "provider": {
                    "type": "text",
                   
                  },
                  "reference": {
                    "type": "text"
                  },
                  "keywords": {
                    "type": "text"
                  },
                 
                  
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})

client.indices.create ({ 
  index : 'datastatistics' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "dataId" : {
                    "type":"long"
                  },
                 
                  "download": {
                    "type": "integer"
                  },
                 
                  "view": {
                    "type": "integer"
                  },
                 
                  "rating": {
                    "type": "double"
                  },
                 
                  "review": {
                    "type": "integer"
                  },
                 
                  "wish": {
                    "type": "integer"
                  }
                  
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})

client.indices.create ({ 
  index : 'datacategories' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "name" : {
                    "type":"text",
                    "fields": {"raw": {"type": "keyword"}}
                  },
                 
                  "description": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                  }
                  
                }
                
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})


client.indices.create ({ 
  index : 'test' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "email":{
                        "type":"text"
                  }
                  ,
                  "id" : {
                    "type":"integer",
                    
                  },
                 
                  "name": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                  },
                 
                  "password": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                  }
                  
                }
                
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})


client.indices.create ({ 
  index : 'test3' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "email":{
                        "type":"text"
                  }
                  ,
                  "id" : {
                    "type":"integer",
                    
                  },
                 
                  "name": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                  }
                 
          
                  
                }
                
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})

client.indices.create ({ 
  index : 'dataevaluation' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "dataId" : {
                    "type":"long"
                  },
                 
                  "score": {
                    "type": "double"
                  },
                 
                  "comment": {
                    "type": "text"
                  },
                 
                  "date": {
                    "type": "double"
                  }
                  
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})

/*client.indices.create ({ 
  index : 'permissionstatus' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "name" : {
                    "type":"text",
                    "fields": {"raw": {"type": "keyword"}}
                  },
                 
                  "description": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                  }
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})*/

/*client.indices.create ({ 
  index : 'permissionmodes' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "name" : {
                    "type":"text",
                    "fields": {"raw": {"type": "keyword"}}
                  },
                 
                  "description": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                  }
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})*/



/*client.indices.create ({ 
  index : 'datapermission' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "dataId" : {
                    "type":"long",
                  },
                 
                  "statusId": {
                    "type": "long",
                    
                  },
                 
                  "profileId": {
                    "type": "long",
                    
                  },
                 
                  "modeId": {
                    "type": "long",
                    
                  },
                 
                  "date": {
                    "type": "date",                   
                  },
                 
                  "expirationDate": {
                    "type": "date",                   
                  }
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})*/


/*client.indices.create ({ 
  index : 'groupsdatapermissions' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "dataId" : {
                    "type":"long",
                  },
                 
                  "statusId": {
                    "type": "long",
                    
                  },
                 
                  "groupId": {
                    "type": "long",
                    
                  },
                 
                  "modeId": {
                    "type": "long",
                    
                  },
                 
                  "date": {
                    "type": "date",                   
                  },
                 
                  "expirationDate": {
                    "type": "date",                   
                  }
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


}) */





client.indices.create ({ 
  index : 'datagroups' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "name" : {
                    "type":"text",
                  },
                 
                  "description": {
                    "type": "text",
                    
                  },
                 
                  "creationDate": {
                    "type": "date",
                    
                  }
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})








/*client.indices.create ({ 
  index : 'appsdatapermission' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "appId" : {
                    "type":"long",
                  },
                 
                  "dataId": {
                    "type": "long",
                    
                  },
                 
                  "statusId": {
                    "type": "long",
                    
                  },
                 
                  "modeId": {
                    "type": "date",
                    
                  },
                 
                  "date": {
                    "type": "date",
                    
                  },
                 
                  "expirationDate": {
                    "type": "date",
                    
                  }
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})*/




/*client.indices.create ({ 
  index : 'groupsappspermissions' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "appId" : {
                    "type":"long",
                  },
                 
                  "groupId": {
                    "type": "long",
                    
                  },
                 
                  "statusId": {
                    "type": "long",
                    
                  },
                 
                  "modeId": {
                    "type": "date",
                    
                  },
                 
                  "date": {
                    "type": "date",
                    
                  },
                 
                  "expirationDate": {
                    "type": "date",
                    
                  }
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})*/

client.indices.create ({ 
  index : 'apps' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "profileId" : {
                    "type":"long",
                  },
                 
                  "categoryId": {
                    "type": "long",
                    
                  },
                 
                  "name": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                  },
                 
                  "slug": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                    
                  },
                 
                  "icon": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                  },
                 
                  "command": {
                    "type": "text",                  
                    "fields": {"raw": {"type": "keyword"}} 
                  },
                 
                  "shortDescription": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                  },
                 
                  "fullDescription": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                  },
                 
                  "creationDate": {
                    "type": "date",
                    
                  },
                 
                  "updateDate": {
                    "type": "date",
                    
                  },
                 
                  "provider": {
                    "type": "text",                   
                    "fields": {"raw": {"type": "keyword"}}
                  },
                 
                  "accesMode": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                    
                  },
                 
                  "accsesType": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                    
                  }
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})

client.indices.create ({ 
  index : 'appscategories' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "name" : {
                        "type":"text",
                        "fields": {"raw": {"type": "keyword"}}
                  },
                 
                  "description": {
                        "type": "text",
                        "fields": {"raw": {"type": "keyword"}}
                    
                  }
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})

client.indices.create ({ 
  index : 'appsstatistics' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "download" : {
                    "type":"long",
                  },
                 
                  "appId": {
                    "type": "long",
                    
                  },
                 
                  "type": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                  },
                 
                  "vieW": {
                    "type": "long",
                  
                  },
                 
                  "rating": {
                    "type": "double",                  
                    
                  },
                 
                  "review": {
                    "type": "long",
                    
                  },
                 
                  "favorite": {
                    "type": "long",
                    
                  },
                 
                  "date": {
                    "type": "date",
                    
                  },
                 
                  "star_1": {
                    "type": "date",
                    
                  },
                 
                  "star_1": {
                    "type": "long",                   
                
                  },
                 
                  "star_2": {
                    "type": "long",
                    
                    
                  },
                 
                  "star_3": {
                    "type": "long",
                  
                    
                  },
                 
                  "star_4": {
                    "type": "long",
        
                    
                  },
                 
                  "star_5": {
                    "type": "long",
                    
                    
                  }
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


}) 


client.indices.create ({ 
  index : 'appsaevaluation' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "appId" : {
                    "type":"long",
                  },
                 
                  "profileId": {
                    "type": "long",
                    
                  },
                 
                  "score": {
                    "type": "double",
                    
                  },
                 
                  "comment": {
                    "type": "long",
                    "fields": {"raw": {"type": "keyword"}}
                  },
                 
                  "validated": {
                    "type": "binary",                  
                    
                  },
                 
                  "date": {
                    "type": "date",
                    
                  },
                 
                  "parent": {
                    "type": "long",
                    
                  }
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


}) 


client.indices.create ({ 
  index : 'appsaevaluationreplies' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "appEvaluationId" : {
                    "type":"long",
                  },
                 
                  "profileId": {
                    "type": "long",
                    
                  },
                 
                  "comment": {
                    "type": "long",
                    "fields": {"raw": {"type": "keyword"}}
                  },
                 
                  "validated": {
                    "type": "binary",                  
                    
                  },
                 
                  "date": {
                    "type": "date",
                    
                  }
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


}) 

client.indices.create ({ 
  index : 'appsscreanshots' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "appId" : {
                    "type":"long",
                  },
                 
                  "image": {
                    "type": "text",
                    "fields": {"raw": {"type": "keyword"}}
                  },
                 
                  "description": {
                    "type": "long",
                    "fields": {"raw": {"type": "keyword"}}
                  },
                 
                  "width": {
                    "type": "integer",                  
                    
                  },
                 
                  "height": {
                    "type": "integer",
                    
                  }
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


}) 

client.indices.create ({ 
  index : 'appsview' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "appId" : {
                        "type":"long",
               
                  },                
                  "profileId": {
                        "type": "long",                                        
                  },                
                  "date": {
                        "type": "date",                                        
                  }
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})


client.indices.create ({ 
  index : 'appsfavorite' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "appId" : {
                        "type":"long",
               
                  },                
                  "profileId": {
                        "type": "long",                                        
                  },                
                  "date": {
                        "type": "date",                                        
                  }
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})
client.indices.create ({ 
  index : 'appsdownloads' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "appId" : {
                        "type":"long",
               
                  },                
                  "profileId": {
                        "type": "long",                                        
                  },                
                  "date": {
                        "type": "date",                                        
                  }
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})


client.indices.create ({ 
  index : 'keywords' , 
  
  body : {
    
        "mappings": {
          
            
              
                "properties": {
                  "id":{
                        "type":"long"
                  }
                  ,
                  "keyword" : {
                    "type":"text",
                    "fields": {"raw": {"type": "keyword"}}
                  },
                 
                  "appsId": {
                    "type": "long",
                    
                  },
                 
                  "dataId": {
                    "type": "long",
                    
                  }
                }
              
              
          
        },
        "settings": {
          "index": {
            
            "number_of_shards": "3",
            "number_of_replicas": "1",

          }
        
      }
    

 }


})

/*client.ping({
  // ping usually has a 3000ms timeout
  requestTimeout: 1000
}, function (error) {
  if (error) {
    console.trace('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});
async function khdmi (){
try {
  const response = await client.search({
    q: 'ziko'
  });
  console.log(response.hits.hits)
} catch (error) {
  console.trace(error.message)
}


}

khdmi();*/
 
 


  



























module.exports = app;




