import React, { Component } from 'react';
import DepartmentFooter from '../components/DepartmentFooter';

class Footer extends Component {
  render() {
    return (
      <div>
        <DepartmentFooter></DepartmentFooter>
        <footer>
          <div className="contact__side contact__side--right links--accent">
            <h3 className="contact-footer__subtitle wm p s13 allcaps">简历投送</h3>
            <p className="h s28 wb mt0 mb0"><a href="mailto:psucssahr@gmail.com">psucssahr@gmail.com</a></p>
            <h3 className="contact-footer__subtitle wm p s13 allcaps">截止日期</h3>
            <p className="h s28 wb mt0 mb0"><a>3月27日（星期三）晚11:59</a></p>
            <h3 className="contact-footer__subtitle wm p s13 allcaps">联系我们</h3>
            <p className="h s28 wb mt0 mb0"><a href="mailto:prcssapsu@gmail.com">prcssapsu@gmail.com</a></p>
            <ul className="list--social">
              <li className="list--social__item"> <a className="list--social__link" target="_blank" href="https://instagram.com/pennstatecssa"><i className="list--social__icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#FFF" fillRule="evenodd" d="M16 6c2.72 0 3.06 0 4.12.06 1.07.05 1.8.22 2.43.46.66.26 1.22.6 1.77 1.16.56.55.9 1.1 1.16 1.77.24.63.4 1.36.46 2.42.05 1.07.06 1.4.06 4.12 0 2.7 0 3-.06 4.1-.05 1-.22 1.8-.46 2.4-.26.6-.6 1.2-1.16 1.7-.55.54-1.1.9-1.77 1.13-.64.25-1.36.42-2.43.47-1.06.06-1.4.07-4.12.07s-3.06 0-4.12-.06c-1.07-.02-1.8-.2-2.43-.44-.66-.26-1.22-.6-1.77-1.16-.56-.58-.9-1.1-1.16-1.8-.24-.63-.4-1.36-.46-2.4C6 19.03 6 18.7 6 16c0-2.72 0-3.06.06-4.13.05-1.06.22-1.8.46-2.42.26-.66.6-1.22 1.16-1.77.55-.56 1.1-.9 1.77-1.16.64-.24 1.36-.4 2.43-.46C12.94 6 13.28 6 16 6zm.23 5c-2.9 0-5.23 2.32-5.23 5.2 0 2.88 2.34 5.22 5.23 5.22 2.88 0 5.22-2.34 5.22-5.22 0-2.9-2.34-5.23-5.22-5.23zm6.13-.23c0-.63-.5-1.14-1.13-1.14-.63 0-1.14.5-1.14 1.14 0 .62.5 1.13 1.1 1.13.6 0 1.1-.5 1.1-1.13zm-6.13 8.84c-1.88 0-3.4-1.5-3.4-3.3s1.52-3.4 3.4-3.4c1.87 0 3.4 1.5 3.4 3.4s-1.53 3.4-3.4 3.4z"></path></svg></i>
              </a>
              </li>
            </ul>

          <p className="h h--whisper home-whisper--1" style={{marginTop: "32px"}}><span>We are </span>Penn State.</p>
            <div className="footer__col footer__col--left">
              <p className="p s13 wm footer-comm">宣传部出品</p>
              <p className="p s13-en wm">© Penn State CSSA <span>2019</span></p>
            </div>
          </div>
        </footer>
      </div>

    );
  }
}

export default Footer;