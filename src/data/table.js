const dateAccessor = (row) => {
    const dateOfBirth = new Date(row.dateOfBirth);
    const startDate = new Date(row.startDate);
    // console.log("date", dateOfBirth, "Birth", dateOfBirth.toISOString());
    //date=Sat Oct 21 2000 00:00:00 GMT+0200 (heure d’été d’Europe centrale) Birth=023-10-04T22:00:00.000Z

    return {
        dateOfBirth: dateOfBirth.toISOString().split("T")[0],
        startDate: startDate.toISOString().split("T")[0],
    };
};
export const columns = [
    { Header: "First Name", accessor: "firstName" },
    { Header: "Last Name", accessor: "lastName" },
    { Header: "Start Date", accessor: (row) => dateAccessor(row).startDate },
    { Header: "department", accessor: "department" },
    {
        Header: "Date of Birth",
        accessor: (row) => dateAccessor(row).dateOfBirth,
    },
    { Header: "Street", accessor: "street" },
    { Header: "City", accessor: "city" },
    { Header: "State", accessor: "state" },
    { Header: "Zip Code", accessor: "zipCode" },
];

export const data = [
    {
        firstName: "Ken",
        lastName: "Smith",
        startDate: "10/13/2000",
        department: "Sales",
        dateOfBirth: "10/21/1980",
        street: "153 Street brad franck",
        city: "New York",
        state: "NY",
        zipCode: "99110",
    },
    {
        firstName: "Enzo",
        lastName: "Kmithm",
        startDate: "11/30/2020",
        department: "Finance",
        dateOfBirth: "10/21/2001",
        street: "145 brad",
        city: "Roscoeview",
        state: "MA",
        zipCode: "11110",
    },
    {
        firstName: "Szo",
        lastName: "Lmithm",
        startDate: "05/09/2023",
        department: "Marketing",
        dateOfBirth: "10/21/1999",
        street: "143 brad",
        city: "Boston",
        state: "QA",
        zipCode: "21110",
    },
    {
        firstName: "Leanne ",
        lastName: "Graham",
        startDate: "10/13/2001",
        department: "Engineering",
        dateOfBirth: "10/21/1950",
        street: "153 Street brad franck brad franck",
        city: "Gwenborough",
        state: "NY",
        zipCode: "92998",
    },
    {
        firstName: "Ervin",
        lastName: "Howell",
        startDate: "11/30/2020",
        department: "Finance",
        dateOfBirth: "10/21/2001",
        street: "245 Victor Plains",
        city: "Wisokyburgh",
        state: "LA",
        zipCode: "90566",
    },
    {
        firstName: "Clementine",
        lastName: "Bauch",
        startDate: "05/09/2023",
        department: "Lnance",
        dateOfBirth: "10/21/1999",
        street: "43 Douglas Extension",
        city: "McKenziehaven",
        state: "MK",
        zipCode: "59590",
    },
    {
        firstName: "Patricia",
        lastName: "Lebsack",
        startDate: "10/13/2000",
        department: "Engineering",
        dateOfBirth: "10/29/2000",
        street: "153 Street brad franck ",
        city: "New York",
        state: "NY",
        zipCode: "99110",
    },
    {
        firstName: "Enzo",
        lastName: "Kmithm",
        startDate: "11/30/2020",
        department: "Finance",
        dateOfBirth: "10/21/2001",
        street: "145 brad",
        city: "Roscoeview",
        state: "MA",
        zipCode: "11110",
    },
    {
        firstName: "Szo",
        lastName: "Lmithm",
        startDate: "05/09/2023",
        department: "Lnance",
        dateOfBirth: "10/21/1999",
        street: "143 brad",
        city: "Boston",
        state: "QA",
        zipCode: "21110",
    },
    {
        firstName: "Ken",
        lastName: "Smith",
        startDate: "10/13/2000",
        department: "Engineering",
        dateOfBirth: "10/21/2000",
        street: "153 Street brad franck ",
        city: "South Elvis",
        state: "NY",
        zipCode: "99110",
    },
    {
        firstName: "Chelsey",
        lastName: "Dietrich",
        startDate: "11/30/2022",
        department: "Human Resources",
        dateOfBirth: "10/21/1969",
        street: "145 Apt. 69d",
        city: "Roscoeview",
        state: "NA",
        zipCode: "33263",
    },
    {
        firstName: "Kurtis",
        lastName: "Weissnat",
        startDate: "05/09/2020",
        department: "Sales",
        dateOfBirth: "10/21/1961",
        street: "14 Norberto Crossing",
        city: "Boston",
        state: "BA",
        zipCode: "23505",
    },
    {
        firstName: "Nicholas",
        lastName: "Runolfsdottir",
        startDate: "10/13/1990",
        department: "Marketing",
        dateOfBirth: "10/21/1970",
        street: "153 Ellsworth Summit Ellsworth Summit",
        city: "New Aliyaview",
        state: "NA",
        zipCode: "99110",
    },
    {
        firstName: "Glenna",
        lastName: "Reichert",
        startDate: "11/30/1990",
        department: "Finance",
        dateOfBirth: "10/21/1960",
        street: "145 brad",
        city: "Bartholomebury",
        state: "BA",
        zipCode: "76495",
    },
    {
        firstName: "Clementina",
        lastName: "DuBuque",
        startDate: "05/01/2020",
        department: "Finance",
        dateOfBirth: "12/21/1999",
        street: "143 brad",
        city: "Boston",
        state: "BA",
        zipCode: "31428",
    },
    {
        firstName: "Ken",
        lastName: "Smith",
        startDate: "10/13/2000",
        department: "Sales",
        dateOfBirth: "10/21/1980",
        street: "153 Street brad franck",
        city: "New York",
        state: "NY",
        zipCode: "99110",
    },
    {
        firstName: "Enzo",
        lastName: "Kmithm",
        startDate: "11/30/2020",
        department: "Finance",
        dateOfBirth: "10/21/2001",
        street: "145 brad",
        city: "Roscoeview",
        state: "MA",
        zipCode: "11110",
    },
    {
        firstName: "Szo",
        lastName: "Lmithm",
        startDate: "05/09/2023",
        department: "Marketing",
        dateOfBirth: "10/21/1999",
        street: "143 brad",
        city: "Boston",
        state: "QA",
        zipCode: "21110",
    },
    {
        firstName: "Leanne ",
        lastName: "Graham",
        startDate: "10/13/2001",
        department: "Engineering",
        dateOfBirth: "10/21/1950",
        street: "153 Street brad franck brad franck",
        city: "Gwenborough",
        state: "NY",
        zipCode: "92998",
    },
    {
        firstName: "Ervin",
        lastName: "Howell",
        startDate: "11/30/2020",
        department: "Finance",
        dateOfBirth: "10/21/2001",
        street: "245 Victor Plains",
        city: "Wisokyburgh",
        state: "LA",
        zipCode: "90566",
    },
    {
        firstName: "Clementine",
        lastName: "Bauch",
        startDate: "05/09/2023",
        department: "Lnance",
        dateOfBirth: "10/21/1999",
        street: "43 Douglas Extension",
        city: "McKenziehaven",
        state: "MK",
        zipCode: "59590",
    },
    {
        firstName: "Patricia",
        lastName: "Lebsack",
        startDate: "10/13/2000",
        department: "Engineering",
        dateOfBirth: "10/29/2000",
        street: "153 Street brad franck ",
        city: "New York",
        state: "NY",
        zipCode: "99110",
    },
    {
        firstName: "Enzo",
        lastName: "Kmithm",
        startDate: "11/30/2020",
        department: "Finance",
        dateOfBirth: "10/21/2001",
        street: "145 brad",
        city: "Roscoeview",
        state: "MA",
        zipCode: "11110",
    },
    {
        firstName: "Szo",
        lastName: "Lmithm",
        startDate: "05/09/2023",
        department: "Lnance",
        dateOfBirth: "10/21/1999",
        street: "143 brad",
        city: "Boston",
        state: "QA",
        zipCode: "21110",
    },
    {
        firstName: "Ken",
        lastName: "Smith",
        startDate: "10/13/2000",
        department: "Engineering",
        dateOfBirth: "10/21/2000",
        street: "153 Street brad franck ",
        city: "South Elvis",
        state: "NY",
        zipCode: "99110",
    },
    {
        firstName: "Chelsey",
        lastName: "Dietrich",
        startDate: "11/30/2022",
        department: "Human Resources",
        dateOfBirth: "10/21/1969",
        street: "145 Apt. 69d",
        city: "Roscoeview",
        state: "NA",
        zipCode: "33263",
    },
    {
        firstName: "Kurtis",
        lastName: "Weissnat",
        startDate: "05/09/2020",
        department: "Sales",
        dateOfBirth: "10/21/1961",
        street: "14 Norberto Crossing",
        city: "Boston",
        state: "BA",
        zipCode: "23505",
    },
    {
        firstName: "Nicholas",
        lastName: "Runolfsdottir",
        startDate: "10/13/1990",
        department: "Marketing",
        dateOfBirth: "10/21/1970",
        street: "153 Ellsworth Summit Ellsworth Summit",
        city: "New Aliyaview",
        state: "NA",
        zipCode: "99110",
    },
    {
        firstName: "Glenna",
        lastName: "Reichert",
        startDate: "11/30/1990",
        department: "Finance",
        dateOfBirth: "10/21/1960",
        street: "145 brad",
        city: "Bartholomebury",
        state: "BA",
        zipCode: "76495",
    },
    {
        firstName: "Clementina",
        lastName: "DuBuque",
        startDate: "05/01/2020",
        department: "Finance",
        dateOfBirth: "12/21/1999",
        street: "143 brad",
        city: "Boston",
        state: "BA",
        zipCode: "31428",
    },
    {
        firstName: "Ken",
        lastName: "Smith",
        startDate: "10/13/2000",
        department: "Engineering",
        dateOfBirth: "10/21/2000",
        street: "153 Street brad franck ",
        city: "New York",
        state: "NY",
        zipCode: "99110",
    },
    {
        firstName: "Enzo",
        lastName: "Kmithm",
        startDate: "11/30/2020",
        department: "Finance",
        dateOfBirth: "10/21/2001",
        street: "145 brad",
        city: "Roscoeview",
        state: "MA",
        zipCode: "11110",
    },
    {
        firstName: "Szo",
        lastName: "Lmithm",
        startDate: "05/09/2023",
        department: "Lnance",
        dateOfBirth: "10/21/1999",
        street: "143 brad",
        city: "Boston",
        state: "QA",
        zipCode: "21110",
    },
    {
        firstName: "Ken",
        lastName: "Smith",
        startDate: "10/13/2000",
        department: "Engineering",
        dateOfBirth: "10/21/2000",
        street: "153 Street brad franck ",
        city: "New York",
        state: "NY",
        zipCode: "99110",
    },
    {
        firstName: "Enzo",
        lastName: "Kmithm",
        startDate: "11/30/2020",
        department: "Finance",
        dateOfBirth: "10/21/2001",
        street: "145 brad",
        city: "Roscoeview",
        state: "MA",
        zipCode: "11110",
    },
    {
        firstName: "Szo",
        lastName: "Lmithm",
        startDate: "05/09/2023",
        department: "Lnance",
        dateOfBirth: "10/21/1999",
        street: "143 brad",
        city: "Boston",
        state: "QA",
        zipCode: "21110",
    },
    {
        firstName: "Ken",
        lastName: "Smith",
        startDate: "10/13/2000",
        department: "Engineering",
        dateOfBirth: "10/21/2000",
        street: "153 Street brad franck ",
        city: "New York",
        state: "NY",
        zipCode: "99110",
    },
    {
        firstName: "Enzo",
        lastName: "Kmithm",
        startDate: "11/30/2020",
        department: "Finance",
        dateOfBirth: "10/21/2001",
        street: "145 brad",
        city: "Roscoeview",
        state: "MA",
        zipCode: "11110",
    },
];
