import React, { Component } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import wx from 'weixin-js-sdk';

const qAndA = [
    {
        q: "寄语新部员",
        a: "新血液的加入意味着文娱新篇章的开启，更多的活动即将在这里扬帆起航，文娱的故事之后会有由你们亲手构思描写，只愿文娱始终温暖如一，热情拥抱每一人。感谢最美的年华能让我们遇见彼此，感谢最好的时光在CSSA与你们一同度过。希望文娱以后能办更多更精彩娱乐性强的活动，增加多样化的种类，面对多元化的学生，丰富大家的课余生活，也让更多的人认识了解并能加入到这个大家庭中去认识不同的人，收获更多的温暖并将这份爱与温暖和感动传递给更多的人。"
    }
]


class SNR extends Component {
    name = "文娱部"
    name_en = "Sports and Recreation"
    componentDidMount() {
        document.title = "活力梦想与热血|文娱部|CSSA2020";
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
            title: '活力梦想与热血|文娱部|CSSA2020',
            desc: "火爆校园的狼王争霸赛，热血沸腾的校内篮球赛，Lion's Cup校级篮球赛，精彩刺激的校内台球赛，拼搏对战的各类battle等等。充分丰富了同学们的课外生活，让大家在不同的活动中结交朋友，增进友谊。",
            link: "https://join.cssapsu.cn/d/snr",
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

                                <span style={{ display: "block", textAlign: "left" }}>我们精通文体，</span>娱乐不是问题！
                            </h1>
                        </div>
                    </section>
                    <section className="section section-department-inverse">
                        <div className="group">
                            <p className="department-p-1">
                                文娱部-Sports & Recreation Department. 顾名思义，文体娱乐部。文娱部包揽了CSSA内外大大小小的各项体育竞技娱乐活动，展现了所有有趣活泼创意十足的一面。火爆校园的狼王争霸赛，热血沸腾的校内篮球赛，Lion's Cup校级篮球赛，精彩刺激的校内台球赛，拼搏对战的各类battle等等。充分丰富了同学们的课外生活，让大家在不同的活动中结交朋友，增进友谊。文娱部是一个团结友爱的大家庭。每个部员都奇思妙想有能力，创意满分有想法，认真负责有时间，不怕辛苦不怕累，热爱体育和活动，愿为文娱费精力。
                            </p>

                            <div className="department-img-wrapper" style={{ margin: "32px 0" }}>
                                <img className="department-img" src="/images/文娱/文娱2_w1000.jpg" />
                            </div>
                            <ul style={{ paddingLeft: 0 }}>
                                <li>如果你奇思妙想有能力</li>
                                <li>创意满分有想法</li>
                                <li>认真负责有时间</li>
                                <li>不怕苦不怕累</li>
                                <li>热爱体育活动</li>
                                <li>愿为文娱费精力</li>
                                <li>相关活动有经历</li>
                                <li>语言交流无障碍</li>
                                <li>能说会道讲段子</li>
                            </ul>
                            <h1 className="h1 " style={{ display: "block", textAlign: "left", margin: 0 }}>
                                <span style={{ display: "inline", textAlign: "left" }}>你就是我们要找的人！</span>
                            </h1>
                        </div>
                    </section>
                    <section className="section section-department-q-and-a">

                        <div className="group">
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
                            <img className="department-img" src="/images/文娱/文娱1_w1000.jpg" />

                        </div>
                    </section>
                </div>
                <Footer></Footer>
            </div>


        );
    }
}

export default SNR;
