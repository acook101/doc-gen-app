const { Configuration, OpenAIApi } = require("openai");

const openAIKey = "Update here";

// function used to generate documentation
export const generateDoc = async (inputDoc: string) => {
  const configuration = new Configuration({
    apiKey: openAIKey,
  });
  const openai = new OpenAIApi(configuration);

  console.log("inputDoc:", inputDoc)
  // const inputFAQ = "amazon"
  const response = await openai.createCompletion({
    // model: "text-curie-001",
    model: "text-davinci-003",
    prompt: `Create a fictional Press Release about ${inputDoc}. The press release should be 3-4 paragraphs long. The first paragraph should explain the benefit and most important capabilities of the new product. The last paragraph should include a fictional quote from a customer about the benefits of the new product. The writing should be concise. The last paragraph should quote a fictional testimonial about why the new product provide value as a customer.`,
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