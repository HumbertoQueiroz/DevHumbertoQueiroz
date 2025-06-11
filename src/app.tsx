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
import { ButtonImg } from "./components/ButtonImg";
import { LinkPortfolio } from "./components/LinkPortfolio";
import { ItemList } from "./components/ItemList";
import { ItemListCenter } from "./components/ItemListCenter";
import * as Accordion from "@radix-ui/react-accordion";
import { Skill } from "./components/Skill";

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
    <div className="w-[1044px] lg:w-full  flex justify-center">
      <div className="w-[1044px] flex flex-col">
        <LinkPortfolio />

        <div className="flex justify-center mb-4">
          <div className="w-[1044px]  border flex justify-between">
            {/* _____________________///   CONTAINER BG AZUL  \\\_____________________ */}
            <div className="w-[261px] bg-[#0f4571] text-slate-100 pt-4">
              <Avatar
                urlImg="fotoDevHumbertoQueiroz.JPG"
                alt="Foto do desenvolvedor Humberto Queiroz"
              />
              <div className="mx-4 ml-8">
                <h5 className="mb-4 text-white">
                  {age} anos, solteiro, CNH A e B, disponível para home-office,
                  trabalho presencial ou mudança.
                </h5>
              </div>
              <p className="uppercase mx-2 text-lg font-bold mt-8 mb-2">
                contato 📲
              </p>
              <div className="mx-4 text-sm flex flex-col gap-2">
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
                    text="(65) 9 9645-2787"
                  />
                </a>
              </div>
              <p className="uppercase mx-2 text-lg font-bold mt-6 mb-2">
                Hardskill 💻
              </p>
              <div className="mx-4 text-sm">
                <Skill levelSkill={6} textSkill="JavaScript" />
                <Skill levelSkill={5} textSkill="React" />
                <Skill levelSkill={5} textSkill="HTML" />
                <Skill levelSkill={4} textSkill="Typescript" />
                <Skill levelSkill={4} textSkill="CSS" />
                <Skill levelSkill={4} textSkill="MySQL" />
                <Skill levelSkill={4} textSkill="SQLServer" />
                <Skill levelSkill={3} textSkill="ADVPL" />
              </div>
              <p className="uppercase mx-2 text-lg font-bold mt-6 mb-2">
                Softskill 🤵
              </p>
              <div className="mx-4 text-sm">
                <Skill levelSkill={6} textSkill="Comunicação" />
                <Skill levelSkill={6} textSkill="Ética e Moral" />
                <Skill levelSkill={6} textSkill="Organização" />
                <Skill levelSkill={5} textSkill="Trabalho em Equipe" />
                <Skill levelSkill={5} textSkill="Gerência de Tempo" />
              </div>
            </div>
            {/* _____________________///   CONTAINER ESQUERDO/PRINCIPAL  \\\_____________________ */}
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
                  <ButtonImg
                    hasComponent={true}
                    icon={<FileTs size={24} />}
                    text="Typescript"
                    color="text-blue-400"
                  />
                  <ButtonImg
                    hasComponent={true}
                    icon={<Atom size={24} />}
                    text="React"
                    color="text-sky-300"
                  />
                  <ButtonImg
                    hasComponent={false}
                    urlImg="sql.svg"
                    text="MySQL"
                    size="w-4"
                  />
                </div>
                <div className="flex gap-7 my-2">
                  <ButtonImg
                    hasComponent={false}
                    urlImg="javascript.svg"
                    text="JavaScript"
                    size="w-6"
                  />
                  <ButtonImg
                    hasComponent={false}
                    urlImg="html.svg"
                    text="HTML"
                    size="w-5"
                  />
                  <ButtonImg
                    hasComponent={false}
                    urlImg="css.svg"
                    text="CSS"
                    size="w-5"
                  />
                </div>
                <div className="flex gap-6 my-2">
                  <ButtonImg
                    hasComponent={false}
                    urlImg="advpl.png"
                    text="ADVPL"
                    size="w-5"
                  />
                  <ButtonImg
                    hasComponent={false}
                    urlImg="sql.svg"
                    text="SQLServer"
                    size="w-4"
                  />
                </div>
              </div>
              <div className="flex flex-col mx-12 my-4 p-4 border rounded-md">
                <h4 className="text-xl font-bold uppercase my-1">
                  Framework / relacionados
                </h4>
                <div className="flex gap-3 my-4">
                  <ButtonImg
                    hasComponent={false}
                    urlImg="tailwind.png"
                    text="Tailwind"
                    size="w-3"
                  />
                  <ButtonImg
                    hasComponent={false}
                    urlImg="versel.png"
                    text="Versel"
                    size="w-3"
                  />
                  <ButtonImg
                    hasComponent={false}
                    urlImg="bootstrap.png"
                    text="Bootstrap"
                    size="w-3"
                  />
                  <ButtonImg
                    hasComponent={true}
                    icon={<UserCircleCheck size={16} />}
                    text="UX/UI"
                    color="text-purple-600"
                  />
                  <ButtonImg
                    hasComponent={false}
                    urlImg="radix.svg"
                    text="Radix"
                    size="w-3"
                  />
                </div>
                <div className="flex gap-3">
                  <ButtonImg
                    hasComponent={false}
                    urlImg="phosphor-icon.png"
                    text="Phosphor-icon"
                    size="w-3"
                  />
                  <ButtonImg
                    hasComponent={false}
                    urlImg="react-hot-toast.png"
                    text="React Hot Toast"
                    size="w-3"
                  />
                  <ButtonImg
                    hasComponent={false}
                    urlImg="sonner.png"
                    text="Sonner"
                    size="w-3"
                  />
                  <ButtonImg
                    hasComponent={false}
                    urlImg="markdown.png"
                    text="Markdown"
                    size="w-4"
                  />
                  <ButtonImg
                    hasComponent={false}
                    urlImg="javascript.svg"
                    text="JSDoc"
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
                    title="Analista de Suporte"
                    date="02/2025 - Atual"
                    organization="Millenium Software"
                    description="Identificação e correção de erros, suporte técnico aos usuários dos sistemas Millenium, treinamento ao usuário, documentação de manuais ao usuário e teste de software"
                  />
                  <ItemList
                    title="Analista de Desenvolvimento Junior"
                    date="04/2024 - 02/2024"
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
                                  Alura - Data Science (07/2021 a 03/2022) 76hs{" "}
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
                                <p className="my-2">
                                  Alura - DevOps (06/2022) 10hs
                                </p>
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
