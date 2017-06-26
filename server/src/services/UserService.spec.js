import userService from './UserService';
import moment from 'moment';
import timemachine from 'timemachine';

describe("Testing UserService", () => {
  it("Testing getUser", () => {
    let user = userService.getUser(0);

    expect(user).toEqual({id: 0, name: 'John', lastVote: null});
  });

  it("Testing setLastVote", () => {
    let user = userService.getUser(0);

    let today = moment().format('MM/DD/YYYY');

    userService.setLastVote(user, today);

    expect(user.lastVote).toEqual(today);
  });

  it("Testing canUserVote - User havent voted", () => {
  	timemachine.reset();

  	let user = userService.getUser(0);
  	userService.setLastVote(user, null);
    let result = userService.canUserVote(user, moment('06/25/2017 11:00:00', 'MM/DD/YYYY HH:mm:ss'));

    expect(result).toEqual(true);
  });

  it("Testing canUserVote - User have voted yesterday", () => {
  	let user = userService.getUser(0);
  	userService.setLastVote(user, moment('06/24/2017 11:00:00', 'MM/DD/YYYY HH:mm:ss').format('MM/DD/YYYY'));
    let result = userService.canUserVote(user, moment('06/25/2017 11:00:00', 'MM/DD/YYYY HH:mm:ss'));

    expect(result).toEqual(true);
  });

  it("Testing canUserVote - User voted today", () => {
  	let user = userService.getUser(0);
  	userService.setLastVote(user, moment('06/25/2017 10:00:00', 'MM/DD/YYYY HH:mm:ss').format('MM/DD/YYYY'));
    let result = userService.canUserVote(user, moment('06/25/2017 11:00:00', 'MM/DD/YYYY HH:mm:ss'));

    expect(result).toEqual(false);
  });
});