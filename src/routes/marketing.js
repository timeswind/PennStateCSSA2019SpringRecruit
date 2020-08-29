import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
import wx from 'weixin-js-sdk';

const qAndA = [
    {
        q: "对专业有要求吗？",
        a: "没有，只要你觉得你符合我们的招新要求，不管什么专业，欢迎投简历."
    },
    {
        q: "对技术有硬性要求吗？",
        a: "这个真的有，作为一个cssa的门面部门，我们完成cssa的大大小小的活动不一样的宣传任务，没有技术基础的话很难做到创作出一个完整的作品。不过只要你有基础有想法，加入部门我们可以共同进步，向部门内的技术大大们低头。"
    },
    {
        q: "公众平台能制作特别的栏目吗？",
        a: "CSSA公众平台是一个致力于帮助PSU学子全方面发展的公众号，不光是学习相关活动相关工作相关的推文，之前我们也有推出过【本周闲谭】这样的推荐电影书籍和音乐的栏目，如果你的笔下能生花，那么我们会给你铺好土壤助你发芽。我们还有长期的电台栏目，如果你对电台制作感兴趣，我们欢迎你的加入。"
    }
]

class Marketing extends Component {
    name = "宣传部"
    name_en = "Marketing"
    componentDidMount() {
        document.title = "宣传部|无穷的创造|CSSA2020";
        window.scrollTo(0, 0)

        fetch("https://wechat.cssapsu.cn/jssdk/jssdksigniture", {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify({ "url": window.location.href })
        }).then(function (res) {
            return res.json()
        }).then(function (jsondata) {
            console.log(jsondata);
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
            title: '宣传部|无穷的创造|CSSA2020',
            desc: "如果你有一百种技能, 我们就缺一百个你。",
            link: "https://2019.cssapsu.cn/d/marketing",
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
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>Penn State CSSA 招新</span>
                                <span style={{ display: "block", textAlign: "left" }}>如果你有一百种技能, </span>我们就缺一百个你。
                            </h1>
                        </div>
                    </section>
                    <section className="section section-department-inverse" style={{padding: "0 0 32px 0"}}>
                        <div className="group">
                        <div className="department-img-wrapper" style={{textAlign: "center"}}>
                                <img className="department-img" src="/images/宣传/小sa.png" />
                                <span>CSSA吉祥物小sa</span>
                            </div>
                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginTop: "32px" }}>
                                <span style={{ display: "block" }}>我</span>
                                <span style={{ display: "block" }}>会一点技术</span>
                                <span style={{ display: "block" }}>有一些想法</span>
                                <span style={{ display: "block" }}>想一个平台展示自己</span>
                            </h1>
                            <p className="department-p-1">
                                CSSA公众号及其他<span className="hignlight">社交媒体账号运营</span>，
                                <span className="hignlight">活动宣传片和平面制作</span>，
                                <span className="hignlight">线上活动策划与实施</span>，
                                这些都是我们的活儿。如果你
                                <span className="hignlight">喜欢用镜头记录生活</span>
                                ，对视频拍摄、平面设计灵感不断，会使用图片、视频处理工具，又或者
                                <span className="hignlight">爱好写作</span>
                                ，有公众号运营经历或者线上活动策划经验，对新媒体运营有独到的眼光和见解。
                                <span className="hignlight">有责任感，有信心，有热情，有审美</span>
                                ，能安排好自己的时间。那请你大胆的把简历投向宣传部！
                            </p>
                            <div className="department-img-wrapper">
                                <img className="department-img" src="/images/宣传/宣传1_w1000.jpg" />
                            </div>
                        </div>
                    </section>

                    <section className="section section-department-q-and-a">

                        <div className="group">
                            <h1 className="department-q-and-a">
                                宣传部 部门 Q&A:
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
                        </div>
                    </section>
                </div>
                <Footer></Footer>
            </div>


        );
    }
}

export default Marketing;
