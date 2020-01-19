import axios from 'axios';
import { connect } from "react-redux";

class Api {
    static BASE_URI = 'http://192.168.0.19:6060/v1'

    // static getBaseUrl()
    // {
    //     return(this.BASE_URI)
    // }

    static get(uri, auth = { userName: 'bistmart', password: '123' }) {
        return axios.get(this.BASE_URI + uri, {
            params: {},
            auth: { username: auth.userName, password: auth.password }
        })
    }
    
    static index(uri, id, props = {}) {
        return axios.get(this.BASE_URI + uri + id, { headers: this.set_header() })
    }

    static post(uri, param, props = {}) {
        return axios.post(this.BASE_URI + uri, param)
    }

}

export default (Api);

