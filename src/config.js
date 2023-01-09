const appConfig = {
  // popup message
  popUpHeading: "A multisensory experience",
  popUpNextButton: "Next Round",
  popUpEndButton: "Good Game Well Played!",

  ButtonDisable: "true",
  //disable button after round Keypad only
  feedbackTextRight: "Corect Answer",
  //Text shown to user for correct answer
  feedbackTextWrong: "The correct answer was",
  //Text shown to user for incorrect answer
  showAnswer: true,
  //Show answer to user for incorrect answer
  durationBetweenRound: "0", //pev was 5500
  //Duration Between folder change for speed voice/instruction
  showScoreInConsole: "true",
  audioPlayAfter: "2000",
  //audio will play after defined sec when game starts
  videoUrl: "https://www.youtube.com/embed/GjtrBwrX2ZA?controls=0?autoplay=1",
  //instruction video Url currently hardcoded
  mute: "&mute=1",
  //mute video 1=Yes 0=No

  Trials: "2",
  //Total rounds in same speed
  url: "https://omc0dwxiy7.execute-api.ap-south-1.amazonaws.com",

  opts: {
    //video options
    height: "490",
    //height of video player for instruction
    width: "490",
    //width of video player for instruction
  },
  csvUrl:
    "https://chris-csv-dropbox.s3.ap-south-1.amazonaws.com/B1G01+Stimuli.csv",
};
export default appConfig;
