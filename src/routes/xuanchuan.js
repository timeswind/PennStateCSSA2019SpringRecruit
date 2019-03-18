import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'

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

class Xuanchuan extends Component {
    componentDidMount() {
        document.title = "CSSA2019|宣传部|无穷的创造";
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
                                <span className="department-text-white-underline" style={{ display: "inline", textAlign: "left" }}>宣传部</span>
                            </h1>

                            <h1 className="h1" style={{ display: "block", textAlign: "left" }}>
                                <span style={{ display: "block", fontSize: "13pt", color: "#a02727", letterSpacing: "-1px", marginBottom: "8px" }}>Penn State CSSA 2019 春季招新</span>
                                <span style={{ display: "block", textAlign: "left" }}>如果你有一百种技能, </span>我们就缺一百个你。
                            </h1>
                        </div>
                    </section>
                    <section className="section section-department-inverse">
                        <div className="group">
                            <h1 className="h1" style={{ display: "block", textAlign: "left" }}>
                                <span style={{ display: "block" }}>我</span>
                                <span style={{ display: "block" }}>会，一点技术</span>
                                <span style={{ display: "block" }}>有，一些想法</span>
                                <span style={{ display: "block" }}>想，一个平台去展示自己</span>
                            </h1>
                            <p className="department-p-1">
                                CSSA公众号及其他社交媒体账号运营，活动宣传片和平面制作，线上活动策划与实施，这些都是我们的活儿。如果你喜欢用镜头记录生活，对视频拍摄、平面设计灵感不断，会使用图片、视频处理工具，又或者爱好写作，有公众号运营经历或者线上活动策划经验，对新媒体运营有独到的眼光和见解。有责任感，有信心，有热情，有审美，能安排好自己的时间。那请你大胆的把简历投向宣传部！
                            </p>
                        </div>
                    </section>

                    <section className="section section-department-q-and-a">

                        <div className="group">
                            <h1 className="department-q-and-a">
                                部门 Q&A:
                                    </h1>
                            {qAndA.map((data) =>
                                <div>

                                    <h1 className="department-question" style={{ display: "block", textAlign: "left" }}>
                                        {data.q}
                                    </h1>
                                    <p className="department-answer">
                                        {data.a}
                                    </p>
                                </div>
                            )}
                            <img className="department-img" src="/images/宣传/宣传1_w1000.jpg" />

                        </div>
                    </section>
                </div>
                <Footer></Footer>
            </div>


        );
    }
}

export default Xuanchuan;
