import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
import wx from 'weixin-js-sdk';

class PR extends Component {
    name = "PR 公共关系"
    name_en = "Public Relation"

    componentDidMount() {
        document.title = "PR|经济基础决定上层建筑|CSSA2020";
        window.scrollTo(0, 0)
        
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
            title: 'PR|经济基础决定上层建筑|CSSA2020',
            desc: "我们代表CSSA与外界沟通，从而为PSU华人学生学者争取更多福利，并且加强了CSSA与学校以及与State College地区各个团体的联系。",
            link: "https://join.cssapsu.cn/d/pr",
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

                                <span style={{ display: "block", textAlign: "left" }}>经济基础 </span>决定上层建筑
                            </h1>
                        </div>
                    </section>
                    <section className="section section-department-inverse">
                        <div className="group">
                            <div className="department-img-wrapper">
                                <img className="department-img" src="/images/pr/pr1_w1000.jpg" />
                                <span>2018 CSSA PR部门合照</span>
                            </div>
                            <p className="department-p-1">
                                我们是CSSA和外部沟通的桥梁，为整个CSSA提供一部分资金支持。我们代表CSSA与外界沟通，从而为PSU华人学生学者争取更多福利，并且加强了CSSA与学校以及与State College地区各个团体的联系。
                            </p>
                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                                <span style={{ display: "block", textAlign: "left" }}>我们的工作范围</span>
                            </h1>
                            <li>发掘有价值的CSSA合作伙伴</li>
                            <li>维护CSSA和现有合作伙伴的关系</li>
                            <li>与合作伙伴商洽合作计划</li>
                            <li>代表CSSA与校内外机构及学生组织交流合作</li>
                            <li>招待CSSA各大晚会VIP及特约嘉宾</li>
                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>作为CSSA和外部沟通的桥梁</span>

                                <span style={{ display: "block", textAlign: "left" }}>我们看中的能力</span>
                            </h1>
                            <li>诚实 严谨 守时 负责</li>
                            <li>愿意为CSSA贡献出个人时间</li>
                            <li>流利的中英文对话</li>
                            <li>较强的沟通技巧</li>
                            <li>微信推送文案编辑，排版制作能力</li>
                        </div>
                    </section>
                </div>
                <Footer></Footer>
            </div>


        );
    }
}

export default PR;
