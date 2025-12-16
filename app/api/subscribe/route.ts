export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();
    
    if (!email || !name) {
      return NextResponse.json({ message: "Email e nome são obrigatórios." }, { status: 400 });
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        email,
        listIds: [8], // ID da sua lista
        updateEnabled: true,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json({ success: true, message: "Contato adicionado com sucesso!", data });

  } catch (error: unknown) {
    // Verificando se o erro é uma instância de Error
    if (error instanceof Error) {
      console.error("Erro ao processar inscrição:", error.message);
      return NextResponse.json({ message: "Erro no servidor.", error: error.message }, { status: 500 });
    } else {
      // Se o erro não for uma instância de Error
      console.error("Erro desconhecido:", error);
      return NextResponse.json({ message: "Erro desconhecido", error: "Erro desconhecido" }, { status: 500 });
    }
  }
}

