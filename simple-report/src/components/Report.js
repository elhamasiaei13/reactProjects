import React, { Component, PureComponent } from 'react'
import StackChart from './chart/StackChart'
import { Redirect } from 'react-router-dom'
import Axios from 'axios';
import { message, Spin, Icon } from 'antd';
import { BASE_URL } from './Base'
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

export default class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataReport: [],
            categories: [],
            numberData: 1,
            heightChart: 600,
            loading: false
        }
    }

    componentDidMount() {
        const { auth } = this.props
        let data = []
        let categories = []
        let heightChart = 100
        this.setState({ loading: true })
        
            Axios.get(BASE_URL, {
                params: {},
                auth: { username: auth.username, password: auth.password }
            }).then((response) => {
                const label = Object.keys(response.data.data.series)
                heightChart = 81 + response.data.data.xaxis.length * 35
                response.data.data.xaxis.map((item) => {
                    categories.push(item.name)
                })

                label.map((item) => {
                    data.push({
                        name: item,
                        data: response.data.data.series[item]
                    })
                })
                this.setState({ dataReport: data, categories, heightChart, loading: false })
            }
            )
                .catch((error) => {

                    if (error.message !== "Network Error") {
                        if (error.response) {
                            if (error.response.status == 401) {
                                this.props.setAuth(false)
                            }
                        }
                    } else {
                        message.error(error.message,10)
                    }
                    this.setState({ dataReport: data, categories, heightChart: heightChart, loading: false })
                    console.log("error", error)
                    message.error(error.message,10)
                })
        

    }

    render() {
        const { dataReport, categories, heightChart, loading } = this.state
        const { auth } = this.props

        if (!(auth.authentication)) {
            return <Redirect to="/login" />
        }
        console.log(this.props)

        return (
            <>
                {loading ?
                    <div className="example">

                        <Spin indicator={antIcon} size="large" />

                        </div>
                    :

                    <StackChart
                        categories={categories}
                        colors={[
                            '#4d84bd', '#7caa2d', '#f9d304', '#cb6318', '#728c48',
                        ]}
                        data={dataReport}
                        titleY={"تعداد"}
                        heightChart={heightChart}
                    />}
            </>
        )
    }
}
