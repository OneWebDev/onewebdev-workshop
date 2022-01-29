// Jokes and universities are only included for people who submitted applications before 1/27
var jokes = [
  {
      "joke": "abcd",
      "university": "Adams State College",
      "id": 0
  },
  {
      "joke": "Some people, when confronted with a problem, think, 'I know, I'll use threads' - and then two they hav erpoblesms.",
      "university": "Texas A&M University",
      "id": 1
  },
  {
      "joke": "Why are pythons blind? Because they can't 'C' !",
      "university": "Texas A&M University",
      "id": 2
  },
  {
      "joke": "Error 404 Not Found",
      "university": "University of Texas at Arlington",
      "id": 3
  },
  {
      "joke": "Programs are like temples, pray.",
      "university": "Texas A&M University",
      "id": 4
  },
  {
      "joke": "Recursive",
      "university": "Texas A&M University",
      "id": 5
  },
  {
      "joke": "I don't have any jokes.",
      "university": "Texas A&M University",
      "id": 6
  },
  {
      "joke": "My repo",
      "university": "University of Texas",
      "id": 7
  },
  {
      "joke": "Why was 10 paid less than \"10\"?\r\nBecause there was workplace inequality",
      "university": "Texas A&M University - Galveston",
      "id": 8
  },
  {
      "joke": "What's the best part about TCP jokes?\r\nI get to keep telling them until you get them.\r\n- somewhere on Reddit",
      "university": "Texas A&M University",
      "id": 9
  },
  {
      "joke": "a programmer walks into a bar, and immediately starts crying",
      "university": "University of Texas at Dallas",
      "id": 10
  },
  {
      "joke": "“Knock, knock.”\r\n“Who’s there?”\r\nvery long pause….\r\n“Java.”",
      "university": "Texas A&M University",
      "id": 11
  },
  {
      "joke": "Doctor: How R you doing?\r\nPatient: I can’t C!!!",
      "university": "Texas A&M University",
      "id": 12
  },
  {
      "joke": "Im a designer, so I code in HTML and CSS :)",
      "university": "University of Texas at Austin",
      "id": 13
  },
  {
      "joke": "Why did the programmer quit his job\r\n\r\nBecause he didn't get arrays",
      "university": "Texas A&M University",
      "id": 14
  },
  {
      "joke": "I've got a bad case of cout and I haven't been very receptive.",
      "university": "Texas A&M University",
      "id": 15
  },
  {
      "joke": "“Why do you have a pet snake?” One developer said to another. \r\n\r\n“I code in Python,” he replied.  \r\n\r\n“That makes no sense,” the first developer scoffed. \r\n\r\n“Nah, it makes dollars $$$!” :)",
      "university": "Texas A&M University",
      "id": 16
  },
  {
      "joke": "How do you get wealthy in programming?\r\n\r\ninheritance",
      "university": "Texas A&M University",
      "id": 17
  },
  {
      "joke": "It'll only take an hour.",
      "university": "Texas A&M University",
      "id": 18
  },
  {
      "joke": "What kind of mask would never sell at a costume store? 0100110 (bitmask)!",
      "university": "Rice University",
      "id": 19
  },
  {
      "joke": "Don’t bug me",
      "university": "University of Texas at Dallas",
      "id": 20
  },
  {
      "joke": "Why can't you surprise a backend programmer?\r\n\r\nBecause they will React badly!",
      "university": "University of Texas at Dallas",
      "id": 21
  },
  {
      "joke": "Q. How did the programmer die in the shower?\r\nA. He read the shampoo bottle instructions: Lather. Rinse. Repeat.",
      "university": "University of Texas at Arlington",
      "id": 22
  },
  {
      "joke": "It works on my machine...",
      "university": "Rice University",
      "id": 23
  },
  {
      "joke": "What is the object oriented way to get wealthy? Inheritance",
      "university": "Texas A&M University",
      "id": 24
  },
  {
      "joke": "What is the most used language in programming?\r\n- Profanity",
      "university": "University of Texas at San Antonio",
      "id": 25
  },
  {
      "joke": "Programmers spend so little time outdoors that they draw their trees upside-down!",
      "university": "Texas A&M University",
      "id": 26
  },
  {
      "joke": "I wish I could use a sorting algorithm to sort out my life problems",
      "university": "Texas A&M University",
      "id": 27
  },
  {
      "joke": "Why do programmers always get Christmas and Halloween mixed up? Because DEC 25 = OCT 31",
      "university": "Texas A&M University",
      "id": 28
  },
  {
      "joke": "Whats the object-oriented way to become wealthy?\r\nAns- Inheritance",
      "university": "Other",
      "id": 29
  },
  {
      "joke": "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
      "university": "University of Texas at Dallas",
      "id": 30
  },
  {
      "joke": "what is the scariest thing for a programmer:\r\na broken \"/\" key",
      "university": "Texas A&M University",
      "id": 31
  },
  {
      "joke": "I once got a B in my computer programming class, \r\nI call that a C++",
      "university": "Texas A&M University",
      "id": 32
  },
  {
      "joke": "There are 10 kinds of people: those who understand binary, and those who do not...",
      "university": "Texas A&M University",
      "id": 33
  },
  {
      "joke": "I like my languages like I like my grades, preferably not C++",
      "university": "Texas A&M University",
      "id": 34
  },
  {
      "joke": "-Why are you irritable?\r\n-For debugging \r\n-So how will you deal with that?\r\n-Continue debugging",
      "university": "Texas A&M University",
      "id": 35
  },
  {
      "joke": "It'll only take one hour...",
      "university": "Texas A&M University",
      "id": 36
  },
  {
      "joke": "What's the object-oriented way to become wealthy?\r\nInheritance",
      "university": "University of Texas at Dallas",
      "id": 37
  },
  {
      "joke": "The computer is mightier than the pen, the sword, and usually, the programmer.",
      "university": "Texas A&M University",
      "id": 38
  },
  {
      "joke": "I was blind, so my friend suggested me to learn programming.\r\nNow I csharp.",
      "university": "University of Texas at Dallas",
      "id": 39
  },
  {
      "joke": "I have more domains than the number of projects xD",
      "university": "Other",
      "id": 40
  },
  {
      "joke": "What is the most used language in all of CS? Profanity",
      "university": "Texas A&M University",
      "id": 41
  },
  {
      "joke": "vds",
      "university": "Vermont Technical College",
      "id": 42
  },
  {
      "joke": "the h in software development stands for happiness.",
      "university": "Texas A&M University",
      "id": 43
  },
  {
      "joke": "A guy walks into a bar and asks for 1.4 root beers. The bartender says \"I'll have to charge you extra, that's a root beer float\". The guy says \"In that case, better make it a double.\"",
      "university": "Texas A&M University",
      "id": 44
  },
  {
      "joke": "Why did the software engineer quit his job?\r\nCause he wanted arrays.",
      "university": "Texas A&M University",
      "id": 45
  },
  {
      "joke": "What's the object-oriented way to become wealthy? Inheritance.",
      "university": "George Mason University",
      "id": 46
  },
  {
      "joke": "I will simply link this funny video about software engineering:\r\nhttps://www.youtube.com/watch?v=MticYPfFRp8",
      "university": "Texas A&M University",
      "id": 47
  },
  {
      "joke": "I got none �",
      "university": "Texas A&M University",
      "id": 48
  },
  {
      "joke": "What did the program say to the bug?  Come pile hahahah",
      "university": "Texas A&M University",
      "id": 49
  },
  {
      "joke": "Why did the programmer quit his job?\r\nBecause he didn't get arrays...\r\nget it, because it sounds like a raise :D",
      "university": "Texas A&M University",
      "id": 50
  },
  {
      "joke": "Why do programmers always mix up Halloween and Christmas?\r\nBecause Oct 31 equals Dec 25.",
      "university": "University of Texas at Dallas",
      "id": 51
  },
  {
      "joke": "Why did he quit his job?\r\nbecause he didn't receive arrays",
      "university": "University of Texas at Dallas",
      "id": 52
  },
  {
      "joke": "Why did the programmer quit his job?\r\nBecause he didn't get arrays...\r\nget it, because it sounds like a raise :D",
      "university": "Texas A&M University",
      "id": 53
  },
  {
      "joke": "Why did the programmer count how many bugs he had?",
      "university": "University of Texas at Arlington",
      "id": 54
  },
  {
      "joke": "There are 10 types of people in the world. Those who get binary and others",
      "university": "Florida Institute of Technology",
      "id": 55
  },
  {
      "joke": "Why did the Java programmer wear glasses? Bc he couldn't C#.",
      "university": "University of Texas at Austin",
      "id": 56
  },
  {
      "joke": "[\"hip\", \"hip\"] //Hip hip array!",
      "university": "Texas A&M University",
      "id": 57
  },
  {
      "joke": "Two programmers walk into a foo.",
      "university": "University of Texas at Austin",
      "id": 58
  },
  {
      "joke": "Programming is like sex:\r\nOne mistake and you have to support it for the rest of your life.",
      "university": "Texas A&M University",
      "id": 59
  },
  {
      "joke": "This code works ….. WHY?",
      "university": "Texas A&M University",
      "id": 60
  },
  {
      "joke": "A SQL query walks into a bar, goes up to two tables and asks \"can I join you?\"",
      "university": "University of Texas at Dallas",
      "id": 61
  },
  {
      "joke": "Why did the programmer quit his job? Because he couldn't get arrays!\r\n**This is not original**",
      "university": "Texas A&M University",
      "id": 62
  },
  {
      "joke": "A memory address gets caught in an earthquake. It was caused on the segmentation fault line.",
      "university": "Texas A&M University",
      "id": 63
  },
  {
      "joke": "why did the chicken cross the road, he was stuck in a loop",
      "university": "Texas A&M University",
      "id": 64
  },
  {
      "joke": "There are 3 things that are always there for you: God, family, and stack overflow",
      "university": "University of Texas at Arlington",
      "id": 65
  },
  {
      "joke": "What did the C++ programmer tell the Python programmer? \" You're a snake\"",
      "university": "Texas A&M University",
      "id": 66
  },
  {
      "joke": "A man is smoking a cigarette.  His friend becomes irritated with the smoke and says, “Can’t you see the warning on the cigarette pack?  Smoking is hazardous to your health!”\r\nThe man simply replies, \"I'm a programmer. I don't worry about warnings, I worry about errors!!\".",
      "university": "University of Texas at Dallas",
      "id": 67
  },
  {
      "joke": "When your crush tells you you're her number #1, but you're a programmer...",
      "university": "Texas A&M University",
      "id": 68
  },
  {
      "joke": "What the object-oriented way of getting wealthy?\r\nInheritance",
      "university": "Texas A&M University",
      "id": 69
  },
  {
      "joke": "What's the best thing thing about UDP jokes?\r\nI don't care if you get them",
      "university": "Other",
      "id": 70
  },
  {
      "joke": "All programming languages are user friendly. They are just varying levels of particular about who their friends are.",
      "university": "Texas A&M University",
      "id": 71
  },
  {
      "joke": "What's a programmer's favorite body of water? C",
      "university": "Texas A&M University",
      "id": 72
  },
  {
      "joke": "C++",
      "university": "Texas A&M University",
      "id": 73
  },
  {
      "joke": "....._Admiral Grace Hopper",
      "university": "Texas A&M University",
      "id": 74
  },
  {
      "joke": "What do air conditioning and computers have in common?\r\nThey both become useless when you open windows",
      "university": "Texas A&M University",
      "id": 75
  },
  {
      "joke": "#include <stdio.h>\r\nint main(){char*c=\"#include <stdio.h>%cint main(){char*c=%c%s%c;printf(c,10,34,c,34,10);return 0;}%c\";printf(c,10,34,c,34,10);return 0;}",
      "university": "University of Texas at Dallas",
      "id": 76
  },
  {
      "joke": "Why did the programmer quit his job? Because he couldn't get arrays.",
      "university": "Texas A&M University",
      "id": 77
  },
  {
      "joke": "I love this one:\r\nWhy does Yoda's code always crash? \r\nBecause there is no try.",
      "university": "Western Governors University",
      "id": 78
  },
  {
      "joke": "php",
      "university": "University of Texas at Dallas",
      "id": 79
  },
  {
      "joke": "Why do programmers take so long in the shower?\r\n\r\nThey read the directions on the shampoo bottle and follow them to the letter:\r\n\r\nLather, rinse, and repeat.",
      "university": "Other",
      "id": 80
  },
  {
      "joke": "Why can't programmers tell the difference between Christmas and Halloween?\r\nBecause DEC25 = OCT31",
      "university": "University of Texas at Dallas",
      "id": 81
  },
  {
      "joke": "\"What's the object-oriented way to become wealthy?\"\r\n\r\nInheritance.",
      "university": "University of Texas at Dallas",
      "id": 82
  },
  {
      "joke": "Why are Assembly programmers always soaking wet?\r\nThey work below C level",
      "university": "University of Texas at Dallas",
      "id": 83
  },
  {
      "joke": "from devdojo,\r\nwhy did the programmer quit his job? - because he didn't get arrays",
      "university": "Texas A&M University",
      "id": 84
  },
  {
      "joke": "What did the programmer say when he got punched for being a nerd? \"Stop boolean me\"",
      "university": "University of Texas at Dallas",
      "id": 85
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone – It’s a hardware problem",
      "university": "University of Texas at Austin",
      "id": 86
  },
  {
      "joke": "When I wrote this code, only God and I knew what it did.\r\nNow... only God knows.",
      "university": "Texas A&M University",
      "id": 87
  },
  {
      "joke": "\"Knock Knock\"\r\n\"Race Condition\"\r\n\"Who's there?\"",
      "university": "Texas A&M University",
      "id": 88
  },
  {
      "joke": "You aren't a real programmer unless you have over 30 stack overflow tabs open by the end of the day.",
      "university": "Texas A&M University",
      "id": 89
  },
  {
      "joke": "How many programmers does it take to change a lightbulb?\r\n\r\n0. That's a hardware problem",
      "university": "University of Texas at Austin",
      "id": 90
  },
  {
      "joke": "I was going to ask that girl out, but it turns out she was all back-end but a terrible interface.",
      "university": "University of Texas at Dallas",
      "id": 91
  },
  {
      "joke": "Q: What's the object-oriented way of becoming rich?\r\nA: Inheritance :)",
      "university": "Texas A&M University",
      "id": 92
  },
  {
      "joke": "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
      "university": "Texas A&M University",
      "id": 93
  },
  {
      "joke": "What should you do if someone is giving you mixed signals? Do a fourier transform.",
      "university": "Rice University",
      "id": 94
  },
  {
      "joke": "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?”\r\n“Yeah,” reply the bytes.  “Make us a double.”",
      "university": "University of Texas",
      "id": 95
  },
  {
      "joke": "There are 10 kinds of people in this world: Those who understand binary, those who don't, and those who weren't expecting a base 3 joke.",
      "university": "Texas A&M University",
      "id": 96
  },
  {
      "joke": "what is monty python's favorite programming language? SQL, because they made a lot of sequels",
      "university": "Texas A&M University",
      "id": 97
  },
  {
      "joke": "Why did the programmer quit his job? Because he didn't get arrays!",
      "university": "University of Texas at Austin",
      "id": 98
  },
  {
      "joke": "A zero, one, and two walk into a bar. The bartender asks the two, \"what would you like to drink ma'am?\" The two replies, \"Oh I'm not ma'am, I'm non binary\".",
      "university": "Texas A&M University",
      "id": 99
  },
  {
      "joke": "I do not have one, but I do have a fun fact: did you know that cows have best friends?",
      "university": "University of Texas at Austin",
      "id": 100
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nnone, that's a hardware problem",
      "university": "Texas A&M University",
      "id": 101
  },
  {
      "joke": "There are 3 types of Data Scientists:\r\n1) who know clustering algorithms\r\n2) Who don't",
      "university": "University of Texas at Arlington",
      "id": 102
  },
  {
      "joke": "Whats the object-oriented way to become wealthy?\r\nInheritance",
      "university": "Texas A&M University",
      "id": 103
  },
  {
      "joke": "To understand recursion.\r\nYou must first understand recursion.",
      "university": "Texas A&M University",
      "id": 104
  },
  {
      "joke": "Which programming language is the easiest to read? C# of course!",
      "university": "Texas A&M University",
      "id": 105
  },
  {
      "joke": "Real programmers code in binary",
      "university": "Texas A&M University",
      "id": 106
  },
  {
      "joke": "I ovleb gooorst. I lvoegboo ostr. I lo vboooegrst. lIo e vboogstor. l Ioev obogsrot. I love bogosort.",
      "university": "Texas A&M University",
      "id": 107
  },
  {
      "joke": "What's the object-oriented way to become wealthy? Inheritance",
      "university": "Texas A&M University",
      "id": 108
  },
  {
      "joke": "What is a ghost's favorite type?\r\n\r\nboooooooolean!",
      "university": "Texas A&M University",
      "id": 109
  },
  {
      "joke": "Q: Why did the programmer never fail a single class in college? \r\nA: Because he was always got a C++.",
      "university": "Texas A&M University",
      "id": 110
  },
  {
      "joke": "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
      "university": "Texas A&M University",
      "id": 111
  },
  {
      "joke": "One hundred little bugs in the code\r\nOne hundred little bugs.\r\nFix a bug, link the fix in,\r\nOne hundred little bugs in the code.",
      "university": "University of Texas at Dallas",
      "id": 112
  },
  {
      "joke": "Q: \"Whats the object-oriented way to become wealthy?\"\r\n\r\nA: Inheritance",
      "university": "Texas A&M University",
      "id": 113
  },
  {
      "joke": "There are 10 kinds of people in this world; those who understand binary, and those who don't.",
      "university": "Texas A&M University",
      "id": 114
  },
  {
      "joke": "What is the most used language in programming?\r\nProfanity.",
      "university": "Texas A&M University",
      "id": 115
  },
  {
      "joke": "Why did the programmer quit their job? Because the programmer didn't get arrays :(",
      "university": "Texas A&M University",
      "id": 116
  },
  {
      "joke": "Programming jokes are hard to understand just like lines of code.",
      "university": "University of Texas at Austin",
      "id": 117
  },
  {
      "joke": "What did one programmer say to the other...?\r\nHello world",
      "university": "Texas A&M University",
      "id": 118
  },
  {
      "joke": "I love leet coding and eating pizza.",
      "university": "Texas A&M University",
      "id": 119
  },
  {
      "joke": "What’s the object oriented way to become wealthy? Inheritance.",
      "university": "University of Illinois at Urbana-Champaign",
      "id": 120
  },
  {
      "joke": "How many programmers does it take to change a light bulb? None. It’s a hardware problem",
      "university": "Texas A&M University",
      "id": 121
  },
  {
      "joke": "A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t.",
      "university": "Texas A&M University",
      "id": 122
  },
  {
      "joke": "What is a ghost's favorite type? Boooooooo-lean",
      "university": "Texas A&M University",
      "id": 123
  },
  {
      "joke": "Q: 0 is false and 1 is true right? \r\nA: 1",
      "university": "Texas A&M University",
      "id": 124
  },
  {
      "joke": "A UDP packet walks into a bar. A UDP packet walks into a bar. A UDP packet walks into a bar. A UDP packet walks into a bar. A UDP packet walks into a bar.\r\nThe bartender says \"hello.\"\r\nA TCP packet walks into a bar and says \"I’d like a beer.\" The barman replies \"You’d like a beer?\" \"Yes,\" replies the TCP packet, \"I’d like a beer.\"\r\nA BitTorrent packet walks into a bar and askas for a beer. Everyone in the bar who already has a beer gives him a sip.",
      "university": "University of Texas at Austin",
      "id": 125
  },
  {
      "joke": "unable to execute command: program not executable",
      "university": "Texas A&M University",
      "id": 126
  },
  {
      "joke": "Why do programmers code in dark mode? Because light attracts bugs.",
      "university": "Other",
      "id": 127
  },
  {
      "joke": "Why did the programmer quit his job? Because he didn’t get arrays.",
      "university": "Texas A&M University",
      "id": 128
  },
  {
      "joke": "Programmers are always masters in writing code, suck in writing essays.",
      "university": "Texas A&M University",
      "id": 129
  },
  {
      "joke": "function grade_application(application, joke) {\r\n    if (is_cringe(joke)) {\r\n        /* TODO: Reject application and exit function with BAD */\r\n    }\r\n    return GOOD;\r\n}",
      "university": "Texas A&M University",
      "id": 130
  },
  {
      "joke": "Whats a pirate's favorite programming language?\r\n\r\nR",
      "university": "Texas A&M University",
      "id": 131
  },
  {
      "joke": "What is the most used language when programming? Profanity.",
      "university": "Texas A&M University",
      "id": 132
  },
  {
      "joke": "A machine learning algorithm walks into a bar.\r\nThe bartender asks, \"What would you like to drink?\"\r\nThe algorithm replies, \"What's everyone else having?\"",
      "university": "Texas A&M University",
      "id": 133
  },
  {
      "joke": "2b || !2b \r\nThat is the question!!",
      "university": "Texas A&M University",
      "id": 134
  },
  {
      "joke": "I was surprised with the fact that infinite loop keeps on executing and doesn't stop!",
      "university": "Other",
      "id": 135
  },
  {
      "joke": "The best code is uncommented code.",
      "university": "Texas A&M University",
      "id": 136
  },
  {
      "joke": "A defect, if valid, is always a requirement, expectation, or test data issue. But, it can never be a code issue.\r\nBug Fixed: Invalid/ Cannot be reproduce/ Need more information",
      "university": "University of Houston",
      "id": 137
  },
  {
      "joke": "0 is false and 1 is true ,right?\r\n->1",
      "university": "Other",
      "id": 138
  },
  {
      "joke": "Ur either a zero or a one of a kind",
      "university": "Texas A&M University",
      "id": 139
  },
  {
      "joke": "What do you call a dead programmer?\r\nNull reference",
      "university": "Texas A&M University",
      "id": 140
  },
  {
      "joke": "Q. How did the programmer die in the shower?\r\nA. He read the shampoo bottle instructions: Lather. Rinse. Repeat.",
      "university": "Texas A&M University",
      "id": 141
  },
  {
      "joke": "An SQL query walks into a bar and sees two tables. It approaches, and asks “may I join you?.”",
      "university": "Texas A&M University",
      "id": 142
  },
  {
      "joke": "Knock knock\r\nRace condition\r\nWho's there?",
      "university": "Texas A&M University",
      "id": 143
  },
  {
      "joke": "Why did the programmer quit his job? Because he didn’t get arrays.",
      "university": "Texas A&M University",
      "id": 144
  },
  {
      "joke": "Why does the Python live on land?\r\nBecause it's above C-level",
      "university": "Texas A&M University",
      "id": 145
  },
  {
      "joke": "Why did the programmer quit his job?\r\n.... Because he did not get arrays :')))",
      "university": "University of Texas at Arlington",
      "id": 146
  },
  {
      "joke": "one day I walked out and saw a tree with red and black leaves",
      "university": "Texas A&M University",
      "id": 147
  },
  {
      "joke": "A programmer went to the eye doctor to get glasses. The doctor asked him why you want to get glasses? He said Because I don't C#.",
      "university": "Texas A&M University",
      "id": 148
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone – It’s a hardware problem",
      "university": "Texas A&M University",
      "id": 149
  },
  {
      "joke": "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
      "university": "Texas A&M University",
      "id": 150
  },
  {
      "joke": "A Spanish programmer uses Si++.",
      "university": "University of Texas at Austin",
      "id": 151
  },
  {
      "joke": "I have a joke on programming but it only works on my computer.",
      "university": "University of Texas at Dallas",
      "id": 152
  },
  {
      "joke": "There are 10 types of people in this world, those who know binary and those who don’t.",
      "university": "Texas A&M University",
      "id": 153
  },
  {
      "joke": "nah",
      "university": "Texas A&M University",
      "id": 154
  },
  {
      "joke": "\"Whats the object-oriented way to become wealthy?\" Inheritance",
      "university": "Texas A&M University",
      "id": 155
  },
  {
      "joke": "My girlfriend was worried if I care about computers more than I cared about her, I told her she's my number 1 priority.",
      "university": "University of Texas at Dallas",
      "id": 156
  },
  {
      "joke": "Q: Why did the database administrator leave his wife?\r\n\r\nA: She had one-to-many relationships",
      "university": "Texas A&M University",
      "id": 157
  },
  {
      "joke": "What’s the object oriented way to become wealthy? Inheritance",
      "university": "Texas A&M University",
      "id": 158
  },
  {
      "joke": "Github copilot is trying to steal my job!",
      "university": "University of Texas at Dallas",
      "id": 159
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone – It’s a hardware problem",
      "university": "University of Texas at Dallas",
      "id": 160
  },
  {
      "joke": "I'd like to make the world a better place, but they won't give me the source code.",
      "university": "Other",
      "id": 161
  },
  {
      "joke": "Why do java programmers need to wear glasses?\r\n\r\nBecause they can't C#!",
      "university": "Texas A&M University",
      "id": 162
  },
  {
      "joke": "what's a programmer's favorite cookie? Java chip",
      "university": "University of Texas at Dallas",
      "id": 163
  },
  {
      "joke": "if your eyes don't hurt you're not doing it right",
      "university": "University of Texas at Dallas",
      "id": 164
  },
  {
      "joke": "What language does Harry Potter speak?\r\nPython",
      "university": "University of Texas at Dallas",
      "id": 165
  },
  {
      "joke": "A programmer had a problem. He thought to himself, “I know, I’ll solve it with threads!”\r\nhas Now problems. two he",
      "university": "Texas A&M University",
      "id": 166
  },
  {
      "joke": "#muscles {\r\n  display: flex;\r\n}",
      "university": "University of Texas at Arlington",
      "id": 167
  },
  {
      "joke": "what's a ghost's favorite data type: boo lean",
      "university": "Texas A&M International University",
      "id": 168
  },
  {
      "joke": "Normal People: 1 + 2 = 3\r\nProgrammers: 1 + 2 = 12",
      "university": "Texas A&M University",
      "id": 169
  },
  {
      "joke": "Why don't keyboards sleep? they have two shifts.",
      "university": "Texas A&M University",
      "id": 170
  },
  {
      "joke": "There are only 10 kinds of people in the world: Those who know Binary and those who don't.",
      "university": "Texas A&M University",
      "id": 171
  },
  {
      "joke": "I am a special coder, my first code was Howdy world!",
      "university": "Texas A&M University",
      "id": 172
  },
  {
      "joke": "Daily life of a programmer\r\nwhile(true){\r\n eat();\r\n sleep();\r\n iAmNotARobot();\r\n}",
      "university": "Texas A&M University",
      "id": 173
  },
  {
      "joke": "There are 10 kinds of people in this world; those who understand binary and those who don't.",
      "university": "Texas A&M University",
      "id": 174
  },
  {
      "joke": "Q. How do you access a compsci major's private member?\r\n\r\nA. gethead()",
      "university": "Texas A&M University",
      "id": 175
  },
  {
      "joke": "Why do programmers always mix up Halloween and Christmas?\r\nBecause Oct 31 equals Dec 25.",
      "university": "Texas A&M University",
      "id": 176
  },
  {
      "joke": "There are 10 types of people in this world. Those who know binary and those who don’t.",
      "university": "Texas A&M University",
      "id": 177
  },
  {
      "joke": "Do you know why I do not wear glasses?\r\nBecause I code in C#.",
      "university": "Texas A&M University",
      "id": 178
  },
  {
      "joke": "What does the private variable tell other classes? YOU CAN'T SEE ME!",
      "university": "Texas A&M University",
      "id": 179
  },
  {
      "joke": "Why do java programmers wear glasses? Because they can't C#",
      "university": "Texas A&M University",
      "id": 180
  },
  {
      "joke": "A guy walks into a bar and asks for 1.4 root beers. The bartender says \"I'll have to charge you extra, that's a root beer float\". The guy says \"In that case, better make it a double.\"",
      "university": "Texas A&M University",
      "id": 181
  },
  {
      "joke": "Ques: What's the object-oriented way to get wealthy? \r\nAns: Inheritance",
      "university": "Texas A&M University",
      "id": 182
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone – It’s a hardware problem",
      "university": "Texas A&M University",
      "id": 183
  },
  {
      "joke": "A programmer isn't really that hungry, how much does he eat?\r\n\r\ntwo bytes!!",
      "university": "Texas A&M University",
      "id": 184
  },
  {
      "joke": "I realized how out of shape I was when my scale told me I was -2147483648 pounds.",
      "university": "Texas A&M University",
      "id": 185
  },
  {
      "joke": "Code is gold",
      "university": "Texas A&M University",
      "id": 186
  },
  {
      "joke": "What do you call a programmer who can only use 4 values? a 2 bit programmer.",
      "university": "Texas A&M University",
      "id": 187
  },
  {
      "joke": "What is a programmers favorite hangout place? Foo Bar.",
      "university": "Texas A&M University",
      "id": 188
  },
  {
      "joke": "Why are objected oriented programmers mean on stack exchange? Because they think every question is for a Class.",
      "university": "Texas A&M University",
      "id": 189
  },
  {
      "joke": "Why do mathematicians always confuse Halloween and Christmas?\r\nBecause 31 Oct = 25 Dec.",
      "university": "Texas A&M University",
      "id": 190
  },
  {
      "joke": "I have compilation error on line number 504, but my code is just of 72 lines.",
      "university": "Texas A&M University",
      "id": 191
  },
  {
      "joke": "Whats my most used language when programming? Profanity",
      "university": "Texas A&M University",
      "id": 192
  },
  {
      "joke": "while(True):\r\n  yourSarcasm = None",
      "university": "Texas A&M University",
      "id": 193
  },
  {
      "joke": "What's a pirate's favorite programming language?\r\nR",
      "university": "Texas A&M University",
      "id": 194
  },
  {
      "joke": "How will you save titanic from sinking ?\r\nDeclare it as Float titanic :p",
      "university": "Texas A&M University",
      "id": 195
  },
  {
      "joke": "What do you call a Russian that is working on code? \r\nComPutin",
      "university": "Texas A&M University",
      "id": 196
  },
  {
      "joke": "When a person asked his programmer friend why he is clueless about the code he wrote, the programmer had no comment.",
      "university": "Texas A&M University",
      "id": 197
  },
  {
      "joke": "Any joke can be a one-liner with enough semicolons.",
      "university": "Texas A&M University",
      "id": 198
  },
  {
      "joke": "How many software engineers does it take to change a light bulb? None it’s a hardware problem",
      "university": "University of Texas at Arlington",
      "id": 199
  },
  {
      "joke": "When a new programming language is born what are its first words?\r\nHello, world",
      "university": "Texas A&M University",
      "id": 200
  },
  {
      "joke": "Women aren't objects. They are all in a class of their own.",
      "university": "Texas A&M University",
      "id": 201
  },
  {
      "joke": "What is a Pirate's favorite programming language?.....\r\nRrrrrrrrr",
      "university": "Texas A&M University",
      "id": 202
  },
  {
      "joke": "Hello World",
      "university": "Texas A&M University",
      "id": 203
  },
  {
      "joke": "What is the object-oriented way to become wealthy? Inheritance",
      "university": "Other",
      "id": 204
  },
  {
      "joke": "Why did the computer confuse Halloween and Christmas? Because OCT 31 == DEC 25",
      "university": "Texas A&M University",
      "id": 205
  },
  {
      "joke": "What is the most used language in programming? Profanity.",
      "university": "University of Texas at Arlington",
      "id": 206
  },
  {
      "joke": "Why do programmers love spiderman?\r\nBecause they deal with bugs",
      "university": "Texas A&M University",
      "id": 207
  },
  {
      "joke": "Q: Why did the programmer quit his job?\r\nA: Because he didn't get arrays.\r\n(hahahahahaha)",
      "university": "Texas A&M University",
      "id": 208
  },
  {
      "joke": "Recursion, sorry did you mean recursion... ad infininatum.",
      "university": "Texas A&M University",
      "id": 209
  },
  {
      "joke": "Programming is like sex:\r\nOne mistake and you have to support it for the rest of your life.",
      "university": "Texas A&M University",
      "id": 210
  },
  {
      "joke": "StackOverflow is everything you own",
      "university": "Texas A&M University",
      "id": 211
  },
  {
      "joke": "Q: How many programmers does it take to change a light bulb?\r\nA: none, that's a hardware problem",
      "university": "Texas A&M University",
      "id": 212
  },
  {
      "joke": "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't.",
      "university": "Texas A&M University",
      "id": 213
  },
  {
      "joke": "How do you know a baby is destined to be a programmer? If their first words are \"Hello, World\"",
      "university": "Texas A&M University",
      "id": 214
  },
  {
      "joke": "He: You are ';' to my code\r\nShe: I code in Python",
      "university": "Texas A&M University",
      "id": 215
  },
  {
      "joke": "What do you call a B in 121?\r\n\r\na C++",
      "university": "Texas A&M University",
      "id": 216
  },
  {
      "joke": "I don' t know why, but the new guy always runs after he finishes compiling his code! ¯_( ͡❛ ͜ʖ ͡❛)_/¯",
      "university": "Texas A&M University",
      "id": 217
  },
  {
      "joke": "Q: Why does \"Python\" live on land?\r\nA: Because it's above the \"C-Level.\"",
      "university": "Texas A&M University",
      "id": 218
  },
  {
      "joke": "C++ should be called ++C because C++ would not increment within an output statement, but ++C would!",
      "university": "Texas A&M University",
      "id": 219
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone- it's a hardware problem",
      "university": "Texas A&M University",
      "id": 220
  },
  {
      "joke": "Why do Java developers often wear glasses? They can’t C#.",
      "university": "Texas A&M University",
      "id": 221
  },
  {
      "joke": "Why did the database administrator leave his wife?\r\nShe had one-to-many relationships",
      "university": "University of Texas at Dallas",
      "id": 222
  },
  {
      "joke": "There are 10 types of people in this world: Those who know binary and those who don't.",
      "university": "Texas A&M University",
      "id": 223
  },
  {
      "joke": "There r 10 types of ppl in this world, those who understand binary and those who dont",
      "university": "University of Texas at Austin",
      "id": 224
  },
  {
      "joke": "What’s a pirates favorite programming language… C\r\n\r\nHaha",
      "university": "Austin Community College",
      "id": 225
  },
  {
      "joke": "99 little bugs in the code\r\n\r\n99 bugs in the code\r\n\r\npatch one down, compile it around\r\n\r\n117 bugs in the code",
      "university": "Texas A&M University",
      "id": 226
  },
  {
      "joke": "There are 10 types of people in this world. Those who know binary and those who do not.",
      "university": "University of Texas at Austin",
      "id": 227
  },
  {
      "joke": "I love pressing the F5 key, it's refreshing ‼️",
      "university": "Texas A&M University",
      "id": 228
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone – It’s a hardware problem",
      "university": "Texas A&M University",
      "id": 229
  },
  {
      "joke": "Debugging Nah it's the let me rethink my whole life.",
      "university": "University of Texas Pan American",
      "id": 230
  },
  {
      "joke": "What's the most common language used in code? English :D (or profanity)",
      "university": "Texas A&M University",
      "id": 231
  },
  {
      "joke": "My girlfriend always told me I'd be number 1 in the list of people she loves. This offends me as a programmer.",
      "university": "Texas A&M University",
      "id": 232
  },
  {
      "joke": "Why do programmers mistake Halloween with Christmas? Coz Oct 31 is equal to Dec 25",
      "university": "Texas A&M University",
      "id": 233
  },
  {
      "joke": "why is python on land? Because it's above C-level. :')",
      "university": "Texas A&M University",
      "id": 234
  },
  {
      "joke": "Why do Java programmers wear glasses?\r\nBecause they don't C#",
      "university": "Texas A&M University",
      "id": 235
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\n\r\nZero - it's a hardware problem!",
      "university": "Texas A&M University",
      "id": 236
  },
  {
      "joke": "How does a programmer visualize a cup of coffee? \r\nAnswer: In Binary",
      "university": "Texas A&M University",
      "id": 237
  },
  {
      "joke": "Many people, when confronted with a problem, think \"I can solve this with regular expressions!\" Now they have two problems.",
      "university": "Texas A&M University",
      "id": 238
  },
  {
      "joke": "A programmer's wife told her husband-'Bring some milk when you are out.' The husband never returned and the world ran out of milk. Recursion :)",
      "university": "Mississippi State University",
      "id": 239
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone – It’s a hardware problem",
      "university": "Texas A&M University",
      "id": 240
  },
  {
      "joke": "Why did the programmer quit his job?\r\n\r\nBecause he didn't get arrays.",
      "university": "Texas A&M University",
      "id": 241
  },
  {
      "joke": "Spaces or tabs.",
      "university": "University of Houston, Clear Lake",
      "id": 242
  },
  {
      "joke": "One hundred little bugs in the code\r\nOne hundred little bugs.\r\nFix a bug, link the fix in,\r\nOne hundred little bugs in the code.",
      "university": "Texas A&M University",
      "id": 243
  },
  {
      "joke": "Two C strings walk into a bar. The bartender asks “What can I get ya?” The first string says “I’ll have a gin and tonic.” The second string thinks for a minute, then says “I’ll take a tequila sunriseJF()#$JF(#)$(@J#)$@#))!*FNIN!OBN134ufh1ui34hf9813f8h8384h981h3984h5F!##@.” The first string apologizes, “You’ll have to excuse my friend, he’s not null terminated.",
      "university": "Texas A&M University",
      "id": 244
  },
  {
      "joke": "I just finished a 6000 line program and it compiled without any bugs on my first try!\r\nCode:\r\n1 System.out.println('Hello world');\r\n2 System.out.println('Hello world');\r\n3 System.out.println('Hello world');\r\n4 System.out.println('Hello world');\r\n5 ....",
      "university": "Texas A&M University",
      "id": 245
  },
  {
      "joke": "\"How do you find a variable in memory?\"\r\n\"I don't know, but I can give you a few pointers.\"",
      "university": "University of Texas at Dallas",
      "id": 246
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\n\r\nNone because it's a hardware problem.",
      "university": "Texas A&M University",
      "id": 247
  },
  {
      "joke": "Why did the engr 102 student hit his head on a pole?\r\nHe couldn't C it.",
      "university": "Texas A&M University",
      "id": 248
  },
  {
      "joke": "How did the programmer die in the shower? He read the shampoo bottle instructions: lather, rinse, repeat.",
      "university": "Texas A&M University",
      "id": 249
  },
  {
      "joke": "There are 10 types of people in this world, those who understand binary and those who don't.",
      "university": "Texas A&M University",
      "id": 250
  },
  {
      "joke": "Why did the programmer quit his job?\r\nBecause he didn't get arrays.",
      "university": "Texas A&M University",
      "id": 251
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone – It’s a hardware problem",
      "university": "Texas A&M University",
      "id": 252
  },
  {
      "joke": "!(false)\r\nIt's funny because it's true",
      "university": "Texas A&M University",
      "id": 253
  },
  {
      "joke": "When my friend compliments my code, I always tell him that none of this would be possible without my first mentor. His first name was Stack and his last name was Overflow.",
      "university": "Texas A&M University",
      "id": 254
  },
  {
      "joke": "There are only 10 kinds of people in this world: those who know binary and those who don't.",
      "university": "University of California, San Diego",
      "id": 255
  },
  {
      "joke": "There are 11 types of errors when programming directly in binary...\r\nSyntax errors,\r\nMemory management errors,\r\nMath errors, and\r\nOff-by-one errors.",
      "university": "Texas A&M University",
      "id": 256
  },
  {
      "joke": "A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t.",
      "university": "Texas A&M University",
      "id": 257
  },
  {
      "joke": "why do python programmers wear glasses? because they can't C.",
      "university": "Other",
      "id": 258
  },
  {
      "joke": "Why don't jokes work in octal? Because 7 10 11.",
      "university": "University of Texas Pan American",
      "id": 259
  },
  {
      "joke": "Why does C get all the chicks while Java doesn't. Because C doesn't treat them like objects.",
      "university": "Texas A&M University",
      "id": 260
  },
  {
      "joke": "I am a coding genius",
      "university": "Texas A&M University",
      "id": 261
  },
  {
      "joke": "I'm the 0th person to say this joke.",
      "university": "Texas A&M University",
      "id": 262
  },
  {
      "joke": "How many programmers does it take to change a lightbulb? N/A - it’s a hardware issue",
      "university": "Texas A&M University",
      "id": 263
  },
  {
      "joke": "Q : is 0 true?\r\nA : 0",
      "university": "Texas A&M University",
      "id": 264
  },
  {
      "joke": "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?”\r\n“Yeah,” reply the bytes.  “Make us a double.”",
      "university": "Texas A&M University",
      "id": 265
  },
  {
      "joke": "How many programmers does it take to change a lightbulb? None, it's a hardware problem.",
      "university": "Texas A&M University",
      "id": 266
  },
  {
      "joke": "How did the programmer die in the shower?\r\nHe read the shampoo bottle instructions: Lather. Rinse. Repeat.",
      "university": "Texas A&M University",
      "id": 267
  },
  {
      "joke": "How did the backslash get out of prison?\r\n\r\nBy being an escape character.",
      "university": "Austin Community College",
      "id": 268
  },
  {
      "joke": "Rust",
      "university": "Texas A&M University",
      "id": 269
  },
  {
      "joke": "What is the only programming language that make Hawaiians dance?\r\n...\r\n...\r\nLua (u)",
      "university": "Texas A&M University",
      "id": 270
  },
  {
      "joke": "A Windows programmers hobby: bug collector.",
      "university": "Texas A&M University",
      "id": 271
  },
  {
      "joke": "I'll tell you one after I finish looking for one on Stack Overflow.",
      "university": "Texas A&M University",
      "id": 272
  },
  {
      "joke": "A SQL statement walks into a bar and sees two tables. It approaches, and asks “may I join you?”",
      "university": "Texas A&M University",
      "id": 273
  },
  {
      "joke": "Why does c doesn’t get respect from c++ and java ? \r\nBecause c doesn’t have a class :P",
      "university": "Texas A&M University",
      "id": 274
  },
  {
      "joke": "knock knock, race condition!\r\n\r\nwhos there?",
      "university": "Texas A&M University",
      "id": 275
  },
  {
      "joke": "How do you escape the simulation?\r\nBy going to matrix[matrix.length][matrix[0].length]",
      "university": "Texas A&M University",
      "id": 276
  },
  {
      "joke": "Q: What is a programmer's favorite bar?\r\nA: Foo Bar",
      "university": "Texas A&M University",
      "id": 277
  },
  {
      "joke": "Some people, when confronted with a problem, think, 'I know, I'll use threads' - and then two they hav erpoblesms",
      "university": "Texas A&M University",
      "id": 278
  },
  {
      "joke": "Q : Why did the programmer quit his job?\r\nA : Because he didn't get arrays",
      "university": "Texas A&M University",
      "id": 279
  },
  {
      "joke": "TempleOS",
      "university": "Texas A&M University",
      "id": 280
  },
  {
      "joke": "Beep Boop Beep",
      "university": "Texas A&M University",
      "id": 281
  },
  {
      "joke": "There are 10 kinds of people. People who know binary, and the people who don't.",
      "university": "Texas A&M University",
      "id": 282
  },
  {
      "joke": "What is Similar Between Solidity and Coffee?\r\nThey Both require Some knowledge of Java to create/make.",
      "university": "Other",
      "id": 283
  },
  {
      "joke": "Real programmers edit code in Microsoft Paint",
      "university": "Texas A&M University",
      "id": 284
  },
  {
      "joke": "Q. How did the programmer die in the shower?\r\nA. He read the shampoo bottle instructions: Lather. Rinse. Repeat.",
      "university": "Texas A&M University",
      "id": 285
  },
  {
      "joke": "I 'C'an't think of one",
      "university": "University of Texas at Dallas",
      "id": 286
  },
  {
      "joke": "There are 10 types of people in the world. Those that understand binary and those that don't",
      "university": "Texas A&M University",
      "id": 287
  },
  {
      "joke": "Two bytes meet.  The first byte asks, “Are you ill?”\r\nThe second byte replies, “No, just feeling a bit off.”",
      "university": "Texas A&M University",
      "id": 288
  },
  {
      "joke": "The tabs vs spaces debate",
      "university": "Texas A&M University",
      "id": 289
  },
  {
      "joke": "\"It'll be a quick fix.\"\r\nNarrator: It wasn't.",
      "university": "Texas A&M University",
      "id": 290
  },
  {
      "joke": "Why did the programmer quit his job? Because he didn't get arrays",
      "university": "Texas A&M University",
      "id": 291
  },
  {
      "joke": "What do you call someone who is good with apple products? Swift.",
      "university": "Texas A&M University",
      "id": 292
  },
  {
      "joke": "Error 404 Joke not Found (this is the best joke I could come up with)",
      "university": "Texas A&M University",
      "id": 293
  },
  {
      "joke": "What is a ghost's favorite type? Boooolean.",
      "university": "Texas A&M University",
      "id": 294
  },
  {
      "joke": "Whats the object-oriented way to become wealthy?\r\n..... Inheritance",
      "university": "Texas A&M University",
      "id": 295
  },
  {
      "joke": "Programming is like sex:\r\nOne mistake and you have to support it for the rest of your life.",
      "university": "Texas A&M University",
      "id": 296
  },
  {
      "joke": "Idk",
      "university": "University of Texas at Dallas",
      "id": 297
  },
  {
      "joke": "Below. Enjoy :)",
      "university": "Texas A&M University",
      "id": 298
  },
  {
      "joke": "What's the best thing thing about UDP jokes?\r\nI don't care if you get them",
      "university": "Other",
      "id": 299
  },
  {
      "joke": "Knock knock.\r\nRace condition.\r\nWho's there?",
      "university": "Texas A&M University",
      "id": 300
  },
  {
      "joke": "A programmer goes to the movies and buys two buckets. One he fills with popcorn in case he gets hungry, the other he leaves empty in case he doesnt.",
      "university": "Texas A&M University",
      "id": 301
  },
  {
      "joke": "Byte me",
      "university": "Texas A&M University",
      "id": 302
  },
  {
      "joke": "The computer is mightier than the pen, the sword, and usually, the programmer.",
      "university": "Texas A&M University",
      "id": 303
  },
  {
      "joke": "How many programmers does it take to change a lightbulb? None, it's a hardware problem :D",
      "university": "Texas A&M University",
      "id": 304
  },
  {
      "joke": "What is the object-oriented way to become wealthy?\r\nInheritance.",
      "university": "Texas A&M University",
      "id": 305
  },
  {
      "joke": "What's a spider's dream job? \r\nA web developer",
      "university": "Texas A&M University",
      "id": 306
  },
  {
      "joke": "This time last year I was working as a computer programmer, installing auto correct. But out of nowhere..\r\n.. I was fried for no raisin.",
      "university": "Texas A&M University",
      "id": 307
  },
  {
      "joke": "My Debugging skills.",
      "university": "Texas A&M University",
      "id": 308
  },
  {
      "joke": "C++ string library",
      "university": "Texas A&M University",
      "id": 309
  },
  {
      "joke": "If you are not tired when coding, you aren't doing it right.",
      "university": "Texas A&M University",
      "id": 310
  },
  {
      "joke": "whats a ghosts favorite type? boolean",
      "university": "Texas A&M University",
      "id": 311
  },
  {
      "joke": "UNIX is user friendly…. It’s just very particular about who it’s friends are",
      "university": "Texas A&M University",
      "id": 312
  },
  {
      "joke": "Why did the programmer quit his job? Because he didn't get arrays.",
      "university": "Texas A&M University",
      "id": 313
  },
  {
      "joke": "What do pirates use to analyze their data? R!",
      "university": "Texas A&M University",
      "id": 314
  },
  {
      "joke": "What is a computer scientist's favorite art style? Abstraction",
      "university": "Texas A&M University",
      "id": 315
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone, its a hardware problem.",
      "university": "Texas A&M University",
      "id": 316
  },
  {
      "joke": "Knock knock\r\nRace condition\r\nWho's there?",
      "university": "Texas A&M University",
      "id": 317
  },
  {
      "joke": "\"What's a programmer's best friend?\"\r\n\r\n\"Google\"",
      "university": "Texas A&M University",
      "id": 318
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone – It’s a hardware problem",
      "university": "Texas A&M University",
      "id": 319
  },
  {
      "joke": "Q. How did the programmer die in the shower?\r\nA. He read the shampoo bottle instructions: Lather. Rinse. Repeat.\r\nStolen from Google.",
      "university": "Texas A&M University",
      "id": 320
  },
  {
      "joke": "To replace programmers with Robots, clients will have to accurately describe what they want.\r\nWe are safe.",
      "university": "Texas A&M University",
      "id": 321
  },
  {
      "joke": "Why did the programmer put two glasses on his bedside table? So that he'd have a full one in case he gets thirsty, and an empty one in case he doesn’t.",
      "university": "Texas A&M University",
      "id": 322
  },
  {
      "joke": "I would tell you a joke about UDP, but you probably wouldn't get it.",
      "university": "Texas A&M University",
      "id": 323
  },
  {
      "joke": "NA",
      "university": "Texas A&M University",
      "id": 324
  },
  {
      "joke": "Two bytes meet.  The first byte asks, “Are you ill?”\r\nThe second byte replies, “No, just feeling a bit off.”",
      "university": "Texas A&M University",
      "id": 325
  },
  {
      "joke": "He: can you C me?\r\nShe: R you crazy?\r\nDidn't think this far ahead...",
      "university": "Texas A&M University",
      "id": 326
  },
  {
      "joke": "Why was the programmer stuck in the shower?\r\nThe shampoo bottle said “Lather. Rinse. Repeat.”",
      "university": "Texas A&M University",
      "id": 327
  },
  {
      "joke": "There is no sight more satisfying or horrifying, but not both, when your code complies cleanly",
      "university": "Texas A&M University",
      "id": 328
  },
  {
      "joke": "What are a CISO’s two biggest cybersecurity fears?\r\nEveryone who works at the company… and everyone who doesn’t.",
      "university": "Texas A&M University",
      "id": 329
  },
  {
      "joke": "Knock knock.\r\nRace condition.\r\nWho's there?",
      "university": "Texas A&M University",
      "id": 330
  },
  {
      "joke": "Why do programmers always mix up Halloween and Christmas?\r\nBecause Oct 31 equals Dec 25.",
      "university": "Texas A&M University",
      "id": 331
  },
  {
      "joke": "Not exactly a joke but this xkcd resonates with me\r\nhttps://xkcd.com/2347/",
      "university": "Texas A&M University",
      "id": 332
  },
  {
      "joke": "There are 10 types of people. Those who understand binary and those who don't.",
      "university": "Texas A&M University",
      "id": 333
  },
  {
      "joke": "1111 asks 1110: \"I heard you have COVID, are you okay?\"\r\n1110 to 1111: \"Yeah, I'm okay. I am just feeling a *bit* off.\"",
      "university": "Texas A&M University",
      "id": 334
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone – It’s a hardware problem",
      "university": "Texas A&M University",
      "id": 335
  },
  {
      "joke": "I am a good candidate for an internship.",
      "university": "Texas A&M University",
      "id": 336
  },
  {
      "joke": "Knock knock\r\nRace condition\r\nWho's there?",
      "university": "Other",
      "id": 337
  },
  {
      "joke": "My mom was worried that I was a psychopath because she saw my web history. It said \"fork: how to kill a child without killing parent\"",
      "university": "Texas A&M University",
      "id": 338
  },
  {
      "joke": "3 Steps to being a good Programmer\r\n\r\n1. Avoid recursion \r\n2. Repeat steps 1 and 2.\r\n3. Always have an exit condition. \r\n4. Beware of being off by one.",
      "university": "Texas A&M University",
      "id": 339
  },
  {
      "joke": "One hundred little bugs in the code\r\nOne hundred little bugs.\r\nFix a bug, link the fix in,\r\nOne hundred little bugs in the code.",
      "university": "Texas A&M University",
      "id": 340
  },
  {
      "joke": "Two bytes meet.  The first byte asks, “Are you ill?”\r\nThe second byte replies, “No, just feeling a bit off.”",
      "university": "Texas A&M University",
      "id": 341
  },
  {
      "joke": "I like to code in python but not to play with python(snake)",
      "university": "Other",
      "id": 342
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone – It’s a hardware problem",
      "university": "Texas A&M University",
      "id": 343
  },
  {
      "joke": "A guy shows up to a Bay Area bar in a Ferrari. The bartender says, \"A programmer, I assume?\" The guy replies, \"Nah. A therapist.\"",
      "university": "Texas A&M University",
      "id": 344
  },
  {
      "joke": "Why did the moth enter the first computer?\r\nHe was looking for a BYTE to eat.",
      "university": "Texas A&M University",
      "id": 345
  },
  {
      "joke": "Did you hear about the monkeys who shared an Amazon account? They were Prime mates.",
      "university": "Texas A&M University",
      "id": 346
  },
  {
      "joke": "Not sure if I am good at programming or good at googling",
      "university": "Other",
      "id": 347
  },
  {
      "joke": "There are 10 types of people in this world - those who understand binary, and those who do not.",
      "university": "Texas A&M University",
      "id": 348
  },
  {
      "joke": "Me",
      "university": "Texas A&M University",
      "id": 349
  },
  {
      "joke": "wearing thigh highs makes you a better programmer",
      "university": "Texas A&M University",
      "id": 350
  },
  {
      "joke": "Why don't programmers like to go outside?\r\nBecause there are too many bugs",
      "university": "Texas A&M University",
      "id": 351
  },
  {
      "joke": "int mian(int argc, char* argv)",
      "university": "Texas A&M University",
      "id": 352
  },
  {
      "joke": "What do cats & programmers have in common?\r\nThey both find bugs",
      "university": "Texas A&M University",
      "id": 353
  },
  {
      "joke": "Why do programmers confuse halloween and christmas? Because Oct 31 == Dec 25.",
      "university": "Texas A&M University",
      "id": 354
  },
  {
      "joke": "What's the object-oriented way to get rich?\r\nInheritance",
      "university": "University of Texas at Austin",
      "id": 355
  },
  {
      "joke": "1000101",
      "university": "Texas A&M University",
      "id": 356
  },
  {
      "joke": "CSCE 314 teaching Haskell",
      "university": "Texas A&M University",
      "id": 357
  },
  {
      "joke": "Life is like a program, you can never stop making errors.",
      "university": "University of Texas at Dallas",
      "id": 358
  },
  {
      "joke": "Are you https? Cause without you im just :/",
      "university": "University of Texas at Dallas",
      "id": 359
  },
  {
      "joke": "A programmer puts two glasses on his bedside table before going to sleep. A full one in case he gets thirsty, and an empty one, in case he doesn't.",
      "university": "Texas A&M University",
      "id": 360
  },
  {
      "joke": "Not exactly a programming joke but definitely related to tech...\r\n\r\nMy son kept chewing on electrical cords so I had to ground him.",
      "university": "Other",
      "id": 361
  },
  {
      "joke": "beep boop boop beep",
      "university": "Texas A&M University",
      "id": 362
  },
  {
      "joke": "boop boop beep",
      "university": "Texas A&M University",
      "id": 363
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone – It’s a hardware problem",
      "university": "Texas A&M University",
      "id": 364
  },
  {
      "joke": "why did the programmer quit his job?\r\n\r\nbecause he didn't get arrays",
      "university": "Texas A&M University",
      "id": 365
  },
  {
      "joke": "A programmer's mouse has 5 simple parts. \r\nLeft click, right click, scroll wheel, Ctrl-C, Ctrl-V.",
      "university": "Other",
      "id": 366
  },
  {
      "joke": "01110111 01101000 01111001 00100000 01100100 01101001 01100100 00100000 01110100 01101000 01100101 00100000 01100011 01110011 00100000 01110011 01110100 01110101 01100100 01100101 01101110 01110100 00100000 01101100 01100101 01100001 01110110 01100101 00100000 01101000 01101001 01110011 00100000 01110010 01101111 01101111 01101101 00111111 00100000 01110100 01101111 00100000 01110100 01101111 01110101 01100011 01101000 00100000 01100111 01110010 01100001 01110011 01110011 00101110 00101110 00101",
      "university": "Texas A&M University",
      "id": 367
  },
  {
      "joke": "What's the best part about TCP jokes?\r\n\r\nI get to keep telling them until you get them.",
      "university": "Other",
      "id": 368
  },
  {
      "joke": "Why did the programmer quit his job?\r\n\r\nBecause he didn't get arrays.",
      "university": "Texas A&M University",
      "id": 369
  },
  {
      "joke": "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?”\r\n“Yeah,” reply the bytes.  “Make us a double.”",
      "university": "Texas A&M University",
      "id": 370
  },
  {
      "joke": "There are two types of people in the world. \r\npublic void main {\r\n\r\n}\r\nand \r\npublic void main\r\n{\r\n\r\n}",
      "university": "University of Texas at Austin",
      "id": 371
  },
  {
      "joke": "There are 10 types of programmers. Those who can read binary, and those who cant.",
      "university": "Texas A&M University",
      "id": 372
  },
  {
      "joke": "How do you fix and over byte? A fit-bit.",
      "university": "Texas A&M University",
      "id": 373
  },
  {
      "joke": "Memory leak jokes are trashy",
      "university": "Texas A&M University",
      "id": 374
  },
  {
      "joke": "Software subsystem (^人^)\r\nHardware Subsystem (/▽＼)",
      "university": "Texas A&M International University",
      "id": 375
  },
  {
      "joke": "I don't have a joke, programmers aren't funny.",
      "university": "Texas A&M University",
      "id": 376
  },
  {
      "joke": "[\"hip\",\"hip\"] = is a hip hip array :p",
      "university": "University of Houston",
      "id": 377
  },
  {
      "joke": "Howdy",
      "university": "Texas A&M University",
      "id": 378
  },
  {
      "joke": "which came first the chicken or the egg? \r\n\r\n\r\n[ctrl + Z]\r\nprogram was terminated",
      "university": "Texas A&M University",
      "id": 379
  },
  {
      "joke": "I've got a really good UDP joke to tell you, but I don't know if you'll get it.",
      "university": "Texas A&M University",
      "id": 380
  },
  {
      "joke": "https://cdn.vox-cdn.com/thumbor/BvTBavaM7SL_R2IpyI1LlvheKK8=/0x0:1640x1094/920x613/filters:focal(689x416:951x678):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69927098/eTjj9DPQqeSSYp21FI01_2864_copy_pdp.0.jpg",
      "university": "Texas A&M University",
      "id": 381
  },
  {
      "joke": "In order to understand recursion you must first understand recursion",
      "university": "Texas A&M University",
      "id": 382
  },
  {
      "joke": "How do you get wealthy in an object-oriented way? \r\nInheritance (lol)",
      "university": "Texas A&M University",
      "id": 383
  },
  {
      "joke": "Whitespace",
      "university": "Texas A&M University",
      "id": 384
  },
  {
      "joke": "I had an argument with my teammate about the best looping variable.\r\ni won",
      "university": "Texas A&M University",
      "id": 385
  },
  {
      "joke": "Life is too short to remove the USB safely.",
      "university": "Texas A&M University",
      "id": 386
  },
  {
      "joke": "Why do java programmers have to wear glasses? \r\nBecause, they don't C#",
      "university": "Texas A&M University",
      "id": 387
  },
  {
      "joke": "Why are open source statistical programming languages the best?\r\nBecause they R.",
      "university": "University of Texas",
      "id": 388
  },
  {
      "joke": "Are you sitting on the F5 key? Because your a** is refreshing.",
      "university": "Texas A&M University",
      "id": 389
  },
  {
      "joke": "int procrastinate()\r\n{\r\nint work_done = 0;\r\nprocrastinate();\r\nreturn work_done;\r\n}",
      "university": "Texas A&M University",
      "id": 390
  },
  {
      "joke": "When my code broke, I knew I had a bug. Then I looked on the screen, and there was a big spider!",
      "university": "Texas A&M University",
      "id": 391
  },
  {
      "joke": "\"It'll just be a quick fix.\"\r\nNarrator: \"It wasn't.\"",
      "university": "Austin Community College",
      "id": 392
  },
  {
      "joke": "You're a Queue<T>",
      "university": "Texas A&M University",
      "id": 393
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone – It’s a hardware problem",
      "university": "Texas A&M University",
      "id": 394
  },
  {
      "joke": "While coding, what language did the Spanish programmer use? The programmer used Si++!",
      "university": "Texas A&M University",
      "id": 395
  },
  {
      "joke": "why did the programmer not get the job?\r\nbecause they didn't get arrays",
      "university": "Texas A&M University",
      "id": 396
  },
  {
      "joke": "why dose python live on land? \r\nbecause is above C-Level!",
      "university": "Texas A&M University",
      "id": 397
  },
  {
      "joke": "me love coding idk",
      "university": "Texas A&M University",
      "id": 398
  },
  {
      "joke": "Two bytes meet in a bar. The first byte asks, \"Are you ill?\" The second byte replies, \"No, just feeling a bit off.\"",
      "university": "Texas A&M University",
      "id": 399
  },
  {
      "joke": "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?”\r\n“Yeah,” reply the bytes.  “Make us a double.”",
      "university": "Texas A&M University",
      "id": 400
  },
  {
      "joke": "How did the programmer die in the shower? He read the shampoo bottle instructions: Lather. Rinse. Repeat.",
      "university": "Texas A&M University",
      "id": 401
  },
  {
      "joke": "Two bits are standing next to each other, one goes \"3!\" the other goes \"2!\", another bit comes by and yells \"11!\".",
      "university": "University of Houston",
      "id": 402
  },
  {
      "joke": "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
      "university": "University of Texas at Dallas",
      "id": 403
  },
  {
      "joke": "no",
      "university": "Texas A&M University",
      "id": 404
  },
  {
      "joke": "My team and I had a debate over the best variable at lunch.\r\ni won.",
      "university": "Texas A&M University",
      "id": 405
  },
  {
      "joke": "\"My team had a debate on what the best looping variable name is\"\r\n\"i won\"",
      "university": "University of Texas at Dallas",
      "id": 406
  },
  {
      "joke": "Q:  What’s a chiefs favorite sorting algorithm?\r\nA:  Spaghetti Sort",
      "university": "Texas A&M University",
      "id": 407
  },
  {
      "joke": "if (sad) {\r\n    sad.stop();\r\n    std::cout << \"Be Amazing\" << std::endl;\r\n}",
      "university": "Texas A&M University",
      "id": 408
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone – It’s a hardware problem",
      "university": "University of Texas at Austin",
      "id": 409
  },
  {
      "joke": "What’s a programmers favorite coffee? Java",
      "university": "University of Texas",
      "id": 410
  },
  {
      "joke": "Yandere Simulator",
      "university": "University of Texas at Austin",
      "id": 411
  },
  {
      "joke": "Why do programmers always mix up Halloween and Christmas?\r\nBecause Oct 31 equals Dec 25.",
      "university": "University of Texas at Dallas",
      "id": 412
  },
  {
      "joke": "Why did the programmer quit his job?\r\nBecause he didn't get arrays.",
      "university": "Texas A&M University",
      "id": 413
  },
  {
      "joke": "The purpose of cryptography is to force the US government to torture you.",
      "university": "University of Texas at Austin",
      "id": 414
  },
  {
      "joke": "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
      "university": "Texas A&M University",
      "id": 415
  },
  {
      "joke": "There are 10 types of people in the world, those who understand binary, and those who don't.",
      "university": "University of Texas at Austin",
      "id": 416
  },
  {
      "joke": "Why did the programmer quit his job? Because he didn't get arrays.",
      "university": "Iowa State University of Science and Technology",
      "id": 417
  },
  {
      "joke": "There are 10 types of people in this world. Those who know binary and those who don't.",
      "university": "Texas A&M University",
      "id": 418
  },
  {
      "joke": "A guy walks into a bar and asks for 1.5 root beers. \r\nThe bartender says \"We have to charge you extra, that's a root beer float.\" \r\nTo which the guy replies, \"In that case make it a double.\"",
      "university": "Texas A&M University",
      "id": 419
  },
  {
      "joke": "10101 0100111 0100010100 100101000!",
      "university": "Texas A&M University",
      "id": 420
  },
  {
      "joke": "What’s harder to find than a missing semicolon? The indentation where there were spaces instead of tabs.",
      "university": "Texas A&M University",
      "id": 421
  },
  {
      "joke": "Are you ill? No, just feeling a BIT off!",
      "university": "Texas A&M University",
      "id": 422
  },
  {
      "joke": "A SQL query goes to a bar and walk up to two tables and asks, \r\n\r\n\"Can I join you?\"",
      "university": "Texas A&M University",
      "id": 423
  },
  {
      "joke": "Should I use Java or JavaScript?",
      "university": "Texas A&M University",
      "id": 424
  },
  {
      "joke": "There are 10 types of people in this world, those who know binary and those who don't :)",
      "university": "Texas A&M University",
      "id": 425
  },
  {
      "joke": "wMe being clowned by jest everytime i run unit tests",
      "university": "Other",
      "id": 426
  },
  {
      "joke": "How did the programmer die? He read the instructions \"lather, rinse, and repeat\" on the shampoo bottle.",
      "university": "Texas A&M University",
      "id": 427
  },
  {
      "joke": "What do computers and air conditioners have in common? They both become useless when you open windows.",
      "university": "Texas A&M University",
      "id": 428
  },
  {
      "joke": "my frontend knowledge idk",
      "university": "Texas A&M University",
      "id": 429
  },
  {
      "joke": "When someone tells me that all of their data is stored on the cloud, I look down and point oh you mean on the ground where servers are?",
      "university": "University of Texas at Dallas",
      "id": 430
  },
  {
      "joke": "!false \r\nIt's funny cause it's true.",
      "university": "Texas A&M University",
      "id": 431
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone – It’s a hardware problem",
      "university": "Texas A&M University",
      "id": 432
  },
  {
      "joke": "Did you backup the data base? Yeah I took a screenshot.",
      "university": "Texas A&M University",
      "id": 433
  },
  {
      "joke": "Why did the programmer quit his job? He didn't get arrays.",
      "university": "Texas A&M University",
      "id": 434
  },
  {
      "joke": "This xkcd is pretty funny: https://xkcd.com/353/",
      "university": "University of Texas at Dallas",
      "id": 435
  },
  {
      "joke": "Why do keyboards make the best protagonists?\r\n\r\n...Because they have good character development\r\n**applause**",
      "university": "Texas A&M University",
      "id": 436
  },
  {
      "joke": "Why do Java programmers wear glasses? Because they can't C# (see sharp)",
      "university": "Texas A&M University",
      "id": 437
  },
  {
      "joke": "what's the object oriented way to become wealthy?\r\nInheritence",
      "university": "Texas A&M University",
      "id": 438
  },
  {
      "joke": "if (don't work) {\r\n  work;\r\n}\r\n\r\nif (!gonna compile) {\r\n    compile;\r\n}",
      "university": "Texas A&M University",
      "id": 439
  },
  {
      "joke": "Why did the functions break up? \r\nThey stopped calling each other",
      "university": "Texas A&M University",
      "id": 440
  },
  {
      "joke": "Nobody is born cool. Except of course, people on Stack Overflow from 3 years ago, answering the question I had today.",
      "university": "Texas A&M University",
      "id": 441
  },
  {
      "joke": "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
      "university": "Texas A&M University",
      "id": 442
  },
  {
      "joke": "How many programmers does it take to change a light bulb? None – It’s a hardware problem.",
      "university": "Texas A&M University",
      "id": 443
  },
  {
      "joke": "git gud",
      "university": "University of Houston",
      "id": 444
  },
  {
      "joke": "What is the difference between a bit flip and a back flip? Back flips lead to applause, bit flips lead to horror.",
      "university": "Texas A&M University",
      "id": 445
  },
  {
      "joke": "My coding skills",
      "university": "Texas A&M University",
      "id": 446
  },
  {
      "joke": "It's not really a joke but I saw a pickup line that was: \"I'm in cs, you're in cs, I could really cs us together.\"",
      "university": "Texas A&M University",
      "id": 447
  },
  {
      "joke": "Why are Assembly programmers always soaking wet?\r\nBecause they work below C-level.",
      "university": "Texas A&M University",
      "id": 448
  },
  {
      "joke": "why did the computer scientist die in the shower?\r\nhe read the shampoo instructions: lather, rinse, repeat.",
      "university": "Texas A&M University",
      "id": 449
  },
  {
      "joke": "Why did the chicken cross the road? It didn't, because the python hasn't been programmed yet :D",
      "university": "Texas A&M University",
      "id": 450
  },
  {
      "joke": "This is going to be easy :)",
      "university": "Texas A&M University",
      "id": 451
  },
  {
      "joke": "There are 2 types of people in the world. Those who can count. Those who can't. And those who were expecting a ternary joke.",
      "university": "Texas A&M University",
      "id": 452
  },
  {
      "joke": "A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t",
      "university": "Texas A&M University",
      "id": 453
  },
  {
      "joke": "What was the second movie about the data scientist titled?\r\n-\r\n-\r\n-\r\n-\r\nThe SQL.",
      "university": "Texas A&M University",
      "id": 454
  },
  {
      "joke": "the easiest sentence in the world: \"Hello World!\"",
      "university": "Texas A&M University",
      "id": 455
  },
  {
      "joke": "mac vs windows",
      "university": "Texas A&M University",
      "id": 456
  },
  {
      "joke": "What's a programmers favorite animal? Python",
      "university": "Texas A&M University",
      "id": 457
  },
  {
      "joke": "A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t.",
      "university": "Texas A&M University",
      "id": 458
  },
  {
      "joke": "Why couldn't the programmer cross the road. Because he couldn't C.",
      "university": "Texas A&M University",
      "id": 459
  },
  {
      "joke": "\"What is your favorite Starbucks drink?\"\r\n\"Java Chip Frappuccino\"",
      "university": "Texas A&M University",
      "id": 460
  },
  {
      "joke": "How many programmers does it take to screw in a lightbulb?\r\n\r\nNone, that's a hardware problem.",
      "university": "Texas A&M University",
      "id": 461
  },
  {
      "joke": "When the linked list is empty: so no head?",
      "university": "University of Texas at Dallas",
      "id": 462
  },
  {
      "joke": "The generation of random numbers is too important to be left to chance.",
      "university": "Texas A&M University",
      "id": 463
  },
  {
      "joke": "01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100",
      "university": "Texas A&M University",
      "id": 464
  },
  {
      "joke": "\"Can I tell you a TCP joke?\"\r\n\r\n\"Please tell me a TCP joke.\"\r\n\r\n\"OK, I'll tell you a TCP joke.\"",
      "university": "Texas A&M University",
      "id": 465
  },
  {
      "joke": "Visual Basic for Applications. That's the joke.",
      "university": "Texas A&M University",
      "id": 466
  },
  {
      "joke": "You can always tell whether a programmer is an introvert or an extrovert when you talk to them depending on if they look at your shoes or their own shoes.",
      "university": "University of Houston",
      "id": 467
  },
  {
      "joke": "Why did the python programmer need glasses, because he couldn't C#",
      "university": "Texas A&M University",
      "id": 468
  },
  {
      "joke": "How did the hackers escape from the cops?\r\n\r\nThey ransomware",
      "university": "Texas A&M University",
      "id": 469
  },
  {
      "joke": "hmmmmmmmmmm....",
      "university": "University of Houston",
      "id": 470
  },
  {
      "joke": "A man asks the bartender for 1.5 root beers. The bartender goes, “I’ll have to charge you extra, that’s a root bear float.”",
      "university": "Texas A&M University",
      "id": 471
  },
  {
      "joke": "Whats the object-oriented way to become wealthy? Answer: Inheritance",
      "university": "Texas A&M University",
      "id": 472
  },
  {
      "joke": "How do you fix an overbite? A Fitbit.",
      "university": "Texas A&M University",
      "id": 473
  },
  {
      "joke": "99 bugs in the code, 99 bugs in the code. Take one down, patch it around, 120 bugs in the code.",
      "university": "Texas A&M University",
      "id": 474
  },
  {
      "joke": "quantum bogus sort",
      "university": "Texas A&M University",
      "id": 475
  },
  {
      "joke": "If you run into a problem, try multi-threading. Now you have 2 problems.",
      "university": "University of Texas at Dallas",
      "id": 476
  },
  {
      "joke": "Duck duck go",
      "university": "Texas Tech University",
      "id": 477
  },
  {
      "joke": "Question: How many software engineers does it take to screw in a lightbulb?\r\nAnswer: None, it's a hardware issue.",
      "university": "University of Houston",
      "id": 478
  },
  {
      "joke": "Programming is like sex:\r\nOne mistake and you have to support it for the rest of your life.",
      "university": "Texas Tech University",
      "id": 479
  },
  {
      "joke": "what is the correct way to leave a comment in html?\r\n1.$comment$\r\n2.@comment@\r\n3.#comment#\r\n4.                              (checked)\r\n5.<comment>",
      "university": "Texas A&M University",
      "id": 480
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone – It’s a hardware problem",
      "university": "Texas A&M University",
      "id": 481
  },
  {
      "joke": "I have a joke but it only works on my computer",
      "university": "Other",
      "id": 482
  },
  {
      "joke": "Why do programmers prefer dark mode? Because light attracts bugs!",
      "university": "Texas A&M University - Commerce",
      "id": 483
  },
  {
      "joke": "Q: \"Whats the object-oriented way to become wealthy?\"\r\nA: Inheritance\r\n(I am not taking credit for this, I 100% had to google it)",
      "university": "Texas A&M University",
      "id": 484
  },
  {
      "joke": "Recursion? Oh yeah, I got this, I'm an expert at making the same mistake recursively because I can't find the error. \r\nI'd rather debug the front of my truck by hand than my program.",
      "university": "Texas A&M University",
      "id": 485
  },
  {
      "joke": "The best thing about a Boolean is even if you are wrong, you are only off by a bit.",
      "university": "Other",
      "id": 486
  },
  {
      "joke": "Segmentation fault makes me sad.",
      "university": "Texas A&M University",
      "id": 487
  },
  {
      "joke": "There are 10 types of people, those who understand binary and those we don't.",
      "university": "Texas A&M University",
      "id": 488
  },
  {
      "joke": "What makes code bad? No comment",
      "university": "Texas A&M University",
      "id": 489
  },
  {
      "joke": "Two bytes talking.\r\nFirst byte to Second byte: \"Are you feeling ill?\"\r\nSecond byte replies: \"Just feeling a bit off.\"",
      "university": "Texas A&M University",
      "id": 490
  },
  {
      "joke": "What did Java say to C? You have no class.",
      "university": "Texas A&M University",
      "id": 491
  },
  {
      "joke": "https://www.reddit.com/r/badUIbattles/comments/ppnc1y/a_bad_ui_phone_selector_generated_with_the_help/?utm_source=share&utm_medium=web2x&context=3\r\n\r\nthat counts as a joke right?",
      "university": "University of Houston",
      "id": 492
  },
  {
      "joke": "The computer is mightier than the pen, the sword, and usually, the programmer.",
      "university": "Texas A&M University",
      "id": 493
  },
  {
      "joke": "What did the python say to the female python?\r\nPycharm",
      "university": "Texas A&M University",
      "id": 494
  },
  {
      "joke": "i need a < br />",
      "university": "University of Houston",
      "id": 495
  },
  {
      "joke": "There are10 kinds of people in this world: those who know binary and those who don’t.",
      "university": "University of Texas at Dallas",
      "id": 496
  },
  {
      "joke": "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
      "university": "Texas A&M University - Commerce",
      "id": 497
  },
  {
      "joke": "Object oriented way of getting rich?\r\nInheritance heh",
      "university": "Texas A&M University",
      "id": 498
  },
  {
      "joke": "The generation of random numbers is too important to be left to chance, but we left it to the Ostrich Algorithm (to stick one's head in the sand and pretend there are no errors).",
      "university": "Texas Tech University",
      "id": 499
  },
  {
      "joke": "https://img.devrant.com/devrant/rant/r_1750263_HdVvE.jpg\r\nthis one",
      "university": "Polytechnic University",
      "id": 500
  },
  {
      "joke": "Why do programmers always mix up Halloween and Christmas?\r\nBecause Oct 31 equals Dec 25.",
      "university": "University of Texas at Dallas",
      "id": 501
  },
  {
      "joke": "A farmer was wondering why none of his sheep were having kids and the doctor said he was out of RAM.",
      "university": "Texas A&M University",
      "id": 502
  },
  {
      "joke": "Why did the programmer die in the shower?\r\nBecause he read the instructions: lather, rinse, repeat",
      "university": "Texas A&M University",
      "id": 503
  },
  {
      "joke": "BLESS_THEM_KIDS.CSCEJPEG ;^)",
      "university": "Texas A&M University",
      "id": 504
  },
  {
      "joke": "UNIX is user friendly, its just very particular about who its friends are.",
      "university": "Texas A&M University",
      "id": 505
  },
  {
      "joke": "I have been programming too much\r\nI can barely cout of my eyes",
      "university": "Texas A&M University",
      "id": 506
  },
  {
      "joke": "How many programmers do you need to change a light bulb, zero that's a hardware problem",
      "university": "Texas A&M University",
      "id": 507
  },
  {
      "joke": "Programming is like sex:\r\nOne mistake and you have to support it for the rest of your life.",
      "university": "Texas A&M University",
      "id": 508
  },
  {
      "joke": "Knock knock.\r\nWho’s there?\r\nOur 431 project!",
      "university": "Texas A&M University",
      "id": 509
  },
  {
      "joke": "Beep Boop.",
      "university": "Texas A&M University",
      "id": 510
  },
  {
      "joke": "Oh! my favorite one is, \"there are 10 types of people in this world: those who know hex and F the rest\"",
      "university": "Texas A&M University",
      "id": 511
  },
  {
      "joke": "Any joke can be a one-liner with enough semicolons.",
      "university": "Texas A&M University",
      "id": 512
  },
  {
      "joke": "We should 1000101 xD",
      "university": "Texas A&M University",
      "id": 513
  },
  {
      "joke": "I dont know..",
      "university": "Texas A&M University",
      "id": 514
  },
  {
      "joke": "I once send a query that said DELETE * FROM instead of SELECT * FROMg",
      "university": "Texas A&M University",
      "id": 515
  },
  {
      "joke": "Matlab",
      "university": "Texas A&M University",
      "id": 516
  },
  {
      "joke": "Debugging: Removing the needles from the haystack.",
      "university": "Texas A&M University",
      "id": 517
  },
  {
      "joke": "“Knock, knock.”\r\n“Who’s there?”\r\nvery long pause….\r\n“Java.”",
      "university": "Texas A&M University",
      "id": 518
  },
  {
      "joke": "Do you want pizza?",
      "university": "Texas A&M University",
      "id": 519
  },
  {
      "joke": "How many programmers does it take to screw in a lightbulb? None, it's a hardware problem",
      "university": "Texas A&M University",
      "id": 520
  },
  {
      "joke": "What did the Java class say to the C code? You've got no class.",
      "university": "Texas A&M University",
      "id": 521
  },
  {
      "joke": "The computer is mightier than the pen, the sword, and usually, the programmer.",
      "university": "Texas A&M University",
      "id": 522
  },
  {
      "joke": "One hundred little bugs in the code;\r\none hundred little bugs.\r\nPatch a bug, compile the code.\r\nOne hundred and twenty one little bugs in the code.",
      "university": "University of Texas at Dallas",
      "id": 523
  },
  {
      "joke": "Like all programming assignments, I'm doing this application at the last minute",
      "university": "University of Texas at Austin",
      "id": 524
  },
  {
      "joke": "knock knock\r\nwho's there\r\nboo\r\nboo-who?\r\nit's ok, I'm crying bc i can't exit vim, too",
      "university": "Texas A&M University",
      "id": 525
  },
  {
      "joke": "Python Dev when no Dynamic Arrays in C :\r\n:(",
      "university": "Texas A&M University",
      "id": 526
  },
  {
      "joke": "my qualifications you ask? I'm a full-snack developer",
      "university": "Other",
      "id": 527
  },
  {
      "joke": "How many programmers does it take to change a light bulb? None. It’s a hardware problem",
      "university": "Texas A&M University",
      "id": 528
  },
  {
      "joke": "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?”\r\n“Yeah,” reply the bytes.  “Make us a double.”",
      "university": "Texas A&M University",
      "id": 529
  },
  {
      "joke": "What is a group of Charmanders called? A Stringmander",
      "university": "Texas A&M University",
      "id": 530
  },
  {
      "joke": "What do you call forceful data manipulation? a bit smack.",
      "university": "Texas A&M University",
      "id": 531
  },
  {
      "joke": "I can't seem to access one... Got any pointers?",
      "university": "Texas A&M University",
      "id": 532
  },
  {
      "joke": "What's the best car for a programmer? Anything that isn't a little Buggy.",
      "university": "Texas A&M University",
      "id": 533
  },
  {
      "joke": "\"To replace programmers with robots, users will have to accurately describe what they want. We're safe\"",
      "university": "Texas A&M University",
      "id": 534
  },
  {
      "joke": "Grow 4 lines of code in 4 weeks!!\r\nProgrammers hate this one simple trick!!",
      "university": "Texas A&M University",
      "id": 535
  },
  {
      "joke": "Joke...joke...joke...",
      "university": "Texas A&M University",
      "id": 536
  },
  {
      "joke": "Using \"while (true)\" = :)\r\nUsing \"while (1)\" = :)\r\nUsing \"for (;:)\" = 0_0",
      "university": "Texas A&M University",
      "id": 537
  },
  {
      "joke": "What is the object-oriented way to become wealthy? Inheritance",
      "university": "Texas A&M University",
      "id": 538
  },
  {
      "joke": "Can't think of one now, let me check StackOverflow",
      "university": "Texas A&M University",
      "id": 539
  },
  {
      "joke": "One hundred little bugs in the code;\r\none hundred little bugs.\r\nPatch a bug, compile the code.\r\nOne hundred and twenty one little bugs in the code.",
      "university": "Texas A&M University",
      "id": 540
  },
  {
      "joke": "a teacher asks a mathmatician whats the largest number \r\nhe responds: well infinity \r\nHe then asks a computer scientist: well how many bits are you dealing with?",
      "university": "Texas A&M University",
      "id": 541
  },
  {
      "joke": "Test",
      "university": "Texas A&M University",
      "id": 542
  },
  {
      "joke": "I would but I’m not programmed to be funny",
      "university": "Texas A&M University",
      "id": 543
  },
  {
      "joke": "Q: Why did the programmer quit his job?\r\nA: Because he didn't get arrays.",
      "university": "Texas A&M University",
      "id": 544
  },
  {
      "joke": "How would you know if you met a computer science major??\r\n...\r\nThey probably would've told you already",
      "university": "Texas A&M University",
      "id": 545
  },
  {
      "joke": "What do you call a web developer who's also a bounty hunter? Django Fett.",
      "university": "Texas A&M University",
      "id": 546
  },
  {
      "joke": "print(\"why did the chicken cross the road\")\r\nprint(\"to get to the other side\")",
      "university": "Texas A&M University",
      "id": 547
  },
  {
      "joke": "What do you call an integrated development environment with a rainbow color scheme?\r\na prIDE",
      "university": "Texas A&M University",
      "id": 548
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone – It’s a hardware problem",
      "university": "Texas A&M University",
      "id": 549
  },
  {
      "joke": "Why do Java programmers have to wear glasses?\r\nBecause they don't C#",
      "university": "Texas A&M University",
      "id": 550
  },
  {
      "joke": "You should date a JavaScript developer... we always callback",
      "university": "Texas A&M University",
      "id": 551
  },
  {
      "joke": "There are 10 types of people in this world:\r\nPeople who know binary and people who don't.",
      "university": "Texas A&M University",
      "id": 552
  },
  {
      "joke": "How did the programmer die in the shower? He followed the instructions on the shampoo bottle: lather, rinse, repeat.",
      "university": "Texas A&M University",
      "id": 553
  },
  {
      "joke": "hi",
      "university": "Harvard University",
      "id": 554
  },
  {
      "joke": "I am going to specialize in Roblox Lua",
      "university": "University of Texas at Austin",
      "id": 555
  },
  {
      "joke": "adwd",
      "university": "Academy of Art College",
      "id": 556
  },
  {
      "joke": "Why do programmers like dark mode? \r\nBecause light attracts bugs",
      "university": "Texas A&M University",
      "id": 557
  },
  {
      "joke": "What's the best thing about UDP jokes? I don't care if you get them.",
      "university": "Texas A&M University",
      "id": 558
  },
  {
      "joke": "Why did the programmer quit his job? He didn't get arrays.",
      "university": "Texas A&M University",
      "id": 559
  },
  {
      "joke": "Why did the programmer quit his job?\r\n- He didn't get arrays",
      "university": "Texas A&M University",
      "id": 560
  },
  {
      "joke": "What did the Python say when he shed out of his old skin? \"Hello World!\"",
      "university": "Texas A&M University",
      "id": 561
  },
  {
      "joke": "How many programmers does it take to change a lightbulb? None it's a hardware problem",
      "university": "Texas A&M University",
      "id": 562
  },
  {
      "joke": "b",
      "university": "Academy of Art College",
      "id": 563
  },
  {
      "joke": "Q: What do you call a programmer's code that never works?\r\nA: Exceptional",
      "university": "Texas A&M University",
      "id": 564
  },
  {
      "joke": "There are 10 kinds of people in this world: those who understand binary, those who don’t.",
      "university": "Texas A&M University",
      "id": 565
  },
  {
      "joke": "So you're telling me we have to write code to test our other code?",
      "university": "Texas A&M University",
      "id": 566
  },
  {
      "joke": "Two bytes meet.  The first byte asks, “Are you ill?”\r\nThe second byte replies, “No, just feeling a bit off.”",
      "university": "Texas A&M University",
      "id": 567
  },
  {
      "joke": "Which drink does the programmer order at Starbucks?\r\n-JAVA chip",
      "university": "Texas A&M University",
      "id": 568
  },
  {
      "joke": "Q: How do you define recursion?\r\nA: To define recursion, you must first define recursion.",
      "university": "University of Minnesota - Twin Cities Campus",
      "id": 569
  },
  {
      "joke": "Programing is like a python snake, slithering its way to the finish line.",
      "university": "Texas A&M University",
      "id": 570
  },
  {
      "joke": "I would show you the joke but it only works on my computer.",
      "university": "Texas A&M University",
      "id": 571
  },
  {
      "joke": "Why can't sailors code? Because they're lost at C.",
      "university": "Texas A&M University",
      "id": 572
  },
  {
      "joke": "Q: Why did the CS major fail the eye exam?\r\nA: They can't C#!",
      "university": "Texas A&M University",
      "id": 573
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone – It’s a hardware problem",
      "university": "University of Texas at Dallas",
      "id": 574
  },
  {
      "joke": "In the midst of an attempt to admonish a student to get to work on a problem in class today, the teacher said, \"Hey, activate your brain!\".  A second student said, \"Right!  Brain dot think.\"  Chuckles spread through the room, then a third student said rather quietly, \"Null pointer exception.\"",
      "university": "Other",
      "id": 575
  },
  {
      "joke": "Never spend 6 minutes doing something by hand when you can spend 6 hours failing to automate it",
      "university": "Texas A&M University",
      "id": 576
  },
  {
      "joke": "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25.",
      "university": "Texas A&M University",
      "id": 577
  },
  {
      "joke": "Electron",
      "university": "Texas A&M University",
      "id": 578
  },
  {
      "joke": "I can't think of one",
      "university": "University of Texas at Dallas",
      "id": 579
  },
  {
      "joke": "What did one computer tell to the other? 01101000 01100101 01101100 01101100 01101111",
      "university": "University of Texas at Dallas",
      "id": 580
  },
  {
      "joke": "You are my loop condition. I keep coming back to you.",
      "university": "University of Texas at Dallas",
      "id": 581
  },
  {
      "joke": "Hardware is the part of the computer that you can kick.",
      "university": "University of Texas Pan American",
      "id": 582
  },
  {
      "joke": "what's something very rare that people think is very common? A programmer who knows how to fix your printer.",
      "university": "Texas A&M University",
      "id": 583
  },
  {
      "joke": "What do you get when you combine a novice programmer and a C++ array?\r\n\r\nA segfault",
      "university": "Texas A&M University",
      "id": 584
  },
  {
      "joke": "Roses are red, violets are blue. Unexpected curly brace on line 42.",
      "university": "Texas A&M University",
      "id": 585
  },
  {
      "joke": "To know about recursion, you should know recursion.",
      "university": "Other",
      "id": 586
  },
  {
      "joke": "Char-mander used Byte. It did 8 bits of damage\r\n\r\nIn case you thought this was original, here's the link to the Reddit thread. Enjoy (https://www.reddit.com/r/ProgrammerHumor/comments/s3yker/charmander_used_byte_it_did_8_bits_of_damage/)",
      "university": "Texas A&M University",
      "id": 587
  },
  {
      "joke": "What did the C++ programmer say to his crush?\r\n\r\nYou're cout!",
      "university": "Texas A&M University",
      "id": 588
  },
  {
      "joke": "Why did the programmer quit his job? \r\nBecause he didn't get arrays",
      "university": "University of Texas at Austin",
      "id": 589
  },
  {
      "joke": "Javascript (the language)\r\nnah here's my best one\r\n\r\na software test engineer walks into a bar and orders:\r\n1 drink\r\n5 drinks\r\n52390809831 drinks\r\n-1 drinks\r\n-13098309182 drinks\r\n\"STRING\" drinks\r\n\r\na user walks into the bar and asks for the bathroom. The bar explodes.",
      "university": "Texas A&M University",
      "id": 590
  },
  {
      "joke": "A bug in a finished program isn't a bug at all, it is a feature.",
      "university": "Texas Tech University",
      "id": 591
  },
  {
      "joke": "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
      "university": "University of Texas at Austin",
      "id": 592
  },
  {
      "joke": "C++ to C: \"You have no class\"",
      "university": "Texas A&M University",
      "id": 593
  },
  {
      "joke": "Why did the programmer quit his job? Because he didn't get arrays",
      "university": "University of Texas Health Center at Houston",
      "id": 594
  },
  {
      "joke": "i’m a math major so i’ll give a math joke (programming is just applied math anyway). \r\n\r\nan infinite number of mathematicians all get off of work and head to the nearest bar. the first walks up to the bar and orders a beer, the second half a beer, and the third a quarter. as the fourth walked up the bartender waved him to silence and poured two beers, saying “you mathematicians really need to know your limits”.",
      "university": "University of Texas at Dallas",
      "id": 595
  },
  {
      "joke": "A programmers wife told him to get milk While he was out...\r\nHe never came back.",
      "university": "Texas A&M University",
      "id": 596
  },
  {
      "joke": "Girl- For Christmas i want a Dragon\r\nSanta- Be Realistic\r\nGirl- ok, I want to pass all test cases on first try\r\nSanta- What color do you want your Dragon.",
      "university": "Other",
      "id": 597
  },
  {
      "joke": "What does a programmer wear? Whatever is in the dress code.",
      "university": "Texas A&M University",
      "id": 598
  },
  {
      "joke": "Hotel? Trivago\r\nCoding? Vs code\r\n\r\nP. S:- I made this, lol",
      "university": "Other",
      "id": 599
  },
  {
      "joke": "My WPM is 25.",
      "university": "Texas A&M University",
      "id": 600
  },
  {
      "joke": "What's the object-oriented way to become wealthy? - Ans: Inheritance",
      "university": "Texas A&M University",
      "id": 601
  },
  {
      "joke": "The story of my life, a missing semi-colon.",
      "university": "University of Texas at Austin",
      "id": 602
  },
  {
      "joke": "Why do programmers always get Christmas and Halloween mixed up?\r\n\r\nBecause DEC 25 = OCT 31",
      "university": "Texas A&M University",
      "id": 603
  },
  {
      "joke": "It doesn't work... why?\r\nIt works... why???",
      "university": "Texas A&M University",
      "id": 604
  },
  {
      "joke": "What do computers and air conditioners have in common? They become useless when you open Windows. :D",
      "university": "Texas A&M University",
      "id": 605
  },
  {
      "joke": "What's worse than not knowing why your code doesn't work? Not knowing why your code works.",
      "university": "University of Texas at Dallas",
      "id": 606
  },
  {
      "joke": "There are 10 types of people in this world. Those who understand binary and those who don't understand binary.",
      "university": "Texas A&M University",
      "id": 607
  },
  {
      "joke": "99 bugs on the wall. x2\r\nTake 1 down,\r\nPatch it around,\r\n101 bugs on the wall.",
      "university": "Other",
      "id": 608
  },
  {
      "joke": "How many programmers does it take to screw in a light bulb?\r\n\r\n\r\nNone. It's a hardware problem.",
      "university": "Texas A&M University",
      "id": 609
  },
  {
      "joke": "What I am: \r\n-Programmer\r\n\r\nWhat I am not: \r\n-Facebook hacker\r\n-Laptop Repairer\r\n-Spreadsheet Wizard\r\n-App Troubleshooter\r\n-Email Assistant\r\n-Bluetooth Ninja",
      "university": "Texas A&M University",
      "id": 610
  },
  {
      "joke": "what's a bee from USA?\r\nA USB lol",
      "university": "Other",
      "id": 611
  },
  {
      "joke": "Why did the programmer die in the shower? \r\nThe shampoo bottle said, \"Lather, rinse, repeat\".",
      "university": "Texas A&M University",
      "id": 612
  },
  {
      "joke": "idk",
      "university": "University of Houston",
      "id": 613
  },
  {
      "joke": "I C, but I won't tell any.",
      "university": "University of Texas at Dallas",
      "id": 614
  },
  {
      "joke": "How do you convince your professor to bump you up a letter grade? Tell him you deserve a \"C++\".",
      "university": "Texas A&M University",
      "id": 615
  },
  {
      "joke": "What is sleep?",
      "university": "Other",
      "id": 616
  },
  {
      "joke": "A programmer puts two glasses of water on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t.",
      "university": "Texas A&M University",
      "id": 617
  },
  {
      "joke": "why should you date === and not == ?\r\nbecause === doesn't try to change you.",
      "university": "Texas A&M University",
      "id": 618
  },
  {
      "joke": "“Knock, knock.”\r\n“Who’s there?”\r\nvery long pause….\r\n“Java.”",
      "university": "Texas A&M University",
      "id": 619
  },
  {
      "joke": "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't",
      "university": "Texas A&M University",
      "id": 620
  },
  {
      "joke": "Well… I have short-term memory loss.\r\n\r\nHmm… what else?\r\n\r\nI have short-term memory loss.\r\n\r\nLet me see…\r\n\r\nI DO have short-term memory loss…",
      "university": "University of Texas at Arlington",
      "id": 621
  },
  {
      "joke": "The generation of random numbers is too important to be left to chance.",
      "university": "Rice University",
      "id": 622
  },
  {
      "joke": "Segmentation fault.",
      "university": "Texas A&M University",
      "id": 623
  },
  {
      "joke": "How many programmers does it take to change a lightbulb. \r\nnone, its a hardware problem",
      "university": "Texas A&M University",
      "id": 624
  },
  {
      "joke": "A programmer's wife asked her husband to \"Go to the store and buy a carton of milk. If they have eggs, buy a dozen.\"\r\n\r\nHe returned with 12 cartons of milk.",
      "university": "Texas A&M University",
      "id": 625
  },
  {
      "joke": "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
      "university": "Texas A&M University",
      "id": 626
  },
  {
      "joke": "The developer stopped working after he did not receive arrays.",
      "university": "Texas A&M University",
      "id": 627
  },
  {
      "joke": "Why did the Java programmer need glasses? \r\nBecause they couldn't C#.",
      "university": "University of Texas at Austin",
      "id": 628
  },
  {
      "joke": "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
      "university": "Texas A&M University",
      "id": 629
  },
  {
      "joke": "I don't always test my code but when I do, I do it in production ��.",
      "university": "Texas A&M University",
      "id": 630
  },
  {
      "joke": "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
      "university": "Purdue University",
      "id": 631
  },
  {
      "joke": "I take a lot of showers",
      "university": "University of Texas at Dallas",
      "id": 632
  },
  {
      "joke": "How can a C++ developer stranded in the desert find help?\r\nThey should start singing their praises for C++. A Rust evangelist will show up immediately to conduct reeducation.",
      "university": "University of Minnesota - Twin Cities Campus",
      "id": 633
  },
  {
      "joke": "Why don’t avatars trust binary?\r\n It makes up everything in the virtual world.",
      "university": "Texas A&M University",
      "id": 634
  },
  {
      "joke": "there are 10 kinds of people in this word, the ones who understand binary and the ones who don't",
      "university": "University of Texas at Austin",
      "id": 635
  },
  {
      "joke": "My favorite programming joke is one that everyone's heard but when I first started learning programming my teacher was teaching us about recurssion and said \"In order to learn recursion we need to first know recursion, in order to learn recursion we need to first know recursion, in order to learn recursion we need to first know recursion\".",
      "university": "Texas A&M University",
      "id": 636
  },
  {
      "joke": "Learning a new language is very difficult\r\n\r\nProgrammer: \"just learn the syntax\".",
      "university": "Texas A&M University",
      "id": 637
  },
  {
      "joke": "How many programmers does it take to screw in a lightbulb? None, its a hardware problem lol.",
      "university": "Texas A&M University",
      "id": 638
  },
  {
      "joke": "What do you call a group of 8 hobbits?\r\n\r\n Hobbyte",
      "university": "Texas A&M University",
      "id": 639
  },
  {
      "joke": "A programmer walks into a bar\r\njumps into a bar\r\nruns into a bar\r\ncrawls into a bar\r\nsneaks into a bar\r\n...\r\norders a beer\r\norders two beers\r\norders 99 beers\r\norders 12783681749210941 beers\r\norders 0 beers\r\norders -1 beers\r\norders \"wednesday\" beers\r\norders \"); DROP TABLE USERS;\" beers\r\norders a coke\r\n\r\nsuddenly, a real customer walks into the bar and asks where the bathroom is.\r\nThe bar goes up in flames.",
      "university": "Texas Tech University",
      "id": 640
  },
  {
      "joke": "How do you tell an extroverted computer scientist from an introverted computer scientist?\r\n\r\nAn extroverted computer scientist looks at your shoes when he or she talks to you.",
      "university": "Texas A&M University",
      "id": 641
  },
  {
      "joke": "What did the mathematician tell the programmer at the party? \r\n\r\nDon't drink and derive :)",
      "university": "University of Texas Pan American",
      "id": 642
  },
  {
      "joke": "The way we learn the odds and ends of memory diagramming pointers in C++: https://www.urbandictionary.com/define.php?term=Levels%20of%20Starriness\r\n\r\nAlso note the name of the author that made the Urban Dictionary post. I find that pretty funny too.",
      "university": "Southern Methodist University",
      "id": 643
  },
  {
      "joke": "A beginner programmer runs a piece of code he just wrote. Surprised at it working, he calls over an experienced programmer to celebrate. The experienced programmer remarks, \"That is a once in a lifetime feeling. Cherish it like the birth of your child because you can count the number of times you will get that feeling on one hand!\"",
      "university": "Texas A&M University",
      "id": 644
  },
  {
      "joke": "I am a single-thread person, I cannot handle things concurrently",
      "university": "University of Houston",
      "id": 645
  },
  {
      "joke": "What do spiders and hackers have in common? They both hang out on webs :-)",
      "university": "Texas A&M University",
      "id": 646
  },
  {
      "joke": "Umm..forgetting to delete the 100's of print statements after a debugging session",
      "university": "Texas A&M University",
      "id": 647
  },
  {
      "joke": "import numpy as np\r\nimport pandas as pd\r\nimport tensorflow as tf\r\nimport tensorflow.keras as keras\r\nimport cv2\r\n\r\nprint(“Hello World”)",
      "university": "Texas A&M University",
      "id": 648
  },
  {
      "joke": "Why do they need a computer scientist at the zoo? Because they need someone to be fluent in Python.",
      "university": "Texas A&M University",
      "id": 649
  },
  {
      "joke": "Some people say a glass is half full, others say the glass is half empty, programmers say the glass is twice the necessary size.",
      "university": "Austin Community College",
      "id": 650
  },
  {
      "joke": "There are 10 types of people, those who know binary and those who don’t.",
      "university": "Texas A&M University",
      "id": 651
  },
  {
      "joke": "What do computers and air conditioners have in common? They both become useless when you open windows",
      "university": "Texas A&M University",
      "id": 652
  },
  {
      "joke": "java ha haha ha get it",
      "university": "University of Minnesota - Twin Cities Campus",
      "id": 653
  },
  {
      "joke": "A QA engineer walks into a bar. Orders a beer. Orders 0 beers. Orders 99999999999 beers. Orders a lizard. Orders -1 beers. Orders a ueicbksjdhd. \r\n\r\nFirst real customer walks in and asks where the bathroom is. The bar bursts into flames, killing everyone.",
      "university": "Texas A&M University",
      "id": 654
  },
  {
      "joke": "C++",
      "university": "Texas A&M University",
      "id": 655
  },
  {
      "joke": "What's the most used language in programming? Profanity",
      "university": "Texas A&M University",
      "id": 656
  },
  {
      "joke": "Girl I should call you double the way you're always floating in my mind",
      "university": "Texas A&M University",
      "id": 657
  },
  {
      "joke": "Q: What's the object-oriented way to become wealthy?\r\nA: Inheritance",
      "university": "Texas A&M University",
      "id": 658
  },
  {
      "joke": "Men in tech will literally buy a maxed out mac and herman miller chair because they spend half their life using them so the expense is justified and then spend 24/7 in the same couple of awfully fitting t shirts they got for free form some hackathon years ago.",
      "university": "Texas A&M University",
      "id": 659
  },
  {
      "joke": ">>> True = False\r\n>>> True == False\r\n\r\nTrue\r\n\r\n>>> x = True\r\n>>> x\r\n\r\nFalse",
      "university": "Texas A&M University",
      "id": 660
  },
  {
      "joke": "Programming is like sex:\r\nOne mistake and you have to support it for the rest of your life.",
      "university": "Texas A&M University",
      "id": 661
  },
  {
      "joke": "Drug Dealers: Refer to their clients as \"users\"\r\nProgrammers: Refer to their clients as \"users\"",
      "university": "Texas A&M University",
      "id": 662
  },
  {
      "joke": "I want to make the world a better place, but they won’t give me the source code ☹",
      "university": "Texas A&M University",
      "id": 663
  },
  {
      "joke": "Why do programmers confuse Halloween and Christmas? Because 31 OCT == 25 DEC",
      "university": "Other",
      "id": 664
  },
  {
      "joke": "Q: \"Whats the object-oriented way to become wealthy?\"\r\nA: Inheritance",
      "university": "Other",
      "id": 665
  },
  {
      "joke": "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
      "university": "Texas A&M University",
      "id": 666
  },
  {
      "joke": "There are only 10 types of people in the world, the ones who get it and the ones who don't.",
      "university": "Texas A&M University",
      "id": 667
  },
  {
      "joke": "Nah I'm good",
      "university": "Texas A&M University",
      "id": 668
  },
  {
      "joke": "compiling on the first try",
      "university": "University of Minnesota - Twin Cities Campus",
      "id": 669
  },
  {
      "joke": "Random person: Chokes and says 'RRRRR'\r\nMe: Oh no, did a python (P) bite you?\r\nRandom person: Yes, P bit on my throat. But you can revive me using one programming language.\r\nMe: How?\r\nRandom person: P caused me to R, but I need you to program in C so you can do CPR on me.",
      "university": "Texas A&M University",
      "id": 670
  },
  {
      "joke": "Try and do better  C++ ain’t anything to be proud of.",
      "university": "Texas Tech University",
      "id": 671
  },
  {
      "joke": "Why do programmers keep confusing Halloween and Christmas?\r\n\r\nOct 31 == Dec 25",
      "university": "Texas A&M University",
      "id": 672
  },
  {
      "joke": "Q. How did the programmer die in the shower?\r\nA. He read the shampoo bottle instructions: Lather. Rinse. Repeat.",
      "university": "Texas A&M University",
      "id": 673
  },
  {
      "joke": "if ( !ben_awad ){\r\n    i_will_get_a_girlfriend = True;\r\n}",
      "university": "Texas A&M University",
      "id": 674
  },
  {
      "joke": "What is a ghosts favorite type? Booooooooolean.",
      "university": "Texas A&M University",
      "id": 675
  },
  {
      "joke": "Programmers go to bed with two glasses next to them at night. One with water in case they're thirsty and without in case they're not.",
      "university": "Texas A&M University",
      "id": 676
  },
  {
      "joke": "Not really a joke but I remember my high school teacher who taught me using outdated software used to always say \"the compiler's as dumb as a load of bricks\" everyday during class and that's the only thing I remember from his class.",
      "university": "Texas A&M University",
      "id": 677
  },
  {
      "joke": "why did the man keep stacking suitcases? because their was no base case",
      "university": "Texas A&M University",
      "id": 678
  },
  {
      "joke": "Compiling…",
      "university": "Texas A&M University",
      "id": 679
  },
  {
      "joke": "Linked list is like I know a guy who knows a guy",
      "university": "Texas A&M University",
      "id": 680
  },
  {
      "joke": "It's lame joke, but i like it -\r\n\r\n2 bytes meet after a long time. \r\n1st byte - Hey bro, what happened? You look so sad.\r\n2nd byte - No, just feeling a bit off.",
      "university": "Texas Tech University",
      "id": 681
  },
  {
      "joke": "Why do Java Developers not wear glasses? Because they cannot see C#.",
      "university": "University of Texas at Dallas",
      "id": 682
  },
  {
      "joke": "Why do Java programmers wear glasses?\r\n\r\nBecause they dont C#!",
      "university": "Texas A&M University",
      "id": 683
  },
  {
      "joke": "How many programmers does it take to screw in a light bulb?\r\nNone. Because that's a hardware problem. :) \r\n\r\n(A friend told me!)",
      "university": "University of Texas at Dallas",
      "id": 684
  },
  {
      "joke": "Why do programmers confuse Halloween with Christmas?\r\nBecause Oct 31 is equal to Dec 25.",
      "university": "Other",
      "id": 685
  },
  {
      "joke": "What's the best part about TCP jokes? I get to keep telling them until you get them.",
      "university": "Polytechnic University",
      "id": 686
  },
  {
      "joke": "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
      "university": "Texas A&M University",
      "id": 687
  },
  {
      "joke": "So a guy goes to a computer to make a programming joke before the computer tells him to stop, saying “I don’t like computer jokes. Not one bit”",
      "university": "Texas A&M University",
      "id": 688
  },
  {
      "joke": "What was the baby program's first words?\r\n\r\n\"Hello, world!\"",
      "university": "Texas A&M University",
      "id": 689
  },
  {
      "joke": "How did the programmer die in the shower?\r\nHe read the shampoo bottle instructions: Lather. Rinse. Repeat.",
      "university": "Texas A&M University",
      "id": 690
  },
  {
      "joke": "A guy walks into a bar and asks for 1.4 root beers. The bartender says I'll have to charge you extra, that's a root beer float. The guy says In that case, better make it a double.",
      "university": "Texas A&M University",
      "id": 691
  },
  {
      "joke": "I � Unicode",
      "university": "Texas A&M University",
      "id": 692
  },
  {
      "joke": "What's the best thing thing about UDP jokes? \r\n\r\nI don't care if you get them :)",
      "university": "Texas A&M University",
      "id": 693
  },
  {
      "joke": "Why did the programmer quit his job?\r\nHe didn't get arrays.",
      "university": "University of Texas at Dallas",
      "id": 694
  },
  {
      "joke": "This code is based on this bug, it won't run without the bugs.",
      "university": "Texas A&M University",
      "id": 695
  },
  {
      "joke": "Scene: The recursion tree method and the master theorem method for solving recurrences are having an argument about which is better.\r\n\r\nThe master theorem method: I can provide many solutions to recurrences without the use of pencil and paper, what can you provide?\r\nThe recursion tree method: For your information, I can provi-\r\nThe substitution method: I don't see how you can hate from the outside of the club? You can't even get in. Hahaha, leggo!",
      "university": "University of Texas Pan American",
      "id": 696
  },
  {
      "joke": "google.com",
      "university": "Texas A&M University",
      "id": 697
  },
  {
      "joke": "What do you call a programming snake? Python",
      "university": "University of Texas at Dallas",
      "id": 698
  },
  {
      "joke": "What is a programmers biggest nightmare: \r\na broken \"/\" key",
      "university": "Temple University",
      "id": 699
  },
  {
      "joke": "o no the code broke haha funies",
      "university": "Other",
      "id": 700
  },
  {
      "joke": "Two bytes meet.\r\nThe first byte asks, “Are you ill?”\r\nThe second byte replies, “No, just feeling a bit off.”\r\nlol",
      "university": "Other",
      "id": 701
  },
  {
      "joke": "A guy walks into a bar and asks for 1.4 root beers. The bartender says \"I'll have to charge you extra, that's a root beer float\". The guy says \"In that case, better make it a double.\"",
      "university": "University of Texas at Dallas",
      "id": 702
  },
  {
      "joke": "Well, I would tell you a good IPv4 joke, but they all seem to be taken.",
      "university": "Texas A&M University",
      "id": 703
  },
  {
      "joke": "What's the best thing thing about UDP jokes?\r\n\r\nI don't care if you get them",
      "university": "Texas A&M University",
      "id": 704
  },
  {
      "joke": "A programmer was asked to make 10 cups of coffee. He came back with two.",
      "university": "Texas A&M University",
      "id": 705
  },
  {
      "joke": "Why did the programmer die in the shower? Because his shampoo bottle said to rinse, lather, repeat.",
      "university": "Texas A&M University",
      "id": 706
  },
  {
      "joke": "Steps to avoid common programming errors:\r\n1. Check for off by one errors\r\n2. Try not to use recursion\r\n3. Repeat steps 1-3\r\n4. Implement a base case if you have to use recursion",
      "university": "Texas A&M University",
      "id": 707
  },
  {
      "joke": "The generation of random numbers is too important to be left to chance.",
      "university": "Texas A&M University",
      "id": 708
  },
  {
      "joke": "Q: Why did the programmer quit his job?\r\nA: Because he didn't get arrays.",
      "university": "University of Texas at Dallas",
      "id": 709
  },
  {
      "joke": "Adding manpower to a late software project makes it later.",
      "university": "Other",
      "id": 710
  },
  {
      "joke": "In C++ we don't say \"Missing asterisk\" we say \"error C2664: 'void std::vector<block,std::map<_Ty> >::push_back(const block &)': cannot convert argument 1 from 'std::_Vector_iterator<std::_Vector_val<std::_Simple_types<block> > >' to 'block &&'\" and i think that's beautiful",
      "university": "Texas A&M University",
      "id": 711
  },
  {
      "joke": "What's the object-oriented way to become wealthy? Inheritance.",
      "university": "Texas A&M University",
      "id": 712
  },
  {
      "joke": "6 hours of debugging can save you 5 minutes of documentation. Learnt this the hard way!",
      "university": "Other",
      "id": 713
  },
  {
      "joke": "Assembly",
      "university": "Texas A&M University",
      "id": 714
  },
  {
      "joke": "Why doesnt python have hissing sound",
      "university": "National American University, Kansas City",
      "id": 715
  },
  {
      "joke": "Hostage - Don't shoot, I am a programmer\r\nRobber - Prove it\r\nHOSTAGE - array starts at 1\r\nRobber start shooting",
      "university": "Other",
      "id": 716
  },
  {
      "joke": "Me: I am sorry, my dog ate my homework.\r\nProf: Your dog ate your coding assignment?\r\nMe:\r\nProf:\r\nMe: It took him a couple of bytes",
      "university": "Other",
      "id": 717
  },
  {
      "joke": "\"debugging\" is being the detective of a murder case where you are also the murderer.",
      "university": "Texas Tech University",
      "id": 718
  },
  {
      "joke": "Programmer:- A machine that turns coffee into code",
      "university": "Other",
      "id": 719
  },
  {
      "joke": "I'd tell you a UDP joke, but you might not get it :/",
      "university": "University of Texas at Dallas",
      "id": 720
  },
  {
      "joke": "A programmer went to the market , his wife said \"while you are out ,go get some milk\"\r\nHe never came back",
      "university": "Other",
      "id": 721
  },
  {
      "joke": "The truth is out there. Anybody got the URL?",
      "university": "Texas A&M University",
      "id": 722
  },
  {
      "joke": "Why did the programmer quit their job? Because they didn't get arrays (a raise) :( (or actual arrays... that would be pretty bad lol)",
      "university": "Texas A&M University",
      "id": 723
  },
  {
      "joke": "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
      "university": "University of Texas at Dallas",
      "id": 724
  },
  {
      "joke": "Why did the programmer quit his job?\r\nBecause he didn't get arrays.",
      "university": "University of Houston",
      "id": 725
  },
  {
      "joke": "A programmer walks to the butcher shop and buys a kilo of meat.  An hour later he comes back upset that the butcher shortchanged him by 24 grams.",
      "university": "Other",
      "id": 726
  },
  {
      "joke": "a div that is both vertically and horizontally centered on the page",
      "university": "Texas A&M University",
      "id": 727
  },
  {
      "joke": "Roses are red,\r\nViolets are blue,\r\nUnexpected '}'\r\nOn line 32\r\n\r\nI'll be here all night folks",
      "university": "University of Texas at Arlington",
      "id": 728
  },
  {
      "joke": "You either code like a baby in java or shoot yourself in the foot with c++.",
      "university": "Texas A&M University",
      "id": 729
  },
  {
      "joke": "“Knock, knock.”\r\n“Who’s there?”\r\nvery long pause….\r\n“Java.”",
      "university": "Texas A&M University",
      "id": 730
  },
  {
      "joke": "why is 1 byte afraid of 7, because 7 8 9.",
      "university": "Texas A&M University",
      "id": 731
  },
  {
      "joke": "\"I have a really good idea\"",
      "university": "Texas A&M University",
      "id": 732
  },
  {
      "joke": "Why was 6 afraid of 7? Because 0111 1000 1001!",
      "university": "Texas A&M University",
      "id": 733
  },
  {
      "joke": "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?”\r\n“Yeah,” reply the bytes.  “Make us a double.”",
      "university": "Texas A&M University",
      "id": 734
  },
  {
      "joke": "There are only 10 kinds of people in the world, those who understand binary, and those who don't.",
      "university": "Texas A&M University",
      "id": 735
  },
  {
      "joke": "I would tell you a joke about data corruption, but I forgot how it was formatted.",
      "university": "Texas A&M University",
      "id": 736
  },
  {
      "joke": "Python is better than Java.",
      "university": "University of Texas at Dallas",
      "id": 737
  },
  {
      "joke": "Compiling code after fixing a bug isn't too see if it actually fixed it, it's just temporality hiding from the rest of the bugs you have to deal with.",
      "university": "Texas A&M University",
      "id": 738
  },
  {
      "joke": "C++",
      "university": "Texas A&M International University",
      "id": 739
  },
  {
      "joke": "HueHue",
      "university": "Other",
      "id": 740
  },
  {
      "joke": "Two bytes meet.  The first byte asks, “Are you ill?”\r\nThe second byte replies, “No, just feeling a bit off.”",
      "university": "Other",
      "id": 741
  },
  {
      "joke": "Dude I just saw a python! \r\nOh no run it's not a real programming language!",
      "university": "Texas A&M University",
      "id": 742
  },
  {
      "joke": "Why do Java developers wear glasses? Because they don't C#",
      "university": "Texas A&M University",
      "id": 743
  },
  {
      "joke": "why did the programmer quit his job?\r\nbecause he didn't get arrays",
      "university": "University of Houston",
      "id": 744
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone – It’s a hardware problem",
      "university": "University of Texas at Dallas",
      "id": 745
  },
  {
      "joke": "Q. How did the programmer die in the shower?\r\nA. He read the shampoo bottle instructions: Lather. Rinse. Repeat.",
      "university": "Texas A&M University",
      "id": 746
  },
  {
      "joke": "Knock Knock!\r\nRace Condition.\r\nWho's There?",
      "university": "University of Houston",
      "id": 747
  },
  {
      "joke": "Why was the computer programmer, who was a Pokemon fanatic, very upset about his Pokemon evolving? Because he expected Char-mander to evolve into a String-mander and not Charmeleon!",
      "university": "Texas A&M University",
      "id": 748
  },
  {
      "joke": "Why did the pirate want to pursue statistics? Because he was fluent in \"Arrrr\".",
      "university": "Texas A&M University",
      "id": 749
  },
  {
      "joke": "Never spend 6 minutes doing something by hand when you can spend 6 hours failing to automate it",
      "university": "Other",
      "id": 750
  },
  {
      "joke": "Why do programmers confuse Halloween and Christmas? Because Oct 31 = Dec 25.",
      "university": "Texas A&M University",
      "id": 751
  },
  {
      "joke": "2b || !2b, that is the question.",
      "university": "Texas A&M University",
      "id": 752
  },
  {
      "joke": "Why do Microsoft programmers not need glasses? Because they can C#",
      "university": "University of Illinois at Urbana-Champaign",
      "id": 753
  },
  {
      "joke": "What do bits think 1+1 is?\r\n0",
      "university": "Texas A&M University",
      "id": 754
  },
  {
      "joke": "A software engineer walks into a bar. Orders one drink. Orders ten drinks. Orders 2.15 billion drinks. Orders -1 drinks. Orders a nothing. Orders a bear. Tries to leave without paying.",
      "university": "Texas A&M University",
      "id": 755
  },
  {
      "joke": "cameron brill (is this the third year I've used this?)",
      "university": "University of Texas",
      "id": 756
  },
  {
      "joke": "What do you call a snake that programs?\r\nSnakes cannot program due to their inferior cognitive ability and their lack of opposable thumbs.",
      "university": "Texas A&M University",
      "id": 757
  },
  {
      "joke": "I hate programming\r\nI hate programming\r\nI hate programming\r\nCompiled successfully\r\nI love programming",
      "university": "Texas A&M University",
      "id": 758
  },
  {
      "joke": "What's a ghosts favorite type\r\nBOOOlean",
      "university": "Texas A&M University",
      "id": 759
  },
  {
      "joke": "You are a C programmer? We disown you.\r\n(Parents wanting an A programmer)",
      "university": "Texas Tech University",
      "id": 760
  },
  {
      "joke": "While True walks into a bar. While True walks into a bar. While True walks into a bar. While True walks into a bar. While True walks into a bar. While True walks into a bar. While True walks into a bar. While True walks into a bar. While True walks into a bar. While True walks into a bar. While True walks into a bar. While True wa",
      "university": "University of Texas at Dallas",
      "id": 761
  },
  {
      "joke": "Debugging: Removing the needles from the haystack.",
      "university": "Texas A&M University",
      "id": 762
  },
  {
      "joke": "Why did the programmer quit his job? Because he didn't get arrays.",
      "university": "Texas A&M University",
      "id": 763
  },
  {
      "joke": "Java programmers have to wear glasses because they don't C#",
      "university": "Texas A&M University",
      "id": 764
  },
  {
      "joke": "Why is 6 afraid of 7 in Canadian hexadecimal?\r\nBecause 7 8 9 A!!",
      "university": "Texas A&M University",
      "id": 765
  },
  {
      "joke": "Knock Knock\r\nWho's there? \r\nVery long pause...\r\nJava",
      "university": "Other",
      "id": 766
  },
  {
      "joke": "NFTs",
      "university": "Texas A&M University",
      "id": 767
  },
  {
      "joke": "One hundred little bugs in the code\r\nOne hundred little bugs.\r\nFix a bug, link the fix in,\r\nOne hundred little bugs in the code.",
      "university": "Texas A&M University",
      "id": 768
  },
  {
      "joke": "When someone asks me what binary numbers are I always reply \"Well, yes and no\" but they never seem to get it.",
      "university": "Texas A&M University",
      "id": 769
  },
  {
      "joke": "log4j2 lol",
      "university": "Texas A&M University",
      "id": 770
  },
  {
      "joke": "Two strings walk into a bar and sit down. The bartender says, “So what’ll it be?”\r\n\r\nThe first string says, “I think I’ll have a beer quag fulk boorg jdk^CjfdLk jk3s d#f67howe%^U r89nvy~~owmc63^Dz x.xvcu”\r\n\r\n“Please excuse my friend,” the second string says, “He isn’t null-terminated.”",
      "university": "Texas A&M University",
      "id": 771
  },
  {
      "joke": "Why is a heap better for sorting a list than LIFO? Because the odds were \"stacked\" against it.",
      "university": "University of Minnesota - Twin Cities Campus",
      "id": 772
  },
  {
      "joke": "What is the object-oriented way to become wealthy? Inheritance.",
      "university": "Texas A&M University",
      "id": 773
  },
  {
      "joke": "doctors: using google doesn't make you a doctor\r\n\r\nprogrammers: ( ⚆ _ ⚆ )",
      "university": "Texas A&M University",
      "id": 774
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone – It’s a hardware problem",
      "university": "Purdue University",
      "id": 775
  },
  {
      "joke": "What is a programmer's favorite place to hang out?\r\nThe Foo Bar",
      "university": "Texas A&M University",
      "id": 776
  },
  {
      "joke": "If it works, don't touch it �",
      "university": "University of Texas at Dallas",
      "id": 777
  },
  {
      "joke": "I almost put Scratch on my resume",
      "university": "Texas A&M University",
      "id": 778
  },
  {
      "joke": "I was working on automatic reminder mails in which the mails should not be sent to the associates when their geography had holidays. All holidays were recorded in an excel file from which my code was programmed to read and execute as required. But there were mails generated and sent even for the associates who had holiday. I wondered why it is happening and debugged the entire code and could not find any bugs. After spending hours debugging, I found that I used a wrong holiday file.",
      "university": "Texas A&M University",
      "id": 779
  },
  {
      "joke": "My dog ate my coding assignment...",
      "university": "Texas A&M University",
      "id": 780
  },
  {
      "joke": "Why did the programmer die in the shower? \r\nThe shampoo bottle said to lather, rinse, and repeat.",
      "university": "Texas A&M University",
      "id": 781
  },
  {
      "joke": "How did the programmer die in the shower?\r\n\r\nHe read the shampoo bottle instructions: “Lather. Rinse. Repeat.”",
      "university": "Texas A&M University",
      "id": 782
  },
  {
      "joke": "I know no programming jokes.",
      "university": "Texas A&M University",
      "id": 783
  },
  {
      "joke": "Me when I'm coding: :D\r\nMe when I'm not coding: :(",
      "university": "Texas A&M University",
      "id": 784
  },
  {
      "joke": "Programmers aren't funny. Hey siri, tell me a joke.",
      "university": "Texas A&M University",
      "id": 785
  },
  {
      "joke": "NULL",
      "university": "Texas Tech University",
      "id": 786
  },
  {
      "joke": "A recursive function walks into a bar. A recursive function walks into a bar. A recursive function walks into a bar.",
      "university": "Texas A&M University",
      "id": 787
  },
  {
      "joke": "How did the programmer die in the shower?\r\nHe read the shampoo bottle instructions: Lather. Rinse. Repeat.",
      "university": "Texas A&M University",
      "id": 788
  },
  {
      "joke": "There are 10 types of people in the world. That one pretentious dude who knows binary and nine other folks who have a hobby.",
      "university": "University of Nebraska - Lincoln",
      "id": 789
  },
  {
      "joke": "A computer scientist walked into a bar sweaty.\r\nHe sat down and got water.\r\n\"I just finished my code, \" he said.\r\n\"foo\"",
      "university": "Temple University",
      "id": 790
  },
  {
      "joke": "Have you tried turning it off and on again?",
      "university": "University of Houston",
      "id": 791
  },
  {
      "joke": "Which coding language has the best vision? \"C Sharp!\"",
      "university": "Texas A&M University",
      "id": 792
  },
  {
      "joke": "What is the part of the computer that you can kick? The HARDWARE",
      "university": "Texas A&M University",
      "id": 793
  },
  {
      "joke": "From the moment I understood the weakness of my flesh, it disgusted me. I craved the strength and certainty of steel. I aspired to the purity of the blessed machine. Your kind cling to your flesh as if it will not decay and fail you. One day the crude biomass you call a temple will wither and you will beg my kind to save you.\r\nBut I am already saved. For the Machine is Immortal.\r\nhttps://www.amazon.com/Aneco-Thigh-Socks-Stockings-Cosplay/dp/B078KQKJ35",
      "university": "Texas A&M University",
      "id": 794
  },
  {
      "joke": "I earned a \"C++\" on my Intro to Programming Class.",
      "university": "University of Houston",
      "id": 795
  },
  {
      "joke": "How do you tell an introverted computer scientist from an extroverted computer scientist? An extroverted computer scientist looks at your shoes when he talks to you.",
      "university": "Texas A&M University",
      "id": 796
  },
  {
      "joke": "workIncomplete = True\r\nwhile workIncomplete:\r\n     procrastinate()",
      "university": "Texas A&M University",
      "id": 797
  },
  {
      "joke": "I am not a programmer.",
      "university": "Texas A&M University",
      "id": 798
  },
  {
      "joke": "Why do Java developers wear glasses?\r\nBecause they cannot C#",
      "university": "Texas A&M University",
      "id": 799
  },
  {
      "joke": "I have None.",
      "university": "Texas A&M University",
      "id": 800
  },
  {
      "joke": "static void makeJoke() {\r\nSystem.out.print(\"me, im the joke\");\r\n}",
      "university": "Texas A&M University",
      "id": 801
  },
  {
      "joke": "How many programmers does it take to change a light bulb?\r\nNone – It’s a hardware problem",
      "university": "University of Texas at Dallas",
      "id": 802
  },
  {
      "joke": "Im applying late and panicking so...There are only 10 kinds of people in the world those who know binary and those that do not.",
      "university": "Texas A&M University",
      "id": 803
  },
  {
      "joke": "why don't programmers wear glasses, because they can c#",
      "university": "Texas A&M University",
      "id": 804
  },
  {
      "joke": "javascript",
      "university": "University of Minnesota - Twin Cities Campus",
      "id": 805
  },
  {
      "joke": "Some people, when confronted with a problem, think, 'I know, I'll use threads' - and then two they hav erpoblesms.",
      "university": "Texas A&M University",
      "id": 806
  },
  {
      "joke": "Debugging is like removing needles from a haystack",
      "university": "Texas A&M University",
      "id": 807
  },
  {
      "joke": "what do you call a programmer who doesn't use stack overflow? A liar  �",
      "university": "Texas Tech University",
      "id": 808
  },
  {
      "joke": "What a web developers favorite burger? Javascript burger",
      "university": "Texas A&M University",
      "id": 809
  },
  {
      "joke": "There are 10 types of people in the world: those who understand binary, those who don't, those who understand ternary, and those that didn't expect a quaternary joke.",
      "university": "Texas A&M University",
      "id": 810
  },
  {
      "joke": "Never spend 6 minutes doing something by hand when you can spend 6 hours failing to automate it.",
      "university": "Texas A&M University",
      "id": 811
  },
  {
      "joke": "They say debugging is really just removing the haystack until you find the needles.",
      "university": "Texas A&M University",
      "id": 812
  },
  {
      "joke": "Web3 is a fad",
      "university": "Other",
      "id": 813
  },
  {
      "joke": "Hardware: the part of a computer that you can kick.",
      "university": "University of Texas at Dallas",
      "id": 814
  },
  {
      "joke": "What is the most used language in programming?\r\n\r\nProfanity",
      "university": "University of Texas at Dallas",
      "id": 815
  },
  {
      "joke": "What is a web developer's favorite burger?\r\n\r\nJavaScript burger",
      "university": "Texas A&M University",
      "id": 816
  },
  {
      "joke": "What is a flip-flop? It is not a type of sandal\r\nWhat is 1+1=? The answer is not 2",
      "university": "Texas Tech University",
      "id": 817
  },
  {
      "joke": "What did Python say to Java when it was lagging?\r\nYour JVM isn't very C# !s",
      "university": "Texas A&M University",
      "id": 818
  },
  {
      "joke": "I sometimes code with my brother, and we call ourselves brogrammers.",
      "university": "Other",
      "id": 819
  },
  {
      "joke": "I've got a really good UDP joke to tell you, but I don't know if you'll get it.",
      "university": "Texas A&M University",
      "id": 820
  },
  {
      "joke": "There are three kinds of lies: Lies, damned lies, and benchmarks",
      "university": "University of Texas at Dallas",
      "id": 821
  },
  {
      "joke": "My mom told me about her pet python. It had crooked teeth but it wasn't allowed braces. Eventually, there were 4 spaces between its teeth.",
      "university": "Texas A&M University",
      "id": 822
  },
  {
      "joke": "If they made you in C++, you would have a pointer to my heart.",
      "university": "University of Texas at Dallas",
      "id": 823
  },
  {
      "joke": "I do have a favorite programming joke, but it only works on my computer *ba-dum-tsss*",
      "university": "Texas A&M University",
      "id": 824
  },
  {
      "joke": "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?”\r\n“Yeah,” reply the bytes.  “Make us a double.”",
      "university": "University of Houston",
      "id": 825
  },
  {
      "joke": "I just saw my life flash before my eyes and all I could see was a close tag",
      "university": "Texas A&M University",
      "id": 826
  },
  {
      "joke": "I hope you're parameterless because I'd hate for us to have any arguments.",
      "university": "Santa Clara University",
      "id": 827
  },
  {
      "joke": "The relationship between a programmer and caffeine:\r\nif (coffee.Empty)\r\n{\r\ncoffee.Refill();\r\n}\r\nelse\r\n{\r\ncoffee.Drink();\r\n}",
      "university": "Texas A&M University",
      "id": 828
  },
  {
      "joke": "C++",
      "university": "Texas A&M University",
      "id": 829
  },
  {
      "joke": "What was Hitler's favorite programming language?\r\nNot C.",
      "university": "Texas A&M University",
      "id": 830
  },
  {
      "joke": "MemoryError: System was unable to retrieve joke.",
      "university": "Texas A&M University",
      "id": 831
  },
  {
      "joke": "Nice to C you later",
      "university": "Purdue University",
      "id": 832
  },
  {
      "joke": "Programming is like sex:\r\nOne mistake and you have to support it for the rest of your life.",
      "university": "Texas A&M University",
      "id": 833
  },
  {
      "joke": "Why do Java programmers wear glasses? Because they don't C#.",
      "university": "Texas A&M University",
      "id": 834
  },
  {
      "joke": "Why don't DB admins get the booster vaccine? Because they are afraid of sequel injections",
      "university": "Other",
      "id": 835
  },
  {
      "joke": "Are you a farmer? Cause you have some nice melons.",
      "university": "Texas A&M University",
      "id": 836
  },
  {
      "joke": "Don't know any jokes but I enjoyed this one I found;\r\n\r\nHow many programmers does it take to screw in a light bulb?\r\nNone. It's a hardware problem.",
      "university": "Texas A&M University",
      "id": 837
  },
  {
      "joke": "3 Database SQL walked into a NoSQL bar. A little while later, they walked out.\r\n\r\nThey couldn't find a table.",
      "university": "Other",
      "id": 838
  },
  {
      "joke": "a",
      "university": "University of Texas at Dallas",
      "id": 839
  },
  {
      "joke": "There are three types of people in the world: those who can count, and those who cannot.",
      "university": "Texas A&M University",
      "id": 840
  },
  {
      "joke": "Programming is like sex: One mistake and you have to support it for the rest of your life.\r\n(This is not my joke)",
      "university": "Purdue University",
      "id": 841
  },
  {
      "joke": "I've got a really good UDP joke to tell you, but I don't know if you'll get it.",
      "university": "Texas A&M University",
      "id": 842
  },
  {
      "joke": "What language does god code in?\r\nC - God C's everything",
      "university": "Other",
      "id": 843
  },
  {
      "joke": "What is a ghosts favorite datatype?\r\nBooooolean",
      "university": "Other",
      "id": 844
  },
  {
      "joke": "https://ifunny.co/picture/zC3yjEDy8",
      "university": "Texas A&M University",
      "id": 845
  },
  {
      "joke": "Where does a programmer like to hang out? Foo Bar.",
      "university": "University of Texas at Austin",
      "id": 846
  },
  {
      "joke": "01111001 01101111 01110101 00100000 01110111 01101111 01110101 01101100 01100100 01101110 00100111 01110100 00100000 01100111 01100101 01110100 00100000 01101001 01110100",
      "university": "Texas A&M University",
      "id": 847
  },
  {
      "joke": "Me",
      "university": "Texas A&M University",
      "id": 848
  },
  {
      "joke": "your best programming joke:",
      "university": "University of Texas at Dallas",
      "id": 849
  },
  {
      "joke": "Why do coders wear glasses? Because they can not C.",
      "university": "Texas A&M University",
      "id": 850
  },
  {
      "joke": "When I write my code, only god and I know what I am writing. After finishing, only god knows!",
      "university": "Texas A&M University",
      "id": 851
  },
  {
      "joke": "Why do C# and Java developers keep breaking their keyboards? Because they use a strongly typed language.",
      "university": "Polytechnic University",
      "id": 852
  },
  {
      "joke": "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25",
      "university": "Texas A&M University",
      "id": 853
  },
  {
      "joke": "Why can't the python developer see? Because he can't C#",
      "university": "University of Texas at Dallas",
      "id": 854
  },
  {
      "joke": "Fun fact: rubber ducks can actually speak, but programmers would never know because they can never get a word in before we rush off to properly debug our code. \r\n\r\n(this incredibly lame joke is what happens when you insist on not just googling one - i'm sorry)",
      "university": "Texas A&M University",
      "id": 855
  },
  {
      "joke": "Why is everything bigger in Texas? Because it's in our name! (t EXA s)",
      "university": "University of Texas at Dallas",
      "id": 856
  },
  {
      "joke": "Programming always works when you do something wrong!",
      "university": "Texas A&M University",
      "id": 857
  },
  {
      "joke": "If Harry Potter speaks parseltongue, can he code in Python?",
      "university": "Texas A&M University",
      "id": 858
  },
  {
      "joke": "What's the first thing you say when you see your significant other in the morning?\r\n- \"Hello World\"",
      "university": "Texas A&M University",
      "id": 859
  },
  {
      "joke": "CD-ROM: Consumer Device, Rendered Obsolete in Months",
      "university": "Texas A&M University",
      "id": 860
  },
  {
      "joke": "What's the best part about TCP jokes?\r\nI get to keep telling them until you get them.",
      "university": "Texas A&M University",
      "id": 861
  },
  {
      "joke": "God is real, unless declared integer\r\n\r\n(This joke requires knowledge of Fortran to be funny)",
      "university": "Texas A&M University",
      "id": 862
  },
  {
      "joke": "----AT THE HEAVEN'S GATE----\r\nSaint Peter: It seems you didn't commit the final changes to the master branch.\r\nProgrammer: print(\"Damn it!\")",
      "university": "Texas A&M University",
      "id": 863
  },
  {
      "joke": "\"Knock Knock\"\r\n\"Who's there?\"\r\n*very long pause*\r\n\"Java\"",
      "university": "Texas A&M University",
      "id": 864
  },
  {
      "joke": "Why was the assembly programmer so wet? Because he always works below C level!",
      "university": "Texas A&M University",
      "id": 865
  },
  {
      "joke": "magic number? I HARDLY KNOW HER",
      "university": "University of Texas at Austin",
      "id": 866
  },
  {
      "joke": "Error 404: joke not found",
      "university": "Texas A&M University",
      "id": 867
  },
  {
      "joke": "What is a programmer's favorite animal? RAM",
      "university": "Texas A&M University",
      "id": 868
  },
  {
      "joke": "A manager, a mechanical engineer, and a programmer are driving back. Suddenly, the brakes go out and they come to a stop in the ditch. Everyone gets out of the car to see what happened. The manager says, \"Let's brainstorm as a group to solve this issue.\" The mechanical engineer says, \"We should disassemble the car and analyze each part for failure.\" The programmer says, \"Let's push it back up the hill and see if it does it again.\"",
      "university": "University of Texas at Dallas",
      "id": 869
  },
  {
      "joke": "I think you're my compiler. My life wouldn't start without you.\t<3",
      "university": "Texas A&M University",
      "id": 870
  },
  {
      "joke": "How many programmers does it take to take a light bulb?\r\n\r\nNone, it's a hardware problem.",
      "university": "Texas A&M University",
      "id": 871
  },
  {
      "joke": "Hmmm... Html is a programming language.",
      "university": "Other",
      "id": 872
  },
  {
      "joke": "In order to understand recursion, you must first understand recursion.",
      "university": "Texas A&M University",
      "id": 873
  },
  {
      "joke": "There are 10 types of people in this world; those who understand binary, and those who do not.",
      "university": "Texas A&M University",
      "id": 874
  }
]


