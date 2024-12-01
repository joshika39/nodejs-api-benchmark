import url from "url";

export const parseQuery = (req) => {
  const parsedUrl = url.parse(req.url, true);
  return parsedUrl.query;
}

export const getQueryParam = (req, key, converter) => {
  const query = parseQuery(req);
  if (query[key] === undefined) {
    return undefined;
  }

  if (converter) {
    return converter(query[key]);
  }

  return query[key];
}

export const parseBody = async (req) => {
  return await new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      resolve(body);
    });
    req.on("error", (err) => {
      reject(err);
    });
  });
}