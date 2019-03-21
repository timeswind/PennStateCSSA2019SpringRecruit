import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
import wx from 'weixin-js-sdk';

const qAndA = [
    {
        q: "不在Smeal还能申请嘛？",
        a: "没关系，当然可以。我们不需要你拥有专业知识，只要你态度认真，积极负责，我们可以手把手教会你完成所有的工作。"
    },
    {
        q: "平时主要的工作内容？",
        a: "作为在财务部的部员，平时主要负责对应部门的发票审核以及审计预算。"
    },
    {
        q: "PSU第一财团的我们紧紧掌握经济的命脉",
        a: ""
    },
    {
        q: "无所不能的妹子们和汉子们",
        a: ""
    },
    {
        q: "财务部等着你们！",
        a: ""
    }
]

class Treasury extends Component {
    name = "财务部"
    name_en = "Treasury"

    componentDidMount() {
        document.title = "财务部|PSU第一财团|CSSA2019";
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
            title: '财务部|PSU第一财团|CSSA2019',
            desc: "PSU第一财团的我们紧紧掌握经济的命脉， 无所不能的妹子们和汉子们 财务部等着你们！",
            link: "https://2019.cssapsu.cn/d/treasury",
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

                                <span style={{ display: "block", textAlign: "left" }}>Money与发票, </span>都要Hold住。
                            </h1>
                        </div>
                    </section>
                    <section className="section section-department-inverse">
                        <div className="group">
                            {/* <img className="department-img" src="/images/hr/HR2_w1000.jpg" /> */}

                            <p className="department-p-1">
                                CSSA的经济枢纽，掌控着CSSA平时所有活动的经济来源。
    作为大财主的我们平时主要负责财务相关的所有事务，
    入账报账转账、物资统计、审计各部门活动预算、发票核实以及完成财务报表等等

                            </p>
                            <div className="department-img-wrapper">
                                <img className="department-img" src="/images/财务/财务1_w1000.jpg" />
                            </div>
                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>作为CSSA和ASA的桥梁与窗口</span>

                                <span style={{ display: "block", textAlign: "left" }}>我们希望你</span>
                            </h1>
                            <li>认真负责，做事仔细</li>
                            <li>积极踊跃，善于沟通</li>
                            <li>能够正确并及时地核对预算报表，记录经费流动和整理活动发票</li>
                            <li>准时参加部内会议并积极参加其他各部门活动</li>
                            <li>最好拥有撰写推送经历</li>
                        </div>
                    </section>
                    <section className="section section-department-q-and-a">

                        <div className="group">
                            <h1 className="department-q-and-a">财务部 部门 Q&A:</h1>
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

export default Treasury;
