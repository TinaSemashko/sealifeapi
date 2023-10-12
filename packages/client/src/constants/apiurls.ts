export const APIURL_GET_ALL_BATEAUX =
  "http://localhost:4000/api/bateaux?apikey=${APIKey}";
export const APIURL_GET_BATEAUX_BY_MODEL_OR_TYPE =
  "http://localhost:4000/api/bateauxbytype?model=${VotreModel}&id_type=1&apikey=${APIKey}";
export const APIURL_GET_ALL_REVIEWS =
  "http://localhost:4000/api/reviews?apikey=${APIKey}";
export const APIURL_POST_REVIEW =
  "http://localhost:4000/api/createreview?apikey=${APIKey}";
export const APIURL_DELETE_REVIEW =
  "http://localhost:4000/api/deletereviw?apikey=${APIKey}";
export const APIURL_GET_REVIEW_BY_MODEL =
  "http://localhost:4000/api/getreviewsbymodel?model=${VotreModel}apikey=${APIKey}";
