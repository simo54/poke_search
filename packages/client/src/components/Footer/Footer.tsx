import React from "react";
import { Col, Row, Image } from "antd";

import pikachu from "../../assets/188987.svg";
import squirtle from "../../assets/188988.svg";
import bulbasaur from "../../assets/188989.svg";
import charmender from "../../assets/188990.svg";

import "./style/style.css";

export default function Footer() {
  return (
    <div>
      <Row justify="space-between">
        <Col span={6}>
          <div
            className="poke-img"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image src={pikachu} preview={false} width={100} />
          </div>
        </Col>
        <Col span={6}>
          <div
            className="poke-img"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image src={squirtle} preview={false} width={100} />
          </div>
        </Col>
        <Col span={6}>
          <div
            className="poke-img"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image src={bulbasaur} preview={false} width={100} />
          </div>
        </Col>
        <Col span={6}>
          <div
            className="poke-img"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image src={charmender} preview={false} width={100} />
          </div>
        </Col>
      </Row>
    </div>
  );
}
