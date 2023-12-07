import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer vajPBw8n5Ljr0gWNqpwOIoZsrTOQ7B3OvvkS97VB8_hq3fhPJo5_i9TGzGVFa1D24cyI-ntrVHF2BAXUwvoZNISmtaNGkzUINfN_uUTj7VhS82ukKShOQF4-BdFuZXYx'
    }
})