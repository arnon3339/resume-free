import { URLSearchParams } from 'url';
import Pub from '@/modules/modules/mongodb/Pub';
import dbconnect from '@/modules/modules/mongodb/connect';

interface MyObject {
  [key: string]: any;
}

export async function GET(request: Request) {
  try{
    dbconnect();
    const url = request.url;
    const urlParams = new URLSearchParams(url?.toString().split('?')[1])
    let params: MyObject = {};
    Array.from(urlParams.keys()).forEach(e => {
        if (e != "page")
            params[e] = (urlParams.get(e) as string).split(',').map(e => parseInt(e));
        else
            params[e] = parseInt(urlParams.get(e) as string);
    });
    const sortKey = ["prism:coverDate", "dc:title", "firstAuthor", "prism:publicationName"];
    const countDoc = await Pub.countDocuments({});
    let sorts: MyObject = {};
    params["pri"].forEach((e: number) => {
        sorts[sortKey[e]] = params["ascs"][e]
    });
    const pubs = await Pub.find({}).sort(sorts).select("prism:coverDate prism:publicationName dc:title eid author")
        .skip(params["page"]*20)
        .limit(20);
    let authors: Array<Array<String>> = [];
    let bolds: Array<number> = [];
    let ands: Array<boolean> = [];
    pubs.forEach((e: any, i) => {
      const origAuthors = e['_doc']["author"].map((ee: any) => ee["authname"]);
      let newAuthors: Array<String> = [];
      if (origAuthors.length > 20){
        newAuthors = [...(origAuthors.slice(0, 17)), "...", "Songmoolnak A.", "..."]
        bolds.push(18);
        ands.push(false);
      } else {
        newAuthors = [...origAuthors]
        ands.push(true);
        newAuthors.forEach((ee: String, ii: number) => {
          if (ee.toLocaleLowerCase().search("songmoolnak") != -1) bolds.push(ii);
        });
      }
        authors.push(newAuthors);
    });
    return new Response(JSON.stringify({
        total: countDoc,
        values: pubs ,
        authors: authors,
        bolds: bolds,
        ands: ands
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