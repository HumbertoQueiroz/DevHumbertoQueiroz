

/**
 * Esse **Componente** cria uma linha superior com boas-vindas, um botão de link para o protifólio e uma imagem do QRCode
 *
 * **Não recebe parametros**
 *
 * @returns {Component} *Type: Componente.*
 */

export function LinkPortifolio() {
  //Data de hoje em formato pt-br
  const dateToday = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });


  function Localization(latitude:number, longitude:number) {
    console.log("Sua Localização: ");
        console.log("Latitude: ", latitude);
        console.log("Longitude: ", longitude);
    
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
    Localization(position.coords.latitude,position.coords.longitude)  
    });
  }

  return (
    <div className="flex justify-between my-4 ">
      <p title="Manipulação de datas com Javascript">
        {`Bem-vindo ao meu currículo, hoje é ${dateToday}.`}
      </p>
      <div className="flex flex-col gap-1 items-center">
        <a
          title="Link para página do portifólio do Desenvolvedor Humberto Queiroz"
          rel="author"
          href="https://humbertoqueiroz.github.io/"
          className="text-sm font-bold text-cyan-500 hover:bg-cyan-500 hover:text-white border-2 py-1 px-2 rounded border-cyan-500 "
          target="blank"
        >
          Portifólio <span className="animate-pulse ml-1">&#128640;</span>
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
