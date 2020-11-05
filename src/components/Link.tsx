import React from 'react';

export interface linkData {
    from: React.Component; // Node
    to: React.Component; // Node
    origin?: number; // 0: none, 1: arrow, 2: dot
    terminal?: number;
    shape?: number;  // 0: polyline, 1: curve
    fill?: string;
    lineType?: string;
    tag: string;
};

export function Link(props: linkData) {

}