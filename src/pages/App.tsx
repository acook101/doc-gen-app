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

function App() {

  // Stores the editor's contents as an array of Block objects.
  const [blocks, setBlocks] = useState<Block[] | null>(null);

  //Last attempt at Import AI output content into blocks
  // const [mockRun, insertBlocks] = useState<Block[] | null>(null);
  

  // Creates a new editor instance.
  const editor: BlockNoteEditor | null = useBlockNote({
    // Listens for when the editor's contents change.
    onEditorContentChange: (editor: BlockNoteEditor) => 
      // Converts the editor's contents to an array of Block objects.
      setBlocks(editor.topLevelBlocks),
      // insertBlocks(mockRun)
  })



  
  /* Discard if not hepful context.. 

  // Creates a new editor instance.
  const editor: BlockNoteEditor | null = useBlockNote({


    // Listens for when the text cursor position changes.
    onTextCursorPositionChange: (editor: BlockNoteEditor) => {
      // Gets the blocks currently spanned by the selection.
      const selectedBlocks: Block[] | undefined = editor.getSelection()?.blocks;
      // Converts array of blocks to set of block IDs for more efficient comparison.
      const selectedBlockIds: Set<string> = new Set<string>(
        selectedBlocks?.map((block) => block.id) || []
      );

      editor.insertBlocks((blocksToInsert: Block[], referenceBlock: blocks, placement?: "before") => {

      });

      // Traverses all blocks.
      editor.forEachBlock((block: Block) => {

        // If no selection is active, resets the background color of each block.
        if (selectedBlockIds.size === 0) {
          editor.updateBlock(block, {
            props: { backgroundColor: "default" },
          });

          return true;
        }

        if (
          selectedBlockIds.has(block.id) &&
          block.props.backgroundColor !== "red"
        ) {
          // If the block is currently spanned by the selection, makes its
          // background blue if it isn't already.
          editor.updateBlock(block, {
            props: { backgroundColor: "red" },
          });
        } else if (
          !selectedBlockIds.has(block.id) &&
          block.props.backgroundColor === "red"
        ) {
          // If the block is not currently spanned by the selection, resets
          // its background if it's blue.
          editor.updateBlock(block, {
            props: { backgroundColor: "default" },
          });
        }

        return true;
      });
    },
  });
*/


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
