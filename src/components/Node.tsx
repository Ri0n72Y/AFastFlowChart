import React, { useState } from 'react';

interface data {
    data: {
        text: string;
    };
    css: {
        x: number;
        y: number;
        w: number;
        h: number;
        shape: string;
        color: string;
        background: string;
        size: number;
    };
    state: {
        select: boolean;
        edit: boolean;
    };
    event: {
        onClick: () => void;
    }
}

export function Node(args: data) {
    let data = args.data, css = args.css, state = args.state, event = args.event;


    return (
        <div className={"node " + css.shape + (state.select ? " selected" : "")} 
            style={{ left: css.x, top: css.y, }}
            onClick={event.onClick}
            >
            {data.text}
        </div>
    )
}

export default Node;