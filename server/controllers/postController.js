module.exports = {
   createPost: (req, res) => {
      const {title, img, content, author_id} = req.body;
      const db = req.app.get('db');

      db.post.create_post({
         title,
         img,
         content,
         author_id
      })
      .then(() => {
         res.sensStatus(200);
      })
      .catch(err => res.status(500).send(err));
   },
   getPost: (req, res) => {

   },
   getDashPosts: (req, res) => {
      const {userposts, searchString, user_id} = req.body;
      const db = req.app.get('db');

      if(userposts && searchString) {
         //search all posts
         db.post.search_posts(searchString)
         .then(res => {
            res.status(200).send(res);
         })
         .catch(err => res.status(500).send(err));
      } else if(!userposts && !searchString){
         //list all non user posts
         db.post.list_non_user_posts(user_id)
         .then(res => {
            res.status(200).send(res);
         })
         .catch(err => res.status(500).send(err));
      } else if(!userposts && searchString){
         //search posts that do not belong to the user
         db.post.search_non_user_posts(user_id, searchString)
         .then(res => {
            res.status(200).send(res);
         })
         .catch(err => res.status(500).send(err));
      } else if(userposts && !searchString) {
         //list all posts
         db.post.list_all_posts()
         .then(res => {
            res.status(200).send(res);
         })
         .catch(err => res.status(500).send(err));
      }
   },
   deletePost: (req, res) => {
      const {id} = req.params;
      const db = req.app.get('db');
      db.post.delete_post(id)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).send(err));
   },
   editPost: (req, res) => {
      const {title, img, content} = req.body
      const {id} = req.params;
      const db = req.app.get('db');
      db.post.edit_post({
         title,
         img,
         content,
         id
      })
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).send(err));
   }
}