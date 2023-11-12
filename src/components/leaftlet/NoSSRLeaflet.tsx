import dynamic from 'next/dynamic'

export const NoSSRLeaflet = dynamic(() => import('./Leaftlet'), {
  ssr: false,
})
