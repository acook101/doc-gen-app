import React from 'react';
import './App.scss';
import Header from '../comps/Header/Header'

import "@blocknote/core/style.css";

import chevronDown from '../images/chevron-down.svg';
import document from '../images/document.svg';
import search from '../images/search.svg';
import plus from '../images/plus.svg';
import blockQuote from '../images/block-quote.svg';
import { InputField } from './InputField';

function App() {


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
    <InputField></InputField>
        </div>
      </div>
    </div>

  );
}

export default App;
