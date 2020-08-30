import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import TypeIt from 'typeit';
import wx from 'weixin-js-sdk';

const departmentsData = [
    {
        name: "宣传部",
        name_en: "Marketing",
        slogen: "是镜头是画笔，是社会的观察者，传播生活与美好。",
        bg: "/images/宣传_封面.jpg",
        bg_color: "#047dc3",
        to: "/d/marketing"
    },
    {
        name: "HR 人力资源",
        slogen: "做事不循私",
        slogen2: "交流需高效",
        bg: "/images/HR_封面.jpg",
        bg_color: "#020307",
        to: "/d/hr"
    },
    {
        name: "THON",
        slogen: "RA!SE HOPE",
        slogen2: "ENRICH L!FE",
        bg: "/images/THON_封面.jpg",
        bg_color: "#a0c3dc",
        to: "/d/thon"
    },
    {
        name: "活动部",
        name_en: "Culture Event Department",
        slogen: "置身幕后",
        slogen2: "舞台由你掌控",
        bg: "/images/活动_封面.jpg",
        bg_color: "#ee5050",
        to: "/d/ce"
    },
    {
        name: "财务部",
        name_en: "Treasury",
        slogen: "Money与发票",
        slogen2: "都要Hold住",
        bg: "/images/财务_封面.jpg",
        bg_color: "#fc9665",
        to: "/d/treasury",
        text_shadow: true
    },
    {
        name: "PR 公共关系",
        name_en: "Public Relation",
        slogen: "经济基础决定上层建筑",
        bg: "/images/PR_封面.jpg",
        bg_color: "#333e5a",
        to: "/d/pr",
        text_shadow: false
    },
    {
        name: "文娱部",
        name_en: "Sports and Recreation",
        slogen: "我们精通文体，娱乐不是问题！",
        bg: "/images/文娱_封面.jpg",
        bg_color: "#419679",
        to: "/d/snr",
        text_shadow: false
    },
    {
        name: "学术发展部",
        name_en: "Intellectual Development Department",
        slogen: "驱散迷茫",
        slogen2: "守护未来",
        bg: "/images/学术_封面.jpg",
        bg_color: "#ffa0cb",
        to: "/d/idd",
        text_shadow: false
    },
    {
        name: "研究生部",
        name_en: "Department of Graduate Students",
        slogen: "飞鸟择良木，职业发展与诗和远方。",
        bg: "/images/研究生_封面.jpg",
        bg_color: "#f6f4f5",
        to: "/d/graduate",
        text_shadow: false,
        text_color: "#1b1b1b"
    },
    {
        name: "网络部",
        name_en: "Web Team Department",
        slogen: "趁年轻",
        slogen2:"让我们一起为梦想窒息",
        bg: "/images/网络_封面.jpg",
        bg_color: "#4d84ff",
        to: "/d/webteam",
        text_shadow: false
    }
]

class DeppartmentCard extends Component {
    render() {
        return (
            <Link to={this.props.data.to} className="projects__item projects__item--reversed" style={{ background: this.props.data.bg_color, textShadow: (this.props.data.text_shadow) ? "3px 2px 2px #1b1b1b" : "none" }}>
                <b className="projects__bg" style={{ backgroundImage: "url(" + this.props.data.bg + ")" }}></b>
                <h2 className="projects__logo h s34 wb" style={{ color: this.props.data.text_color || "#ffffff", borderColor: this.props.data.text_color || "#ffffff" }}>{this.props.data.name}</h2>
                <h2 className="projects__title h wb" style={{ color: this.props.data.text_color || "#ffffff" }}>{this.props.data.slogen}<br></br>{this.props.data.slogen2}</h2>
            </Link>
        )
    }
}
class Departments extends Component {
    constructor(props) {
        super(props);
        document.title = "CSSA2020|部门一览";
    }

    main_slogen_typing = []

    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    componentDidMount() {
        window.scrollTo(0, 0)

        new TypeIt("#animated_slogen", {
            speed: 150,
            startDelay: 300,
            deleteSpeed: 100,
            strings: ["校园很大，", "有你更精彩"],
            loop: true
        })
            .pause(1500)
            .delete()
            .type("无论你在上海还是美国，")
            .break()
            .type("我们都欢迎你。")
            .pause(1500)
            .delete()
            .type("嘤其鸣矣，")
            .break()
            .type("求其友声。")
            .pause(1500)
            .delete()
            .type("年轻的头脑，")
            .break()
            .type("无穷的创造。")
            .pause(1500)
            .delete()
            .type("是镜头是画笔，")
            .break()
            .type("是社会的观察者，")
            .break()
            .type("传播生活与美好。")
            
            .pause(1500)
            .go();


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
            title: 'CSSA2020|部门一览',
            desc: "校园很大，有你更精彩！2020CSSA秋季招新，十大部门，总有一个适合你。",
            link: "https://2019.cssapsu.cn/departments",
            imgUrl: "https://2019.cssapsu.cn/images/cssa_logo_dark_inverse_w300.png",
            type: 'link'
        }

        wx.ready(function () {
            wx.onMenuShareAppMessage(shareData);
            wx.onMenuShareTimeline(shareData);
        });
    }

    render() {
        const DepartmentsShuffle = this.shuffle(departmentsData)
        return (
            <div>
                <div className="department-index">
                    <section className="section section--first">
                        <div className="group">
                            <h1 className="h1" style={{ display: "block", textAlign: "left", height: "114px" }}>
                                <span style={{ display: "block", fontWeight: "normal", fontSize: "13pt", color: "#666", letterSpacing: "-1px", marginBottom: "8px" }}>Penn State CSSA 2020 秋季招新</span>
                                {/* <span style={{ display: "block", textAlign: "left" }}>这里很大, </span>也很精彩。 */}
                                <span className="type-effect" id="animated_slogen"></span>
                            </h1>
                            {
                                DepartmentsShuffle.map((department) =>
                                    <DeppartmentCard key={department.name} data={department}></DeppartmentCard>
                                )}
                            <p className="h h--whisper home-whisper--1"><span>We are </span>Penn State.</p>
                        </div>
                    </section>
                </div>
                <Footer></Footer>
            </div>


        );
    }
}

export default Departments;
