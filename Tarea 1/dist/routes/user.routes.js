"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
router.get('/usuarios', (0, auth_middleware_1.roles)(['admin', 'gerente']), controllers_1.controller.listAll);
exports.default = router;
