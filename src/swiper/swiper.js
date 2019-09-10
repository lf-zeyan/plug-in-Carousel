import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import axios from 'axios'
import '../mock/mock.js'
export class Swiper extends Component {

    constructor() {
        super()
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        axios.post('/getData', { num: this.props.num }).then(res => {
            console.log(res.data.data);
            this.setState({
                list: res.data.data
            })
        })
    }
    render() {
        let data = this.state.list
        return (
            <div>
                <Carousel autoplay>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div>{item.title}</div>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        );
    }
}

export default Swiper;
