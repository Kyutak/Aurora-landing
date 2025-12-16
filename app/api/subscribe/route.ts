const response = await fetch("https://api.brevo.com/v3/contacts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "accept": "application/json",
    "api-key": process.env.BREVO_API_KEY!,
  },
  body: JSON.stringify({
    email,
    attributes: {
      nome: name.trim(),
    },
    listIds: [8],
    updateEnabled: true,
  }),
});

      return NextResponse.json({ message: "Erro desconhecido", error: "Erro desconhecido" }, { status: 500 });
    }
  }
}
