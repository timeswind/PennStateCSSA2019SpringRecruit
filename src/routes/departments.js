import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import TypeIt from 'typeit';

const departmentsData = [
    {
        name: "宣传部",
        slogen: "是镜头是画笔，是社会的观察者，传播生活与美好",
        bg: "/images/宣传_封面.jpg",
        bg_color: "#047dc3",
        to: "/d/xuanchuan"
    },
    {
        name: "HR",
        slogen: "内心坚如磐石又懂得变通",
        bg: "/images/HR_封面.jpg",
        bg_color: "#020307",
        to: "/d/hr"
    }
]

class DeppartmentCard extends Component {
    render() {
        return (
            <Link to={this.props.data.to} className="projects__item projects__item--reversed" style={{ background: this.props.data.bg_color }}>
                <b className="projects__bg" style={{ backgroundImage: "url(" + this.props.data.bg + ")" }}></b>
                <h2 className="projects__logo h s34 wb">{this.props.data.name}</h2>
                <h2 className="projects__title h wb">{this.props.data.slogen}</h2>
            </Link>
        )
    }
}
class Departments extends Component {
    constructor(props) {
        super(props);
        document.title = "CSSA2019|部门一览";

        // this.myRef = React.createRef();
    }

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
            strings: ["这里很大，", "也很精彩。"],
            loop: true
        })
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
    }

    render() {
        const DepartmentsShuffle = this.shuffle(departmentsData)
        return (
            <div>
                <div className="department-index">
                    <section className="section section--first">
                        <div className="group">
                            <h1 className="h1" style={{ display: "block", textAlign: "left", height: "114px" }}>
                                <span style={{ display: "block", fontWeight: "normal", fontSize: "13pt", color: "#666", letterSpacing: "-1px", marginBottom: "8px" }}>Penn State CSSA 2019 春季招新</span>
                                {/* <span style={{ display: "block", textAlign: "left" }}>这里很大, </span>也很精彩。 */}
                                <span className="type-effect" id="animated_slogen"></span>
                            </h1>
                            {
                                DepartmentsShuffle.map((department) => 
                                <DeppartmentCard data={department}></DeppartmentCard>
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
