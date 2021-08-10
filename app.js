'use strict'
const express = require('express');
const app = express();
const { Client } = require('@elastic/elasticsearch');
var elasticsearch = require('elasticsearch');
console.log("node", process.env.ELASTIC_HOST)
var client = new elasticsearch.Client({
  host: 'elasticsearch:9200'
});     // ce script est responsable de l'ajout ou la supression des indexs
 

function existsIndex(ind) {
  return client.indices.exists({index: ind})   //fonction qui verifie si un index existe ou non 
}

if(existsIndex('appsaevaluation')){
client.indices.delete({
  index: 'appsaevaluation',           
}).then(function(resp) {                     //fonction qui est responsable de la supression d'un index il suffit de mettre le nom de l'index
  console.log("Successful query!");
  console.log(JSON.stringify(resp, null, 4));
}, function(err) {
  console.trace(err.message);
});
}


if(!existsIndex('users')){

client.indices.create({      // la on trouve la fonction qui est responsable dea la creation des indexs
  index: 'users',

  body: {

    "mappings": {



      "properties": {
        "id": {
          "type": "long"
        },
        "profileid": {
          "type": "long"
        },

        "numRegNat": {
          "type": "text",
          "fields": { "raw": { "type": "keyword" } }

        },
        "firstName": {
          "type": "text",
          "fields": { "raw": { "type": "keyword" } }
        },
        "lastName": {
          "type": "text",
          "fields": { "raw": { "type": "keyword" } }

        },
        "birthday": {
          "type": "date"
        },
        "email": {
          "type": "text",
          "fields": { "keyword": { "type": "keyword" } }

        },
        "tel": {
          "type": "text",
          "fields": { "raw": { "type": "keyword" } }


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
}

if(!existsIndex('logs')){
client.indices.create({
  index: 'logs',

  body: {

    "mappings": {



      "properties": {
        "id": {
          "type": "long"
        }
        ,
        "profileId": {
          "type": "long"
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
}


if(!existsIndex('mandates')){

client.indices.create({
  index: 'mandates',

  body: {

    "mappings": {



      "properties": {
        "id": {
          "type": "long"
        }
        ,
        "profileId": {
          "type": "long"
        },

        "userId": {
          "type": "long",

        },

        "name": {
          "type": "text",
          "fields": { "keyword": { "type": "keyword" } }

        },
        "description": {
          "type": "text",
          "fields": { "raw": { "type": "keyword" } }

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

}
if(!existsIndex('profiles')){
client.indices.create({
  index: 'profiles',

  body: {

    "mappings": {



      "properties": {
        "id": {
          "type": "long"
        }
        ,
        "profileId": {
          "type": "long"
        },

        "userId": {
          "type": "long",

        },

        "firstname": {
          "type": "text",
          "fields": { "keyword": { "type": "keyword" } }

        },
        "lastname": {
          "type": "text",
          "fields": { "keyword": { "type": "keyword" } }

        },

        "tel": {
          "type": "text",
          "fields": { "keyword": { "type": "keyword" } }
        },

        "avatar": {
          "type": "text",
          "fields": { "keyword": { "type": "keyword" } }
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
}






if(!existsIndex('data')){
client.indices.create({
  index: 'data',

  body: {

    "mappings": {



      "properties": {
        "id": {
          "type": "long"
        },
        "profileId": {
          "type": "long"
        },

        "name": {
          "type": "text",

        },
        "shortdescription": {
          "type": "text",
          "fields": { "raw": { "type": "keyword" } }

        },
        "fullDescription": {
          "type": "text",
          "fields": { "raw": { "type": "keyword" } }

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
}

if(!existsIndex('datastatistics')){

client.indices.create({
  index: 'datastatistics',

  body: {

    "mappings": {



      "properties": {
        "id": {
          "type": "long"
        }
        ,
        "dataId": {
          "type": "long"
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
}


if(!existsIndex('test')){
client.indices.create({
  index: 'test',

  body: {

    "mappings": {



      "properties": {
        "email": {
          "type": "text"
        }
        ,
        "id": {
          "type": "integer",

        },

        "name": {
          "type": "text",
          "fields": { "raw": { "type": "keyword" } }
        },

        "password": {
          "type": "text",
          "fields": { "raw": { "type": "keyword" } }
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
}





if(!existsIndex('apps')){
client.indices.create({
  index: 'apps',

  body: {

    "mappings": {



      "properties": {
        "id": {
          "type": "long"
        }
        ,
        "profileId": {
          "type": "long",
        },

        "categoryId": {
          "type": "long",

        },

        "name": {
          "type": "text",
          "fields": { "raw": { "type": "keyword" } }
        },

        "slug": {
          "type": "text",
          "fields": { "raw": { "type": "keyword" } }

        },

        "icon": {
          "type": "text",
          "fields": { "raw": { "type": "keyword" } }
        },

        "command": {
          "type": "text",
          "fields": { "raw": { "type": "keyword" } } 
        },

        "shortDescription": {
          "type": "text",
          "fields": { "raw": { "type": "keyword" } }
        },

        "fullDescription": {
          "type": "text",
          "fields": { "raw": { "type": "keyword" } }
        },

        "creationDate": {
          "type": "date",

        },

        "updateDate": {
          "type": "date",

        },

        "provider": {
          "type": "text",
          "fields": { "raw": { "type": "keyword" } }
        },

        "accesMode": {
          "type": "text",
          "fields": { "raw": { "type": "keyword" } }

        },

        "accsesType": {
          "type": "text",
          "fields": { "raw": { "type": "keyword" } }

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
}


if(!existsIndex('appsstatistics')){
client.indices.create({
  index: 'appsstatistics',

  body: {

    "mappings": {



      "properties": {
        "id": {
          "type": "long"
        }
        ,
        "download": {
          "type": "long",
        },

        "appId": {
          "type": "long",

        },

        "type": {
          "type": "text",
          "fields": { "raw": { "type": "keyword" } }
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

}

if(!existsIndex('appsfavorite')){

client.indices.create({
  index: 'appsfavorite',

  body: {

    "mappings": {



      "properties": {
        "id": {
          "type": "long"
        }
        ,
        "appId": {
          "type": "long",

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
}

if(!existsIndex('appsdownloads')){
client.indices.create({
  index: 'appsdownloads',

  body: {

    "mappings": {



      "properties": {
        "id": {
          "type": "long"
        }
        ,
        "appId": {
          "type": "long",

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
}

if(!existsIndex('keywords')){
client.indices.create({
  index: 'keywords',

  body: {

    "mappings": {



      "properties": {
        "id": {
          "type": "long"
        }
        ,
        "keyword": {
          "type": "text",
          "fields": { "raw": { "type": "keyword" } }
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
}
























module.exports = app;




