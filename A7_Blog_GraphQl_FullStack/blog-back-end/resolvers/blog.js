const Blog = require("../models/blog");

module.exports = {
  Mutation: {
    async addBlog(_, {Title, Body }, context, info) {             // wallet id that user will enter
      const newBlog = new Blog({                                //create a new user object to save
        Title,
        Body
      });

      const res = await newBlog.save();                         //save the user obj    
      return {
        ...res._doc,
        id: res._id,
      };
    },
    async deleteBlog(_,{id},context, info){
        
        const res = await Blog.findByIdAndDelete(id)
        return {
            ...res._doc,
            id: res._id,
          };
    }

  },
  Query:{
    async getAllBlogs(_, args, context, info) {
        try {
          const blogs = await Blog.find().sort({ createdAt: -1 });
          return blogs;
        } catch (err) {
          throw new Error(err);
        }
      },
  }
};
