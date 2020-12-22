// Question 1: How should we refactor below function to get rid of null checks?
const checkCreator = async (req) => {
  const creatorId = 1;
  const chatId = Utils.getRequestParam(req, "chatId");
  const messageId = Utils.getRequestParam(req, "messageId");
  const message = await MessageService.getBy({ chatId, id: messageId });
  if (!message)
    // if message is not found
    throw new NotFound(
      `Could not find message with chatId:${chatId} and id:${messageId}`
    );
  if (message.senderId !== id) throw new AuthError("Unauthorized");
};

// Should we change MessageService so it throws an error if it can't find any data?
// Let's assume we made the change we can wrap the whole function in a try catch block

const checkCreator = async (req) => {
  const creatorId = 1;
  const chatId = Utils.getRequestParam(req, "chatId");
  const messageId = Utils.getRequestParam(req, "messageId");
  const message = await MessageService.getBy({ chatId, id: messageId });
  if (message.senderId !== id) throw new AuthError("Unauthorized");
};

try {
  await checkCreator(req);
} catch (e) {
  // if message is not found
  // `Could not find message with chatId:${chatId} and id:${messageId}`
}

// However, what we are going to do for the cases which we need to take
// different actions based on the existence of the file

const checkCreator = async (req) => {
  const creatorId = 1;
  const chatId = Utils.getRequestParam(req, "chatId");
  const messageId = Utils.getRequestParam(req, "messageId");
  const message = await MessageService.getBy({ chatId, id: messageId });
  if (!message) {
    await MessageService.create({ chatId, creatorId });
    return;
  } else {
    if (message.senderId !== id) throw new AuthError("Unauthorized");
  }
};

// For the case above can we throw exceptions?
// Wouldn't it make the code even uglier and split the order of the logic?

const checkCreator = async (req) => {
  const creatorId = 1;
  const chatId = Utils.getRequestParam(req, "chatId");
  const messageId = Utils.getRequestParam(req, "messageId");
  const message = await MessageService.getBy({ chatId, id: messageId });
  if (message.senderId !== id) throw new AuthError("Unauthorized");
};

try {
  await checkCreator(req);
} catch (e) {
  if (e instanceof NotFound) {
    await MessageService.create({ chatId, creatorId });
  }
}
