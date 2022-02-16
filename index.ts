import * as http from "http";
import { keys } from "ts-transformer-keys";
//create a server object:
http
  .createServer(function (req, res) {
    interface Props {
      a?: number;
      b: string;
    }

    type RequiredOnly<T> = {
      [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K]
    };

    type OptionalOnly<T> = {
      [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K]
    };

    const requiredProps = keys<RequiredOnly<Props>>();
    const optionalProps = keys<OptionalOnly<Props>>();

    res.write(JSON.stringify({requiredProps,optionalProps})); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
