import cardImg1 from "./images/img1.jpg";
import cardImg2 from "./images/img2.jpg";
import cardImg3 from "./images/img3.jpg";
import cardImg4 from "./images/img4.jpg";
import cardImg5 from "./images/img5.jpg";

export default function List() {
  return (
    <section>
      <div className="box">
        <h3>Popular Character Rank List</h3>
        <div className="list">
          <div className="img-box">
            <img src={cardImg1} alt="" />
          </div>
          <div className="content">
            <h2 className="rank">
              <small>#</small>1
            </h2>
            <h4>Astra Nova</h4>
            <p>Digital Artist</p>
          </div>
        </div>
        <div className="list">
          <div className="img-box">
            <img src={cardImg2} alt="" />
          </div>
          <div className="content">
            <h2 className="rank">
              <small>#</small>2
            </h2>
            <h4>Nexus Prime</h4>
            <p>Photoshop Expert</p>
          </div>
        </div>
        <div className="list">
          <div className="img-box">
            <img src={cardImg3} alt="" />
          </div>
          <div className="content">
            <h2 className="rank">
              <small>#</small>3
            </h2>
            <h4>Cygnus Knight</h4>
            <p>Backend Developer</p>
          </div>
        </div>
        <div className="list">
          <div className="img-box">
            <img src={cardImg4} alt="" />
          </div>
          <div className="content">
            <h2 className="rank">
              <small>#</small>4
            </h2>
            <h4>Zenith Nexus</h4>
            <p>Illustrator Designer</p>
          </div>
        </div>
        <div className="list">
          <div className="img-box">
            <img src={cardImg5} alt="" />
          </div>
          <div className="content">
            <h2 className="rank">
              <small>#</small>5
            </h2>
            <h4>Luna Sentinel</h4>
            <p>Frontend Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
