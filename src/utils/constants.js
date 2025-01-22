export const LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const AVATAR_USER= "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXh10ggeTTdhZO1JIH_SNQ4gp0vsNnWfE8Mg2ckwzGvUzJMRpPFCujRK3Ex5K9VbkIyvUHQ92LBVdsemkj6zlpquL-qWMCNKeg.png?r=229";

export const API_OPTIONS=  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
      }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

  export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-hi-20241111-TRIFECTA-perspective_0cd6cd9f-ff1b-4eb6-a5ec-9f54293bf5b9_large.jpg";

  export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English"},
    { identifier: "hindi", name: "Hindi"},
    { identifier: "spanish", name: "Spanish"}
];
