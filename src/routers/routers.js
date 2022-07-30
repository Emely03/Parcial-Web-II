const {Router} = require ("express")
const router = Router();
const apiRoute = '/api'
const pesoControllers = require('../controllers/controlpeso');

//router.get(apiRoute+'/notas',notasControllers.getAll)
router.post(apiRoute+'/peso',pesoControllers.create)

module.exports = router;