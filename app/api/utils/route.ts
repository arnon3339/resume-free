import { URLSearchParams } from 'url';

interface MyObject {
  [key: string]: any;
}

export async function GET(request: Request) {
  try{
    const url = request.url;
    const urlParams = new URLSearchParams(url?.toString().split('?')[1])
    let params: MyObject = {};
    Array.from(urlParams.keys()).forEach(e => {
      params[e] = (urlParams.get(e) as string);
    });
    let value: any;
    if (params.kind === "time"){
        if (params.q === "now"){
            value = new Date(Date.now());
        }
    }
    return new Response(JSON.stringify({
        kind: params.kind,
        q: params.q,
        value: value
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch{
    return new Response("Error", {
      status: 504,
    });
  }
}