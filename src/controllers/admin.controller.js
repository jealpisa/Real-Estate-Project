const CategoriesModel = require("../models/category.model");

async function postCategory(req, res) {
    try {
      const category = await CategoriesModel.create(req.body);
      res.status(200).json(category);
    } catch (error) {
      res.status(500).send(`Error creating category: ${error}`);
    }
  }
  
  async function deleteCategory(req, res) {
    try {
      const category = await CategoriesModel.findByIdAndDelete(
        req.params.categoryId
      );
      res.status(200).json(`${category.category} has been delete`);
    } catch (error) {
      res.status(500).send(`Error deleting category: ${error}`);
    }
  }

  async function postProvince(req, res) {
    try {
      const province = await provincesModel.create(req.body);
      res.status(200).json(province);
    } catch (error) {
      res.status(500).send(`Error creating province: ${error}`);
    }
  }
  
  async function deleteProvince(req, res) {
    try {
      const province = await ProvincesModel.findByIdAndDelete(
        req.params.provinceId
      );
      res.status(200).json(`${province.province} has been delete`);
    } catch (error) {
      res.status(500).send(`Error deleting province: ${error}`);
    }
  }

  async function postMunicipality(req, res) {
    try {
      const municipality = await provincesModel.create(req.body);
      res.status(200).json(municipality);
    } catch (error) {
      res.status(500).send(`Error creating municipality: ${error}`);
    }
  }
  
  async function deleteMunicipality(req, res) {
    try {
      const municipality = await MunicipalityModel.findByIdAndDelete(
        req.params.municipalityId
      );
      res.status(200).json(`${municipality.municipality} has been delete`);
    } catch (error) {
      res.status(500).send(`Error deleting municipality: ${error}`);
    }
  }

  async function postZone(req, res) {
    try {
      const zone = await zoneModel.create(req.body);
      res.status(200).json(zone);
    } catch (error) {
      res.status(500).send(`Error creating zone: ${error}`);
    }
  }
  
  async function deleteZone(req, res) {
    try {
      const zone = await ZoneModel.findByIdAndDelete(
        req.params.municipalityId
      );
      res.status(200).json(`${zone.zone} has been delete`);
    } catch (error) {
      res.status(500).send(`Error deleting zone: ${error}`);
    }
  }

  module.exports = {
    postCategory,
    deleteCategory,
    postProvince,
    deleteProvince,
    postMunicipality,
    deleteMunicipality,
    postZone,
    deleteZone
  };