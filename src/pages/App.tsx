import React from 'react';
import './App.scss';
import Header from '../comps/Header/Header';
import "@blocknote/core/style.css";
import chevronDown from '../images/chevron-down.svg';
import document from '../images/document.svg';
import askQuestion from '../images/question.png';
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

        <div className="editor card">
          <InputField></InputField>
        </div>

        <div className="sidebar">
          <div className="sidebar-main">
            <h3>How to write a great PRFAQ</h3>
            <p>Tailor your press release to the customer problem you are trying to solve. Each press release is different, but here is a suggested outline. For help with your first draft, use the PR/FAQ Writing Tool. For a downloadable quick-start guide with this outline, see the Working Backwards Document Guide.</p>
          </div>
          <div className="sidebar-question">
            <img src={askQuestion} />
          </div>
        </div>


      </div>
    </div>

  );
}

export default App;
