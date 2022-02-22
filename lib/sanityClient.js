import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'ivmr4vp4',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token:
      'skRrcNnLRu7xtMv7Ty0u9gX1ROwDzlL4D7YX6TQnn80VVVbmjJOMwF6j9zHbzd4LMsa8cBIprLsDYP2SQNh2t9xsflmXjgz1Cr3RhbYqUh84dgU6QepWfcnvI3b3fIaEyoSQ0zovhyP0UnAJc6t5j6TNcBGTaMyT9nVF31xz66B0QRTMa1Wy',
    useCdn: false,
})
