const bcrypt = require('bcryptjs');

module.exports = {
   register: async(req, res) => {
      console.log(req.body)
      const {username, password, profile_pic} = req.body;
      const db = req.app.get('db');

      let user = await db.auth.check_user(username);
      if(user[0]) {
         return res.status(400).send('User already exists');
      }
      let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync(password, salt);

      let newUser = await db.auth.register_user({
         username,
         password: hash,
         profile_pic
      });

      req.session.user = newUser[0];
      res.status(201).send(req.session.user);
   },
   login: async(req, res) => {
      const {username, password} = req.body;
      const db = req.app.get('db');

      let user = await db.auth.check_user(username);
      if(!user[0]){
         return res.status(400).send('User does not exist');
      }

      const authenticated = bcrypt.compareSync(password, user[0].password);
      if(!authenticated) {
         return res.status(401).send('Incorrect username or password')
      }
      delete user[0].password;
      req.session.user = user[0];
      res.status(202).send(req.session.user);
   },
   logout: (req, res) => {
      req.session.destroy();
      res.sendStatus(200);
   }
}