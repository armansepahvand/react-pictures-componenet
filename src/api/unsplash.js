import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID dbuJmuSB57SF2NPN2tpsyxMV4pzlFle7MMIcD2z-BkY",
      }

});