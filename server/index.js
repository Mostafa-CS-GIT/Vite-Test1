import express from 'express'
import swaggerUi from 'swagger-ui-express'
import openApiSpec from './openapi.js'

const app = express()
const port = Number(process.env.PORT) || 4000

const developers = [
  {
    id: 1,
    name_en: 'Northstar Developments',
    description_en:
      'Northstar creates energy-conscious homes with generous green spaces and enduring materials.',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    ],
  },
  {
    id: 2,
    name_en: 'Horizon Living',
    description_en:
      'Horizon brings contemporary architecture and considered shared spaces to connected city neighborhoods.',
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    ],
  },
  {
    id: 3,
    name_en: 'Cedar & Stone',
    description_en:
      'Cedar & Stone builds welcoming family communities designed around comfort, craft, and everyday life.',
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
    ],
  },
]

const zones = [
  {
    id: 'giza',
    name_en: 'Giza',
    name_ar: 'الجيزة',
    description_en:
      'A landmark-rich district where historic surroundings meet spacious residential communities and sweeping city views.',
    description_ar: 'منطقة تجمع بين المعالم التاريخية والمجتمعات السكنية الواسعة.',
    city_en: 'Greater Cairo',
    city_ar: 'القاهرة الكبرى',
    images: [
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=85',
    ],
  },
  {
    id: 'new-cairo',
    name_en: 'New Cairo',
    name_ar: 'القاهرة الجديدة',
    description_en:
      'A modern eastern suburb known for leafy compounds, new business hubs, and room to grow.',
    description_ar: 'ضاحية حديثة تتميز بالمجمعات السكنية والمساحات الخضراء ومراكز الأعمال.',
    city_en: 'Greater Cairo',
    city_ar: 'القاهرة الكبرى',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    ],
  },
  {
    id: 'sheikh-zayed',
    name_en: 'Sheikh Zayed',
    name_ar: 'الشيخ زايد',
    description_en:
      'A relaxed western community with landscaped streets, neighborhood amenities, and a quieter pace.',
    description_ar: 'مجتمع هادئ غرب القاهرة بشوارع منسقة وخدمات قريبة.',
    city_en: 'Giza Governorate',
    city_ar: 'محافظة الجيزة',
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
    ],
  },
  {
    id: 'north-coast',
    name_en: 'North Coast',
    name_ar: 'الساحل الشمالي',
    description_en:
      'A Mediterranean escape shaped by open beaches, bright summer days, and easygoing coastal living.',
    description_ar: 'وجهة متوسطية تتميز بالشواطئ المفتوحة وأجواء الحياة الساحلية.',
    city_en: 'Matrouh Governorate',
    city_ar: 'محافظة مطروح',
    images: [
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85',
    ],
  },
]

const units = [
  {
    id: 1,
    title_en: 'Luxury Villa in Giza',
    title_ar: 'فيلا فاخرة في الجيزة',
    description_en:
      'A spacious luxury villa with panoramic city views, private pool, and high-end finishes throughout.',
    price: 8500000,
    bedrooms: 5,
    bathrooms: 4,
    area: 450,
    zone_id: 'giza',
    developer_id: 1,
  },
  {
    id: 2,
    title_en: 'Modern Apartment in New Cairo',
    title_ar: 'شقة عصرية في القاهرة الجديدة',
    description_en:
      'A sleek modern apartment nestled in a leafy New Cairo compound with easy access to schools and malls.',
    price: 3200000,
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    zone_id: 'new-cairo',
    developer_id: 2,
  },
  {
    id: 3,
    title_en: 'Family Home in Sheikh Zayed',
    title_ar: 'منزل عائلي في الشيخ زايد',
    description_en:
      'A welcoming family home on a landscaped street in Sheikh Zayed with a generous garden and quiet surroundings.',
    price: 5100000,
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    zone_id: 'sheikh-zayed',
    developer_id: 3,
  },
  {
    id: 4,
    title_en: 'Beachfront Chalet on North Coast',
    title_ar: 'شاليه على الشاطئ في الساحل الشمالي',
    description_en:
      'A breezy beachfront chalet steps from the Mediterranean Sea, perfect for summer escapes and coastal living.',
    price: 4700000,
    bedrooms: 3,
    bathrooms: 2,
    area: 210,
    zone_id: 'north-coast',
    developer_id: 1,
  },
  {
    id: 5,
    title_en: 'Penthouse in New Cairo',
    title_ar: 'بنتهاوس في القاهرة الجديدة',
    description_en:
      'A stunning penthouse with sweeping views, a private rooftop terrace, and premium smart-home features.',
    price: 9800000,
    bedrooms: 5,
    bathrooms: 5,
    area: 520,
    zone_id: 'new-cairo',
    developer_id: 2,
  },
  {
    id: 6,
    title_en: 'Cozy Studio in Giza',
    title_ar: 'استوديو مريح في الجيزة',
    description_en:
      'A compact and well-designed studio in the heart of Giza, ideal for young professionals and investors.',
    price: 1200000,
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    zone_id: 'giza',
    developer_id: 3,
  },
]

app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'vite-test1-api' })
})

app.get('/api/developers', (_request, response) => {
  response.json(developers)
})

app.get('/api/zones', (_request, response) => {
  response.json(zones)
})

app.get('/api/zones/:id', (request, response) => {
  const zone = zones.find((z) => z.id === request.params.id)
  if (!zone) return response.status(404).json({ error: 'Zone not found' })
  response.json(zone)
})

app.get('/api/units', (_request, response) => {
  response.json(units)
})

app.get('/api/unit/:id', (request, response) => {
  const unit = units.find((u) => u.id === Number(request.params.id))
  if (!unit) return response.status(404).json({ error: 'Unit not found' })
  response.json(unit)
})

app.get('/openapi.json', (_request, response) => {
  response.json(openApiSpec)
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiSpec))

app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`)
  console.log(`Swagger UI available at http://localhost:${port}/api-docs`)
})
