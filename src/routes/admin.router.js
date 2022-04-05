const router = require("express").Router();
const { authUser, authAdmin } = require("../utils");

const { postCategory, deleteCategory, postProvince, deleteProvince, postMunicipality, deleteMunicipality, postZone, deleteZone} = require("../controllers/admin.controller")

router.post("/category", authUser, authAdmin, postCategory);
router.delete("/category/:categoryId", authUser, authAdmin, deleteCategory);
router.post("/province", authUser, authAdmin, postProvince);
router.delete("/province/:provinceId", authUser, authAdmin, deleteProvince);
router.post("/municipality", authUser, authAdmin, postMunicipality);
router.delete("/municipality/:municipalityId", authUser, authAdmin, deleteMunicipality);
router.post("/zone", authUser, authAdmin, postZone);
router.delete("/zone/:zoneId", authUser, authAdmin, deleteZone);

module.exports = router; 