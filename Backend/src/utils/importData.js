const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Dataset = require("../models/Dataset");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const importData = async () => {
  try {
    const jsonPath = path.join(
      __dirname,
      "../../data/GITHUB dataset.json"
    );

    const data = JSON.parse(
      fs.readFileSync(jsonPath, "utf-8")
    );

    await Dataset.deleteMany();

    await Dataset.insertMany(data);

    console.log(`${data.length} records imported successfully`);

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();