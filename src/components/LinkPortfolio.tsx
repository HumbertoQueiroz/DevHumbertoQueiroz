/**
 * Esse **Componente** cria uma linha superior com boas-vindas, um botão de link para o protifólio e uma imagem do QRCode
 *
 * **Não recebe parametros**
 *
 * @returns {Component} *Type: Componente.*
 */

import { useEffect, useState } from "react";

export function LinkPortfolio() {
  //Data de hoje em formato pt-br
  const dateToday = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  //Utilização de API para acessar Ip e Cidade
  const [city, setCity] = useState("");
  const [estado, setEstado] = useState("");
  const [ip, setIp] = useState("");

  useEffect(() => {
    const fetchIpAndLocation = async () => {
      try {
        // Obter o IP público do usuário usando API Ipify
        const responseIp = await fetch("https://api.ipify.org?format=json");
        const dataIp = await responseIp.json();
        const ip = dataIp.ip;
        setIp(dataIp.ip);

        // Enviar o IP para a API do Ipinfo
        const responseInfo = await fetch(
          `https://ipinfo.io/${ip}?token=0aa50e68c241b3`
        );
        const dataInfo = await responseInfo.json();
        // Extrair a cidade
        setCity(dataInfo.city);
        setEstado(dataInfo.region);
      } catch (error) {
        console.error("Erro ao obter a localização:", error);
      }
    };

    fetchIpAndLocation();
  }, []);

  return (
    <div className="flex justify-between my-4 ">
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 opacity-50">
          <p title="Utilizado API Ipify para obter o ip de acesso">{`IP de acesso: ${ip}`}</p>
          <p title="Utilizado API Ipinfo para obter o cidade de ccesso">{`Cidade de acesso: ${city} - ${estado}`}</p>
        </div>
        <p title="Manipulação de datas com Javascript">
          {`Bem-vindo ao meu currículo, hoje é ${dateToday}.`}
        </p>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <a
          title="Link para página do portifólio do Desenvolvedor Humberto Queiroz"
          rel="author"
          href="https://humbertoqueiroz.github.io/"
          className="text-sm font-bold text-cyan-500 hover:bg-cyan-500 hover:text-white border-2 py-1 px-2 rounded border-cyan-500 "
          target="blank"
        >
          Portfólio <span className="animate-pulse ml-1">&#128640;</span>
        </a>
        <img
          src="/qrcode_portifolio.png"
          alt="QR Code para portifólio"
          title="QR Code para portifólio"
          className="rounded-lg w-32 border-2 border-cyan-500"
        />
      </div>
    </div>
  );
}
