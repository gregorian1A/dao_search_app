import './DaoPage.css'
import { data } from '../../data';
import { Link, useParams } from 'react-router-dom';

const DaoPage = () => {
    const {id} = useParams();
    const details = data.filter(item => item.id == id);

      const numberWithCommas = (x) => {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }

    return (
      <div className="daopage">
        {details.map((item) => (
          <div>
            <nav className="navbarrr">
              <Link to="/">
                <h2
                  className="logoo"
                >
                  DAOfind.com<i className="fa fa-grav"></i>
                </h2>
              </Link>
              <input
                type="text"
                placeholder="Search DAO"
                value=""
                className="searchbarrr"
                disabled
              />
              <Link to={`/${item.id}/edit`}>
                <button
                  style={{ padding: "10px 20px", cursor: "pointer" }}
                  className="connect-wallettt"
                >
                  Edit DAO
                </button>
              </Link>
            </nav>
            <div className="grid">
              <div className="left">
                <div className="left-flex">
                  <img src={item.logo_link} alt="logo" />
                  <h1 className="daoname">{item.full_name}</h1>
                </div>
                <span>Category:</span>
                <h1 className="span">{item.category}</h1>
                <span>Blockchain:</span>
                <h1 className="span">{item.blockchain}</h1>
                <span>Total Value Locked (TVL):</span>
                <h1 className="span"> ${numberWithCommas(item.TVL)}</h1>
                <span>Website:</span>
                <h1 className="span">{item.website}</h1>
                <span>Founded:</span>
                <h1 className="span">{item.date_founded}</h1>
                <span>Headqurarters:</span>
                <h1 className="span">{item.headquarters}</h1>
              </div>
              <div className="right">
                <span>Description:</span>
                <h1 className="description">{item.description}</h1>
                <h1 className="span">
                  {" "}
                  <span style={{fontWeight: '500'}}>Date Created:</span>
                  {item.date_created}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
}

export default DaoPage;