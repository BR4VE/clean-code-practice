// Question-1:
// Assume that we have different classes for each domain in our database and each
// third party library we use

// example

class UserService {
  async getById(id) {
    return this.collection.get({ id });
  }
  async update(id, body) {
    return this.collection.update(id, body);
  }
}

class FileService {
  async resize(file) {
    return this.resizer(file);
  }
}

// And assume that we want resize every single image (which belongs to some user)
// before saving

class UserController {
  static async updateUser(req, res, next) {
    const resizedUserImage = await FileService.resize(req.body.image);
    req.body.image = resizedUserImage;
    await UserService.update(req.body.id, req.body);
  }
}

// However we don't want to resize manually because it becomes to repetitive
// And at the same time we don't want to put FileService inside UserController,
// we want to keep services separated

// How can we keep services separated at the same time achieve some communication
// between them?

// Potential Solution 1:
// We can use event emitters to communicate between services rather than directly calling them

class UserService {
  async getById(id) {
    return this.collection.get({ id });
  }
  async update(id, body) {
    if (body.image) {
      this.sendEvent(IMAGE_RESIZE, { image: body.image });
    }
    this.listenEvent(IMAGE_RESIZE, (payload) => {
      body.image = payload.image;
      return this.collection.update(id, body);
    });
  }
}

// With this solution how we are going to indicate that
// we are calling external services in the function name,
// would it be against clean code principles?

// Should we wait for event listeners to resolve to return a response to the client?
