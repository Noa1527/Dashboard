import React from 'react';

const WidgetBlock = (props) => {
    return (
        <>
            <div className="widget-block" style={{ height: `${props.height}px`, width: `${props.width}px`, }}>
                <div className="widget-block-header">
                    <h3>{props.title}</h3>
                </div>
                <div className="widget-block-body">
                    <div className="scrollbar">
                        {props.children}
                    </div>
                </div>
            </div>

        </>
    );
};

export default WidgetBlock;