import React from 'react';
import './EditorToolbar.scss';
import tools from '../../images/editor-tools.png';

function EditorToolbar() {
  return (
    <div className="editor-toolbar-wrapper">
      <div className="editor-toolbar">      
        <img src={tools} />
      </div>  
    </div>
  );
}

export default EditorToolbar;


