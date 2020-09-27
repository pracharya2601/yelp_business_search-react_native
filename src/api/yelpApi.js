import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer W85YOckcGBOELtTmRzZJETmX_23U7a_AtNOQpBB6NVj8o8jPY1WrchSF4n0h0UHYLJAq7XqSnM1C2__t7ZzIOWKHNnqmTxQN9mwhYvTc8yzyGo_P91AQjBUvwAZuX3Yx'
    }
});