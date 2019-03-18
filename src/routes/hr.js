import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'

class HR extends Component {
    componentDidMount() {
        document.title = "CSSA2019|HR|秉公处事|携手同行。";
        window.scrollTo(0, 0)
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
                                <span className="department-text-white-underline" style={{ display: "inline", textAlign: "left" }}>HR 人力资源</span>
                            </h1>

                            <h1 className="h1" style={{ display: "block", textAlign: "left" }}>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>Penn State CSSA 2019 春季招新</span>

                                <span style={{ display: "block", textAlign: "left" }}>秉公处事, </span>携手同行。
                            </h1>
                        </div>
                    </section>
                    <section className="section section-department-inverse">
                        <div className="group">
                            <img className="department-img" src="/images/hr/HR2_w1000.jpg" />

                            <p className="department-p-1">
                                身为HR，我们将CSSA拧成一股绳，与每一位成员携手同行。我们秉公处事，坚守纲纪的同时也将心比心。
                            </p>
                            <p className="department-p-1">
                                作为HR的你需要计划一年两次的火热招新，为CSSA纳入新的血液，让CSSA保持青春活力。筹划一年一度的换届选举，确保主席团和部长们顺利的选拔出下一任德才兼备的领导者，为CSSA的未来保驾护航。
                            </p>
                            <p className="department-p-1">
                                举办精彩绝伦的内部联欢和Banquet，让CSSA的成员可以舒缓工作压力，增加部门之间联络感情的机会。使得CSSA的成员们惺惺相惜，同舟共济。
</p>
                            <p className="department-p-1">
                                作为HR的你需要策划丰富多彩迎新活动，例如新生接机，让新一届的PSU留学生们感受到异国他乡的温暖和CSSA的热情。开展多姿多彩的新生聚会，例如新生picnic，让更多的学弟学妹们相互了解，为未来的留学生活添上朋友的同行。
</p>
                        </div>
                    </section>
                </div>
                <Footer></Footer>
            </div>


        );
    }
}

export default HR;
