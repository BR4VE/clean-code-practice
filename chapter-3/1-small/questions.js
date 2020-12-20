// Question 1:
// Let's assume we have different services in our app which are called in the controllers
// These app services are used to retrieve data from database

class RoomController {
  static async getRoom(req, res, next) {
    const { roomId } = req.params;
    const { id } = req.user;
    const room = await RoomService.getById(roomId);
    // some other logic and assume we are using other services and make calculations
    // ...
    // ...
    room.visitorCount += 1;
    await UserService.updateById(id, { visitedRoom: room.id });
    // ...
    res.json(room);
  }
}

// should we move the calculations/operations to services?
// For example:
// should we create a function inside RoomService called "incrementVisitorCount"

await RoomService.incrementVisitorCount(roomId);

// what if we are making an operation which uses resources of different services
// For example: How we should store a function which increments the rooms visitor count
// and at the same time updates user's visitedRoom prop
// Clearly we need to use differnet services for that.

// Should we create a higher level function to consume them in one?
// Or should we call them indiviudally in the controller level?

//------------------------------------------------------------------------

// Question 2:
// Similar to question one, how should we group function inside if block under one fucntion
// Two different classes/services are used here

class UserValidator {
  checkPassword(userName, password) {
    const user = UserGateway.findByName(userName);
    if (user != USER.NULL) {
      // Earlier it has been said that, if statements should contain one function call
      const codePhrase = user.getPhraseEncodedeByPassword();
      const phrase = cryptographer.decrypt(codedPhrase, password);
      if ("Valid Password".equals(phrase)) {
        Session.initialize();
        return true;
      }
    }
    return false;
  }
}

//------------------------------------------------------------------------
