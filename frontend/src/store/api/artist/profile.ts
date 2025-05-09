import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const artistProfileApi = createApi({
  reducerPath: 'artistProfileApi',
  baseQuery:fetchBaseQuery({
      baseUrl: process.env.NEXT_PUBLIC_API || 'http://localhost:8000/api',
      credentials: 'include', // Important for cookies
    }),
    tagTypes: ['ArtistProfile'],
  endpoints: (builder) => ({
    getArtistProfile: builder.query({
      query: () => 'artist/profile/',
      providesTags: ['ArtistProfile'],
    }),
    updateArtistProfile: builder.mutation({
      query: (formData) => ({
        url: `artist/profile/update`,
        method: 'PUT',
        body: formData,
      }),
      invalidatesTags: ['ArtistProfile'],
    }),
    updateEmail: builder.mutation({
      query: ({...updatedProfile }) => ({
        url: `artist/profile/change-email`,
        method: 'POST',
        body: updatedProfile,
      }),
      invalidatesTags: ['ArtistProfile'],
    }),
    changePassword: builder.mutation({
      query: ({...updatedProfile }) => ({
        url: `artist/profile/change-password`,
        method: 'POST',
        body: updatedProfile,
      }),
      invalidatesTags: ['ArtistProfile'],
    }),
    deactivateAccount: builder.mutation({
      query: () => ({
        url: `artist/profile/deactivate`,
        method: 'POST',
      }),
      invalidatesTags: ['ArtistProfile'],
    }),
  }),
});

export const {
  useGetArtistProfileQuery,
  useUpdateArtistProfileMutation,
  useUpdateEmailMutation,
  useChangePasswordMutation,
  useDeactivateAccountMutation,
} = artistProfileApi;