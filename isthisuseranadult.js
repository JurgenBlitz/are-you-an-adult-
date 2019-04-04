  /**
   * The following function takes two dates: the current date, and the user's date of birth, 
   * to check whether the user is 18 years or older. 
   * 
   * The 'not adult' case will trigger in three cases:
   * 1- The current year - user's birth year comparison is not 18 or greater.
   * 2- The above comparison DOES match 18, but the months do not match.
   * 3- Both of the above cases, BUT the days do not match.
   * 
   * Cases 2 and 3 mean it hasn't been exactly 18 years 
   * (to avoid the year counter skipping case 1, but the user's birthday has not arrived yet)
   * 
   * NOTE: The console.logs are merely there to capture each case. 
   * We can include a series of actions for each block
   * (such as allowing a user to perform a purchase, or deny him/her that transaction)
   */
  
  function userIsNotAdult(birthDateString) {
  today = new Date();
  userBirthdate = new Date(birthDateString.replace(/(\d{2})[-/](\d{2})[-/](\d+)/, "$2/$1/$3"));
  // the above line changes the position of days and the months to match the native mm/dd/yyyy
  // for a mm/dd/yyyy styled date, delete the replace() method and just use: new Date(birthDateString);

  var flawlessyearcheck = (today.getFullYear() - userBirthdate.getFullYear() >= 19);
  var basicyearcheck = (today.getFullYear() - userBirthdate.getFullYear() === 18);
  var monthcheck = (((today.getMonth() + 1) - (userBirthdate.getMonth() + 1)) <= 0);
  var daycheck = (today.getDate() - userBirthdate.getDate()  <= 0);

  if ((flawlessyearcheck) || (basicyearcheck && monthcheck && daycheck)) { 
    // Will trigger if the user is exactly 18 or older by any month or day 
    // (19 or above pass the check automatically)
    console.log('you ARE an adult!');
  } else { 
    // anything else, i.e. the number of years being exactly 18, 
    // but the month OR the day not being the right ones
    console.log('NOT AN ADULT!')
  }

// console.log(flawlessyearcheck, basicyearcheck, monthcheck, daycheck)
// the above line can be used to check the boolean cases for each
}
userIsNotAdult('01-04-2001'); // Outputs 'NOT AN ADULT!' - the user was under 18 years of age.
userIsNotAdult('02-04-2001'); // Outputs 'you ARE an adult!'- the condition has been met down to the day.
userIsNotAdult('01-01-2000'); // Outputs 'you ARE an adult!' - the user was 19 or older.
