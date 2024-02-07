import "./index.css";

import Header from "../Header";
import Footer from "../Footer";
import Map from "../Images/WorldMap.png";

const Countries = [
  {
    Cname: "Japan",
  },
  {
    Cname: "South Korea",
  },
  {
    Cname: "China",
  },
  {
    Cname: "Singapore",
  },
  {
    Cname: "India",
  },
  {
    Cname: "Hong Kong",
  },
  {
    Cname: "Malaysia",
  },
  {
    Cname: "Thailand",
  },
  {
    Cname: "Phillippines",
  },
  {
    Cname: "Indonesia",
  },
  {
    Cname: "Vietnam",
  },
  {
    Cname: "Taiwan",
  },
  {
    Cname: "UAE",
  },
  {
    Cname: "Saudi Arabia",
  },
  {
    Cname: "Turkey",
  },
  {
    Cname: "Kazakhstan",
  },
  {
    Cname: "Uzbekistan",
  },
  {
    Cname: "Israel",
  },
];

function Sitemap() {
  return (
    <div className="main-sitemap-container">
      <div className="sitemap-container">
        <Header />

        <div className="sitemap-content-container">
          <div className="sitemap-heading-container">
            <h1 className="sitemap-heading">
              Ultrapro in <span className="span-number">36+</span> Countries{" "}
            </h1>
          </div>

          <div className="sitemap-image-container">
            <img src={Map} className="map-image" />
          </div>

          <div className="main-regions-container">
            <h1 className="asian-heading">Asian Countries</h1>

            <div className="regions-container">
              {Countries.map((eachItem) => (
                <p className="cname">{eachItem.Cname}</p>
              ))}
            </div>
          </div>

          <div className="main-regions-container">
            <div className="regions-container">
              {Countries.map((eachItem) => (
                <p className="cname">{eachItem.Cname}</p>
              ))}
            </div>

            <h1 className="asian-heading">European Countries</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sitemap;
