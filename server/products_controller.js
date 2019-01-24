module.exports = {
  create: (req, res) => {
    let {name, description, price, image_url} = req.body;
    req.app.get('db').create_product([name, description, price, image_url]).then(() => {
      res.sendStatus(200);
    }).catch((err) => {
      console.log(err);
      res.status(500).send(err);
    })
  },

  getOne: (req, res) => {
    const {id} = req.params;
    req.app.get('db').read_product(id).then((product) => {
      res.status(200).send(product);
    }).catch((err) => {
      console.log(err);
      res.status(500).send(err);
    })
  },

  getAll: (req, res) => {
    req.app.get('db').read_products().then((products) => {
      res.status(200).send(products);
    }).catch((err) => {
      console.log(err);
      res.status(500).send(err);
    })
  },

  update: (req, res) => {
    let {params, query} = req;

    req.app.get('db').update_product([params.id, query.desc]).then(() => {
      res.sendStatus(200);
    }).catch((err) => {
      console.log(err);
      res.status(500).send(err);
    })
  },

  delete: (req, res) => {
    let {id} = req.params;
    req.app.get('db').delete_product(id).then(() => {
      res.sendStatus(200);
    }).catch((err) => {
      console.log(err);
      res.status(500).send(err)
    })
  }
}