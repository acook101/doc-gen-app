import React from 'react';
import './App.css';
import Header from '../comps/Header/Header'

import { useState } from "react";
import { BlockNoteEditor, Block } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

import {run} from "../utils/process";

import chevronDown from '../images/chevron-down.svg';
import document from '../images/document.svg';
import search from '../images/search.svg';
import plus from '../images/plus.svg';
import blockQuote from '../images/block-quote.svg';
import { InputField } from './Text';

const initialContent: string | null = localStorage.getItem("editorContent");
// run();

function App() {
  // Stores the editor's contents as an array of Block objects.
  const [blocks, setBlocks] = useState<Block[] | null>(null);
  
  // Creates a new editor instance.
  const editor: BlockNoteEditor | null = useBlockNote({
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,

    // Listens for when the editor's contents change.
    onEditorContentChange: (editor: BlockNoteEditor) => {
      localStorage.setItem(
        "editorContent",
        JSON.stringify(editor.topLevelBlocks)
      );
      // Converts the editor's contents to an array of Block objects.
      setBlocks(editor.topLevelBlocks)
    }
  });


// // Definition
// class BlockNoteEditor {
//     public insertBlocks(
//       blocksToInsert: PartialBlock[],
//       referenceBlock: BlockIdentifier,
//       placement: "before" | "after" | "nested" = "before"
//     ): void;
//   }
  
//   // Usage
//   editor.insertBlocks(blocksToInsert, referenceBlock, placement)

  //run();
    //console.log(openAIRes)

  return (
    <div className="App">
      <Header/>
      <InputField></InputField>
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
          <div className="cardItem"><p>{JSON.stringify(blocks, null, 2)}</p></div>
        </div>
      </div>
    </div>

  );
}

export default App;
