const { Configuration, OpenAIApi } = require("openai");

const openAIKey = "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";

// function used to generate documentation
export const generateDoc = async (inputDoc: string) => {
  
  // const configuration = new Configuration({
  //   apiKey: openAIKey,
  // });
  // const openai = new OpenAIApi(configuration);

  // console.log("inputDoc:", inputDoc)
  // // const inputFAQ = "amazon"
  // const response = await openai.createCompletion({
  //   // model: "text-curie-001",
  //   model: "text-davinci-003",
  //   prompt: `Create a fictional Press Release about ${inputDoc}. The press release should be 3-4 paragraphs long. The first paragraph should explain the benefit and most important capabilities of the new product. The last paragraph should include a fictional quote from a customer about the benefits of the new product. The writing should be concise. The last paragraph should quote a fictional testimonial about why the new product provide value as a customer.`,
  //   temperature: 0,
  //   max_tokens: 100,
  //   top_p: 1,
  //   frequency_penalty: 0.0,
  //   presence_penalty: 0.0,
  //   // stop: ["\n"],
  // });
  // console.log(response.data.choices[0].text)
  // return response.data.choices[0].text;
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id sem ut tortor dignissim suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eget sollicitudin ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque nec sem massa. Praesent ultricies ut purus euismod ultrices. Integer id eleifend diam. Pellentesque tincidunt euismod fermentum. Nam pretium mauris quis tellus dictum, tempus aliquet odio fermentum. Donec congue hendrerit lorem sit amet eleifend."
}

// function used to generate FAQ
export const generateFaq = async (inputFaq: string) => {
  const configuration = new Configuration({
    apiKey: openAIKey,
  });
  const openai = new OpenAIApi(configuration);

  console.log("inputFaq:", inputFaq)
  // const inputFAQ = "amazon"
  const response = await openai.createCompletion({
    // model: "text-curie-001",
    model: "text-davinci-003",
    prompt: `Create a FAQ about ${inputFaq}. `,
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    // stop: ["\n"],
  });
  console.log(response.data.choices[0].text)
  return response.data.choices[0].text;
}