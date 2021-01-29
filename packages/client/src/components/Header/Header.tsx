import React, { FC } from "react";
import { Layout } from "antd";

import {
  NAME,
  TYPE,
  CLASSIFICATION,
  TITLE,
} from "../../utils/dict/general.dict";

const { Header } = Layout;

export default function HeaderBody() {
  return (
    <div>
      <Header>
        <h1 style={{ color: "white" }}>{TITLE}</h1>
      </Header>
    </div>
  );
}
