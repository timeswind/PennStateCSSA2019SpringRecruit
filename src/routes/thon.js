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
        document.title = "THON| RA!SE HOPE,ENRICH L!FE |CSSA2020";
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
            title: 'THON| RA!SE HOPE,ENRICH L!FE |CSSA2020',
            desc: "作为全球最大的大学生慈善组织，Penn State THON ，每年都举办许多极具影响力的活动而为癌症儿童募捐。 下面跟我们一起回顾一下今年最大型的活动THON WKND的精彩瞬间吧",
            link: "https://join.cssapsu.cn/d/thon",
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

                                <span style={{ display: "block", textAlign: "left" }}>Volunteer不够劲儿？</span>正式部员等着你！
                            </h1>
                        </div>
                    </section>
                    <section className="section section-department-inverse" style={{ paddingBottom: "32px" }}>
                    <div className="group">
                        <div className="department-img-wrapper">
                                <img className="department-img" src="/images/thon/1.jpg" />
                        </div>
                        <h1 className="h1" style={{ display: "block", textAlign: "left", textAlign:"left",marginBottom:"32px", color: "#ee5050" }}>
                                <span style={{ display: "block", textAlign: "left" }}>什么是THON？ </span>
                            </h1>
                        <p className="department-p-1-no-indent" style={{  marginBottom: "32px" }}>
                        THON取自Penn State Dance Marathon的后四个字母。是Penn Stater 最为骄傲的慈善组织。每年二月会在Bryce Jordan Center举办一场46小时不间断不休息的舞蹈马拉松，并通过这场盛事吸引到更多的人来关注受癌症困扰的儿童。也是对给予帮助的所有爱心人士一次大的狂欢感谢盛宴。截至目前，THON一共筹集了一亿七千万美元的善款并帮助了4000个患癌儿童的家庭。 

                            </p>
                        <p className="department-p-1-no-indent" style={{  marginBottom: "32px" }}>
                        除了THON weekend之外，还有Thon 5K，Hair Donations, 100 Days ‘til THON等大型活动。这些活动不止是为了筹集善款，也是让大家能感同身受，我们捐助的癌症儿童，他们的痛苦，要比我们所经历的46个小时站着不睡觉，跑5k更艰苦。一起通过活动来传播THON文化（Four Diamond），关爱和支持癌症儿童的资助 

                            </p>
        
        
                    </div>
                        <div className="group">
                            <h1 className="h1" style={{ display: "block", textAlign: "left", textAlign:"left",marginBottom:"32px", color: "#ee5050" }}>
                                <span style={{ display: "block", textAlign: "left" }}>我们是谁？又在做什么？</span>
                            </h1>

                            <p className="department-p-1-no-indent" style={{  marginBottom: "32px" }}>
                            作为这个跨世纪的PSU最有特色且专属的组织之一 ，CSSA Benefitting THON 积极参与并致力于宣传THON文化，是PSU THON与PSU华人群体的重要纽带，传递慈善正能量，也为华人学子在慈善事业上填上我们坚实的一笔！ 
                            </p>
                            <p className="department-p-1-no-indent" style={{  marginBottom: "32px" }}>
                               我们号召PSU华人群体密切关注癌症儿童，致力于募集善款，为他们带去爱和希望。 同时为喜爱和关注CSSA的你带来美食，福利和各种不定时惊喜！
                            </p>

                            <div className="department-img-wrapper">
                                <img className="department-img" src="/images/thon/2.jpg" />
                            </div>
                            <h1 className="h1" style={{ display: "block", textAlign: "left", textAlign:"left",marginBottom:"32px", color: "#ee5050" }}>
                                <span style={{ display: "block", textAlign: "left" }}>CSSA Benefitting THON</span>
                            </h1>

                            <p className="department-p-1-no-indent">
                                CSSA benefiting THON 一直秉承着：起源于THON，但不止于THON 的宗旨。竭尽所能，做好与学校之间的慈善枢纽， 也让所有癌症儿童感受到中国学子的凝聚力。
                            </p>
                            <div className="department-img-wrapper">
                                <img className="department-img" src="/images/thon/3.jpg" />
                            </div>

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
