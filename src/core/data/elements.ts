import type { AIElement } from "@/core/types";

export const ELEMENTS: AIElement[] = [
  // G1 - AI Basics
  {
    id: "token",
    symbol: "TK",
    name: "Token",
    group: 1,
    row: 1,
    index: 1,
    tagline: "The small pieces AI reads and writes",
    whatItIs:
      "When AI reads or writes text, it breaks it into small pieces called tokens. A token is not always a whole word — sometimes one word becomes two tokens, and sometimes three short words count as one. Providers charge by token count and use it to decide how much fits in one conversation.",
    whenToUse:
      "Think about tokens when you are explaining API bills to your team, wondering why an answer cut off mid-sentence, or comparing plans from different providers.",
    watchOut:
      "Do not assume that fewer words always means fewer tokens. Special characters, code, and unusual spelling can add up quickly, so a short message can still cost more than you expect.",
    links: [
      {
        label: "See how tokens work",
        url: "https://platform.openai.com/tokenizer",
        icon: "simple-icons/openai",
      },
    ],
    relatedIds: ["context-window", "model", "prompt"],
  },
  {
    id: "model",
    symbol: "MD",
    name: "Model",
    group: 1,
    row: 2,
    index: 2,
    tagline: "The brain behind every AI app",
    whatItIs:
      "The model is the trained brain that reads your input and writes a reply. ChatGPT, Claude, Gemini, and every other AI tool you use is powered by a model underneath. Everything else in your setup — prompts, data, automations — runs on top of this choice.",
    whenToUse:
      "You are working at the model layer when you choose which AI engine powers your chatbot, assistant, or custom business tool. This is one of the first big decisions in any AI project.",
    watchOut:
      "If results are poor, many people swap models first — but the real problem is often bad instructions, missing company data, or a broken workflow. Fix those before chasing the newest model name.",
    links: [
      {
        label: "What is an LLM?",
        url: "https://www.ibm.com/think/topics/large-language-models",
      },
    ],
    relatedIds: ["token", "prompt", "ai-cost"],
  },
  {
    id: "prompt",
    symbol: "PR",
    name: "Prompt",
    group: 1,
    row: 3,
    index: 3,
    tagline: "Your instructions to the AI",
    whatItIs:
      "A prompt is what you type or send to tell the AI what you want — like giving clear directions to a helpful assistant. It can be a question, a task, or a full set of rules for how the answer should look. The quality of your prompt often matters more than which tool you picked.",
    whenToUse:
      "You use a prompt every single time you want something useful back from AI — whether that is an email draft, a summary, a decision, or a piece of code. Better prompts lead to steadier, more useful results.",
    watchOut:
      "Vague prompts get vague answers. Say who the answer is for, what you need, and how you want it formatted. Adding more words without adding structure usually does not help.",
    links: [
      {
        label: "Prompt tips",
        url: "https://platform.openai.com/docs/guides/prompt-engineering",
        icon: "simple-icons/openai",
      },
    ],
    relatedIds: ["system-prompt", "problem-layer", "temperature"],
  },
  {
    id: "context-window",
    symbol: "CW",
    name: "Context Window",
    group: 1,
    row: 4,
    index: 4,
    tagline: "How much it can hold in one chat",
    whatItIs:
      "The context window is how much text the AI can keep in its head during a single conversation — your messages, its replies, and any files you attach. Think of it like short-term memory with a fixed size. When the window fills up, older details drop off and the AI may forget things you said earlier.",
    whenToUse:
      "This matters when you work with long documents, multi-step projects, or back-and-forth chats where earlier details still matter. It also explains why very long threads sometimes go off track.",
    watchOut:
      "The AI can feel like it is listening the whole time, but it may have already lost early instructions. For important long work, repeat key rules or split the job into smaller chunks.",
    links: [
      {
        label: "Context explained",
        url: "https://www.anthropic.com/news/claude-3-family",
        icon: "simple-icons/anthropic",
      },
    ],
    relatedIds: ["token", "memory", "model"],
  },
  {
    id: "temperature",
    symbol: "TP",
    name: "Temperature",
    group: 1,
    row: 5,
    index: 5,
    tagline: "The creativity dial",
    whatItIs:
      "Temperature is a setting that controls how predictable or creative the AI's answers are. A low temperature keeps replies steady and focused. A higher temperature allows more variety, surprise, and imagination in the wording.",
    whenToUse:
      "Turn it down when you need consistent facts, forms, policies, or repeatable business outputs. Turn it up when you want brainstorming, naming ideas, or fresh creative angles.",
    watchOut:
      "Raising temperature will not fix wrong facts — it makes answers more random, not more accurate. If the information is incorrect, the problem is usually the prompt, the data, or the model choice.",
    links: [
      {
        label: "Temperature setting",
        url: "https://platform.openai.com/docs/api-reference/chat/create#chat-create-temperature",
        icon: "simple-icons/openai",
      },
    ],
    relatedIds: ["ai-cost", "prompt", "evals"],
  },
  {
    id: "ai-cost",
    symbol: "CT",
    name: "AI Cost",
    group: 1,
    row: 6,
    index: 6,
    tagline: "What your AI work will cost",
    whatItIs:
      "AI cost is the money you spend when models read your input, write answers, search files, use tools, or run many steps in a workflow. Small tests may feel free, but busy automations can add up quickly.",
    whenToUse:
      "Think about cost before you launch anything that runs often, touches many customers, or loops through long documents.",
    watchOut:
      "The biggest model is not always the best business choice. Use cheaper models for simple jobs and save expensive models for the work that really needs them.",
    links: [
      {
        label: "OpenAI pricing",
        url: "https://platform.openai.com/docs/pricing",
        icon: "simple-icons/openai",
      },
    ],
    relatedIds: ["model", "temperature", "roi"],
  },

  // G2 - Your Data
  {
    id: "training-data",
    symbol: "TD",
    name: "Training Data",
    group: 2,
    row: 1,
    index: 7,
    tagline: "What the model learned before you used it",
    whatItIs:
      "Training data is the huge collection of books, websites, code, and other material the model studied before you ever opened a chat window. It shapes what the model knows, how it writes, and what kinds of mistakes it makes. It is not the same as your private company files.",
    whenToUse:
      "Think about training data when you are wondering why the model knows general topics but not your internal policies, prices, or customer history.",
    watchOut:
      "The model does not automatically know your business secrets. If you need answers from your own world, you must add that information through tools like a knowledge base, RAG, or memory.",
    links: [
      {
        label: "How models learn",
        url: "https://www.ibm.com/think/topics/machine-learning",
      },
    ],
    relatedIds: ["embedding", "rag", "fine-tuning"],
  },
  {
    id: "embedding",
    symbol: "EM",
    name: "Embedding",
    group: 2,
    row: 2,
    index: 8,
    tagline: "Turning meaning into numbers",
    whatItIs:
      "An embedding converts text into a list of numbers that capture meaning. Similar ideas end up with similar number patterns, even when the words are different. That is how a search for refund policy can still find return rules.",
    whenToUse:
      "Embeddings matter when you want search that understands meaning instead of only matching exact keywords — especially across large document libraries.",
    watchOut:
      "Embeddings alone do not answer questions. You still need a search step to find the right content and a model step to turn that content into a clear reply.",
    links: [
      {
        label: "Embeddings guide",
        url: "https://platform.openai.com/docs/guides/embeddings",
        icon: "simple-icons/openai",
      },
    ],
    relatedIds: ["vector-database", "rag", "knowledge-base"],
  },
  {
    id: "vector-database",
    symbol: "VD",
    name: "Vector Database",
    group: 2,
    row: 3,
    index: 9,
    tagline: "Search your files by meaning",
    whatItIs:
      "A vector database stores embeddings so AI can search your content by meaning, not just exact words. It works like a smart filing system behind document search, help centers, and many RAG setups.",
    whenToUse:
      "Reach for a vector database when you have hundreds or thousands of documents and normal keyword search keeps missing the right answer.",
    watchOut:
      "Dumping entire huge files in as one block usually hurts results. Split content into sensible chunks first, or search quality will suffer.",
    links: [
      {
        label: "What is a vector DB?",
        url: "https://www.pinecone.io/learn/vector-database/",
      },
    ],
    relatedIds: ["embedding", "rag", "knowledge-base"],
  },
  {
    id: "knowledge-base",
    symbol: "KB",
    name: "Knowledge Base",
    group: 2,
    row: 4,
    index: 10,
    tagline: "Your trusted company library",
    whatItIs:
      "A knowledge base is an organized collection of your company's documents, FAQs, policies, and guides that AI is allowed to read. It keeps answers grounded in material you trust instead of open-web guesses.",
    whenToUse:
      "Use a knowledge base when customers or staff need answers from your real business information — product details, support policies, onboarding guides, or internal procedures.",
    watchOut:
      "Outdated or messy documents produce outdated or messy answers. Treat it like a real library: keep it current, clean, and owned by someone on your team.",
    links: [
      {
        label: "Build a knowledge base",
        url: "https://www.zendesk.com/blog/knowledge-base/",
      },
    ],
    relatedIds: ["rag", "vector-database", "embedding"],
  },
  {
    id: "rag",
    symbol: "RG",
    name: "RAG",
    group: 2,
    row: 5,
    index: 11,
    tagline: "Look it up, then answer",
    whatItIs:
      "RAG stands for Retrieval Augmented Generation. In plain terms, the AI searches your documents first, pulls back the best matching pieces, and then writes an answer based on that evidence. It is one of the most common ways to make AI useful for real businesses.",
    whenToUse:
      "Choose RAG when you need answers grounded in your own files, want fresher information without retraining a model, or need to reduce guessing on company-specific facts.",
    watchOut:
      "RAG cannot fix a bad knowledge base or a broken process. If search keeps retrieving the wrong pages, the answer will still be wrong — fix the library and chunking first.",
    links: [
      {
        label: "RAG explained",
        url: "https://www.cloudflare.com/learning/ai/what-is-retrieval-augmented-generation/",
      },
    ],
    relatedIds: ["knowledge-base", "vector-database", "fine-tuning"],
  },
  {
    id: "fine-tuning",
    symbol: "FT",
    name: "Fine-Tuning",
    group: 2,
    row: 6,
    index: 12,
    tagline: "Teach the model your style",
    whatItIs:
      "Fine-tuning teaches an existing model your specific tone, format, or specialty using your own examples. It changes how the model behaves by default, not just what it reads in a single chat.",
    whenToUse:
      "Fine-tuning makes sense when you need the same voice, structure, or behavior across thousands of similar requests — like support replies, medical note formatting, or legal summaries.",
    watchOut:
      "It is a weak choice for facts that change every week. For fresh, updateable information, RAG or a knowledge base is usually the better layer.",
    links: [
      {
        label: "Fine-tuning docs",
        url: "https://platform.openai.com/docs/guides/fine-tuning",
        icon: "simple-icons/openai",
      },
    ],
    relatedIds: ["rag", "training-data", "model"],
  },

  // G3 - Quality & Safety
  {
    id: "system-prompt",
    symbol: "SP",
    name: "System Prompt",
    group: 3,
    row: 1,
    index: 13,
    tagline: "The hidden rules behind the bot",
    whatItIs:
      "A system prompt is the behind-the-scenes instruction that sets the AI's role, tone, and boundaries before any user message appears. Customers usually never see it, but it shapes every reply. Think of it as the job description for the assistant.",
    whenToUse:
      "You need a system prompt when building a customer-facing bot that must stay on-brand, follow company policy, refuse certain topics, or play a consistent role.",
    watchOut:
      "A long rule list that nobody tested in real conversations will still break in the wild. Test edge cases early, especially the awkward requests users actually send.",
    links: [
      {
        label: "System messages",
        url: "https://platform.openai.com/docs/guides/text-generation#messages-and-roles",
        icon: "simple-icons/openai",
      },
    ],
    relatedIds: ["prompt", "guardrails", "problem-layer"],
  },
  {
    id: "memory",
    symbol: "MY",
    name: "Memory",
    group: 3,
    row: 2,
    index: 14,
    tagline: "Remembers facts across chats",
    whatItIs:
      "Memory lets AI keep useful facts about a person or business and bring them back in future conversations. Without memory, every chat starts from zero. With memory, the assistant can remember preferences, client names, or ongoing projects.",
    whenToUse:
      "Memory is worth using when people expect the assistant to recognize them over time — for example returning customers, account managers, or internal team tools.",
    watchOut:
      "Do not store sensitive data in memory without a clear plan for retention, access, and deletion. What gets remembered should be deliberate, not accidental.",
    links: [
      {
        label: "ChatGPT memory",
        url: "https://help.openai.com/en/articles/8590148-memory-faq",
        icon: "simple-icons/openai",
      },
    ],
    relatedIds: ["context-window", "agent", "knowledge-base"],
  },
  {
    id: "multimodal",
    symbol: "MM",
    name: "Multimodal",
    group: 3,
    row: 3,
    index: 15,
    tagline: "Works with images and files too",
    whatItIs:
      "Multimodal AI can understand more than typed words. It can work with images, PDFs, screenshots, audio, and sometimes video. You can upload a photo of a whiteboard, a scanned invoice, or a chart and ask questions about it.",
    whenToUse:
      "Choose multimodal AI when your real work includes visuals, scanned paperwork, product photos, or recordings — not just text in a chat box.",
    watchOut:
      "Blurry photos, messy scans, and tiny chart labels still cause mistakes. Treat important outputs like drafts that need a human check.",
    links: [
      {
        label: "Gemini multimodal",
        url: "https://ai.google.dev/gemini-api/docs/vision",
        icon: "simple-icons/google",
      },
    ],
    relatedIds: ["model", "agent", "use-case"],
  },
  {
    id: "hallucination",
    symbol: "HA",
    name: "Hallucination",
    group: 3,
    row: 4,
    index: 16,
    tagline: "When AI sounds sure but is wrong",
    whatItIs:
      "A hallucination is when AI gives an answer that sounds confident but is made up, outdated, or not supported by the facts you gave it.",
    whenToUse:
      "Remember this whenever AI writes facts, numbers, legal text, medical text, customer promises, or anything your business will rely on.",
    watchOut:
      "A polished answer is not the same as a true answer. Ask for sources, use your own knowledge base, and keep humans in the loop for important decisions.",
    links: [
      {
        label: "AI risk guide",
        url: "https://www.nist.gov/itl/ai-risk-management-framework",
      },
    ],
    relatedIds: ["guardrails", "evals", "knowledge-base"],
  },
  {
    id: "guardrails",
    symbol: "GR",
    name: "Guardrails",
    group: 3,
    row: 5,
    index: 17,
    tagline: "Safety rules and boundaries",
    whatItIs:
      "Guardrails are filters and rules that stop AI from doing or saying harmful, off-brand, or off-limits things. They can block bad inputs, flag risky outputs, or send sensitive cases to a human instead of answering automatically.",
    whenToUse:
      "Use guardrails when AI faces customers, touches money, handles personal data, or could damage trust with one bad reply.",
    watchOut:
      "Guardrails reduce risk, but they do not replace judgment on high-stakes decisions. Pair them with human review where mistakes are expensive.",
    links: [
      {
        label: "AI safety basics",
        url: "https://www.nist.gov/itl/ai-risk-management-framework",
      },
    ],
    relatedIds: ["system-prompt", "human-in-the-loop", "evals"],
  },
  {
    id: "evals",
    symbol: "EV",
    name: "Evals",
    group: 3,
    row: 6,
    index: 18,
    tagline: "Test before you trust it",
    whatItIs:
      "Evals are structured tests that measure how well your AI performs — accuracy, tone, safety, speed, and consistency. Instead of arguing from gut feeling, you run sample questions and score the answers with clear criteria.",
    whenToUse:
      "Run evals before launch, after changing models, or whenever quality feels subjective and your team cannot agree whether the system is good enough.",
    watchOut:
      "Testing only easy, happy-path examples creates false confidence. Real users will hit the edge cases your eval set never covered.",
    links: [
      {
        label: "OpenAI evals guide",
        url: "https://platform.openai.com/docs/guides/evals",
        icon: "simple-icons/openai",
      },
    ],
    relatedIds: ["guardrails", "roi", "workflow"],
  },

  // G4 - AI Engines
  {
    id: "gpt",
    symbol: "GP",
    name: "GPT",
    group: 4,
    row: 1,
    index: 19,
    tagline: "OpenAI's general-purpose AI line",
    whatItIs:
      "GPT is OpenAI's model family for writing, reasoning, coding, vision, and tool-using workflows. The current lineup includes larger frontier models for complex work and smaller variants for faster, lower-cost production tasks.",
    whenToUse:
      "Use GPT when you want a well-supported default with strong SDKs, tool calling, retrieval, computer-use options, and a large ecosystem of examples.",
    watchOut:
      "Do not automatically choose the biggest GPT model. Route routine work to smaller models and save frontier models for tasks where the extra reasoning actually changes the result.",
    links: [
      {
        label: "ChatGPT",
        url: "https://chat.openai.com",
        icon: "simple-icons/openai",
      },
      {
        label: "OpenAI docs",
        url: "https://platform.openai.com/docs",
        icon: "simple-icons/openai",
      },
    ],
    relatedIds: ["claude", "gemini", "ai-stack"],
  },
  {
    id: "claude",
    symbol: "CL",
    name: "Claude",
    group: 4,
    row: 2,
    index: 20,
    tagline: "Careful reasoning and long-context work",
    whatItIs:
      "Claude is Anthropic's model family, currently centered on Opus, Sonnet, and Haiku tiers. It is especially useful for long-context analysis, agentic coding, writing, and instruction-heavy workflows.",
    whenToUse:
      "Use Claude when you need steady reasoning across large documents, careful tone, codebase work, or high-autonomy agent tasks where following constraints matters.",
    watchOut:
      "A capable model will not fix missing company files, weak prompts, or broken integrations. If answers lack your business facts, the problem is usually a data layer issue.",
    links: [
      {
        label: "Try Claude",
        url: "https://claude.ai",
        icon: "simple-icons/anthropic",
      },
      {
        label: "Anthropic",
        url: "https://www.anthropic.com",
        icon: "simple-icons/anthropic",
      },
    ],
    relatedIds: ["gpt", "gemini", "mcp"],
  },
  {
    id: "gemini",
    symbol: "GM",
    name: "Gemini",
    group: 4,
    row: 3,
    index: 21,
    tagline: "Google's multimodal AI stack",
    whatItIs:
      "Gemini is Google's AI model family for text, images, audio, video, coding, and agentic workflows. Recent Gemini API models include Pro, Flash, Flash-Lite, Live, image, video, and translation variants.",
    whenToUse:
      "Use Gemini when your work already lives in Google Cloud or Google Workspace, or when you need multimodal features such as live audio, visual generation, or high-volume Flash-style workloads.",
    watchOut:
      "Not every Gemini feature is available in every country, account type, or product yet. Check what is actually turned on in your setup before planning around it.",
    links: [
      {
        label: "Gemini app",
        url: "https://gemini.google.com",
        icon: "simple-icons/google",
      },
      {
        label: "Google AI docs",
        url: "https://ai.google.dev",
        icon: "simple-icons/google",
      },
    ],
    relatedIds: ["gpt", "claude", "multimodal"],
  },
  {
    id: "deepseek",
    symbol: "DS",
    name: "DeepSeek",
    group: 4,
    row: 4,
    index: 22,
    tagline: "Cost-aware reasoning and coding",
    whatItIs:
      "DeepSeek is an AI provider with chat and reasoning models that can be accessed through OpenAI-compatible and Anthropic-compatible API formats. Its newer v4 models make it easier to test DeepSeek inside existing agent and coding-tool setups.",
    whenToUse:
      "Consider DeepSeek when you want another capable reasoning or coding backend and your system is already designed to swap providers behind a common API layer.",
    watchOut:
      "Before sending private business data anywhere, check where requests are processed, what the provider allows, and whether your industry has extra rules.",
    links: [
      { label: "DeepSeek", url: "https://www.deepseek.com" },
      { label: "API platform", url: "https://platform.deepseek.com" },
    ],
    relatedIds: ["mistral", "gpt", "api"],
  },
  {
    id: "mistral",
    symbol: "MI",
    name: "Mistral",
    group: 4,
    row: 5,
    index: 23,
    tagline: "Open-weight and efficient model options",
    whatItIs:
      "Mistral offers open and commercial models across generalist, reasoning, coding, document, speech, and OCR use cases. Its lineup is useful when you care about deployment control, European provider options, or efficient high-volume inference.",
    whenToUse:
      "Use Mistral for classification, extraction, coding, document processing, or self-hosting/open-weight scenarios where model control matters as much as raw benchmark scores.",
    watchOut:
      "The smallest models are not the right tool for huge, complex documents or deep multi-step analysis. Match model size to the actual job.",
    links: [
      {
        label: "Mistral AI",
        url: "https://mistral.ai",
        icon: "simple-icons/mistralai",
      },
    ],
    relatedIds: ["deepseek", "gpt", "ai-cost"],
  },
  {
    id: "model-router",
    symbol: "MR",
    name: "Model Router",
    group: 4,
    row: 6,
    index: 24,
    tagline: "Send each job to the right model",
    whatItIs:
      "A model router is a simple rule or system that chooses which AI model should handle each task. Easy jobs can go to cheaper models, while hard jobs go to stronger ones.",
    whenToUse:
      "Use a router when one business workflow uses many kinds of AI work, such as quick sorting, long writing, image reading, and deep reasoning.",
    watchOut:
      "Bad routing can make answers worse or costs higher. Start with simple rules, watch the results, and improve the routing slowly.",
    links: [
      {
        label: "OpenAI models",
        url: "https://platform.openai.com/docs/models",
        icon: "simple-icons/openai",
      },
    ],
    relatedIds: ["gpt", "claude", "ai-cost"],
  },

  // G5 - Connections
  {
    id: "api",
    symbol: "AP",
    name: "API",
    group: 5,
    row: 1,
    index: 25,
    tagline: "How your apps talk to AI",
    whatItIs:
      "An API is a standard way for software to talk to an AI model over the internet. Your website, mobile app, or automation can send a request with a prompt and settings, and the provider sends back the model's answer — usually billed per use.",
    whenToUse:
      "You need an API when you want AI inside your own product or internal tool, not only inside a chat website you visit by hand.",
    watchOut:
      "Set spending limits and monitor usage in production. A bug that calls the API in a loop can burn through budget surprisingly fast.",
    links: [
      {
        label: "OpenAI API",
        url: "https://platform.openai.com/docs/api-reference",
        icon: "simple-icons/openai",
      },
    ],
    relatedIds: ["api-key", "sdk", "function-calling"],
  },
  {
    id: "webhooks",
    symbol: "WH",
    name: "Webhooks",
    group: 5,
    row: 2,
    index: 26,
    tagline: "Instant alerts between apps",
    whatItIs:
      "A webhook is like a doorbell between apps. When something happens in one system — a new sale, form submission, support ticket, or payment — it instantly notifies another system so automation can start right away.",
    whenToUse:
      "Use webhooks when you want AI or automation to run the moment an event happens, instead of waiting for someone to check manually.",
    watchOut:
      "The same event can sometimes fire twice. Plan for duplicate webhook deliveries so you do not run the same AI action or charge twice.",
    links: [
      {
        label: "Webhooks explained",
        url: "https://zapier.com/blog/what-are-webhooks/",
        icon: "simple-icons/zapier",
      },
    ],
    relatedIds: ["workflow", "api", "orchestration"],
  },
  {
    id: "api-key",
    symbol: "AK",
    name: "API Key",
    group: 5,
    row: 3,
    index: 27,
    tagline: "The password your app uses",
    whatItIs:
      "An API key is a secret code that lets your app use an AI service. It tells the provider who is making the request and which account should be billed.",
    whenToUse:
      "You need API keys when you connect AI to your website, app, automation, chatbot, or internal tool.",
    watchOut:
      "Never paste API keys into public websites, screenshots, or shared code. If a key leaks, someone else may use your account and spend your money.",
    links: [
      {
        label: "OpenAI API keys",
        url: "https://platform.openai.com/api-keys",
        icon: "simple-icons/openai",
      },
    ],
    relatedIds: ["api", "sdk", "ai-cost"],
  },
  {
    id: "mcp",
    symbol: "MC",
    name: "MCP",
    group: 5,
    row: 4,
    index: 28,
    tagline: "A shared connector standard for AI",
    whatItIs:
      "MCP stands for Model Context Protocol. It is an open standard for connecting AI apps and agents to external systems such as files, databases, search, business tools, and reusable workflows.",
    whenToUse:
      "MCP becomes useful when you want one integration pattern that can work across multiple AI clients, developer tools, and internal systems instead of rebuilding every connector from scratch.",
    watchOut:
      "A standard connector does not replace good product design. You still need to decide which tools matter, what access they get, and what the workflow should do.",
    links: [
      { label: "Model Context Protocol", url: "https://modelcontextprotocol.io" },
    ],
    relatedIds: ["function-calling", "tool-use", "agent"],
  },
  {
    id: "function-calling",
    symbol: "FC",
    name: "Function Calling",
    group: 5,
    row: 5,
    index: 29,
    tagline: "AI that triggers real actions",
    whatItIs:
      "Function calling lets the model request specific actions — check inventory, book a meeting, run a calculation, update a record — instead of only typing a text reply. Your code runs the action and sends the result back into the conversation.",
    whenToUse:
      "Use function calling when the AI needs to do something real in another system, not just describe what should happen.",
    watchOut:
      "Offering too many functions at once makes the model more likely to pick the wrong one. Keep the list focused on what the task truly needs.",
    links: [
      {
        label: "Function calling",
        url: "https://platform.openai.com/docs/guides/function-calling",
        icon: "simple-icons/openai",
      },
    ],
    relatedIds: ["tool-use", "mcp", "agent"],
  },
  {
    id: "sdk",
    symbol: "SK",
    name: "SDK",
    group: 5,
    row: 6,
    index: 30,
    tagline: "A developer shortcut kit",
    whatItIs:
      "An SDK, or Software Development Kit, is a ready-made code library that makes working with an AI API easier. It handles common setup like authentication, request formatting, and error handling so developers write less boilerplate.",
    whenToUse:
      "SDKs help when your team is building custom software and wants faster, safer integration than hand-writing every API call from scratch.",
    watchOut:
      "Convenience can hide what is really happening under the hood. Still monitor errors, latency, and token usage in production.",
    links: [
      {
        label: "OpenAI SDKs",
        url: "https://platform.openai.com/docs/libraries",
        icon: "simple-icons/openai",
      },
    ],
    relatedIds: ["api", "api-key", "cursor"],
  },

  // G6 - AI Workers
  {
    id: "agent",
    symbol: "AG",
    name: "Agent",
    group: 6,
    row: 1,
    index: 31,
    tagline: "AI that plans and acts",
    whatItIs:
      "An agent is AI that can plan steps, use tools, check results, and keep working toward a goal. It behaves more like a helper working through a task than a search box that gives one answer and stops.",
    whenToUse:
      "Agents make sense when the job needs several steps, tool use, and judgment — for example research plus drafting plus filing, or checking systems before replying.",
    watchOut:
      "Try a simpler workflow first. Agents add power, but they also add complexity, cost, and more ways for things to go wrong.",
    links: [
      {
        label: "OpenAI agents guide",
        url: "https://platform.openai.com/docs/guides/agents",
        icon: "simple-icons/openai",
      },
    ],
    relatedIds: ["orchestration", "tool-use", "workflow"],
  },
  {
    id: "orchestration",
    symbol: "OR",
    name: "Orchestration",
    group: 6,
    row: 2,
    index: 32,
    tagline: "Keeps the whole system in sync",
    whatItIs:
      "Orchestration is the layer that coordinates multiple steps, tools, or agents so they run in the right order, pass data correctly, and recover when something fails. It is the conductor for complex AI workflows.",
    whenToUse:
      "You need orchestration when a process has many moving parts — retries, branching paths, handoffs, or multiple agents that must stay aligned.",
    watchOut:
      "A complex flow without logs is painful to debug. Make each step visible so you can see where a job stalled or broke.",
    links: [
      {
        label: "Workflow orchestration",
        url: "https://www.ibm.com/think/topics/workflow-orchestration",
      },
    ],
    relatedIds: ["agent", "multi-agent", "workflow"],
  },
  {
    id: "workflow",
    symbol: "WF",
    name: "Workflow",
    group: 6,
    row: 3,
    index: 33,
    tagline: "Repeatable automatic steps",
    whatItIs:
      "A workflow is a defined sequence of steps that delivers a business outcome the same way each time — like qualifying a lead, drafting a weekly report, or routing a support ticket.",
    whenToUse:
      "Workflows are ideal when your team repeats the same process often and you want reliable automation instead of manual copy-paste work.",
    watchOut:
      "Automating a messy process just creates faster chaos. Clean up the process first, then automate the version that actually makes sense.",
    links: [
      {
        label: "Automate with Zapier",
        url: "https://zapier.com/workflows",
        icon: "simple-icons/zapier",
      },
    ],
    relatedIds: ["agent", "webhooks", "human-in-the-loop"],
  },
  {
    id: "multi-agent",
    symbol: "MA",
    name: "Multi-Agent",
    group: 6,
    row: 4,
    index: 34,
    tagline: "Several specialists working together",
    whatItIs:
      "A multi-agent setup uses several AI agents with different roles — researcher, writer, reviewer, planner — that hand work to each other on one project. Each agent focuses on what it does best.",
    whenToUse:
      "This approach helps when one prompt cannot realistically cover research, drafting, checking, and formatting all at once.",
    watchOut:
      "Do not use five agents for a one-step job. Extra coordination adds time, cost, and failure points.",
    links: [
      {
        label: "Multi-agent patterns",
        url: "https://www.anthropic.com/engineering/built-multi-agent-research-system",
        icon: "simple-icons/anthropic",
      },
    ],
    relatedIds: ["orchestration", "agent", "tool-use"],
  },
  {
    id: "human-in-the-loop",
    symbol: "HL",
    name: "Human-in-the-Loop",
    group: 6,
    row: 5,
    index: 35,
    tagline: "A person checks the important steps",
    whatItIs:
      "Human-in-the-loop means a real person reviews, edits, or approves AI output before the process continues. It adds a safety layer where mistakes would be costly or embarrassing.",
    whenToUse:
      "Use it for legal, financial, medical, brand-sensitive, or customer-facing moments where a bad answer has real consequences.",
    watchOut:
      "If a human must approve everything, you may erase the time savings you wanted. Target the highest-risk steps, not every single message.",
    links: [
      {
        label: "Human-in-the-loop AI",
        url: "https://www.ibm.com/think/topics/human-in-the-loop",
      },
    ],
    relatedIds: ["guardrails", "workflow", "roi"],
  },
  {
    id: "tool-use",
    symbol: "TU",
    name: "Tool Use",
    group: 6,
    row: 6,
    index: 36,
    tagline: "AI that uses real apps",
    whatItIs:
      "Tool use is when an agent calls real applications — search, spreadsheets, CRMs, calendars, databases — to fetch live information or complete actions. Without tools, AI can only talk. With tools, it can actually do work.",
    whenToUse:
      "Tool use matters when answers must come from live systems, not just what the model learned during training.",
    watchOut:
      "Giving broad access to every tool increases the chance of unintended actions. Scope permissions carefully.",
    links: [
      {
        label: "Tool use guide",
        url: "https://platform.openai.com/docs/guides/tools",
        icon: "simple-icons/openai",
      },
    ],
    relatedIds: ["function-calling", "mcp", "agent"],
  },

  // G7 - Builder Tools
  {
    id: "zapier",
    symbol: "ZP",
    name: "Zapier",
    group: 7,
    row: 1,
    index: 37,
    tagline: "Connect apps without code",
    whatItIs:
      "Zapier is a no-code platform that links apps together with automations called Zaps. It is one of the easiest ways for a business to add AI steps between everyday tools like email, forms, spreadsheets, and CRMs.",
    whenToUse:
      "Zapier is a great starting point when you want quick connections between popular SaaS apps and light AI automation without hiring developers.",
    watchOut:
      "Very twisty logic with many branches can become hard to maintain in Zapier. Bigger, more complex flows may eventually need Make or n8n.",
    links: [
      {
        label: "Zapier",
        url: "https://zapier.com",
        icon: "simple-icons/zapier",
      },
    ],
    relatedIds: ["make", "workflow", "webhooks"],
  },
  {
    id: "make",
    symbol: "MK",
    name: "Make",
    group: 7,
    row: 2,
    index: 38,
    tagline: "Visual workflows with more control",
    whatItIs:
      "Make is a visual automation builder. It lets you connect apps, branch logic, transform data, and add AI steps without starting from a blank code file.",
    whenToUse:
      "Use Make when your automation has more steps or decisions than a simple trigger-and-action flow.",
    watchOut:
      "Visual workflows can still become messy. Name each step clearly and test with real examples before trusting it with customers.",
    links: [
      {
        label: "Make",
        url: "https://www.make.com",
        icon: "simple-icons/integromat",
      },
    ],
    relatedIds: ["zapier", "workflow", "webhooks"],
  },
  {
    id: "n8n",
    symbol: "N8",
    name: "n8n",
    group: 7,
    row: 3,
    index: 39,
    tagline: "Self-hosted automation",
    whatItIs:
      "n8n is an open-source automation tool you can host yourself. It offers deep customization, direct API connections, and more control over data than many click-based SaaS automation platforms.",
    whenToUse:
      "n8n fits teams that want powerful custom flows, need to keep data on their own infrastructure, or want to avoid per-task SaaS pricing at scale.",
    watchOut:
      "Self-hosting also means you own uptime, backups, security patches, and maintenance. That is real ongoing IT work.",
    links: [
      { label: "n8n", url: "https://n8n.io", icon: "simple-icons/n8n" },
    ],
    relatedIds: ["flowise", "workflow", "api"],
  },
  {
    id: "voiceflow",
    symbol: "VF",
    name: "Voiceflow",
    group: 7,
    row: 4,
    index: 40,
    tagline: "Build chat and voice agents",
    whatItIs:
      "Voiceflow is a builder for customer-facing AI agents. Teams can design conversations, add a knowledge base, connect tools, test the agent, and publish it to chat or voice channels.",
    whenToUse:
      "Use Voiceflow when you want a support, sales, booking, or FAQ agent that regular customers will talk to.",
    watchOut:
      "Customer agents need testing. Check bad questions, angry users, missing data, and handoff to a human before launch.",
    links: [
      { label: "Voiceflow", url: "https://www.voiceflow.com" },
    ],
    relatedIds: ["agent", "knowledge-base", "human-in-the-loop"],
  },
  {
    id: "flowise",
    symbol: "FL",
    name: "Flowise",
    group: 7,
    row: 5,
    index: 41,
    tagline: "Visual builder for AI agents",
    whatItIs:
      "Flowise is an open-source visual platform for building AI agents and LLM workflows. It supports chatflows, agent flows, tools, memory, evaluations, and deployment options.",
    whenToUse:
      "Use Flowise when you want more control than a simple automation tool but still want a visual builder instead of writing everything from scratch.",
    watchOut:
      "More control also means more responsibility. Plan hosting, security, logs, and maintenance before using it for important business work.",
    links: [
      { label: "Flowise", url: "https://flowiseai.com" },
    ],
    relatedIds: ["agent", "workflow", "mcp"],
  },
  {
    id: "cursor",
    symbol: "CR",
    name: "Cursor",
    group: 7,
    row: 6,
    index: 42,
    tagline: "An AI-powered code editor",
    whatItIs:
      "Cursor is a code editor with built-in AI that helps you build custom software by describing what you want in plain language. It can write, edit, and explain code inside your actual project files.",
    whenToUse:
      "Cursor is a strong option when no-code tools are not flexible enough and you need a custom app, integration, or internal tool.",
    watchOut:
      "Fast code generation is not the same as correct, secure code. Review and test before shipping anything customer-facing.",
    links: [
      { label: "Cursor", url: "https://cursor.com", icon: "simple-icons/cursor" },
    ],
    relatedIds: ["sdk", "api", "ai-stack"],
  },

  // G8 - Business Decisions
  {
    id: "use-case",
    symbol: "UC",
    name: "Use Case",
    group: 8,
    row: 1,
    index: 43,
    tagline: "Start with the real problem",
    whatItIs:
      "A use case is the specific business problem you want AI to solve — like faster support replies, fewer billing errors, or less manual reporting. It names the pain, the user, and what success should look like.",
    whenToUse:
      "Define the use case before buying tools or writing prompts. It keeps the project anchored to a real outcome instead of chasing trendy features.",
    watchOut:
      "Starting with we need an agent instead of we need fewer late invoices usually leads to expensive experiments with no clear win.",
    links: [
      {
        label: "AI use cases",
        url: "https://www.ibm.com/think/topics/artificial-intelligence-business-use-cases",
      },
    ],
    relatedIds: ["roi", "ai-strategy", "workflow"],
  },
  {
    id: "roi",
    symbol: "RI",
    name: "ROI",
    group: 8,
    row: 2,
    index: 44,
    tagline: "Is this worth doing?",
    whatItIs:
      "ROI means return on investment. For AI, it asks a simple question: will this save enough time, make enough money, or reduce enough mistakes to be worth the effort and cost?",
    whenToUse:
      "Use ROI before you buy a tool, build an agent, or automate a process. It keeps the project tied to a real business result.",
    watchOut:
      "Cool demos can hide weak ROI. If you cannot name the time saved, cost reduced, or revenue helped, the project may be a distraction.",
    links: [
      {
        label: "AI business use cases",
        url: "https://www.ibm.com/think/topics/artificial-intelligence-business-use-cases",
      },
    ],
    relatedIds: ["use-case", "ai-cost", "ai-strategy"],
  },
  {
    id: "problem-layer",
    symbol: "PL",
    name: "Problem Layer",
    group: 8,
    row: 3,
    index: 45,
    tagline: "Find where the problem really is",
    whatItIs:
      "The problem layer is the part of your AI setup that is actually causing trouble. The issue might be the prompt, the data, the model, the tool connection, the workflow, or the business process.",
    whenToUse:
      "Use this when AI gives bad answers, an automation breaks, or a team keeps changing tools without fixing the real issue.",
    watchOut:
      "Do not blame the model first every time. Many AI problems are really missing data, unclear instructions, weak testing, or a messy process.",
    links: [
      {
        label: "Improve accuracy",
        url: "https://platform.openai.com/docs/guides/optimizing-llm-accuracy",
        icon: "simple-icons/openai",
      },
    ],
    relatedIds: ["use-case", "model", "evals"],
  },
  {
    id: "ai-stack",
    symbol: "AS",
    name: "AI Stack",
    group: 8,
    row: 4,
    index: 46,
    tagline: "Your full AI tool map",
    whatItIs:
      "Your AI stack is the full set of models, apps, databases, automations, and builders working together in your business. It is the map of how intelligence flows through your company.",
    whenToUse:
      "Document your stack when auditing overlap, onboarding new staff, planning purchases, or trying to understand why two teams built similar tools.",
    watchOut:
      "A logo wall without notes on purpose, owner, and cost creates confusion fast. Write down what each piece does and who maintains it.",
    links: [
      {
        label: "Map your stack",
        url: "https://www.notion.com/help/guides/everything-you-can-do-with-notion-ai",
      },
    ],
    relatedIds: ["ai-strategy", "model", "workflow"],
  },
  {
    id: "ai-avatars",
    symbol: "AV",
    name: "AI Avatars",
    group: 8,
    row: 5,
    index: 47,
    tagline: "A visible face for your AI",
    whatItIs:
      "AI avatars are digital characters — video or animated — that speak answers powered by language models. They are used in support, training, marketing, and onboarding when a human-like presence helps people engage.",
    whenToUse:
      "Avatars can help when a friendly visible presenter improves trust, attention, or clarity — especially in training or customer education.",
    watchOut:
      "A polished face does not fix weak answers underneath. The speaking model and knowledge behind the avatar still need to be solid.",
    links: [
      {
        label: "AI avatars overview",
        url: "https://www.synthesia.io/post/ai-avatar",
      },
    ],
    relatedIds: ["multimodal", "agent", "use-case"],
  },
  {
    id: "ai-strategy",
    symbol: "ST",
    name: "AI Strategy",
    group: 8,
    row: 6,
    index: 48,
    tagline: "A plan, not random experiments",
    whatItIs:
      "AI strategy is a deliberate plan for how your business adopts, scales, budgets, and governs AI over time. It turns scattered experiments into coordinated progress with clear priorities.",
    whenToUse:
      "You need strategy when pilots multiply, teams duplicate effort, budgets get messy, or leadership wants one shared roadmap for the next year.",
    watchOut:
      "A strategy deck with no owner, no budget, and no monthly review becomes shelfware quickly. Plans only matter if someone executes and measures them.",
    links: [
      {
        label: "AI strategy guide",
        url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
      },
    ],
    relatedIds: ["use-case", "roi", "ai-stack"],
  },
];

export const ELEMENT_MAP = Object.fromEntries(
  ELEMENTS.map((e) => [e.id, e]),
) as Record<string, AIElement>;
