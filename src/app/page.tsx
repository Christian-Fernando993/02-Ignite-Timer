import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Sou a Página Home</h1>
      <div>
        <Link href={'/Historico'}>Ir para página de Historico</Link>
      </div>
      <div>
        <Link href={'/Produto'}>Ir para página de Produto</Link>
      </div>
    </>
  )
}
