import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
import wx from 'weixin-js-sdk';

const qAndA = [
    {
        q: "我们有热情，有想法，有态度",
        a: ""
    },
    {
        q: "如果你和我们有同样的感受，那就加入我们吧！",
        a: ""
    }
]

class IDD extends Component {
    name = "学术发展部"
    name_en = "Intellectual Development Department"

    componentDidMount() {
        document.title = "驱散迷茫 守护未来|学术部|CSSA2019";
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
            title: '驱散迷茫 守护未来|学术部|CSSA2019',
            desc: "感受过曾是新生的难处，想要帮助新生顺利地适应大学生活;关注校园资讯，了解校园历史;想要跟更多的人分享学术资讯和个人经验...",
            link: "https://2019.cssapsu.cn/d/idd",
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
                                <span style={{ display: "block", textAlign: "left" }}>是求学路上的灯塔</span>照亮你前行的方向
                            </h1>
                        </div>
                    </section>
                    <section className="section section-department-inverse">
                        <div className="group">
                            <div className="department-img-wrapper" style={{margin: "0 0 64px 0"}}> 
                                <img className="department-img" src="/images/学术/学术1_w1000.jpg" />
                            </div>
                            <h1 className="h1" style={{ display: "block", textAlign: "left", margin: 0 }}>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>作为CSSA的学术标杆部门</span>
                                我们
                            </h1>
                            <p className="department-p-1-no-indent">
                                为新生排疑解忧［新生手册及新生见面会］
                            </p>
                            <p className="department-p-1-no-indent">
                                我们开展具有人生指导意义的讲座［求职、升学、专业选择讲座］
                            </p>
                            <p className="department-p-1-no-indent">
                                我们举行便于中国学生寻找组织的社团招新［Chinese Involvement Fair］
                            </p>
                            <p className="department-p-1-no-indent">
                                我们提供传播中国以及亚洲文化的渠道［Asian Culture Night］
                            </p>
                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                                <span style={{ display: "block", textAlign: "left" }}>如果你</span>
                            </h1>
                            <ul style={{ paddingLeft: 0, fontWeight: "normal", fontSize: "17.33px" }}>
                                <li>感受过曾是新生的难处，</li>
                                <li>想要帮助新生顺利地适应大学生活</li>
                                <li>&nbsp;</li>
                                <li>关注校园资讯，了解校园历史</li>
                                <li>想要跟更多的人分享学术资讯和个人经验</li>
                                <li>&nbsp;</li>
                                <li>出国之后，更深刻地为祖国感动骄傲，</li>
                                <li>更想在异国他乡分享祖国的社会发展、人文地理与中华文化。</li>
                            </ul>

                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>愿意学习新技能的心</span>

                                <span style={{ display: "block", textAlign: "left" }}>如果你有这些更好</span>
                            </h1>
                            <li>丰富的活动经验</li>
                            <li>文案编辑经验</li>
                            <li>排版软件使用经验和活动创意</li>
                            <li>善于与人沟通的能力或者一颗愿意学习新技能的心</li>
                        </div>
                    </section>
                    <section className="section section-department-q-and-a">

                        <div className="group">
                            {qAndA.map((data, i) =>
                                <div key={i}>

                                    <h1 className="department-question" style={{ display: "block", textAlign: "left", color: "#fff" }}>
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

export default IDD;
