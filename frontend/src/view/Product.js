import React, { useEffect } from "react";
import TableShop from "../components/TableShop";

import { useDispatch, useSelector } from "react-redux";

import { getAllProductAction } from "../redux/product/actions";
const tableData = [
  { title: "Product Name", name: "name" },
  { title: "Unity", name: "unity" },
  { title: "Description", name: "description" },
  { title: "Status", name: "isActive" },
];
const ViewComponent = (props) => {
  const dispatch = useDispatch();
  const { products, isFetching } = useSelector((state) => state.product);

  useEffect(() => {
    getAllProductAction()(dispatch);
  }, []);
  return (
    <>
      <h1> Test Product View</h1>
      <TableShop tableData={tableData} items={products} />
    </>
  );
};

export default ViewComponent;
