import React from "react";
import { useQuery } from "@apollo/client";
import Loader from "../commons/Loader/Loader";
import Error from "../commons/Error/Error";

import gql from "graphql-tag";

import { Table } from "antd";
import { NAME, TYPE, CLASSIFICATION } from "../../utils/dict/general.dict";

const TableVisual = (props: any): JSX.Element => {
  const search = props.data;
  const limit = props.limit;
  const type = props.type;

  const { loading, error, data } = useQuery(gql`
    {
      pokemons(q: "${search}" , limit: ${limit} ,${
    type === "noType" ? "" : `types: "${type}"`
  } ) {
        edges {
          cursor
          node {
            id
            name
            types
            classification
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `);

  if (loading) return <Loader />;
  if (error) return <Error />;

  const mappedData = data.pokemons.edges.map(
    (pokemons: { node: any }) => pokemons.node
  );

  const dataSource = mappedData;

  const columns = [
    {
      title: `${NAME}`,
      dataIndex: "name",
      key: "name",
    },
    {
      title: `${TYPE}`,
      dataIndex: "types",
      key: "types",
    },
    {
      title: `${CLASSIFICATION}`,
      dataIndex: "classification",
      key: "classification",
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} />;
    </>
  );
};

export default TableVisual;
