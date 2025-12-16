import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const BREVO_API_URL = 'https://api.brevo.com/v3/contacts'
const BREVO_API_KEY = process.env.BREVO_API_KEY

// Middleware de CORS
export const config = {
  api: {
    bodyParser: true, // necessário para processar o corpo da requisição
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Permitir requisições de qualquer origem (em produção, você deve restringir isso)
  res.setHeader('Access-Control-Allow-Origin', '*') 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()  // Responde apenas para o "preflight" CORS
  }

  if (req.method === 'POST') {
    const { email, name } = req.body
    if (!email || !name) {
      return res.status(400).json({ success: false, message: 'Nome e email são obrigatórios.' })
    }

    try {
      const response = await axios.post(
        BREVO_API_URL,
        {
          email,
          attributes: { FIRSTNAME: name },
          listIds: [2],  // ID da lista no Brevo
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'api-key': BREVO_API_KEY!,
          },
        }
      )

      if (response.status === 200) {
        return res.status(200).json({ success: true, message: 'Inscrição realizada com sucesso!' })
      } else {
        return res.status(400).json({ success: false, message: 'Erro ao adicionar na lista.' })
      }
    } catch (error) {
      console.error('Erro ao se inscrever:', error)
      return res.status(500).json({ success: false, message: 'Erro ao se inscrever. Tente novamente.' })
    }
  } else {
    res.status(405).json({ success: false, message: 'Método não permitido' })
  }
}
