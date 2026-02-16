// Importamos Router de express y los controladores
import { Router } from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "./user.controller.js";

const router = Router();

// Obtener usuarios
router.get("/", getUsers);

// Obtener usuario por ID
router.get("/:id", getUserById);

// Crear
router.post("/", createUser);

// Actualizar
router.put("/:id", updateUser);

// Eliminar
router.delete("/:id", deleteUser);

export default router;