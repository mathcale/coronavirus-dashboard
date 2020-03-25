import axios from 'axios';

export default (req, res) => {
  axios
    .get('https://covid.migre.me/api')
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};
