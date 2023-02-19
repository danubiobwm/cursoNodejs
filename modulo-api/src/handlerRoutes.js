const router = require("./routes");

const handler = (request, response) => {
  const method = request.method;
  const url = request.url;

  const urlSprint = url.split("/").filter(Boolean);

  const resultRoute = router.filter((item) => {
    return (
      item.method.toLowerCase() === method.toLowerCase() &&
      item.url.toLowerCase().startsWith(`/${urlSprint[0].toLowerCase()}`)
    );
  });

  const executeRouter = resultRoute.find((item) => {
    const routeUrlSprint = item.url.split("/").filter(Boolean);
    return urlSprint.length === routeUrlSprint.length;
  });

  if (!executeRouter) {
    response.statusCode = 404;
    return response.end("Not found");
  }

  const routerSplitUrl = executeRouter.url.split("/").filter(Boolean);

  const objParams = {};

  routerSplitUrl.forEach((item, index) => {
    if (item.startsWith(":")) {
      const formatField = item.replace(":", "");
      objParams[formatField] = urlSprint[index];
    }
  });

  request
    .on("data", (data) => {
      const body = JSON.parse(data);

      request.body = body;
    })
    .on("end", () => {
      request.params = objParams;
      return executeRouter.controller(request, response);
    });
};

module.exports = handler;
