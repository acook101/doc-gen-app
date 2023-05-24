import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../comps/Header/Header'

import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

function App() {
    // Creates a new editor instance.
    const editor: BlockNoteEditor | null = useBlockNote({});

  return (
    <div className="App">
      <Header/>
      <div className="content-body">
        <BlockNoteView editor={editor} />;
      </div>
    </div>

  );
}

export default App;
