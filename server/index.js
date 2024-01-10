import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

const connectionUrl =
  "mongodb+srv://togrul321:mPTi1uWck0vzXeXf@firstcluster.udpwqcz.mongodb.net/";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  image: String,
  category: String,
  title: String,
  price: Number,
});

const Products = mongoose.model("ExampProduct", ProductSchema);

app.get("/", async (req, res) => {
  try {
    const allProducts = await Products.find({});
    res.send(allProducts);
  } catch (error) {
    console.log(error);
  }
});

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = Products.findById(id);
    res.send(product);
  } catch (error) {
    console.log(error);
  }
});

app.post("/", async (req, res) => {
  try {
    const newProduct = new Products(req.body);
  await newProduct.save();
  res.send("Product Created!");
  } catch (error) {
    console.log(error);
  }
});

app.put("/", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.delete("/:id",async (req, res) => {
    const {id} = req.params
    const product = await Products.findByIdAndDelete(id)
  res.send("Product Deleted!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose.connect(connectionUrl).then(() => console.log("Connected!"));