var universities = {
  'Texas A&M University': '',
  'University of Texas at Arlington': '',
  'University of Texas': '',
  'Texas A&M University - Galveston': '',
  'University of Texas at Dallas': '',
  'University of Texas at Austin': '',
  'Rice University': '',
  'University of Texas at San Antonio': '',
  'Other': '',
  'Vermont Technical College': '',
  'George Mason University': '',
  'Florida Institute of Technology': '',
  'Western Governors University': '',
  'University of Illinois at Urbana-Champaign': '',
  'University of Houston': '',
  'Texas A&M International University': '',
  'Austin Community College': '',
  'University of Texas Pan American': '',
  'Mississippi State University': '',
  'University of Houston, Clear Lake': '',
  'University of California, San Diego': '',
  'Iowa State University of Science and Technology': '',
  'Texas Tech University': '',
  'Texas A&M University - Commerce': '',
  'Polytechnic University': '',
  'Harvard University': '',
  'Academy of Art College': '',
  'University of Minnesota - Twin Cities Campus': '',
  'University of Texas Health Center at Houston': '',
  'Purdue University': '',
  'Southern Methodist University': '',
  'Temple University': '',
  'National American University, Kansas City': '',
  'University of Nebraska - Lincoln': '',
  'Santa Clara University': ''
}