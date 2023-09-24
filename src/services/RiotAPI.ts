import axios from "axios";

const api = "https://br1.api.riotgames.com/";
const token = "RGAPI-73834842-8f0b-4288-9902-2842759cc9ca";

export async function findSummoner(name: string) {
  const { data } = await axios.get<any>(
    `${api}lol/summoner/v4/summoners/by-name/${name}?api_key=${token}`
  );

  const response = await axios.get(
    `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${data.puuid}/ids?start=0&count=20&api_key=${token}`
  );

  const matchs = response.data;
  const infoMat = [] as any[];

  matchs.map(async (el: string) => {
    const mat = await axios.get(
      `https://americas.api.riotgames.com/lol/match/v5/matches/${el}?api_key=${token}`
    );
    infoMat.push(mat);
  });

  return { user: data, matchs: infoMat };
}
