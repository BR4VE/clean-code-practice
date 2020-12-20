// Example 1:
// Prefer exceptions to retruning error codes

if (deletePage(page) == E_OK) {
  if (CustomElementRegistry.deleteReference(page.name) == E_OK) {
    if (configKeys.deleteKey(page.name.makeKey()) == E_OK) {
      logger.log("page deleted");
    } else {
      logger.log("configKey not deleted");
    }
  } else {
    logger.log("deleteReference from registry failed");
  }
} else {
  logger.log("delete failed");
  return E_ERROR;
}

// BAD: Hard to read
// And returning error codes forces function caller to deal with the error immediately
// no delegation

try {
  deletPage(page);
  registry.deleteReference(page.name);
  configKeys.deleteKey(page.name.makeKey());
} catch (e) {
  logger.log(e.getMessage());
}

//---------------------------------------------------------------------------
