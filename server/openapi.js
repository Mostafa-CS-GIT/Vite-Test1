const openApiSpec = {
  openapi: '3.0.3',
  info: {
    title: 'Real Estate Starter API',
    version: '1.0.0',
    description: 'A small starter API for the real estate application.',
  },
  servers: [{ url: 'http://localhost:4000', description: 'Local API server' }],
  paths: {
    '/api/health': {
      get: {
        summary: 'Check API health',
        responses: {
          200: {
            description: 'The API is running.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: { type: 'string', example: 'ok' },
                    service: { type: 'string', example: 'vite-test1-api' },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/api/developers': {
      get: {
        summary: 'List real estate developers',
        responses: {
          200: {
            description: 'Three real estate developers with descriptions and images.',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    type: 'object',
                    required: ['id', 'name_en', 'description_en', 'images'],
                    properties: {
                      id: { type: 'integer', example: 1 },
                      name_en: { type: 'string', example: 'Northstar Developments' },
                      description_en: {
                        type: 'string',
                        example: 'Energy-conscious homes with generous green spaces.',
                      },
                      images: {
                        type: 'array',
                        items: { type: 'string', format: 'uri' },
                      },
                    },
                  },
                },
              },
            },
            '/api/zones': {
              get: {
                summary: 'List the four available zones',
                responses: {
                  200: {
                    description: 'Four zones with English and Arabic descriptions and images.',
                    content: {
                      'application/json': {
                        schema: {
                          type: 'array',
                          items: {
                            type: 'object',
                            required: [
                              'id',
                              'name_en',
                              'name_ar',
                              'description_en',
                              'description_ar',
                              'city_en',
                              'city_ar',
                              'images',
                            ],
                            properties: {
                              id: { type: 'string', example: 'giza' },
                              name_en: { type: 'string', example: 'Giza' },
                              name_ar: { type: 'string', example: 'الجيزة' },
                              description_en: {
                                type: 'string',
                                example: 'Historic surroundings meet spacious residential communities.',
                              },
                              description_ar: { type: 'string', example: 'منطقة تجمع بين المعالم التاريخية والمجتمعات السكنية.' },
                              city_en: { type: 'string', example: 'Greater Cairo' },
                              city_ar: { type: 'string', example: 'القاهرة الكبرى' },
                              images: {
                                type: 'array',
                                items: { type: 'string', format: 'uri' },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
}

export default openApiSpec
