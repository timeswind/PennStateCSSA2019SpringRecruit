import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
import wx from 'weixin-js-sdk';

class Graduate extends Component {
    name = "研究生部"
    name_en = "Department of Graduate Students"
    componentDidMount() {
        document.title = "研究生部|职业发展与诗和远方|CSSA2020";
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
            title: '研究生部|职业发展与诗和远方|CSSA2020',
            desc: "研究生部是CSSA目前唯一一个以研究生博士生为主导，兼容本科生的部门。而职业，的确是每一个学生毕业后的归宿。",
            link: "https://join.cssapsu.cn/d/graduate",
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
                        <Link to="/departments" className="btn--primary btn-round btn-back-drop">返回</Link>
                    </div>
                    <section className="section section-department">
                        <div className="group">
                            <h1 className="h1 " style={{ display: "block", textAlign: "left" }}>
                                <span className="department-text-white-underline" style={{ display: "inline", textAlign: "left" }}>{this.name}</span>
                            </h1>

                            <h1 className="h1" style={{ display: "block", textAlign: "left" }}>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>Penn State CSSA 2020 招新</span>

                                <span style={{ display: "block", textAlign: "left" }}>飞鸟择良木</span>Brain is the new sexy
                            </h1>
                        </div>
                    </section>
                    <section className="section section-department-inverse">
                        <div className="group">
                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>了解我们</span>
                                <span style={{ display: "block", textAlign: "left" }}>WHO WE ARE</span>

                            </h1>
                                <li>研究生部是CSSA目前唯一一个以研究生博士生为主导，兼容本科生的部门。而职业，的确是每一个学生毕业后的归宿。在这里，在研究生部，或许你能找到答案。Resume Workshop, Mentorship Program, How to Build LinkedIn Profile，国内高校招聘会，Global 500公司招聘会，Tax Workshop, Health Insurance Info Session…</li>
                                <li>研究生部作为CSSA最年轻的部门，为你提供更多的创造空间来实施想法与建立机会。这是一个让你探索，让你锻炼，让你成长，更重要是能接触到不同资源和群体的部门。不论是研究生，博士生，访问学者还是本科生，只要你勇于尝试，有责任心，喜欢挑战性，对活动策划感兴趣，研究生部诚邀你加入我们的大家庭，一起Work Hard Play Hard！</li>
                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>Supply Chain Management/Economics</span>
                                <span style={{ display: "block", textAlign: "left" }}>黄颖慧 Daisy</span>

                            </h1>
                            <div className="department-img-wrapper" style={{margin: "0 0 32px 0"}}> 
                                <img className="department-img" src="/images/研究生/研究生2_w1000.jpg" />
                                <span style={{display: "block"}}>黄颖慧 Daisy（本科大三）</span>
                                <span>Supply Chain Management/Economics</span>
                            </div>
                
                            <p className="department-p-1-no-indent">
                            作为一个本科生，加入研究生部可以说是一个更好帮助日后过渡到研究生或者博士生的发展平台与机会。大到专业/求职/申请，小到生活中的点点日常，在研究生部，你都能找到方向。千万不要问研究生部能带给你什么，问你准备在研究生部得到什么。Come and get that BREAD！
                            </p>
                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>Psychology/Economics</span>
                                <span style={{ display: "block", textAlign: "left" }}>陈思佳 Michelle</span>

                            </h1>
                            
                            <div className="department-img-wrapper" style={{margin: "0 0 32px 0"}}> 
                                <img className="department-img" src="/images/研究生/研究生3_w1000.jpg" />
                                <span style={{display: "block"}}>陈思佳 Michelle（本科大三）</span>
                                <span>Psychology/Economics</span>
                            </div>
                            <p className="department-p-1-no-indent">
                            进入研究生部，更好的了解到了研究生的生活，锻炼了与人沟通以及举办活动的能力。作为一名本科生，在研究生部跟着学长学姐们学会如何更成熟的思考问题，解决问题。
                            </p>

                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>Maths/MAcc</span>
                                <span style={{ display: "block", textAlign: "left" }}>史峻昇 Allen</span>

                            </h1>
                            <div className="department-img-wrapper" style={{margin: "0 0 32px 0"}}> 
                                <img className="department-img" src="/images/研究生/研究生2_w640.jpg" />
                                <span style={{display: "block"}}>史峻昇 Allen（本科大三）</span>
                                <span>Maths/MAcc</span>
                            </div>
                            <p className="department-p-1-no-indent">
                            研究生部作为CSSA中唯一以研究生为核心，对接职业及学业发展规划的部门，是对学生会本科服务功能的延展，来到研究生部你会面临更多的挑战和机遇，得到前所未有的锻炼。同时，研究生部作为CSSA众多部门中唯二可以以学术水平著称的部门，不仅能够给你带来更多了解研究生生活的机会，而且可以为你本科后的归宿的决定带来积极的影响。在不久的将来，为更多的服务广大本科生及研究生群体，研究生部也将面领着转型，将职业规划纳入我们的工作内容当中，这也就意味着研究生部的工作能够为成员们提供更多职业性社交机会，充分锻炼培养领袖能力和团队合作能力。加入研究生部，还需要理由吗？
                            </p>
                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>博士生二年级 Energy Mineral Enigineering</span>
                                <span style={{ display: "block", textAlign: "left" }}>杨韵 Jasmine</span>

                            </h1>
                            <div className="department-img-wrapper" style={{margin: "0 0 32px 0"}}> 
                                <img className="department-img" src="/images/研究生/研究生4_w1000.jpg" />
                                <span style={{display: "block"}}>杨韵 Jasmine（博士生二年级）</span>
                                <span>Energy Mineral Enigineering</span>
                            </div>
                            <p className="department-p-1-no-indent">
                            我是在博士一年级的时候加入研究生部的。加入之前 我其实没想很多。只是单纯的想多认识一下朋友，感受除了两点一线之外的别的校园生活。我很幸运的通过面试进入了我们部门。在一年的部门活动之中，大家都很认真负责，我也学会了很多组织交流能力。我很感谢部门里的每一位同学团结合作。也会珍惜以后的工作。                            </p>
                        </div>
                    </section>
                </div>
                <Footer></Footer>
            </div>


        );
    }
}

export default Graduate;
