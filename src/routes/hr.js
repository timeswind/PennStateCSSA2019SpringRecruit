import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import wx from 'weixin-js-sdk';

const qAndA = [
    {
        q: "沟通是学习一门艺术，监督是追求一种秩序。",
        a: ""
    }
]
class HR extends Component {
    name = "HR 人力资源"
    name_en = "Human Resource"
    componentDidMount() {
        document.title = "HR|做事不循私，交流需高效。|CSSA2020";
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
            title: 'HR|做事不循私，交流需高效。|CSSA2020',
            desc: "沟通是学习一门艺术，监督是追求一种秩序。",
            link: "https://join.cssapsu.cn/d/hr",
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
                                <span style={{ display: "block", textAlign: "left" }}>做事不循私，</span>交流需高效。
                            </h1>
                        </div>
                    </section>
                    <section className="section section-department-inverse">
                        <div className="group">
                            <div className="department-img-wrapper">
                                <img className="department-img" src="/images/hr/1.jpg" />
                            </div>
                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>成为HR</span>
                                <span style={{ display: "block", textAlign: "left" }}>你将与我们一起</span>

                            </h1>
                            <ul>
                            <li className="department-p-1-no-indent" style ={{marginBottom: "8px"}}>
                                •准备一年两次的招新活动，为CSSA纳入新的人才。
                            </li>
                            <li className="department-p-1-no-indent" style ={{marginBottom: "8px"}}>
                                •策划新生活动，帮助新生快速熟悉校园。
                            </li>
                            <li className="department-p-1-no-indent" style ={{marginBottom: "8px"}}>
                                •举办新生接机活动，给异乡的同胞们熟悉的温暖。
                            </li>
                            <li className="department-p-1-no-indent" style ={{marginBottom: "8px"}}>
                                •构思和举办团建和年会活动，促进部门友谊。
                            </li>
                            <li className="department-p-1-no-indent" style ={{marginBottom: "8px"}}>
                                •学会做会议记录，预算管理，记录考勤和活动策划。
                            </li>
                            <li className="department-p-1-no-indent" style ={{marginBottom: "8px"}}>
                                •必要时调解内部纠纷，保持内部团结和秩序统一。
                            </li>
                            <li className="department-p-1-no-indent" style ={{marginBottom: "8px"}}>
                                •锻炼和实践交流技巧，提前为职场生涯打下基础。
                            </li>
                            <li className="department-p-1-no-indent" style ={{marginBottom: "8px"}}>
                                •策划和执行换届选举，选出新一代领导力。
                            </li>
                            </ul>
                            <div className="department-img-wrapper">
                                <img className="department-img" src="/images/hr/2.jpg" />
                            </div>
                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                                
                                <span style={{ display: "block", textAlign: "left" }}>如果你</span>
                            </h1>
                            <ul>
                            <li className="department-p-1-no-indent" style ={{marginBottom: "8px"}}>
                                •热爱组织活动。
                            </li>
                            <li className="department-p-1-no-indent" style ={{marginBottom: "8px"}}>
                                •有良好的时间观念和时间管理能力。
                            </li>
                            <li className="department-p-1-no-indent" style ={{marginBottom: "8px"}}>
                                •喜欢研究心理。
                            </li>
                            <li className="department-p-1-no-indent" style ={{marginBottom: "8px"}}>
                                •想提升人际交往的能力。
                            </li>
                            <li className="department-p-1-no-indent" style ={{marginBottom: "8px"}}>
                                •想要接触不同类型的工作。
                            </li>
                            <li className="department-p-1-no-indent" style ={{marginBottom: "8px"}}>
                                •希望得到pre-work experience。
                            </li>
                            </ul>
                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                                
                                <span style={{ display: "block", textAlign: "left" }}>那你就是最适合HR的人选，期待你的加入，也期待我们的大学故事里有你的痕迹。</span>
                                <span style={{ display: "block", textAlign: "left" }}>因为有了你的灵魂，让这原本风尘仆仆的旅程，变得令人心驰神往。</span>
                            </h1>
                            
                            <div className="department-img-wrapper">
                                <img className="department-img" src="/images/hr/3.jpg" />
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

                        </div>
                    </section>
                </div>
                <Footer></Footer>
            </div>


        );
    }
}

export default HR;
