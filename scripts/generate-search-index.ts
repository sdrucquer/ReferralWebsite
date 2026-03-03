import { writeSearchIndex } from "../src/lib/content/search-index";

const count = writeSearchIndex();
console.log(`Generated search index with ${count} documents.`);
