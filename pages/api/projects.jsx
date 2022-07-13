export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/957300246315143178/988018361646579762/unknown.png",
      name: "SonSusturucu",
      description:
        "It is a Server Built On Old-Model Tools. We'll Wait For You!",
      link: "http://sonsusturucu.com",
      language: "HTML",
      languageIcon: "./static/techs/html.svg",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/957300246315143178/988018429418151936/unknown.png",
      name: "Pioneer Bot",
      description:
        "Are you ready to throw the best parties with Pioneer, the best and most up-to-date bot?",
      link: "https://pioneer-bot.vercel.app/",
      language: "React.JS",
      languageIcon: "./static/techs/reactjs.svg",
    },
    {
      id: 3,
      image: "https://cdn.discordapp.com/attachments/959462339554467892/996573502796734644/Ekran_goruntusu_2022-07-13_032659.png",
      name: "QR Code Generator",
      description:
        "An app to quickly generate qr code",
      link: "https://karekod.vercel.app/",
      language: "React.JS",
      languageIcon: "./static/techs/reactjs.svg",
    }
   ];
  res.status(200).json(data);
};
