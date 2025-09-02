"use client";

import Form from 'next/form'

interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
  }

const handleSubmit = async (formData: FormData) => {
    const id = length ++
    const nome = formData.get("nome") as string;
    const email = formData.get("email") as string;
    const senha = formData.get("senha") as string;
    
    const novoUsuario: Usuario = {
        id,
        nome,
        email,
        senha
      };
    
    try {
        const response = await fetch('http://localhost:3000/usuarios', {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novoUsuario),
            });

        if (!response.ok) throw new Error('Erro ao enviar dados!');
        console.log("usuario cadastrado com sucesso!");
    } catch (error) {
        console.error(error);
        console.log('Erro ao cadastrar usuário.');
      }
}; 

export default function cadastroUsuario() {
    return (
        <main>
            <Form action={handleSubmit}>
                <input type='text' name="nome" placeholder='escreva seu nome' />
                <input type='text' name="email" placeholder='escreva seu email' />
                <input type='text' name="senha" placeholder='escreva sua senha' />
                <button type='submit' >enviar</button>
            </Form>
        </main>
    )
}