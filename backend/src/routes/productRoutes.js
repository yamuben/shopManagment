import { Router } from "express";
import * as ProductController from "../controller/productController";

const route = Router();
route
  .route("/")
  .post(ProductController.createController)
  .get(ProductController.getAllController);

route
  .route("/:id")
  .patch(ProductController.updateOneController)
  .get(ProductController.getOneController)
  .delete(ProductController.deleteOneController);

export default route;