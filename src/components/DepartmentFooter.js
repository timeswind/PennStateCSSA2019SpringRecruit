import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DepartmentFooter extends Component {
  render() {
    return (
      <section className="section" style={{ margin: 0, paddingBottom: 0, paddingTop: "16px" }}>
        
        <div className="group">
        <h3 style={{marginLeft: "16px", fontWeight: "bold", color: "#a02727"}}>部门导航</h3>
        <div className="departments-list-with-little-sa">
          <div className="row-1">
            <li style={{ flexGrow: 1, flexBasis: 0 }}>
              <Link to="/d/marketing"><img src="/images/小sa/宣传.png" /></Link>
              <Link to="/d/treasury"><img src="/images/小sa/财务.png" /></Link>
              <Link to="/d/idd"><img src="/images/小sa/学术.png" /></Link>
              <Link to="/d/snr"><img src="/images/小sa/文娱.png" /></Link>
              <Link to="/d/thon"><img src="/images/小sa/THON.png" /></Link>
            </li>
          </div>
          <div className="row-2">
            <li style={{ flexGrow: 1, flexBasis: 0 }}>
              <Link to="/d/graduate"><img src="/images/小sa/研究生.png" /></Link>
              <Link to="/d/ce"><img src="/images/小sa/活动.png" /></Link>
              <Link to="/d/pr"><img src="/images/小sa/PR.png" /></Link>
              <Link to="/d/hr"><img src="/images/小sa/HR.png" /></Link>
              <Link to="/d/webteam"><img src="/images/小sa/网络.png" /></Link>
            </li>
          </div>
        </div>
        </div>
        <p className="cssa-logo-whisper" style={{ margin: "16px 0 0 0 ", padding: 0, fontSize: "100px" }}>
          <a className="icon-cssa-logo"></a>
        </p>
         <div className = "group">
         <p className="h h--whisper home-whisper--2" style={{ color: "#a02727" }}>面向人群</p>
         <p className="h h--whisper home-whisper--2"style={{ color: "#FFFFFF" }} >UP校区的学生</p>
         <p className="h h--whisper home-whisper--3 cv-notice" >
          <span>1.本科学生，研究生和博士生 (国内UP学生&美国UP学生)。</span>
          <span>2.尚未转入UP校区的分校学生暂时无法参与本次招新。</span>
          <span>3.通过面试的国内UP学生将以线上的形式协助其对应部门的工作。</span>

        </p>
         <p className="h h--whisper home-whisper--2"style={{ color: "#FFFFFF" }} >Penn State First上海项目的学生 </p>
         <p className="h h--whisper home-whisper--3 cv-notice" tyle={{ color: "#000000" }}>
          <span>1.PSU主校区的学生经过面试且入选加入CSSA Shanghai Chapter后，返回校园将继续在CSSA工作。</span>
          <span>2.PSU分校区学生经过面试且入选加入CSSA Shanghai Chapter后，无需在大三转到UP校区后再次申请。</span>
          <span>3.PSU分校区学生加入CSSA Shanghai Chapter且回到分校后不影响其加入其他学联。</span>
          <span>4.CSSA Shanghai Chapter的学生将参与上海项目线下活动的相关工作，协助学校处理上海项目的相关业务，并以线上的形式协助所在部门的校内工作。</span>

        </p>
          
         </div>
        <p className="h h--whisper home-whisper--2" style={{ margin: 0, paddingTop: 0, alignSelf: "center" }}><span>已经准备好？</span>psucssahr@gmail.com</p>
        <p className="h h--whisper home-whisper--2" style={{ color: "#a02727" }}>请仔细阅读以下对于简历投递的要求</p>
        <p className="h h--whisper home-whisper--3 cv-notice">
          <span>I. 请务必使用个人邮箱（非学校邮箱）发送简历</span>
          <span>II. 邮件主题为申请人姓名＋ 所在地区＋简历；如：张凯欣 （中国）简历若所在校区为上海，则需在所在地区后面加上所属校区，如：张凯欣（中国-上海校区）简历。</span>
          <span>III. 邮件内容包括你投递的部门（最多三个，按格式填写；如：1.活动部；2. 公关部；3. 网络部；此顺序不是志愿部门顺序，请随机填写；面试完所有部门后请将部门志愿排序发送至HR的邮箱）并附上PDF格式的简历，并且以你的名字命名简历</span>
          <span>IV. 邮件内容与简历内容中都需确保写明姓名与联系方式</span>
        </p>
      </section>
    );
  }
}

export default DepartmentFooter;