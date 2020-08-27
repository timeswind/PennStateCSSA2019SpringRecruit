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
        q: "能介绍一下你们的电竞赛事吗？",
        a: "我们在每学年都会举办一次电竞大赛，游戏的种类也在时间的演变下丰富起来：王者荣耀（国服）/英雄联盟（美服）/云顶之翼/吃鸡比赛（国服）等。当然，在种种耀眼赛事的背后，少不了我们每一个策划人员和在场工作者的辛苦付出。当然，更多的还需要我们去探索，我们也需要你的奇思妙想。"
    },
    {
        q:  "除了日常的社团的工作，还有什么需要干的？",
        a:  "在偌大的集体中，你可以去大胆和其他部门的朋友们交流，积极参与集体举办的活动。当然，在我们的部门内部，还需要你在业余抽出时间来参加我们的部门会议和内部团建。更多地，我们希望你拥有强大的团队亲和力和凝聚力。"
            }
]
class Graduate extends Component {
    name = "网络部"
    name_en = "Web Team Department"
    componentDidMount() {
        document.title = "网络部|趁年轻，让我们一起为梦想窒息。|CSSA2020";
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
            title: '网络部|趁年轻，让我们一起为梦想窒息。|CSSA2020',
            desc: "我们主要负责网页论坛的及时更新与维护，在每学期为其他部门的相关活动提供相应的技术支持，以及在每学年举办电竞相关赛事。网页论坛开发，论坛维护，文案供稿，UI设计，交互体验，设计管理与活动策划等。。",
            link: "https://join.cssapsu.cn/d/webteam",
            imgUrl: "https://join.cssapsu.cn/images/cssa_logo_dark_inverse_w300.png",
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
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>Penn State CSSA 2020 招新</span>

                                <span style={{ display: "block", textAlign: "left" }}>趁年轻，</span>让我们一起为梦想窒息。
                            </h1>
                        </div>
                    </section>
                    <section className="section section-department-inverse">
                        <div className="group">
                            <img className="department-img" src="/images/网络部/网络部1.png" />
                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                                <span style={{ display: "block", letterSpacing: "-1px", marginBottom: "8px" , textAlign: "left"}}>和我们一起:</span>
                                <span style={{ display: "block", fontSize: "20pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" , textAlign: "center"}}>从实践中成长</span>
                                <span style={{ display: "block", fontSize: "20pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" , textAlign: "center"}}>从自办赛事中收获成功的喜悦</span>
                                <span style={{ display: "block", fontSize: "20pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "20px" , textAlign: "center"}}>从团队合作中收获最纯真的友谊</span>
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
                        
                        <div className="group">
                        <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                                <span style={{ display: "block", textAlign: "left" }}>我们需要：</span>
                            </h1>
                        <p className="department-p-1">
                                ·对推文和海报创作有绝对灵感的你
                                
                            </p>
                        <p className="department-p-1">
                                ·对网站和计算机有独到简洁的你
                                
                            </p>
                        <p className="department-p-1">
                                ·对活动策划有充分热情的你
                                
                            </p>                        
                        <p className="department-p-1">
                                ·当然，拥有强大技能的同时，别忘了拥有一颗踏实工作与集体荣誉感的心。
                                
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
