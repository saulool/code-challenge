import voteService from './VoteService';
import userService from './UserService';
import moment from 'moment';
import timemachine from 'timemachine';
import {DATEFORMAT, DATETIMEFORMAT} from '../constants/constants';

describe("Testing VoteService", () => {
  it("Testing saveVote - Voted successfully", () => {
  	let user = userService.getUser(0);
    userService.setLastVote(user, null);

    timemachine.config({
  	  dateString: 'June 25, 2017 11:00:59'
  	});

    let result = voteService.saveVote(0, 1);

    expect(result).toEqual(true);

    timemachine.reset();
  });

  it("Testing saveVote - User already have voted", () => {
    timemachine.config({
      dateString: 'June 25, 2017 11:00:59'
    });

  	let user = userService.getUser(0);
    userService.setLastVote(user, moment('06/25/2017 10:00:00', DATETIMEFORMAT).format(DATEFORMAT));

    let result = voteService.saveVote(0, 1);

    expect(result).toEqual({ error : true, message : 'You can\'t vote anymore', status : 404 });
    
    timemachine.reset();
  });

  it("Testing saveVote - Cant find restaurant", () => {
  	let user = userService.getUser(0);
    userService.setLastVote(user, null);

    timemachine.config({
  	  dateString: 'June 25, 2017 11:00:59'
  	});

    let result = voteService.saveVote(0, 100);

    expect(result).toEqual({ error : true, message : 'Restaurant not found', status : 404 });

    timemachine.reset();
  });
});