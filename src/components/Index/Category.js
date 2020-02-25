import React from "react";
import { Tooltip, Col, Row,Divider } from "antd";
import ImgCard from "../container/ImageCard";
import Digital from '../../img/Digital.png'
import Debris from '../../img/Debris.png'
import Electrica from '../../img/Electrica.png'
import Learn from '../../img/Learn.png'
import Makeup from '../../img/Makeup.png'
import Ornaments from '../../img/Ornaments.png'
import Snacks from '../../img/Snacks.png'
import Life from '../../img/Life.png'


export default class Category extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <Col>
            <Row  type="flex" justify="center">
                <h2>商品分类<Divider type="vertical"/>Product Category</h2>
            </Row>

                <Row gutter={16} type="flex" justify="center">
                    <Tooltip title="电子产品"><Col span={4}><ImgCard src={Digital}/></Col></Tooltip>
                    <Tooltip title="3C产品"><Col span={4}><ImgCard src={Debris}/></Col></Tooltip>
                    <Tooltip title="家用电子"><Col span={4}><ImgCard src={Electrica}/></Col></Tooltip>
                    <Tooltip title="学习文具"><Col span={4}><ImgCard src={Learn}/></Col></Tooltip>
                </Row>
                <Row gutter={16} type="flex" justify="center" style={{ marginTop: "10px" }}>
                    <Tooltip title="文艺摆件"><Col span={4}><ImgCard src={Ornaments}/></Col></Tooltip>
                    <Tooltip title="家用杂货"><Col span={4}><ImgCard src={Life}/></Col></Tooltip>
                    <Tooltip title="零食杂粮"><Col span={4}><ImgCard src={Snacks}/></Col></Tooltip>
                    <Tooltip title="化妆品"><Col span={4}><ImgCard src={Makeup}/></Col></Tooltip>
                </Row>
            </Col>

        )
    }
}
