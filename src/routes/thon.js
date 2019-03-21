import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
import wx from 'weixin-js-sdk';

const qAndA = [
    {
        q: "如果你",
        a: "热爱分享"
    },
    {
        q: false,
        a: "擅长团队合作"
    },
    {q: false, a: "愿意接受各种挑战"},
    {q: false, a: "拥有一定文案或排版基础"},
    {q: false, a: "喜欢头脑风暴/策划/设计/宣传"},
    {q: false, a: "期待参与Dance Marathon和5K等活动"},
    {q: false, a: "希望为癌症儿童带来一份力量"},
    {
        q: "WE WANT YOU!",
        a: ""
    }
]
class THON extends Component {
    name = "THON"
    componentDidMount() {
        document.title = "THON| RA!SE HOPE,ENRICH L!FE |CSSA2019";
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
            title: 'THON| RA!SE HOPE,ENRICH L!FE |CSSA2019',
            desc: "作为全球最大的大学生慈善组织，Penn State THON ，每年都举办许多极具影响力的活动而为癌症儿童募捐。 下面跟我们一起回顾一下今年最大型的活动THON WKND的精彩瞬间吧",
            link: "https://2019.cssapsu.cn/d/thon",
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

                                <span style={{ display: "block", textAlign: "left" }}>Volunteer不够劲儿？</span>正式部员等着你！
                            </h1>
                        </div>
                    </section>
                    <section className="section section-department-inverse" style={{ paddingBottom: "32px" }}>
                        <div className="group">
                            <h1 className="h1" style={{ display: "block", textAlign: "left", margin: "0 0 16px 0", color: "#ee5050" }}>
                                <span style={{ display: "block", textAlign: "left" }}>#ForTheKids</span>
                            </h1>

                            <p className="department-p-1-no-indent" style={{ fontWeight: "bold", marginBottom: "32px" }}>
                                作为全球最大的大学生慈善组织，Penn State THON ，每年都举办许多极具影响力的活动而为癌症儿童募捐。 下面跟我们一起回顾一下今年最大型的活动THON WKND的精彩瞬间吧
                            </p>

                            <div className="department-img-wrapper">
                                <iframe style={{ width: "100%" }} src="https://www.youtube.com/embed/QFrc0ZLm0TM" title="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px", color: "#ee5050" }}>
                                <span style={{ display: "block", textAlign: "left" }}>CSSA Benefitting THON</span>
                            </h1>
                            <div className="department-img-wrapper">
                                <img className="department-img" src="/images/thon/thon_4.jpg" />
                            </div>
                            <p className="department-p-1-no-indent">
                                作为这个跨世纪的活动不可或缺的组织之一 ，CSSA Benefitting THON 积极参与并致力于<span className="highlight">宣传THON文化，传递慈善正能量。</span>我们号召PSU华人群体密切关注癌症儿童，致力于募集善款，为他们带去爱和希望。 同时为喜爱和关注CSSA的你带来美食，福利和各种小惊喜！
                            </p>


                        </div>
                    </section>
                    <section className="section section-department-q-and-a">

                        <div className="group">
                            {qAndA.map((data, i) =>
                                <div key={i}>
                                    {!!data.q &&
                                        (<h1 className="department-question" style={{ display: "block", textAlign: "left" }}>
                                            {data.q}
                                        </h1>)
                                    }
                                    {!!data.a &&
                                        (<p className="department-answer">
                                            {data.a}
                                        </p>)
                                    }


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

export default THON;
