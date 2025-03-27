const services = [
    {
        id: 1,
        title: 'Desenvolvimento de Sites Sob Demanda',
        description: 'Precisa de um site que carregue mais rápido que o Wi-Fi de um café chique? Eu crio sites que deixam os outros no chinelo (literalmente!).'
    },
    {
        id: 2,
        title: 'SaaS Sob Medida',
        description: 'Crio soluções SaaS tão incríveis que até sua máquina de café vai querer assinar. Automação e escalabilidade para fazer seu software bombar como nunca antes!'
    }
    ,
    {
        id: 3,
        title: 'API Mágica',
        description: 'Crio APIs que fazem milagres. Seus dados vão de A a B mais rápido do que você consegue digitar "JSON".'
    },
    {
        id: 4,
        title: 'Desenvolvimento Full Stack Imparável',
        description: 'Desenvolvo tanto no front quanto no back. Se você precisa de algo que seja funcional e estiloso, eu sou a pessoa certa. Tipo um super-herói da programação.'
    },
    {
        id: 5,
        title: 'Automação para Todo Mundo',
        description: 'Já pensou em automatizar aquele processo chato? Eu crio soluções que fazem seu computador trabalhar enquanto você toma um descanso. A tecnologia a seu favor!'
    }
];


export const Services = () => {


    return (
        <section className="text-white py-20">
            <div className="container mx-auto flex px-4 flex-col md:flex-row">
                <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
                    <h2 className="text-6xl text-purple-300 font-extrabold sticky top-20">SERVIÇOS</h2>
                </div>
                <div className="md:w-3/4">
                    {services.map(service => (
                        <div key={service.id} className="mb-16 flex items-start">
                            <div className="text-purple-300 font-bold text-5xl mr-6">
                                {service.id}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>

        </section>)
}