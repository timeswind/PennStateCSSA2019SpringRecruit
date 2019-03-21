import React from "react";
import { Route } from "react-router-dom";
import { WechatAPIProvider } from "react-wechat-api";
import wx from "weixin-js-sdk";

const getConfig = ({ url }) =>
    fetch("https://wechat.cssapsu.cn/jssdk/jssdksigniture", {
        method: "POST",
        body: JSON.stringify({ "url": url })
    }).then(res => res.json());

const defaultShareData = {
    title: "Wechat API",
    desc: "Wechat API component for react",
    link: () => window.location.href, // will return latest URL dynamically
    imgUrl: `${window.location.origin}/icon.png`
};

const defaultJsApiList = [
    "onMenuShareTimeline",
    "onMenuShareAppMessage",
    "onMenuShareQQ",
    "onMenuShareQZone"
];

export default function Wechat(props) {
    return (
        <Route>
            {({ location }) => (
                <WechatAPIProvider
                    {...props}
                    location={location} // <-- `location` is required
                    wx={wx} // <-- `wx` is required
                    getConfig={getConfig}
                    jsApiList={defaultJsApiList}
                    shareData={defaultShareData}
                />
            )}
        </Route>
    );
}