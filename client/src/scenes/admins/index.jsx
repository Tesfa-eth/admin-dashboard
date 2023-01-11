import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetAdminsQuery } from "state/api";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";
//import CustomColumnMenu from "components/DataGridCustomColumnMenu";

const Admins = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetAdminsQuery();
  console.log(data);
  return <div></div>;
};

export default Admins;
