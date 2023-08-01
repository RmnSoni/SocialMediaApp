import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const dummyAuthorsData = [
  {
    _id: userIds[0],
    firstName: "Steve",
    lastName: "Jobs",
    email: "stevejobs@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p1.jpeg",
    friends: [],
    location: "San Francisco, CA",
    occupation: "Entrepreneur",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Nelson",
    lastName: "Mandela",
    email: "nelsonmandela@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p2.jpeg",
    friends: [],
    location: "Johannesburg, South Africa",
    occupation: "Politician",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Edgar Allan",
    lastName: "Poe",
    email: "edgarallanpoe@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p3.jpeg",
    friends: [],
    location: "Baltimore, MD",
    occupation: "Writer",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Franklin D.",
    lastName: "Roosevelt",
    email: "fdroosevelt@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p4.jpeg",
    friends: [],
    location: "Hyde Park, NY",
    occupation: "Politician",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Confucius",
    lastName: "Lee",
    email: "confucius@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p5.jpeg",
    friends: [],
    location: "Qufu, China",
    occupation: "Philosopher",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Robert",
    lastName: "Frost",
    email: "robertfrost@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p6.jpeg",
    friends: [],
    location: "Amherst, MA",
    occupation: "Poet",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Ralph Waldo",
    lastName: "Emerson",
    email: "rwemerson@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p7.jpeg",
    friends: [],
    location: "Concord, MA",
    occupation: "Essayist",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Winston",
    lastName: "Churchill",
    email: "winstonchurchill@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p8.jpeg",
    friends: [],
    location: "London, UK",
    occupation: "Politician",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[8],
    firstName: "Jordan",
    lastName: "Belfort",
    email: "jordanbelfort@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p9.jpeg",
    friends: [],
    location: "Long Island, NY",
    occupation: "Motivational Speaker",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[9],
    firstName: "Dr. Seuss",
    lastName: "Bhai",
    email: "drseuss@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p10.jpeg",
    friends: [],
    location: "Springfield, MA",
    occupation: "Author",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
];


export const dummyPosts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    firstName: "Steve",
    lastName: "Jobs",
    location: "San Francisco, CA",
    description: "The only way to do great work is to love what you do.",
    picturePath: "post1.jpeg",
    userPicturePath: "p1.jpeg",
    likes: new Map([
      ["userIds[1]", true],
      ["userIds[2]", true],
      ["userIds[3]", true],
      ["userIds[4]", true]
    ]),
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment"
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Nelson",
    lastName: "Mandela",
    location: "Johannesburg, South Africa",
    description: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    picturePath: "post1.jpeg",
    userPicturePath: "p2.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true]
    ]),
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment"
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
        userId: userIds[2],
    firstName: "Edgar Allan",
    lastName: "Poe",
    location: "Baltimore, MD",
    description: "All that we see or seem is but a dream within a dream.",
    picturePath: "post1.jpeg",
    userPicturePath: "p3.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[1], true],
      [userIds[3], true],
      [userIds[4], true]
    ]),
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment"
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Franklin D.",
    lastName: "Roosevelt",
    location: "Hyde Park, NY",
    description: "The only thing we have to fear is fear itself.",
    picturePath: "post1.jpeg",
    userPicturePath: "p4.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[1], true],
      [userIds[2], true],
      [userIds[4], true]
    ]),
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment"
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Confucius",
    lastName: "Lee",
    location: "Qufu, China",
    description: "The best time to plant a tree was 20 years ago. The second best time is now.",
    picturePath: "post1.jpeg",
    userPicturePath: "p5.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[1], true],
      [userIds[2], true],
      [userIds[3], true]
    ]),
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment"
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Robert",
    lastName: "Frost",
    location: "Amherst, MA",
    description: "In three words I can sum up everything I've learned about life: it goes on.",
    picturePath: "post3.jpeg",
    userPicturePath: "p6.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[1], true],
      [userIds[2], true],
      [userIds[3], true]
    ]),
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment"
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    firstName: "Ralph Waldo",
    lastName: "Emerson",
    location: "Concord, MA",
    description: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    picturePath: "",
    userPicturePath: "p7.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[1], true],
      [userIds[2], true],
      [userIds[3], true]
    ]),
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment"
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    firstName: "Winston",
    lastName: "Churchill",
    location: "London, UK",
    description: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    picturePath: "post1.jpeg",
    userPicturePath: "p2.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[1], true],
      [userIds[2], true],
      [userIds[3], true]
    ]),
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment"
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[8],
    firstName: "Jordan",
    lastName: "Belfort",
    location: "Long Island, NY",
    description: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    picturePath: "",
    userPicturePath: "p9.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[1], true],
      [userIds[2], true],
      [userIds[3], true]
    ]),
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment"
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[9],
    firstName: "Dr. Seuss",
    lastName: "Bhai",
    location: "Springfield, MA",
    description: "Don't cry because it's over, smile because it happened.",
    picturePath: "post8.jpeg",
    userPicturePath: "p10.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[1], true],
      [userIds[2], true],
      [userIds[3], true]
    ]),
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment"
    ]
  }
]