const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  
    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate A course Tutorial on following Detail with field as Course Name,Description, Along wiith chapter Name, about DurationL Category : ‘Programming’, topic: Python, Level:Basic, Duration: 1hr, NoOf Chapters:5, in json format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"courseName\": \"Python Basics\",\n  \"description\": \"A beginner-friendly introduction to the Python programming language. This course covers fundamental concepts, allowing you to write your first Python programs.\",\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \""},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
  