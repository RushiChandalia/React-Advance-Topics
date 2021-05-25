
const blogResolver = require('./blog')
module.exports = {
   
    Mutation: {
        
        ...blogResolver.Mutation,
      
    },
    Query:{
     ...blogResolver.Query
    }

}