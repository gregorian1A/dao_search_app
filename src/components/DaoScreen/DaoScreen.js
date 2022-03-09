import "./DaoScreen.css";
import { DataContext } from "../../context";
import { useContext, useState } from "react";
import { data } from "../../data";
import { Link } from "react-router-dom";

const DaoScreen = () => {
  const [state] = useContext(DataContext);

  const [arr, setArr] = useState(state.dao);
  const [input, setInput] = useState(state.searchTerm);
  const [name, setName] = useState(true);
  const [tvl, setTvl] = useState(true);
  const [blockchain, setBlockchain] = useState(true);
  const [date, setDate] = useState(true);
  const [modal, setModal] = useState(false);

  const [category, setCategory] = useState("");

  const sortedDaoArray = arr.filter((item) => {
    if (category === "Service") {
      return item.category === "Service";
    } else if (category === "Protocol") {
      return item.category === "Protocol";
    } else if (category === "Grant") {
      return item.category === "Grant";
    }
    return item;
  });

  const tableStyle = {
    img: {
      width: "40px",
    },
    table: {
      borderCollapse: "collapse",
    },
    tableCell: {
      border: "1px solid #999",
      margin: 0,
      width: "max-content",
      minWidth: "150px",
      textAlign: "center",
    },
  };

  const total = sortedDaoArray
    .map((item) => Number(item.TVL))
    .reduce((acc, curr) => acc + curr, 0);

  const numberWithCommas = (x) => {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  };

  const daotable = sortedDaoArray
    .filter((item) => {
      if (!input) return true;
      if (item.full_name.toLowerCase().includes(input)) return true;
    })
    .map((item) => (
      <tr key={item.id}>
        <td style={tableStyle.tableCell}>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/${item.id}`}
          >
            <img style={tableStyle.img} src={item.logo_link} alt="logo" />
          </Link>
        </td>

        <td style={tableStyle.tableCell}>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/${item.id}`}
          >
            {item.full_name}
          </Link>
        </td>
        <td style={tableStyle.tableCell}>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/${item.id}`}
          >
            {item.blockchain}
          </Link>
        </td>
        <td style={tableStyle.tableCell}>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/${item.id}`}
          >
            ${numberWithCommas(item.TVL)}
          </Link>
        </td>
        <td style={tableStyle.tableCell}>{item.date_created}</td>
        <td style={tableStyle.tableCell}>{item.date_founded}</td>
      </tr>
    ));

  const nameSorter = () => {
    const sortByName = name
      ? sortedDaoArray.sort((a, b) =>
          a.full_name.toString().localeCompare(b.full_name.toString())
        )
      : sortedDaoArray.sort((a, b) =>
          b.full_name.toString().localeCompare(a.full_name.toString())
        );

    setArr(sortByName);
    setName(!name);
  };

  const tvlSorter = () => {
    const sortByTvl = tvl
      ? sortedDaoArray.sort((a, b) => a.TVL - b.TVL)
      : sortedDaoArray.sort((a, b) => b.TVL - a.TVL);

    setArr(sortByTvl);
    setTvl(!tvl);
  };

  const blockchainSorter = () => {
    const sortByBlock = blockchain
      ? sortedDaoArray.sort((a, b) =>
          a.blockchain.toString().localeCompare(b.blockchain.toString())
        )
      : sortedDaoArray.sort((a, b) =>
          b.blockchain.toString().localeCompare(a.blockchain.toString())
        );

    setArr(sortByBlock);
    setBlockchain(!blockchain);
  };

  const dateSorter = () => {
    const sortByDate = date
      ? sortedDaoArray.sort((a, b) =>
          a.date_created.toString().localeCompare(b.date_created.toString())
        )
      : sortedDaoArray.sort((a, b) =>
          b.date_created.toString().localeCompare(a.date_created.toString())
        );

    setArr(sortByDate);
    setDate(!date);
  };

  return (
    <>
      <div className="daoscreen" style={{ display: !modal ? "block" : "none" }}>
        <nav className="navbarr">
          <Link style={{ textDecoration: "none" }} to="/">
            <h2 className="logo">
              DAOfind.com <i className="fa fa-grav"></i>
            </h2>
          </Link>
          <input
            type="text"
            placeholder="Search DAO"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="searchbarr"
          />
          <button
            onClick={() => setModal(true)}
            style={{ cursor: "pointer" }}
            className="connect-wallett"
          >
            Connect Wallet
          </button>
        </nav>
        <div className="daodisplaygrid">
          <div className="screen_card">
            <h3 className="screen_str">
              Number of DAOs: <br />
              <span className="tvl_total">{sortedDaoArray.length}</span>
            </h3>
            <img
              src="https://thumbs.dreamstime.com/b/graph-progress-21522283.jpg"
              alt="indicator"
            />
          </div>
          <div className="screen_card">
            <h3 className="screen_str">
              TVL TOTAL: <br />
              <span className="tvl_total">${numberWithCommas(total)}</span>
            </h3>
            <img
              src="https://thumbs.dreamstime.com/b/graph-progress-21522283.jpg"
              alt="indicator"
            />
          </div>
        </div>
        <div className="daogrid">
          <div className="btn_list">
            <button
              onClick={() => {
                setCategory("");
                setArr(data);
              }}
            >
              All
            </button>
            <button onClick={() => setCategory("Service")}>Service</button>
            <button onClick={() => setCategory("Protocol")}>Protocol</button>
            <button onClick={() => setCategory("Grant")}>Grant</button>
          </div>
          {/* <ul class="menu cf">
            <li>
              <a href="">
                Menu item <i className="fa fa-caret-down"></i>
              </a>
              <ul class="submenu">
                <li>
                  <p>Website</p>
                </li>
                <li>
                  <p>Reveue streams</p>
                </li>
                <li>
                  <p>Headquarters</p>
                </li>
              </ul>
            </li>
          </ul> */}
        </div>
        <div className="resize">
          <table className="daotable" style={tableStyle.table}>
            <thead>
              <tr>
                <th style={tableStyle.tableCell}>Logo</th>
                <th onClick={nameSorter} style={tableStyle.tableCell}>
                  Name
                </th>
                <th onClick={blockchainSorter} style={tableStyle.tableCell}>
                  Blockchain
                </th>
                <th onClick={tvlSorter} style={tableStyle.tableCell}>
                  TVL
                </th>
                <th onClick={dateSorter} style={tableStyle.tableCell}>
                  Date Created
                </th>
                <th style={tableStyle.tableCell}>Date Founded</th>
              </tr>
            </thead>
            <tbody>{daotable}</tbody>
          </table>
        </div>
      </div>
      <div
        className="modal-screen"
        style={{ display: modal ? "block" : "none" }}
      >
        <div className="modal">
          <div className="flex-header">
            <p> </p>
            <h1>DAO wallet</h1>
            <button onClick={() => setModal(false)} className="wallet">
              X
            </button>
          </div>

          <h2>Under Construction</h2>
        </div>
      </div>
    </>
  );
};

export default DaoScreen;

//https://thumbs.dreamstime.com/b/graph-progress-21522283.jpg
//https://cdn3.iconfinder.com/data/icons/finance-84/1024/chart2-128.png
//
//
