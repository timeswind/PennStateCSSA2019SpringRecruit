import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import wx from 'weixin-js-sdk';


const qAndA = [
    {
        q: "是不是拥有编程背景的同学才能进你们部？",
        a: "编程背景是我们看中的一个点，但不是唯一。电竞相关事项（活动策划，文案编写，以及技术支持）也需要有才华有热情的你。只要你对网络部相关事宜感兴趣，我们随时欢迎。"
    },
    {
        q: "作为技术负责人员，我需要拥有什么能力？",
        a: "Javascript, HTML, PHP 与Python是我们需要你在进部之后渐渐入门并掌握基本技能的几门语言。学过其他语言的同学也可以大胆申请，都学过java/c++等语言的人还怕什么Python呀。"
    },
    {
        q: "能介绍一下你们的电竞赛事吗？",
        a: "我们在每学年都会举办一次电竞大赛，游戏包括但不仅限于英雄联盟（美服）。我们还有正经的游戏主播会提供国内平台进行赛事直播。今年我们也会慢慢添加其他电竞游戏，所以我们需要你的奇思妙想。"
    }
]
class Graduate extends Component {
    name = "网络部"
    name_en = "Web Team Department"
    componentDidMount() {
        document.title = "网络部|初出茅庐到独当一面|CSSA2019";
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
            title: '网络部|初出茅庐到独当一面|CSSA2019',
            desc: "我们主要负责微信小程序和网页论坛的及时更新与维护，在每学期为其他部门提供相应的技术支持，以及在每学年举办电竞相关赛事。",
            link: "https://2019.cssapsu.cn/d/webteam",
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
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>Penn State CSSA 2019 春季招新</span>

                                <span style={{ display: "block", textAlign: "left" }}>初出茅庐到独当一面</span>我们陪你成长
                            </h1>
                        </div>
                    </section>
                    <section className="section section-department-inverse">
                        <div className="group">
                            <img className="department-img" src="/images/网络部/网络部1.png" />
                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>和我们一起从实践中成长</span>
                                <span style={{ display: "block", textAlign: "left" }}>我们，真的求贤若渴。</span>

                            </h1>

                            <p className="department-p-1">

                                我们主要负责<span className="hignlight">微信小程序</span>和<span className="hignlight">网页论坛</span>
                                的及时更新与维护，在每学期为其他部门提供相应的技术支持，以及在每学年举办电竞相关赛事。网页论坛与<span className="hignlight">微信小程序开发，论坛维护，文案供稿，UI设计，交互体验，数据管理，活动策划</span>以及与其他部门的实时沟通等。
                            </p>
                            <p className="department-p-1">
                                我们做的不仅仅只有程序，我们欢迎每一位对技术有兴趣、对电竞有热情、对设计有想法的朋友。
                            </p>
                        </div>
                    </section>
                    <section className="section section-department-q-and-a">

                        <div className="group">
                            <h1 className="department-q-and-a">网络部 部门 Q&A:</h1>
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

                        </div>
                    </section>
                </div>
                <Footer></Footer>
            </div>


        );
    }
}

export default Graduate;
