import React from 'react';
import './App.css';
import Header from '../comps/Header/Header'

import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import {run} from "../utils/process";

import chevronDown from '../images/chevron-down.svg';
import document from '../images/document.svg';
import search from '../images/search.svg';
import plus from '../images/plus.svg';
import blockQuote from '../images/block-quote.svg';


function App() {
    // Creates a new editor instance.
    const editor: BlockNoteEditor | null = useBlockNote({});
     run();
    //console.log(openAIRes)
  return (
    <div className="App">
      <Header/>
      <div className="content-body">
        <div className="file-explorer card">
          <div className="cardItem card-category">
            <h3>PXF/UX/Research</h3>
            <img src={chevronDown} className="cardItemIcon" alt="logo" />
          </div>
          <div className="cardItem">
            <img src={document} className="cardItemIcon" alt="logo" />
            <p>Recent documents</p>
          </div>
          <div className="cardItem">
            <img src={search} className="cardItemIcon" alt="logo" />
            <p>Search templates</p>
          </div>

          <div className="cardItem card-category">
            <h3>Folders</h3>
            <img src={plus} className="cardItemIcon" alt="logo" />
          </div>
          <div className="cardItem">
            <img src={blockQuote} className="cardItemIcon" alt="logo" />
            <p>Drafts</p>
          </div>

        </div>
        <div className="editor card">
          <BlockNoteView editor={editor} />;
        </div>
      </div>
    </div>

  );
}

export default App;
