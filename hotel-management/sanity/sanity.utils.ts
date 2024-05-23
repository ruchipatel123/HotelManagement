import { createClient,groq } from "next-sanity";
import { dataset, projectId} from './env'

export  async function getUser() {
    const client = createClient({
        projectId,
        dataset,
      })
      return client.fetch(
        groq`*[_type == "user"]{
            name,
             "poster": poster.asset->url
          }`
      )
} 