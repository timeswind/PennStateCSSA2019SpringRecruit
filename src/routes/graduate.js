import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
import wx from 'weixin-js-sdk';

class Graduate extends Component {
    name = "研究生部"
    name_en = "Department of Graduate Students"
    componentDidMount() {
        document.title = "研究生部|飞鸟择良木，职业发展与诗和远方|CSSA2020";
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
            title: '研究生部|飞鸟择良木，职业发展与诗和远方|CSSA2020',
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
                                <li>研究生部是CSSA目前唯一一个以研究生博士生为主导，兼容本科生的部门。而职业，的确是每一个学生毕业后的归宿。在这里，在研究生部，或许你能找到答案。Resume Workshop, How to Build LinkedIn Profile，国内高校招聘会，Global 500公司招聘会，Tax Workshop, Health Insurance Info Session…</li>
                                <li>研究生部作为CSSA最年轻的部门，为你提供更多的创造空间来实施想法与建立机会。这是一个让你探索，让你锻炼，让你成长，更重要是能接触到不同资源和群体的部门。不论是研究生，博士生，访问学者还是本科生，只要你勇于尝试，有责任心，喜欢挑战性，对活动策划感兴趣，研究生部诚邀你加入我们的大家庭，一起Work Hard Play Hard！</li>
                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                            <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>部长</span>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>博士生三年级-Energy and Mineral Engineering</span>
                                <span style={{ display: "block", textAlign: "left" }}>杨韵 Jasmine</span>

                            </h1>
                            <div className="department-img-wrapper" style={{margin: "0 0 32px 0"}}> 
                                <img className="department-img" src="/images/研究生/杨韵.jpg" />
                                <span style={{display: "block"}}>杨韵 Jasmine（博士生三年级）</span>
                                <span style={{display: "block"}}>Energy and Mineral Engineering</span>
                                <span style={{display: "block"}}>喜爱尝试新鲜事物 解决各种难题</span>
                                <span style={{display: "block"}}>爱看韩剧 BTS Army 一枚</span>
                                <span style={{display: "block"}}>热爱跑步 致力于腹肌养成计划</span>
                            </div>
                
                            <p className="department-p-1-no-indent">
                            加入研究生部，可以在紧张科研生活外，丰富自己的业余生活。会有更多机会认识更多有意思的朋友；锻炼活动策划、人际交往和随机应变的能力。
                            </p>
                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                            <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>副部长</span>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>研究生一年级-Real Estate Analysis&Development</span>
                                <span style={{ display: "block", textAlign: "left" }}>盛佳灿 Jason </span>

                            </h1>
                            
                            <div className="department-img-wrapper" style={{margin: "0 0 32px 0"}}> 
                                <img className="department-img" src="/images/研究生/盛佳灿.jpg" />
                                <span style={{display: "block"}}>盛佳灿 Jason (研究生一年级)</span>
                                <span>Real Estate Analysis&Development</span>
                            </div>
                            <p className="department-p-1-no-indent">
                            桥梁，提供的是便利，而纽带，顾名思义，作用则是连接。研究生部作为CSSA的一个部门，其作用便是为学生提供一道便捷的桥梁，一条连接本科与研究生的纽带。自加入CSSA研究生部以来、不仅丰富了我的课余生活，在忙绿的学习之余得到了更多锻炼，也充分让自己体会到了作为留学生的一份责任感。加入我们吧，一起携手共进，创建更美好的明天！
                            </p>

                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>研究生二年级-Biomedical Engineering</span>
                                <span style={{ display: "block", textAlign: "left" }}>刘天翼 Devin</span>

                            </h1>
                            <div className="department-img-wrapper" style={{margin: "0 0 32px 0"}}> 
                                <img className="department-img" src="/images/研究生/刘天翼.jpg" />
                                <span style={{display: "block"}}>刘天翼 Devin（研究生二年级）</span>
                                <span>Biomedical Engineering</span>
                            </div>
                            <p className="department-p-1-no-indent">
                            都说本科是大学的精华所在，都说本科生应该成为学校的主人。但还有那么一群本科生默默为研究生们搭建舞台，寻觅机会，铺平职业发展之路。无论此时是本科生还是研究生，CSSA研究生部总能给我带来新的启发和挑战。愿宾州州立研究生们也可以有本科生一样的舞台与欢乐。
                            </p>
                            <h1 className="h1" style={{ display: "block", textAlign: "left", marginBottom: "32px" }}>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>博士生二年级-History</span>
                                <span style={{ display: "block", textAlign: "left" }}>刘相宜 Shirley</span>

                            </h1>
                            <div className="department-img-wrapper" style={{margin: "0 0 32px 0"}}> 
                                <img className="department-img" src="/images/研究生/刘相宜.jpg" />
                                <span style={{display: "block"}}>刘相宜 Shirley（博士生二年级）</span>
                                <span style={{display: "block"}}>History</span>
                                <span style={{display: "block"}}>想要读万卷书 还想行万里路</span>
                                <span style={{display: "block"}}>业余琵琶练习生 兼职国风爱好者</span>
                                <span style={{display: "block"}}>为了好运尽量做一个爱笑的女孩</span>
                            </div>
                            <p className="department-p-1-no-indent">
                            选择加入CSSA，加入研究生部，除了选择参与到丰富多样的活动中来，更是选择了和一群有趣又与众不同的同学成为朋友，在每一次的合作和挑战里，建立独一无二的革命友谊。  </p>
                        </div>
                    </section>
                </div>
                <Footer></Footer>
            </div>


        );
    }
}

export default Graduate;
