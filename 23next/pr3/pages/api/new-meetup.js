// POST только
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { image, title, address, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://Artem2:Kg0ue6a1Cu5Jr2Qc@cluster0.fikvk.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetuspCollection = db.collection("meetups");
    const result = await meetuspCollection.insertOne(data);
    console.log("result", result);
    client.close();
    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;
