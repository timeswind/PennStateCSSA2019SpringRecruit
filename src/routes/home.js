import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
import TypeIt from 'typeit';

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    document.title = "CSSA2019|校园很大，也很精彩";

    new TypeIt("#animated_slogen_home", {
      speed: 100,
      startDelay: 300,
      strings: ["有心", "每一步", "踏得更高"],
      loop: false
    })
    .go();
  }

  render() {
    return (
      <div className="index">
        <section className="section section--first">
          <div className="group">
            <h1 className="h1" style={{ display: "block", textAlign: "left", height: "157px" }}>
              <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>Penn State CSSA 2019 春季招新</span>
              {/* <span style={{ display: "block", textAlign: "left" }}>有心, </span>
            <span style={{ display: "block", textAlign: "left" }}>每一步, </span>
            踏得更高。 */}
              <span className="type-effect" id="animated_slogen_home"></span>

            </h1>
            <div className="home-project__airplan_wrapper">
              <div className="home-project__airplan" style={{ backgroundImage: "url(/images/飞机.png)" }}></div>
            </div>
            <Link to="/departments" className="btn--primary">查看部门</Link>
          </div>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
