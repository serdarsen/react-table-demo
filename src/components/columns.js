export const COLUMNS = [
  {
    accessor: "id",
    Header: "Id",
    Footer: "Id",
  },
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
  {
    accessor: "date_of_birth",
    Header: "Date of Birth",
    Footer: "Date of Birth",
  },
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
