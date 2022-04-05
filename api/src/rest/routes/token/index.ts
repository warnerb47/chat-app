// import { Router } from 'express';
// import { generateAccessToken } from './token.service';

// export const router: Router = Router();

// router.post("/", async (req, res) => {
//     if (req.body) {
//       const found = await userService.login(req.body);
//       if (found) {
//         const token = generateAccessToken(req.body);
//         res.send({
//           token,
//           user: found,
//         });
//       } else {
//         res.status(404).send("cet utilisateur est introuvable");
//       }
//     } else {
//       res.status(400).send("format invalide");
//     }
// });