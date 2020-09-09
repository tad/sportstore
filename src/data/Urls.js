import { DataTypes } from "./Types";

const protocol = "http";
const hostname = "ec2-54-185-17-95.us-west-2.compute.amazonaws.com";
const port = 3500;

export const RestUrls = {
    [DataTypes.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`,
    [DataTypes.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`
}