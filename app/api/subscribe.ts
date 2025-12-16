// app/api/subscribe/route.ts
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { email, name } = await req.json()

  if (!email) {
    return NextResponse.json(
      { success: false, message: "Email é obrigatório" },
      { status: 400 }
    )
  }

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY!, // ✅ SOMENTE NO SERVER
    },
    body: JSON.stringify({
      email,
      attributes: {
        FIRSTNAME: name,
      },
      listIds: [8], // ID da lista de contatos
      updateEnabled: true,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    return NextResponse.json(
      { success: false, message: error },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true })
}
