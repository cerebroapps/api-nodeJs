import { Router } from "express";

import {getEmpleados,getEmpleado,createEmpleado,editEmpleado,deleteEmpleado} from '../controllers/empleado.cotrollers.js'

const router = Router();

router.get("/emp",getEmpleados);
router.get("/emp/:id",getEmpleado);


router.post("/emp",createEmpleado);
router.put("/emp",editEmpleado);
router.delete("/emp/:id",deleteEmpleado);


export default router;