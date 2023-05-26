import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { generateDoc, generateFaq } from "../utils/process";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { useEffect, useState } from "react";
import { Block, BlockNoteEditor } from "@blocknote/core";

export const InputField = () => {
  const [state, setState] = React.useState("prompt");
  // Stores the current Markdown content.
  const [markdown, setMarkdown] = useState<string>("");

  // called when text input field changes
  const handleChange = (event: any) => {
    setState(event.target.value);
  };

  // function that handles clicking"generate context" button 
  const handleClick = async (event: any) => {
    setState(event.target.value);
    generateDoc(state);
    setMarkdown(await generateDoc(state));
    console.log("the result of generateDoc() is ", state);
  };

    // function that handles clicking"generate FAQ" button 
  const handleFaqClick = async (event: any) => {
    setState(event.target.value);
    generateFaq(state);
    setMarkdown(await generateFaq(state));
    console.log("the result of generateFaq() is ", state);
  };

  // Creates a new editor instance.
  const editor: BlockNoteEditor | null = useBlockNote({
    // Makes the editor non-editable.
  });

  useEffect(() => {
    if (editor) {
      // Whenever the current Markdown content changes, converts it to an array
      // of Block objects and replaces the editor's content with them.
      const getBlocks = async () => {
        const blocks: Block[] = await editor.markdownToBlocks(markdown);
        editor.replaceBlocks(editor.topLevelBlocks, blocks);
      };
      getBlocks();
    }
  }, [editor, markdown]);
  // Stores the editor's contents as an array of Block objects.
  // const [blocks, setBlocks] = useState<Block[] | null>(null);

  return (
    <>

      <div className="intro-prompt">
      <h2 className="document-section__title">What is your PRFAQ about?</h2>
        <span>
          <TextField
            id="input"
            sx={{ m: 1, width: "40ch" }}
            variant="standard"
            onChange={handleChange}
            value={state}
          >
            {" "}
          </TextField>
        </span>
      </div>

      <div className="document-section">
        <Button variant="contained" onClick={handleClick}>
          Get Context!
        </Button>
      </div>
      <div className="document-section">
        <h2 className="document-section__title">FAQs</h2>
        <Button variant="contained" onClick={handleFaqClick}>
          Get FAQ!
        </Button>
        <br />
      </div>
      <BlockNoteView editor={editor} />
      {/* <div className="cardItem"><p>`${JSON.stringify(response, null, 2)}`</p></div> */}
    </>
  );
};
