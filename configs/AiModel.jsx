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
  responseMimeType: "application/json",
};

  export const GenerateCourseLayout_AI = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate A course Tutorial on following Detail with field as Course Name,Description, Along wiith chapter Name, about Duration Category : ‘Programming’, topic: Python, Level:Basic, Duration: 1hr, NoOf Chapters:5, in JSON format"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"courseName\": \"Introduction to Python Programming\",\n  \"description\": \"A beginner-friendly course covering the fundamentals of Python programming.  This course will equip you with the basic skills needed to write your own Python programs.\",\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"duration\": \"1hr\",\n  \"chapters\": [\n    {\n      \"chapterName\": \"Setting up your Python Environment\",\n      \"duration\": \"10 minutes\",\n      \"description\": \"Learn how to install Python, choose a suitable code editor (like VS Code or Thonny), and run your first Python script.\"\n    },\n    {\n      \"chapterName\": \"Data Types and Variables\",\n      \"duration\": \"15 minutes\",\n      \"description\": \"Explore fundamental data types like integers, floats, strings, and booleans. Understand how to declare and use variables.\"\n    },\n    {\n      \"chapterName\": \"Operators and Expressions\",\n      \"duration\": \"15 minutes\",\n      \"description\": \"Learn about arithmetic, comparison, logical, and assignment operators.  Practice writing simple expressions and understanding operator precedence.\"\n    },\n    {\n      \"chapterName\": \"Control Flow (if-else statements and loops)\",\n      \"duration\": \"15 minutes\",\n      \"description\": \"Master conditional statements (if, elif, else) to control the flow of your programs. Learn about for and while loops for iteration.\"\n    },\n    {\n      \"chapterName\": \"Introduction to Functions\",\n      \"duration\": \"15 minutes\",\n      \"description\": \"Understand the concept of functions, how to define and call them. Learn about parameters and return values.  Write simple functions to perform reusable tasks.\"\n    }\n  ]\n}\n```\n"},
        ],
      },
    ],
  });

  // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  // console.log(result.response.text());
