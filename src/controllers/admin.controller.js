const CategoriesModel = require("../models/categories.model");

async function postCategorie(req, res) {
    try {
      const categorie = await CategoriesModel.create(req.body);
      res.status(200).json(categorie);
    } catch (error) {
      res.status(500).send(`Error creating categorie: ${error}`);
    }
  }
  
  async function deleteCategorie(req, res) {
    try {
      const categorie = await CategoriesModel.findByIdAndDelete(
        req.params.categoryId
      );
      res.status(200).json(`${categorie.categorie} has been delete`);
    } catch (error) {
      res.status(500).send(`Error deleting categorie: ${error}`);
    }
  }

  module.exports = {
    postCategorie,
    deleteCategorie
  };