const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0; 
let questionCounter = 0;
let availableQuestions = []; 

let questions = [
    {
        question: 'According to the podcast, what was the innovative distribution model ID Software used for Doom?',
        choice1: 'A subscription-based model where players paid monthly',
        choice2: 'A shareware model where players could play initial levels for free',
        choice3: 'A microtransaction model where players bought in-game items',
        choice4: 'An advertising-based model where gameplay was funded by ads',
        answer: 2,
    },
    {
        question: "Which company mentioned in the podcast is credited with pioneering the free-to-play model in Korea?",
        choice1: "Activision",
        choice2: "Apogee",
        choice3: "Nexon",
        choice4: "ID Software",
        answer: 3,
    },
    {
        question: "What problem did the free-to-play model primarily solve in Asia according to the hosts?",
        choice1: "Hardware limitations",
        choice2: "Internet bandwidth Issues",
        choice3: "Piracy",
        choice4: "Language barriers",
        answer: 3,
    },
    {
        question: "Which game from ID Software is highlighted as a pivotal game in the history of video games?",
        choice1: "Commander Keen",
        choice2: "Castle Wolfenstein",
        choice3: "Quake",
        choice4: "Doom",
        answer: 4,
    },
    {
        question: "What concept did the hosts describe as a key economic principle that the free-to-play model better addressed?",
        choice1: "Creating game engines",
        choice2: "Testing video games",
        choice3: "Providing financing, production, and distribution",
        choice4: "Writing game narratives",
        answer: 3,
    },
    {
        question: "What platform did Valve create that revolutionized game distribution?",
        choice1: "Origin",
        choice2: "Epic Games Store",
        choice3: "Steam",
        choice4: "GOG",
        answer: 3,
    },
    {
        question: "What was Valve's initial purpose for creating Steam?",
        choice1: "To sell game merchandise",
        choice2: "To facilitate automatic updates for their games",
        choice3: "To compete with console platforms",
        choice4: "To create a social network for gamers",
        answer: 2,
    },
    {
        question: "What revolutionary revenue sharing model did Steam introduce?",
        choice1: "50-50 split between developers and Steam",
        choice2: "90-10 split in favor of developers",
        choice3: "70-30 split with developers receiving the larger portion",
        choice4: "100% of revenue going to developers with Steam charging a flat fee",
        answer: 3,
    },
    {
        question: "What concept did the hosts use to explain Steam's business model transformation of the gaming industry?",
        choice1: "Disruption theory",
        choice2: "Aggregation theory",
        choice3: "Platform economics",
        choice4: "Network effects",
        answer: 2,
    },
    {
        question: "Which game is credited in the podcast as being a surprising success that revealed the potential of the casual games market?",
        choice1: "Farmville",
        choice2: "Deer Hunter",
        choice3: "Snake",
        choice4: "Angry Birds",
        answer: 2,
    },
    {
        question: "Which executive at Walmart is credited with identifying an underserved market for cheaper, casual games?",
        choice1: "Robert Westmoreland",
        choice2: "Scott Layman",
        choice3: "Tony Fidel",
        choice4: "Taneli Armanto",
        answer: 1,
    },
    {
        question:"What was the first major integration of casual gaming and mobile technology mentioned in the podcast?",
        choice1: "Java-based games on early smartphones",
        choice2: "Snake on Nokia phones",
        choice3: "AMDAT's mobile ports of arcade games",
        choice4: "Games for Qualcomm's BREW platform",
        answer: 2,
    },
    {
        question:"What company is mentioned as the first large-scale mobile game company to go public on NASDAQ?",
        choice1: "Zynga",
        choice2: "JAMDAT Mobile",
        choice3: "King.com",
        choice4: "Rovio",
        answer: 2,
    },
    {
        question:"What feature introduced in 2009 truly catalyzed the mobile gaming market according to the hosts?",
        choice1: "Touchscreens",
        choice2: "App stores",
        choice3: "In-app purchases",
        choice4: "Cloud saves",
        answer: 3,
    },
    {
        question:"What are the five key attributes necessary for a game to achieve Forever Game status according to the hosts?",
        choice1: "Balance, community, eventfulness, competition, and player investment",
        choice2: "Graphics, story, multiplayer, marketing, and updates",
        choice3: "Free-to-play, cross-platform, casual, social, and mobile",
        choice4: "Innovation, monetization, accessibility, scalability, and technology",
        answer: 1,
    },
    {
        question:"What term did the hosts use to describe the phenomenon of players investing significant time and effort into their characters?",
        choice1: "Character bonding",
        choice2: "Sweat equity",
        choice3: "Avatar attachment",
        choice4: "Digital investment",
        answer: 2,
    },
    {
        question:"Which company did the hosts praise for its ability to execute known play patterns effectively?",
        choice1: "Blizzard",
        choice2: "Electronic Arts",
        choice3: "Riot Games",
        choice4: "Epic Games",
        answer: 3,
    },
    {
        question:"Which game transformed from a tower defense game into a globally popular battle arena game?",
        choice1: "PUBG",
        choice2: "Fortnite",
        choice3: "League of Legends",
        choice4: "APEX Legends",
        answer: 2,
    },
    {
        question:"According to the hosts, what metrics became important in the Forever Games business model?",
        choice1: "Units sold and retail presence",
        choice2: "Customer acquisition cost, retention, churn, and average revenue per user",
        choice3: "Graphics quality and loading times",
        choice4: "Social media presence and influencer partnerships",
        answer: 2,
    },
    {
        question:"What taxonomy mentioned in the podcast classifies players into four types: achievers, explorers, socializers, and killers?",
        choice1: "Maslow's hierarchy",
        choice2: "Bartle taxonomy",
        choice3: "Myers-Briggs types",
        choice4: "Gamer quadrants",
        answer: 2,
    },
    {
        question:"Which game is described as a breakthrough in sandbox gaming around 2001?",
        choice1: "Grand Theft Auto III",
        choice2: "RuneScape",
        choice3: "Eve Online",
        choice4: "Second Life",
        answer: 1,
    },
    {
        question:"Which game's success was largely driven by its integration with YouTube according to the hosts?",
        choice1: "Minecraft",
        choice2: "RuneScape",
        choice3: "Roblox",
        choice4: "Fortnite",
        answer: 1,
    },
    {
        question:"What platform emerged from Justin.tv and became crucial for watching people play games?",
        choice1: "YouTube",
        choice2: "Facebook Gaming",
        choice3: "Twitch",
        choice4: "Kick.com",
        answer: 3,
    },
    {
        question:"What role does the podcast suggest platforms like Roblox play in modern society?",
        choice1: "Educational tools",
        choice2: "Professional training environments",
        choice3: "Third places for social interaction",
        choice4: "Political discussion forums",
        answer: 3,
    },
    {
        question:"According to the podcast, what percentage of game sales do consoles currently account for?",
        choice1: "50%",
        choice2: "75%",
        choice3: "25%",
        choice4: "10%",
        answer: 3,
    },
    {
        question:"What business model has defined consoles for decades according to the hosts?",
        choice1: "Subscription-based model",
        choice2: "Razor and blades model",
        choice3: "Free-to-play model",
        choice4: "Advertising-based model",
        answer: 2,
    },
    {
        question:"Which company dominated the handheld gaming market according to the podcast?",
        choice1: "Sony",
        choice2: "Microsoft",
        choice3: "Nintendo",
        choice4: "Sega",
        answer: 3,
    },
    {
        question:"What event forced industry giants to reconsider their stances on cross-platform play?",
        choice1: "The launch of the PlayStation 4",
        choice2: "Microsoft's acquisition of Minecraft",
        choice3: "The success of Fortnite",
        choice4: "The introduction of mobile gaming",
        answer: 3,
    },
    {
        question:"What console was described as the first modern console in the podcast?",
        choice1: "Nintendo Entertainment System",
        choice2: "Atari 2600",
        choice3: "Sega Genesis",
        choice4: "PlayStation",
        answer: 2,
    },
    {
        question:"Which company founded by Brendan Iribe and Palmer Luckey created a low-cost, consumer-friendly VR headset?",
        choice1: "Valve",
        choice2: "Oculus",
        choice3: "HTC",
        choice4: "Microsoft",
        answer: 2,
    },
    {
        question:"What was described as the most successful implementation of VR despite Mark Zuckerberg's vision of VR as a communications technology?",
        choice1: "Social VR platforms",
        choice2: "Educational applications",
        choice3: "Gaming, exemplified by Beat Saber",
        choice4: "Business conferencing",
        answer: 3,
    },
    {
        question:"Which science fiction novel is credited with coining the term Metaverse ?",
        choice1: "Neuromancer",
        choice2: "Ready Player One",
        choice3: "Snow Crash",
        choice4: "The Matrix",
        answer: 3,
    },
    {
        question:"What are the six attributes of the metaverse as outlined by Matthew Ball and discussed in the podcast?",
        choice1: "Immersion, interaction, imagination, identity, infrastructure, and investment",
        choice2: "Massive scale, interoperability, concurrency, real-time 3D graphics, identity and presence, and persistence",
        choice3: "Virtual reality, augmented reality, mixed reality, gaming, social, and commerce",
        choice4: "Connectivity, creativity, community, currency, control, and customization",
        answer: 2,
    },
    {
        question:"What early graphical multi-user dungeon (MUD) released in the mid-1980s by LucasArts is discussed in the podcast?",
        choice1: "Ultima Online",
        choice2: "Habitat",
        choice3: "EverQuest",
        choice4: "World of Warcraft",
        answer: 2,
    },
    {
        question:"Which game introduced a loot box and key system that became a major catalyst for its virtual economy?",
        choice1: "Fortnite",
        choice2: "Counter-Strike",
        choice3: "Team Fortress 2",
        choice4: "League of Legends",
        answer: 3,
    },
    {
        question:"What term is used to describe the phenomenon where the money supply and basic goods increase, leading to a decline in the value of both items and currency in virtual worlds?",
        choice1: "Virtual depression",
        choice2: "Mudflation",
        choice3: "Economic scaling",
        choice4: "Inflation cascade",
        answer: 2,
    },
    {
        question:"What two primary tools do game designers use to control the virtual economy according to the podcast?",
        choice1: "Faucets and drains",
        choice2: "Taxes and subsidies",
        choice3: "Inflation and deflation",
        choice4: "Crafting and looting",
        answer: 1,
    },
    {
        question:"Which blockchain game became significantly successful in the web3 gaming space, particularly in the Philippines during the pandemic?",
        choice1: "Crypto Kitties",
        choice2: "Gods Unchained",
        choice3: "The Sandbox",
        choice4: "Axie Infinity",
        answer: 4,
    },
];

//Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = ( ) => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //Update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply =
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }
  
      selectedChoice.parentElement.classList.add(classToApply);
  
      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
      }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}
startGame();