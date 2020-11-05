import React, { useState } from 'react';
import './App.css';
import { linkData } from './components/Link';
import Node from './components/Node';
import * as Const from './Consts';

interface State {
  roots: nodeData[],
  init: boolean,
  edit: boolean,
  elements: nodeData[],
  links: linkData[],
  focus?: nodeData,
  camX: number,
  camY: number,
  templete: "default",
}

const state = {} as State;

interface nodeData {
  index: number;
  text : string;
  css : {
    x: number;
    y: number;
    w: number;
    h: number;
    shape: string;
    color: string;
    background: string;
    size: number;
  };
}

function App() {
  const [focus, setFocus] = useState({} as nodeData);
  // eslint-disable-next-line

  if (!state.init) {
    state.roots= new Array<nodeData>();
    state.elements= new Array<nodeData>();
    state.links= new Array<linkData>();
    state.camX= 0; state.camY= 0; state.edit= false; 

    let node = {} as nodeData;
    node.css = {
      x: 400, y: 200, w: 100, h: 60,
      shape: Const.RRECT, color: "default", background: "default", size: 14,
    }
    node.text = "Root";
    node.index = 0;
    //state.roots.push(node);
    state.elements.push(node);
    state.init= true;
  }

  let nodes = new Array<JSX.Element>();
  for (const node of state.elements) {
    nodes.push(<Node key={node.index}
      data={{text: node.text}}
      css ={node.css}
      event={{
        onClick: () => {
          if (focus.index !== undefined) {
            setFocus({} as nodeData);
            state.focus = undefined;
          } else {
            setFocus(node); 
            state.focus = node;
          }
        },
      }}
      state={{select: focus === node, edit: state.edit}}
    />)
  }

  return (
    <div className="App"
      id="App"
      tabIndex={0}
      onKeyDown={(e)=>{
        let node = handleKeyDown(e);
        if (node) {
          setFocus(node);
          state.focus = node;
          }
        }}>
      {nodes}
    </div>
  );
}

export default App;

// eslint-disable-next-line
function handleClickElement(state: State, node: nodeData) {
  state.focus = node;
}

function handleKeyDown(event: React.KeyboardEvent) {
  switch (event.key) {
    case Const.KEY_NEW:   
      if (state.focus) {
        let node = createNode(state.elements.length, undefined, undefined, state.focus);
        state.elements.push(node);
        return node;
      } 
      break;
    case Const.KEY_EDIT:   break;
    case Const.KEY_REMOVE: break;
    case Const.KEY_UP:     break;
    case Const.KEY_DOWN:   break;
    case Const.KEY_LEFT:   break;
    case Const.KEY_RIGHT:  break;
    default: 
      console.log(event.key);
      return false;
  }
  return undefined;
}
function createNode(index: number, x?:number, y?:number, parent?: nodeData, ) {
  let x1 : number, y1 : number;
  if (parent) {
    //createLink(parent, node);
    x1 = parent.css.x; y1 = parent.css.y + 100;
  } else {
    x1 = x ? x : 0; y1 = y ? y : 0;
  }
  let node = {} as nodeData;
  node.css = {
    x: x1, y: y1, w: 100, h: 60,
    shape: Const.RRECT, color: "default", background: "default", size: 14,
  }
  node.index = index;
  node.text = "New Node";
  return node;
}