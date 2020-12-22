// Example 1:
// Wrap third-party APIs to prevent duplication for error handling

const port = new ACMEPort(12);

try {
  port.open();
} catch (e) {
  if (e instanceof DeviceResponseException) {
    reportPortError(e);
    logger.log("Device response exception", e);
  } else if (e instanceof GMXError) {
    reportPortError(e);
    logger.log("Unlock exception", e);
  }
}

// BAD: We need to deal with different error types every single time
// we use the API

const port = new LocalPort(12);

try {
  port.open();
} catch (e) {
  reportError(e);
  logger.log(e.getMessage(), e);
}

// LocalPort class is just a simple wrapper that catches and translates exceptions thrown by the ACMEPort class:

class LocalPort {
  constructor(portNumber) {
    this.innerPort = new AcmePort(portNumber);
  }

  open() {
    try {
      innerPort.open();
    } catch (e) {
      if (e instanceof DeviceResponseException) {
        reportPortError(e);
        logger.log("Device response exception", e);
      } else if (e instanceof GMXError) {
        reportPortError(e);
        logger.log("Unlock exception", e);
      }
    }
  }
}
