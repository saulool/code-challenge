import userService from './UserService';
import moment from 'moment';
import timemachine from 'timemachine';
import {DATEFORMAT, DATETIMEFORMAT} from '../constants/constants';

describe("Testing UserService", () => {
  it("Testing getUser", () => {
    let user = userService.getUser(0);

    expect(user).toEqual({id: 0, name: 'John', lastVote: null});
  });

  it("Testing setLastVote", () => {
    let user = userService.getUser(0);

    let today = moment().format(DATEFORMAT);

    userService.setLastVote(user, today);

    expect(user.lastVote).toEqual(today);
  });

  it("Testing canUserVote - User havent voted", () => {
  	timemachine.config({
      dateString: 'June 25, 2017 11:00:00'
    });

  	let user = userService.getUser(0);
  	userService.setLastVote(user, null);
    let result = userService.canUserVote(user, moment('06/25/2017 11:00:00', DATETIMEFORMAT));

    expect(result).toEqual(true);

    timemachine.reset();
  });

  it("Testing canUserVote - User have voted yesterday", () => {
    timemachine.config({
      dateString: 'June 25, 2017 11:00:00'
    });

  	let user = userService.getUser(0);
  	userService.setLastVote(user, moment('06/24/2017 11:00:00', DATETIMEFORMAT).format(DATEFORMAT));
    let result = userService.canUserVote(user, moment('06/25/2017 11:00:00', DATETIMEFORMAT));

    expect(result).toEqual(true);

    timemachine.reset();
  });

  it("Testing canUserVote - User voted today", () => {
    timemachine.config({
      dateString: 'June 25, 2017 11:00:00'
    });

  	let user = userService.getUser(0);
  	userService.setLastVote(user, moment('06/25/2017 10:00:00', DATETIMEFORMAT).format(DATEFORMAT));
    let result = userService.canUserVote(user, moment('06/25/2017 11:00:00', DATETIMEFORMAT));

    expect(result).toEqual(false);

    timemachine.reset();
  });
});