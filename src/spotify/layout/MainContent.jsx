import { Header, PlaylistsShowsContent, HomeContent, ArtistContent } from "../components/mainContent";
import { useGetDataUrl } from "../hooks";
import { Search } from "../components/library";

export const MainContent = () => {
	const { entity } = useGetDataUrl();

	let content;
	if (!entity) content = <HomeContent></HomeContent>
	else if (entity === 'show' || entity === 'playlist') content = <PlaylistsShowsContent></PlaylistsShowsContent>
	else if (entity === 'artist') content = <ArtistContent></ArtistContent>
	else if (entity === 'search') content = <Search></Search>

	return (
		<main className="main flex flex-col bg-l-base-secondary dark:bg-base-secondary bg-gradient-to-b from-emerald-100 dark:from-fuchsia-900 rounded-lg h-auto">
			<Header></Header>
			<div className="text-l-text-primary dark:text-text-primary p-lg overflow-y-scroll">
				{
					content
				}
			</div>
		</main>
	);
};