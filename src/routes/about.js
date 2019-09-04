import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import TypeIt from 'typeit';
import wx from 'weixin-js-sdk';

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
        document.title = "Penn State CSSA 关于我们";

        new TypeIt("#animated_slogen_home", {
            speed: 100,
            startDelay: 300,
            strings: ["关于我们"],
            loop: false
        })
            .go();

        fetch("https://wechat.cssapsu.cn/jssdk/jssdksigniture", {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify({ "url": window.location.href })
        }).then(function (res) {
            return res.json()
        }).then(function (jsondata) {
            wx.config({
                debug: false,
                appId: jsondata.appId,
                timestamp: parseInt(jsondata.timestamp),
                nonceStr: jsondata.nonceStr,
                signature: jsondata.signature,
                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareQZone"]
            });
        });

        const shareData = {
            title: 'Penn State CSSA 关于我们',
            desc: "State College最大的华人组织",
            link: "https://2019.cssapsu.cn/",
            imgUrl: "https://2019.cssapsu.cn/images/cssa_logo_dark_inverse_w300.png",
            type: 'link'
        }

        wx.ready(function () {
            wx.onMenuShareAppMessage(shareData);
            wx.onMenuShareTimeline(shareData);
        });
    }

    render() {
        return (
            <div className="index">
                <section className="section section--first">
                    <div className="group">
                        <h1 className="h1" style={{ display: "block", textAlign: "left" }}>
                            <span className="type-effect" id="animated_slogen_home"></span>
                        </h1>
                        <p>宾夕法尼亚州立大学中国学生学者联合会（Penn State Chinese Student and Scholars Association），是宾夕法尼亚州立大学中国留学生和学者的联合组织， Penn State CSSA是Penn State University-UP所在城市State College最大的华人团体组织，也是在PSU唯一经中国领事馆认证的组织。</p>
                        <p>我们致力于传播中华文化，搭建中美沟通桥梁。服务于state college地区全体中国学生学者乃至全体华人，从丰富课余活动到助力学业与就业，多维度全方位的为学生的校园生活保驾护航。</p>

                        <p className="h h--whisper home-whisper--1" style={{ marginTop: "32px" }}><span>Penn State</span>杰出学生组织</p>

                        <h3 className="contact-footer__subtitle wm p s13 allcaps">微信公众号
                        <p className="h s28 wb mt0 mb0" style={{ color: "#fff" }}><a>留学在宾州州立CSSA</a></p>

                        </h3>
                        <h3 className="contact-footer__subtitle wm p s13 allcaps">Instagram
                        <p className="h s28 wb mt0 mb0" style={{ color: "#fff" }}><a>pennstatecssa</a></p>
                        </h3>

                    </div>
                </section>
                <Footer></Footer>
            </div>
        );
    }
}

export default About;
