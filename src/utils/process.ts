

// import { OpenAI } from "langchain/llms/openai";
// import {
//     ChatPromptTemplate,
//     HumanMessagePromptTemplate,
//     PromptTemplate,
//     SystemMessagePromptTemplate,
//   } from "langchain/prompts";

const { Configuration, OpenAIApi } = require("openai");

const openAIKey = "Will update";


export const run = async (inputFAQ: string) => {
  // const configuration = new Configuration({
  //   apiKey: openAIKey,
  // });
  // const openai = new OpenAIApi(configuration);

  // //console.log("inputFaQ:", inputFAQ)
  // // const inputFAQ = "amazon"
  // const response = await openai.createCompletion({
  //   // model: "text-curie-001",
  //   model: "text-davinci-003",
  //   prompt: `could you please generate a documentation about ${inputFAQ}?`,
  //   temperature: 0,
  //   max_tokens: 100,
  //   top_p: 1,
  //   frequency_penalty: 0.0,
  //   presence_penalty: 0.0,
  //   // stop: ["\n"],
  // });
  // console.log(response.data.choices[0].text)
  // return response.data.choices[0].text;
  return inputFAQ;
}