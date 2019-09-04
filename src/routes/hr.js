import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import wx from 'weixin-js-sdk';

const qAndA = [
    {
        q: "我们是CSSA-HR，我们是CSSA最坚实的后盾，最优秀的守护者。英雄本无名，功绩在人心。欢迎闪耀的你。",
        a: ""
    }
]
class HR extends Component {
    name = "HR 人力资源"
    name_en = "Human Resource"
    componentDidMount() {
        document.title = "HR|立信于心，尽责至善|CSSA2019";
        window.scrollTo(0, 0);

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
            title: 'HR|立信于心，尽责至善|CSSA2019',
            desc: "我们是CSSA-HR，我们是CSSA最坚实的后盾，最优秀的守护者。英雄本无名，功绩在人心。欢迎闪耀的你。",
            link: "https://2019.cssapsu.cn/d/hr",
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
            <div>
                <div className="department-detail">
                    <div className="department_head">
                        <Link to="/departments" className="btn--primary btn-round">返回</Link>
                    </div>
                    <section className="section section-department">
                        <div className="group">
                            <h1 className="h1 " style={{ display: "block", textAlign: "left" }}>
                                <span className="department-text-white-underline" style={{ display: "inline", textAlign: "left" }}>{this.name}</span>
                            </h1>
                            <h1 className="h1" style={{ display: "block", textAlign: "left" }}>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>Penn State CSSA 2019 招新</span>
                                <span style={{ display: "block", textAlign: "left" }}>只木易折，众筷难摧。</span>立信于心，尽责至善。
                            </h1>
                        </div>
                    </section>
                    <section className="section section-department-inverse">
                        <div className="group">
                            <div className="department-img-wrapper">
                                <img className="department-img" src="/images/hr/HR2_w1000.jpg" />
                            </div>
                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>成为HR</span>
                                <span style={{ display: "block", textAlign: "left" }}>你将与我们一起</span>

                            </h1>
                            <p className="department-p-1-no-indent">
                                计划一年两次的火热招新，为CSSA纳入新的血液，让CSSA保持青春活力。筹划一年一度的换届选举，确保主席团和部长们顺利的选拔出下一任德才兼备的领导者，为CSSA的未来保驾护航。
                            </p>
                            <p className="department-p-1-no-indent">
                                举办精彩绝伦的内部联欢和Banquet，让CSSA的成员可以舒缓工作压力，增加部门之间联络感情的机会。使得CSSA的成员们惺惺相惜，同舟共济。
                            </p>
                            <div className="department-img-wrapper">
                                <img className="department-img" src="/images/hr/HR4.jpg" />
                            </div>
                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>身为HR</span>
                                <span style={{ display: "block", textAlign: "left" }}>我们将一同</span>
                            </h1>
                            <p className="department-p-1-no-indent">
                                策划丰富多彩的迎新活动，例如新生接机，让新一届的PSU留学生们感受到异国他乡的温暖和CSSA的热情。再例如新生picnic，让更多的学弟学妹们相互了解，早日结识志同道合的朋友。
                            </p>
                            <p className="department-p-1-no-indent">
                                身为HR，在锻炼自己组织和社交能力的同时也会享受到来自大集体的温暖。如果你善良，细心，拥有较强的组织能力且想要为CSSA贡献出自己的一份力。那么请相信自己，投出这份心意。相信CSSA-HR会给你带来远远不止历练自己的意义。
                            </p>
                            <div className="department-img-wrapper">
                                <img className="department-img" src="/images/hr/HR8_w1000.jpg" />
                            </div>
                        </div>
                    </section>
                    <section className="section section-department-q-and-a">

                        <div className="group">
                            {qAndA.map((data, i) =>
                                <div key={i}>

                                    <h1 className="department-question" style={{ display: "block", textAlign: "left" }}>
                                        {data.q}
                                    </h1>
                                    <p className="department-answer">
                                        {data.a}
                                    </p>
                                </div>
                            )}
                            <div className="department-img-wrapper">
                                <img className="department-img" src="/images/hr/HR3.jpg" />
                            </div>
                        </div>
                    </section>
                </div>
                <Footer></Footer>
            </div>


        );
    }
}

export default HR;
