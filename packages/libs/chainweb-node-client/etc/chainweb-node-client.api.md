## API Report File for "@kadena/chainweb-node-client"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { Base16String } from '@kadena/types';
import type { ICap } from '@kadena/types';
import type { ICommand } from '@kadena/types';
import type { ICommandResult } from '@kadena/types';
import type { IListenRequestBody } from '@kadena/types';
import type { IPollRequestBody } from '@kadena/types';
import type { IPollResponse } from '@kadena/types';
import type { ISPVRequestBody } from '@kadena/types';
import type { LocalRequestBody } from '@kadena/types';
import type { PactValue } from '@kadena/types';
import type { SPVResponse } from '@kadena/types';

// @alpha
interface IISendRequestBody {
    // (undocumented)
    cmds: Array<ICommand>;
}

// @alpha
interface ISendResponse {
    // (undocumented)
    requestKeys: Array<Base16String>;
}

// @alpha
function listen(requestBody: IListenRequestBody, apiHost: string): Promise<ICommandResult | Response>;

// @alpha
function local(requestBody: LocalRequestBody, apiHost: string): Promise<ICommandResult | Response>;

// @alpha
function mkCap(name: string, args?: Array<PactValue>): ICap;

declare namespace pact {
    export {
        listen,
        local,
        mkCap,
        parseResponse,
        parseResponseTEXT,
        poll,
        send,
        IISendRequestBody,
        ISendResponse,
        spv,
        stringifyAndMakePOSTRequest
    }
}
export { pact }

// @alpha
function parseResponse<T>(response: Response): Promise<T>;

// @alpha
function parseResponseTEXT(response: Response): Promise<string>;

// @alpha
function poll(requestBody: IPollRequestBody, apiHost: string): Promise<IPollResponse | Response>;

// @alpha
function send(requestBody: IISendRequestBody, apiHost: string): Promise<ISendResponse | Response>;

// @alpha
function spv(requestBody: ISPVRequestBody, apiHost: string): Promise<SPVResponse | Response>;

// @alpha
function stringifyAndMakePOSTRequest<T>(body: T): object;

// (No @packageDocumentation comment for this package)

```