const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//midleWare

app.use(express.json());
app.use(cors());

//router

const aboutRoute = require("./router/about.route");

const bannerRoute = require("./router/banner.route");

const brandRoute = require("./router/brand.route");

const categoryRoute = require("./router/category.route");

const orderRoute = require("./router/order.route");

const paymentRoute = require("./router/payment.route");

const productRoute = require("./router/product.route");

const shippingRoute = require("./router/shipping.route");

const stockRoute = require("./router/stock.route");

const storeRoute = require("./router/store.route");

const supplireRoute = require("./router/supplire.route");

const userRoute = require("./router/user.route");

//api end points

app.use("/api/v1/about", aboutRoute);
app.use("/api/v1/banner", bannerRoute);
app.use("/api/v1/brand", brandRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/shipping", shippingRoute);
app.use("/api/v1/stock", stockRoute);
app.use("/api/v1/store", storeRoute);
app.use("/api/v1/supplire", supplireRoute);
app.use("/api/v1/user", userRoute);

module.exports = app;
