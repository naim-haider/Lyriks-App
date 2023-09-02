import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'db3d8e7f83msh43ef4ea034ad168p164734jsn145148522cbd',
//       'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam.p.rapidapi.com/charts/track', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam.p.rapidapi.com',
            prepareHeaders: (headers) =>{
                headers.set('X-RapidAPI-Key', 'db3d8e7f83msh43ef4ea034ad168p164734jsn145148522cbd')

                return headers;
            },
        }),
        endpoints: (builder) =>({
            getTopCharts: builder.query({ query:()=> '/charts/track' }),

            getSongDetails: builder.query({query: ({songid}) => `/tracks/details?track_id=${songid}`}),
        }),
    });

    export const {
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
    } = shazamCoreApi;