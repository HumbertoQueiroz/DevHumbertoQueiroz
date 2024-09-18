import {
  Atom,
  BookBookmark,
  EnvelopeSimple,
  FileTs,
  LinkedinLogo,
  UserCircleCheck,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { Avatar } from "./components/Avatar";
import { Skill } from "./components/Skill";
import { LinkPortifolio } from "./components/LinkPortifolio";
import { ItemList } from "./components/ItemList";
import { ItemListCenter } from "./components/ItemListCenter";
import * as Accordion from "@radix-ui/react-accordion";

//Paleta de cores base https://paletadecores.com/paleta/3a3132/0f4571/386dbd/009ddd/05d3f8/

//  *** Colors ***
// blueDark="#0f4571"
// blueMedium="#386dbd"
// blueLight=#009ddd
// blueExtraLight="#05d3f8"

export function App() {
  //Calcula idade
  const age = new Date().getFullYear() - 1995;

  //Boas vindas ao dev que veio inspecionar a página
  console.clear;
  console.log(
    "Muito obrigado por vir até aqui! Fique a vontade e explore o código desta página, desenvolvida em React.js"
  );

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1044px] flex flex-col">
        <LinkPortifolio />
        <div className="flex justify-center mb-4">
          <div className="w-[1044px]  border flex justify-between">
            <div className="w-1/4 bg-[#0f4571] text-slate-100">
              <Avatar
                urlImg="fotoDevHumbertoQueiroz.JPG"
                alt="Foto do desenvolvedor Humberto Queiroz"
              />
              <div className="mx-4 ml-8">
                <h5 className="mb-4 text-white">
                  {age} anos, solteiro, CNH A e B, disponível para mudança,
                  trabalho presencial ou home-office.
                </h5>
              </div>
              <p className="uppercase mx-2 font-medium">contato</p>
              <div className="mx-4 text-sm">
                <ItemListCenter
                  icon={<EnvelopeSimple size={16} />}
                  text="devhumbertoqueiroz@gmail.com"
                />
                <a
                  href="https://www.linkedin.com/in/humberto-queiroz-37385a1b6/"
                  target="blank"
                  title="Clique para ir ao meu Linkedin"
                >
                  <ItemListCenter
                    icon={<LinkedinLogo size={16} />}
                    text="Linkedin"
                  />
                </a>
                <a
                  href=" https://wa.me/556596452787?text=Olá!%20Visitei%20seu%20*currículo*%20e%20gostaria%20de%20ter%20mais%20informações."
                  target="blank"
                  title="Clique para o Whatsapp"
                >
                  <ItemListCenter
                    icon={<WhatsappLogo size={16} />}
                    text="(66) 9 9645-2787"
                  />
                </a>
              </div>
            </div>

            <div className="w-3/4 bg-white">
              <header className="flex flex-col items-center">
                <h1 className="mt-16 text-[#0f4571] text-6xl font-bold border-b-4 border-[#009ddd]  mb-4">
                  HUMBERTO QUEIROZ
                </h1>
                <div className="flex my-4">
                  <div className="flex-col">
                    <h2 className="text-3xl mt-6 mb-2 uppercase text-center font-semibold text-[#4f8eed] ">
                      Dev Front-End
                    </h2>
                    <p className="text-xl ">
                      Transformo café em código de qualidade
                    </p>
                  </div>
                </div>
              </header>
              <div className="mx-12 my-4 p-4 border rounded-md">
                <h4 className="uppercase text-xl font-bold my-1">
                  Perfil pessoal
                </h4>
                <p className="text-lg">
                  Com experiência em TI, sou um profissional aplicado e dedicado
                  à otimização de processos e sistemas. Minha afinidade com
                  tecnologia e minha boa comunicação me permitem entender as
                  necessidades dos usuários e propor soluções eficazes.
                  Atualmente, estou expandindo meus conhecimentos em programação
                  para contribuir ainda mais com projetos inovadores.
                </p>
              </div>
              <div className="flex flex-col mx-12 my-4 p-4 border rounded-md">
                <h2 className="text-xl font-bold uppercase my-1">
                  Linguagens de Programação
                </h2>
                <div className="flex gap-6 my-2">
                  <Skill
                    hasComponent={true}
                    icon={<FileTs size={24} />}
                    text="Typescript"
                    color="text-blue-400"
                  />
                  <Skill
                    hasComponent={true}
                    icon={<Atom size={24} />}
                    text="React"
                    color="text-sky-300"
                  />
                  <Skill
                    hasComponent={false}
                    urlImg="sql.svg"
                    text="MySQL"
                    size="w-4"
                  />
                  <Skill
                    hasComponent={true}
                    icon={<UserCircleCheck size={16} />}
                    text="UX/UI"
                    color="text-purple-600"
                  />
                </div>
                <div className="flex gap-7 my-2">
                  <Skill
                    hasComponent={false}
                    urlImg="javascript.svg"
                    text="JavaScript"
                    size="w-6"
                  />
                  <Skill
                    hasComponent={false}
                    urlImg="html.svg"
                    text="HTML"
                    size="w-5"
                  />
                  <Skill
                    hasComponent={false}
                    urlImg="css.svg"
                    text="CSS"
                    size="w-5"
                  />
                </div>
                <div className="flex gap-6 my-2">
                  <Skill
                    hasComponent={false}
                    urlImg="data:image/png;base64,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"
                    text="ADVPL"
                    size="w-5"
                  />
                  <Skill
                    hasComponent={false}
                    urlImg="sql.svg"
                    text="SQLServer"
                    size="w-4"
                  />
                </div>
              </div>
              <div className="mx-12 my-4 p-4 border rounded-md">
                <h4 className="uppercase text-xl font-bold my-1">
                  Histórico profissional
                </h4>
                <ul>
                  <ItemList
                    title="Analista de Desenvolvimento Junior"
                    date="04/2024 - Atual"
                    organization="Cooperfibra"
                    description="Desenvolvimento de rotinas, relatórios e views em ADVPL e SQL SERVER."
                  />
                  <ItemList
                    title="Analista de Suporte"
                    date="02/2023 - 04/2024"
                    organization="Millenium Software"
                    description="Suporte técnico aos usuários dos sistemas Millenium, treinamento ao usuário, documentação de manuais ao usuário e teste de software"
                  />
                  <ItemList
                    title="Assistente de T.I."
                    date="05/2022 - 01/2023"
                    organization="AgroVargas"
                    description="Instalação e configuração de sistemas computacionais. Administração de ambientes computacionais, controle de níveis de acesso, banco de dados e redes."
                  />
                </ul>
              </div>
              <div className="mx-12 my-4 p-4 border rounded-md">
                <h4 className="uppercase text-xl font-bold my-1">
                  Histórico Acadêmico
                </h4>
                <ul>
                  <div className="flex flex-col mt-2">
                    <div className="flex items-center">
                      <BookBookmark
                        size={16}
                        weight="bold"
                        className="mr-1 text-[#009ddd]"
                      />
                      <li className="font-medium text-base">
                        Técnico em Análise e Desenvolvimento de Sistemas
                      </li>
                    </div>
                    <p className="ml-5 text-sm font-light">
                      IFMT - Instituto Federal de Mato Grosso - 2023 - Cursando
                    </p>
                  </div>
                  <div className="flex flex-col mt-2">
                    <div className="flex items-center">
                      <BookBookmark
                        size={16}
                        weight="bold"
                        className="mr-1 text-[#009ddd]"
                      />
                      <li className="font-medium text-base">
                        Bacharelado em Direito
                      </li>
                    </div>
                    <p className="ml-5 text-sm font-light">
                      UNIC - Universidade de Cuiabá - 2014 - 2018
                    </p>
                  </div>
                </ul>
              </div>
              <div className="mx-12 my-4 p-4 border rounded-md">
                <h4 className="uppercase text-xl font-bold my-1">cursos</h4>
                <ul>
                  <div className="flex flex-col mt-2">
                    <div className="flex flex-col text-slate-400 text-sm gap-2 ">
                      <div>
                        <div className="flex items-center group">
                          <span className="w-1 h-5 mr-1 group-hover:w-2 duration-150  bg-[#05d3f8]" />
                          <a
                            href="https://www.rocketseat.com.br/formacao/react"
                            target="blank"
                            className="font-semibold uppercase text-[#085EC5]"
                            title="Clique para ir para página de validação dos certificados"
                          >
                            REACT
                          </a>
                        </div>
                        <p className="ml-1 text-xs opacity-50">
                          Conheça mais sobre o curso clicando no link acima
                        </p>
                      </div>
                      <li className="mb-2">
                        Rocketseat - Formação em React (10/2023) 30 horas{" "}
                      </li>
                      <div>
                        <div className="flex items-center group">
                          <span className="w-1 h-5 mr-1 bg-[#A435F0] group-hover:w-2 duration-150" />
                          <a
                            href="https://www.udemy.com/course/fundamentos-da-web-que-todo-dev-precisa-saber/?couponCode=ST11MT91624A"
                            target="blank"
                            className=" font-bold text-[#085EC5] "
                            title="Clique para ir para página de validação dos certificados"
                          >
                            PROGRAMAÇÃO WEB MODERNO
                          </a>
                        </div>
                        <p className="ml-1 text-xs opacity-50">
                          Conheça mais sobre o curso clicando no link acima
                        </p>
                      </div>
                      <li className="mb-2">
                        Udemy - Curso Programador Web 2.0 Moderno (09/2022) 40,5
                        horas{" "}
                      </li>
                      <Accordion.Root type="single" collapsible>
                        <Accordion.Item value="item-1">
                          <Accordion.Header>
                            <Accordion.Trigger>
                              <div className="flex items-center group ">
                                <span className="w-1 h-5 mr-1 bg-[#0546f8] group-hover:w-2 duration-150" />
                                <p
                                  className="font-semibold uppercase text-[#085EC5]"
                                  title="Clique aqui para expandir os cursos"
                                >
                                  Front end - html, css, js
                                </p>
                              </div>
                              <div className="flex flex-col items-start">
                                <p className="ml-1 text-xs opacity-50">
                                  Clique acima para ver todos os cursos ou{" "}
                                  <a
                                    href="https://cursos.alura.com.br/user/humbertojuridico2016/fullCertificate/e45b2fca854cd6585245e0981962422f"
                                    target="blank"
                                    title="Clique para ir para página de validação dos certificados"
                                    className="text-blue-500 underline"
                                  >
                                    clique aqui
                                  </a>{" "}
                                  para validar os cursos na Alura
                                </p>
                                <p className="my-2">
                                  Alura - Front End (07/2021 a 06/2022) 106hs{" "}
                                </p>
                              </div>
                            </Accordion.Trigger>
                          </Accordion.Header>
                          <Accordion.Content className="flex flex-col gap-2 opacity-80">
                            <li>
                              Flexbox: posicione elementos na tela (de
                              02/02/2022 a 10/02/2022) 9hrs
                            </li>
                            <li>
                              CSS Grid: simplificando layouts (de 10/02/2022 a
                              19/02/2022) 8hrs
                            </li>
                            <li>
                              HTML5 e CSS3 parte 1: crie uma página da Web (de
                              12/07/2021 a 25/07/2021) 8hrs
                            </li>
                            <li>
                              HTML5 e CSS3 parte 2: posicionamento, listas e
                              navegação (de 21/07/2021 a 25/07/2021) 8hrs
                            </li>
                            <li>
                              Arquitetura CSS: descomplicando os problemas (de
                              14/01/2022 a 30/01/2022) 8hrs
                            </li>
                            <li>
                              HTML5 e CSS3 parte 3: trabalhando com formulários
                              e tabelas (de 25/07/2021 a 28/07/2021) 8hrs
                            </li>
                            <li>
                              HTML5 e CSS3 parte 4: avançando no CSS (de
                              29/07/2021 a 07/08/2021) 8hrs
                            </li>
                            <li>
                              JavaScript: explorando a linguagem (de 17/08/2021
                              a 19/09/2021) 10hrs
                            </li>
                            <li>
                              Layouts Responsivos: trabalhando com layouts
                              mobile (de 27/12/2021 a 14/01/2022) 7hrs
                            </li>
                            <li>
                              JavaScript: programando a Orientação a Objetos (de
                              12/11/2021 a 01/12/2021) 10hrs
                            </li>
                            <li>
                              JavaScript: interfaces e Herança em Orientação a
                              Objetos (de 01/12/2021 a 02/12/2021) 12hrs{" "}
                            </li>
                            <li>
                              JavaScript para Web: Crie páginas dinâmicas (de
                              08/02/2022 a 07/06/2022) 10hrs
                            </li>
                          </Accordion.Content>
                        </Accordion.Item>
                      </Accordion.Root>
                      <Accordion.Root type="single" collapsible>
                        <Accordion.Item value="item-1">
                          <Accordion.Header>
                            <Accordion.Trigger>
                              <div className="flex items-center group">
                                <span className="w-1 h-5 mr-1 bg-lime-500 group-hover:w-2 duration-150" />
                                <p
                                  className="font-semibold uppercase text-[#085EC5]"
                                  title="Clique aqui para expandir os cursos"
                                >
                                  Data Science
                                </p>
                              </div>
                              <div className="flex flex-col items-start">
                                <p className="ml-1 text-xs opacity-50">
                                  Clique acima para ver todos os cursos ou{" "}
                                  <a
                                    href="https://cursos.alura.com.br/user/humbertojuridico2016/fullCertificate/e45b2fca854cd6585245e0981962422f"
                                    target="blank"
                                    title="Clique para ir para página de validação dos certificados"
                                    className="text-blue-500 underline"
                                  >
                                    clique aqui
                                  </a>{" "}
                                  para validar os cursos na Alura
                                </p>
                                <p className="my-2">
                                  Data Science (07/2021 a 03/2022) 76hs{" "}
                                </p>
                              </div>
                            </Accordion.Trigger>
                          </Accordion.Header>
                          <Accordion.Content className="flex flex-col gap-2 opacity-80">
                            <p>
                              Excel: simulação e análise de cenários (de
                              12/01/2022 a 10/03/2022) 6hrs
                            </p>
                            <p>
                              Excel: domine o editor de planilhas (de 29/07/2021
                              a 21/02/2022) 10hrs
                            </p>
                            <p>
                              Funções com Excel: operações matemáticas e filtros
                              (de 09/02/2022 a 25/02/2022) 10hrs
                            </p>
                            <p>
                              Excel procv: lógica booleana e busca por valores
                              (de 30/07/2021 a 16/09/2021) 12hrs
                            </p>
                            <p>
                              Excel: tabelas dinâmicas e dashboards (de
                              27/07/2021 a 28/07/2021) 10hrs
                            </p>
                            <p>
                              Excel: criação de macros e automatização de
                              tarefas (de 16/02/2022 a 27/02/2022) 12hrs
                            </p>
                            <p>
                              Excel: personalizando e automatizando tarefas com
                              VBA (de 04/01/2022 a 04/03/2022) 8hrs
                            </p>
                            <p>
                              Power BI Desktop: construindo meu primeiro
                              dashboard (de 29/07/2021 a 02/08/2021) 8hrs
                            </p>
                          </Accordion.Content>
                        </Accordion.Item>
                      </Accordion.Root>
                      <Accordion.Root type="single" collapsible>
                        <Accordion.Item value="item-1">
                          <Accordion.Header>
                            <Accordion.Trigger>
                              <div className="flex items-center group">
                                <span className="w-1 h-5 mr-1 bg-red-400 group-hover:w-2 duration-150" />
                                <p
                                  className="text-base font-semibold uppercase text-[#085EC5]"
                                  title="Clique aqui para expandir os cursos"
                                >
                                  DevOps
                                </p>
                              </div>
                              <div className="flex flex-col items-start">
                                <p className="ml-1 text-xs opacity-50">
                                  {" "}
                                  Clique acima para ver todos os cursos ou{" "}
                                  <a
                                    href="https://cursos.alura.com.br/user/humbertojuridico2016/fullCertificate/e45b2fca854cd6585245e0981962422f"
                                    target="blank"
                                    title="Clique para ir para página de validação dos certificados"
                                    className="text-blue-500 underline"
                                  >
                                    clique aqui
                                  </a>{" "}
                                  para validar os cursos na Alura
                                </p>
                                <p className="my-2">DevOps (06/2022) 10hs</p>
                              </div>
                            </Accordion.Trigger>
                          </Accordion.Header>
                          <Accordion.Content className="flex flex-col gap-2 opacity-80">
                            <p>
                              Redes parte 1: conceitos e prática (de 25/05/2022
                              a 02/06/2022) 10hrs
                            </p>
                          </Accordion.Content>
                        </Accordion.Item>
                      </Accordion.Root>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
