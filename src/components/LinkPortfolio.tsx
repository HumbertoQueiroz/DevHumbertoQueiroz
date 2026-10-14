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
    <div className="flex justify-between my-4 print:justify-end">
      <div className="flex flex-col gap-2 print:hidden">
        <div className="flex gap-4 opacity-50">
          <p title="Utilizado API Ipify para obter o ip de acesso">{`IP de acesso: ${ip}`}</p>
          <p title="Utilizado API Ipinfo para obter a cidade de acesso">{`Cidade de acesso: ${city} - ${estado}`}</p>
        </div>
        <p title="Manipulação de datas com Javascript">
          {`Bem-vindo ao meu currículo, hoje é ${dateToday}.`}
        </p>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <a
          title="Ir para o meu site"
          href="https://devhumbertoqueiroz.com.br/"
          className="text-sm font-bold text-white bg-[#0f4571] hover:bg-[#386dbd] border-2 border-[#0f4571] hover:border-[#386dbd] py-1 px-2 rounded duration-150 print:hidden"
          target="_blank" rel="noopener noreferrer"
        >
          Meu site <span className="ml-1">&#127760;</span>
        </a>
        <a
          title="Link para página do projeto no GitHub"
          href="https://github.com/HumbertoQueiroz/DevHumbertoQueiroz"
          className="text-sm animate-pulse hover:animate-none font-bold text-cyan-500 hover:bg-cyan-500 hover:text-white border-2 py-1 px-2 rounded border-cyan-500 "
          target="_blank" rel="author noopener noreferrer"
        >
          GitHub <span className="animate-pulse ml-1">&#128640;</span>
        </a>
        <img
          src="/qrcode_portifolio.png"
          alt="QR Code para página do projeto no GitHub"
          title="QR Code para página do projeto no GitHub"
          className="rounded-lg w-32 border-2 border-cyan-500"
        />
      </div>
    </div>
  );
}
