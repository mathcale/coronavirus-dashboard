import axios from 'axios';

export default (req, res) => {
  axios
    .get(`http://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=${req.query.code}&timelines=1`)
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};
