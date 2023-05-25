

import { OpenAI } from "langchain/llms/openai";
import {
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    PromptTemplate,
    SystemMessagePromptTemplate,
  } from "langchain/prompts";
  

const openAIKey ="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";


export const run = async () => {

    // We can also use the `fromTemplate` method to create a `PromptTemplate` object.
    const prompt = PromptTemplate.fromTemplate(
      "Generate documentation for my project {project}?"
    );
    // TODO: Need to connect project with the input in ui
    const response = await prompt.format({ project: "auto documentation generatior" });
    console.log({ responseB: response });
    /*
    {
      response: 'Generate documentation for my project auto documentation generatior?'
    }
    */
    const model = new OpenAI({
      temperature: 0.9,
      openAIApiKey: openAIKey, // In Node.js defaults to process.env.OPENAI_API_KEY, needs to store it in env file
    });
    // call response 
    // const res = await model.call(
    //   response
    // );
    // console.log(res);

    // For chat models, we provide a `ChatPromptTemplate` class that can be used to format chat prompts.
    const chatPrompt = ChatPromptTemplate.fromPromptMessages([
      SystemMessagePromptTemplate.fromTemplate(
        "This tool can translate {input_language} to {output_language}."
      ),
      HumanMessagePromptTemplate.fromTemplate("{text}"),
    ]);
  
    // The result can be formatted as a string using the `format` method.
    const responseC = await chatPrompt.format({
      input_language: "English",
      output_language: "Chinese",
      text: "// Generated documented",
    });
    console.log({ responseC });

  
    // The result can also be formatted as a list of `ChatMessage` objects by returning a `PromptValue` object and calling the `toChatMessages` method.
    // More on this below.
    const responseD = await chatPrompt.formatPromptValue({
      input_language: "English",
      output_language: "French",
      text: "I love programming.",
    });
    const messages = responseD.toChatMessages();
    console.log({ messages });

  };