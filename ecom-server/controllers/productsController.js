import axios from "axios";

export const fetchAll = async (req, res) => {
  try {
    const response = await axios
      .get(`${process.env.base_url}products/all?apiKey=${process.env.apiKey}`, {
        redirect: "follow",
      })
      res.status(201).json(response.data);
  } catch (error) {
    // console.log(error.message);

    res.status(500).send({error: error.message})
  }
};
