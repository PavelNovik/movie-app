import { baseApi } from '@/services/base-api'
import { ConfigurationType } from '@/services/configuration/configuration-types'

export const configurationApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getConfiguration: build.query<ConfigurationType, void>({
      providesTags: ['Configuration'],
      query: () => ({
        url: 'configuration',
      }),
    }),
  }),
})

export const { useGetConfigurationQuery } = configurationApi
