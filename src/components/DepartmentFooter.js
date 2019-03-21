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
        <p className="h h--whisper home-whisper--2" style={{ margin: 0, paddingTop: 0, alignSelf: "center" }}><span>已经准备好？</span>psucssahr@gmail.com</p>
        <p className="h h--whisper home-whisper--2" style={{ color: "#a02727" }}>请仔细阅读以下对于简历投递的要求</p>
        <p className="h h--whisper home-whisper--3 cv-notice">
          <span>I. 请务必使用个人邮箱（非学校邮箱）发送简历</span>
          <span>II. 邮件主题为申请人姓名＋简历（e.g. ）</span>
          <span>III. 邮件内容包括你投递的部门（最多三个，按格式填写；如：1.活动部；2. 公关部；3. 网络部；此顺序不是志愿部门顺序，请随机填写；面试完所有部门后请将部门志愿排序发送至HR的邮箱）并附上PDF格式的简历，并且以你的名字命名简历</span>
          <span>IV. 邮件内容与简历内容中都需确保写明姓名与联系方式</span>
        </p>
      </section>
    );
  }
}

export default DepartmentFooter;