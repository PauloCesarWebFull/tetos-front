import fortalezaOrla from "../assets/fortaleza-orla-aerea.jpg";

const Home = () => {
    return ( 
         <main
             className="relative flex min-h-full flex-col items-center justify-center gap-6 bg-slate-950 bg-cover bg-center px-4 py-10"
             style={{
                 backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.48), rgba(15, 23, 42, 0.58)), url("${fortalezaOrla}")`
             }}
         >
             <section className="w-full max-w-3xl rounded-3xl border border-white/60 bg-white/90 px-6 py-10 text-center shadow-2xl shadow-slate-950/30 backdrop-blur-sm sm:px-12 sm:py-14">
                 <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                     Página inicial
                 </p>
                 <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                     Encontre o lugar onde a sua próxima história começa.
                 </h1>
                 <p className="text-base leading-8 text-slate-600 sm:text-lg">
                     Mais do que metros quadrados: o cenário ideal para a sua vida.{" "}
                     O imóvel que você procura, com a segurança que você precisa.{" "}
                     Seu novo endereço está a um clique de distância. Transforme planos
                     em chaves na mão.
                 </p>
             </section>
             <p className="text-center text-xs text-white/90">
                 
                 <a
                     href="https://commons.wikimedia.org/wiki/File:Fortaleza,_Brazil_(8).jpg"
                     target="_blank"
                     rel="noreferrer"
                     className="underline underline-offset-2 hover:text-white"
                 >
                    
                 </a>
                 
                 <a
                     href="https://creativecommons.org/licenses/by-sa/3.0/"
                     target="_blank"
                     rel="noreferrer"
                     className="underline underline-offset-2 hover:text-white"
                 >
                     
                 </a>
                 
             </p>
         </main>
     );
}
 
export default Home;