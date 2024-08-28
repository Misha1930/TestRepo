const axios = require ('axios');
const validator = require('jsonschema')

describe('API tests', ()=>{
    test("Create a Pet", async()=>{

            const response = await axios.post('https://petstore.swagger.io/v2/pet',{
                data:{
                    "id": 1234567890,
                        "category": {
                          "id": 1234567890,
                          "name": "TRUMPP"
                        },
                        "name": "Trumppp",
                        "photoUrls": [
                          "string"
                        ],
                        "tags": [
                          {
                            "id": 1234567890,
                            "name": "TRUMP"
                          }
                        ],
                        "status": "available"
                 },
                  headers: {
                Accept: 'application/json'
             },
             })
           
           const requestData = JSON.parse(response.config.data)

           await expect(response.status).toBe(200)
           await expect (requestData.data.id).toBe(1234567890)
           await expect (requestData.data.status).toBe('available')
    })
    
    test("Get a Pet", async () =>{
      const response = await axios.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available',{
        Accept: 'application/json'
      })
      console.log(response)
    })
    
    test("Update a Pet by id", async()=>{
      const response = await axios.put('https://petstore.swagger.io/v2/pet', {
        "id": 1237,
        "category": {
          "id": 1237,
          "name": "Mars"
        },
        "name": "Marssssssssssss",
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "status": "available"
      }, {
          Accept: 'application/json'
      })
      console.log(response)
    })
    
    test("Delete a Pat", async()=>{
      const response = await axios.delete('https://petstore.swagger.io/v2/pet/1237',{
           Accept: 'application/json'
      })
      console.log(response.data)
    })

    test("Get pet one more time", async() => {
        const response = await axios.get('https://petstore.swagger.io/v2/pet/1237', {
          Accept: 'application/json'
        })
        console.log(response.status)
    })
})

