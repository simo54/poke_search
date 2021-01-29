import React, { FC, useState } from "react";
import { Layout, Space, Col, Row, Button, Tooltip, Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import TableVisual from "../components/Table/TableVisual";
import "antd/dist/antd.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { pokemonTypes } from "../utils/pokemonTypes";
import pikachu from "../assets/188987.svg";

const { Content } = Layout;
const { Option } = Select;

const App: FC = () => {
  const [input, setInput] = useState<string>("");
  const [limit, setLimit] = useState<number>(10);
  const [type, setType] = useState<string>("noType");

  const searchInput = (e: React.SetStateAction<string>) => {
    setInput(e);
  };

  const pokelimit = (e: React.SetStateAction<number>) => {
    setLimit(e);
  };

  const getLimit = (e: React.SetStateAction<string>) => {
    setType(e);
  };

  return (
    <div className="App">
      <Layout>
        <Header />
        <Space direction="vertical" size={"large"} />
        <Row justify="center" align="middle" gutter={50}>
          <Col>
            <Tooltip title="Select a type to filter all pokemon that belongs to that type">
              <Button type="primary" shape="circle" size={"small"}>
                ?
              </Button>
            </Tooltip>
            <Select
              size={"small"}
              showSearch
              style={{ width: 100 }}
              placeholder="Type"
              optionFilterProp="children"
              onChange={(e: string) => getLimit(e)}
            >
              <Option value="Reset" selected>
                --Reset--
              </Option>
              {pokemonTypes.map((el, index) => (
                <Option key={index} value={el}>
                  {el}
                </Option>
              ))}
            </Select>
          </Col>
          <Col>
            <Input
              size="large"
              placeholder="Search your pokemon here!"
              prefix={<img src={pikachu} width={20} />}
              value={input}
              onChange={(e) => searchInput(e.target.value)}
            />
          </Col>
          <Col>
            <Tooltip title="search">
              <Button
                type="primary"
                shape="circle"
                icon={<SearchOutlined />}
                // onClick={(e) => searchInput(e<MouseEvent>.va}
              />
            </Tooltip>
          </Col>
          <Col>
            <Tooltip title="How many pokemons you want to display?">
              <Select
                size={"small"}
                showSearch
                style={{ width: 100 }}
                placeholder="Limit"
                optionFilterProp="children"
                onChange={(e: number) => pokelimit(e)}
              >
                <Option value="20">20</Option>
                <Option value="50">50</Option>
                <Option value="100">100</Option>
                <Option value="151">151</Option>
              </Select>
            </Tooltip>
          </Col>
        </Row>
        <Space direction="vertical" size={"large"} />
        <Content>
          <TableVisual data={input} limit={limit} type={type} />
        </Content>
        <Footer />
      </Layout>
    </div>
  );
};

export default App;
