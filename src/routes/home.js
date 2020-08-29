import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
import TypeIt from 'typeit';
import wx from 'weixin-js-sdk';

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    document.title = "校园很大，有你更精彩";

    new TypeIt("#animated_slogen_home", {
      speed: 100,
      startDelay: 300,
      strings: ["传播中国文化", "分享美好校园生活"],
      loop: false
    })
      .go();

    // fetch("https://wechat.cssapsu.cn/jssdk/jssdksigniture", {
    //   method: "POST",
    //   mode: 'cors',
    //   body: JSON.stringify({ "url": window.location.href })
    // }).then(function (res) {
    //   return res.json()
    // }).then(function (jsondata) {
    //   wx.config({
    //     debug: false,
    //     appId: jsondata.appId,
    //     timestamp: parseInt(jsondata.timestamp),
    //     nonceStr: jsondata.nonceStr,
    //     signature: jsondata.signature,
    //     jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareQZone"]
    //   });
    // });

    // const shareData = {
    //   title: '传播中国文化，美好校园生活|CSSA2020',
    //   desc: "传播中国文化，美好校园生活，Penn State CSSA 2020 秋季招新",
    //   link: "https://join.cssapsu.cn/",
    //   imgUrl: "https://join.cssapsu.cn/images/cssa_logo_dark_inverse_w300.png",
    //   type: 'link'
    // }

    // wx.ready(function () {
    //   wx.onMenuShareAppMessage(shareData);
    //   wx.onMenuShareTimeline(shareData);
    // });
  }

  render() {
    return (
      <div className="index">
        <section className="section section--first">
          <div className="group">
            <h1 className="h1" style={{ display: "block", textAlign: "left", height: "157px" }}>
              <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>Penn State CSSA 2020 秋季招新</span>
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
