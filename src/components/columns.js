import { format } from "date-fns";
import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
  {
    accessor: "id",
    Header: "Id",
    Footer: "Id",
    Filter: ColumnFilter,
  },
  {
    accessor: "first_name",
    Header: "First Name",
    Footer: "First Name",
    Filter: ColumnFilter,
  },
  {
    accessor: "last_name",
    Header: "Last Name",
    Footer: "Last Name",
    Filter: ColumnFilter,
  },
  {
    accessor: "date_of_birth",
    Header: "Date of Birth",
    Footer: "Date of Birth",
    Filter: ColumnFilter,
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    accessor: "country",
    Header: "Country",
    Footer: "Country",
    Filter: ColumnFilter,
  },
  {
    accessor: "phone",
    Header: "Phone",
    Footer: "Phone",
    Filter: ColumnFilter,
  },
];

export const GROUPED_COLUMNS = [
  {
    accessor: "id",
    Header: "Id",
    Footer: "Id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        accessor: "first_name",
        Header: "First Name",
        Footer: "First Name",
      },
      {
        accessor: "last_name",
        Header: "Last Name",
        Footer: "Last Name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        accessor: "country",
        Header: "Country",
        Footer: "Country",
      },
      {
        accessor: "phone",
        Header: "Phone",
        Footer: "Phone",
      },
    ],
  },
];
