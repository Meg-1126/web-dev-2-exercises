const data = {
  f01: {
    name: 'Alice',
    age: 15,
    follows: ['f02', 'f03', 'f04'],
  },
  f02: {
    name: 'Bob',
    age: 20,
    follows: ['f05', 'f06'],
  },
  f03: {
    name: 'Charlie',
    age: 35,
    follows: ['f01', 'f04', 'f06'],
  },
  f04: {
    name: 'Debbie',
    age: 40,
    follows: ['f01', 'f02', 'f03', 'f05', 'f06'],
  },
  f05: {
    name: 'Elizabeth',
    age: 45,
    follows: ['f04'],
  },
  f06: {
    name: 'Finn',
    age: 25,
    follows: ['f05'],
  },
};

const biggestFollower = (socialData) => {
  let biggestFollowerPerson = Object.keys(socialData)[0];
  biggestFollowerPerson;
  for (let user in socialData) {
    const follows = socialData[user].follows.length;
    if (follows > socialData[biggestFollowerPerson].follows.length) {
      biggestFollowerPerson = user;
    }
  }
  return socialData[biggestFollowerPerson].name;
};

// console.log(biggestFollower(data));

const mostPopular = (socialData) => {
  //loop through every follows array

  const userArray = Object.keys(socialData);
  const followersCounter = {};
  userArray.forEach((id) => {
    socialData[id].follows.forEach((follow) => {
      if (followersCounter[follow]) {
        followersCounter[follow]++;
      } else {
        followersCounter[follow] = 1;
      }
    });
  });
  let mostPopularUser = Object.keys(followersCounter)[0];
  for (let follower in followersCounter) {
    console.log(followersCounter[follower]);
    if (followersCounter[follower] >= followersCounter[mostPopularUser]) {
      mostPopularUser = follower;
    }
  }
  return socialData[mostPopularUser].name;
  /* followersCounter = {
    f01: 0,
    f02: 0....
  }
  */
};

console.log(mostPopular(data));

const printAll = (socialData) => {};

// console.log(printAll(data));

const unrequitedFollowers = (socialData) => {};

// console.log(unrequitedFollowers(data));
