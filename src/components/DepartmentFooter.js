import React, { Component } from 'react';

class DepartmentFooter extends Component {
  render() {
    return (
        <section className="section" style={{margin: 0, paddingBottom: 0}}>
          <p className="h h--whisper home-whisper--2"><span>已经准备好？</span>psucssahr@gmail.com</p>
          <p className="h h--whisper home-whisper--2">请仔细阅读以下对于简历投递的要求</p>
          <p className="h h--whisper home-whisper--3 cv-notice">
            <span>I. 请务必使用个人邮箱（非学校邮箱）发送简历</span>
            <span>II. 邮件主题为申请人姓名＋简历</span>
            <span>III. 邮件内容包括你投递的部门（最多三个，按格式填写；如：1.活动部；2. 公关部；3. 网络部）并附上PDF格式的简历，并且以你的名字命名简历</span>
            <span>IV. 邮件内容与简历内容中都需确保写明姓名与联系方式</span>
          </p>
          {/* <p className="cssa-logo-whisper">
            <a className="icon-cssa-logo"></a>
          </p>
          <p className="h h--whisper home-whisper--1"><span>We are </span>Penn State.</p> */}
        </section>
    );
  }
}

export default DepartmentFooter;