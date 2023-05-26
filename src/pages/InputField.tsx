import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { generateDoc, generateFaq } from "../utils/process";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { useEffect, useState } from "react";
import { Block, BlockNoteEditor } from "@blocknote/core";
import '../styles/shared.scss';
import plus from '../images/plus.svg'
import aiIcon from '../images/ai-icon.svg'



export const InputField = () => {
  const [state, setState] = React.useState("");
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
        <div className="document-section__prompt-area">
        {/* <img src={aiIcon} className="ai-logo" alt="logo" /> */}
             <TextField
              id="input"
              className="document-section_text-field"
              placeholder="Write a brief description of the project vision and customer benefit for a new product, feature, or service." 
              sx={{ m: 1, width: "40ch" }}
              variant="standard"
              color='secondary'
              multiline={true}
              onChange={handleChange}
              value={state}
            >
              {" "}
            </TextField>
        </div>
      </div>

      <div className="document-section">
        <div className="ds-generate__container">
          <div className="ds-container__line"></div>
          <IconButton className="prompt-btn" variant="contained" onClick={handleClick}>
          <img src={aiIcon} className="generate-logo" alt="logo" />
          <h3>Generate</h3>
          </IconButton>
          <div className="ds-container__line"></div>
        </div>
      </div>

      <BlockNoteView editor={editor} />

      <div className="document-section document-section--faqs">
        <h2 className="document-section__title">Customer FAQs</h2>
        <p className="document-section__description">Good FAQs help us vet an idea. While we may fall in love with the idea in the Press Release, the FAQs help us get into the details of how it will work for customers and how we'd execute.</p>
        <div className="ds-generate__container left-align">
          <ul className="document-section__auto-add">
            <li><input type="checkbox" checked /> Add an FAQ about what this product does that the customer couldn't do before</li>
            <li><input type="checkbox" checked /> Add an FAQ about how the customer will find out about this new product</li>
            <li>
              <IconButton className="prompt-btn" variant="contained" onClick={handleFaqClick}>
                <img src={plus} className="generate-logo" alt="logo" />
                <h3>Generate Customer FAQs</h3>
              </IconButton>
            </li>
          </ul>
        </div>
      </div>

      

      <div className="document-section document-section--faqs">
        <h2 className="document-section__title">Internal FAQs</h2>
        <p className="document-section__description">Internal/Stakeholder FAQs are internal business questions that other leaders, partner teams, or other Amazonians may ask you.</p>
        <div className="ds-generate__container left-align">
          <ul className="document-section__auto-add">
            <li><input type="checkbox" checked /> Add an internal FAQ about our North Star Vision</li>
            <li>
              <IconButton className="prompt-btn" variant="contained" onClick={handleFaqClick}>
                <img src={plus} className="generate-logo" alt="logo" />
                <h3>Generate Internal FAQs</h3>
              </IconButton>
            </li>
          </ul>
        </div>
      </div>

      <div className="document-section document-section--faqs">
        <h2 className="document-section__title">Appendix</h2>
        <p className="document-section__description">Information and details referenced above should go in your appendix.</p>
        <div className="ds-generate__container left-align">
          <ul className="document-section__auto-add">
            <li>
              <IconButton className="prompt-btn" variant="contained" onClick={handleFaqClick}>
                <img src={plus} className="generate-logo" alt="logo" />
                <h3>Generate Internal FAQs</h3>
              </IconButton>
            </li>
          </ul>
        </div>
      </div>


      {/* <div className="cardItem"><p>`${JSON.stringify(response, null, 2)}`</p></div> */}
    </>
  );
};
