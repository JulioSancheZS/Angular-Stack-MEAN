import { Request, Response } from "express";
import { Producto } from "../models/producto";

//Listado
export const getProductos = async (req: Request, res: Response) => {
  const listProductos = await Producto.findAll();

  res.json(listProductos);
};
