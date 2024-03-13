import { useQuery } from '@tanstack/react-query';
import { getGames } from '../../requests/popular_games_request';
import { GameCard } from '../../components/GameCard';

export const PopularGames = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['games'],
    queryFn: () => getGames('mario'),
  });
  if (isLoading) return <div>Cargandoooooooo</div>;
  if (error) return 'An error has occurred:' + error.message;
  return (
    <>
      {data.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </>
  );
};
