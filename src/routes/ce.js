import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import wx from 'weixin-js-sdk';

const qAndA = [
    {
        q: "对专业有要求吗？",
        a: "没有，我们欢迎任何专业任何特长的你！"
    },
    {
        q: "需要我有很多组织活动的经历吗？",
        a: "只要你愿意学习，有责任心，相信优秀的你一定很快就可以handle各种tasks，成为厉害的活动策划师～当然啦，如果原先有过组织活动的经验，肯定是大大的加分项啦！"
    },
    {
        q: "组织活动会占用我很多课余时间吗？",
        a: "一台成功的晚会离不开大家的共同努力，每场晚会前是我们最忙碌的时候。不过当你发现自己亲手办了一场晚会之后，你会发现自己的工作是多么值得和有意义呀！"
    }
]
class CE extends Component {
    name = "活动策划部"
    name_en = "Culture Event Department"

    componentDidMount() {
        document.title = "活动部|置身幕后舞台由你掌控|CSSA2019";
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
            title: '活动部|置身幕后舞台由你掌控|CSSA2019',
            desc: "我们是CSSA面向全校，面向千万师生的门面部门，活动策划部。我们是策划举办每年中秋晚会和春节联欢晚会的幕后大佬。我们也是对全校性homecoming游行大典唯一中国团体的负责部门。",
            link: "https://2019.cssapsu.cn/d/ce",
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

                                <span style={{ display: "block", textAlign: "left" }}>我们不需要太阳</span>却忠爱繁星般闪烁的你
                            </h1>
                        </div>
                    </section>
                    <section className="section section-department-inverse">
                        <div className="group">
                            <div className="department-img-wrapper">
                                <img className="department-img" src="/images/活动/活动2.jpg" />
                                <span>元宵晚会 with Jason Chan</span>
                            </div>

                            <h1 className="h1" style={{ display: "block", textAlign: "left" }}>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>部门介绍</span>

                                <span style={{ display: "block", textAlign: "left" }}>置身幕后</span>掌控舞台
                            </h1>
                            <p className="department-p-1">
                                我们是CSSA面向全校，面向千万师生的门面部门，活动策划部。我们是策划举办每年中秋晚会和春节联欢晚会的幕后大佬。我们也是对全校性homecoming游行大典唯一中国团体的负责部门。
                            </p>
                            <p className="department-p-1">
                                如果你热爱生活，喜欢与各式各样的人打交道，想了解举办一场大型晚会背后的种种机密，同时也有一些组织活动的经验，一点新奇可爱的想法，一丝跃跃欲试的激情，那么，活动策划部绝对是你最好的选择～
                            </p>
                            <div className="department-img-wrapper" style={{ marginTop: "64px" }}>
                                <img className="department-img" src="/images/活动/活动3_w1000.jpg" />
                            </div>
                        </div>

                    </section>
                    <section className="section section-department-q-and-a">

                        <div className="group">
                            <h1 className="department-q-and-a">
                                活动部 部门 Q&A:
            </h1>
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
                                <img className="department-img" src="/images/活动/活动1.jpg" />
                            </div>
                        </div>
                    </section>
                </div>
                <Footer></Footer>
            </div>


        );
    }
}

export default CE;
