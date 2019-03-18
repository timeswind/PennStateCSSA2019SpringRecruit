import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PageShell = Page => {
    return props =>
        <div className="page">
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnterTimeout={0}
                transitionLeaveTimeout={0}
                transitionName={"SlideIn"}
            >
                <Page {...props} />
            </ReactCSSTransitionGroup>
        </div>;
};

export default PageShell;
