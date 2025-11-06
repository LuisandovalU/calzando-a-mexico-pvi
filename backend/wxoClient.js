// backend/wxoClient.js
import fetch from "node-fetch";
import qs from "querystring";

const API_KEY = process.env.WX_API_KEY;
const ENDPOINT = process.env.WX_ENDPOINT;

// 1. Obtener token IAM (IBM Cloud)
export async function getIamToken() {
  const res = await fetch("https://iam.cloud.ibm.com/identity/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: qs.stringify({
      grant_type: "urn:ibm:params:oauth:grant-type:apikey",
      apikey: API_KEY,
    }),
  });
  if (!res.ok) throw new Error(await res.text());
  const json = await res.json();
  return json.access_token;
}

// 2. Llamada genérica a watsonx Orchestrate
export async function wxoFetch(path, method = "GET", body = null) {
  const token = await getIamToken();
  const url = ⁠ ${ENDPOINT.replace(/\/$/, "")}${path} ⁠;
  const opts = {
    method,
    headers: {
      Authorization: ⁠ Bearer ${token} ⁠,
      "Content-Type": "application/json",
    },
  };
  if (body) opts.body = JSON.stringify(body);

  const res = await fetch(url, opts);
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}