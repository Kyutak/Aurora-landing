interface BrevoContact {
  email: string
  attributes: {
    FIRSTNAME?: string
    LASTNAME?: string
    [key: string]: string | undefined
  }
  listIds?: number[]
  updateEnabled?: boolean
}

interface BrevoEmailData {
  sender: {
    name: string
    email: string
  }
  to: Array<{
    email: string
    name?: string
  }>
  subject: string
  htmlContent: string
}

export async function addContactToBrevo(
  email: string,
  firstName?: string,
  lastName?: string,
  listIds?: number[],
): Promise<{ success: boolean; message: string }> {
  const apiKey = process.env.BREVO_API_KEY

  if (!apiKey) {
    console.error("[v0] BREVO_API_KEY not found in environment variables")
    return { success: false, message: "API key not configured" }
  }

  const contactData: BrevoContact = {
    email,
    attributes: {},
    listIds: listIds || [],
    updateEnabled: true,
  }

  if (firstName) contactData.attributes.FIRSTNAME = firstName
  if (lastName) contactData.attributes.LASTNAME = lastName

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(contactData),
    })

    if (response.ok || response.status === 201) {
      return { success: true, message: "Contato adicionado com sucesso!" }
    }

    if (response.status === 400) {
      const data = await response.json()
      if (data.code === "duplicate_parameter") {
        return { success: true, message: "Contato já existe na lista" }
      }
    }

    const errorData = await response.json()
    console.error("[v0] Brevo API error:", errorData)
    return { success: false, message: "Erro ao adicionar contato" }
  } catch (error) {
    console.error("[v0] Error calling Brevo API:", error)
    return { success: false, message: "Erro de conexão" }
  }
}

export async function sendEmailViaBrevo(
  toEmail: string,
  toName: string,
  subject: string,
  htmlContent: string,
): Promise<{ success: boolean; message: string }> {
  const apiKey = process.env.BREVO_API_KEY

  if (!apiKey) {
    console.error("[v0] BREVO_API_KEY not found in environment variables")
    return { success: false, message: "API key not configured" }
  }

  const emailData: BrevoEmailData = {
    sender: {
      name: "Aurora",
      email: "contato@aurora.com",
    },
    to: [
      {
        email: toEmail,
        name: toName,
      },
    ],
    subject,
    htmlContent,
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(emailData),
    })

    if (response.ok || response.status === 201) {
      return { success: true, message: "E-mail enviado com sucesso!" }
    }

    const errorData = await response.json()
    console.error("[v0] Brevo API error:", errorData)
    return { success: false, message: "Erro ao enviar e-mail" }
  } catch (error) {
    console.error("[v0] Error calling Brevo API:", error)
    return { success: false, message: "Erro de conexão" }
  }
}
