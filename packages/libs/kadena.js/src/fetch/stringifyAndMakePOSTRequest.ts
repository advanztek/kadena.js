import { RequestInit as NodeFetchRequestInit } from 'node-fetch';

/**
 * Formats API request body to use with `fetch` function.
 *
 * Corresponds to `mkReq` function:
 * https://github.com/kadena-io/pact-lang-api/blob/master/pact-lang-api.js#L533
 *
 */
export function stringifyAndMakePOSTRequest<T>(body: T): NodeFetchRequestInit {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(body),
  };
}